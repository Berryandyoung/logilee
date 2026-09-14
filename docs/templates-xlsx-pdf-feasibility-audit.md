# Templates XLSX-to-PDF Feasibility Audit

Date: 2026-09-07. Phase A only. Baseline: f74c245.
No runtime, workbook, frontend, backend, or production deployment changes made.
PASS means the stated narrow check passed, not end-to-end product acceptance.

## ARCHITECTURE

1. Current Templates runtime status: PASS (unchanged locally; prior production recovery verified, not re-tested in this audit).
2. Current XLSX generation path: PASS (inspected). `baseXlsxBlob` loads the approved base with ExcelJS, inserts model values/items/totals, sets print area, and serializes in the browser.
3. Current PDF generation path: FAIL against the new target. `exportTemplate` calls independent `pdfBlob(id, d)`; it does not render XLSX bytes. Left intact until conversion QA passes.
4. Cloud Run feasibility: NOT VERIFIED for a new standalone deployment. Authenticated Firebase listing confirms project `logilee-cms`, five ACTIVE gcfv2 functions, Node.js 22, region us-central1, with backing Run service IDs. This proves existing infrastructure, not permission to deploy a new service, build images, or alter IAM/billing. Firebase configuration defines Functions only; static frontend remains GitHub Pages.
5. LibreOffice version: NOT VERIFIED. No `soffice`/`libreoffice`, Docker, or gcloud found on PATH or checked standard installation paths. No executable conversion test performed.
6. Font strategy: NOT VERIFIED. Bases reference Malgun Gothic (both) and Calibri (CI). Proposed container fonts: open Noto Sans CJK KR and a freely distributable Latin family with explicit substitutions. Do not copy proprietary fonts. Substitution fidelity requires rendering tests.
7. Security strategy: NOT VERIFIED, not implemented. Proposed strict XLSX-only validation; reject macros, embedded objects, external relationships and archive traversal; bound compressed/uncompressed sizes and entry counts. Use patched LibreOffice, non-root isolated process/profile per request, restricted network access and no document persistence. No App Check integration found in inspected project JS. Public browser access needs verified abuse control before deployment; CORS alone is not authentication.
8. Cost/resource configuration: NOT VERIFIED, provisional only. Start benchmark at 1 vCPU, 2 GiB, concurrency 1, min instances 0, max instances 1, request billing, 60s HTTP deadline and shorter 40s child-process deadline. Measure cold start and conversion time before selection. Low volume can benefit from free allowance, but builds, image storage, egress and abuse can still incur costs. No resources provisioned.

## XLSX

9. CI.xlsx unchanged: PASS. Repo base SHA-256 equals the user Downloads/CI.xlsx: `1C8B70094FFCCD8FB21ECF4D628E329089ABEA1F37D218A341A041AB1B38B8C8`; 13,686 bytes.
10. PL.xlsx unchanged: PASS. Repo base SHA-256 equals the user Downloads/PL.xlsx: `CF7AD8FDB9EC8CC2D37FBE1196D2ABDF2FA67965D39BE8F64446A12A7C625E05`; 14,054 bytes.
11. Multiline root cause: PASS (code/style evidence). `topValues` joins parties with LF, but cell assignment sets only `.value`, does not normalize CR/CRLF, and does not enable wrapText. Inspected target cells have no wrapText. A4/A9 are 14.25pt high and not vertically merged, so wrapping alone risks clipping four-line addresses.
12. Multiline fix: NOT VERIFIED / not applied during audit. Proposed normalize CRLF/CR to LF and merge wrapText into existing alignment on populated multiline cells only. Do not change base files. If fixed geometry clips text, report rendered evidence and seek approval before geometry changes; do not claim LF presence equals visible multiline success.
13. CI blank XLSX: PASS for unchanged source identity and prior user acceptance; fresh production download NOT VERIFIED this audit.
14. CI populated XLSX: NOT VERIFIED for requested multiline acceptance.
15. PL blank XLSX: PASS for unchanged source identity and prior user acceptance; fresh production download NOT VERIFIED this audit.
16. PL populated XLSX: NOT VERIFIED for requested multiline acceptance.

## CONVERSION

17. Blank CI XLSX-to-PDF: NOT VERIFIED.
18. Populated CI XLSX-to-PDF: NOT VERIFIED.
19. Blank PL XLSX-to-PDF: NOT VERIFIED.
20. Populated PL XLSX-to-PDF: NOT VERIFIED.
21. Korean text: NOT VERIFIED in LibreOffice output.
22. Multiline: NOT VERIFIED visually; fixed-height risk identified above.
23. Borders: NOT VERIFIED in LibreOffice output; bases unchanged.
24. Merged cells: NOT VERIFIED in LibreOffice output; existing merges inspected, not modified.
25. Page scaling: NOT VERIFIED in output. Both bases use A4 portrait, fitToPage=true, fitToWidth=1, fitToHeight=1. CI scale=90; PL scale=88. No defined print-area names exposed by ExcelJS in original bases. Existing runtime sets print area during population. Do not silently alter these settings.
26. Multi-page: NOT VERIFIED. CI capacity 22, PL 21; existing export inserts rows above totals for up to 50 items. Existing fitToHeight=1 may shrink over-capacity output rather than paginate. Test before proposing corrections.
27. Excel/LibreOffice material differences: NOT VERIFIED; no LibreOffice output or Microsoft Excel comparison available. Pixel parity is not claimed.

## BACKEND

28. Endpoint architecture: NOT VERIFIED / not built. Proposed dedicated Cloud Run XLSX-to-PDF endpoint in existing project, separate from existing Functions and static hosting. SI is currently DOCX-based; do not force it into XLSX. Consider DOCX conversion separately after CI/PL validation. Checklist XLSX layout also needs separate audit before enabling conversion.
29. Request validation: NOT VERIFIED / not implemented. Proposed POST only, XLSX MIME, nonempty body, ZIP/OOXML structure and restrictive feature allowlist; signature alone is insufficient.
30. File size limit: NOT VERIFIED / proposed 2 MiB compressed, bounded expanded ZIP contents and output. Blank inputs are about 14 KiB; populated/PDF sizes must be measured.
31. Timeout: NOT VERIFIED / proposed 40s subprocess, 60s endpoint, bounded client request; kill process group on expiry, not only return HTTP timeout.
32. Concurrency: NOT VERIFIED / proposed 1 per instance until measured.
33. Max instances: NOT VERIFIED / proposed 1, not a hard spending cap.
34. Temp-file cleanup: NOT VERIFIED / proposed unique request temp directory and unique LibreOffice profile; finally cleanup on success/failure, process termination before deletion.
35. CORS: NOT VERIFIED / proposed exact https://www.logilee.com and https://logilee.com origins; explicit dev-only localhost allowlist; no wildcard credentials.
36. Abuse protection: NOT VERIFIED. Require server-verified low-friction attestation/rate controls plus size/time/instance bounds. App Check setup and identity-based throttling are not yet available. Do not deploy unrestricted anonymous conversion. An origin check or embedded frontend secret is not sufficient.
37. Logging/privacy: NOT VERIFIED / not implemented. Only operational ID, duration, byte counts, status/category; no body, document text, filenames containing business data, or raw converter stderr. Ephemeral files only; no Firestore/Cloud Storage document persistence.

## FRONTEND

38. PDF button integration: NOT VERIFIED / intentionally unchanged pending conversion QA.
39. Button loading state: NOT VERIFIED / not implemented; eventual button-local state only.
40. PDF failure isolation: NOT VERIFIED for new service; no service dependency introduced into editor.
41. XLSX independence: PASS by current code inspection; generation remains browser-side.
42. Save/Reset: NOT VERIFIED again this audit; untouched.
43. Add/Delete: NOT VERIFIED again this audit; untouched.
44. Preview: NOT VERIFIED again this audit; untouched.
45. Direct routing: NOT VERIFIED again this audit; untouched.
46. KO: NOT VERIFIED again this audit; untouched.
47. EN: NOT VERIFIED again this audit; untouched.
48. 1440: NOT VERIFIED this audit.
49. 390: NOT VERIFIED this audit.

## REGRESSION

50. field() collision regression: PASS for preservation of f74c245 fix; no runtime modifications made.
51. Runtime initialization: PASS for unchanged source, not a new browser acceptance run.
52. No permanent loading: NOT VERIFIED again this audit; prior recovery evidence is not fresh QA.
53. No old custom PDF execution: FAIL against target, intentionally retained until replacement validates.
54. CI/PL bases untouched: PASS, hashes match approved originals.

## DELIVERY

55. Files changed: PASS (audit only): this report; no product files changed.
56. Backend service files: NOT VERIFIED / none added.
57. Commits: NOT VERIFIED / no new commit. Baseline f74c245.
58. Push: NOT VERIFIED / no push performed.
59. Cloud Run deployment: NOT VERIFIED / none performed.
60. Production service URL: NOT VERIFIED / no conversion service created.
61. GitHub Pages propagation: NOT VERIFIED / no frontend deployment initiated.
62. Production CI PDF: FAIL against new architecture; existing custom path remains.
63. Production PL PDF: FAIL against new architecture; existing custom path remains.
64. Production XLSX regression: NOT VERIFIED again this audit; base hashes unchanged.
65. Git status: PASS for initially clean main tracking origin/main; this audit report is a new local file, not committed.
66. Remaining issues: NOT VERIFIED: runnable LibreOffice/container environment, standalone Cloud Run permissions and billing, abuse controls, font/layout fidelity, multiline clipping, overflow pagination, conversion endpoint, integration and full downloaded-file QA.
67. Final result: NOT VERIFIED. Phase A findings recorded; no COMPLETE claim. Proceed with a controlled LibreOffice test environment before implementing or switching production conversion.

## References

- [Cloud Run container contract](https://docs.cloud.google.com/run/docs/container-contract): temporary writable filesystem consumes instance memory; process/request limits need explicit design.
- [Cloud Run memory configuration](https://docs.cloud.google.com/run/docs/configuring/services/memory-limits): benchmark working set plus per-request memory.
- [Cloud Run pricing](https://cloud.google.com/run/pricing): region, billing mode and measured runtime determine cost; zero minimum instances does not guarantee zero total cost.
- [LibreOffice command-line parameters](https://help.libreoffice.org/latest/en-GB/text/shared/guide/start_parameters.html): supported headless/conversion/profile options; exact XLSX conversion still needs execution in selected image.

Candidate command for validation, not a tested implementation:
`soffice -env:UserInstallation=file:///tmp/<unique>/profile --headless --convert-to pdf:calc_pdf_Export --outdir /tmp/<unique>/out /tmp/<unique>/input.xlsx`

Do not apply SinglePageSheets or overwrite print setup to conceal pagination problems.
