const ExcelJS = require("exceljs");
const path = require("path");
const dir = path.join(__dirname, "..", "assets", "templates");
const expected = {
  "commercial-invoice.xlsx": ["COMMERCIAL INVOICE", "1.Shipper / Exporter", "2.Consignee / Importer", "13.Description of Goods", "TOTAL QUANTITY :"],
  "packing-list.xlsx": ["PACKING LIST", "1.Shipper / Exporter", "10.Marks and Number of Pkgs", "13.Net-weight", "TOTAL"],
  "pro-forma-invoice.xlsx": ["PRO FORMA INVOICE", "1.Shipper / Exporter", "13.Description of Goods", "TOTAL AMOUT :"],
  "shipment-checklist.xlsx": ["LOGILEE SHIPMENT CHECKLIST", "Stage", "Task", "Status"]
};
(async () => {
  const errors = [];
  for (const [fileName, anchors] of Object.entries(expected)) {
    const workbook = new ExcelJS.Workbook();
    try {
      await workbook.xlsx.readFile(path.join(dir, fileName)); const sheet = workbook.worksheets[0];
      if (!sheet) { errors.push(`${fileName}: worksheet missing`); continue; }
      const values = []; sheet.eachRow((row) => row.eachCell((cell) => values.push(String(cell.value ?? ""))));
      for (const anchor of anchors) if (!values.includes(anchor)) errors.push(`${fileName}: missing anchor ${anchor}`);
      if (fileName !== "shipment-checklist.xlsx" && sheet.getRow(22).getCell(1).value === undefined) errors.push(`${fileName}: item header missing`);
      if (fileName !== "shipment-checklist.xlsx" && sheet.getRow(72).getCell(1).border.bottom.style === undefined) errors.push(`${fileName}: 50-row style area missing`);
    } catch (error) { errors.push(`${fileName}: ${error.message}`); }
  }
  console.log(JSON.stringify({ files: Object.keys(expected).length, errors }, null, 2)); if (errors.length) process.exitCode = 1;
})().catch((error) => { console.error(error); process.exitCode = 1; });
