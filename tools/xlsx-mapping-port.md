# CI/PL Mapping Port

Real entry: assets/logilee-documents.js baseXlsxBlob(), formerly driven by xlsxLayouts and topValues().
Reference: isolated mapping-correction/build.cjs build()/savePreservingPackage(), then Phase B.3 PL E6:E21 alignment correction. Neither reference was imported or deployed; experimental output approval did not change production code.

| Document | Field | Legacy destination/behavior | Validated destination/behavior | Change |
| --- | --- | --- | --- | --- |
| Both | Exporter | A4, concatenated | A4:A7, one logical line per row | Distribute LF-normalized lines |
| Both | Consignee | A9, concatenated | A9:A12 | Distribute lines |
| Both | Notify | A14, concatenated/formula | A14:A17 | Distribute; clear external formula/link |
| Both | Loading | E19 | A19:B19 | Write A19 |
| Both | Destination | omitted | C19:D19 | Write C19 |
| Both | Carrier | E21, combined | A21:B21 | Write A21 |
| Both | Sailing | E21, combined | C21:D21 | Write C21 |
| Both | Invoice number | H4, combined | E4:G4 | Separate E4 |
| Both | Invoice date | H4, combined | H4:I4 | Separate H4 |
| CI | L/C number/date | H6, combined | E6 / H6:I6 | Separate |
| CI | L/C bank | H9 | E9:E10 | Line-distributed |
| CI | Remarks | H12 | E12:E21 | One line/row, independent left alignment |
| PL | Remarks | H6 | E6:E21 | One line/row, independent left alignment |
| CI | Goods marks | A24:A45 | same | Preserve |
| CI | Description/unit | C24:C45 | same; unit appended | Preserve |
| CI | Quantity | E24:E45 | same; numeric | Independent center style |
| CI | Unit price | G24:G45 | same; two decimals | Independent style |
| CI | Amount | H24:H45 | same; quantity * unit price | Numeric/two decimals |
| CI | HS code | I24:I45 | same; text | Preserve leading zeroes |
| CI | Quantity total | E46, overwrites label | H46 | Sum quantities |
| CI | Amount total | H47, includes extras | H47 | Preserve business total (goods + entered adjustments), two decimals |
| PL | Goods marks | A24:A44 | A24:A43 | Capacity 20; no total-row overwrite |
| PL | Description | C24:C44 | C24:C43 | Capacity 20 |
| PL | Quantity | E24:E44 | E24:E43 | Numeric |
| PL | Net/gross weight | G/H24:44 | G/H24:43 | Existing kg conversion, two decimals |
| PL | CBM | I24:I44, dimensions + text | I24:I43, numeric CBM | Three decimals; existing unit conversion |
| PL | Totals | E/G/H/I45 | E/G/H/I44 | Sum quantity/net/gross/CBM; retain row45 labels |
| Both | Signature | untouched | untouched | Preserve |
| Both | Geometry | insert rows beyond capacity | fixed normal capacity, reject overflow | CI22/PL20 |
| CI | Print | forced A1:K50 | source settings, no defined print area | Remove override for CI/PL |
| PL | Print | forced A1:I50 | source settings, no defined print area | Remove override for CI/PL |

No new destinations invented for UI-only fields (contact/tax/ship-to, incoterms/named place, mode, currency, buyer reference, origin, discharge, packing reference, dimensions). They were not in the accepted fixed-form mapping; retain UI/model and existing calculations, do not overwrite source labels to add fields. Country values are not automatically appended to party blocks because default country selections would populate blank forms and duplicate country lines already entered in addresses. This matches the actual B.2 party-line mapping; explicit address lines remain authoritative.

Overflow: reject excess logical lines or goods, never truncate/resize/insert/shrink. Text-width validation uses the existing block width, not only the narrow anchor cell. Invalid numeric input rejected. All changes confined to CI/PL XLSX export; other formats/templates stay on existing paths.
