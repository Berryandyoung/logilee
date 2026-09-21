import fs from "node:fs";
import os from "node:os";
import { execFileSync, spawnSync } from "node:child_process";
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

const fixtureRoot = fs.mkdtempSync(path.join(os.tmpdir(), "logilee-quality-"));
try {
  const fixturePostDir = path.join(fixtureRoot, "ko", "posts", "malformed-reading-time");
  fs.mkdirSync(fixturePostDir, { recursive: true });
  fs.writeFileSync(path.join(fixtureRoot, "sitemap.xml"), "<urlset></urlset>\n", "utf8");
  fs.writeFileSync(path.join(fixturePostDir, "index.html"), `<!doctype html>
<html lang="ko">
  <head>
    <title>Reading Time Fixture | LOGILEE</title>
    <meta name="description" content="Quality gate regression fixture">
    <meta property="article:published_time" content="2026-09-21T00:00:00Z">
    <meta name="logilee:reading-time" content="2遺??쎄린">
    <link rel="canonical" href="https://www.logilee.com/ko/posts/malformed-reading-time/">
    <link rel="alternate" hreflang="ko" href="https://www.logilee.com/ko/posts/malformed-reading-time/">
  </head>
  <body><article class="post-content"><p>fixture body</p></article></body>
</html>
`, "utf8");
  const fixtureRun = spawnSync(process.execPath, [path.join(root, "tools", "site-quality.mjs"), "--report"], { cwd: fixtureRoot, encoding: "utf8" });
  if (fixtureRun.status === 0) throw new Error("Malformed readingTime fixture unexpectedly passed the Publish Gate.");
  const fixtureReport = JSON.parse(fs.readFileSync(path.join(fixtureRoot, "docs", "quality", "site-quality.json"), "utf8"));
  const fixtureCodes = new Set(fixtureReport.blockers.map((item) => item.code));
  for (const code of ["READING_TIME_INVALID", "MOJIBAKE_DETECTED"]) {
    if (!fixtureCodes.has(code)) throw new Error(`Malformed readingTime fixture did not produce ${code}.`);
  }
} finally {
  fs.rmSync(fixtureRoot, { recursive: true, force: true });
}
console.log("Quality regression assertions passed.");
