import fs from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";

const root = process.cwd();
execFileSync(process.execPath, ["tools/site-quality.mjs", "--report"], { cwd: root, stdio: "pipe" });
const report = JSON.parse(fs.readFileSync(path.join(root, "docs", "quality", "site-quality.json"), "utf8"));
const forbidden = new Set([
  "CANONICAL_OVERRIDE_DETECTED",
  "CANONICAL_COLLISION",
  "HREFLANG_NOT_RECIPROCAL",
  "HREFLANG_TARGET_NOT_IN_POST_INVENTORY",
  "EXACT_CONTENT_DUPLICATE",
  "DUPLICATE_TITLE"
]);
const failures = [...report.blockers, ...report.warnings].filter((item) => forbidden.has(item.code));
if (failures.length) throw new Error(`Quality regression: ${JSON.stringify(failures, null, 2)}`);
if (report.summary.blockers !== 0) throw new Error(`Expected zero blockers, found ${report.summary.blockers}.`);
console.log("Quality regression assertions passed.");
