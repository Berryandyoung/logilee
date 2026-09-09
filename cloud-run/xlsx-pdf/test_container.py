"""Runs inside the final image. Inputs are synthetic QA fixtures, never user data."""
import concurrent.futures
import io
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import time
import zipfile

sys.path.insert(0, '/app')
import app as service

root = Path('/qa')
headers = {'Origin': 'https://www.logilee.com', 'Content-Type': service.MIME}
results = {'version': subprocess.check_output(['libreoffice', '--version'], text=True).strip(), 'conversions': []}
baseline = set(Path(tempfile.gettempdir()).glob('logilee-*'))

for kind in ['CI', 'PL', 'PI', 'SI']:
    data = (root / (kind + '.xlsx')).read_bytes()
    started = time.monotonic()
    pdf = service.convert(data)
    (root / (kind + '.pdf')).write_bytes(pdf)
    results['conversions'].append({'kind': kind, 'bytes': len(pdf), 'seconds': time.monotonic() - started})
    # Separate diagnostic copy only; the primary fixtures remain byte-identical.
    with zipfile.ZipFile(io.BytesIO(data)) as z:
        destination = io.BytesIO()
        with zipfile.ZipFile(destination, 'w', zipfile.ZIP_DEFLATED) as target:
            for name in z.namelist():
                content = z.read(name)
                if name == 'xl/worksheets/sheet1.xml':
                    content = content.replace(b'GANGNAM-GU, SEOUL', '\uc11c\uc6b8\ud2b9\ubcc4\uc2dc'.encode()).replace(b'REPUBLIC OF KOREA', '\ub300\ud55c\ubbfc\uad6d'.encode()).replace(b'BUSAN', '\ubd80\uc0b0\ud56d'.encode())
                target.writestr(name, content)
    (root / (kind + '-korean.pdf')).write_bytes(service.convert(destination.getvalue()))

def rewrite_xlsx(data, transform, extra=None):
    source = zipfile.ZipFile(io.BytesIO(data))
    destination = io.BytesIO()
    with source, zipfile.ZipFile(destination, 'w', zipfile.ZIP_DEFLATED) as target:
        for name in source.namelist():
            target.writestr(name, transform(name, source.read(name)))
        if extra:
            for name, content in extra.items():
                target.writestr(name, content)
    return destination.getvalue()

ci_data = (root / 'CI.xlsx').read_bytes()
unknown = rewrite_xlsx(ci_data, lambda name, content: content.replace(b'name="CI"', b'name="UNKNOWN"') if name == 'xl/workbook.xml' else content)
macro = rewrite_xlsx(ci_data, lambda _name, content: content, {'xl/vbaProject.bin': b'not-a-real-macro'})
external = rewrite_xlsx(ci_data, lambda name, content: content.replace(b'</Relationships>', b'<Relationship Id="externalQA" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink" Target="https://example.invalid/book.xlsx" TargetMode="External"/></Relationships>') if name == 'xl/_rels/workbook.xml.rels' else content)
for label, payload in [('unknown-sheet', unknown), ('macro', macro), ('external-link', external), ('corrupt', b'PK\x03\x04broken')]:
    try:
        service.validate_xlsx(payload)
        raise AssertionError(label + ' accepted')
    except service.ConversionError as error:
        assert error.status == 400, label
results['rejections'] = {'unknownSheet': 'PASS', 'macro': 'PASS', 'externalLink': 'PASS', 'corrupt': 'PASS'}

with service.app.test_client() as client:
    assert client.post('/convert/xlsx-to-pdf', data=b'bad', headers=headers).status_code == 400
    assert client.post('/convert/xlsx-to-pdf', data=b'x' * (service.MAX_BYTES + 1), headers=headers).status_code == 413
    assert client.post('/convert/xlsx-to-pdf', data=b'x', headers={'Origin': 'https://evil.invalid'}).status_code == 403
    assert client.get('/convert/xlsx-to-pdf').status_code == 405
    assert client.options('/convert/xlsx-to-pdf', headers=headers).status_code == 204
    assert client.get('/health').json == {'ready': True}

def request_conversion(kind):
    with service.app.test_client() as client:
        response = client.post('/convert/xlsx-to-pdf', data=(root / (kind + '.xlsx')).read_bytes(), headers=headers)
        assert response.status_code in (200, 429)
        if response.status_code == 200:
            assert response.data.startswith(b'%PDF-')
            (root / (kind + '-concurrent.pdf')).write_bytes(response.data)
        return response.status_code

with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
    results['concurrentStatuses'] = list(pool.map(request_conversion, ['CI', 'PL']))
assert 200 in results['concurrentStatuses']
assert set(Path(tempfile.gettempdir()).glob('logilee-*')) == baseline
results['cleanup'] = 'PASS'
results['validation'] = {'CI': 'PASS', 'PL': 'PASS', 'PI': 'PASS', 'SI': 'PASS', 'oversized': 'PASS'}
(root / 'container-qa.json').write_text(json.dumps(results, indent=2))
print(json.dumps(results))
