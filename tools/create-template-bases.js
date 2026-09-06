const ExcelJS = require("exceljs");
const fs = require("fs");
const path = require("path");

// Approved CI/PL workbooks are copied from the user's Excel files. This guard
// intentionally never writes or rebuilds a production base template.
const dir = path.join(__dirname, "..", "assets", "templates");
const required = {
  "commercial-invoice.xlsx": { sheet: "CI", title: "COMMERCIAL INVOICE" },
  "packing-list.xlsx": { sheet: "PL", title: "PACKING LIST" }
};

(async () => {
  for (const [file, expected] of Object.entries(required)) {
    const filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) throw new Error(`Missing approved base: ${file}`);
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const sheet = workbook.getWorksheet(expected.sheet);
    if (!sheet || sheet.getCell("A1").value !== expected.title) throw new Error(`Invalid approved base: ${file}`);
  }
  console.log("Approved CI/PL bases present; no workbook reconstruction performed.");
})().catch((error) => { console.error(error); process.exitCode = 1; });
