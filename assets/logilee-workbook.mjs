import './vendor/jszip.min.js';

const MIME = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
const NS = 'http://schemas.openxmlformats.org/spreadsheetml/2006/main';
const direct = (node, name) => Array.from(node.children).filter(child => child.localName === name);
const one = (node, name) => direct(node, name)[0];
const parse = text => {
  const xml = new DOMParser().parseFromString(text, 'application/xml');
  if (xml.querySelector('parsererror')) throw new Error('Template base XML invalid');
  return xml;
};
function validation(message) {
  const error = new Error(message);
  error.code = 'WORKBOOK_VALIDATION';
  throw error;
}
function logicalLines(value) {
  const lines = String(value ?? '').replace(/\r\n?/g, '\n').split('\n');
  while (lines.length && !lines.at(-1).trim()) lines.pop();
  return lines;
}
function numeric(value, label) {
  if (value === '' || value === undefined || value === null) return 0;
  const n = Number(value);
  if (!Number.isFinite(n) || n < 0) validation(`${label}: enter a finite number greater than or equal to zero.`);
  return n;
}

// Preserve original package geometry/print parts; never serialize a reconstructed workbook.
export async function buildTradeWorkbook(id, data) {
  if (!['commercial-invoice', 'packing-list', 'pro-forma-invoice'].includes(id)) throw new Error('Unsupported workbook');
  const pl = id === 'packing-list';
  const pi = id === 'pro-forma-invoice';
  const base = pi ? 'commercial-invoice' : id;
  const response = await fetch(new URL(`./templates/${base}.xlsx`, import.meta.url), { cache: 'no-store' });
  if (!response.ok) throw new Error('Template base unavailable');
  const zip = await globalThis.JSZip.loadAsync(await response.arrayBuffer());
  const sheet = parse(await zip.file('xl/worksheets/sheet1.xml').async('string'));
  const styles = parse(await zip.file('xl/styles.xml').async('string'));
  const shared = parse(await zip.file('xl/sharedStrings.xml').async('string'));
  const root = sheet.documentElement, styleRoot = styles.documentElement;
  const rows = direct(one(root, 'sheetData'), 'row');
  const cells = new Map(rows.flatMap(row => direct(row, 'c').map(cell => [cell.getAttribute('r'), cell])));
  const xfs = one(styleRoot, 'cellXfs'), fonts = one(styleRoot, 'fonts');
  const sourceStyles = direct(xfs, 'xf');
  const formats = one(styleRoot, 'numFmts');
  const strings = direct(shared.documentElement, 'si');
  const cellText = cell => cell?.getAttribute('t') === 's' ? strings[Number(one(cell, 'v')?.textContent)]?.textContent : one(cell, 'is')?.textContent;
  if (cellText(cells.get('A1')) !== (pl ? 'PACKING LIST' : 'COMMERCIAL INVOICE')) throw new Error('Template base integrity check failed');
  const make = (doc, name, attrs = {}) => {
    const node = doc.createElementNS(NS, name);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, String(value)));
    return node;
  };
  const getCell = address => {
    if (!cells.has(address)) {
      const row = rows.find(r => r.getAttribute('r') === address.match(/\d+/)[0]);
      if (!row) throw new Error('Template base row missing');
      const node = make(sheet, 'c', { r: address });
      const column = a => a.match(/[A-Z]+/)[0].split('').reduce((v, c) => v * 26 + c.charCodeAt(0) - 64, 0);
      const next = direct(row, 'c').find(c => column(c.getAttribute('r')) > column(address));
      row.insertBefore(node, next || null); cells.set(address, node);
    }
    return cells.get(address);
  };
  const originalStyle = cell => sourceStyles[Number(cell.getAttribute('s') || 0)];
  const widths = new Map();
  direct(one(root, 'cols'), 'col').forEach(col => {
    for (let n = Number(col.getAttribute('min')); n <= Number(col.getAttribute('max')); n++) widths.set(n, Number(col.getAttribute('width')));
  });
  const defaultWidth = Number(one(root, 'sheetFormatPr')?.getAttribute('defaultColWidth') || 8.43);
  const context = document.createElement('canvas').getContext('2d');
  const styleCache = new Map();
  const assignStyle = (cell, horizontal, format) => {
    const old = cell.getAttribute('s') || '0', key = `${old}|${horizontal}|${format || ''}`;
    if (!styleCache.has(key)) {
      // Clone the complete xf before changing nested alignment; no cross-cell aliases.
      const xf = originalStyle(cell).cloneNode(true);
      let alignment = one(xf, 'alignment');
      if (!alignment) { alignment = make(styles, 'alignment'); xf.appendChild(alignment); }
      alignment.setAttribute('horizontal', horizontal);
      alignment.setAttribute('wrapText', '0'); alignment.setAttribute('shrinkToFit', '0');
      xf.setAttribute('applyAlignment', '1');
      if (format) {
        let entry = direct(formats, 'numFmt').find(f => f.getAttribute('formatCode') === format);
        if (!entry) {
          const id = Math.max(163, ...direct(formats, 'numFmt').map(f => Number(f.getAttribute('numFmtId')))) + 1;
          entry = make(styles, 'numFmt', { numFmtId: id, formatCode: format }); formats.appendChild(entry);
        }
        xf.setAttribute('numFmtId', entry.getAttribute('numFmtId')); xf.setAttribute('applyNumberFormat', '1');
      }
      styleCache.set(key, direct(xfs, 'xf').length); xfs.appendChild(xf);
    }
    cell.setAttribute('s', styleCache.get(key));
  };
  const put = (address, value, endColumn, format) => {
    const cell = getCell(address);
    if (typeof value === 'number' && (!Number.isFinite(value) || Math.abs(value) >= 1e12)) validation(`${address}: numeric value is too large for this form.`);
    if (typeof value === 'string' && value) {
      if (/[\r\n]/.test(value)) validation(`${address}: use one line per field.`);
      const font = direct(fonts, 'font')[Number(originalStyle(cell).getAttribute('fontId') || 0)];
      const size = Number(one(font, 'sz')?.getAttribute('val') || 10);
      context.font = `${one(font, 'b') ? 'bold ' : ''}${size}pt "${one(font, 'name')?.getAttribute('val') || 'sans-serif'}"`;
      const start = address.charCodeAt(0) - 64;
      let available = 0;
      for (let col = start; col <= endColumn; col++) available += (widths.get(col) || defaultWidth) * 7 + 5;
      if (context.measureText(value).width > available - 8) validation(`${address}: text exceeds the existing field width. Shorten this line.`);
    }
    for (const child of Array.from(cell.children)) if (['v', 'f', 'is'].includes(child.localName)) child.remove();
    cell.removeAttribute('t');
    if (value === '' || value === null || value === undefined) return;
    assignStyle(cell, typeof value === 'number' ? 'center' : 'left', format);
    if (typeof value === 'number') {
      const v = make(sheet, 'v'); v.textContent = value; cell.appendChild(v);
    } else {
      cell.setAttribute('t', 'inlineStr');
      const inline = make(sheet, 'is'), text = make(sheet, 't');
      text.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve'); text.textContent = value;
      inline.appendChild(text); cell.appendChild(inline);
    }
  };
  const replaceText = (address, value) => {
    const cell = getCell(address);
    for (const child of Array.from(cell.children)) if (['v', 'f', 'is'].includes(child.localName)) child.remove();
    cell.setAttribute('t', 'inlineStr');
    const inline = make(sheet, 'is'), text = make(sheet, 't');
    text.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve'); text.textContent = value;
    inline.appendChild(text); cell.appendChild(inline);
  };
  const copyStyle = (target, source) => getCell(target).setAttribute('s', getCell(source).getAttribute('s') || '0');
  const addMerge = ref => {
    const merges = one(root, 'mergeCells');
    if (!direct(merges, 'mergeCell').some(node => node.getAttribute('ref') === ref)) merges.appendChild(make(sheet, 'mergeCell', { ref }));
    merges.setAttribute('count', direct(merges, 'mergeCell').length);
  };
  const block = (column, start, end, value, endColumn) => {
    const lines = logicalLines(value);
    if (lines.length > end - start + 1) validation(`${column}${start}:${column}${end}: maximum ${end - start + 1} lines; received ${lines.length}.`);
    for (let row = start; row <= end; row++) put(`${column}${row}`, lines[row - start] || '', endColumn);
  };
  // Blank template placeholders must not block normal Excel text overflow into adjacent cells.
  for (const [address, cell] of cells) if (cellText(cell) !== undefined && !cellText(cell).trim()) put(address, null);
  if (pi) {
    replaceText('A1', 'PRO FORMA INVOICE');
    replaceText('E3', '8.Pro Forma No. & Date');
    replaceText('E5', '9.Buyer Reference / Valid Until');
    replaceText('E8', '10.Currency / Payment / Incoterms');
    replaceText('E11', '11.Remarks :');
    replaceText('C20', '7.Estimated Ship Date');
  }
  const party = (name, address) => [name, address].filter(Boolean).join('\n');
  block('A', 4, 7, party(data.sellerName, data.sellerAddress), 4);
  block('A', 9, 12, party(data.buyerName, data.buyerAddress), 4);
  block('A', 14, 17, party(data.notifySame ? data.buyerName : data.notifyName, data.notifySame ? data.buyerAddress : data.notifyAddress), 4);
  block('E', pl ? 6 : 12, 21, data.remarks || '', 9);
  put('A19', data.loading || '', 2); put('C19', data.finalDestination || '', 4);
  put('A21', data.carrier || '', 2); put('C21', (pl ? data.sailingDate || data.packingDate : pi ? data.estimatedShipDate : data.sailingDate) || '', 4);
  put('E4', pi ? data.proformaNo || '' : data.invoiceNo || '', 7); put('H4', (pl ? data.invoiceDate || data.packingDate : pi ? data.issueDate : data.invoiceDate) || '', 9);
  if (pi) {
    put('E6', data.buyerRef || '', 7); put('H6', data.validUntil || '', 9);
    put('E9', [data.currency, data.paymentTerms].filter(Boolean).join(' | '), 9);
    put('E10', [data.incoterms, data.namedPlace].filter(Boolean).join(' '), 9);
  } else if (!pl) { put('E6', data.lcNo || '', 7); put('H6', data.lcDate || '', 9); block('E', 9, 10, data.lcBank || '', 9); }
  const goods = (data.rows || []).filter(row => [row.description, row.quantity, row.unitPrice, row.netWeight, row.grossWeight, row.hsCode, row.marks, row.packageNo].some(value => value !== '' && value !== undefined && value !== null));
  const capacity = pl ? 20 : 22;
  if (goods.length > capacity) validation(`Goods: maximum ${capacity} rows; received ${goods.length}.`);
  let qty = 0, amount = 0, net = 0, gross = 0, cbm = 0;
  for (let i = 0; i < capacity; i++) {
    const rowNumber = 24 + i;
    for (const col of ['A', 'C', 'E', 'G', 'H', 'I']) put(`${col}${rowNumber}`, null);
    const row = goods[i]; if (!row) continue;
    const q = numeric(row.quantity, 'Quantity'); qty += q;
    put(`A${rowNumber}`, [row.packageNo, row.marks].filter(Boolean).join(' / '), 2);
    put(`C${rowNumber}`, [row.description, pl ? '' : row.unit].filter(Boolean).join(' / '), 4);
    put(`E${rowNumber}`, q, 6, Number.isInteger(q) ? '#,##0' : '#,##0.000');
    if (pl) {
      const factor = { kg: 1, lb: 0.45359237 }[row.weightUnit || 'kg'];
      const unit = { mm: .001, cm: .01, m: 1, in: .0254, ft: .3048 }[row.dimensionUnit || 'cm'];
      if (!factor || !unit) validation('Unsupported weight or dimension unit.');
      const n = numeric(row.netWeight, 'Net weight') * factor, g = numeric(row.grossWeight, 'Gross weight') * factor;
      const c = numeric(row.length, 'Length') * numeric(row.width, 'Width') * numeric(row.height, 'Height') * unit ** 3 * q;
      net += n; gross += g; cbm += c;
      put(`G${rowNumber}`, n, 7, '#,##0.00'); put(`H${rowNumber}`, g, 8, '#,##0.00'); put(`I${rowNumber}`, c, 9, '0.000');
    } else {
      const price = numeric(row.unitPrice, 'Unit price'), value = q * price; amount += value;
      put(`G${rowNumber}`, price, 7, '#,##0.00'); put(`H${rowNumber}`, value, 8, '#,##0.00'); put(`I${rowNumber}`, String(row.hsCode || ''), 9);
    }
  }
  if (pi) {
    for (const row of [48, 49, 50]) { copyStyle(`E${row}`, 'E47'); copyStyle(`F${row}`, 'F47'); copyStyle(`H${row}`, 'H47'); addMerge(`E${row}:F${row}`); }
    copyStyle('A50', 'E50'); copyStyle('B50', 'F50'); copyStyle('C50', 'G50'); copyStyle('D50', 'H50'); addMerge('A50:B50');
    replaceText('E47', `SUBTOTAL (${data.currency || ''}) :`); replaceText('E48', 'DISCOUNT :'); replaceText('E49', 'ADD. CHARGES :'); replaceText('E50', 'GRAND TOTAL :'); replaceText('A50', 'Authorized Signature');
  }
  if (goods.length) {
    if (pl) { put('E44', qty, 6, Number.isInteger(qty) ? '#,##0' : '#,##0.000'); put('G44', net, 7, '#,##0.00'); put('H44', gross, 8, '#,##0.00'); put('I44', cbm, 9, '0.000'); }
    else {
      const charges = pi ? numeric(data.additionalCharges, 'Additional charges') : numeric(data.freight, 'Freight') + numeric(data.insurance, 'Insurance') + numeric(data.packing, 'Packing') + numeric(data.otherCharges, 'Other charges');
      const discount = numeric(data.discount, 'Discount');
      const total = amount + charges - discount;
      if (!Number.isFinite(total) || total < 0) validation('Invalid invoice total.');
      put('H46', qty, 9, Number.isInteger(qty) ? '#,##0' : '#,##0.000');
      if (pi) {
        put('H47', Math.round(amount * 100) / 100, 9, '#,##0.00'); put('H48', discount, 9, '#,##0.00'); put('H49', charges, 9, '#,##0.00'); put('H50', Math.round(total * 100) / 100, 9, '#,##0.00');
      } else put('H47', Math.round(total * 100) / 100, 9, '#,##0.00');
    }
  }
  if (pl) {
    const workbook = parse(await zip.file('xl/workbook.xml').async('string'));
    one(workbook.documentElement, 'externalReferences')?.remove();
    zip.file('xl/workbook.xml', new XMLSerializer().serializeToString(workbook));
    for (const [file, tag, attr, matches] of [
      ['xl/_rels/workbook.xml.rels', 'Relationship', 'Type', value => value.endsWith('/externalLink')],
      ['[Content_Types].xml', 'Override', 'PartName', value => value.startsWith('/xl/externalLinks/')]
    ]) {
      const xml = parse(await zip.file(file).async('string'));
      direct(xml.documentElement, tag).filter(n => matches(n.getAttribute(attr) || '')).forEach(n => n.remove());
      zip.file(file, new XMLSerializer().serializeToString(xml));
    }
    Object.keys(zip.files).filter(name => name.startsWith('xl/externalLinks/')).forEach(name => zip.remove(name));
  }
  xfs.setAttribute('count', direct(xfs, 'xf').length); formats.setAttribute('count', direct(formats, 'numFmt').length);
  zip.file('xl/worksheets/sheet1.xml', new XMLSerializer().serializeToString(sheet));
  zip.file('xl/styles.xml', new XMLSerializer().serializeToString(styles));
  return new Blob([await zip.generateAsync({ type: 'uint8array', compression: 'DEFLATE' })], { type: MIME });
}
