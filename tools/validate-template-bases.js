const ExcelJS = require("exceljs");
const path = require("path");
const dir = path.join(__dirname, "..", "assets", "templates");
const expected = {
  "commercial-invoice.xlsx": { anchors: ["COMMERCIAL INVOICE", "1.Shipper / Exporter", "2.Consignee / Importer", "13.Description of Goods", "TOTAL QUANTITY :"], merges: ["A1:I2", "A22:B22", "C22:D22", "E22:F22", "E46:F46", "E47:F47"], printArea: "portrait" },
  "packing-list.xlsx": { anchors: ["PACKING LIST", "1.Shipper / Exporter", "10.Marks and Number of Pkgs", "13.Net-weight", "TOTAL"], merges: ["A1:I2", "A22:B22", "C22:D22", "E22:F22"], printArea: "portrait" },
  "shipment-checklist.xlsx": { anchors: ["LOGILEE SHIPMENT CHECKLIST", "Stage", "Task", "Status"] }
};
(async () => {
  const errors = [];
  for (const [fileName, spec] of Object.entries(expected)) {
    const workbook = new ExcelJS.Workbook();
    try {
      await workbook.xlsx.readFile(path.join(dir, fileName)); const sheet = workbook.worksheets[0];
      if (!sheet) { errors.push(`${fileName}: worksheet missing`); continue; }
      const values = []; sheet.eachRow((row) => row.eachCell((cell) => values.push(String(cell.value ?? "").trim())));
      for (const anchor of spec.anchors) if (!values.includes(anchor)) errors.push(`${fileName}: missing anchor ${anchor}`);
      for (const merge of spec.merges || []) if (!sheet.model.merges.includes(merge)) errors.push(`${fileName}: missing merge ${merge}`);
      if (spec.printArea && sheet.pageSetup.orientation !== spec.printArea) errors.push(`${fileName}: print orientation mismatch`);
    } catch (error) { errors.push(`${fileName}: ${error.message}`); }
  }
  console.log(JSON.stringify({ files: Object.keys(expected).length, errors }, null, 2)); if (errors.length) process.exitCode = 1;
})().catch((error) => { console.error(error); process.exitCode = 1; });
