"""Narrow, ephemeral conversion endpoint. Never log uploaded document contents."""
import io
import json
import os
from pathlib import Path, PurePosixPath
import signal
import subprocess
import tempfile
import threading
import time
import uuid
import zipfile

from defusedxml import ElementTree as XML
from flask import Flask, request, Response

MIME = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
MAX_BYTES = 256 * 1024
MAX_UNPACKED = 8 * 1024 * 1024
TIMEOUT = 45
ORIGINS = set(os.environ.get('ALLOWED_ORIGINS', 'https://www.logilee.com').split(','))
app = Flask(__name__)
app.config['MAX_CONTENT_LENGTH'] = MAX_BYTES
slot = threading.BoundedSemaphore(1)
rate_lock = threading.Lock()
starts = []


class ConversionError(Exception):
    def __init__(self, code, status=422):
        self.code, self.status = code, status


def validate_xlsx(payload):
    if not payload or len(payload) > MAX_BYTES or not payload.startswith(b'PK\x03\x04'):
        raise ConversionError('INVALID_FILE', 400)
    try:
        with zipfile.ZipFile(io.BytesIO(payload)) as package:
            entries = package.infolist()
            names = [entry.filename for entry in entries]
            if len(entries) > 200 or len(set(names)) != len(names):
                raise ValueError('entries')
            if sum(entry.file_size for entry in entries) > MAX_UNPACKED:
                raise ValueError('size')
            required = {'[Content_Types].xml', 'xl/workbook.xml', 'xl/worksheets/sheet1.xml'}
            if not required.issubset(names):
                raise ValueError('workbook')
            for entry in entries:
                name = entry.filename
                if name.startswith('/') or '..' in PurePosixPath(name).parts or '\\' in name or entry.flag_bits & 1:
                    raise ValueError('path')
                if any(part in name.lower() for part in ['vbaproject', 'externallink', 'embeddings/', 'activex/', 'connections.xml', 'querytables/']):
                    raise ValueError('active content')
                if name.endswith('.xml') or name.endswith('.rels'):
                    tree = XML.fromstring(package.read(entry))
                    for node in tree.iter():
                        tag = node.tag.rsplit('}', 1)[-1]
                        if tag in {'f', 'externalReferences', 'externalLink', 'oleObject'}:
                            raise ValueError('formula or external data')
                        if node.attrib.get('TargetMode', '').lower() == 'external':
                            raise ValueError('external relationship')
                        if any(x in node.attrib.get('ContentType', '').lower() for x in ['macroenabled', 'vba', 'oleobject']):
                            raise ValueError('macro')
            workbook = XML.fromstring(package.read('xl/workbook.xml'))
            sheets = [n for n in workbook.iter() if n.tag.rsplit('}', 1)[-1] == 'sheet']
            if len(sheets) != 1 or sheets[0].attrib.get('name') not in {'CI', 'PL', 'SI'}:
                raise ValueError('unsupported template')
    except ConversionError:
        raise
    except Exception:
        raise ConversionError('INVALID_FILE', 400) from None


def convert(payload):
    validate_xlsx(payload)
    with tempfile.TemporaryDirectory(prefix='logilee-') as work:
        root = Path(work)
        source = root / 'input.xlsx'
        output = root / 'output'
        output.mkdir()
        source.write_bytes(payload)
        command = ['libreoffice', '-env:UserInstallation=' + (root / 'profile').as_uri(),
                   '--headless', '--nologo', '--nodefault', '--norestore',
                   '--convert-to', 'pdf:calc_pdf_Export', '--outdir', str(output), str(source)]
        try:
            process = subprocess.Popen(command, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, start_new_session=True)
            try:
                code = process.wait(timeout=TIMEOUT)
            except subprocess.TimeoutExpired:
                os.killpg(process.pid, signal.SIGKILL)
                process.wait()
                raise ConversionError('CONVERSION_TIMEOUT', 504) from None
            files = list(output.iterdir())
            if code or files != [output / 'input.pdf']:
                raise ConversionError('CONVERSION_FAILED')
            if files[0].stat().st_size > 4 * 1024 * 1024:
                raise ConversionError('CONVERSION_FAILED')
            result = files[0].read_bytes()
            if not result.startswith(b'%PDF-'):
                raise ConversionError('CONVERSION_FAILED')
            return result
        except OSError:
            raise ConversionError('CONVERSION_FAILED', 503) from None


@app.after_request
def headers(response):
    response.headers['Cache-Control'] = 'no-store'
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['Vary'] = 'Origin'
    if request.headers.get('Origin') in ORIGINS:
        response.headers['Access-Control-Allow-Origin'] = request.headers['Origin']
    return response


@app.errorhandler(413)
def too_large(_):
    return {'error': 'FILE_TOO_LARGE'}, 413


@app.get('/health')
def health():
    return {'ready': True}


@app.route('/convert/xlsx-to-pdf', methods=['POST', 'OPTIONS'])
def endpoint():
    if request.headers.get('Origin') not in ORIGINS:
        return {'error': 'ORIGIN_NOT_ALLOWED'}, 403
    if request.method == 'OPTIONS':
        response = Response(status=204)
        response.headers['Access-Control-Allow-Methods'] = 'POST'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
        response.headers['Access-Control-Max-Age'] = '600'
        return response
    if request.mimetype != MIME:
        return {'error': 'INVALID_FILE'}, 415
    if request.content_length is None or request.content_length < 1:
        return {'error': 'INVALID_FILE'}, 400
    if request.content_length > MAX_BYTES:
        return {'error': 'FILE_TOO_LARGE'}, 413
    with rate_lock:
        now = time.monotonic()
        starts[:] = [t for t in starts if now - t < 60]
        if len(starts) >= 6:
            return {'error': 'RATE_LIMITED'}, 429, {'Retry-After': '60'}
        starts.append(now)
    if not slot.acquire(blocking=False):
        return {'error': 'BUSY'}, 429, {'Retry-After': '5'}
    started, request_id = time.monotonic(), str(uuid.uuid4())
    category, input_size, output_size = 'SUCCESS', 0, 0
    try:
        payload = request.get_data(cache=False)
        input_size = len(payload)
        result = convert(payload)
        output_size = len(result)
        return Response(result, mimetype='application/pdf', headers={'Content-Disposition': 'attachment; filename="document.pdf"'})
    except ConversionError as error:
        category = error.code
        return {'error': error.code}, error.status
    except Exception:
        category = 'CONVERSION_FAILED'
        return {'error': category}, 500
    finally:
        slot.release()
        print(json.dumps({'requestId': request_id, 'inputBytes': input_size, 'outputBytes': output_size,
                          'durationMs': round((time.monotonic() - started) * 1000), 'category': category}), flush=True)
