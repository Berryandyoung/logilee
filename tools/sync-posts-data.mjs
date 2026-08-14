import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dataPath = path.join(root, "assets", "posts-data.js");
const postLanguages = ["ko", "en"];
const nonPublicStatuses = new Set(["draft", "private", "archived"]);

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function decodeHtml(value = "") {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function stripTags(value = "") {
  return decodeHtml(value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim());
}

function attr(tag = "", name) {
  const match = tag.match(new RegExp(`${name}\\s*=\\s*["']([^"']*)["']`, "i"));
  return match ? decodeHtml(match[1].trim()) : "";
}

function meta(html, key) {
  const tags = html.match(/<meta\b[^>]*>/gi) || [];
  for (const tag of tags) {
    const name = attr(tag, "name") || attr(tag, "property");
    if (name.toLowerCase() === key.toLowerCase()) return attr(tag, "content");
  }
  return "";
}

function textMatch(html, pattern) {
  const match = html.match(pattern);
  return match ? stripTags(match[1]) : "";
}

function parseJsonLd(html) {
  const match = html.match(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
  if (!match) return {};
  try {
    return JSON.parse(stripTags(match[1]));
  } catch {
    try {
      return JSON.parse(match[1].trim());
    } catch {
      return {};
    }
  }
}

function normalizeDate(value) {
  const cleaned = String(value || "").trim();
  if (!cleaned) return "";
  const iso = cleaned.match(/\d{4}-\d{2}-\d{2}/);
  if (iso) return iso[0];
  const dotted = cleaned.match(/(\d{4})\.(\d{2})\.(\d{2})/);
  if (dotted) return `${dotted[1]}-${dotted[2]}-${dotted[3]}`;
  const parsed = new Date(cleaned);
  return Number.isNaN(parsed.getTime()) ? cleaned : parsed.toISOString().slice(0, 10);
}

function normalizePublishedAt(value, file) {
  const cleaned = String(value || "").trim();
  if (cleaned && !Number.isNaN(new Date(cleaned).getTime())) return new Date(cleaned).toISOString();
  const stat = fs.statSync(file);
  return stat.mtime.toISOString();
}

function relativeUrl(file) {
  return path.relative(root, file).replace(/\\/g, "/").replace(/index\.html$/i, "");
}

function slugFromPath(file) {
  return path.basename(path.dirname(file));
}

function compact(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function imagePathFromOg(html) {
  const ogImage = meta(html, "og:image");
  if (!ogImage) return "";
  const local = ogImage.match(/^https?:\/\/(?:www\.)?logilee\.com\/(.+)$/i);
  if (local) return local[1];
  return ogImage;
}

function extractPost(file, language) {
  const html = read(file);
  const jsonLd = parseJsonLd(html);
  const status = compact(meta(html, "logilee:status") || meta(html, "article:status") || textMatch(html, /data-post-status=["']([^"']+)["']/i) || "published").toLowerCase();
  const category = compact(
    meta(html, "logilee:category") ||
    jsonLd.articleSection ||
    textMatch(html, /<p[^>]*class=["'][^"']*\beyebrow\b[^"']*["'][^>]*>([\s\S]*?)<\/p>/i) ||
    "Guides"
  );
  const title = compact(
    meta(html, "og:title") ||
    jsonLd.headline ||
    textMatch(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i) ||
    textMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i).replace(/\s*\|\s*LOGILEE$/i, "")
  );
  const description = compact(meta(html, "og:description") || meta(html, "description") || jsonLd.description || "");
  const publishedAt = normalizePublishedAt(
    meta(html, "logilee:published-at") ||
    meta(html, "article:published_time") ||
    jsonLd.datePublished ||
    textMatch(html, /<div[^>]*class=["'][^"']*\bpost-meta\b[^"']*["'][^>]*>\s*<span[^>]*>([\s\S]*?)<\/span>/i),
    file
  );
  const date = normalizeDate(publishedAt);
  const readingTime = compact(
    meta(html, "logilee:reading-time") ||
    textMatch(html, /<div[^>]*class=["'][^"']*\bpost-meta\b[^"']*["'][^>]*>[\s\S]*?<span[^>]*>[\s\S]*?<\/span>\s*<span[^>]*>([\s\S]*?)<\/span>/i)
  );
  const heroImg = html.match(/<figure[^>]*class=["'][^"']*\bpost-hero-image\b[^"']*["'][^>]*>[\s\S]*?<img\b([^>]*)>/i);
  const heroAlt = heroImg ? attr(heroImg[1], "alt") : "";
  const image = imagePathFromOg(html);

  return {
    slug: slugFromPath(file),
    language,
    status,
    title,
    description,
    category,
    date,
    publishedAt,
    readingTime,
    path: relativeUrl(file),
    image,
    imageAlt: heroAlt || title
  };
}

function loadExisting() {
  if (!fs.existsSync(dataPath)) return [];
  const source = read(dataPath)
    .replace(/^\s*window\.LOGILEE_POSTS\s*=\s*/, "")
    .replace(/;\s*$/, "");
  try {
    return JSON.parse(source);
  } catch {
    return [];
  }
}

function scanGeneratedPosts() {
  const posts = [];
  for (const language of postLanguages) {
    const dir = path.join(root, language, "posts");
    if (!fs.existsSync(dir)) continue;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const file = path.join(dir, entry.name, "index.html");
      if (fs.existsSync(file)) posts.push(extractPost(file, language));
    }
  }
  return posts;
}

function postKey(post) {
  return `${post.language || ""}:${post.path || post.slug || post.title || ""}`;
}

function isValidPost(post) {
  return Boolean(post.slug && post.language && post.title && post.path);
}

function timestamp(post) {
  const value = new Date(post.publishedAt || post.date || 0).getTime();
  return Number.isFinite(value) ? value : 0;
}

const generated = scanGeneratedPosts();
const generatedKeys = new Set(generated.map(postKey));
const legacy = loadExisting().filter((post) => !generatedKeys.has(postKey(post)));
const posts = [...generated, ...legacy]
  .filter(isValidPost)
  .filter((post) => !nonPublicStatuses.has(String(post.status || "published").toLowerCase()))
  .sort((a, b) => timestamp(b) - timestamp(a) || String(a.language).localeCompare(String(b.language)) || String(a.title).localeCompare(String(b.title)));

const nextSource = `window.LOGILEE_POSTS = ${JSON.stringify(posts, null, 2)};\n`;
const currentSource = fs.existsSync(dataPath) ? read(dataPath) : "";
if (nextSource !== currentSource) {
  const tempPath = `${dataPath}.tmp`;
  fs.writeFileSync(tempPath, nextSource, "utf8");
  JSON.parse(read(tempPath).replace(/^\s*window\.LOGILEE_POSTS\s*=\s*/, "").replace(/;\s*$/, ""));
  fs.renameSync(tempPath, dataPath);
  console.log(`Synced ${generated.length} generated posts and ${legacy.length} legacy posts to ${path.relative(root, dataPath).replace(/\\/g, "/")}.`);
} else {
  console.log(`No posts-data changes needed; ${posts.length} public posts already synced.`);
}
