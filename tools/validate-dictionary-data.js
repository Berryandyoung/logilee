const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "assets", "logilee-dictionary-data.js");
const code = fs.readFileSync(dataPath, "utf8");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(code, context, { filename: dataPath });

const data = context.window.LOGILEE_DICTIONARY;
const validCategories = new Set(["trade", "ocean", "air", "customs", "operations", "charges"]);
const ids = data.terms.map((term) => term.id);
const idSet = new Set(ids);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
const duplicateSlugs = data.terms.map((term) => term.slug).filter((slug, index, slugs) => slugs.indexOf(slug) !== index);
const categoryCounts = {};
const errors = [];

for (const term of data.terms) {
  categoryCounts[term.categoryKey] = (categoryCounts[term.categoryKey] || 0) + 1;
  if (!validCategories.has(term.categoryKey)) errors.push(`Invalid category: ${term.id}`);
  if (!term.id || !term.slug || !term.term || !term.koName) errors.push(`Missing identity field: ${term.id || term.term}`);
  if (!term.ko?.shortDefinition || !term.en?.shortDefinition) errors.push(`Missing localized definition: ${term.id}`);
  if (!term.reviewedAt || !/^\d{4}-\d{2}-\d{2}$/.test(term.reviewedAt)) errors.push(`Invalid reviewedAt: ${term.id}`);
  for (const related of term.relatedTerms || []) {
    if (!idSet.has(related)) errors.push(`Broken related term: ${term.id} -> ${related}`);
  }
  for (const tool of term.relatedTools || []) {
    if (!data.tools[tool]) errors.push(`Broken related tool: ${term.id} -> ${tool}`);
  }
  for (const source of term.sources || []) {
    try { new URL(source.url); } catch { errors.push(`Invalid source URL: ${term.id} -> ${source.url}`); }
    if (!source.organization || !source.title) errors.push(`Incomplete source: ${term.id}`);
  }
}

if (duplicateIds.length) errors.push(`Duplicate ids: ${duplicateIds.join(", ")}`);
if (duplicateSlugs.length) errors.push(`Duplicate slugs: ${duplicateSlugs.join(", ")}`);

const summary = {
  total: data.terms.length,
  categoryCounts,
  deepEntries: data.terms.filter((term) => term.depth === "deep").length,
  aliases: data.terms.reduce((sum, term) => sum + (term.aliases || []).length, 0),
  sourceBackedEntries: data.terms.filter((term) => (term.sources || []).length).length,
  errors
};

console.log(JSON.stringify(summary, null, 2));

if (data.terms.length < 200 || data.terms.length > 250) errors.push("Term count outside target range");
if (summary.deepEntries < 40 || summary.deepEntries > 60) errors.push("Deep entry count outside target range");
if (errors.length) process.exit(1);
