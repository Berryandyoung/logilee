"use strict";

const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");

admin.initializeApp();

const COMTRADE_SUBSCRIPTION_KEY = defineSecret("COMTRADE_SUBSCRIPTION_KEY");
const ALLOWED_ORIGINS = new Set([
  "https://www.logilee.com",
  "https://logilee.com",
  "http://127.0.0.1:8122",
  "http://127.0.0.1:8123",
  "http://localhost:8122",
  "http://localhost:8123"
]);
const COMTRADE_BASE = "https://comtradeapi.un.org";
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;
const YEARS = Array.from({ length: 16 }, (_, index) => String(2025 - index));
const FLOWS = { export: "X", import: "M" };
const FLOW_LABELS = { X: "export", M: "import" };

let referenceCache = null;
let referenceCacheTime = 0;
const memoryCache = new Map();

function setCors(req, res) {
  const origin = req.get("origin");
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    res.set("Access-Control-Allow-Origin", origin);
    res.set("Vary", "Origin");
  }
  res.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
}

function json(res, status, payload) {
  res.status(status).json(payload);
}

function cleanIso(value) {
  return String(value || "").trim().toUpperCase();
}

function cleanHs(value) {
  return String(value || "").trim().replace(/\D/g, "");
}

function validYear(value) {
  return YEARS.includes(String(value || ""));
}

function validHs(value) {
  return /^(?:\d{2}|\d{4}|\d{6})$/.test(value);
}

async function fetchJson(url, options = {}, timeoutMs = 15000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    const text = await response.text();
    let data = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = { raw: text };
    }
    if (!response.ok) {
      const retryAfter = Number(response.headers.get("retry-after") || 0);
      const message = data?.message || data?.error || `HTTP ${response.status}`;
      const error = new Error(message);
      error.status = response.status;
      error.retryAfter = retryAfter;
      throw error;
    }
    return data;
  } finally {
    clearTimeout(timer);
  }
}

async function fetchWithRetry(url, options = {}) {
  let lastError = null;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      return await fetchJson(url, options, 18000);
    } catch (error) {
      lastError = error;
      if (![429, 500, 502, 503, 504].includes(error.status) || attempt === 2) break;
      const waitMs = Math.max(error.retryAfter * 1000 || 0, 500 * Math.pow(2, attempt));
      await new Promise((resolve) => setTimeout(resolve, waitMs));
    }
  }
  throw lastError;
}

async function loadReferences() {
  if (referenceCache && Date.now() - referenceCacheTime < 24 * 60 * 60 * 1000) return referenceCache;
  const [reporters, partners] = await Promise.all([
    fetchWithRetry(`${COMTRADE_BASE}/files/v1/app/reference/Reporters.json`),
    fetchWithRetry(`${COMTRADE_BASE}/files/v1/app/reference/partnerAreas.json`)
  ]);
  const reporterByIso = new Map();
  const partnerByIso = new Map();
  const shouldUseReference = (existing, candidate) => {
    if (!existing) return true;
    if (candidate.expired && !existing.expired) return false;
    if (!candidate.expired && existing.expired) return true;
    return candidate.effective > existing.effective;
  };
  (reporters.results || []).forEach((item) => {
    const iso = cleanIso(item.reporterCodeIsoAlpha2);
    if (!iso || iso.length !== 2 || item.isGroup) return;
    const candidate = {
      iso,
      code: String(item.reporterCode),
      name: item.reporterDesc || item.text || iso,
      effective: Date.parse(item.entryEffectiveDate || "1900-01-01T00:00:00") || 0,
      expired: Boolean(item.entryExpiredDate)
    };
    if (shouldUseReference(reporterByIso.get(iso), candidate)) reporterByIso.set(iso, candidate);
  });
  (partners.results || []).forEach((item) => {
    const iso = cleanIso(item.PartnerCodeIsoAlpha2);
    if (!iso || iso.length !== 2 || item.isGroup) return;
    const candidate = {
      iso,
      code: String(item.PartnerCode),
      name: item.PartnerDesc || item.text || iso,
      effective: Date.parse(item.entryEffectiveDate || "1900-01-01T00:00:00") || 0,
      expired: Boolean(item.entryExpiredDate)
    };
    if (shouldUseReference(partnerByIso.get(iso), candidate)) partnerByIso.set(iso, candidate);
  });
  referenceCache = { reporterByIso, partnerByIso };
  referenceCacheTime = Date.now();
  return referenceCache;
}

async function readCache(key) {
  const memory = memoryCache.get(key);
  if (memory && Date.now() - memory.time < CACHE_TTL_MS) return { ...memory.payload, cache: { ...memory.payload.cache, hit: true, backend: memory.payload.cache.backend } };
  try {
    const snapshot = await admin.firestore().collection("globalTradeCache").doc(key).get();
    if (!snapshot.exists) return null;
    const data = snapshot.data();
    if (!data || Date.now() - Number(data.time || 0) > CACHE_TTL_MS) return null;
    return { ...data.payload, cache: { ...data.payload.cache, hit: true, backend: "firestore" } };
  } catch {
    return null;
  }
}

async function writeCache(key, payload) {
  const cached = { ...payload, cache: { ...payload.cache, hit: false, backend: "firestore", ttlHours: 24 } };
  memoryCache.set(key, { time: Date.now(), payload: cached });
  try {
    await admin.firestore().collection("globalTradeCache").doc(key).set({
      time: Date.now(),
      payload: cached
    });
  } catch {
    const memoryOnly = { ...payload, cache: { ...payload.cache, hit: false, backend: "memory", ttlHours: 24 } };
    memoryCache.set(key, { time: Date.now(), payload: memoryOnly });
  }
}

function recordValue(record) {
  const value = Number(record.primaryValue ?? record.fobvalue ?? record.cifvalue);
  return Number.isFinite(value) ? value : null;
}

function aggregateRows(rows) {
  const map = new Map();
  rows.forEach((record) => {
    const year = String(record.refYear || record.period || "");
    const flow = FLOW_LABELS[record.flowCode] || "";
    if (!year || !flow) return;
    const value = recordValue(record);
    if (!Number.isFinite(value)) return;
    const key = `${year}|${flow}`;
    const existing = map.get(key) || {
      year,
      flow,
      value: 0,
      quantity: null,
      quantityUnit: record.qtyUnitAbbr || "",
      netWeight: null,
      classification: record.classificationCode || "HS"
    };
    existing.value += value;
    const qty = Number(record.qty);
    if (Number.isFinite(qty) && qty > 0 && (!existing.quantityUnit || existing.quantityUnit === record.qtyUnitAbbr)) {
      existing.quantity = (existing.quantity || 0) + qty;
      existing.quantityUnit = record.qtyUnitAbbr || existing.quantityUnit;
    }
    const net = Number(record.netWgt);
    if (Number.isFinite(net) && net > 0) existing.netWeight = (existing.netWeight || 0) + net;
    map.set(key, existing);
  });
  return [...map.values()].sort((a, b) => Number(b.year) - Number(a.year) || (a.flow === "export" ? -1 : 1));
}

function byFlow(rows, year, flow) {
  return rows.find((row) => row.year === String(year) && row.flow === flow) || null;
}

function pct(current, previous) {
  if (!Number.isFinite(current) || !Number.isFinite(previous) || previous === 0) return null;
  return ((current - previous) / previous) * 100;
}

exports.globalTradeExplorer = onRequest({
  region: "us-central1",
  cors: false,
  secrets: [COMTRADE_SUBSCRIPTION_KEY],
  timeoutSeconds: 60,
  memory: "256MiB"
}, async (req, res) => {
  setCors(req, res);
  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }
  if (req.method !== "GET") {
    json(res, 405, { error: "method_not_allowed" });
    return;
  }

  const secret = COMTRADE_SUBSCRIPTION_KEY.value();
  if (!secret) {
    json(res, 503, { error: "backend_not_configured", message: "UN Comtrade subscription key is not configured." });
    return;
  }

  const reporterIso = cleanIso(req.query.reporter);
  const partnerIso = cleanIso(req.query.partner || "WORLD");
  const hs = cleanHs(req.query.hs);
  const year = String(req.query.year || YEARS[0]);
  const flow = String(req.query.flow || "export").toLowerCase();
  if (!validHs(hs)) {
    json(res, 400, { error: "invalid_hs", message: "HS code must be 2, 4, or 6 digits." });
    return;
  }
  if (!validYear(year)) {
    json(res, 400, { error: "invalid_year", message: "Year is outside the supported annual range." });
    return;
  }
  if (!FLOWS[flow]) {
    json(res, 400, { error: "invalid_flow", message: "Flow must be export or import." });
    return;
  }

  let references;
  try {
    references = await loadReferences();
  } catch (error) {
    json(res, 502, { error: "upstream_unavailable", message: "UN Comtrade reference data is temporarily unavailable." });
    return;
  }
  const reporter = references.reporterByIso.get(reporterIso);
  const partner = partnerIso === "WORLD" ? { iso: "WORLD", code: "0", name: "World" } : references.partnerByIso.get(partnerIso);
  if (!reporter) {
    json(res, 400, { error: "unsupported_reporter", message: "Reporter is not supported by UN Comtrade annual HS data." });
    return;
  }
  if (!partner) {
    json(res, 400, { error: "unsupported_partner", message: "Partner is not supported by UN Comtrade annual HS data." });
    return;
  }

  const numericYear = Number(year);
  const trendYears = YEARS.filter((item) => Number(item) <= numericYear).slice(0, 5).reverse();
  const cacheKey = `v7_${reporterIso}_${partnerIso}_${hs}_${year}`.toLowerCase();
  const cached = await readCache(cacheKey);
  if (cached) {
    json(res, 200, cached);
    return;
  }

  const params = new URLSearchParams({
    reporterCode: reporter.code,
    partnerCode: partner.code,
    cmdCode: hs,
    flowCode: "X,M",
    period: trendYears.join(","),
    partner2Code: "0",
    customsCode: "C00",
    motCode: "0",
    breakdownMode: "classic",
    includeDesc: "true",
    maxRecords: "250000",
    format: "json"
  });
  const url = `${COMTRADE_BASE}/data/v1/get/C/A/HS?${params.toString()}`;
  try {
    let data = await fetchWithRetry(url, {
      headers: {
        "Ocp-Apim-Subscription-Key": secret,
        "User-Agent": "LOGILEE Global Trade Explorer"
      }
    });
    if (!Array.isArray(data?.data) || data.data.length === 0) {
      const fallbackRows = [];
      let fallbackCount = 0;
      for (const itemYear of trendYears) {
        for (const itemFlow of ["X", "M"]) {
          const fallbackParams = new URLSearchParams({
            reporterCode: reporter.code,
            partnerCode: partner.code,
            cmdCode: hs,
            flowCode: itemFlow,
            period: itemYear,
            partner2Code: "0",
            customsCode: "C00",
            motCode: "0",
            breakdownMode: "classic",
            includeDesc: "true",
            maxRecords: "1000",
            format: "json"
          });
          const fallbackData = await fetchWithRetry(`${COMTRADE_BASE}/data/v1/get/C/A/HS?${fallbackParams.toString()}`, {
            headers: {
              "Ocp-Apim-Subscription-Key": secret,
              "User-Agent": "LOGILEE Global Trade Explorer"
            }
          });
          fallbackCount += Number(fallbackData?.count || 0);
          if (Array.isArray(fallbackData?.data)) fallbackRows.push(...fallbackData.data);
        }
      }
      let fallbackMode = "per-year-flow";
      if (!fallbackRows.length) {
        const previewRows = [];
        let previewCount = 0;
        for (const itemYear of trendYears) {
          for (const itemFlow of ["X", "M"]) {
            const previewParams = new URLSearchParams({
              reporterCode: reporter.code,
              partnerCode: partner.code,
              cmdCode: hs,
              flowCode: itemFlow,
              period: itemYear,
              partner2Code: "0",
              customsCode: "C00",
              motCode: "0",
              maxRecords: "1000",
              format: "json"
            });
            const previewData = await fetchWithRetry(`${COMTRADE_BASE}/public/v1/preview/C/A/HS?${previewParams.toString()}`);
            previewCount += Number(previewData?.count || 0);
            if (Array.isArray(previewData?.data)) previewRows.push(...previewData.data);
          }
        }
        if (previewRows.length) {
          fallbackRows.push(...previewRows);
          fallbackCount = previewCount;
          fallbackMode = "preview-aggregate";
        }
      }
      data = { ...data, data: fallbackRows, count: fallbackCount, fallback: fallbackMode };
    }
    const rows = aggregateRows(data?.data || []);
    const currentExport = byFlow(rows, year, "export");
    const currentImport = byFlow(rows, year, "import");
    const selectedCurrent = byFlow(rows, year, flow);
    const selectedPrevious = byFlow(rows, String(numericYear - 1), flow);
    const payload = {
      query: { reporter: reporterIso, partner: partnerIso, hs, year, flow },
      labels: { reporter: reporter.name, partner: partner.name },
      current: {
        exportValue: currentExport?.value ?? null,
        importValue: currentImport?.value ?? null,
        tradeBalance: Number.isFinite(currentExport?.value) && Number.isFinite(currentImport?.value) ? currentExport.value - currentImport.value : null,
        selectedFlowValue: selectedCurrent?.value ?? null
      },
      yoy: {
        flow,
        value: pct(selectedCurrent?.value, selectedPrevious?.value),
        currentValue: selectedCurrent?.value ?? null,
        previousValue: selectedPrevious?.value ?? null,
        previousYear: String(numericYear - 1)
      },
      trend: trendYears.map((item) => ({
        year: item,
        exportValue: byFlow(rows, item, "export")?.value ?? null,
        importValue: byFlow(rows, item, "import")?.value ?? null
      })),
      rows,
      metadata: {
        source: "UN Comtrade",
        api: "data/v1/get/C/A/HS",
        classification: "HS combined annual data",
        unit: "USD",
        referenceYear: year,
        accessedAt: new Date().toISOString(),
        recordCount: Number(data?.count || rows.length || 0),
        requestMode: data?.fallback || "bulk",
        note: "HS combined data can include reported or converted classifications; compare HS definitions across years with care."
      },
      cache: { hit: false, backend: "firestore", ttlHours: 24 }
    };
    await writeCache(cacheKey, payload);
    json(res, 200, payload);
  } catch (error) {
    const status = error.status === 429 ? 429 : error.status === 401 ? 502 : 502;
    json(res, status, {
      error: error.status === 429 ? "rate_limited" : "upstream_unavailable",
      message: error.status === 429 ? "UN Comtrade is rate limited. Please try again later." : "UN Comtrade data is temporarily unavailable."
    });
  }
});

exports.hsTariffLookup = onRequest({
  region: "us-central1",
  cors: false,
  timeoutSeconds: 30,
  memory: "256MiB"
}, async (req, res) => {
  setCors(req, res);
  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }
  if (req.method !== "GET") {
    json(res, 405, { error: "method_not_allowed" });
    return;
  }

  const country = cleanIso(req.query.country || "US");
  const hs = cleanHs(req.query.hscode || req.query.hs);
  if (country !== "US") {
    json(res, 400, { error: "unsupported_country", message: "Only official HTSUS candidate lookup is enabled." });
    return;
  }
  if (!/^\d{6}$/.test(hs)) {
    json(res, 400, { error: "invalid_hs", message: "National tariff candidates require a 6 digit HS subheading." });
    return;
  }

  const cacheKey = `hs_tariff_v1_us_${hs}`.toLowerCase();
  const cached = await readCache(cacheKey);
  if (cached) {
    json(res, 200, cached);
    return;
  }

  try {
    const data = await fetchWithRetry(`https://hts.usitc.gov/reststop/search?keyword=${encodeURIComponent(hs)}`, {
      headers: { "User-Agent": "LOGILEE HS Code Lookup" }
    });
    const candidates = (Array.isArray(data) ? data : [])
      .map((row) => ({
        code: String(row.htsno || row.htsNo || row.code || "").trim(),
        description: String(row.description || row.desc || "").trim(),
        general: String(row.general || "").trim()
      }))
      .filter((row) => row.code.replace(/\D/g, "").startsWith(hs))
      .sort((a, b) => a.code.localeCompare(b.code))
      .slice(0, 80);
    const payload = {
      query: { country, hscode: hs },
      source: { name: "USITC HTSUS", url: `https://hts.usitc.gov/?query=${encodeURIComponent(hs)}` },
      candidates,
      metadata: { accessedAt: new Date().toISOString(), sourceEndpoint: "https://hts.usitc.gov/reststop/search", note: "Candidate tariff lines are official HTSUS search results filtered by the selected HS6 prefix." },
      cache: { hit: false, backend: "firestore", ttlHours: 24 }
    };
    await writeCache(cacheKey, payload);
    json(res, 200, payload);
  } catch (error) {
    json(res, 502, { error: "upstream_unavailable", message: "USITC HTSUS is temporarily unavailable." });
  }
});
