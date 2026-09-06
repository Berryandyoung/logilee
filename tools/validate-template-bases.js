const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "assets", "templates");
const expected = {
  "commercial-invoice.xlsx": ["COMMERCIAL INVOICE", "Seller / Exporter", "Buyer / Consignee", "Description of Goods", "TOTAL"],
  "packing-list.xlsx": ["PACKING LIST", "Package No.", "Net Weight", "Gross Weight", "TOTAL CBM"],
  "pro-forma-invoice.xlsx": ["PRO FORMA INVOICE", "Quoted Items", "Validity Date", "QUOTED TOTAL"],
  "shipment-checklist.xlsx": ["LOGILEE SHIPMENT CHECKLIST", "Stage", "Task", "Status"]
};
function xmlPart(buffer, wanted) {
  let offset = 0;
  while (offset + 30 < buffer.length && buffer.readUInt32LE(offset) === 0x04034b50) {
    const nameLength = buffer.readUInt16LE(offset + 26); const extraLength = buffer.readUInt16LE(offset + 28); const size = buffer.readUInt32LE(offset + 18);
    const name = buffer.subarray(offset + 30, offset + 30 + nameLength).toString(); const start = offset + 30 + nameLength + extraLength;
    if (name === wanted) return buffer.subarray(start, start + size).toString();
    offset = start + size;
  }
  return "";
}
const errors = [];
for (const [name, needles] of Object.entries(expected)) {
  const file = path.join(dir, name);
  if (!fs.existsSync(file)) { errors.push(`${name}: missing`); continue; }
  const sheet = xmlPart(fs.readFileSync(file), "xl/worksheets/sheet1.xml");
  if (!sheet) { errors.push(`${name}: worksheet missing`); continue; }
  for (const needle of needles) if (!sheet.includes(needle)) errors.push(`${name}: missing anchor ${needle}`);
}
console.log(JSON.stringify({ files: Object.keys(expected).length, errors }, null, 2));
if (errors.length) process.exitCode = 1;
