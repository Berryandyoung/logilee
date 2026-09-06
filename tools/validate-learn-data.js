const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const context = { window: {} };
vm.createContext(context);
for (const file of ["assets/logilee-dictionary-data.js", "assets/logilee-learn-data.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const learn = context.window.LOGILEE_LEARN_DATA;
const dictionary = context.window.LOGILEE_DICTIONARY;
const errors = [];
const ids = learn.guides.map((guide) => guide.id);
const slugs = learn.guides.map((guide) => guide.slug);
const duplicate = (items) => items.filter((item, index) => items.indexOf(item) !== index);
const termIds = new Set(dictionary.terms.map((term) => term.id));
const tracks = new Set(Object.keys(learn.tracks));
const levels = new Set(["foundation", "practical", "advanced"]);
const tools = new Set(Object.keys(learn.toolLabels));
const templates = new Set(Object.keys(learn.templateLabels));

for (const guide of learn.guides) {
  if (!guide.id || !guide.slug) errors.push(`Missing guide identity: ${guide.id || guide.slug}`);
  if (!guide.ko?.title || !guide.en?.title) errors.push(`Missing localized title: ${guide.id}`);
  if (!guide.ko?.summary || !guide.en?.summary) errors.push(`Missing localized summary: ${guide.id}`);
  if (!tracks.has(guide.track)) errors.push(`Invalid track: ${guide.id} -> ${guide.track}`);
  if (!levels.has(guide.level)) errors.push(`Invalid level: ${guide.id} -> ${guide.level}`);
  if (!Number.isFinite(guide.readMinutes) || guide.readMinutes < 1) errors.push(`Invalid readMinutes: ${guide.id}`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(guide.reviewedAt || "")) errors.push(`Invalid reviewedAt: ${guide.id}`);
  for (const term of guide.relatedTerms || []) {
    if (!termIds.has(term)) errors.push(`Broken related term: ${guide.id} -> ${term}`);
  }
  for (const tool of guide.relatedTools || []) {
    if (!tools.has(tool)) errors.push(`Broken related tool: ${guide.id} -> ${tool}`);
  }
  for (const template of guide.relatedTemplates || []) {
    if (!templates.has(template)) errors.push(`Broken related template: ${guide.id} -> ${template}`);
  }
  for (const source of guide.sources || []) {
    try { new URL(source.url); } catch { errors.push(`Invalid source URL: ${guide.id} -> ${source.url}`); }
    if (!source.organization || !source.title) errors.push(`Incomplete source: ${guide.id}`);
  }
  if (guide.visual) {
    const asset = path.join(root, guide.visual.src.replace(/^\.\.\//, ""));
    if (!fs.existsSync(asset)) errors.push(`Missing visual asset: ${guide.id} -> ${guide.visual.src}`);
    if (!guide.visual.altKo || !guide.visual.altEn) errors.push(`Missing visual alt: ${guide.id}`);
  }
}

for (const item of learn.lifecycle) {
  if (!ids.includes(item[0])) errors.push(`Broken lifecycle primary guide: ${item[0]}`);
  for (const guideId of item[3] || []) if (!ids.includes(guideId)) errors.push(`Broken lifecycle guide: ${guideId}`);
  for (const termId of item[4] || []) if (!termIds.has(termId)) errors.push(`Broken lifecycle term: ${termId}`);
}

for (const item of learn.situations) {
  if (!ids.includes(item.guide)) errors.push(`Broken situation guide: ${item.id} -> ${item.guide}`);
}

if (duplicate(ids).length) errors.push(`Duplicate guide ids: ${duplicate(ids).join(", ")}`);
if (duplicate(slugs).length) errors.push(`Duplicate guide slugs: ${duplicate(slugs).join(", ")}`);
if (learn.guides.length < 20 || learn.guides.length > 30) errors.push("Guide count outside V2 target range");

const summary = {
  guides: learn.guides.length,
  featured: learn.guides.filter((guide) => guide.featured).length,
  levels: learn.guides.reduce((acc, guide) => ({ ...acc, [guide.level]: (acc[guide.level] || 0) + 1 }), {}),
  tracks: learn.guides.reduce((acc, guide) => ({ ...acc, [guide.track]: (acc[guide.track] || 0) + 1 }), {}),
  visualGuides: learn.guides.filter((guide) => guide.visual).length,
  dictionaryTerms: dictionary.terms.length,
  errors
};

console.log(JSON.stringify(summary, null, 2));
if (errors.length) process.exit(1);
