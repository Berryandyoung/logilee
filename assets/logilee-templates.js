(function () {
  const lang = document.documentElement.lang === "ko" ? "ko" : "en";
  const root = document.querySelector("[data-template-builder]");
  if (!root) return;

  const T = lang === "ko" ? {
    search: "템플릿 검색", all: "전체", trade: "무역서류", shipping: "운송", checklist: "체크리스트",
    start: "작성하기", save: "로컬 저장", reset: "초기화", preview: "미리보기", addRow: "행 추가", remove: "삭제",
    download: "다운로드", saved: "브라우저에 저장된 초안이 있습니다.", clearConfirm: "현재 초안을 초기화할까요?",
    noResults: "검색 조건에 맞는 템플릿이 없습니다.", back: "템플릿 목록", importCi: "Commercial Invoice에서 불러오기",
    toCi: "Commercial Invoice로 전환", toPacking: "Packing List 생성", toSi: "Shipping Instruction 생성",
    draftExists: "대상 문서에 저장된 초안이 있습니다. 현재 공통 값을 덮어쓸까요?",
    disclaimer: "LOGILEE 템플릿은 일반적인 무역·물류 실무를 돕기 위한 참고 도구입니다. 목적지 국가, 상품, 거래조건, 운송사 및 관계 기관에 따라 추가 정보나 별도 양식이 요구될 수 있습니다.",
    missing: "입력을 확인하세요", required: "필수 항목이 비어 있습니다.", invalidNumber: "수량과 금액은 0 이상 숫자로 입력하세요.",
    namedPlace: "Incoterms 조건에는 Named Place도 함께 확인하세요. 예: FOB Busan.",
    qtyMismatch: "Commercial Invoice와 Packing List의 수량이 다릅니다. 확인하세요.",
    exported: "파일을 생성했습니다.", related: "관련 도구", draftSaved: "초안을 저장했습니다.", resetDone: "초안을 초기화했습니다."
  } : {
    search: "Search templates", all: "All", trade: "Trade Documents", shipping: "Shipping", checklist: "Checklists",
    start: "Start", save: "Save locally", reset: "Reset", preview: "Preview", addRow: "Add row", remove: "Remove",
    download: "Download", saved: "A local draft is saved in this browser.", clearConfirm: "Reset the current draft?",
    noResults: "No templates match your filters.", back: "Template list", importCi: "Import from Commercial Invoice",
    toCi: "Convert to Commercial Invoice", toPacking: "Create Packing List", toSi: "Create Shipping Instruction",
    draftExists: "The target document already has a saved draft. Replace matching shared fields?",
    disclaimer: "LOGILEE templates are practical reference tools. Additional information or specific forms may be required depending on the destination, goods, transaction terms, carrier, or relevant authorities.",
    missing: "Check inputs", required: "A required field is missing.", invalidNumber: "Quantity and amount fields must be zero or positive numbers.",
    namedPlace: "Confirm the Named Place with the Incoterms rule. Example: FOB Busan.",
    qtyMismatch: "Commercial Invoice and Packing List quantities differ. Please check.",
    exported: "File generated.", related: "Related tools", draftSaved: "Draft saved locally.", resetDone: "Draft reset."
  };

  const esc = (value) => String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const attr = (value) => esc(value).replace(/"/g, "&quot;");
  const num = (value) => Number.isFinite(Number(value)) ? Number(value) : 0;
  const money = (value) => num(value).toLocaleString(lang === "ko" ? "ko-KR" : "en-US", { maximumFractionDigits: 2 });
  const today = () => new Date().toISOString().slice(0, 10);
  const storageKey = (id) => `logilee:template-builder:v1:${id}`;
  const countries = () => (window.LOGILEE_COUNTRY_OPTIONS || [["KR", "South Korea", "대한민국"], ["US", "United States", "미국"], ["CN", "China", "중국"], ["JP", "Japan", "일본"], ["DE", "Germany", "독일"], ["VN", "Vietnam", "베트남"]]);
  const countryOptions = (value = "") => countries().map(([code, en, ko]) => `<option value="${code}" ${value === code ? "selected" : ""}>${lang === "ko" ? ko : en}</option>`).join("");
  const currencyOptions = (value = "USD") => ["USD", "KRW", "EUR", "CNY", "JPY", "GBP", "CAD", "AUD", "SGD", "VND"].map((code) => `<option value="${code}" ${value === code ? "selected" : ""}>${code}</option>`).join("");
  const incotermsOptions = (value = "") => ["", "EXW", "FCA", "FOB", "CFR", "CIF", "DAP", "DPU", "DDP"].map((code) => `<option value="${code}" ${value === code ? "selected" : ""}>${code || "-"}</option>`).join("");
  const unitOptions = (value = "pcs") => ["pcs", "kg", "lb", "carton", "pallet", "box", "set"].map((code) => `<option value="${code}" ${value === code ? "selected" : ""}>${code}</option>`).join("");
  const weightOptions = (value = "kg") => ["kg", "lb"].map((code) => `<option value="${code}" ${value === code ? "selected" : ""}>${code}</option>`).join("");
  const dimensionOptions = (value = "cm") => ["mm", "cm", "m", "in", "ft"].map((code) => `<option value="${code}" ${value === code ? "selected" : ""}>${code}</option>`).join("");
  const dimToM = { mm: 0.001, cm: 0.01, m: 1, in: 0.0254, ft: 0.3048 };
  const weightToKg = { kg: 1, lb: 0.45359237 };

  const templates = [
    { id: "commercial-invoice", category: "trade", formats: ["XLSX", "PDF"], title: "Commercial Invoice", ko: "상업송장", descKo: "수출입 거래와 통관에 활용되는 기본 거래 서류", descEn: "Sales and customs value document for trade shipments.", aliases: "commercial invoice 상업송장 invoice ci customs value" },
    { id: "packing-list", category: "trade", formats: ["XLSX", "PDF"], title: "Packing List", ko: "포장명세서", descKo: "포장 수량, 중량, 치수, 마크 정보를 정리하는 서류", descEn: "Package, weight, dimension, and marks reference for the physical cargo.", aliases: "packing list 포장명세서 package cbm" },
    { id: "pro-forma-invoice", category: "trade", formats: ["XLSX", "PDF"], title: "Pro Forma Invoice", ko: "견적송장", descKo: "견적 및 거래조건 협의를 위한 참고 문서", descEn: "Reference invoice for proposed transaction terms before final invoicing.", aliases: "pro forma proforma 견적송장 quotation" },
    { id: "shipping-instruction", category: "shipping", formats: ["DOCX", "PDF"], title: "Shipping Instruction", ko: "선적요청 정보", descKo: "선사·포워더에 전달할 선적 정보를 정리하는 범용 참고 양식", descEn: "General reference form for preparing shipping instruction data.", aliases: "shipping instruction si 선적요청 선적지시" },
    { id: "shipment-checklist", category: "checklist", formats: ["XLSX", "PDF"], title: "Shipment Checklist", ko: "선적 체크리스트", descKo: "선적 업무의 주요 확인사항을 단계별로 정리하는 실무 체크리스트", descEn: "Operational checklist for common shipment preparation and follow-up tasks.", aliases: "shipment checklist 체크리스트 booking documentation departure destination" }
  ];

  const defaults = {
    "commercial-invoice": () => ({ invoiceNo: "INV-2026-001", invoiceDate: today(), buyerRef: "", currency: "USD", paymentTerms: "T/T", sellerName: "", sellerAddress: "", sellerCountry: "KR", sellerContact: "", sellerTax: "", buyerName: "", buyerAddress: "", buyerCountry: "US", buyerContact: "", shipSame: true, shipName: "", shipAddress: "", shipCountry: "US", incoterms: "FOB", namedPlace: "Busan", mode: "Ocean", origin: "KR", destination: "US", freight: 0, insurance: 0, packing: 0, otherCharges: 0, discount: 0, rows: [goodsRow(), goodsRow()] }),
    "packing-list": () => ({ packingNo: "PL-2026-001", invoiceNo: "", packingDate: today(), sellerName: "", sellerAddress: "", buyerName: "", buyerAddress: "", mode: "Ocean", carrier: "", loading: "Busan", discharge: "", finalDestination: "", rows: [packageRow(), packageRow()] }),
    "pro-forma-invoice": () => ({ proformaNo: "PF-2026-001", issueDate: today(), validUntil: "", buyerRef: "", estimatedShipDate: "", sellerName: "", sellerAddress: "", sellerCountry: "KR", buyerName: "", buyerAddress: "", buyerCountry: "US", currency: "USD", incoterms: "FOB", namedPlace: "Busan", paymentTerms: "T/T", discount: 0, freight: 0, insurance: 0, remarks: "", rows: [goodsRow()] }),
    "shipping-instruction": () => ({ bookingNo: "BOOKING123", siRef: "SI-2026-001", blType: "Sea Waybill", freightTerms: "Prepaid", shipperName: "", shipperAddress: "", shipperCountry: "KR", shipperContact: "", consigneeName: "", consigneeAddress: "", consigneeCountry: "US", consigneeContact: "", notifyName: "", notifyAddress: "", notifyCountry: "US", notifyContact: "", receipt: "", loading: "Busan", discharge: "", delivery: "", vessel: "", containerNo: "", containerType: "", seal: "", vgm: "", vgmMethod: "", rows: [cargoRow()] }),
    "shipment-checklist": () => ({ reference: "SHIP-2026-001", notes: "", items: checklistItems().map((item) => ({ id: item.id, checked: false, owner: "", due: "" })) })
  };

  function goodsRow() { return { description: "", hsCode: "", quantity: 1, unit: "pcs", unitPrice: 0, origin: "" }; }
  function packageRow() { return { packageNo: "", type: "Carton", marks: "", description: "", quantity: 1, unit: "pcs", netWeight: 0, grossWeight: 0, weightUnit: "kg", length: 0, width: 0, height: 0, dimensionUnit: "cm" }; }
  function cargoRow() { return { containerNo: "", sealNo: "", marks: "", packages: 1, packageType: "Carton", description: "", hsCode: "", grossWeight: 0, weightUnit: "kg", cbm: 0 }; }
  function checklistItems() {
    const groups = lang === "ko"
      ? [["Before Booking", ["Buyer/order details confirmed", "Incoterms confirmed", "Cargo dimensions / weight confirmed", "HS classification reviewed", "DG / Reefer / OOG applicability reviewed"]], ["Booking", ["Carrier / forwarder selected", "Booking confirmation received", "Cut-off checked", "Equipment confirmed"]], ["Documentation", ["Commercial Invoice prepared", "Packing List prepared", "Shipping Instruction prepared/submitted externally", "Certificate of Origin requirement checked", "Export/customs requirements checked"]], ["Before Departure", ["Cargo delivered", "VGM submitted if applicable", "Draft B/L reviewed", "Export clearance status checked"]], ["After Departure", ["Final B/L or AWB received", "Buyer notified", "Document dispatch checked", "Payment milestone checked"]], ["Destination", ["Import documents shared", "Arrival information checked", "DEM/DET free time checked", "Customs / broker coordination checked"]]]
      : [["Before Booking", ["Buyer/order details confirmed", "Incoterms confirmed", "Cargo dimensions / weight confirmed", "HS classification reviewed", "DG / Reefer / OOG applicability reviewed"]], ["Booking", ["Carrier / forwarder selected", "Booking confirmation received", "Cut-off checked", "Equipment confirmed"]], ["Documentation", ["Commercial Invoice prepared", "Packing List prepared", "Shipping Instruction prepared/submitted externally", "Certificate of Origin requirement checked", "Export/customs requirements checked"]], ["Before Departure", ["Cargo delivered", "VGM submitted if applicable", "Draft B/L reviewed", "Export clearance status checked"]], ["After Departure", ["Final B/L or AWB received", "Buyer notified", "Document dispatch checked", "Payment milestone checked"]], ["Destination", ["Import documents shared", "Arrival information checked", "DEM/DET free time checked", "Customs / broker coordination checked"]]];
    return groups.flatMap(([group, rows]) => rows.map((label, index) => ({ id: `${group}-${index}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"), group, label })));
  }

  let state = { selected: new URLSearchParams(location.search).get("template") || "", category: "all", query: "", mobile: "form", data: {} };
  templates.forEach((tpl) => state.data[tpl.id] = loadDraft(tpl.id));

  function loadDraft(id) {
    try { return { ...defaults[id](), ...(JSON.parse(localStorage.getItem(storageKey(id)) || "null") || {}) }; }
    catch { return defaults[id](); }
  }
  function saveDraft(id) {
    localStorage.setItem(storageKey(id), JSON.stringify(state.data[id]));
    toast(T.draftSaved);
  }
  function toast(text) {
    const node = root.querySelector("[data-template-status]");
    if (node) node.textContent = text;
  }
  function setUrl() {
    const url = new URL(location.href);
    if (state.selected) url.searchParams.set("template", state.selected); else url.searchParams.delete("template");
    history.replaceState(null, "", url);
  }

  function render() {
    setUrl();
    root.innerHTML = `${titleMarkup()}${state.selected ? builderMarkup() : hubMarkup()}<p class="sr-only" aria-live="polite" data-template-status></p>`;
    bind();
  }

  function titleMarkup() {
    const lead = lang === "ko"
      ? "무역·물류 서류를 웹에서 작성하고 작성 가이드를 확인한 뒤 파일로 내려받으세요."
      : "Create practical trade and logistics documents in your browser, review field-level guidance, and export the finished document.";
    return `<section class="page-title template-title"><p class="eyebrow">Resources</p><h1>${lang === "ko" ? "템플릿" : "Templates"}</h1><p class="lead">${lead}</p></section>`;
  }

  function hubMarkup() {
    const cats = [["all", T.all], ["trade", T.trade], ["shipping", T.shipping], ["checklist", T.checklist]];
    const visible = templates.filter((tpl) => (state.category === "all" || tpl.category === state.category) && `${tpl.title} ${tpl.ko} ${tpl.aliases}`.toLowerCase().includes(state.query.toLowerCase()));
    return `
      <section class="panel template-hub-controls">
        <label><span>${T.search}</span><input type="search" data-template-search value="${attr(state.query)}" placeholder="Commercial Invoice, 상업송장, Shipping Instruction"></label>
        <div class="template-filter-row">${cats.map(([id, label]) => `<button type="button" data-template-category="${id}" aria-pressed="${state.category === id}">${label}</button>`).join("")}</div>
      </section>
      <section class="template-card-grid">${visible.length ? visible.map(cardMarkup).join("") : `<div class="panel data-empty">${T.noResults}</div>`}</section>
    `;
  }

  function cardMarkup(tpl) {
    return `
      <article class="panel template-card">
        <span class="kicker">${tpl.category === "shipping" ? T.shipping : tpl.category === "checklist" ? T.checklist : T.trade}</span>
        <h2>${tpl.title}</h2>
        <strong>${tpl.ko}</strong>
        <p>${lang === "ko" ? tpl.descKo : tpl.descEn}</p>
        <div class="template-formats">${tpl.formats.map((item) => `<span>${item}</span>`).join("")}</div>
        <button class="primary-btn" type="button" data-open-template="${tpl.id}">${T.start} <span aria-hidden="true">→</span></button>
      </article>
    `;
  }

  function builderMarkup() {
    const tpl = templates.find((item) => item.id === state.selected) || templates[0];
    const data = state.data[tpl.id];
    const saved = localStorage.getItem(storageKey(tpl.id)) ? `<p class="template-draft-note">${T.saved}</p>` : "";
    return `
      <section class="template-builder-head">
        <button type="button" class="secondary-btn" data-template-back>${T.back}</button>
        <div><span class="kicker">${tpl.formats.join(" · ")}</span><h2>${tpl.title}</h2><p>${lang === "ko" ? tpl.descKo : tpl.descEn}</p></div>
      </section>
      <section class="template-mobile-tabs" aria-label="Builder view"><button type="button" data-mobile-view="form" aria-pressed="${state.mobile === "form"}">${lang === "ko" ? "작성" : "Form"}</button><button type="button" data-mobile-view="preview" aria-pressed="${state.mobile === "preview"}">${T.preview}</button></section>
      <section class="template-builder-grid">
        <form class="panel template-form ${state.mobile === "preview" ? "is-mobile-hidden" : ""}" data-template-form>
          ${saved}
          ${formMarkup(tpl.id, data)}
          <p class="template-guardrail">${T.disclaimer}</p>
        </form>
        <aside class="panel template-preview-panel ${state.mobile === "form" ? "is-mobile-hidden" : ""}">
          <div class="template-actions">${actionMarkup(tpl)}</div>
          <div class="template-warnings" data-template-warnings>${warnings(tpl.id, data).map((msg) => `<p>${esc(msg)}</p>`).join("")}</div>
          ${previewMarkup(tpl.id, data)}
        </aside>
      </section>
    `;
  }

  function field(name, label, value, help, type = "text") {
    return `<label class="template-field"><span>${label}<button type="button" aria-label="${attr(help)}" title="${attr(help)}">i</button></span><input name="${name}" type="${type}" value="${attr(value)}"><small>${help}</small></label>`;
  }
  function selectField(name, label, options, help) {
    return `<label class="template-field"><span>${label}<button type="button" aria-label="${attr(help)}" title="${attr(help)}">i</button></span><select name="${name}">${options}</select><small>${help}</small></label>`;
  }
  function section(title, body) { return `<fieldset class="template-section"><legend>${title}</legend>${body}</fieldset>`; }

  function formMarkup(id, d) {
    if (id === "shipment-checklist") return checklistForm(d);
    const commonHelp = lang === "ko" ? {
      ref: "거래별로 구분 가능한 관리번호를 입력하세요.", currency: "거래 금액에 적용되는 통화를 선택하세요.", incoterms: "조건명과 함께 Named Place를 확인하세요. 예: FOB Busan / CIF Rotterdam", hs: "확인된 분류번호가 있는 경우 입력하세요. 이 입력란이 HS 분류 자체를 검증하지는 않습니다.", desc: "화물을 식별할 수 있을 정도로 구체적으로 작성하는 것이 좋습니다."
    } : {
      ref: "Use a reference that distinguishes this transaction.", currency: "Select the currency used for the transaction value.", incoterms: "Confirm the rule together with the named place, e.g. FOB Busan or CIF Rotterdam.", hs: "Enter a confirmed classification if available. This field does not validate HS classification.", desc: "Use enough detail for trade and logistics parties to identify the goods."
    };
    if (id === "commercial-invoice") return [
      section("Document", field("invoiceNo", "Invoice No.", d.invoiceNo, commonHelp.ref) + field("invoiceDate", "Invoice Date", d.invoiceDate, commonHelp.ref, "date") + field("buyerRef", "Buyer Reference / PO No.", d.buyerRef, "Optional buyer reference.") + selectField("currency", "Currency", currencyOptions(d.currency), commonHelp.currency) + field("paymentTerms", "Terms of Payment", d.paymentTerms, "Payment terms shown on the invoice.")),
      partyFields("seller", "Seller", d, true), partyFields("buyer", "Buyer", d, false), shipToFields(d),
      section("Shipment", selectField("incoterms", "Incoterms", incotermsOptions(d.incoterms), commonHelp.incoterms) + field("namedPlace", "Named Place", d.namedPlace, commonHelp.incoterms) + field("mode", "Mode of Transport", d.mode, "Ocean, air, truck, courier, or multimodal.") + selectField("origin", "Country of Origin", countryOptions(d.origin), "Country where the goods originate.") + selectField("destination", "Country of Destination", countryOptions(d.destination), "Destination country for this shipment.")),
      goodsRows(id, d.rows, commonHelp), chargesFields(d)
    ].join("");
    if (id === "packing-list") return [
      section("Reference", field("packingNo", "Packing List No.", d.packingNo, commonHelp.ref) + field("invoiceNo", "Invoice No.", d.invoiceNo, "Related invoice reference.") + field("packingDate", "Packing Date / Shipment Date", d.packingDate, "Date used for the packing record.", "date")),
      section("Seller / Shipper", field("sellerName", "Company Name", d.sellerName, "Company shown as seller or shipper.") + field("sellerAddress", "Address", d.sellerAddress, "Use the address requested by your partner.")),
      section("Buyer / Consignee", field("buyerName", "Company Name", d.buyerName, "Company receiving or buying the goods.") + field("buyerAddress", "Address", d.buyerAddress, "Use the address requested by your partner.")),
      section("Shipment", field("mode", "Mode", d.mode, "Ocean, air, truck, courier, or multimodal.") + field("carrier", "Carrier", d.carrier, "Optional carrier or forwarder reference.") + field("loading", "Port/Airport of Loading", d.loading, "Loading location.") + field("discharge", "Port/Airport of Discharge", d.discharge, "Discharge location.") + field("finalDestination", "Final Destination", d.finalDestination, "Final delivery destination.")),
      `<button type="button" class="secondary-btn" data-import-ci>${T.importCi}</button>${packageRows(d.rows)}`
    ].join("");
    if (id === "pro-forma-invoice") return [
      `<p class="template-guardrail">${lang === "ko" ? "견적 및 거래조건 협의를 위한 참고 문서입니다. 최종 Commercial Invoice와 용도를 혼동하지 마세요." : "A pro forma invoice is used to present proposed transaction terms and should not be confused with the final commercial invoice."}</p>`,
      section("Document", field("proformaNo", "Pro Forma No.", d.proformaNo, commonHelp.ref) + field("issueDate", "Issue Date", d.issueDate, commonHelp.ref, "date") + field("validUntil", "Valid Until", d.validUntil, "Date through which the proposal is valid.", "date") + field("buyerRef", "Buyer Reference", d.buyerRef, "Optional buyer reference.") + field("estimatedShipDate", "Estimated Shipping Date", d.estimatedShipDate, "Estimated shipment timing.", "date")),
      partyFields("seller", "Seller", d, true), partyFields("buyer", "Buyer", d, false), goodsRows(id, d.rows, commonHelp),
      section("Commercial Terms", selectField("currency", "Currency", currencyOptions(d.currency), commonHelp.currency) + selectField("incoterms", "Incoterms", incotermsOptions(d.incoterms), commonHelp.incoterms) + field("namedPlace", "Named Place", d.namedPlace, commonHelp.incoterms) + field("paymentTerms", "Payment Terms", d.paymentTerms, "Proposed payment terms.") + field("discount", "Discount", d.discount, "Estimated discount.", "number") + field("freight", "Estimated Freight", d.freight, "Estimated freight amount.", "number") + field("insurance", "Estimated Insurance", d.insurance, "Estimated insurance amount.", "number") + field("remarks", "Remarks", d.remarks, "Optional commercial note."))
    ].join("");
    return [
      `<p class="template-guardrail">${lang === "ko" ? "선사·포워더에 전달할 선적 정보를 정리하는 범용 참고 양식입니다. 실제 제출 전 선택한 선사 또는 포워더의 공식 요구사항을 확인하세요." : "This is a general reference form for preparing shipping instruction data. Verify the selected carrier or forwarder's official requirements before submission."}</p>`,
      section("Document", field("bookingNo", "Booking No.", d.bookingNo, "Carrier or forwarder booking reference.") + field("siRef", "SI Reference", d.siRef, commonHelp.ref) + field("blType", "Requested B/L Type", d.blType, "Requested transport document type.") + field("freightTerms", "Freight Terms", d.freightTerms, "Prepaid or collect reference.")),
      partyFields("shipper", "Shipper", d, true), partyFields("consignee", "Consignee", d, true), partyFields("notify", "Notify Party", d, true),
      section("Routing", field("receipt", "Place of Receipt", d.receipt, "Place where cargo is received.") + field("loading", "Port of Loading", d.loading, "Loading port.") + field("discharge", "Port of Discharge", d.discharge, "Discharge port.") + field("delivery", "Place of Delivery", d.delivery, "Final delivery place.") + field("vessel", "Vessel / Voyage", d.vessel, "Optional vessel and voyage.")),
      siRows(d.rows), section("Container / VGM", field("containerNo", "Container No.", d.containerNo, "Use when container details are known.") + field("containerType", "Container Type", d.containerType, "Example: 20GP, 40HC.") + field("seal", "Seal", d.seal, "Seal number if available.") + field("vgm", "VGM", d.vgm, "Use only when VGM applies.", "number") + field("vgmMethod", "VGM Method", d.vgmMethod, "Method 1 or Method 2 where required."))
    ].join("");
  }

  function partyFields(prefix, title, d, country = false) {
    return section(title, field(`${prefix}Name`, "Company Name", d[`${prefix}Name`], "Legal or trade name used on the document.") + field(`${prefix}Address`, "Address", d[`${prefix}Address`], "Address requested for this transaction.") + (country ? selectField(`${prefix}Country`, "Country", countryOptions(d[`${prefix}Country`]), "Country for this party.") : "") + field(`${prefix}Contact`, "Contact", d[`${prefix}Contact`] || "", "Optional operational contact."));
  }
  function shipToFields(d) {
    return section("Ship To", `<label class="template-check"><input type="checkbox" name="shipSame" ${d.shipSame ? "checked" : ""}> ${lang === "ko" ? "Buyer와 동일" : "Same as Buyer"}</label>` + field("shipName", "Company", d.shipName, "Ship-to company if different.") + field("shipAddress", "Address", d.shipAddress, "Ship-to address if different.") + selectField("shipCountry", "Country", countryOptions(d.shipCountry), "Ship-to country."));
  }
  function goodsRows(id, rows, help) {
    return section("Goods", `<div class="template-row-table">${rows.map((row, i) => `<div class="template-row" data-row="${i}">${field(`rows.${i}.description`, "Description", row.description, help.desc)}${field(`rows.${i}.hsCode`, "HS Code", row.hsCode, help.hs)}${field(`rows.${i}.quantity`, "Quantity", row.quantity, "Quantity for this line.", "number")}${selectField(`rows.${i}.unit`, "Unit", unitOptions(row.unit), "Unit of measure.")}${field(`rows.${i}.unitPrice`, "Unit Price", row.unitPrice, "Unit price.", "number")}${field(`rows.${i}.origin`, "Origin Override", row.origin, "Optional country of origin override.")}<button type="button" data-remove-row="${i}">${T.remove}</button></div>`).join("")}</div><button type="button" class="secondary-btn" data-add-row="${id}">${T.addRow}</button>`);
  }
  function chargesFields(d) {
    return section("Charges", field("freight", "Freight", d.freight, "Freight amount if included.", "number") + field("insurance", "Insurance", d.insurance, "Insurance amount if included.", "number") + field("packing", "Packing", d.packing, "Packing charge if included.", "number") + field("otherCharges", "Other Charges", d.otherCharges, "Other invoice charges.", "number") + field("discount", "Discount", d.discount, "Discount deducted from the invoice total.", "number"));
  }
  function packageRows(rows) {
    return section("Package Rows", `<div class="template-row-table">${rows.map((row, i) => `<div class="template-row" data-row="${i}">${["packageNo", "type", "marks", "description"].map((key) => field(`rows.${i}.${key}`, key === "packageNo" ? "Package No." : key === "type" ? "Package Type" : key === "marks" ? "Marks & Numbers" : "Description", row[key], "Package-level packing information.")).join("")}${field(`rows.${i}.quantity`, "Quantity", row.quantity, "Package or item quantity.", "number")}${selectField(`rows.${i}.unit`, "Unit", unitOptions(row.unit), "Unit.")}${field(`rows.${i}.netWeight`, "Net Weight", row.netWeight, "Net weight.", "number")}${field(`rows.${i}.grossWeight`, "Gross Weight", row.grossWeight, "Gross weight.", "number")}${selectField(`rows.${i}.weightUnit`, "Weight Unit", weightOptions(row.weightUnit), "kg or lb.")}${field(`rows.${i}.length`, "Length", row.length, "Package length.", "number")}${field(`rows.${i}.width`, "Width", row.width, "Package width.", "number")}${field(`rows.${i}.height`, "Height", row.height, "Package height.", "number")}${selectField(`rows.${i}.dimensionUnit`, "Dimension Unit", dimensionOptions(row.dimensionUnit), "Dimension unit.")}<button type="button" data-remove-row="${i}">${T.remove}</button></div>`).join("")}</div><button type="button" class="secondary-btn" data-add-row="packing-list">${T.addRow}</button>`);
  }
  function siRows(rows) {
    return section("Cargo", `<div class="template-row-table">${rows.map((row, i) => `<div class="template-row" data-row="${i}">${field(`rows.${i}.containerNo`, "Container No.", row.containerNo, "Optional container number.")}${field(`rows.${i}.sealNo`, "Seal No.", row.sealNo, "Optional seal number.")}${field(`rows.${i}.marks`, "Marks & Numbers", row.marks, "Cargo marks.")}${field(`rows.${i}.packages`, "Number of Packages", row.packages, "Package count.", "number")}${field(`rows.${i}.packageType`, "Package Type", row.packageType, "Package type.")}${field(`rows.${i}.description`, "Cargo Description", row.description, "Cargo description.")}${field(`rows.${i}.hsCode`, "HS Code", row.hsCode, "Optional HS Code.")}${field(`rows.${i}.grossWeight`, "Gross Weight", row.grossWeight, "Gross weight.", "number")}${selectField(`rows.${i}.weightUnit`, "Weight Unit", weightOptions(row.weightUnit), "kg or lb.")}${field(`rows.${i}.cbm`, "Measurement / CBM", row.cbm, "Measurement in CBM.", "number")}<button type="button" data-remove-row="${i}">${T.remove}</button></div>`).join("")}</div><button type="button" class="secondary-btn" data-add-row="shipping-instruction">${T.addRow}</button>`);
  }
  function checklistForm(d) {
    const items = checklistItems();
    const checked = new Set((d.items || []).filter((item) => item.checked).map((item) => item.id));
    return `<p class="template-guardrail">${lang === "ko" ? "선적 업무의 주요 확인사항을 단계별로 정리하는 LOGILEE 실무 체크리스트입니다." : "A LOGILEE operational checklist for tracking common shipment preparation and follow-up tasks."}</p>${field("reference", "Shipment Reference", d.reference, "Internal shipment reference.")}${section("Notes", `<textarea name="notes">${esc(d.notes || "")}</textarea>`)}${[...new Set(items.map((item) => item.group))].map((group) => {
      const groupItems = items.filter((item) => item.group === group);
      const done = groupItems.filter((item) => checked.has(item.id)).length;
      return section(`${group} (${done}/${groupItems.length})`, groupItems.map((item) => `<label class="template-check"><input type="checkbox" name="items.${item.id}" ${checked.has(item.id) ? "checked" : ""}> ${esc(item.label)}</label>`).join(""));
    }).join("")}`;
  }

  function totals(id, d) {
    if (id === "packing-list") {
      return d.rows.reduce((acc, row) => {
        const cbm = num(row.length) * dimToM[row.dimensionUnit] * num(row.width) * dimToM[row.dimensionUnit] * num(row.height) * dimToM[row.dimensionUnit] * num(row.quantity);
        acc.packages += 1; acc.quantity += num(row.quantity); acc.net += num(row.netWeight) * weightToKg[row.weightUnit]; acc.gross += num(row.grossWeight) * weightToKg[row.weightUnit]; acc.cbm += Number.isFinite(cbm) ? cbm : 0; return acc;
      }, { packages: 0, quantity: 0, net: 0, gross: 0, cbm: 0 });
    }
    const goods = (d.rows || []).reduce((sum, row) => sum + num(row.quantity) * num(row.unitPrice), 0);
    return { goods, total: goods + num(d.freight) + num(d.insurance) + num(d.packing) + num(d.otherCharges) - num(d.discount) };
  }
  function warnings(id, d) {
    const list = [];
    const rows = d.rows || [];
    if (id === "commercial-invoice" && !d.invoiceNo) list.push(`Invoice No.: ${T.required}`);
    if (id === "packing-list" && !d.packingNo) list.push(`Packing List No.: ${T.required}`);
    if (id === "pro-forma-invoice" && !d.proformaNo) list.push(`Pro Forma No.: ${T.required}`);
    if (id === "shipping-instruction" && !d.siRef && !d.bookingNo) list.push(`SI Reference / Booking No.: ${T.required}`);
    rows.forEach((row, i) => {
      if ("description" in row && !String(row.description || "").trim()) list.push(`Row ${i + 1}: ${T.required}`);
      if (num(row.quantity ?? row.packages) <= 0 || num(row.unitPrice ?? 0) < 0) list.push(`Row ${i + 1}: ${T.invalidNumber}`);
    });
    if ((d.incoterms || "") && !String(d.namedPlace || "").trim()) list.push(T.namedPlace);
    if (id === "packing-list") {
      const ci = state.data["commercial-invoice"];
      const ciQty = (ci.rows || []).reduce((sum, row) => sum + num(row.quantity), 0);
      const plQty = (d.rows || []).reduce((sum, row) => sum + num(row.quantity), 0);
      if (ciQty && plQty && ciQty !== plQty) list.push(T.qtyMismatch);
    }
    return list;
  }

  function previewMarkup(id, d) {
    const title = templates.find((tpl) => tpl.id === id).title.toUpperCase();
    if (id === "shipment-checklist") return checklistPreview(d);
    const rows = d.rows || [];
    const total = totals(id, d);
    return `<article class="doc-preview" data-doc-preview><h2>${title}</h2>${documentSummary(id, d)}${partyPreview(d)}<table><thead><tr>${previewHeaders(id).map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => previewRow(id, row)).join("")}</tbody></table>${totalMarkup(id, total, d)}<footer>Created with LOGILEE</footer></article>`;
  }
  function documentSummary(id, d) {
    const rows = id === "commercial-invoice" ? [["Invoice No.", d.invoiceNo], ["Date", d.invoiceDate], ["Currency", d.currency], ["Incoterms", `${d.incoterms || ""} ${d.namedPlace || ""}`.trim()]]
      : id === "packing-list" ? [["Packing List No.", d.packingNo], ["Invoice No.", d.invoiceNo], ["Date", d.packingDate], ["Route", `${d.loading || ""} → ${d.discharge || ""}`]]
      : id === "pro-forma-invoice" ? [["Pro Forma No.", d.proformaNo], ["Issue Date", d.issueDate], ["Valid Until", d.validUntil], ["Currency", d.currency]]
      : [["Booking No.", d.bookingNo], ["SI Reference", d.siRef], ["B/L Type", d.blType], ["Freight Terms", d.freightTerms]];
    return `<dl>${rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>`;
  }
  function partyPreview(d) {
    const seller = d.sellerName || d.shipperName || "";
    const buyer = d.buyerName || d.consigneeName || "";
    return `<div class="doc-party-grid"><section><h3>Seller / Shipper</h3><p>${esc(seller)}<br>${esc(d.sellerAddress || d.shipperAddress || "")}</p></section><section><h3>Buyer / Consignee</h3><p>${esc(buyer)}<br>${esc(d.buyerAddress || d.consigneeAddress || "")}</p></section></div>`;
  }
  function previewHeaders(id) {
    if (id === "packing-list") return ["Package", "Description", "Qty", "Net", "Gross", "CBM"];
    if (id === "shipping-instruction") return ["Container", "Marks", "Packages", "Description", "HS", "Gross", "CBM"];
    return ["Description", "HS Code", "Qty", "Unit", "Unit Price", "Line Total"];
  }
  function previewRow(id, row) {
    if (id === "packing-list") {
      const cbm = num(row.length) * dimToM[row.dimensionUnit] * num(row.width) * dimToM[row.dimensionUnit] * num(row.height) * dimToM[row.dimensionUnit] * num(row.quantity);
      return `<tr><td>${esc(row.packageNo || row.type)}</td><td>${esc(row.description)}</td><td>${esc(row.quantity)} ${esc(row.unit)}</td><td>${money(num(row.netWeight) * weightToKg[row.weightUnit])} kg</td><td>${money(num(row.grossWeight) * weightToKg[row.weightUnit])} kg</td><td>${money(cbm)}</td></tr>`;
    }
    if (id === "shipping-instruction") return `<tr><td>${esc(row.containerNo)}</td><td>${esc(row.marks)}</td><td>${esc(row.packages)} ${esc(row.packageType)}</td><td>${esc(row.description)}</td><td>${esc(row.hsCode)}</td><td>${money(num(row.grossWeight) * weightToKg[row.weightUnit])} kg</td><td>${esc(row.cbm)}</td></tr>`;
    return `<tr><td>${esc(row.description)}</td><td>${esc(row.hsCode)}</td><td>${esc(row.quantity)}</td><td>${esc(row.unit)}</td><td>${money(row.unitPrice)}</td><td>${money(num(row.quantity) * num(row.unitPrice))}</td></tr>`;
  }
  function totalMarkup(id, total, d) {
    if (id === "packing-list") return `<dl class="doc-totals"><div><dt>Total Packages</dt><dd>${total.packages}</dd></div><div><dt>Total Quantity</dt><dd>${money(total.quantity)}</dd></div><div><dt>Total Net Weight</dt><dd>${money(total.net)} kg</dd></div><div><dt>Total Gross Weight</dt><dd>${money(total.gross)} kg</dd></div><div><dt>Total CBM</dt><dd>${money(total.cbm)}</dd></div></dl>`;
    if (id === "shipping-instruction") return `<p class="muted">${lang === "ko" ? "이 문서는 B/L이 아니며 carrier 제출 전 공식 요구사항 확인이 필요합니다." : "This is not a Bill of Lading. Check official carrier requirements before submission."}</p>`;
    return `<dl class="doc-totals"><div><dt>Goods Total</dt><dd>${esc(d.currency || "USD")} ${money(total.goods)}</dd></div><div><dt>Document Total</dt><dd>${esc(d.currency || "USD")} ${money(total.total)}</dd></div></dl>`;
  }
  function checklistPreview(d) {
    const items = checklistItems();
    const saved = new Map((d.items || []).map((item) => [item.id, item]));
    const done = items.filter((item) => saved.get(item.id)?.checked).length;
    return `<article class="doc-preview" data-doc-preview><h2>SHIPMENT CHECKLIST</h2><p>${lang === "ko" ? "선적 업무의 주요 확인사항을 단계별로 정리하는 LOGILEE 실무 체크리스트입니다." : "A LOGILEE operational checklist for tracking common shipment preparation and follow-up tasks."}</p><dl><div><dt>Reference</dt><dd>${esc(d.reference)}</dd></div><div><dt>Progress</dt><dd>${done}/${items.length}</dd></div></dl>${[...new Set(items.map((item) => item.group))].map((group) => `<section><h3>${esc(group)}</h3><ul>${items.filter((item) => item.group === group).map((item) => `<li>${saved.get(item.id)?.checked ? "☑" : "☐"} ${esc(item.label)}</li>`).join("")}</ul></section>`).join("")}<p>${esc(d.notes || "")}</p><footer>Created with LOGILEE</footer></article>`;
  }

  function actionMarkup(tpl) {
    const flow = tpl.id === "pro-forma-invoice" ? `<button type="button" data-flow-target="commercial-invoice">${T.toCi}</button>` : tpl.id === "commercial-invoice" ? `<button type="button" data-flow-target="packing-list">${T.toPacking}</button>` : tpl.id === "packing-list" ? `<button type="button" data-flow-target="shipping-instruction">${T.toSi}</button>` : "";
    return `<button type="button" data-save-template>${T.save}</button><button type="button" data-reset-template>${T.reset}</button>${flow}${tpl.formats.map((fmt) => `<button type="button" data-export-template="${fmt.toLowerCase()}">${T.download} ${fmt}</button>`).join("")}`;
  }

  function bind() {
    root.querySelector("[data-template-search]")?.addEventListener("input", (e) => { state.query = e.target.value; render(); });
    root.querySelectorAll("[data-template-category]").forEach((btn) => btn.addEventListener("click", () => { state.category = btn.dataset.templateCategory; render(); }));
    root.querySelectorAll("[data-open-template]").forEach((btn) => btn.addEventListener("click", () => { state.selected = btn.dataset.openTemplate; render(); }));
    root.querySelector("[data-template-back]")?.addEventListener("click", () => { state.selected = ""; render(); });
    root.querySelectorAll("[data-mobile-view]").forEach((btn) => btn.addEventListener("click", () => { state.mobile = btn.dataset.mobileView; render(); }));
    const form = root.querySelector("[data-template-form]");
    if (form) {
      form.addEventListener("input", (event) => {
        updateFromForm(event, false);
        refreshBuilderFeedback();
      });
      form.addEventListener("change", (event) => {
        updateFromForm(event, false);
        refreshBuilderFeedback();
      });
    }
    root.querySelector("[data-save-template]")?.addEventListener("click", () => saveDraft(state.selected));
    root.querySelector("[data-reset-template]")?.addEventListener("click", () => { if (confirm(T.clearConfirm)) { localStorage.removeItem(storageKey(state.selected)); state.data[state.selected] = defaults[state.selected](); toast(T.resetDone); render(); } });
    root.querySelector("[data-add-row]")?.addEventListener("click", () => { const rows = state.data[state.selected].rows; rows.push(state.selected === "packing-list" ? packageRow() : state.selected === "shipping-instruction" ? cargoRow() : goodsRow()); render(); });
    root.querySelectorAll("[data-remove-row]").forEach((btn) => btn.addEventListener("click", () => { const rows = state.data[state.selected].rows; if (rows.length > 1) rows.splice(Number(btn.dataset.removeRow), 1); render(); }));
    root.querySelector("[data-import-ci]")?.addEventListener("click", importCommercialInvoice);
    root.querySelectorAll("[data-flow-target]").forEach((btn) => btn.addEventListener("click", () => transferTo(btn.dataset.flowTarget)));
    root.querySelectorAll("[data-export-template]").forEach((btn) => btn.addEventListener("click", () => exportTemplate(btn.dataset.exportTemplate)));
  }

  function updateFromForm(event, rerender = true) {
    const d = state.data[state.selected];
    const target = event.target;
    if (!target.name) return;
    if (state.selected === "shipment-checklist" && target.name.startsWith("items.")) {
      const id = target.name.slice(6);
      const item = d.items.find((row) => row.id === id);
      if (item) item.checked = target.checked;
    } else if (target.name.includes(".")) {
      const [, index, key] = target.name.split(".");
      d.rows[Number(index)][key] = target.type === "number" ? num(target.value) : target.value;
    } else {
      d[target.name] = target.type === "checkbox" ? target.checked : target.type === "number" ? num(target.value) : target.value;
    }
    if (rerender) render();
  }

  function refreshBuilderFeedback() {
    const preview = root.querySelector("[data-doc-preview]");
    if (preview && state.selected) {
      preview.outerHTML = previewMarkup(state.selected, state.data[state.selected]);
    }
    const warningBox = root.querySelector("[data-template-warnings]");
    if (warningBox && state.selected) {
      warningBox.innerHTML = warnings(state.selected, state.data[state.selected]).map((msg) => `<p>${esc(msg)}</p>`).join("");
    }
  }

  function importCommercialInvoice() {
    const ci = state.data["commercial-invoice"];
    const pl = state.data["packing-list"];
    Object.assign(pl, { invoiceNo: ci.invoiceNo, sellerName: ci.sellerName, sellerAddress: ci.sellerAddress, buyerName: ci.buyerName, buyerAddress: ci.buyerAddress });
    pl.rows = (ci.rows || []).map((row, index) => ({ ...packageRow(), packageNo: String(index + 1), description: row.description, quantity: row.quantity, unit: row.unit }));
    render();
  }
  function transferTo(target) {
    if (localStorage.getItem(storageKey(target)) && !confirm(T.draftExists)) return;
    const src = state.data[state.selected];
    const dst = { ...state.data[target] };
    if (target === "commercial-invoice") Object.assign(dst, { invoiceNo: src.proformaNo?.replace(/^PF/, "INV") || dst.invoiceNo, invoiceDate: today(), sellerName: src.sellerName, sellerAddress: src.sellerAddress, sellerCountry: src.sellerCountry, buyerName: src.buyerName, buyerAddress: src.buyerAddress, buyerCountry: src.buyerCountry, currency: src.currency, incoterms: src.incoterms, namedPlace: src.namedPlace, paymentTerms: src.paymentTerms, freight: src.freight, insurance: src.insurance, discount: src.discount, rows: src.rows });
    if (target === "packing-list") Object.assign(dst, { invoiceNo: src.invoiceNo, sellerName: src.sellerName, sellerAddress: src.sellerAddress, buyerName: src.buyerName, buyerAddress: src.buyerAddress, rows: src.rows.map((row, i) => ({ ...packageRow(), packageNo: String(i + 1), description: row.description, quantity: row.quantity, unit: row.unit })) });
    if (target === "shipping-instruction") Object.assign(dst, { siRef: dst.siRef, shipperName: src.sellerName, shipperAddress: src.sellerAddress, consigneeName: src.buyerName, consigneeAddress: src.buyerAddress, loading: src.loading, discharge: src.discharge, delivery: src.finalDestination, rows: src.rows.map((row) => ({ ...cargoRow(), description: row.description, packages: row.quantity, packageType: row.unit, grossWeight: row.grossWeight, cbm: packageCbm(row) })) });
    state.data[target] = dst;
    saveDraft(target);
    state.selected = target;
    render();
  }
  function packageCbm(row) {
    return num(row.length) * dimToM[row.dimensionUnit] * num(row.width) * dimToM[row.dimensionUnit] * num(row.height) * dimToM[row.dimensionUnit] * num(row.quantity);
  }

  // One semantic row model feeds the web preview and every downloadable format.
  function exportRows(id, d) {
    const rows = [];
    const add = (...cells) => rows.push(cells);
    const party = (label, name, address, country, contact) => { add(label); add("Company Name", name); add("Address", address); if (country) add("Country", country); if (contact) add("Contact", contact); };
    const countryName = (code) => (countries().find((item) => item[0] === code) || ["", code, code])[1];
    const title = templates.find((tpl) => tpl.id === id).title.toUpperCase();
    add(title); add("Generated with LOGILEE");
    if (id === "commercial-invoice") {
      add("Invoice No.", d.invoiceNo); add("Invoice Date", d.invoiceDate); add("Buyer Reference / PO No.", d.buyerRef); add("Currency", d.currency); add("Terms of Payment", d.paymentTerms); add("");
      party("SELLER / EXPORTER", d.sellerName, d.sellerAddress, countryName(d.sellerCountry), d.sellerContact); add("");
      party("BUYER / CONSIGNEE", d.buyerName, d.buyerAddress, countryName(d.buyerCountry), d.buyerContact); add("");
      party("SHIP TO", d.shipSame ? d.buyerName : d.shipName, d.shipSame ? d.buyerAddress : d.shipAddress, countryName(d.shipSame ? d.buyerCountry : d.shipCountry), ""); add("");
      add("SHIPMENT / TRADE INFORMATION"); add("Incoterms® Rule", `${d.incoterms || ""} ${d.namedPlace || ""}`.trim()); add("Mode of Transport", d.mode); add("Country of Origin", countryName(d.origin)); add("Destination Country", countryName(d.destination)); add("");
      add("No.", "Description of Goods", "HS Code", "Country of Origin", "Quantity", "Unit", "Unit Price", "Amount");
      (d.rows || []).forEach((row, index) => add(index + 1, row.description, row.hsCode, countryName(row.origin || d.origin), num(row.quantity), row.unit, num(row.unitPrice), num(row.quantity) * num(row.unitPrice)));
      const total = totals(id, d); add(""); add("Subtotal", total.goods); add("Freight", num(d.freight)); add("Insurance", num(d.insurance)); add("Packing", num(d.packing)); add("Other Charges", num(d.otherCharges)); add("Discount", num(d.discount)); add("TOTAL", total.total, d.currency);
    } else if (id === "packing-list") {
      add("Packing List No.", d.packingNo); add("Invoice No.", d.invoiceNo); add("Date", d.packingDate); add("");
      party("SELLER / SHIPPER", d.sellerName, d.sellerAddress, "", ""); add(""); party("BUYER / CONSIGNEE", d.buyerName, d.buyerAddress, "", ""); add("");
      add("SHIPMENT INFORMATION"); add("Mode", d.mode); add("Port of Loading", d.loading); add("Port of Discharge", d.discharge); add("Final Destination", d.finalDestination); add("Carrier", d.carrier); add("");
      add("Package No.", "Marks & Numbers", "Package Type", "Description", "Quantity", "Unit", "Net Weight (kg)", "Gross Weight (kg)", "Dimensions", "CBM");
      (d.rows || []).forEach((row) => { const factor = weightToKg[row.weightUnit] || 1; const cbm = packageCbm(row); add(row.packageNo || row.type, row.marks, row.type, row.description, num(row.quantity), row.unit, num(row.netWeight) * factor, num(row.grossWeight) * factor, `${row.length} × ${row.width} × ${row.height} ${row.dimensionUnit}`, cbm); });
      const total = totals(id, d); add(""); add("Total Packages", total.packages); add("Total Quantity", total.quantity); add("Total Net Weight (kg)", total.net); add("Total Gross Weight (kg)", total.gross); add("Total CBM", total.cbm);
    } else if (id === "pro-forma-invoice") {
      add("Quotation / Reference", d.proformaNo); add("Issue Date", d.issueDate); add("Validity Date", d.validUntil); add("Estimated Shipping Date", d.estimatedShipDate); add("Buyer Reference", d.buyerRef); add("Currency", d.currency); add("Payment Terms", d.paymentTerms); add("Incoterms® / Named Delivery Point", `${d.incoterms || ""} ${d.namedPlace || ""}`.trim()); add("");
      party("SELLER", d.sellerName, d.sellerAddress, countryName(d.sellerCountry), ""); add(""); party("BUYER", d.buyerName, d.buyerAddress, countryName(d.buyerCountry), ""); add("");
      add("No.", "Quoted Items", "HS Code", "Country of Origin", "Quantity", "Unit", "Unit Price", "Extended Amount");
      (d.rows || []).forEach((row, index) => add(index + 1, row.description, row.hsCode, countryName(row.origin), num(row.quantity), row.unit, num(row.unitPrice), num(row.quantity) * num(row.unitPrice)));
      const total = totals(id, d); add(""); add("Quoted Goods Total", total.goods); add("Freight", num(d.freight)); add("Insurance", num(d.insurance)); add("Discount", num(d.discount)); add("QUOTED TOTAL", total.total, d.currency); add("Remarks", d.remarks);
    } else if (id === "shipping-instruction") {
      add("Booking No.", d.bookingNo); add("SI Reference", d.siRef); add("B/L Type", d.blType); add("Freight Terms", d.freightTerms); add("");
      party("SHIPPER", d.shipperName, d.shipperAddress, countryName(d.shipperCountry), d.shipperContact); add(""); party("CONSIGNEE", d.consigneeName, d.consigneeAddress, countryName(d.consigneeCountry), d.consigneeContact); add(""); if (d.notifyName) party("NOTIFY PARTY", d.notifyName, d.notifyAddress, countryName(d.notifyCountry), d.notifyContact); add("");
      add("ROUTING"); add("Place of Receipt", d.receipt); add("Port of Loading", d.loading); add("Port of Discharge", d.discharge); add("Place of Delivery", d.delivery); add("Vessel / Voyage", d.vessel); add("");
      add("Container No.", "Seal No.", "Marks & Numbers", "Packages", "Package Type", "Cargo Description", "HS Code", "Gross Weight (kg)", "CBM");
      (d.rows || []).forEach((row) => add(row.containerNo, row.sealNo, row.marks, num(row.packages), row.packageType, row.description, row.hsCode, num(row.grossWeight) * (weightToKg[row.weightUnit] || 1), num(row.cbm)));
      add(""); add("Reference", "General reference document - carrier/local requirements may vary.");
    } else {
      add("Shipment Reference", d.reference); add(""); add("Stage", "Check", "Task", "Owner", "Due Date", "Status", "Notes");
      const items = checklistItems(); const saved = new Map((d.items || []).map((item) => [item.id, item]));
      items.forEach((item) => { const value = saved.get(item.id) || {}; add(item.group, value.checked ? "Done" : "Open", item.label, value.owner || "", value.due || "", value.checked ? "Complete" : "Pending", d.notes || ""); });
    }
    return rows;
  }
  async function exportTemplate(format) {
    const id = state.selected;
    const d = state.data[id];
    const name = filename(id, d, format);
    const rows = exportRows(id, d);
    if (format === "xlsx") downloadBlob(await xlsxBlob(rows, id), name, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    if (format === "docx") downloadBlob(await docxBlob(rows, templates.find((tpl) => tpl.id === id).title), name, "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
    if (format === "pdf") downloadBlob(pdfBlob(rows.map((row) => row.join("  |  "))), name, "application/pdf");
    toast(T.exported);
  }
  function filename(id, d, format) {
    const ref = d.invoiceNo || d.packingNo || d.proformaNo || d.bookingNo || d.siRef || d.reference || id;
    return `${id}-${String(ref).replace(/[\\/:*?"<>|]+/g, "-")}.${format}`;
  }
  function downloadBlob(blob, name, type) {
    const url = URL.createObjectURL(blob instanceof Blob ? blob : new Blob([blob], { type }));
    const a = document.createElement("a");
    a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  }
  function xmlEscape(value) { return String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  async function xlsxBlob(rows, id) {
    const width = Math.max(2, Math.min(10, Math.max(...rows.map((row) => row.length))));
    const sheetRows = rows.map((row, r) => `<row r="${r + 1}" ht="${r === 0 ? 28 : 20}" customHeight="1">${row.map((cell, c) => {
      const ref = `${String.fromCharCode(65 + Math.min(c, 25))}${r + 1}`;
      if (cell === "") return `<c r="${ref}"/>`;
      return typeof cell === "number" && Number.isFinite(cell) ? `<c r="${ref}" s="2"><v>${cell}</v></c>` : `<c r="${ref}" t="inlineStr" s="${r === 0 ? 1 : 0}"><is><t>${xmlEscape(cell)}</t></is></c>`;
    }).join("")}</row>`).join("");
    const merges = rows[0]?.length ? `<mergeCells count="1"><mergeCell ref="A1:${String.fromCharCode(64 + width)}1"/></mergeCells>` : "";
    return zipBlob({
      "[Content_Types].xml": `<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>`,
      "_rels/.rels": `<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`,
      "xl/workbook.xml": `<?xml version="1.0" encoding="UTF-8"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="${id === "shipment-checklist" ? "Checklist" : "Document"}" sheetId="1" r:id="rId1"/></sheets></workbook>`,
      "xl/_rels/workbook.xml.rels": `<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>`,
      "xl/styles.xml": `<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><numFmts count="1"><numFmt numFmtId="4" formatCode="#,##0.00"/></numFmts><fonts count="2"><font><sz val="10"/><name val="Aptos"/></font><font><b/><sz val="15"/><name val="Aptos Display"/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="solid"><fgColor rgb="DCEBFF"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf/></cellStyleXfs><cellXfs count="3"><xf/><xf fontId="1" fillId="1"/><xf numFmtId="4"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles><dxfs count="0"/><tableStyles count="0" defaultTableStyle="TableStyleMedium2" defaultPivotStyle="PivotStyleMedium9"/></styleSheet>`,
      "xl/worksheets/sheet1.xml": `<?xml version="1.0" encoding="UTF-8"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><cols><col min="1" max="${width}" width="22" customWidth="1"/></cols><sheetData>${sheetRows}</sheetData>${merges}<pageMargins left="0.3" right="0.3" top="0.5" bottom="0.5" header="0.2" footer="0.2"/><pageSetup orientation="landscape" fitToWidth="1" fitToHeight="0"/><printOptions horizontalCentered="1"/></worksheet>`
    }, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  }
  async function docxBlob(rows, title) {
    const cell = (value, header = false) => `<w:tc><w:tcPr><w:tcW w:w="3000" w:type="dxa"/></w:tcPr><w:p><w:r>${header ? "<w:rPr><w:b/></w:rPr>" : ""}<w:t xml:space="preserve">${xmlEscape(value)}</w:t></w:r></w:p></w:tc>`;
    const table = `<w:tbl><w:tblPr><w:tblW w:w="9000" w:type="dxa"/><w:tblBorders><w:top w:val="single" w:sz="4" w:color="D7E2F0"/><w:left w:val="single" w:sz="4" w:color="D7E2F0"/><w:bottom w:val="single" w:sz="4" w:color="D7E2F0"/><w:right w:val="single" w:sz="4" w:color="D7E2F0"/><w:insideH w:val="single" w:sz="4" w:color="D7E2F0"/><w:insideV w:val="single" w:sz="4" w:color="D7E2F0"/></w:tblBorders></w:tblPr>${rows.map((row, index) => `<w:tr>${row.map((value) => cell(value, index === 0)).join("")}</w:tr>`).join("")}</w:tbl>`;
    const body = `<w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/><w:sz w:val="28"/></w:rPr><w:t>${xmlEscape(title)}</w:t></w:r></w:p>${table}<w:p><w:r><w:t>General reference document — carrier/local requirements may vary.</w:t></w:r></w:p>`;
    return zipBlob({
      "[Content_Types].xml": `<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>`,
      "_rels/.rels": `<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`,
      "word/document.xml": `<?xml version="1.0" encoding="UTF-8"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>${body}<w:sectPr/></w:body></w:document>`
    }, "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
  }
  function pdfBlob(lines) {
    const enc = new TextEncoder();
    const safe = lines.flatMap((line) => String(line).normalize("NFKD").replace(/[^\x20-\x7E]/g, "?").match(/.{1,88}/g) || [""]);
    const chunks = [];
    for (let i = 0; i < safe.length; i += 56) chunks.push(safe.slice(i, i + 56));
    if (!chunks.length) chunks.push([""]);
    const fontId = 3 + chunks.length * 2;
    const objects = [
      "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
      `2 0 obj << /Type /Pages /Kids [${chunks.map((_, i) => `${3 + i * 2} 0 R`).join(" ")}] /Count ${chunks.length} >> endobj`
    ];
    chunks.forEach((chunk, index) => {
      const pageId = 3 + index * 2;
      const contentId = pageId + 1;
      const content = `BT /F1 9 Tf 50 790 Td ${chunk.map((line, i) => `${i ? "0 -13 Td " : ""}(${pdfEscape(line)}) Tj`).join(" ")} ET`;
      objects.push(`${pageId} 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 ${fontId} 0 R >> >> /Contents ${contentId} 0 R >> endobj`);
      objects.push(`${contentId} 0 obj << /Length ${enc.encode(content).length} >> stream\n${content}\nendstream endobj`);
    });
    objects.push(`${fontId} 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj`);
    let pdf = "%PDF-1.4\n";
    const offsets = [0];
    objects.forEach((obj) => { offsets.push(enc.encode(pdf).length); pdf += `${obj}\n`; });
    const xref = enc.encode(pdf).length;
    pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n${offsets.slice(1).map((n) => `${String(n).padStart(10, "0")} 00000 n `).join("\n")}\ntrailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
    return new Blob([pdf], { type: "application/pdf" });
  }
  function pdfEscape(text) { return String(text).replace(/([\\()])/g, "\\$1"); }
  function zipBlob(files, type) {
    const encoder = new TextEncoder();
    const chunks = [];
    const central = [];
    let offset = 0;
    Object.entries(files).forEach(([name, content]) => {
      const data = encoder.encode(content);
      const nameBytes = encoder.encode(name);
      const crc = crc32(data);
      const local = bytes([0x50,0x4b,0x03,0x04,20,0,0,0,0,0,0,0,0,0], u32(crc), u32(data.length), u32(data.length), u16(nameBytes.length), u16(0), nameBytes, data);
      chunks.push(local);
      central.push(bytes([0x50,0x4b,0x01,0x02,20,0,20,0,0,0,0,0,0,0,0,0], u32(crc), u32(data.length), u32(data.length), u16(nameBytes.length), u16(0), u16(0), u16(0), u16(0), u32(0), u32(offset), nameBytes));
      offset += local.length;
    });
    const centralSize = central.reduce((sum, c) => sum + c.length, 0);
    const end = bytes([0x50,0x4b,0x05,0x06], u16(0), u16(0), u16(central.length), u16(central.length), u32(centralSize), u32(offset), u16(0));
    return new Blob([...chunks, ...central, end], { type });
  }
  function bytes(...parts) {
    const flat = parts.flatMap((part) => Array.from(part));
    return new Uint8Array(flat);
  }
  function u16(n) { return [n & 255, (n >>> 8) & 255]; }
  function u32(n) { return [n & 255, (n >>> 8) & 255, (n >>> 16) & 255, (n >>> 24) & 255]; }
  function crc32(data) {
    let c = ~0;
    for (const b of data) {
      c ^= b;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    return ~c >>> 0;
  }

  render();
})();
