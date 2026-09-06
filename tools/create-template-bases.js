const ExcelJS = require("exceljs");
const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "assets", "templates");
const itemStartRow = 23;
const itemCapacity = 50;
const palette = { ink: "000000", line: "555555", light: "F2F2F2" };

function border(style = "thin") { return { top: { style, color: palette.ink }, left: { style, color: palette.ink }, bottom: { style, color: palette.ink }, right: { style, color: palette.ink } }; }
function style(cell, options = {}) {
  cell.font = { name: "Arial", size: options.title ? 16 : 9, bold: Boolean(options.bold || options.title), color: palette.ink };
  cell.alignment = { vertical: "middle", horizontal: options.center ? "center" : "left", wrapText: true };
  cell.border = border(options.borderStyle || "thin");
  if (options.fill) cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: options.fill } };
}
function label(sheet, address, value, options = {}) { const cell = sheet.getCell(address); cell.value = value; style(cell, options); return cell; }
function blank(sheet, address) { style(sheet.getCell(address)); }
function mergeLabel(sheet, range, value, options = {}) { sheet.mergeCells(range); label(sheet, range.split(":")[0], value, options); }
function columns(sheet, widths) { widths.forEach((width, index) => { sheet.getColumn(index + 1).width = width; }); }
function commonWorkbook(title, sheetName, headers, totalLabels, options = {}) {
  const workbook = new ExcelJS.Workbook(); workbook.creator = "LOGILEE"; workbook.lastModifiedBy = "LOGILEE";
  const sheet = workbook.addWorksheet(sheetName, { properties: { defaultRowHeight: 18 } });
  columns(sheet, options.widths || [16, 16, 25, 18, 16, 16, 15, 15, 15]);
  mergeLabel(sheet, "A1:I2", title, { title: true, center: true, borderStyle: "medium" }); sheet.getRow(1).height = 24; sheet.getRow(2).height = 24;
  mergeLabel(sheet, "A4:D4", "1.Shipper / Exporter", { bold: true }); mergeLabel(sheet, "A5:D8", "", {}); mergeLabel(sheet, "E4:G4", options.invoiceLabel || "8.Invoice No. & Date", { bold: true }); mergeLabel(sheet, "H4:I4", "", {}); mergeLabel(sheet, "E6:G6", options.lcLabel || "9.No. & Date of L/C", { bold: true }); mergeLabel(sheet, "H6:I6", "", {});
  mergeLabel(sheet, "A9:D9", "2.Consignee / Importer", { bold: true }); mergeLabel(sheet, "A10:D12", "", {}); mergeLabel(sheet, "E9:G9", options.bankLabel || "10.L/C Issuing Bank", { bold: true }); mergeLabel(sheet, "H9:I10", "", {}); mergeLabel(sheet, "A14:D14", "3.Notify Party", { bold: true }); mergeLabel(sheet, "A15:D17", "", {}); mergeLabel(sheet, "E12:G13", options.remarksLabel || "11.Remarks :", { bold: true }); mergeLabel(sheet, "H12:I17", "", {});
  mergeLabel(sheet, "A19:B19", "4.Port of Loading", { bold: true }); mergeLabel(sheet, "C19:D19", "5.Final Destination", { bold: true }); mergeLabel(sheet, "E19:I19", "", {}); mergeLabel(sheet, "A21:B21", "6.Carrier", { bold: true }); mergeLabel(sheet, "C21:D21", "7.Sailing on or about", { bold: true }); mergeLabel(sheet, "E21:I21", "", {});
  headers.forEach((entry, index) => { const address = entry.address || String.fromCharCode(65 + index); const value = entry.value || entry; label(sheet, `${address}${itemStartRow - 1}`, value, { bold: true, center: true, fill: palette.light }); });
  for (let row = itemStartRow; row < itemStartRow + itemCapacity; row++) { for (let col = 1; col <= headers.length; col++) style(sheet.getCell(row, col)); sheet.getRow(row).height = 23; }
  const totalsRow = itemStartRow + itemCapacity + 1;
  totalLabels.forEach((value, index) => { label(sheet, `${String.fromCharCode(69 + index)}${totalsRow}`, value, { bold: true, center: true, fill: index === totalLabels.length - 1 ? palette.light : undefined }); blank(sheet, `I${totalsRow}`); });
  mergeLabel(sheet, `A${totalsRow + 3}:G${totalsRow + 4}`, "Signed by", { bold: true }); mergeLabel(sheet, `H${totalsRow + 3}:I${totalsRow + 4}`, "", {});
  sheet.pageSetup = { orientation: "landscape", fitToPage: true, fitToWidth: 1, fitToHeight: 0, printArea: `A1:I${totalsRow + 4}` }; sheet.pageMargins = { left: 0.275, right: 0.275, top: 0.4, bottom: 0.4, header: 0.2, footer: 0.2 }; sheet.views = [{ state: "frozen", ySplit: itemStartRow - 1 }];
  return { workbook, sheet, totalsRow };
}
function buildInvoice(title, sheetName, headers, totals, options = {}) { const result = commonWorkbook(title, sheetName, headers, totals, options); result.sheet.getCell("A1").font = { name: "Arial", size: 16, bold: true, color: palette.ink }; return result.workbook; }
function buildChecklist() {
  const workbook = new ExcelJS.Workbook(); const sheet = workbook.addWorksheet("Shipment Checklist"); columns(sheet, [20, 14, 42, 20, 16, 16, 40]);
  mergeLabel(sheet, "A1:G2", "LOGILEE SHIPMENT CHECKLIST", { title: true, center: true, borderStyle: "medium" }); label(sheet, "A4", "Shipment Reference", { bold: true }); blank(sheet, "B4");
  ["Stage", "Check", "Task", "Owner", "Due Date", "Status", "Notes"].forEach((v, i) => label(sheet, `${String.fromCharCode(65 + i)}6`, v, { bold: true, center: true, fill: palette.light }));
  for (let row = 7; row <= 56; row++) for (let col = 1; col <= 7; col++) style(sheet.getCell(row, col));
  label(sheet, "A58", "Open Items", { bold: true }); label(sheet, "A59", "Completed Items", { bold: true }); label(sheet, "A60", "STATUS", { bold: true, fill: palette.light });
  sheet.pageSetup = { orientation: "landscape", fitToPage: true, fitToWidth: 1, fitToHeight: 0, printArea: "A1:G60" }; return workbook;
}
(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const files = {
    "commercial-invoice.xlsx": buildInvoice("COMMERCIAL INVOICE", "CI", [{ address: "A", value: "12.Marks and Number of Pkgs" }, { address: "C", value: "13.Description of Goods" }, { address: "E", value: "14.Quantity" }, { address: "G", value: "15.Unit-Price" }, { address: "H", value: "16.Amount" }, { address: "I", value: "17.HS CODE" }], ["TOTAL QUANTITY :", "TOTAL AMOUT :"], { widths: [18, 10, 28, 10, 14, 10, 14, 14, 15] }),
    "packing-list.xlsx": buildInvoice("PACKING LIST", "PL", [{ address: "A", value: "10.Marks and Number of Pkgs" }, { address: "C", value: "11.Description of Goods" }, { address: "E", value: "12.Quantity" }, { address: "G", value: "13.Net-weight" }, { address: "H", value: "14.Gross-weight" }, { address: "I", value: "15.Measurement" }], ["TOTAL", "CTNS", "KG", "KG", "CBM"], { widths: [18, 10, 28, 10, 14, 10, 14, 14, 17], invoiceLabel: "8.No. of Date of Invoice", lcLabel: "9.Remarks :", bankLabel: "", remarksLabel: "" }),
    "pro-forma-invoice.xlsx": buildInvoice("PRO FORMA INVOICE", "PF", [{ address: "A", value: "12.Marks and Number of Pkgs" }, { address: "C", value: "13.Description of Goods" }, { address: "E", value: "14.Quantity" }, { address: "G", value: "15.Unit-Price" }, { address: "H", value: "16.Amount" }, { address: "I", value: "17.HS CODE" }], ["TOTAL QUANTITY :", "TOTAL AMOUT :"], { widths: [18, 10, 28, 10, 14, 10, 14, 14, 15], invoiceLabel: "8.Pro Forma Invoice No. & Date" })
  };
  for (const [fileName, workbook] of Object.entries(files)) await workbook.xlsx.writeFile(path.join(outDir, fileName));
  console.log(`Created ${Object.keys(files).length} ExcelJS base templates in ${outDir}`);
})().catch((error) => { console.error(error); process.exitCode = 1; });
