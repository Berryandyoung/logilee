const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "assets", "templates");
fs.mkdirSync(outDir, { recursive: true });
const esc = (v) => String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const col = (n) => { let s = ""; while (n) { const r = (n - 1) % 26; s = String.fromCharCode(65 + r) + s; n = Math.floor((n - 1) / 26); } return s; };
const cell = (r, c, value, style = 0) => `<c r="${col(c)}${r}" t="inlineStr" s="${style}"><is><t>${esc(value)}</t></is></c>`;
function sheet(title, headers, markerPrefix, totalLabels) {
  const rows = [];
  rows.push(`<row r="1" ht="30" customHeight="1">${cell(1, 1, title, 1)}</row>`);
  rows.push(`<row r="2">${cell(2, 1, "Generated with LOGILEE")}</row>`);
  rows.push(`<row r="4">${cell(4, 1, "Document Information", 2)}</row>`);
  rows.push(`<row r="5">${cell(5, 1, "Reference")}${cell(5, 2, `{{${markerPrefix}_REF}}`)}</row>`);
  rows.push(`<row r="6">${cell(6, 1, "Date")}${cell(6, 2, `{{${markerPrefix}_DATE}}`)}</row>`);
  if (markerPrefix === "PF") rows.push(`<row r="7">${cell(7, 1, "Validity Date")}${cell(7, 2, "{{PF_VALID}}")}</row>`);
  rows.push(`<row r="8">${cell(8, 1, "PARTIES", 2)}</row>`);
  rows.push(`<row r="9">${cell(9, 1, "Seller / Exporter")}${cell(9, 2, `{{${markerPrefix}_SELLER}}`)}${cell(9, 5, "Buyer / Consignee")}${cell(9, 6, `{{${markerPrefix}_BUYER}}`)}</row>`);
  rows.push(`<row r="10">${cell(10, 1, "Address")}${cell(10, 2, `{{${markerPrefix}_SELLER_ADDRESS}}`)}${cell(10, 5, "Address")}${cell(10, 6, `{{${markerPrefix}_BUYER_ADDRESS}}`)}</row>`);
  rows.push(`<row r="12">${cell(12, 1, "SHIPMENT INFORMATION", 2)}</row>`);
  rows.push(`<row r="13">${cell(13, 1, "Incoterms / Route")}${cell(13, 2, `{{${markerPrefix}_ROUTE}}`)}${cell(13, 5, "Currency")}${cell(13, 6, `{{${markerPrefix}_CURRENCY}}`)}</row>`);
  rows.push(`<row r="15">${headers.map((h, i) => cell(15, i + 1, h, 2)).join("")}</row>`);
  for (let i = 1; i <= 10; i++) rows.push(`<row r="${15 + i}">${headers.map((_, j) => cell(15 + i, j + 1, `{{${markerPrefix}_ITEM_${i}_${j + 1}}}`)).join("")}</row>`);
  rows.push(`<row r="27">${cell(27, 1, totalLabels[0], 2)}${cell(27, 2, `{{${markerPrefix}_TOTAL_1}}`)}</row>`);
  rows.push(`<row r="28">${cell(28, 1, totalLabels[1])}${cell(28, 2, `{{${markerPrefix}_TOTAL_2}}`)}</row>`);
  rows.push(`<row r="29">${cell(29, 1, totalLabels[2], 2)}${cell(29, 2, `{{${markerPrefix}_TOTAL_3}}`)}</row>`);
  rows.push(`<row r="31">${cell(31, 1, "Notes / Special Instructions", 2)}</row>`);
  rows.push(`<row r="32">${cell(32, 1, "Document requirements may vary by destination, carrier, cargo and local customs rules.")}</row>`);
  return rows.join("");
}
function xlsx(title, headers, prefix, totals) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><cols><col min="1" max="10" width="22" customWidth="1"/></cols><sheetData>${sheet(title, headers, prefix, totals)}</sheetData><mergeCells count="1"><mergeCell ref="A1:J1"/></mergeCells><pageMargins left="0.3" right="0.3" top="0.5" bottom="0.5" header="0.2" footer="0.2"/><pageSetup orientation="landscape" fitToWidth="1" fitToHeight="0"/><printOptions horizontalCentered="1"/></worksheet>`;
  return xml;
}
function crc32(data) { let c = ~0; for (const b of data) { c ^= b; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; } return ~c >>> 0; }
function u16(n) { return Buffer.from([n & 255, n >>> 8 & 255]); }
function u32(n) { return Buffer.from([n & 255, n >>> 8 & 255, n >>> 16 & 255, n >>> 24 & 255]); }
function zip(files) {
  const locals = [], central = []; let offset = 0;
  for (const [name, text] of Object.entries(files)) { const data = Buffer.from(text); const nb = Buffer.from(name); const crc = crc32(data); const local = Buffer.concat([Buffer.from([80,75,3,4,20,0,0,0,0,0,0,0,0,0]),u32(crc),u32(data.length),u32(data.length),u16(nb.length),u16(0),nb,data]); locals.push(local); central.push(Buffer.concat([Buffer.from([80,75,1,2,20,0,20,0,0,0,0,0,0,0,0,0]),u32(crc),u32(data.length),u32(data.length),u16(nb.length),u16(0),u16(0),u16(0),u16(0),u32(0),u32(offset),nb])); offset += local.length; }
  const body = Buffer.concat([...locals, ...central]); const centralSize = central.reduce((n, b) => n + b.length, 0); const end = Buffer.concat([Buffer.from([80,75,5,6]),u16(0),u16(0),u16(central.length),u16(central.length),u32(centralSize),u32(offset),u16(0)]); return Buffer.concat([body,end]);
}
const types = `<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>`;
const rels = `<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`;
const workbook = `<?xml version="1.0" encoding="UTF-8"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Document" sheetId="1" r:id="rId1"/></sheets></workbook>`;
const workbookRels = `<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>`;
const styles = `<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="2"><font><sz val="10"/><name val="Aptos"/></font><font><b/><sz val="15"/><name val="Aptos Display"/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="solid"><fgColor rgb="DCEBFF"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf/></cellStyleXfs><cellXfs count="3"><xf/><xf fontId="1" fillId="1"/><xf/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles><dxfs count="0"/><tableStyles count="0" defaultTableStyle="TableStyleMedium2" defaultPivotStyle="PivotStyleMedium9"/></styleSheet>`;
const common = (title, headers, prefix, totals) => zip({"[Content_Types].xml":types,"_rels/.rels":rels,"xl/workbook.xml":workbook,"xl/_rels/workbook.xml.rels":workbookRels,"xl/styles.xml":styles,"xl/worksheets/sheet1.xml":xlsx(title,headers,prefix,totals)});
const files = {
  "commercial-invoice.xlsx": common("COMMERCIAL INVOICE", ["No.","Description of Goods","HS Code","Country of Origin","Quantity","Unit","Unit Price","Amount"], "CI", ["Subtotal","Charges","TOTAL"]),
  "packing-list.xlsx": common("PACKING LIST", ["Package No.","Marks & Numbers","Package Type","Description","Quantity","Unit","Net Weight","Gross Weight","Dimensions","CBM"], "PL", ["Total Packages","Total Quantity","TOTAL CBM"]),
  "pro-forma-invoice.xlsx": common("PRO FORMA INVOICE", ["No.","Quoted Items","HS Code","Country of Origin","Quantity","Unit","Unit Price","Extended Amount"], "PF", ["Quoted Goods Total","Estimated Charges","QUOTED TOTAL"]),
  "shipment-checklist.xlsx": common("LOGILEE SHIPMENT CHECKLIST", ["Stage","Check","Task","Owner","Due Date","Status","Notes"], "SC", ["Open Items","Completed Items","STATUS"])
};
for (const [name, data] of Object.entries(files)) fs.writeFileSync(path.join(outDir, name), data);
console.log(`Created ${Object.keys(files).length} base templates in ${outDir}`);
