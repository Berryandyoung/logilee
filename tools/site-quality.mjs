import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const SITE = "https://www.logilee.com";
const reportMode = process.argv.includes("--report");
const slash = (value) => value.replace(/\\/g, "/");
const read = (file) => fs.readFileSync(file, "utf8");
const compact = (value = "") => value.replace(/<[^>]*>/g, " ").replace(/&[^;]+;/g, " ").replace(/\s+/g, " ").trim();
const attr = (tag = "", name) => (tag.match(new RegExp(`${name}\\s*=\\s*["']([^"']*)["']`, "i")) || [])[1] || "";
const meta = (html, key) => {
  for (const tag of html.match(/<meta\b[^>]*>/gi) || []) {
    if ((attr(tag, "name") || attr(tag, "property")).toLowerCase() === key.toLowerCase()) return attr(tag, "content");
  }
  return "";
};
const link = (html, rel) => (html.match(new RegExp(`<link\\b(?=[^>]*rel=["']${rel}["'])[^>]*>`, "i")) || [""])[0];
const titleOf = (html) => compact((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [,"..."])[1]);
const bodyText = (html) => {
  const articleBody = html.match(/<article\b[^>]*class=["'][^"']*(?:post-content|article-body)[^"']*["'][^>]*>([\s\S]*?)<\/article>/i);
  if (articleBody) return compact(articleBody[1]);
  const legacyLayout = html.match(/<article\b[^>]*class=["'][^"']*post-layout[^"']*["'][^>]*>([\s\S]*?)<\/article>/i);
  return legacyLayout ? compact(legacyLayout[1]) : "";
};
const hash = (value) => crypto.createHash("sha256").update(value).digest("hex");
const listFiles = (dir, suffix) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const file = path.join(dir, entry.name);
  return entry.isDirectory() ? listFiles(file, suffix) : entry.isFile() && file.endsWith(suffix) ? [file] : [];
});
const htmlFiles = listFiles(root, ".html").filter((file) => !slash(file).includes("/node_modules/"));
const postFiles = htmlFiles.filter((file) => /\/(ko|en)\/posts\/[^/]+\/index\.html$/i.test(slash(file)));
const sitemap = read(path.join(root, "sitemap.xml"));
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
const blockers = [];
const warnings = [];
const checks = [];
const add = (level, code, file, message, details = {}) => (level === "BLOCK" ? blockers : warnings).push({ code, file: slash(path.relative(root, file)), message, ...details });

const posts = postFiles.map((file) => {
  const html = read(file);
  const relative = slash(path.relative(root, file));
  const [, language, slug] = relative.match(/^(ko|en)\/posts\/([^/]+)\//) || [];
  const canonical = attr(link(html, "canonical"), "href");
  const alternates = [...html.matchAll(/<link\b(?=[^>]*rel=["']alternate["'])[^>]*>/gi)].map((m) => ({ hreflang: attr(m[0], "hreflang"), href: attr(m[0], "href") }));
  const jsonLdBlocks = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const jsonLd = [];
  for (const block of jsonLdBlocks) {
    try { jsonLd.push(JSON.parse(block[1])); } catch (error) { add("BLOCK", "JSON_LD_INVALID", file, error.message); }
  }
  const article = jsonLd.find((item) => item?.["@type"] === "Article") || {};
  const readingTime = meta(html, "logilee:reading-time") || compact((html.match(/class=["'][^"']*article-meta[^"']*["'][^>]*>[\s\S]*?<span[^>]*>[^<]*<\/span>\s*<span[^>]*>([^<]*)<\/span>/i) || [,"..."])[1]);
  const body = bodyText(html);
  const anchors = [...body.matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi)].map((m) => m[1]);
  const normalizedBody = body.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
  const listing = meta(html, "logilee:listing") || "included";
  const canonicalIntent = meta(html, "logilee:canonical-intent");
  return {
    file: relative, publishedUrl: `${SITE}/${language}/posts/${slug}/`, slug, language,
    title: meta(html, "og:title") || article.headline || titleOf(html).replace(/(?:\s*\|\s*LOGILEE)+$/i, ""),
    pageTitle: titleOf(html), description: meta(html, "description") || article.description || "",
    publishedDate: meta(html, "article:published_time") || article.datePublished || "",
    modifiedDate: article.dateModified || "", category: meta(html, "logilee:category") || article.articleSection || "",
    readingTime, canonical, hreflang: alternates, articleJsonLd: Boolean(article.headline),
    jsonLdUrl: typeof article.mainEntityOfPage === "string" ? article.mainEntityOfPage : article.url || "",
    internalContextualLinks: anchors.filter((href) => !/^https?:\/\//i.test(href) || /(?:www\.)?logilee\.com/i.test(href)),
    externalSourceLinks: anchors.filter((href) => /^https?:\/\//i.test(href) && !/(?:www\.)?logilee\.com/i.test(href)),
    listing, canonicalIntent, bodyHash: normalizedBody ? hash(normalizedBody) : "", bodyText: normalizedBody
  };
});

for (const post of posts) {
  const file = path.join(root, post.file);
  const expected = `${SITE}/${post.language}/posts/${post.slug}/`;
  if (!post.title || !post.description || !post.publishedDate || !post.canonical) add("BLOCK", "REQUIRED_METADATA_MISSING", file, "Post requires title, description, published date, and canonical.");
  if (!(post.language === "ko" ? /^\d+분 읽기$/ : /^\d+ min read$/).test(post.readingTime)) add("BLOCK", "READING_TIME_INVALID", file, `Invalid readingTime: ${JSON.stringify(post.readingTime)}`);
  if (/\|\s*LOGILEE\s*\|\s*LOGILEE/i.test(post.pageTitle)) add("BLOCK", "TITLE_BRANDING_DUPLICATED", file, post.pageTitle);
  if (/�|遺\?\?|쎄린/.test(read(file))) add("BLOCK", "MOJIBAKE_DETECTED", file, "Known replacement or mojibake sequence detected.");
  if (post.canonical !== expected && post.canonicalIntent !== "consolidated") add("WARN", "CANONICAL_OVERRIDE_DETECTED", file, `Canonical differs from published URL.`, { canonical: post.canonical, publishedUrl: expected });
  if (post.jsonLdUrl && post.jsonLdUrl !== post.canonical) add("BLOCK", "JSON_LD_CANONICAL_MISMATCH", file, "Article mainEntityOfPage/url differs from canonical.", { jsonLdUrl: post.jsonLdUrl, canonical: post.canonical });
  const self = post.hreflang.find((item) => item.hreflang === post.language);
  if (!self || self.href !== post.canonical) add("WARN", "HREFLANG_SELF_MISSING_OR_MISMATCH", file, "Self-referencing hreflang is missing or differs from canonical.");
  if (new Set(post.hreflang.map((item) => item.hreflang)).size !== post.hreflang.length) add("BLOCK", "HREFLANG_DUPLICATED", file, "Duplicate hreflang values found.");
  if (post.internalContextualLinks.length < 1) add("WARN", "CONTEXTUAL_LINKING_WEAK", file, "No contextual internal link found in article body.");
}

for (const file of htmlFiles) {
  const html = read(file);
  if (/<\/html>\s*\S/i.test(html)) add("BLOCK", "MARKUP_AFTER_HTML_CLOSE", file, "Markup exists after the closing html element.");
  if ((html.match(/<html\b/gi) || []).length !== 1 || (html.match(/<\/html>/gi) || []).length !== 1) add("BLOCK", "HTML_DOCUMENT_STRUCTURE", file, "Expected exactly one opening and closing html element.");
}

const duplicateCandidates = posts.filter((post) => post.canonicalIntent !== "consolidated");
const groupBy = (key) => duplicateCandidates.reduce((map, post) => map.set(post[key], [...(map.get(post[key]) || []), post]), new Map());
for (const [title, rows] of groupBy("title")) if (title && rows.length > 1) add("WARN", "DUPLICATE_TITLE", path.join(root, rows[0].file), `Duplicate title across ${rows.length} posts.`, { files: rows.map((row) => row.file) });
for (const [canonical, rows] of groupBy("canonical")) if (canonical && rows.length > 1) add("WARN", "CANONICAL_COLLISION", path.join(root, rows[0].file), `Canonical shared by ${rows.length} posts.`, { canonical, files: rows.map((row) => row.file) });
for (const [bodyHash, rows] of groupBy("bodyHash")) if (bodyHash && rows.length > 1) add("WARN", "EXACT_CONTENT_DUPLICATE", path.join(root, rows[0].file), `Exact normalized content shared by ${rows.length} posts.`, { files: rows.map((row) => row.file) });

for (const post of posts) {
  for (const alt of post.hreflang) {
    const target = posts.find((candidate) => candidate.canonical === alt.href);
    if (!target) { add("WARN", "HREFLANG_TARGET_NOT_IN_POST_INVENTORY", path.join(root, post.file), `No generated post found for ${alt.href}.`); continue; }
    const reciprocal = target.hreflang.some((item) => item.hreflang === post.language && item.href === post.canonical);
    if (!reciprocal) add("WARN", "HREFLANG_NOT_RECIPROCAL", path.join(root, post.file), `${alt.href} does not link back.`);
  }
}

const legacyPaths = ["about.html", "ko/about.html", "en/about.html", "privacy-policy.html", "privacy-policy-en.html", "terms.html", "terms-en.html", "ko/privacy-policy.html", "en/privacy-policy.html", "ko/terms.html", "en/terms.html"];
const urlMatrix = legacyPaths.map((relative) => {
  const file = path.join(root, relative); const exists = fs.existsSync(file); const html = exists ? read(file) : ""; const canonical = exists ? attr(link(html, "canonical"), "href") : "";
  return { url: `/${relative}`, fileStatus: exists ? "EXISTS" : "MISSING", canonical, hreflang: exists ? [...html.matchAll(/hreflang=["']([^"']+)["']/gi)].map((m) => m[1]) : [], sitemap: canonical ? sitemapUrls.has(canonical) : false, internalLinks: exists ? htmlFiles.reduce((n, candidate) => n + (read(candidate).includes(relative) ? 1 : 0), 0) : 0, indexability: /noindex/i.test(html) ? "NOINDEX" : exists ? "INDEXABLE" : "N/A", proposedAction: "REVIEW; preserve URL pending editorial/CMS decision" };
});

checks.push(
  { name: "post inventory", result: `${posts.length} generated KO/EN posts inspected` },
  { name: "HTML structure", result: `${htmlFiles.length} HTML files inspected` },
  { name: "sitemap", result: `${sitemapUrls.size} URLs inventoried` },
  { name: "canonical source", result: "Generated output audited; CMS backend/publisher source is not present in this repository and requires separate inspection." }
);
const status = blockers.length ? "BLOCK" : warnings.length ? "WARN" : "PASS";
const result = { status, generatedAt: new Date().toISOString(), summary: { posts: posts.length, htmlFiles: htmlFiles.length, blockers: blockers.length, warnings: warnings.length }, checks, blockers, warnings, posts: posts.map(({ bodyText, bodyHash, ...post }) => post), urlMatrix };

if (reportMode) {
  const reportDir = path.join(root, "docs", "quality"); fs.mkdirSync(reportDir, { recursive: true });
  fs.writeFileSync(path.join(reportDir, "site-quality.json"), `${JSON.stringify(result, null, 2)}\n`);
  const md = [`# LOGILEE Site Quality Report`, ``, `Status: **${status}**`, ``, `Generated: ${result.generatedAt}`, ``, `## Summary`, ``, `- Posts: ${posts.length}`, `- HTML files: ${htmlFiles.length}`, `- Blockers: ${blockers.length}`, `- Warnings: ${warnings.length}`, ``, `## Blockers`, ``, ...(blockers.length ? blockers.map((item) => `- \`${item.code}\` — \`${item.file}\`: ${item.message}`) : ["- None"]), ``, `## Warnings`, ``, ...(warnings.length ? warnings.map((item) => `- \`${item.code}\` — \`${item.file}\`: ${item.message}`) : ["- None"]), ``, `## URL / Legacy Matrix`, ``, `| URL | Status | Canonical | Hreflang | Sitemap | Internal links | Indexability | Proposed action |`, `|---|---|---|---|---:|---:|---|---|`, ...urlMatrix.map((row) => `| ${row.url} | ${row.fileStatus} | ${row.canonical || "—"} | ${row.hreflang.join(", ") || "—"} | ${row.sitemap ? "yes" : "no"} | ${row.internalLinks} | ${row.indexability} | ${row.proposedAction} |`), ``].join("\n");
  fs.writeFileSync(path.join(reportDir, "site-quality.md"), md);
}

console.log(JSON.stringify({ status, checks, warnings, blockers }, null, 2));
if (blockers.length) process.exitCode = 1;
