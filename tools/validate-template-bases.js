const ExcelJS = require("exceljs");
const path = require("path");
const dir = path.join(__dirname, "..", "assets", "templates");
const expected = {
  "commercial-invoice.xlsx": ["COMMERCIAL INVOICE", "Seller / Exporter", "Buyer / Consignee", "Description of Goods", "TOTAL"],
  "packing-list.xlsx": ["PACKING LIST", "Package No.", "Net Weight", "Gross Weight", "TOTAL CBM"],
  "pro-forma-invoice.xlsx": ["PRO FORMA INVOICE", "Quoted Items", "Validity Date", "QUOTED TOTAL"],
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
      if (sheet.getRow(15).getCell(1).value === undefined) errors.push(`${fileName}: item header missing`);
      if (sheet.getRow(65).getCell(1).border.bottom.style === undefined) errors.push(`${fileName}: 50-row style area missing`);
    } catch (error) { errors.push(`${fileName}: ${error.message}`); }
  }
  console.log(JSON.stringify({ files: Object.keys(expected).length, errors }, null, 2)); if (errors.length) process.exitCode = 1;
})().catch((error) => { console.error(error); process.exitCode = 1; });
