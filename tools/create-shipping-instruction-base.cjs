const ExcelJS = require('exceljs');
const path = require('path');

async function main() {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('SI', { pageSetup: { paperSize: 9, orientation: 'portrait', fitToPage: true, fitToWidth: 1, fitToHeight: 1, margins: { left: .25, right: .25, top: .3, bottom: .3, header: .1, footer: .1 } } });
  sheet.properties.defaultRowHeight = 15;
  [13, 13, 13, 13, 11, 11, 11, 11].forEach((width, index) => { sheet.getColumn(index + 1).width = width; });
  const thin = { style: 'thin', color: { argb: 'FF506273' } };
  const border = { top: thin, left: thin, bottom: thin, right: thin };
  const sectionFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFDCE6EF' } };
  const labelFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF1F4F7' } };
  const merge = (range, value, style = {}) => { sheet.mergeCells(range); const cell = sheet.getCell(range.split(':')[0]); cell.value = value; Object.assign(cell, style); };
  merge('A1:H2', 'SHIPPING INSTRUCTION', { font: { name: 'Arial', size: 18, bold: true }, alignment: { horizontal: 'center', vertical: 'middle' }, border });
  merge('A3:H3', 'General Shipping Instruction Reference - Not a carrier-issued Bill of Lading.', { font: { name: 'Arial', size: 8, italic: true, color: { argb: 'FF40566D' } }, alignment: { horizontal: 'center', vertical: 'middle' }, border });
  const section = (row, title) => merge(`A${row}:H${row}`, title, { font: { name: 'Arial', size: 9, bold: true }, fill: sectionFill, alignment: { vertical: 'middle' }, border });
  const pair = (row, left, right) => { merge(`A${row}:D${row}`, left, { font: { name: 'Arial', size: 8, bold: true }, fill: labelFill, border }); merge(`E${row}:H${row}`, right, { font: { name: 'Arial', size: 8, bold: true }, fill: labelFill, border }); };
  const valuePair = row => { merge(`A${row}:D${row}`, '', { font: { name: 'Arial', size: 9 }, alignment: { vertical: 'middle' }, border }); merge(`E${row}:H${row}`, '', { font: { name: 'Arial', size: 9 }, alignment: { vertical: 'middle' }, border }); };
  section(4, 'A. DOCUMENT / BOOKING REFERENCE'); pair(5, 'Shipping Instruction No. / Date', 'Booking No. / Shipper Reference'); valuePair(6); pair(7, 'Customer / PO Reference', 'Mode of Transport'); valuePair(8);
  section(9, 'B. PARTIES'); pair(10, 'Shipper / Exporter', 'Consignee'); for (let r = 11; r <= 14; r++) valuePair(r); pair(15, 'Notify Party (optional)', 'Forwarder / Agent (optional)'); for (let r = 16; r <= 19; r++) valuePair(r);
  section(20, 'C. TRANSPORT / ROUTING'); pair(21, 'Carrier / Vessel / Voyage', 'Place of Receipt / Port of Loading'); valuePair(22); pair(23, 'Port of Discharge / Place of Delivery', 'Estimated Departure / Arrival'); valuePair(24);
  section(25, 'D. CONTAINER / PACKAGE / CARGO DETAILS');
  ['Container / Seal','Type','Marks / Packages','Package Type','Cargo Description','HS Code','Gross Weight','CBM'].forEach((value,index) => { const cell=sheet.getCell(26,index+1); cell.value=value; cell.font={name:'Arial',size:7,bold:true}; cell.fill=labelFill; cell.alignment={horizontal:'center',vertical:'middle',wrapText:true}; cell.border=border; });
  for (let r=27;r<=34;r++) for(let c=1;c<=8;c++){const cell=sheet.getCell(r,c);cell.font={name:'Arial',size:8};cell.alignment={vertical:'middle',wrapText:true};cell.border=border;}
  section(35, 'E. FREIGHT / PAYMENT / B/L INSTRUCTIONS'); pair(36, 'Freight Terms / Payable At', 'B/L Type / Number of Originals'); valuePair(37); pair(38, 'Payment / Charge Instructions', 'Document / Release Instructions'); valuePair(39);
  section(40, 'F. SPECIAL INSTRUCTIONS'); for(let r=41;r<=43;r++) merge(`A${r}:H${r}`,'',{font:{name:'Arial',size:8},alignment:{vertical:'middle',wrapText:true},border}); pair(44, 'Dangerous Goods Reference', 'Additional Regulatory / Reference Information'); valuePair(45);
  section(46, 'G. DECLARATION / SIGNATURE'); pair(47, 'Prepared By / Company', 'Date / Authorized Signature'); valuePair(48);
  merge('A49:H50', 'General Shipping Instruction Reference. Carrier, destination, cargo, and regulatory requirements may vary. This document is not a carrier-issued Bill of Lading.', { font: { name: 'Arial', size: 7, color: { argb: 'FF40566D' } }, alignment: { vertical: 'middle', wrapText: true }, border });
  [1,2].forEach(r=>sheet.getRow(r).height=20); sheet.getRow(3).height=17; sheet.getRow(26).height=25; for(let r=27;r<=34;r++)sheet.getRow(r).height=22; sheet.getRow(49).height=18; sheet.getRow(50).height=18;
  sheet.pageSetup.printArea='A1:H50'; sheet.views=[{showGridLines:false}];
  await workbook.xlsx.writeFile(path.join(__dirname, '..', 'assets', 'templates', 'shipping-instruction.xlsx'));
}
main().catch(error => { console.error(error); process.exitCode = 1; });
