const LOGILEE = {
  ko: {
    searchPlaceholder: "물류 용어, 도구, 항만, 문서를 검색하세요",
    noResult: "No results found.",
    copied: "결과를 복사했습니다.",
    external: "공식 조회 페이지로 이동합니다. LOGILEE는 실제 추적 상태를 임의로 생성하지 않습니다.",
    invalid: "값을 올바르게 입력해 주세요.",
    recent: "최근 조회"
  },
  en: {
    searchPlaceholder: "Search terms, tools, ports, documents",
    noResult: "No results found. Try FOB, CBM, B/L, Busan Port, or Incoterms.",
    copied: "Result copied.",
    external: "Opening the official tracking page. LOGILEE does not invent tracking status.",
    invalid: "Please enter valid values.",
    recent: "Recent lookups"
  }
};
const searchIndex = {
  ko: [
    { type: "Tracking", title: "Container Tracking", summary: "컨테이너 번호로 공식 조회 페이지를 확인합니다.", url: "track.html", keywords: "container tracking container number 컨테이너 번호 추적" },
    { type: "Tracking", title: "B/L Tracking", summary: "Bill of Lading 번호로 선적 조회를 시작합니다.", url: "track.html", keywords: "bl bill of lading 선하증권 tracking" },
    { type: "Tracking", title: "Air Waybill Tracking", summary: "AWB 번호 기반 항공화물 조회 페이지로 이동합니다.", url: "track.html", keywords: "awb air waybill 항공화물 tracking" },
    { type: "Tool", title: "CBM Calculator", summary: "화물 부피, 수량, 중량을 입력해 총 CBM을 계산합니다.", url: "cbm.html", keywords: "cbm calculator 부피 계산 박스" },
    { type: "Tool", title: "Currency Converter", summary: "Frankfurter 환율 데이터로 주요 통화를 변환합니다.", url: "currency-converter.html", keywords: "currency converter 환율 계산기 exchange rate" },
    { type: "Tool", title: "Business Day Calculator", summary: "주말과 공휴일을 제외해 예상 영업일을 계산합니다.", url: "business-day.html", keywords: "business day working day 영업일 공휴일" },
    { type: "Tool", title: "HS Code Lookup", summary: "품목분류와 HS Code 검색 페이지로 이동합니다.", url: "../hscode.html", keywords: "hs code hscode 품목분류 관세" },
    { type: "Guide", title: "Incoterms 2020", summary: "무역 조건별 비용과 위험 이전 기준을 확인합니다.", url: "../incoterms-2020.html", keywords: "incoterms fob cif fca 인코텀즈" },
    { type: "Dictionary", title: "FOB · Free On Board", summary: "수출자가 본선 적재까지 책임지는 해상 운송 조건입니다.", url: "dictionary.html#fob", keywords: "fob free on board" },
    { type: "Port", title: "Port of Busan", summary: "부산항 정보 페이지로 이동합니다.", url: "ports.html", keywords: "busan port krpus 부산항 항만" },
    { type: "Country", title: "Country Guides", summary: "국가별 무역과 물류 정보 페이지로 이동합니다.", url: "countries.html", keywords: "country guide vietnam 국가 베트남 수출" },
    { type: "Trade Data", title: "Country Trade Profile", summary: "World Bank 지표로 국가별 무역 프로필을 확인합니다.", url: "country-trade-profile.html", keywords: "country trade profile world bank gdp exports imports" },
    { type: "Trade Data", title: "EU Trade Explorer", summary: "Eurostat 공식 무역 통계를 조회합니다.", url: "eu-trade-explorer.html", keywords: "eurostat eu trade statistics 무역 통계" },
    { type: "Trade Data", title: "Global Trade Holiday Calendar", summary: "주요 무역국 공휴일을 확인합니다.", url: "holidays.html", keywords: "holiday calendar public holidays 공휴일" },
    { type: "Document", title: "Commercial Invoice", summary: "무역 문서 허브로 이동합니다.", url: "documents.html", keywords: "invoice commercial document" },
    { type: "News", title: "Latest News", summary: "LOGILEE 뉴스 페이지로 이동합니다.", url: "news.html", keywords: "news rss market logistics trade 뉴스" }
  ],
  en: [
    { type: "Tracking", title: "Container Tracking", summary: "Start a carrier or official lookup by container number.", url: "track.html", keywords: "container tracking container number" },
    { type: "Tracking", title: "B/L Tracking", summary: "Start a shipment lookup by Bill of Lading number.", url: "track.html", keywords: "bl bill of lading tracking" },
    { type: "Tracking", title: "Air Waybill Tracking", summary: "Open the air cargo tracking workflow.", url: "track.html", keywords: "awb air waybill air cargo tracking" },
    { type: "Tool", title: "CBM Calculator", summary: "Calculate cargo volume from dimensions, quantity, and weight.", url: "cbm.html", keywords: "cbm calculator carton volume" },
    { type: "Tool", title: "Currency Converter", summary: "Convert major trade currencies using Frankfurter data.", url: "currency-converter.html", keywords: "currency converter exchange rate fx" },
    { type: "Tool", title: "Business Day Calculator", summary: "Calculate dates excluding weekends and public holidays.", url: "business-day.html", keywords: "business day working day holiday calculator" },
    { type: "Tool", title: "HS Code Lookup", summary: "Find HS codes and tariff classifications.", url: "../hscode-en.html", keywords: "hs code hscode tariff classification" },
    { type: "Guide", title: "Incoterms 2020", summary: "Compare cost and risk transfer by trade term.", url: "../incoterms-2020-en.html", keywords: "incoterms fob cif fca trade terms" },
    { type: "Dictionary", title: "FOB · Free On Board", summary: "A sea freight term where the seller is responsible until goods are loaded on board.", url: "dictionary.html#fob", keywords: "fob free on board" },
    { type: "Tool", title: "Shipment Tracking", summary: "Open official carrier tracking pages for courier, B/L, container, and air cargo.", url: "track.html", keywords: "tracking bl container dhl fedex ups" },
    { type: "Port", title: "Port of Busan", summary: "Open the port information page.", url: "ports.html", keywords: "busan port krpus korea" },
    { type: "Country", title: "Country Guides", summary: "Open country trade and logistics information.", url: "countries.html", keywords: "country guide vietnam export import" },
    { type: "Trade Data", title: "Country Trade Profile", summary: "Review World Bank indicators by country.", url: "country-trade-profile.html", keywords: "country trade profile world bank gdp exports imports" },
    { type: "Trade Data", title: "EU Trade Explorer", summary: "Search official Eurostat trade statistics.", url: "eu-trade-explorer.html", keywords: "eurostat eu trade statistics" },
    { type: "Trade Data", title: "Global Trade Holiday Calendar", summary: "Check public holidays in major trading countries.", url: "holidays.html", keywords: "holiday calendar public holidays" },
    { type: "Document", title: "Commercial Invoice", summary: "Open the document hub for trade paperwork.", url: "documents.html", keywords: "invoice commercial document" },
    { type: "News", title: "Latest News", summary: "Open LOGILEE news and insights.", url: "news.html", keywords: "news rss market logistics trade" }
  ]
};
const terms = {
  ko: [
    { id: "fob", term: "FOB", name: "Free On Board", category: "Trade", definition: "해상 운송에서 수출자가 화물을 본선에 적재할 때까지의 비용과 위험을 부담하는 조건입니다.", example: "부산항에서 FOB 조건으로 계약했다면 매수인은 본선 적재 이후의 해상 운임과 보험을 검토합니다.", related: ["FCA", "CFR", "CIF"] },
    { id: "bl", term: "B/L", name: "Bill of Lading", category: "Documentation", definition: "운송인이 화물 수령 또는 선적을 증명하기 위해 발행하는 운송 문서입니다.", example: "수입 통관과 화물 인도 과정에서 B/L 번호가 자주 필요합니다.", related: ["Sea Waybill", "Arrival Notice"] },
    { id: "chargeable-weight", term: "Chargeable Weight", name: "운임중량", category: "Air", definition: "실중량과 부피중량 중 운임 산정에 적용하는 중량입니다.", example: "항공화물은 가볍지만 부피가 크면 운임중량이 실제 중량보다 클 수 있습니다.", related: ["Dimensional Weight", "CBM"] },
    { id: "hs-code", term: "HS Code", name: "품목분류번호", category: "Customs", definition: "국제 무역 상품 분류에 사용하는 코드로 관세와 규제 확인의 출발점입니다.", example: "같은 제품도 재질과 용도에 따라 HS Code가 달라질 수 있습니다.", related: ["Customs Clearance", "Duty"] }
  ],
  en: [
    { id: "fob", term: "FOB", name: "Free On Board", category: "Trade", definition: "A sea freight term where the seller covers cost and risk until goods are loaded on board.", example: "Under FOB Busan, the buyer usually reviews ocean freight and insurance after loading.", related: ["FCA", "CFR", "CIF"] },
    { id: "bl", term: "B/L", name: "Bill of Lading", category: "Documentation", definition: "A transport document issued by a carrier to evidence cargo receipt or shipment.", example: "The B/L number is often used during customs clearance and cargo release.", related: ["Sea Waybill", "Arrival Notice"] },
    { id: "chargeable-weight", term: "Chargeable Weight", name: "Chargeable Weight", category: "Air", definition: "The weight used to rate freight, usually the greater of actual and dimensional weight.", example: "Light but bulky air cargo can be charged by dimensional weight.", related: ["Dimensional Weight", "CBM"] },
    { id: "hs-code", term: "HS Code", name: "Harmonized System Code", category: "Customs", definition: "A product classification code used as a starting point for customs duty and compliance checks.", example: "Material and use can change the HS classification for similar products.", related: ["Customs Clearance", "Duty"] }
  ]
};
function currentLang() {
  return document.documentElement.lang && document.documentElement.lang.startsWith("ko") ? "ko" : "en";
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function enhanceSidebar() {
  const rail = document.querySelector(".workspace-rail");
  const nav = rail?.querySelector(".workspace-nav");
  if (!rail || !nav || rail.dataset.enhanced === "true") return;

  rail.dataset.enhanced = "true";
  const brand = rail.querySelector(".compact-brand");
  const topToggle = rail.querySelector("[data-sidebar-toggle]");
  const upgrade = rail.querySelector(".upgrade-card");

  const header = document.createElement("div");
  header.className = "sidebar-header";
  if (brand) header.appendChild(brand);
  if (topToggle) header.appendChild(topToggle);
  const drawerClose = document.createElement("button");
  drawerClose.className = "sidebar-drawer-close";
  drawerClose.dataset.sidebarDrawerClose = "";
  drawerClose.type = "button";
  drawerClose.setAttribute("aria-label", "Close menu");
  drawerClose.innerHTML = `<i data-lucide="x"></i>`;
  header.appendChild(drawerClose);
  rail.insertBefore(header, rail.firstChild);

  nav.classList.add("sidebar-nav");
  nav.querySelectorAll("a").forEach((link) => {
    const label = link.textContent.trim().replace(/\s+/g, " ");
    link.dataset.menuLabel = label;
    if (!link.querySelector("span")) {
      const icon = link.querySelector("i, svg");
      const span = document.createElement("span");
      span.textContent = label;
      link.textContent = "";
      if (icon) link.appendChild(icon);
      link.appendChild(span);
    }
  });

  const currentFile = location.pathname.split("/").pop() || "index.html";
  let activeGroupId = "";
  nav.querySelectorAll("a").forEach((link) => {
    const hrefFile = (link.getAttribute("href") || "").split("#")[0].split("?")[0].split("/").pop() || "index.html";
    const isActive = currentFile === hrefFile || (currentFile === "index.html" && link.classList.contains("nav-home"));
    link.classList.toggle("is-active", isActive);
  });

  nav.querySelectorAll("section").forEach((section) => {
    const heading = section.querySelector("h2");
    if (!heading) return;
    const groupId = heading.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
    section.classList.add("nav-group");
    section.dataset.navGroup = groupId;
    const links = [...section.querySelectorAll("a")];
    if (links.some((link) => link.classList.contains("is-active"))) activeGroupId = groupId;

    const trigger = document.createElement("button");
    trigger.className = "nav-group-trigger";
    trigger.type = "button";
    trigger.dataset.accordionTrigger = groupId;
    trigger.setAttribute("aria-expanded", "false");
    trigger.innerHTML = `<span>${heading.textContent.trim()}</span><i data-lucide="chevron-right"></i>`;

    const panel = document.createElement("div");
    panel.className = "nav-group-panel";
    const inner = document.createElement("div");
    inner.className = "nav-group-panel-inner";
    links.forEach((link) => inner.appendChild(link));
    panel.appendChild(inner);
    section.replaceChildren(trigger, panel);
  });

  const footer = document.createElement("div");
  footer.className = "sidebar-footer";
  footer.innerHTML = `
    <div class="sidebar-version">
      <strong>LOGILEE v1.0.0</strong>
      <span>짤 2025 BerryYoung Co., Ltd.</span>
    </div>
  `;
  rail.appendChild(footer);

  if (!document.querySelector("[data-sidebar-overlay]")) {
    const overlay = document.createElement("div");
    overlay.className = "sidebar-overlay";
    overlay.dataset.sidebarOverlay = "";
    document.querySelector(".workspace-shell")?.appendChild(overlay);
  }

  wireSidebarAccordion(activeGroupId);
  requestAnimationFrame(() => {
    nav.querySelector("a.is-active")?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  });
}

function wireSidebarAccordion(activeGroupId) {
  const groups = [...document.querySelectorAll(".nav-group")];
  if (!groups.length) return;

  const key = `logilee-sidebar-groups:${currentLang()}`;
  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem(key) || "null");
  } catch {
    saved = null;
  }

  const state = {};
  groups.forEach((group) => {
    const groupId = group.dataset.navGroup;
    state[groupId] = saved ? Boolean(saved[groupId]) : groupId === activeGroupId;
    if (groupId === activeGroupId) state[groupId] = true;
  });

  const render = () => {
    groups.forEach((group) => {
      const open = Boolean(state[group.dataset.navGroup]);
      const trigger = group.querySelector(".nav-group-trigger");
      group.dataset.open = String(open);
      trigger?.setAttribute("aria-expanded", String(open));
      trigger?.querySelector("i")?.setAttribute("data-lucide", open ? "chevron-down" : "chevron-right");
    });
    refreshIcons();
  };

  groups.forEach((group) => {
    group.querySelector(".nav-group-trigger")?.addEventListener("click", () => {
      const groupId = group.dataset.navGroup;
      state[groupId] = !state[groupId];
      localStorage.setItem(key, JSON.stringify(state));
      render();
    });
  });

  render();
}

function wireMenu() {
  const button = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-mobile-nav]");
  const shell = document.querySelector(".workspace-shell");
  const overlay = document.querySelector("[data-sidebar-overlay]");
  const drawerClose = document.querySelector("[data-sidebar-drawer-close]");
  if (!button) return;

  if (shell && !nav) {
    const closeDrawer = () => {
      shell.classList.remove("sidebar-drawer-open");
      document.body.classList.remove("sidebar-drawer-active");
      button.setAttribute("aria-expanded", "false");
    };
    const openDrawer = () => {
      shell.classList.add("sidebar-drawer-open");
      document.body.classList.add("sidebar-drawer-active");
      button.setAttribute("aria-expanded", "true");
    };
    button.addEventListener("click", () => {
      shell.classList.contains("sidebar-drawer-open") ? closeDrawer() : openDrawer();
    });
    overlay?.addEventListener("click", closeDrawer);
    drawerClose?.addEventListener("click", closeDrawer);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeDrawer();
    });
    document.querySelectorAll(".workspace-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 1180px)").matches) closeDrawer();
      });
    });
    return;
  }

  if (!nav) return;
  button.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(open));
  });
}

function wireSidebarCollapse() {
  const buttons = document.querySelectorAll("[data-sidebar-toggle], [data-sidebar-footer-toggle]");
  const shell = document.querySelector(".workspace-shell");
  if (!buttons.length || !shell) return;
  const updateButtons = () => {
    const collapsed = shell.classList.contains("sidebar-collapsed");
    document.querySelectorAll("[data-sidebar-toggle]").forEach((button) => {
      button.setAttribute("aria-label", collapsed ? "Expand sidebar" : "Collapse sidebar");
      button.innerHTML = `<i data-lucide="${collapsed ? "chevron-right" : "chevron-left"}"></i>`;
    });
    document.querySelectorAll("[data-sidebar-footer-toggle]").forEach((button) => {
      button.querySelector("i")?.setAttribute("data-lucide", collapsed ? "panel-left-open" : "panel-left-close");
      const text = button.querySelector("span");
      if (text) text.textContent = collapsed ? "Expand" : "Collapse";
    });
    refreshIcons();
  };
  buttons.forEach((button) => button.addEventListener("click", () => {
    const collapsed = shell.classList.toggle("sidebar-collapsed");
    localStorage.setItem("logilee-sidebar-collapsed", String(collapsed));
    updateButtons();
  }));
  if (localStorage.getItem("logilee-sidebar-collapsed") === "true") shell.classList.add("sidebar-collapsed");
  updateButtons();
}

function setupLanguageChoice() {
  document.querySelectorAll("[data-lang-choice]").forEach((link) => {
    link.addEventListener("click", () => localStorage.setItem("logilee-lang", link.dataset.langChoice));
  });
}

function setupLanguageMenu() {
  document.querySelectorAll("[data-language-menu]").forEach((menu) => {
    const button = menu.querySelector("button");
    if (!button) return;
    button.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("click", (event) => {
      if (!menu.contains(event.target)) {
        menu.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        menu.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
      }
    });
  });
}

function runSearch(query, lang) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return searchIndex[lang];
  return searchIndex[lang].filter((item) => {
    const haystack = `${item.type} ${item.title} ${item.summary} ${item.keywords}`.toLowerCase();
    return haystack.includes(normalized);
  });
}

function renderResults(target, results, lang) {
  if (!target) return;
  if (!results.length) {
    target.innerHTML = `<div class="empty-state">${LOGILEE[lang].noResult}</div>`;
    return;
  }
  target.innerHTML = results.map((item) => `
    <a class="result-item" href="${item.url}">
      <span class="kicker">${item.type}</span>
      <h3>${item.title}</h3>
      <p class="muted">${item.summary}</p>
    </a>
  `).join("");
}

function resultMarkup(item) {
  return `
    <a class="header-result-item" href="${item.url}">
      <span>${item.type}</span>
      <strong>${item.title}</strong>
      <small>${item.summary}</small>
    </a>
  `;
}

function wireHeaderSearch() {
  const lang = currentLang();
  document.querySelectorAll("[data-header-search]").forEach((form) => {
    const input = form.querySelector("input");
    const results = form.querySelector("[data-header-search-results]");
    if (!input || !results) return;

    const render = () => {
      const q = input.value.trim();
      if (!q) {
        results.innerHTML = "";
        form.classList.remove("has-results");
        return;
      }
      const matches = runSearch(q, lang).slice(0, 5);
      results.innerHTML = matches.length
        ? matches.map(resultMarkup).join("")
        : `<div class="header-result-empty">${lang === "ko" ? "No results found." : "No results found."}</div>`;
      form.classList.add("has-results");
    };

    input.addEventListener("input", render);
    input.addEventListener("focus", render);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const q = input.value.trim();
      if (q) location.href = `search.html?q=${encodeURIComponent(q)}`;
    });
    document.addEventListener("click", (event) => {
      if (!form.contains(event.target)) form.classList.remove("has-results");
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") form.classList.remove("has-results");
    });
  });
}

function wireSearch() {
  const lang = currentLang();
  document.querySelectorAll("[data-search-form]").forEach((form) => {
    const input = form.querySelector("input");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const q = input.value.trim();
      if (!q) return;
      localStorage.setItem("logilee-last-search", q);
      location.href = `search.html?q=${encodeURIComponent(q)}`;
    });
  });
  const results = document.querySelector("[data-search-results]");
  if (results) {
    const input = document.querySelector("[data-search-input]");
    const params = new URLSearchParams(location.search);
    const q = params.get("q") || input?.value || "";
    if (input) input.value = q;
    renderResults(results, runSearch(q, lang), lang);
    input?.addEventListener("input", () => renderResults(results, runSearch(input.value, lang), lang));
  }
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      const input = document.querySelector("[data-search-input], .search-box input");
      input?.focus();
    }
  });
}

function formatKstTime(value) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Seoul"
  }).format(value);
}

function formatRate(value, digits = 2) {
  return Number(value).toLocaleString(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });
}

function fetchWithTimeout(url, options = {}, timeout = 9000) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeout);
  return fetch(url, { ...options, signal: controller.signal })
    .finally(() => window.clearTimeout(timer));
}

async function fetchJson(url, { cacheKey = "", ttl = 30 * 60 * 1000, timeout = 9000 } = {}) {
  if (cacheKey) {
    try {
      const cached = JSON.parse(localStorage.getItem(cacheKey) || "null");
      if (cached && Date.now() - cached.time < ttl) return cached.data;
    } catch {
      localStorage.removeItem(cacheKey);
    }
  }
  const response = await fetchWithTimeout(url, { cache: "no-store" }, timeout);
  if (!response.ok) throw new Error(`API ${response.status}`);
  const data = await response.json();
  if (cacheKey) localStorage.setItem(cacheKey, JSON.stringify({ time: Date.now(), data }));
  return data;
}

function dataError(target, message) {
  if (!target) return;
  target.innerHTML = `<div class="data-empty">${message}</div>`;
}

const TRADE_CURRENCIES = ["USD", "KRW", "EUR", "CNY", "JPY", "GBP", "AUD", "CAD", "SGD", "HKD", "CHF", "INR", "MXN", "THB", "MYR"];

async function getUsdRates() {
  const url = `https://api.frankfurter.dev/v2/rates?base=USD&quotes=${TRADE_CURRENCIES.filter((code) => code !== "USD").join(",")}`;
  const data = await fetchJson(url, { cacheKey: "logilee:fx:usd:v2", ttl: 60 * 60 * 1000 });
  const rates = {};
  if (Array.isArray(data)) {
    data.forEach((item) => {
      const rate = Number(item.rate);
      if (item.quote && Number.isFinite(rate)) rates[item.quote] = rate;
    });
  } else if (data && data.rates) {
    Object.entries(data.rates).forEach(([quote, value]) => {
      const rate = Number(value);
      if (Number.isFinite(rate)) rates[quote] = rate;
    });
  }
  if (!Object.keys(rates).length) throw new Error("Invalid FX response");
  const firstDate = Array.isArray(data) ? data.find((item) => item.date)?.date : data.date;
  return { date: firstDate, base: "USD", rates: { USD: 1, ...rates } };
}

async function loadHomeMarket() {
  const snapshot = document.querySelector("[data-market-snapshot]");
  if (!snapshot) return;
  const status = document.querySelector("[data-market-status]");
  const updated = document.querySelector("[data-market-updated]");
  const lang = currentLang();
  snapshot.innerHTML = `
    <div class="market-section-label">FX</div>
    <div data-market-fx><strong>Exchange Rate</strong><span>Loading...</span></div>
    <div class="market-section-label">Freight</div>
    <div data-market-freight><strong>Freight Market</strong><span>Loading...</span></div>
  `;
  const fxTarget = snapshot.querySelector("[data-market-fx]");
  const freightTarget = snapshot.querySelector("[data-market-freight]");
  status?.classList.remove("soon");
  if (status) status.textContent = "Latest Data";
  if (updated) updated.textContent = "Latest available data";

  try {
    const data = await getUsdRates();
    const rates = data.rates || {};
    const rows = [
      ["USD/KRW", rates.KRW, 2],
      ["USD/CNY", rates.CNY, 4],
      ["USD/JPY", rates.JPY, 2],
      ["EUR/USD", Number.isFinite(rates.EUR) && rates.EUR > 0 ? 1 / rates.EUR : null, 4]
    ].filter((row) => Number.isFinite(row[1]));

    if (!rows.length) throw new Error("No FX rates returned");
    fxTarget.outerHTML = `
      ${rows.map(([label, value, digits]) => `
        <div>
          <strong>${label}</strong>
          <span>${formatRate(value, digits)}</span>
        </div>
      `).join("")}
    `;
  } catch (error) {
    console.warn("Market Snapshot unavailable:", error);
    fxTarget.innerHTML = `<strong>Exchange Rate</strong><span>Market data unavailable</span>`;
  }

  try {
    const freight = await getFreightData();
    const compact = freight.filter((item) => ["tsi_freight", "truck_d11", "rail_frt_intermodal"].includes(item.key));
    freightTarget.outerHTML = compact.map((item) => freightRowMarkup(item, true)).join("");
  } catch (error) {
    console.warn("Freight Snapshot unavailable:", error);
    freightTarget.innerHTML = `<strong>Freight Market</strong><span>Freight data unavailable</span>`;
  }
}

async function wireFreightMarket() {
  const target = document.querySelector("[data-freight-market]");
  if (!target) return;
  target.innerHTML = `<div class="data-empty">Loading latest available freight data...</div>`;
  try {
    const rows = await getFreightData();
    target.innerHTML = `
      <table class="result-table">
        <thead><tr><th>Indicator</th><th>Latest Value</th><th>Previous Value</th><th>Change %</th><th>Unit</th><th>Data Period</th><th>Source</th></tr></thead>
        <tbody>${rows.map((item) => freightRowMarkup(item)).join("")}</tbody>
      </table>
      <p class="muted">Source: U.S. Bureau of Transportation Statistics. Dataset: Transportation Services Index and Seasonally-Adjusted Transportation Data. These are latest available indicators, not real-time market quotes.</p>
    `;
  } catch (error) {
    console.warn("Freight Market unavailable:", error);
    dataError(target, "Freight market data is temporarily unavailable.");
  }
}

function splitNewsTitle(title) {
  const clean = String(title || "").trim();
  const separator = clean.lastIndexOf(" - ");
  if (separator <= 0) return { headline: clean, source: "" };
  return {
    headline: clean.slice(0, separator),
    source: clean.slice(separator + 3)
  };
}

function formatNewsTime(pubDate, lang) {
  if (!pubDate) return "";
  const date = new Date(pubDate);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(lang === "ko" ? "ko-KR" : "en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Seoul"
  }).format(date);
}

async function loadHomeNews() {
  const targets = document.querySelectorAll("[data-home-news]");
  if (!targets.length) return;
  const lang = currentLang();
  const labels = {
    loadingFailed: "News source unavailable.",
    noItems: "No news items available."
  };

  for (const target of targets) {
    const query = target.dataset.newsQuery || (lang === "ko" ? "무역 물류" : "global trade logistics");
    const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=${lang === "ko" ? "ko" : "en"}&gl=${lang === "ko" ? "KR" : "US"}&ceid=${lang === "ko" ? "KR:ko" : "US:en"}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    try {
      const data = await fetchJson(apiUrl, { cacheKey: `logilee:news:${lang}:${query}`, ttl: 20 * 60 * 1000 });
      const items = Array.isArray(data.items) ? data.items.slice(0, 6) : [];
      target.innerHTML = items.length ? items.map((item) => {
        const parsed = splitNewsTitle(item.title);
        const time = formatNewsTime(item.pubDate, lang);
        return `
          <a class="news-item compact-news-item" href="${item.link}" target="_blank" rel="noopener">
            <div>
              <strong>${parsed.headline}</strong>
              <small>${[parsed.source, time].filter(Boolean).join(" · ")}</small>
            </div>
          </a>
        `;
      }).join("") : `<div class="data-empty">${labels.noItems}</div>`;
    } catch (error) {
      console.warn("Homepage news unavailable:", error);
      target.innerHTML = `<div class="data-empty">${labels.loadingFailed}</div>`;
    }
  }
}

function getPostsForCurrentLang() {
  const posts = Array.isArray(window.LOGILEE_POSTS) ? window.LOGILEE_POSTS : [];
  const lang = currentLang();
  return posts
    .filter((post) => post.language === lang)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function postUrl(post) {
  const encodedPath = encodeURI(post.path || "");
  const inArchive = /\/posts\/?$/i.test(location.pathname) || /\/posts\/index\.html$/i.test(location.pathname);
  return `${inArchive ? "../../" : "../"}${encodedPath}`;
}

function formatPostDate(date, lang) {
  const value = new Date(date);
  if (Number.isNaN(value.getTime())) return date || "";
  return new Intl.DateTimeFormat(lang === "ko" ? "ko-KR" : "en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(value);
}

function postThumb(post, compact = false) {
  const label = post.category || "LOGILEE";
  if (post.image) {
    return `
      <div class="posting-thumb${compact ? " posting-thumb--compact" : ""}">
        <img src="${post.image}" alt="${post.imageAlt || post.title}" loading="lazy" width="640" height="360">
        <span>${label}</span>
      </div>
    `;
  }
  return `
    <div class="posting-thumb posting-thumb--fallback${compact ? " posting-thumb--compact" : ""}" role="img" aria-label="${post.imageAlt || post.title}">
      <span>${label}</span>
      <strong>LOGILEE</strong>
    </div>
  `;
}

function renderPostCard(post, lang) {
  return `
    <article class="posting-card" data-category="${post.category}">
      <a href="${postUrl(post)}">
        ${postThumb(post)}
        <div class="posting-card-body">
          <span class="kicker">${post.category}</span>
          <h3>${post.title}</h3>
          <p>${post.description}</p>
          <small>${formatPostDate(post.date, lang)}${post.readingTime ? ` · ${post.readingTime}` : ""}</small>
        </div>
      </a>
    </article>
  `;
}

function setupLatestPosting() {
  const slider = document.querySelector("[data-posting-slider]");
  if (!slider) return;
  const lang = currentLang();
  const posts = getPostsForCurrentLang().slice(0, 5);
  const labels = lang === "ko"
    ? { empty: "표시할 실제 포스팅이 아직 없습니다.", prev: "이전 포스팅", next: "다음 포스팅", slide: "포스팅" }
    : { empty: "No existing posts are available yet.", prev: "Previous post", next: "Next post", slide: "Post" };
  if (!posts.length) {
    slider.innerHTML = `<div class="data-empty">${labels.empty}</div>`;
    return;
  }

  let active = 0;
  let timer = null;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const render = () => {
    const post = posts[active];
    slider.innerHTML = `
      <div class="posting-slider-card">
        <a class="posting-slide-link" href="${postUrl(post)}">
          ${postThumb(post, true)}
          <div class="posting-slide-copy">
            <span class="kicker">${post.category}</span>
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <small>${formatPostDate(post.date, lang)}${post.readingTime ? ` · ${post.readingTime}` : ""}</small>
          </div>
        </a>
        ${posts.length > 1 ? `
          <div class="posting-slider-controls">
            <button type="button" data-posting-prev aria-label="${labels.prev}"><i data-lucide="chevron-left"></i></button>
            <div class="posting-dots" role="tablist" aria-label="Latest posting slides">
              ${posts.map((_, index) => `<button type="button" data-posting-dot="${index}" aria-label="${labels.slide} ${index + 1}" aria-selected="${index === active}"></button>`).join("")}
            </div>
            <button type="button" data-posting-next aria-label="${labels.next}"><i data-lucide="chevron-right"></i></button>
          </div>
        ` : ""}
      </div>
    `;
    refreshIcons();
  };
  const go = (index) => {
    active = (index + posts.length) % posts.length;
    render();
  };
  const stop = () => {
    if (timer) window.clearInterval(timer);
    timer = null;
  };
  const start = () => {
    if (reducedMotion || posts.length < 2 || document.hidden || timer) return;
    timer = window.setInterval(() => go(active + 1), 4000);
  };

  slider.addEventListener("click", (event) => {
    const prev = event.target.closest("[data-posting-prev]");
    const next = event.target.closest("[data-posting-next]");
    const dot = event.target.closest("[data-posting-dot]");
    if (!prev && !next && !dot) return;
    stop();
    if (prev) go(active - 1);
    if (next) go(active + 1);
    if (dot) go(Number(dot.dataset.postingDot));
  });
  slider.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      stop();
      go(active - 1);
    }
    if (event.key === "ArrowRight") {
      stop();
      go(active + 1);
    }
  });
  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("focusin", stop);
  slider.addEventListener("mouseleave", start);
  slider.addEventListener("focusout", start);
  document.addEventListener("visibilitychange", () => {
    document.hidden ? stop() : start();
  });

  render();
  start();
}

function setupPostsArchive() {
  const archive = document.querySelector("[data-posts-archive]");
  if (!archive) return;
  const lang = currentLang();
  const posts = getPostsForCurrentLang();
  const filter = archive.querySelector("[data-post-filter]");
  const grid = archive.querySelector("[data-posts-grid]");
  const allLabel = lang === "ko" ? "전체" : "All";
  const empty = lang === "ko" ? "표시할 실제 포스팅이 아직 없습니다." : "No existing posts are available yet.";
  const categories = [...new Set(posts.map((post) => post.category).filter(Boolean))];
  let active = "all";

  const render = () => {
    const visible = active === "all" ? posts : posts.filter((post) => post.category === active);
    if (filter) {
      filter.innerHTML = [`<button type="button" class="tab${active === "all" ? " is-active" : ""}" data-category-filter="all">${allLabel}</button>`]
        .concat(categories.map((category) => `<button type="button" class="tab${active === category ? " is-active" : ""}" data-category-filter="${category}">${category}</button>`))
        .join("");
    }
    if (grid) {
      grid.innerHTML = visible.length
        ? visible.map((post) => renderPostCard(post, lang)).join("")
        : `<div class="data-empty">${empty}</div>`;
    }
  };

  filter?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category-filter]");
    if (!button) return;
    active = button.dataset.categoryFilter;
    render();
  });

  render();
}
function rowTemplate(lang) {
  const labels = lang === "ko"
    ? ["화물명", "수량", "길이", "너비", "높이", "중량"]
    : ["Cargo", "Qty", "Length", "Width", "Height", "Weight"];
  return `
    <div class="form-grid cargo-row">
      <div class="field"><label>${labels[0]}</label><input value="Box" data-cargo></div>
      <div class="field"><label>${labels[1]}</label><input type="number" min="1" value="10" data-qty></div>
      <div class="field"><label>${labels[2]}</label><input type="number" min="0" value="50" data-length></div>
      <div class="field"><label>${labels[3]}</label><input type="number" min="0" value="40" data-width></div>
      <div class="field"><label>${labels[4]}</label><input type="number" min="0" value="30" data-height></div>
      <div class="field"><label>${labels[5]} kg</label><input type="number" min="0" value="0" data-weight></div>
    </div>
  `;
}

function calculateRows(lang) {
  const unit = document.querySelector("[data-unit]")?.value || "cm";
  const rows = [...document.querySelectorAll(".cargo-row")].map((row) => {
    const qty = Number(row.querySelector("[data-qty]").value);
    let length = Number(row.querySelector("[data-length]").value);
    let width = Number(row.querySelector("[data-width]").value);
    let height = Number(row.querySelector("[data-height]").value);
    const weight = Number(row.querySelector("[data-weight]").value || 0);
    if (!qty || length < 0 || width < 0 || height < 0 || weight < 0) return null;
    if (unit === "cm") {
      length /= 100; width /= 100; height /= 100;
    } else {
      length *= 0.0254; width *= 0.0254; height *= 0.0254;
    }
    const cbm = length * width * height * qty;
    return { cargo: row.querySelector("[data-cargo]").value || "Cargo", qty, weight: weight * qty, cbm };
  }).filter(Boolean);
  const totalCbm = rows.reduce((sum, row) => sum + row.cbm, 0);
  const totalQty = rows.reduce((sum, row) => sum + row.qty, 0);
  const totalWeight = rows.reduce((sum, row) => sum + row.weight, 0);
  const utilization20 = Math.min(100, totalCbm / 28 * 100);
  return { rows, totalCbm, totalQty, totalWeight, utilization20 };
}

function renderCbm(lang) {
  const output = document.querySelector("[data-cbm-output]");
  if (!output) return;
  const data = calculateRows(lang);
  output.innerHTML = `
    <span class="summary-number">${data.totalCbm.toFixed(3)}</span>
    <strong>CBM</strong>
    <p class="muted">${lang === "ko" ? "총 수량" : "Total quantity"} ${data.totalQty} · ${lang === "ko" ? "총 중량" : "Total weight"} ${data.totalWeight.toFixed(1)} kg</p>
    <p class="muted">20GP ${lang === "ko" ? "예상 부피 사용률" : "estimated volume use"} ${util(data.utilization20)}</p>
    <table class="result-table">
      <thead><tr><th>${lang === "ko" ? "화물" : "Cargo"}</th><th>Qty</th><th>CBM</th><th>kg</th></tr></thead>
      <tbody>${data.rows.map((row) => `<tr><td>${row.cargo}</td><td>${row.qty}</td><td>${row.cbm.toFixed(3)}</td><td>${row.weight.toFixed(1)}</td></tr>`).join("")}</tbody>
    </table>
  `;
}

function util(value) {
  return `${Math.round(value)}%`;
}

function wireCbm() {
  const lang = currentLang();
  const rows = document.querySelector("[data-cargo-rows]");
  if (!rows) return;
  rows.innerHTML = rowTemplate(lang);
  renderCbm(lang);
  document.querySelector("[data-add-row]")?.addEventListener("click", () => {
    rows.insertAdjacentHTML("beforeend", rowTemplate(lang));
    renderCbm(lang);
  });
  document.querySelector("[data-sample]")?.addEventListener("click", () => {
    rows.innerHTML = rowTemplate(lang) + rowTemplate(lang);
    const second = rows.querySelectorAll(".cargo-row")[1];
    second.querySelector("[data-cargo]").value = "Carton";
    second.querySelector("[data-qty]").value = "24";
    second.querySelector("[data-length]").value = "60";
    second.querySelector("[data-width]").value = "45";
    second.querySelector("[data-height]").value = "40";
    second.querySelector("[data-weight]").value = "12";
    renderCbm(lang);
  });
  document.querySelector("[data-reset]")?.addEventListener("click", () => {
    rows.innerHTML = rowTemplate(lang);
    renderCbm(lang);
  });
  document.querySelector("[data-copy]")?.addEventListener("click", async () => {
    const data = calculateRows(lang);
    await navigator.clipboard?.writeText(`LOGILEE CBM: ${data.totalCbm.toFixed(3)} CBM / ${data.totalQty} pcs / ${data.totalWeight.toFixed(1)} kg`);
    alert(LOGILEE[lang].copied);
  });
  document.addEventListener("input", (event) => {
    if (event.target.closest(".cargo-row") || event.target.matches("[data-unit]")) renderCbm(lang);
  });
}

const carrierLinks = {
  dhl: "https://www.dhl.com/kr-en/home/tracking.html?tracking-id=",
  fedex: "https://www.fedex.com/fedextrack/?trknbr=",
  ups: "https://www.ups.com/track?tracknum=",
  usps: "https://tools.usps.com/go/TrackConfirmAction?qtc_tLabels1=",
  maersk: "https://www.maersk.com/tracking/",
  msc: "https://www.msc.com/track-a-shipment?bl=",
  hmm: "https://www.hmm21.com/cms/business/ebiz/trackTrace/index.jsp?blNo=",
  cma: "https://www.cma-cgm.com/ebusiness/tracking?SearchBy=BL&Reference="
};

function detectCarrier(value) {
  const code = value.toUpperCase();
  if (code.startsWith("1Z")) return "ups";
  if (/^\d{12}$/.test(code)) return "fedex";
  if (/^\d{10}$/.test(code)) return "dhl";
  if (code.startsWith("MAEU")) return "maersk";
  if (code.startsWith("MED")) return "msc";
  if (code.startsWith("HMM")) return "hmm";
  if (code.startsWith("CMD") || code.startsWith("CMA")) return "cma";
  return "";
}

function wireTracking() {
  const form = document.querySelector("[data-track-form]");
  if (!form) return;
  const lang = currentLang();
  const number = form.querySelector("[data-track-number]");
  const carrier = form.querySelector("[data-carrier]");
  const recent = document.querySelector("[data-recent]");
  const renderRecent = () => {
    const items = JSON.parse(localStorage.getItem("logilee-recent-track") || "[]");
    if (!recent) return;
    recent.innerHTML = items.length ? items.map((item) => `<span class="chip">${item}</span>`).join("") : `<p class="muted">${LOGILEE[lang].recent}: -</p>`;
  };
  number.addEventListener("input", () => {
    const detected = detectCarrier(number.value.replace(/\s+/g, ""));
    if (detected) carrier.value = detected;
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const clean = number.value.replace(/\s+/g, "");
    const selected = carrier.value || detectCarrier(clean);
    if (!clean || !carrierLinks[selected]) {
      alert(LOGILEE[lang].invalid);
      return;
    }
    const items = JSON.parse(localStorage.getItem("logilee-recent-track") || "[]");
    localStorage.setItem("logilee-recent-track", JSON.stringify([clean, ...items.filter((item) => item !== clean)].slice(0, 5)));
    renderRecent();
    alert(LOGILEE[lang].external);
    window.open(carrierLinks[selected] + encodeURIComponent(clean), "_blank", "noopener");
  });
  renderRecent();
}

function wireDictionary() {
  const list = document.querySelector("[data-term-list]");
  const detail = document.querySelector("[data-term-detail]");
  if (!list || !detail) return;
  const lang = currentLang();
  const render = (term) => {
    detail.innerHTML = `
      <span class="kicker">${term.category}</span>
      <h2 id="${term.id}">${term.term}</h2>
      <p class="lead">${term.name}</p>
      <p>${term.definition}</p>
      <div class="notice"><strong>${lang === "ko" ? "실무 예시" : "Practical example"}</strong><br>${term.example}</div>
      <h3>${lang === "ko" ? "관련 용어" : "Related terms"}</h3>
      <div class="chip-row">${term.related.map((item) => `<span class="chip">${item}</span>`).join("")}</div>
      <p class="muted">${lang === "ko" ? "Updated" : "Updated"}: 2026-07-26 · ${lang === "ko" ? "참고 정보입니다. 계약 확정 전 공식 기준을 확인하세요." : "For reference only. Confirm official standards before finalizing contracts."}</p>
    `;
    list.querySelectorAll("button").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.term === term.id)));
  };
  list.innerHTML = terms[lang].map((term) => `<button class="term-button" data-term="${term.id}" aria-pressed="false">${term.term} <span class="muted">${term.name}</span></button>`).join("");
  list.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    render(terms[lang].find((term) => term.id === button.dataset.term));
  });
  const hash = location.hash.replace("#", "");
  render(terms[lang].find((term) => term.id === hash) || terms[lang][0]);
}

function populateCurrencyOptions() {
  document.querySelectorAll("[data-currency-select]").forEach((select) => {
    if (select.options.length) return;
    select.innerHTML = TRADE_CURRENCIES.map((code) => `<option value="${code}">${code}</option>`).join("");
  });
  const from = document.querySelector("[data-fx-from]");
  const to = document.querySelector("[data-fx-to]");
  const params = new URLSearchParams(location.search);
  const fromParam = params.get("from");
  const toParam = params.get("to");
  if (from) from.value = TRADE_CURRENCIES.includes(fromParam) ? fromParam : "USD";
  if (to) to.value = TRADE_CURRENCIES.includes(toParam) ? toParam : (currentLang() === "ko" ? "KRW" : "EUR");
}

const BTS_FREIGHT_SOURCE = "https://data.bts.gov/resource/bw6n-ddqk.json";
const FREIGHT_SERIES = [
  ["Freight Transportation Index", "tsi_freight", "Index 2000=100"],
  ["Truck Freight", "truck_d11", "Truck Tonnage Index"],
  ["Rail Freight Carloads", "rail_frt_carloads", "Carloads"],
  ["Rail Intermodal", "rail_frt_intermodal", "Intermodal units"],
  ["Air Freight", "air_rtmfm_d11", "Revenue ton-miles"],
  ["Waterborne Freight", "waterborne_d11", "Million short tons"]
];

function formatPeriod(dateValue) {
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return "N/A";
  return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric", timeZone: "UTC" }).format(date);
}

async function getFreightData() {
  const params = new URLSearchParams({
    "$select": "obs_date,tsi_freight,truck_d11,rail_frt_carloads,rail_frt_intermodal,air_rtmfm_d11,waterborne_d11",
    "$order": "obs_date DESC",
    "$limit": "6"
  });
  const rows = await fetchJson(`${BTS_FREIGHT_SOURCE}?${params.toString()}`, {
    cacheKey: "logilee:bts:freight",
    ttl: 6 * 60 * 60 * 1000
  });
  if (!Array.isArray(rows) || rows.length < 2) throw new Error("Invalid BTS freight response");
  return FREIGHT_SERIES.map(([label, key, unit]) => {
    const latest = rows.find((row) => Number.isFinite(Number(row[key])));
    const previous = rows.find((row) => row !== latest && Number.isFinite(Number(row[key])));
    const latestValue = Number(latest?.[key]);
    const previousValue = Number(previous?.[key]);
    const change = Number.isFinite(latestValue) && Number.isFinite(previousValue) && previousValue !== 0
      ? (latestValue - previousValue) / previousValue * 100
      : null;
    return {
      label,
      key,
      unit,
      latest: latestValue,
      previous: previousValue,
      change,
      period: latest?.obs_date,
      previousPeriod: previous?.obs_date,
      source: "U.S. Bureau of Transportation Statistics"
    };
  });
}

function freightRowMarkup(item, compact = false) {
  const digits = item.latest > 1000 ? 0 : 1;
  const changeText = Number.isFinite(item.change) ? `${item.change >= 0 ? "+" : ""}${formatRate(item.change, 1)}%` : "N/A";
  return compact ? `
    <div>
      <strong>${item.label}</strong>
      <span>${Number.isFinite(item.latest) ? formatRate(item.latest, digits) : "N/A"} · ${changeText}</span>
    </div>
  ` : `
    <tr>
      <td>${item.label}</td>
      <td>${Number.isFinite(item.latest) ? formatRate(item.latest, digits) : "N/A"}</td>
      <td>${Number.isFinite(item.previous) ? formatRate(item.previous, digits) : "N/A"}</td>
      <td>${changeText}</td>
      <td>${item.unit}</td>
      <td>${formatPeriod(item.period)}</td>
      <td>${item.source}</td>
    </tr>
  `;
}

async function loadExchangePage() {
  const table = document.querySelector("[data-exchange-table]");
  if (!table) return;
  const lang = currentLang();
  try {
    const data = await getUsdRates();
    const rows = [
      ["USD/KRW", "USD", data.rates.KRW, 2],
      ["USD/EUR", "USD", data.rates.EUR, 4],
      ["USD/CNY", "USD", data.rates.CNY, 4],
      ["USD/JPY", "USD", data.rates.JPY, 2]
    ];
    table.innerHTML = rows.map(([pair, base, value, digits]) => `
      <tr><td>${pair}</td><td>${base}</td><td>${Number.isFinite(value) ? formatRate(value, digits) : "N/A"}</td><td>${data.date || "N/A"}</td></tr>
    `).join("");
    const note = document.querySelector("[data-exchange-note]");
    if (note) note.textContent = `${lang === "ko" ? "환율 데이터" : "Exchange rate data"}: Frankfurter`;
  } catch (error) {
    console.warn("Exchange page unavailable:", error);
    dataError(table.closest("[data-exchange-shell]") || table, "Exchange rate data is temporarily unavailable.");
  }
}

function renderFxResult(data) {
  const amount = Number(document.querySelector("[data-fx-amount]")?.value);
  const from = document.querySelector("[data-fx-from]")?.value;
  const to = document.querySelector("[data-fx-to]")?.value;
  const result = document.querySelector("[data-fx-result]");
  if (!result || !Number.isFinite(amount) || amount < 0 || !from || !to) return;
  const rate = data.rates[to] / data.rates[from];
  if (!Number.isFinite(rate)) {
    dataError(result, "Exchange rate data is temporarily unavailable.");
    return;
  }
  result.innerHTML = `
    <span class="summary-number">${formatRate(amount * rate, to === "KRW" || to === "JPY" ? 0 : 2)}</span>
    <strong>${to}</strong>
    <p class="muted">Exchange Rate: 1 ${from} = ${formatRate(rate, 6)} ${to}</p>
    <p class="muted">Data Date: ${data.date || "N/A"} · Exchange rate data: Frankfurter</p>
  `;
}

async function wireCurrencyConverter() {
  const form = document.querySelector("[data-currency-converter]");
  if (!form) return;
  populateCurrencyOptions();
  try {
    const data = await getUsdRates();
    renderFxResult(data);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      renderFxResult(data);
    });
    form.addEventListener("input", () => renderFxResult(data));
  } catch (error) {
    console.warn("Currency converter unavailable:", error);
    dataError(document.querySelector("[data-fx-result]"), "Exchange rate data is temporarily unavailable.");
  }
}

const TRADE_COUNTRIES = [
  ["KR", "South Korea", "대한민국"],
  ["CN", "China", "중국"],
  ["US", "United States", "미국"],
  ["JP", "Japan", "일본"],
  ["DE", "Germany", "독일"],
  ["VN", "Vietnam", "베트남"],
  ["IN", "India", "인도"],
  ["MX", "Mexico", "멕시코"],
  ["SG", "Singapore", "싱가포르"],
  ["GB", "United Kingdom", "영국"],
  ["NL", "Netherlands", "네덜란드"],
  ["AE", "United Arab Emirates", "아랍에미리트"],
  ["HK", "Hong Kong", "홍콩"],
  ["TH", "Thailand", "태국"],
  ["MY", "Malaysia", "말레이시아"],
  ["LK", "Sri Lanka", "스리랑카"],
  ["BE", "Belgium", "벨기에"],
  ["TW", "Taiwan", "대만"],
  ["FR", "France", "프랑스"],
  ["ES", "Spain", "스페인"],
  ["IT", "Italy", "이탈리아"],
  ["GR", "Greece", "그리스"],
  ["RO", "Romania", "루마니아"],
  ["PL", "Poland", "폴란드"],
  ["CA", "Canada", "캐나다"],
  ["BR", "Brazil", "브라질"],
  ["AR", "Argentina", "아르헨티나"],
  ["PE", "Peru", "페루"],
  ["CO", "Colombia", "콜롬비아"],
  ["PA", "Panama", "파나마"],
  ["ZA", "South Africa", "남아프리카공화국"],
  ["MA", "Morocco", "모로코"],
  ["EG", "Egypt", "이집트"],
  ["KE", "Kenya", "케냐"],
  ["TZ", "Tanzania", "탄자니아"],
  ["NG", "Nigeria", "나이지리아"],
  ["GH", "Ghana", "가나"],
  ["SA", "Saudi Arabia", "사우디아라비아"],
  ["OM", "Oman", "오만"],
  ["QA", "Qatar", "카타르"],
  ["PK", "Pakistan", "파키스탄"],
  ["BD", "Bangladesh", "방글라데시"],
  ["ID", "Indonesia", "인도네시아"],
  ["PH", "Philippines", "필리핀"]
];

const COUNTRY_CURRENCY = { KR: "KRW", CN: "CNY", US: "USD", JP: "JPY", DE: "EUR", VN: "USD", IN: "INR", MX: "MXN", SG: "SGD", GB: "GBP", NL: "EUR", AE: "USD", HK: "HKD", TH: "THB", MY: "MYR", LK: "USD", BE: "EUR", TW: "USD", FR: "EUR", ES: "EUR", IT: "EUR", GR: "EUR", RO: "EUR", PL: "USD", CA: "CAD", BR: "USD", AR: "USD", PE: "USD", CO: "USD", PA: "USD", ZA: "USD", MA: "USD", EG: "USD", KE: "USD", TZ: "USD", NG: "USD", GH: "USD", SA: "USD", OM: "USD", QA: "USD", PK: "USD", BD: "USD", ID: "USD", PH: "USD" };

const PORTS = [
  { slug: "busan", name: "Port of Busan", country: "South Korea", iso: "KR", locode: "KRPUS", lat: 35.10, lon: 129.04, timezone: "Asia/Seoul", region: "Northeast Asia", type: "Seaport" },
  { slug: "shanghai", name: "Port of Shanghai", country: "China", iso: "CN", locode: "CNSHA", lat: 31.23, lon: 121.50, timezone: "Asia/Shanghai", region: "East Asia", type: "Seaport" },
  { slug: "ningbo-zhoushan", name: "Ningbo-Zhoushan Port", aliases: ["Ningbo", "Zhoushan"], country: "China", iso: "CN", locode: "CNNGB", lat: 29.87, lon: 121.55, timezone: "Asia/Shanghai", region: "East Asia", type: "Seaport" },
  { slug: "singapore", name: "Port of Singapore", country: "Singapore", iso: "SG", locode: "SGSIN", lat: 1.26, lon: 103.82, timezone: "Asia/Singapore", region: "Southeast Asia", type: "Seaport" },
  { slug: "rotterdam", name: "Port of Rotterdam", country: "Netherlands", iso: "NL", locode: "NLRTM", lat: 51.95, lon: 4.14, timezone: "Europe/Amsterdam", region: "Europe", type: "Seaport" },
  { slug: "hamburg", name: "Port of Hamburg", country: "Germany", iso: "DE", locode: "DEHAM", lat: 53.54, lon: 9.99, timezone: "Europe/Berlin", region: "Europe", type: "Seaport" },
  { slug: "los-angeles", name: "Port of Los Angeles", country: "United States", iso: "US", locode: "USLAX", lat: 33.74, lon: -118.27, timezone: "America/Los_Angeles", region: "North America", type: "Seaport" },
  { slug: "long-beach", name: "Port of Long Beach", country: "United States", iso: "US", locode: "USLGB", lat: 33.75, lon: -118.22, timezone: "America/Los_Angeles", region: "North America", type: "Seaport" },
  { slug: "new-york-new-jersey", name: "Port of New York and New Jersey", aliases: ["New York", "New Jersey"], country: "United States", iso: "US", locode: "USNYC", lat: 40.68, lon: -74.04, timezone: "America/New_York", region: "North America", type: "Seaport" },
  { slug: "jebel-ali", name: "Jebel Ali Port", country: "United Arab Emirates", iso: "AE", locode: "AEJEA", lat: 25.01, lon: 55.06, timezone: "Asia/Dubai", region: "Middle East", type: "Seaport" },
  { slug: "hong-kong", name: "Port of Hong Kong", country: "Hong Kong", iso: "HK", locode: "HKHKG", lat: 22.30, lon: 114.17, timezone: "Asia/Hong_Kong", region: "East Asia", type: "Seaport" },
  { slug: "qingdao", name: "Port of Qingdao", country: "China", iso: "CN", locode: "CNQDG", lat: 36.07, lon: 120.38, timezone: "Asia/Shanghai", region: "East Asia", type: "Seaport" },
  { slug: "tianjin", name: "Port of Tianjin", country: "China", iso: "CN", locode: "CNTSN", lat: 39.00, lon: 117.72, timezone: "Asia/Shanghai", region: "East Asia", type: "Seaport" },
  { slug: "guangzhou", name: "Port of Guangzhou", country: "China", iso: "CN", locode: "CNCAN", lat: 23.11, lon: 113.26, timezone: "Asia/Shanghai", region: "South China", type: "Seaport" },
  { slug: "shenzhen", name: "Port of Shenzhen", country: "China", iso: "CN", locode: "CNSZX", lat: 22.54, lon: 114.05, timezone: "Asia/Shanghai", region: "South China", type: "Seaport" },
  { slug: "tokyo", name: "Port of Tokyo", country: "Japan", iso: "JP", locode: "JPTYO", lat: 35.62, lon: 139.78, timezone: "Asia/Tokyo", region: "Northeast Asia", type: "Seaport" },
  { slug: "yokohama", name: "Port of Yokohama", country: "Japan", iso: "JP", locode: "JPYOK", lat: 35.45, lon: 139.64, timezone: "Asia/Tokyo", region: "Northeast Asia", type: "Seaport" },
  { slug: "kaohsiung", name: "Port of Kaohsiung", country: "Taiwan", iso: "TW", locode: "TWKHH", lat: 22.61, lon: 120.27, timezone: "Asia/Taipei", region: "East Asia", type: "Seaport" },
  { slug: "cat-lai", name: "Ho Chi Minh City / Cat Lai", aliases: ["Ho Chi Minh City", "Cat Lai", "Saigon"], country: "Vietnam", iso: "VN", locode: "VNSGN", lat: 10.76, lon: 106.78, timezone: "Asia/Ho_Chi_Minh", region: "Southeast Asia", type: "Container terminal" },
  { slug: "hai-phong", name: "Hai Phong Port", country: "Vietnam", iso: "VN", locode: "VNHPH", lat: 20.86, lon: 106.68, timezone: "Asia/Ho_Chi_Minh", region: "Southeast Asia", type: "Seaport" },
  { slug: "laem-chabang", name: "Laem Chabang Port", country: "Thailand", iso: "TH", locode: "THLCH", lat: 13.08, lon: 100.89, timezone: "Asia/Bangkok", region: "Southeast Asia", type: "Seaport" },
  { slug: "port-klang", name: "Port Klang", country: "Malaysia", iso: "MY", locode: "MYPKG", lat: 3.00, lon: 101.40, timezone: "Asia/Kuala_Lumpur", region: "Southeast Asia", type: "Seaport" },
  { slug: "tanjung-pelepas", name: "Port of Tanjung Pelepas", country: "Malaysia", iso: "MY", locode: "MYTPP", lat: 1.36, lon: 103.55, timezone: "Asia/Kuala_Lumpur", region: "Southeast Asia", type: "Seaport" },
  { slug: "colombo", name: "Port of Colombo", country: "Sri Lanka", iso: "LK", locode: "LKCMB", lat: 6.95, lon: 79.84, timezone: "Asia/Colombo", region: "South Asia", type: "Seaport" },
  { slug: "nhava-sheva", name: "Mumbai / Nhava Sheva", aliases: ["JNPT", "Jawaharlal Nehru Port", "Nhava Sheva"], country: "India", iso: "IN", locode: "INNSA", lat: 18.95, lon: 72.95, timezone: "Asia/Kolkata", region: "South Asia", type: "Seaport" },
  { slug: "chennai", name: "Chennai Port", country: "India", iso: "IN", locode: "INMAA", lat: 13.10, lon: 80.30, timezone: "Asia/Kolkata", region: "South Asia", type: "Seaport" },
  { slug: "antwerp-bruges", name: "Port of Antwerp-Bruges", country: "Belgium", iso: "BE", locode: "BEANR", lat: 51.26, lon: 4.40, timezone: "Europe/Brussels", region: "Europe", type: "Seaport" },
  { slug: "felixstowe", name: "Port of Felixstowe", country: "United Kingdom", iso: "GB", locode: "GBFXT", lat: 51.95, lon: 1.31, timezone: "Europe/London", region: "Europe", type: "Seaport" },
  { slug: "savannah", name: "Port of Savannah", country: "United States", iso: "US", locode: "USSAV", lat: 32.08, lon: -81.09, timezone: "America/New_York", region: "North America", type: "Seaport" },
  { slug: "houston", name: "Port Houston", country: "United States", iso: "US", locode: "USHOU", lat: 29.73, lon: -95.27, timezone: "America/Chicago", region: "North America", type: "Seaport" }
];

const EXTRA_PORTS = [
  { slug: "incheon", name: "Port of Incheon", aliases: ["Inchon"], country: "South Korea", iso: "KR", locode: "KRINC", lat: 37.45, lon: 126.60, timezone: "Asia/Seoul", region: "East Asia", type: "Seaport" },
  { slug: "gwangyang", name: "Port of Gwangyang", aliases: ["Kwangyang"], country: "South Korea", iso: "KR", locode: "KRKAN", lat: 34.90, lon: 127.69, timezone: "Asia/Seoul", region: "East Asia", type: "Seaport" },
  { slug: "xiamen", name: "Port of Xiamen", country: "China", iso: "CN", locode: "CNXMN", lat: 24.48, lon: 118.08, timezone: "Asia/Shanghai", region: "East Asia", type: "Seaport" },
  { slug: "keelung", name: "Port of Keelung", country: "Taiwan", iso: "TW", locode: "TWKEL", lat: 25.14, lon: 121.74, timezone: "Asia/Taipei", region: "East Asia", type: "Seaport" },
  { slug: "kobe", name: "Port of Kobe", country: "Japan", iso: "JP", locode: "JPUKB", lat: 34.68, lon: 135.20, timezone: "Asia/Tokyo", region: "East Asia", type: "Seaport" },
  { slug: "nagoya", name: "Port of Nagoya", country: "Japan", iso: "JP", locode: "JPNGO", lat: 35.09, lon: 136.88, timezone: "Asia/Tokyo", region: "East Asia", type: "Seaport" },
  { slug: "osaka", name: "Port of Osaka", country: "Japan", iso: "JP", locode: "JPOSA", lat: 34.64, lon: 135.41, timezone: "Asia/Tokyo", region: "East Asia", type: "Seaport" },
  { slug: "bangkok", name: "Bangkok Port", aliases: ["Khlong Toei"], country: "Thailand", iso: "TH", locode: "THBKK", lat: 13.70, lon: 100.58, timezone: "Asia/Bangkok", region: "Southeast Asia", type: "River port" },
  { slug: "da-nang", name: "Da Nang Port", country: "Vietnam", iso: "VN", locode: "VNDAD", lat: 16.07, lon: 108.22, timezone: "Asia/Ho_Chi_Minh", region: "Southeast Asia", type: "Seaport" },
  { slug: "tanjung-priok", name: "Jakarta / Tanjung Priok", aliases: ["Jakarta", "Tanjung Priok"], country: "Indonesia", iso: "ID", locode: "IDTPP", lat: -6.10, lon: 106.88, timezone: "Asia/Jakarta", region: "Southeast Asia", type: "Seaport" },
  { slug: "surabaya", name: "Port of Surabaya", aliases: ["Tanjung Perak"], country: "Indonesia", iso: "ID", locode: "IDSUB", lat: -7.20, lon: 112.73, timezone: "Asia/Jakarta", region: "Southeast Asia", type: "Seaport" },
  { slug: "manila", name: "Port of Manila", country: "Philippines", iso: "PH", locode: "PHMNL", lat: 14.59, lon: 120.97, timezone: "Asia/Manila", region: "Southeast Asia", type: "Seaport" },
  { slug: "cebu", name: "Port of Cebu", country: "Philippines", iso: "PH", locode: "PHCEB", lat: 10.31, lon: 123.91, timezone: "Asia/Manila", region: "Southeast Asia", type: "Seaport" },
  { slug: "mumbai", name: "Mumbai Port", aliases: ["Bombay"], country: "India", iso: "IN", locode: "INBOM", lat: 18.95, lon: 72.85, timezone: "Asia/Kolkata", region: "South Asia", type: "Seaport" },
  { slug: "mundra", name: "Mundra Port", country: "India", iso: "IN", locode: "INMUN", lat: 22.75, lon: 69.70, timezone: "Asia/Kolkata", region: "South Asia", type: "Seaport" },
  { slug: "kolkata", name: "Kolkata Port", aliases: ["Calcutta"], country: "India", iso: "IN", locode: "INCCU", lat: 22.55, lon: 88.31, timezone: "Asia/Kolkata", region: "South Asia", type: "River port" },
  { slug: "chattogram", name: "Chattogram Port", aliases: ["Chittagong"], country: "Bangladesh", iso: "BD", locode: "BDCGP", lat: 22.31, lon: 91.80, timezone: "Asia/Dhaka", region: "South Asia", type: "Seaport" },
  { slug: "karachi", name: "Port of Karachi", country: "Pakistan", iso: "PK", locode: "PKKHI", lat: 24.84, lon: 66.99, timezone: "Asia/Karachi", region: "South Asia", type: "Seaport" },
  { slug: "port-qasim", name: "Port Qasim", country: "Pakistan", iso: "PK", locode: "PKBQM", lat: 24.77, lon: 67.35, timezone: "Asia/Karachi", region: "South Asia", type: "Seaport" },
  { slug: "khalifa-port", name: "Khalifa Port", aliases: ["Abu Dhabi"], country: "United Arab Emirates", iso: "AE", locode: "AEKHL", lat: 24.78, lon: 54.65, timezone: "Asia/Dubai", region: "Middle East", type: "Seaport" },
  { slug: "dammam", name: "King Abdul Aziz Port Dammam", aliases: ["Dammam"], country: "Saudi Arabia", iso: "SA", locode: "SADMM", lat: 26.48, lon: 50.20, timezone: "Asia/Riyadh", region: "Middle East", type: "Seaport" },
  { slug: "jeddah", name: "Jeddah Islamic Port", aliases: ["Jeddah"], country: "Saudi Arabia", iso: "SA", locode: "SAJED", lat: 21.48, lon: 39.17, timezone: "Asia/Riyadh", region: "Middle East", type: "Seaport" },
  { slug: "salalah", name: "Port of Salalah", country: "Oman", iso: "OM", locode: "OMSLL", lat: 16.94, lon: 54.01, timezone: "Asia/Muscat", region: "Middle East", type: "Seaport" },
  { slug: "sohar", name: "Port of Sohar", country: "Oman", iso: "OM", locode: "OMSOH", lat: 24.50, lon: 56.62, timezone: "Asia/Muscat", region: "Middle East", type: "Seaport" },
  { slug: "hamad-port", name: "Hamad Port", country: "Qatar", iso: "QA", locode: "QAHMD", lat: 25.02, lon: 51.62, timezone: "Asia/Qatar", region: "Middle East", type: "Seaport" },
  { slug: "bremerhaven", name: "Port of Bremerhaven", country: "Germany", iso: "DE", locode: "DEBRV", lat: 53.55, lon: 8.58, timezone: "Europe/Berlin", region: "Europe", type: "Seaport" },
  { slug: "london-gateway", name: "London Gateway", country: "United Kingdom", iso: "GB", locode: "GBLGP", lat: 51.51, lon: 0.49, timezone: "Europe/London", region: "Europe", type: "Seaport" },
  { slug: "southampton", name: "Port of Southampton", country: "United Kingdom", iso: "GB", locode: "GBSOU", lat: 50.90, lon: -1.40, timezone: "Europe/London", region: "Europe", type: "Seaport" },
  { slug: "le-havre", name: "Port of Le Havre", country: "France", iso: "FR", locode: "FRLEH", lat: 49.49, lon: 0.11, timezone: "Europe/Paris", region: "Europe", type: "Seaport" },
  { slug: "marseille-fos", name: "Marseille Fos Port", aliases: ["Marseille", "Fos"], country: "France", iso: "FR", locode: "FRMRS", lat: 43.35, lon: 5.35, timezone: "Europe/Paris", region: "Europe", type: "Seaport" },
  { slug: "barcelona", name: "Port of Barcelona", country: "Spain", iso: "ES", locode: "ESBCN", lat: 41.35, lon: 2.16, timezone: "Europe/Madrid", region: "Europe", type: "Seaport" },
  { slug: "valencia", name: "Port of Valencia", country: "Spain", iso: "ES", locode: "ESVLC", lat: 39.45, lon: -0.32, timezone: "Europe/Madrid", region: "Europe", type: "Seaport" },
  { slug: "algeciras", name: "Port of Algeciras", country: "Spain", iso: "ES", locode: "ESALG", lat: 36.13, lon: -5.45, timezone: "Europe/Madrid", region: "Europe", type: "Seaport" },
  { slug: "genoa", name: "Port of Genoa", country: "Italy", iso: "IT", locode: "ITGOA", lat: 44.41, lon: 8.90, timezone: "Europe/Rome", region: "Europe", type: "Seaport" },
  { slug: "gioia-tauro", name: "Port of Gioia Tauro", country: "Italy", iso: "IT", locode: "ITGIT", lat: 38.46, lon: 15.90, timezone: "Europe/Rome", region: "Europe", type: "Seaport" },
  { slug: "piraeus", name: "Port of Piraeus", country: "Greece", iso: "GR", locode: "GRPIR", lat: 37.94, lon: 23.64, timezone: "Europe/Athens", region: "Europe", type: "Seaport" },
  { slug: "constanta", name: "Port of Constanta", country: "Romania", iso: "RO", locode: "ROCND", lat: 44.17, lon: 28.66, timezone: "Europe/Bucharest", region: "Europe", type: "Seaport" },
  { slug: "gdansk", name: "Port of Gdansk", country: "Poland", iso: "PL", locode: "PLGDN", lat: 54.40, lon: 18.67, timezone: "Europe/Warsaw", region: "Europe", type: "Seaport" },
  { slug: "seattle", name: "Port of Seattle", country: "United States", iso: "US", locode: "USSEA", lat: 47.60, lon: -122.34, timezone: "America/Los_Angeles", region: "North America", type: "Seaport" },
  { slug: "tacoma", name: "Port of Tacoma", country: "United States", iso: "US", locode: "USTIW", lat: 47.26, lon: -122.41, timezone: "America/Los_Angeles", region: "North America", type: "Seaport" },
  { slug: "oakland", name: "Port of Oakland", country: "United States", iso: "US", locode: "USOAK", lat: 37.80, lon: -122.31, timezone: "America/Los_Angeles", region: "North America", type: "Seaport" },
  { slug: "charleston", name: "Port of Charleston", country: "United States", iso: "US", locode: "USCHS", lat: 32.78, lon: -79.93, timezone: "America/New_York", region: "North America", type: "Seaport" },
  { slug: "norfolk", name: "Port of Norfolk", aliases: ["Virginia Port"], country: "United States", iso: "US", locode: "USORF", lat: 36.85, lon: -76.29, timezone: "America/New_York", region: "North America", type: "Seaport" },
  { slug: "miami", name: "PortMiami", aliases: ["Miami"], country: "United States", iso: "US", locode: "USMIA", lat: 25.78, lon: -80.18, timezone: "America/New_York", region: "North America", type: "Seaport" },
  { slug: "vancouver", name: "Port of Vancouver", country: "Canada", iso: "CA", locode: "CAVAN", lat: 49.29, lon: -123.10, timezone: "America/Vancouver", region: "North America", type: "Seaport" },
  { slug: "prince-rupert", name: "Port of Prince Rupert", country: "Canada", iso: "CA", locode: "CAPRR", lat: 54.32, lon: -130.32, timezone: "America/Vancouver", region: "North America", type: "Seaport" },
  { slug: "montreal", name: "Port of Montreal", country: "Canada", iso: "CA", locode: "CAMTR", lat: 45.50, lon: -73.55, timezone: "America/Toronto", region: "North America", type: "Seaport" },
  { slug: "manzanillo-mexico", name: "Port of Manzanillo Mexico", aliases: ["Manzanillo"], country: "Mexico", iso: "MX", locode: "MXZLO", lat: 19.05, lon: -104.32, timezone: "America/Mexico_City", region: "Latin America", type: "Seaport" },
  { slug: "lazaro-cardenas", name: "Port of Lazaro Cardenas", country: "Mexico", iso: "MX", locode: "MXLZC", lat: 17.93, lon: -102.18, timezone: "America/Mexico_City", region: "Latin America", type: "Seaport" },
  { slug: "veracruz", name: "Port of Veracruz", country: "Mexico", iso: "MX", locode: "MXVER", lat: 19.20, lon: -96.14, timezone: "America/Mexico_City", region: "Latin America", type: "Seaport" },
  { slug: "santos", name: "Port of Santos", country: "Brazil", iso: "BR", locode: "BRSSZ", lat: -23.96, lon: -46.30, timezone: "America/Sao_Paulo", region: "Latin America", type: "Seaport" },
  { slug: "paranagua", name: "Port of Paranagua", country: "Brazil", iso: "BR", locode: "BRPNG", lat: -25.50, lon: -48.50, timezone: "America/Sao_Paulo", region: "Latin America", type: "Seaport" },
  { slug: "buenos-aires", name: "Port of Buenos Aires", country: "Argentina", iso: "AR", locode: "ARBUE", lat: -34.58, lon: -58.37, timezone: "America/Argentina/Buenos_Aires", region: "Latin America", type: "Seaport" },
  { slug: "callao", name: "Port of Callao", country: "Peru", iso: "PE", locode: "PECLL", lat: -12.05, lon: -77.15, timezone: "America/Lima", region: "Latin America", type: "Seaport" },
  { slug: "cartagena", name: "Port of Cartagena", country: "Colombia", iso: "CO", locode: "COCTG", lat: 10.40, lon: -75.53, timezone: "America/Bogota", region: "Latin America", type: "Seaport" },
  { slug: "colon", name: "Port of Colon", aliases: ["Cristobal", "Manzanillo International Terminal Panama"], country: "Panama", iso: "PA", locode: "PACTB", lat: 9.36, lon: -79.90, timezone: "America/Panama", region: "Latin America", type: "Seaport" },
  { slug: "durban", name: "Port of Durban", country: "South Africa", iso: "ZA", locode: "ZADUR", lat: -29.87, lon: 31.05, timezone: "Africa/Johannesburg", region: "Africa", type: "Seaport" },
  { slug: "cape-town", name: "Port of Cape Town", country: "South Africa", iso: "ZA", locode: "ZACPT", lat: -33.91, lon: 18.43, timezone: "Africa/Johannesburg", region: "Africa", type: "Seaport" },
  { slug: "gqeberha", name: "Port Elizabeth / Gqeberha", aliases: ["Port Elizabeth"], country: "South Africa", iso: "ZA", locode: "ZAPLZ", lat: -33.96, lon: 25.62, timezone: "Africa/Johannesburg", region: "Africa", type: "Seaport" },
  { slug: "tanger-med", name: "Tanger Med Port", aliases: ["Tangier Med"], country: "Morocco", iso: "MA", locode: "MAPTM", lat: 35.89, lon: -5.50, timezone: "Africa/Casablanca", region: "Africa", type: "Seaport" },
  { slug: "casablanca", name: "Port of Casablanca", country: "Morocco", iso: "MA", locode: "MACAS", lat: 33.61, lon: -7.62, timezone: "Africa/Casablanca", region: "Africa", type: "Seaport" },
  { slug: "alexandria", name: "Port of Alexandria", country: "Egypt", iso: "EG", locode: "EGALY", lat: 31.20, lon: 29.88, timezone: "Africa/Cairo", region: "Africa", type: "Seaport" },
  { slug: "port-said", name: "Port Said", country: "Egypt", iso: "EG", locode: "EGPSD", lat: 31.26, lon: 32.30, timezone: "Africa/Cairo", region: "Africa", type: "Seaport" },
  { slug: "mombasa", name: "Port of Mombasa", country: "Kenya", iso: "KE", locode: "KEMBA", lat: -4.04, lon: 39.65, timezone: "Africa/Nairobi", region: "Africa", type: "Seaport" },
  { slug: "dar-es-salaam", name: "Port of Dar es Salaam", country: "Tanzania", iso: "TZ", locode: "TZDAR", lat: -6.82, lon: 39.30, timezone: "Africa/Dar_es_Salaam", region: "Africa", type: "Seaport" },
  { slug: "lagos-apapa", name: "Lagos / Apapa Port", aliases: ["Lagos", "Apapa"], country: "Nigeria", iso: "NG", locode: "NGAPP", lat: 6.44, lon: 3.36, timezone: "Africa/Lagos", region: "Africa", type: "Seaport" },
  { slug: "tema", name: "Port of Tema", country: "Ghana", iso: "GH", locode: "GHTEM", lat: 5.63, lon: 0.01, timezone: "Africa/Accra", region: "Africa", type: "Seaport" }
];

const ALL_PORTS = [...PORTS, ...EXTRA_PORTS];

function populateCountrySelects() {
  document.querySelectorAll("[data-country-select]").forEach((select) => {
    if (select.options.length > 1) return;
    const lang = currentLang();
    const allOption = select.options.length === 1 && select.options[0].value === "" ? select.options[0].outerHTML : "";
    select.innerHTML = allOption + TRADE_COUNTRIES.map(([code, en, ko]) => `<option value="${code}">${lang === "ko" ? ko : en}</option>`).join("");
    const params = new URLSearchParams(location.search);
    const value = params.get(select.dataset.param || "country");
    if (value && [...select.options].some((option) => option.value === value)) select.value = value;
  });
}

function dayName(date, lang) {
  return new Intl.DateTimeFormat(lang === "ko" ? "ko-KR" : "en-US", { weekday: "long", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}

async function getHolidays(country, year) {
  return fetchJson(`https://date.nager.at/api/v3/PublicHolidays/${year}/${country}`, {
    cacheKey: `logilee:holidays:${country}:${year}`,
    ttl: 24 * 60 * 60 * 1000
  });
}

async function wireHolidayCalendar() {
  const form = document.querySelector("[data-holiday-form]");
  if (!form) return;
  populateCountrySelects();
  const year = form.querySelector("[data-year]");
  if (year && !year.value) year.value = new Date().getFullYear();
  const output = document.querySelector("[data-holiday-output]");
  const render = async () => {
    output.innerHTML = `<div class="data-empty">Loading...</div>`;
    try {
      const country = form.querySelector("[data-country-select]").value;
      const valueYear = year.value;
      const holidays = await getHolidays(country, valueYear);
      output.innerHTML = `
        <table class="result-table"><thead><tr><th>Date</th><th>Holiday Name</th><th>Local Name</th><th>Day of Week</th></tr></thead>
        <tbody>${holidays.map((item) => `<tr><td>${item.date}</td><td>${item.name}</td><td>${item.localName}</td><td>${dayName(item.date, currentLang())}</td></tr>`).join("")}</tbody></table>
        <p class="muted">Holiday data: Nager.Date</p>
      `;
    } catch (error) {
      console.warn("Holiday calendar unavailable:", error);
      dataError(output, "Holiday data is temporarily unavailable.");
    }
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    render();
  });
  render();
}

function addDaysUtc(date, days) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

async function wireBusinessDay() {
  const form = document.querySelector("[data-business-day-form]");
  if (!form) return;
  populateCountrySelects();
  const start = form.querySelector("[data-start-date]");
  if (start && !start.value) start.value = isoDate(new Date());
  const output = document.querySelector("[data-business-day-output]");
  const render = async () => {
    output.innerHTML = `<div class="data-empty">Loading...</div>`;
    try {
      const country = form.querySelector("[data-country-select]").value;
      const amount = Math.max(0, Number(form.querySelector("[data-business-days]").value || 0));
      const direction = form.querySelector("[data-direction]").value === "subtract" ? -1 : 1;
      let cursor = new Date(`${start.value}T00:00:00Z`);
      const years = new Set([cursor.getUTCFullYear(), addDaysUtc(cursor, direction * (amount + 45)).getUTCFullYear()]);
      const holidays = (await Promise.all([...years].map((year) => getHolidays(country, year)))).flat();
      const holidayMap = new Map(holidays.map((item) => [item.date, item]));
      const excluded = [];
      let counted = 0;
      while (counted < amount) {
        cursor = addDaysUtc(cursor, direction);
        const weekday = cursor.getUTCDay();
        const date = isoDate(cursor);
        if (weekday === 0 || weekday === 6) continue;
        const holiday = holidayMap.get(date);
        if (holiday) {
          excluded.push(holiday);
          continue;
        }
        counted += 1;
      }
      output.innerHTML = `
        <span class="summary-number">${isoDate(cursor)}</span>
        <strong>Estimated Business Date</strong>
        ${excluded.length ? `<h3>Excluded Holidays</h3><ul class="plain-list">${excluded.map((item) => `<li>${item.date} ${item.localName || item.name}</li>`).join("")}</ul>` : `<p class="muted">No public holidays were excluded in this calculation.</p>`}
        <p class="muted">Holiday data: Nager.Date</p>
      `;
    } catch (error) {
      console.warn("Business day unavailable:", error);
      dataError(output, "Business day data is temporarily unavailable.");
    }
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    render();
  });
  render();
}

const WB_INDICATORS = [
  ["Population", "SP.POP.TOTL", 0],
  ["GDP", "NY.GDP.MKTP.CD", 0],
  ["GDP Growth", "NY.GDP.MKTP.KD.ZG", 2],
  ["Inflation", "FP.CPI.TOTL.ZG", 2],
  ["Trade (% of GDP)", "NE.TRD.GNFS.ZS", 2],
  ["Exports of goods and services", "NE.EXP.GNFS.CD", 0],
  ["Imports of goods and services", "NE.IMP.GNFS.CD", 0],
  ["Export Growth", "NE.EXP.GNFS.KD.ZG", 2],
  ["Import Growth", "NE.IMP.GNFS.KD.ZG", 2]
];

async function getWorldBankRecords(country) {
  const records = await Promise.all(WB_INDICATORS.map(async ([label, code, digits]) => {
    const data = await fetchJson(`https://api.worldbank.org/v2/country/${country}/indicator/${code}?format=json&per_page=80&date=2018:2026`, {
      cacheKey: `logilee:wb:${country}:${code}`,
      ttl: 24 * 60 * 60 * 1000
    });
    const item = Array.isArray(data?.[1]) ? data[1].find((row) => row.value !== null) : null;
    return { label, code, value: item?.value, year: item?.date || "N/A", digits };
  }));
  const exports = records.find((row) => row.code === "NE.EXP.GNFS.CD");
  const imports = records.find((row) => row.code === "NE.IMP.GNFS.CD");
  records.splice(7, 0, {
    label: "Trade Balance",
    code: "LOGILEE.TRADE.BALANCE",
    value: exports?.year === imports?.year && Number.isFinite(exports?.value) && Number.isFinite(imports?.value) ? exports.value - imports.value : null,
    year: exports?.year === imports?.year ? exports.year : "N/A",
    digits: 0
  });
  return records;
}

function countryNameFromCode(country, lang = currentLang()) {
  const found = TRADE_COUNTRIES.find(([code]) => code === country);
  return found ? found[lang === "ko" ? 2 : 1] : country;
}

function countryRelatedMarkup(country) {
  const currency = COUNTRY_CURRENCY[country] || "USD";
  const lang = currentLang();
  const labels = lang === "ko"
    ? ["Related Logistics Data", "Public Holidays", "Major Ports", `USD/${currency} Currency Converter`, "Trade Statistics", "EU Trade Explorer"]
    : ["Related Logistics Data", "Public Holidays", "Major Ports", `USD/${currency} Currency Converter`, "Trade Statistics", "EU Trade Explorer"];
  const countryPorts = ALL_PORTS.filter((port) => port.iso === country).slice(0, 8);
  return `
    <div class="related-links">
      <h3>${labels[0]}</h3>
      <a href="holidays.html?country=${country}">${countryNameFromCode(country, lang)} ${labels[1]}</a>
      <a href="ports.html?country=${country}">${countryNameFromCode(country, lang)} ${labels[2]}</a>
      <a href="currency-converter.html?from=USD&to=${currency}">${labels[2 + 1]}</a>
      <a href="country-trade-profile.html?country=${country}">${countryNameFromCode(country, lang)} ${labels[4]}</a>
      <a href="eu-trade-explorer.html?reporter=${country}">${labels[5]}</a>
    </div>
    ${countryPorts.length ? `
      <div class="related-links major-port-links">
        <h3>${labels[2]}</h3>
        ${countryPorts.map((port) => `<a href="ports.html?q=${encodeURIComponent(port.name)}">${port.name} · ${port.locode}</a>`).join("")}
      </div>
    ` : ""}
  `;
}

async function wireCountryProfile() {
  const form = document.querySelector("[data-country-profile-form]");
  if (!form) return;
  populateCountrySelects();
  const output = document.querySelector("[data-country-profile-output]");
  const render = async () => {
    output.innerHTML = `<div class="data-empty">Loading...</div>`;
    try {
      const country = form.querySelector("[data-country-select]").value;
      const records = await getWorldBankRecords(country);
      output.innerHTML = `
        <h2>${countryNameFromCode(country)}</h2>
        <p class="muted">ISO Code: ${country}</p>
        <table class="result-table"><thead><tr><th>Indicator</th><th>Value</th><th>Latest available year</th></tr></thead>
        <tbody>${records.map((row) => `<tr><td>${row.label}</td><td>${row.value === undefined || row.value === null ? "N/A" : formatRate(row.value, row.digits)}</td><td>${row.year}</td></tr>`).join("")}</tbody></table>
        <p class="muted">Economic data: World Bank</p>
        ${countryRelatedMarkup(country)}
      `;
    } catch (error) {
      console.warn("Country profile unavailable:", error);
      dataError(output, "Country trade profile data is temporarily unavailable.");
    }
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    render();
  });
  render();
}

async function wireCountryCompare() {
  const form = document.querySelector("[data-country-compare-form]");
  if (!form) return;
  populateCountrySelects();
  const params = new URLSearchParams(location.search);
  const a = form.querySelector("[data-country-a]");
  const b = form.querySelector("[data-country-b]");
  if (a && params.get("a")) a.value = params.get("a");
  if (b && params.get("b")) b.value = params.get("b");
  const output = document.querySelector("[data-country-compare-output]");
  const render = async () => {
    output.innerHTML = `<div class="data-empty">Loading...</div>`;
    try {
      const countryA = a.value;
      const countryB = b.value;
      const [recordsA, recordsB] = await Promise.all([getWorldBankRecords(countryA), getWorldBankRecords(countryB)]);
      const byLabelA = new Map(recordsA.map((row) => [row.label, row]));
      const byLabelB = new Map(recordsB.map((row) => [row.label, row]));
      const labels = ["Population", "GDP", "GDP Growth", "Inflation", "Trade (% of GDP)", "Exports of goods and services", "Imports of goods and services"];
      output.innerHTML = `
        <table class="result-table"><thead><tr><th>Indicator</th><th>${countryNameFromCode(countryA)}</th><th>${countryNameFromCode(countryB)}</th></tr></thead>
        <tbody>${labels.map((label) => {
          const left = byLabelA.get(label);
          const right = byLabelB.get(label);
          const formatCell = (row) => row && row.value !== null && row.value !== undefined ? `${formatRate(row.value, row.digits)} (${row.year})` : "N/A";
          return `<tr><td>${label}</td><td>${formatCell(left)}</td><td>${formatCell(right)}</td></tr>`;
        }).join("")}</tbody></table>
        <p class="muted">Economic data: World Bank. Each cell shows the latest available year for that indicator.</p>
      `;
    } catch (error) {
      console.warn("Country compare unavailable:", error);
      dataError(output, "Country comparison data is temporarily unavailable.");
    }
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = new URL(location.href);
    url.searchParams.set("a", a.value);
    url.searchParams.set("b", b.value);
    history.replaceState(null, "", url);
    render();
  });
  render();
}

function portDetailUrl(port) {
  const prefix = location.pathname.includes("/ko/") ? "ports/" : "ports/";
  return `${prefix}${port.slug}.html`;
}

function localTimeForPort(port) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: port.timezone,
      timeZoneName: "short"
    }).format(new Date());
  } catch {
    return "N/A";
  }
}

function portCard(port) {
  const countryParam = port.iso;
  const currency = COUNTRY_CURRENCY[countryParam] || "USD";
  return `
    <article class="result-item port-result">
      <span class="kicker">${port.region} · ${port.type}</span>
      <h3><a href="${portDetailUrl(port)}">${port.name}</a></h3>
      <p class="muted">${port.country}</p>
      <div class="data-status-list compact-port-data">
        <div><strong>UN/LOCODE</strong><span>${port.locode}</span></div>
        <div><strong>Coordinates</strong><span>${port.lat.toFixed(2)}, ${port.lon.toFixed(2)}</span></div>
        <div><strong>Time Zone</strong><span>${port.timezone}</span></div>
      </div>
      <div class="chip-row">
        <a class="chip" href="country-trade-profile.html?country=${countryParam}">${port.country} Profile</a>
        <a class="chip" href="holidays.html?country=${countryParam}">Holidays</a>
        <a class="chip" href="currency-converter.html?from=USD&to=${currency}">USD/${currency}</a>
        <a class="chip" href="eu-trade-explorer.html?reporter=${port.iso}">EU Trade</a>
      </div>
    </article>
  `;
}

function filterPorts(query, country = "") {
  const normalized = query.trim().toLowerCase();
  return ALL_PORTS.filter((port) => {
    const countryMatch = !country || port.iso === country;
    const haystack = `${port.name} ${(port.aliases || []).join(" ")} ${port.city || ""} ${port.country} ${port.iso} ${port.locode} ${port.region}`.toLowerCase();
    return countryMatch && (!normalized || haystack.includes(normalized));
  });
}

function wirePortFinder() {
  const form = document.querySelector("[data-port-search-form]");
  const output = document.querySelector("[data-port-results]");
  if (!form || !output) return;
  populateCountrySelects();
  const params = new URLSearchParams(location.search);
  const input = form.querySelector("[data-port-query]");
  const country = form.querySelector("[data-country-select]");
  if (input && params.get("q")) input.value = params.get("q");
  if (country && params.get("country")) country.value = params.get("country");
  const render = () => {
    const results = filterPorts(input?.value || "", country?.value || "");
    output.innerHTML = results.length
      ? results.map(portCard).join("")
      : `<div class="data-empty">No matching ports found.</div>`;
    const count = document.querySelector("[data-port-count]");
    if (count) count.textContent = `${results.length} ports`;
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = new URL(location.href);
    if (input?.value) url.searchParams.set("q", input.value); else url.searchParams.delete("q");
    if (country?.value) url.searchParams.set("country", country.value); else url.searchParams.delete("country");
    history.replaceState(null, "", url);
    render();
  });
  form.addEventListener("input", render);
  render();
}

function wirePortDetail() {
  const target = document.querySelector("[data-port-detail]");
  if (!target) return;
  const slug = target.dataset.portDetail;
  const port = ALL_PORTS.find((item) => item.slug === slug);
  if (!port) {
    dataError(target, "Port data is unavailable.");
    return;
  }
  const currency = COUNTRY_CURRENCY[port.iso] || "USD";
  target.innerHTML = `
    <section class="page-title">
      <p class="eyebrow">Port Overview</p>
      <h1>${port.name}</h1>
      <p class="lead">${port.name} is a major ${port.region} logistics hub. Use this page as a reference for port identity, coordinates, country context, holidays, currency, trade statistics, and related ports.</p>
    </section>
    <section class="panel">
      <div class="grid cols-3">
        <div><strong>UN/LOCODE</strong><p>${port.locode}</p></div>
        <div><strong>Country</strong><p>${port.country} (${port.iso})</p></div>
        <div><strong>Coordinates</strong><p>${port.lat.toFixed(2)}, ${port.lon.toFixed(2)}</p></div>
        <div><strong>Time Zone</strong><p>${port.timezone}</p></div>
        <div><strong>Local Time</strong><p>${localTimeForPort(port)}</p></div>
        <div><strong>Port Type</strong><p>${port.type}</p></div>
      </div>
    </section>
    <section class="panel prose-panel">
      <h2>Related Trade Data</h2>
      <div class="chip-row">
        <a class="chip" href="../country-trade-profile.html?country=${port.iso}">${port.country} Profile</a>
        <a class="chip" href="../holidays.html?country=${port.iso}">${port.country} Holidays</a>
        <a class="chip" href="../currency-converter.html?from=USD&to=${currency}">USD/${currency}</a>
        <a class="chip" href="../global-trade-explorer.html?reporter=${port.iso}">Global Trade Statistics</a>
        <a class="chip" href="../eu-trade-explorer.html?reporter=${port.iso}">EU Trade Explorer</a>
      </div>
      <p>Port data is stored locally for speed and to avoid unnecessary API calls. Confirm official port identifiers before customs filing or carrier documentation.</p>
      <h2>Related Ports</h2>
      <div class="chip-row">
        ${ALL_PORTS.filter((item) => item.iso === port.iso && item.slug !== port.slug).slice(0, 6).map((item) => `<a class="chip" href="../ports.html?q=${encodeURIComponent(item.name)}">${item.name}</a>`).join("") || `<a class="chip" href="../ports.html?country=${port.iso}">View country ports</a>`}
      </div>
    </section>
  `;
}

function renderPortWeather() {
  const target = document.querySelector("[data-port-weather]");
  if (!target) return;
  const selected = new URLSearchParams(location.search).get("port");
  const ports = selected ? ALL_PORTS.filter((port) => port.slug === selected) : [];
  target.innerHTML = `
    ${ports.length ? `<p><strong>${ports[0].name}</strong> · ${ports[0].country} · ${ports[0].locode}</p>` : ""}
    <div class="notice">Weather data integration is planned.</div>
  `;
}

const EUROSTAT_REPORTERS = [
  ["DE", "Germany", "독일"],
  ["NL", "Netherlands", "네덜란드"],
  ["FR", "France", "프랑스"],
  ["IT", "Italy", "이탈리아"],
  ["ES", "Spain", "스페인"],
  ["BE", "Belgium", "벨기에"],
  ["PL", "Poland", "폴란드"]
];

const EUROSTAT_PARTNERS = [
  ["WORLD", "World", "전 세계"],
  ["EXT_EU27_2020", "Extra-EU27", "EU27 역외"],
  ["EU27_2020", "EU27", "EU27"],
  ["EXT_EA21", "Extra-euro area", "유로존 역외"]
];

const EUROSTAT_PRODUCTS = [
  ["TOTAL", "Total - all products", "전체 상품"],
  ["SITC0_1", "Food, drinks and tobacco", "식품, 음료, 담배"],
  ["SITC2_4", "Raw materials", "원재료"],
  ["SITC3", "Mineral fuels and related materials", "광물성 연료"],
  ["SITC5", "Chemicals and related products", "화학제품"],
  ["SITC6_8", "Other manufactured goods", "기타 제조품"],
  ["SITC7", "Machinery and transport equipment", "기계 및 운송장비"],
  ["SITC9", "Unclassified commodities", "기타 미분류 상품"]
];

function optionMarkup(options) {
  const lang = currentLang();
  return options.map(([value, en, ko]) => `<option value="${value}">${lang === "ko" ? ko : en}</option>`).join("");
}

function eurostatCategoryLabel(data, dimension, code) {
  return data?.dimension?.[dimension]?.category?.label?.[code] || code;
}

function firstEurostatValue(data) {
  if (!data?.value) return null;
  if (Array.isArray(data.value)) return data.value.find((value) => value !== null && value !== undefined);
  const firstKey = Object.keys(data.value)[0];
  return firstKey ? data.value[firstKey] : null;
}

function formatEurostatMillionEur(value) {
  if (!Number.isFinite(value)) return "N/A";
  const raw = `${formatRate(value, 1)} million EUR`;
  if (Math.abs(value) >= 1000000) return `${raw} (approx. ${formatRate(value / 1000000, 2)} trillion EUR)`;
  if (Math.abs(value) >= 1000) return `${raw} (approx. ${formatRate(value / 1000, 2)} billion EUR)`;
  return raw;
}

async function getEurostatTrade({ reporter, partner, product, year, flow }) {
  const indicator = flow === "import" ? "MIO_IMP_VAL" : "MIO_EXP_VAL";
  const params = new URLSearchParams({
    format: "JSON",
    lang: "EN",
    freq: "A",
    geo: reporter,
    partner,
    sitc06: product,
    indic_et: indicator,
    time: year
  });
  const url = `https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/ext_lt_intertrd?${params}`;
  const data = await fetchJson(url, {
    cacheKey: `logilee:eurostat:${reporter}:${partner}:${product}:${year}:${flow}`,
    ttl: 12 * 60 * 60 * 1000,
    timeout: 12000
  });
  const value = firstEurostatValue(data);
  return {
    dataset: "ext_lt_intertrd",
    updated: data.updated || "",
    reporter: eurostatCategoryLabel(data, "geo", reporter),
    partner: eurostatCategoryLabel(data, "partner", partner),
    product: eurostatCategoryLabel(data, "sitc06", product),
    flow: eurostatCategoryLabel(data, "indic_et", indicator),
    year,
    value
  };
}

function wireEuTradeExplorer() {
  const form = document.querySelector("[data-eu-trade-form]");
  if (!form) return;
  const params = new URLSearchParams(location.search);
  const reporter = form.querySelector("[name='reporter']");
  const partner = form.querySelector("[name='partner']");
  const product = form.querySelector("[name='product']");
  const year = form.querySelector("[name='year']");
  const flow = form.querySelector("[name='flow']");
  const output = document.querySelector("[data-eu-trade-output]");
  reporter.innerHTML = optionMarkup(EUROSTAT_REPORTERS);
  partner.innerHTML = optionMarkup(EUROSTAT_PARTNERS);
  product.innerHTML = optionMarkup(EUROSTAT_PRODUCTS);
  reporter.value = "DE";
  partner.value = "WORLD";
  product.value = "TOTAL";
  flow.value = "export";
  if (!year.value) year.value = "2023";
  ["reporter", "partner", "product", "year", "flow"].forEach((name) => {
    const field = form.querySelector(`[name='${name}']`);
    const value = params.get(name);
    if (!value || !field) return;
    if (field.tagName === "SELECT" && ![...field.options].some((option) => option.value === value)) return;
    field.value = value;
  });
  const render = async () => {
    const selectedYear = String(year.value || "").trim();
    if (!/^\d{4}$/.test(selectedYear) || Number(selectedYear) < 2010 || Number(selectedYear) > new Date().getFullYear()) {
      dataError(output, currentLang() === "ko" ? "연도는 2010년 이후의 4자리 값으로 입력해 주세요." : "Enter a four-digit year from 2010 onward.");
      return;
    }
    output.innerHTML = `<div class="data-empty">${currentLang() === "ko" ? "Eurostat 데이터를 불러오는 중입니다..." : "Loading Eurostat data..."}</div>`;
    try {
      const result = await getEurostatTrade({
        reporter: reporter.value,
        partner: partner.value,
        product: product.value,
        year: selectedYear,
        flow: flow.value
      });
      output.innerHTML = `
        <table class="result-table">
          <thead><tr><th>Reporter</th><th>Partner</th><th>Product</th><th>Year</th><th>Flow</th><th>Trade Value</th><th>Source</th></tr></thead>
          <tbody><tr>
            <td>${result.reporter}</td>
            <td>${result.partner}</td>
            <td>${result.product}</td>
            <td>${result.year}</td>
            <td>${result.flow}</td>
            <td>${formatEurostatMillionEur(result.value)}</td>
            <td>Eurostat</td>
          </tr></tbody>
        </table>
        <p class="muted">Dataset: ${result.dataset}. Updated: ${result.updated || "latest available"}. Product groups use SITC categories, not HS/CN line codes.</p>
      `;
    } catch (error) {
      console.warn("Eurostat trade unavailable:", error);
      dataError(output, currentLang() === "ko" ? "Eurostat 데이터를 일시적으로 불러올 수 없습니다." : "Eurostat data is temporarily unavailable.");
    }
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = new URL(location.href);
    ["reporter", "partner", "product", "year", "flow"].forEach((name) => {
      const field = form.querySelector(`[name='${name}']`);
      if (field?.value) url.searchParams.set(name, field.value); else url.searchParams.delete(name);
    });
    history.replaceState(null, "", url);
    render();
  });
  render();
}

function wireTradeExplorerParams() {
  const form = document.querySelector("[data-trade-explorer-form]");
  if (!form) return;
  const params = new URLSearchParams(location.search);
  form.querySelectorAll("[name]").forEach((field) => {
    const value = params.get(field.name);
    if (value) field.value = value;
  });
  const output = document.querySelector("[data-trade-explorer-output]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = new URL(location.href);
    form.querySelectorAll("[name]").forEach((field) => {
      if (field.value) url.searchParams.set(field.name, field.value); else url.searchParams.delete(field.name);
    });
    history.replaceState(null, "", url);
    if (output) output.innerHTML = `<div class="data-empty">${currentLang() === "ko" ? "글로벌 무역 통계 기능을 준비 중입니다." : "Global trade statistics integration is being prepared."}</div>`;
  });
}

async function wireNewsPage() {
  const target = document.querySelector("[data-news-page]");
  if (!target) return;
  const lang = currentLang();
  const query = target.dataset.newsQuery || (lang === "ko" ? "무역 물류" : "global trade logistics");
  const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=${lang === "ko" ? "ko" : "en"}&gl=${lang === "ko" ? "KR" : "US"}&ceid=${lang === "ko" ? "KR:ko" : "US:en"}`;
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
  try {
    const data = await fetchJson(apiUrl, { cacheKey: `logilee:newspage:${lang}:${query}`, ttl: 20 * 60 * 1000 });
    const items = Array.isArray(data.items) ? data.items.slice(0, 12) : [];
    target.innerHTML = items.length ? items.map((item) => {
      const parsed = splitNewsTitle(item.title);
      return `
        <a class="result-item" href="${item.link}" target="_blank" rel="noopener">
          <span class="kicker">${parsed.source || "News"} · ${formatNewsTime(item.pubDate, lang)}</span>
          <h3>${parsed.headline}</h3>
          <p class="muted">Category: Trade / Supply Chain · Original Article Link</p>
        </a>
      `;
    }).join("") : `<div class="data-empty">No news items available.</div>`;
  } catch (error) {
    console.warn("News page unavailable:", error);
    dataError(target, "News source unavailable.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  enhanceSidebar();
  refreshIcons();
  wireMenu();
  wireSidebarCollapse();
  setupLanguageChoice();
  setupLanguageMenu();
  wireHeaderSearch();
  wireSearch();
  loadHomeMarket();
  loadHomeNews();
  setupLatestPosting();
  setupPostsArchive();
  wireCbm();
  wireTracking();
  wireDictionary();
  loadExchangePage();
  wireCurrencyConverter();
  wireHolidayCalendar();
  wireBusinessDay();
  wireCountryProfile();
  wireCountryCompare();
  wireFreightMarket();
  wirePortFinder();
  wirePortDetail();
  renderPortWeather();
  wireEuTradeExplorer();
  wireTradeExplorerParams();
  wireNewsPage();
});
