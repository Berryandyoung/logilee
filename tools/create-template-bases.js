const ExcelJS = require("exceljs");
const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "assets", "templates");
const itemStartRow = 15;
const itemCapacity = 50;
const layouts = {
  "commercial-invoice.xlsx": { title: "COMMERCIAL INVOICE", sheet: "Commercial Invoice", headers: ["No.", "Description of Goods", "HS Code", "Country of Origin", "Quantity", "Unit", "Unit Price", "Amount"], totals: ["Subtotal", "Charges", "TOTAL"] },
  "packing-list.xlsx": { title: "PACKING LIST", sheet: "Packing List", headers: ["Package No.", "Marks & Numbers", "Package Type", "Description", "Quantity", "Unit", "Net Weight", "Gross Weight", "Dimensions", "CBM"], totals: ["Total Packages", "Total Quantity", "TOTAL CBM"] },
  "pro-forma-invoice.xlsx": { title: "PRO FORMA INVOICE", sheet: "Pro Forma Invoice", headers: ["No.", "Quoted Items", "HS Code", "Country of Origin", "Quantity", "Unit", "Unit Price", "Extended Amount"], totals: ["Quoted Goods Total", "Estimated Charges", "QUOTED TOTAL"] },
  "shipment-checklist.xlsx": { title: "LOGILEE SHIPMENT CHECKLIST", sheet: "Shipment Checklist", headers: ["Stage", "Check", "Task", "Owner", "Due Date", "Status", "Notes"], totals: ["Open Items", "Completed Items", "STATUS"] }
};

function styleCell(cell, options = {}) {
  cell.font = { name: "Aptos", size: options.title ? 16 : 10, bold: Boolean(options.bold || options.title), color: "142B45" };
  cell.alignment = { vertical: "middle", horizontal: options.center ? "center" : "left", wrapText: true };
  cell.border = { top: { style: "thin", color: "D7E2F0" }, left: { style: "thin", color: "D7E2F0" }, bottom: { style: "thin", color: "D7E2F0" }, right: { style: "thin", color: "D7E2F0" } };
  if (options.fill) cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: options.fill } };
}
function setLabel(sheet, address, value, options = {}) { const cell = sheet.getCell(address); cell.value = value; styleCell(cell, options); return cell; }
function buildWorkbook(layout) {
  const workbook = new ExcelJS.Workbook(); workbook.creator = "LOGILEE"; workbook.lastModifiedBy = "LOGILEE";
  const sheet = workbook.addWorksheet(layout.sheet, { properties: { defaultRowHeight: 20 } });
  [18, 28, 18, 22, 13, 13, 16, 18, 22, 14].forEach((width, index) => { sheet.getColumn(index + 1).width = width; });
  sheet.mergeCells("A1:J1"); setLabel(sheet, "A1", layout.title, { title: true, fill: "DCEBFF" }); sheet.getRow(1).height = 30;
  sheet.mergeCells("A2:J2"); setLabel(sheet, "A2", "Generated with LOGILEE", { fill: "F4F7FB" });
  sheet.mergeCells("A4:J4"); setLabel(sheet, "A4", "Document Information", { bold: true, fill: "DCEBFF" });
  [["A5", "Reference"], ["A6", "Date"], ["A9", "Seller / Exporter"], ["E9", "Buyer / Consignee"], ["A10", "Address"], ["E10", "Address"], ["A13", "Incoterms / Route"], ["E13", "Currency"]].forEach(([address, value]) => setLabel(sheet, address, value, { bold: true }));
  ["B5", "B6", "B9", "F9", "B10", "F10", "B13", "F13"].forEach((address) => styleCell(sheet.getCell(address)));
  if (layout.title === "PRO FORMA INVOICE") { setLabel(sheet, "A7", "Validity Date", { bold: true }); styleCell(sheet.getCell("B7")); }
  sheet.mergeCells("A8:J8"); setLabel(sheet, "A8", "PARTIES", { bold: true, fill: "DCEBFF" }); sheet.mergeCells("A12:J12"); setLabel(sheet, "A12", "SHIPMENT INFORMATION", { bold: true, fill: "DCEBFF" });
  layout.headers.forEach((header, index) => setLabel(sheet, `${String.fromCharCode(65 + index)}${itemStartRow}`, header, { bold: true, center: true, fill: "DCEBFF" }));
  for (let row = itemStartRow + 1; row <= itemStartRow + itemCapacity; row++) { for (let column = 1; column <= layout.headers.length; column++) styleCell(sheet.getCell(row, column)); sheet.getRow(row).height = 30; }
  const totalsStartRow = itemStartRow + itemCapacity + 2;
  layout.totals.forEach((label, index) => { setLabel(sheet, `A${totalsStartRow + index}`, label, { bold: index === 0 || index === 2, fill: index === 2 ? "DCEBFF" : undefined }); styleCell(sheet.getCell(`B${totalsStartRow + index}`)); sheet.getCell(`B${totalsStartRow + index}`).numFmt = "#,##0.00"; });
  sheet.mergeCells(`A${totalsStartRow + 4}:J${totalsStartRow + 4}`); setLabel(sheet, `A${totalsStartRow + 4}`, "Notes / Special Instructions", { bold: true, fill: "DCEBFF" }); sheet.mergeCells(`A${totalsStartRow + 5}:J${totalsStartRow + 5}`); setLabel(sheet, `A${totalsStartRow + 5}`, "Document requirements may vary by destination, carrier, cargo and local customs rules.");
  sheet.getRow(totalsStartRow + 5).height = 30; sheet.pageSetup = { orientation: "landscape", fitToPage: true, fitToWidth: 1, fitToHeight: 0, printArea: `A1:J${totalsStartRow + 5}` }; sheet.pageMargins = { left: 0.3, right: 0.3, top: 0.5, bottom: 0.5, header: 0.2, footer: 0.2 }; sheet.views = [{ state: "frozen", ySplit: itemStartRow }];
  return workbook;
}
(async () => { fs.mkdirSync(outDir, { recursive: true }); for (const [fileName, layout] of Object.entries(layouts)) await buildWorkbook(layout).xlsx.writeFile(path.join(outDir, fileName)); console.log(`Created ${Object.keys(layouts).length} ExcelJS base templates in ${outDir}`); })().catch((error) => { console.error(error); process.exitCode = 1; });
