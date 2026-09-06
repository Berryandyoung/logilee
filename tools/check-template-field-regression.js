const fs = require('node:fs');
const vm = require('node:vm');
const cp = require('node:child_process');
const assert = require('node:assert/strict');
for (const ref of ['9ba70dc', '2491565', 'working']) {
  const source = ref === 'working' ? fs.readFileSync('assets/logilee-documents.js', 'utf8') : cp.execFileSync('git', ['show', ref + ':assets/logilee-templates.js'], { encoding: 'utf8' });
  const declarations = [...source.matchAll(/^  function field\([^]*?^  }/gm)].map(match => match[0]).join('\n');
  try {
    const output = vm.runInNewContext(declarations + ';field("invoiceNo", "Invoice No.", "CI-1", "Help")', { attr: String, esc: String });
    assert.match(output, /CI-1/);
    assert.notEqual(ref, '2491565');
    console.log(ref + ': input rendering PASS');
  } catch (error) {
    if (ref !== '2491565') throw error;
    assert.match(error.message, /page.text is not a function/);
    console.log(ref + ': reproduced ' + error.stack);
  }
}
