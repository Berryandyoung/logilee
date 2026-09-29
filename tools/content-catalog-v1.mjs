import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import vm from "node:vm";

const root = process.cwd();
const manifestPath = path.join(root, "assets", "posts-data.js");
const catalogPath = path.join(root, "assets", "content-catalog-v1.json");
const reviewPath = path.join(root, "docs", "content-catalog-v1-unresolved.json");
const VERSION = "LOGILEE_CONTENT_CATALOG_V1";
const LANGUAGES = new Set(["ko", "en"]);
const STATUSES = new Set(["PUBLISHED", "HISTORICAL", "REDIRECTED"]);
const KINDS = new Set(["ARTICLE", "EVERGREEN", "DICTIONARY", "TOOL", "TEMPLATE", "UNRESOLVED"]);
const RELATIONS = new Set(["ORIGIN", "UPDATE", "FOLLOW_UP", "UNRESOLVED"]);

function readManifest() {
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(manifestPath, "utf8"), sandbox, { filename: manifestPath });
  if (!Array.isArray(sandbox.window.LOGILEE_POSTS)) throw new Error("MANIFEST_INVALID");
  return sandbox.window.LOGILEE_POSTS;
}

function attrs(tag) {
  return Object.fromEntries([...tag.matchAll(/([:\w-]+)\s*=\s*["']([^"']*)["']/g)].map(([, key, value]) => [key.toLowerCase(), value]));
}

function htmlEvidence(post) {
  const file = path.join(root, post.path, "index.html");
  if (!fs.existsSync(file)) throw new Error(`PUBLISHED_HTML_MISSING:${post.language}:${post.path}`);
  const html = fs.readFileSync(file, "utf8");
  const links = [...html.matchAll(/<link\b[^>]*>/gi)].map(match => attrs(match[0]));
  const canonical = links.find(link => link.rel?.toLowerCase() === "canonical")?.href || null;
  const alternates = links.filter(link => link.rel?.toLowerCase() === "alternate" && LANGUAGES.has(link.hreflang)).map(link => ({ language: link.hreflang, url: link.href }));
  const type = html.match(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i)?.[1];
  let jsonType = null;
  try { jsonType = JSON.parse(type || "{}")["@type"] || null; } catch {}
  return { file: post.path + "index.html", canonical, alternates, jsonType };
}

function normalizedUrl(value) {
  if (!value) return null;
  const url = new URL(value, "https://www.logilee.com/");
  url.hash = ""; url.search = "";
  if (!url.pathname.endsWith("/")) url.pathname += "/";
  return url.toString();
}

function contentId(language, pathValue) {
  const identity = `LOGILEE_CONTENT_V1|${language}|${pathValue}`;
  return `lc_${language}_${crypto.createHash("sha256").update(identity).digest("hex").slice(0, 24)}`;
}

function manifestKey(post) { return `${post.language}:${post.path}`; }

function bootstrap() {
  const manifest = readManifest();
  const evidence = new Map(manifest.map(post => [manifestKey(post), htmlEvidence(post)]));
  const byUrl = new Map();
  for (const post of manifest) {
    const item = evidence.get(manifestKey(post));
    byUrl.set(normalizedUrl(item.canonical || `https://www.logilee.com/${post.path}`), post);
  }
  const entries = manifest.map(post => {
    const item = evidence.get(manifestKey(post));
    const canonicalUrl = normalizedUrl(item.canonical || `https://www.logilee.com/${post.path}`);
    const opposite = post.language === "ko" ? "en" : "ko";
    const candidateUrl = normalizedUrl(item.alternates.find(link => link.language === opposite)?.url);
    const candidate = candidateUrl ? byUrl.get(candidateUrl) : null;
    let counterpartContentId = null;
    if (candidate) {
      const reverse = evidence.get(manifestKey(candidate)).alternates.find(link => link.language === post.language);
      if (normalizedUrl(reverse?.url) === canonicalUrl) counterpartContentId = contentId(candidate.language, candidate.path);
    }
    return {
      contentId: contentId(post.language, post.path), slug: post.slug, path: post.path,
      canonicalUrl, language: post.language, status: "PUBLISHED", title: post.title,
      description: post.description || null, category: post.category || null,
      publishedAt: post.publishedAt, contentKind: item.jsonType === "Article" ? "ARTICLE" : "UNRESOLVED",
      topicIdentity: null, regulationIdentity: null, eventIdentity: null,
      counterpartContentId, updateTargetContentId: null,
      lineage: { relationship: "ORIGIN", parentContentId: null, rootContentId: contentId(post.language, post.path) },
      evidence: { manifestKey: manifestKey(post), htmlPath: item.file, canonicalLink: Boolean(item.canonical), reciprocalAlternate: Boolean(counterpartContentId) }
    };
  }).sort((a, b) => a.contentId.localeCompare(b.contentId));
  const catalog = {
    schemaVersion: VERSION,
    authority: { repository: "Berryandyoung/logilee", branch: "main", manifest: "assets/posts-data.js" },
    semantics: { null: "UNKNOWN_NOT_ASSERTED", unresolved: "MUST_BLOCK_RELATIONSHIP_DEPENDENT_DECISION" },
    entries
  };
  fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2) + "\n", "utf8");
  const unresolved = {
    schemaVersion: "LOGILEE_CONTENT_CATALOG_V1_UNRESOLVED_REVIEW",
    policy: "NULL_VALUES_ARE_UNKNOWN_AND_MUST_NOT_BE_INFERRED",
    entries: entries.map(entry => ({
      contentId: entry.contentId, canonicalUrl: entry.canonicalUrl,
      unresolved: ["topicIdentity", "regulationIdentity", "eventIdentity", "updateTargetContentId"]
        .filter(key => entry[key] === null),
      counterpartStatus: entry.counterpartContentId ? "EXPLICIT_RECIPROCAL_HTML_EVIDENCE" : "UNRESOLVED"
    }))
  };
  fs.writeFileSync(reviewPath, JSON.stringify(unresolved, null, 2) + "\n", "utf8");
  console.log(`Bootstrapped ${entries.length} catalog entries.`);
}

function validate() {
  const manifest = readManifest();
  const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
  const errors = [];
  if (catalog.schemaVersion !== VERSION) errors.push("SCHEMA_VERSION_INVALID");
  if (catalog.authority?.repository !== "Berryandyoung/logilee" || catalog.authority?.branch !== "main") errors.push("AUTHORITY_INVALID");
  if (!Array.isArray(catalog.entries)) errors.push("ENTRIES_REQUIRED");
  const entries = Array.isArray(catalog.entries) ? catalog.entries : [];
  const ids = new Map(), urls = new Map();
  for (const entry of entries) {
    const required = ["contentId","slug","path","canonicalUrl","language","status","title","publishedAt","contentKind","lineage","evidence"];
    if (required.some(key => entry[key] == null || entry[key] === "")) errors.push(`REQUIRED_FIELD:${entry.contentId || "UNKNOWN"}`);
    if (!/^lc_(ko|en)_[a-f0-9]{24}$/.test(entry.contentId || "")) errors.push(`CONTENT_ID_INVALID:${entry.contentId}`);
    if (!LANGUAGES.has(entry.language)) errors.push(`LANGUAGE_INVALID:${entry.contentId}`);
    if (!STATUSES.has(entry.status)) errors.push(`STATUS_INVALID:${entry.contentId}`);
    if (!KINDS.has(entry.contentKind)) errors.push(`CONTENT_KIND_INVALID:${entry.contentId}`);
    if (!RELATIONS.has(entry.lineage?.relationship)) errors.push(`LINEAGE_RELATION_INVALID:${entry.contentId}`);
    if (ids.has(entry.contentId)) errors.push(`CONTENT_ID_DUPLICATE:${entry.contentId}`); else ids.set(entry.contentId, entry);
    const url = normalizedUrl(entry.canonicalUrl);
    if (urls.has(url)) errors.push(`CANONICAL_URL_DUPLICATE:${url}`); else urls.set(url, entry);
    if (entry.contentId !== contentId(entry.language, entry.evidence?.manifestKey?.split(":").slice(1).join(":"))) errors.push(`CONTENT_ID_CONTRACT:${entry.contentId}`);
    for (const key of ["topicIdentity","regulationIdentity","eventIdentity","counterpartContentId","updateTargetContentId"]) if (!(key in entry)) errors.push(`NULLABLE_FIELD_MISSING:${entry.contentId}:${key}`);
  }
  for (const entry of entries) {
    if (entry.counterpartContentId) {
      const other = ids.get(entry.counterpartContentId);
      if (!other) errors.push(`COUNTERPART_DANGLING:${entry.contentId}`);
      else if (other.contentId === entry.contentId || other.language === entry.language || other.counterpartContentId !== entry.contentId) errors.push(`COUNTERPART_INVALID:${entry.contentId}`);
    }
    if (entry.updateTargetContentId) {
      const target = ids.get(entry.updateTargetContentId);
      if (!target || target.contentId === entry.contentId) errors.push(`UPDATE_TARGET_INVALID:${entry.contentId}`);
    }
    for (const key of ["parentContentId","rootContentId"]) {
      const ref = entry.lineage?.[key];
      if (ref && !ids.has(ref)) errors.push(`LINEAGE_DANGLING:${entry.contentId}:${key}`);
    }
  }
  for (const entry of entries) {
    const seen = new Set([entry.contentId]); let current = entry;
    while (current.lineage?.parentContentId) {
      if (seen.has(current.lineage.parentContentId)) { errors.push(`LINEAGE_CYCLE:${entry.contentId}`); break; }
      seen.add(current.lineage.parentContentId); current = ids.get(current.lineage.parentContentId);
      if (!current) break;
    }
  }
  const manifestKeys = new Set(manifest.map(manifestKey));
  const catalogKeys = new Set(entries.filter(e => e.status === "PUBLISHED").map(e => e.evidence?.manifestKey));
  for (const key of manifestKeys) if (!catalogKeys.has(key)) errors.push(`MANIFEST_ENTRY_MISSING:${key}`);
  for (const key of catalogKeys) if (!manifestKeys.has(key)) errors.push(`CATALOG_PUBLISHED_NOT_IN_MANIFEST:${key}`);
  if (entries.filter(e => e.status === "PUBLISHED").length !== manifest.length) errors.push("PUBLISHED_COUNT_MISMATCH");
  if (errors.length) { for (const error of errors) console.error(error); throw new Error(`CATALOG_INVALID:${errors.length}`); }
  const counterparts = entries.filter(entry => entry.counterpartContentId).length;
  console.log(`Catalog PASS: manifest=${manifest.length} catalog=${entries.length} counterpartLinks=${counterparts} unresolvedSemanticEntries=${entries.filter(e => !e.topicIdentity && !e.regulationIdentity && !e.eventIdentity).length}`);
}

function compatibilityTests() {
  const scenarios = [
    ["clearly new topic", { evidence: "VERIFIED", freshness: "CURRENT", relationship: "DISTINCT" }, "NEW"],
    ["known regulation update", { evidence: "VERIFIED", freshness: "CURRENT", relationship: "REGULATION_MATCH", materialChange: true, target: true }, "UPDATE"],
    ["follow-up event", { evidence: "VERIFIED", freshness: "CURRENT", relationship: "EVENT_MATCH", followUp: true, target: true }, "FOLLOW_UP"],
    ["evergreen refresh", { evidence: "VERIFIED", freshness: "CURRENT", relationship: "TOPIC_MATCH", evergreenRefresh: true, evergreenTarget: true }, "EVERGREEN_REFRESH"],
    ["insufficient relationship", { evidence: "VERIFIED", freshness: "CURRENT", relationship: "UNRESOLVED" }, "BLOCKED"],
    ["duplicate same event", { evidence: "VERIFIED", freshness: "CURRENT", relationship: "EVENT_MATCH", alreadyCurrent: true, target: true }, "SKIP"]
  ];
  function decide(value) {
    if (value.evidence !== "VERIFIED" || value.freshness === "UNKNOWN") return "SKIP";
    if (value.relationship === "UNRESOLVED") return "BLOCKED";
    if (value.alreadyCurrent) return "SKIP";
    if (value.evergreenRefresh && value.evergreenTarget) return "EVERGREEN_REFRESH";
    if (value.materialChange && value.target) return "UPDATE";
    if (value.followUp && value.target) return "FOLLOW_UP";
    return "NEW";
  }
  for (const [name, input, expected] of scenarios) {
    const actual = decide(input);
    if (actual !== expected) throw new Error(`COMPATIBILITY_FAILED:${name}:${actual}`);
  }
  console.log(`JF-4 compatibility PASS: ${scenarios.length} scenarios.`);
}

const command = process.argv[2] || "validate";
if (command === "bootstrap") bootstrap();
else if (command === "validate") validate();
else if (command === "test") { validate(); compatibilityTests(); }
else throw new Error(`UNKNOWN_COMMAND:${command}`);
