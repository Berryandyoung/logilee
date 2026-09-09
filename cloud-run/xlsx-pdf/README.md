# LOGILEE XLSX PDF converter

Dedicated CI/PL XLSX -> PDF only. Runtime documents exist only in request-specific temporary directories and are deleted before sending the in-memory result. No contents, filenames, user fields or LibreOffice stderr/stdout are logged.

Raw POST /convert/xlsx-to-pdf with the XLSX MIME type and an allowed Origin. Maximum upload 256KiB, unpacked 8MiB, 200 ZIP entries. Rejects formulas, external relationships, macros, embeddings, external connections, unsupported sheets and invalid XML. No paths/URLs/options accepted. GET /health performs no conversion.

Initial deployment target: logilee-cms/us-central1/logilee-xlsx-pdf, 1CPU, 1GiB, Cloud Run timeout60s, concurrency2, min0/max1. One conversion per instance via semaphore; concurrent excess returns429. Process timeout45s kills process group. Global per-instance six requests/minute with Retry-After. Allowed origin https://www.logilee.com only, no wildcard or cookies. PDF no-store.

Origin checks are NOT authentication. Throttle is per-instance, resets on restart and is not a distributed quota; max instances is not a hard billing cap. This is a bounded low-volume public service, vulnerable to deliberate denial of service. Do not raise caps without stronger verified App Check/edge rate controls. No user-login requirement. Runtime identity should have no project roles and no service-account keys. Cloud Build identity must be separate and narrowly scoped.

The image uses Debian-maintained LibreOffice plus redistributable Noto/Liberation fonts. Record the actual built version/digest; Windows LibreOffice26.2.4.2/Malgun results do not establish Linux fidelity. Cloud Build runs the actual Docker image against synthetic real-generator fixtures BEFORE deployment. Do not switch frontend until visually reviewing container and direct deployed PDFs. CI/PL-only; PI/SI deferred.

Costs depend on active CPU/memory time, build minutes, image storage and networking. Min0 avoids idle instance cost; cold/warm timings must be measured, not guessed. No monthly estimate without traffic. Generated synthetic QA artifacts are not runtime document storage and must be removed from temporary build storage after review.
