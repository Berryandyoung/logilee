(function () {
  function initializeDocuments() {
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
  const xlsxPdfEndpoint = "https://logilee-xlsx-pdf-sirnfhy77q-uc.a.run.app/convert/xlsx-to-pdf";
  let excelJsPromise;
  function ensureExcelJs() {
    if (window.ExcelJS) return Promise.resolve(window.ExcelJS);
    if (!excelJsPromise) {
      excelJsPromise = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = new URL("../assets/vendor/exceljs.min.js?v=exceljs-4.4.0", location.href).href;
        script.onload = () => window.ExcelJS ? resolve(window.ExcelJS) : reject(new Error("ExcelJS runtime unavailable"));
        script.onerror = () => reject(new Error("ExcelJS runtime unavailable"));
        document.head.appendChild(script);
      });
    }
    return excelJsPromise;
  }
  const templates = [
    { id: "commercial-invoice", category: "trade", formats: ["XLSX", "PDF"], title: "Commercial Invoice", ko: "상업송장", descKo: "수출입 거래와 통관에 활용되는 기본 거래 서류", descEn: "Sales and customs value document for trade shipments.", aliases: "commercial invoice 상업송장 invoice ci customs value" },
    { id: "packing-list", category: "trade", formats: ["XLSX", "PDF"], title: "Packing List", ko: "포장명세서", descKo: "포장 수량, 중량, 치수, 마크 정보를 정리하는 서류", descEn: "Package, weight, dimension, and marks reference for the physical cargo.", aliases: "packing list 포장명세서 package cbm" },
    { id: "pro-forma-invoice", category: "trade", formats: ["XLSX", "PDF"], title: "Pro Forma Invoice", ko: "견적송장", descKo: "견적 및 거래조건 협의를 위한 참고 문서", descEn: "Reference invoice for proposed transaction terms before final invoicing.", aliases: "pro forma proforma 견적송장 quotation" },
    { id: "shipping-instruction", category: "shipping", formats: ["XLSX", "PDF"], title: "Shipping Instruction", ko: "선적요청 정보", descKo: "선사·포워더에 전달할 선적 정보를 정리하는 범용 참고 양식", descEn: "General reference form for preparing shipping instruction data.", aliases: "shipping instruction si 선적요청 선적지시" },
    { id: "shipment-checklist", category: "checklist", formats: ["XLSX", "PDF"], title: "Shipment Checklist", ko: "선적 체크리스트", descKo: "선적 업무의 주요 확인사항을 단계별로 정리하는 실무 체크리스트", descEn: "Operational checklist for common shipment preparation and follow-up tasks.", aliases: "shipment checklist 체크리스트 booking documentation departure destination" }
  ];

  const defaults = {
    "commercial-invoice": () => ({ invoiceNo: "INV-2026-001", invoiceDate: today(), buyerRef: "", currency: "USD", paymentTerms: "T/T", sellerName: "", sellerAddress: "", sellerCountry: "KR", sellerContact: "", sellerTax: "", buyerName: "", buyerAddress: "", buyerCountry: "US", buyerContact: "", notifySame: true, notifyName: "", notifyAddress: "", notifyCountry: "US", notifyContact: "", shipSame: true, shipName: "", shipAddress: "", shipCountry: "US", lcNo: "", lcDate: "", lcBank: "", remarks: "", incoterms: "FOB", namedPlace: "Busan", mode: "Ocean", origin: "KR", destination: "US", freight: 0, insurance: 0, packing: 0, otherCharges: 0, discount: 0, rows: [goodsRow(), goodsRow()] }),
    "packing-list": () => ({ packingNo: "PL-2026-001", invoiceNo: "", packingDate: today(), sellerName: "", sellerAddress: "", buyerName: "", buyerAddress: "", notifySame: true, notifyName: "", notifyAddress: "", mode: "Ocean", carrier: "", loading: "Busan", discharge: "", finalDestination: "", remarks: "", rows: [packageRow(), packageRow()] }),
    "pro-forma-invoice": () => ({ proformaNo: "", issueDate: "", validUntil: "", buyerRef: "", estimatedShipDate: "", sellerName: "", sellerAddress: "", sellerCountry: "KR", buyerName: "", buyerAddress: "", buyerCountry: "US", notifySame: true, notifyName: "", notifyAddress: "", currency: "USD", incoterms: "FOB", namedPlace: "Busan", paymentTerms: "T/T", loading: "", finalDestination: "", carrier: "", discount: 0, additionalCharges: 0, remarks: "", rows: [goodsRow()] }),
    "shipping-instruction": () => ({ siRef: "", siDate: "", bookingNo: "", shipperRef: "", customerRef: "", mode: "Ocean", shipperName: "", shipperAddress: "", shipperContact: "", consigneeName: "", consigneeAddress: "", consigneeContact: "", notifyName: "", notifyAddress: "", notifyContact: "", forwarderName: "", forwarderAddress: "", carrier: "", vessel: "", voyage: "", receipt: "", loading: "", discharge: "", delivery: "", etd: "", eta: "", freightTerms: "", freightPayableAt: "", blType: "", originalBlCount: "", chargeInstructions: "", releaseInstructions: "", specialInstructions: "", dangerousGoods: "Not specified", regulatoryInfo: "", preparedBy: "", preparedCompany: "", preparedDate: "", rows: [cargoRow()] }),
    "shipment-checklist": () => ({ reference: "", customer: "", consignee: "", origin: "", destination: "", mode: "", incoterms: "", namedPlace: "", etd: "", eta: "", carrier: "", preparedBy: "", updated: "", items: checklistItems().map((item) => ({ ...item, status: "Pending", owner: "", due: "", notes: "", custom: false })) })
  };

  function goodsRow() { return { description: "", hsCode: "", quantity: "", unit: "", unitPrice: "", origin: "" }; }
  function packageRow() { return { packageNo: "", type: "Carton", marks: "", description: "", quantity: "", unit: "", netWeight: "", grossWeight: "", weightUnit: "kg", length: "", width: "", height: "", dimensionUnit: "cm" }; }
  function cargoRow() { return { containerNo: "", sealNo: "", containerType: "", marks: "", packages: "", packageType: "", description: "", hsCode: "", grossWeight: "", weightUnit: "kg", cbm: "" }; }
  const checklistDefinition = [
    ["setup","ORDER / SHIPMENT SETUP","주문 / 선적 설정",[["buyer","Confirm buyer / consignee details","구매자 / 수하인 정보 확인"],["reference","Confirm shipment reference / PO","선적 참조번호 / PO 확인"],["goods","Confirm goods and quantity","품명과 수량 확인"],["incoterms","Confirm Incoterms and named place","Incoterms와 지정 장소 확인"],["payment","Confirm payment terms","결제 조건 확인"],["ship-date","Confirm requested shipping date","요청 선적일 확인"],["destination","Confirm destination","도착지 확인"]]],
    ["compliance","PRODUCT & COMPLIANCE CHECK","제품 / 규제 확인",[["hs","Review HS classification","HS 분류 검토"],["import","Review destination import requirements","도착국 수입 요건 검토"],["controlled","Review restricted / controlled goods status","제한·통제 품목 여부 검토"],["dg","Review dangerous-goods status if applicable","해당 시 위험물 여부 검토"],["product-docs","Review product-specific documentation if applicable","해당 시 제품별 서류 검토"],["origin","Confirm country-of-origin information if needed","필요 시 원산지 정보 확인"]]],
    ["booking","BOOKING & ROUTING","부킹 / 운송 경로",[["quote","Request / confirm freight quotation","운임 견적 요청 / 확인"],["mode","Confirm transport mode","운송 모드 확인"],["provider","Confirm carrier / forwarder","선사 / 포워더 확인"],["booking","Confirm booking","부킹 확인"],["route","Confirm route","운송 경로 확인"],["cutoff","Confirm cut-off dates","마감일 확인"],["schedule","Confirm ETD / ETA","ETD / ETA 확인"],["freight","Confirm freight terms / charge responsibility","운임 조건 / 비용 부담 확인"]]],
    ["cargo","CARGO PREPARATION","화물 준비",[["packing","Confirm packing method","포장 방식 확인"],["packages","Confirm package count","포장 수량 확인"],["marks","Confirm marks / labels","화인 / 라벨 확인"],["weight","Confirm gross / net weight","총중량 / 순중량 확인"],["dimensions","Confirm dimensions / CBM","치수 / CBM 확인"],["securing","Review cargo securing requirements where applicable","해당 시 화물 고정 요건 검토"],["container","Confirm container / seal details where applicable","해당 시 컨테이너 / 봉인 정보 확인"]]],
    ["origin-docs","EXPORT / ORIGIN DOCUMENTS","수출 / 출발지 서류",[["ci","Prepare Commercial Invoice","Commercial Invoice 준비"],["pl","Prepare Packing List","Packing List 준비"],["si","Prepare Shipping Instruction where applicable","해당 시 Shipping Instruction 준비"],["co","Review Certificate of Origin requirement","원산지증명서 필요 여부 검토"],["export-decl","Review export declaration requirement","수출신고 필요 여부 검토"],["permits","Review permit / certificate requirements where applicable","해당 시 허가 / 인증서 요건 검토"],["crosscheck","Cross-check document consistency","서류 간 일관성 교차 확인"]]],
    ["departure","HANDOVER / DEPARTURE","인계 / 출발",[["handover","Confirm cargo handover","화물 인계 확인"],["receipt","Confirm terminal / warehouse receipt where applicable","해당 시 터미널 / 창고 입고 확인"],["clearance","Confirm export clearance status where applicable","해당 시 수출통관 상태 확인"],["departed","Confirm departure / uplift","출항 / 항공기 탑재 확인"],["draft","Check draft transport document","운송서류 초안 확인"],["bl-awb","Review B/L or AWB details","B/L 또는 AWB 정보 검토"],["release","Confirm document release instructions","서류 발행 / release 지시 확인"]]],
    ["destination","DESTINATION / IMPORT PREPARATION","도착지 / 수입 준비",[["send-docs","Send document set to buyer / broker","구매자 / 관세사에게 서류 전달"],["clearance-docs","Review destination clearance documents","도착지 통관서류 검토"],["arrival","Confirm arrival information","도착 정보 확인"],["charges","Review destination charges where applicable","해당 시 도착지 비용 검토"],["delivery","Confirm delivery arrangement","배송 계획 확인"],["exceptions","Follow up exceptions / holds","예외 / 보류 사항 후속 확인"]]],
    ["post","POST-SHIPMENT DOCUMENTS","선적 후 서류",[["final-transport","Receive final B/L / AWB","최종 B/L / AWB 수령"],["archive-ci","Archive final Commercial Invoice","최종 Commercial Invoice 보관"],["archive-pl","Archive final Packing List","최종 Packing List 보관"],["archive-cert","Archive supporting certificates","관련 인증서 보관"],["receipt-confirm","Confirm buyer / consignee document receipt","구매자 / 수하인 서류 수령 확인"],["completion","Record shipment completion notes","선적 완료 메모 기록"]]]
  ];
  function checklistItems() { return checklistDefinition.flatMap(([stageId,enStage,koStage,rows]) => rows.map(([id,en,ko]) => ({ id:`${stageId}-${id}`, stageId, stage:lang === "ko" ? koStage : enStage, task:lang === "ko" ? ko : en }))); }

  let state = { selected: new URLSearchParams(location.search).get("template") || "", category: "all", query: "", mobile: "form", data: {} };
  let fieldHelpCounter = 0;
  templates.forEach((tpl) => state.data[tpl.id] = loadDraft(tpl.id));

  const fieldHelp = {
    ko: {
      "Port of Loading": "국제운송을 위해 화물을 선적하는 항만 또는 장소를 입력하세요.",
      "Port/Airport of Loading": "화물을 선적하는 항만 또는 공항을 입력하세요.",
      "Port/Airport of Discharge": "화물을 내리는 도착 항만 또는 공항을 입력하세요.",
      "Port of Discharge": "화물을 내리는 도착 항만을 입력하세요.",
      "Final Destination": "거래와 운송 조건에 따른 화물의 최종 목적지를 입력하세요.",
      "Place of Receipt": "운송인이 화물을 인수하는 장소를 입력하세요.",
      "Place of Delivery / Final Destination": "운송인이 화물을 인도할 최종 장소를 입력하세요.",
      "Carrier": "해당 화물을 운송하는 운송사 또는 운송 제공자를 입력하세요.",
      "Sailing on or about": "현재 확인 가능한 최선의 예상 출항일을 입력하세요.",
      "Incoterms": "합의한 Incoterms® 조건을 선택하세요. 비용·위험 분담을 검토할 때 Named Place도 함께 확인해야 합니다.",
      "Named Place": "선택한 Incoterms® 조건에 연결되는 장소를 입력하세요. 예: Busan, Shanghai, Hamburg.",
      "Named Place / Port": "제안한 Incoterms® 조건에 연결되는 지정 장소 또는 항만을 입력하세요.",
      "Mode of Transport": "화물의 주된 운송 방식을 입력하거나 선택하세요.",
      "Mode": "해당 선적의 주된 운송 방식을 입력하세요.",
      "Country of Origin": "적용 가능한 원산지 기준에 따른 상품 원산지를 선택하세요. 선택만으로 원산지가 입증되지는 않습니다.",
      "Country of Destination": "화물이 도착할 목적지 국가를 선택하세요.",
      "Description": "거래 및 물류 관계자가 상품을 식별할 수 있도록 명확한 상업적 품명을 입력하세요.",
      "Cargo Description": "선사 또는 포워더가 화물을 식별할 수 있도록 구체적인 화물 설명을 입력하세요.",
      "HS Code": "상품의 HS 분류 참고번호를 입력하세요. 최종 품목분류 요건은 목적지에 따라 달라질 수 있으며 자동 검증되지 않습니다.",
      "Quantity": "이 품목 행에 적용되는 상업 수량을 입력하세요.",
      "Unit": "입력한 수량에 사용하는 단위를 선택하세요.",
      "Unit Price": "선택한 수량 단위당 가격을 입력하세요.",
      "Origin Override": "이 품목의 원산지가 문서 기본 원산지와 다를 때만 행별 원산지를 입력하세요.",
      "Currency": "거래 또는 견적 금액에 적용되는 통화를 선택하세요.",
      "Terms of Payment": "송장에 표시할 합의된 결제 조건을 입력하세요.",
      "Payment Terms": "견적 단계에서 제안하는 결제 조건을 입력하세요.",
      "Valid Until": "이 견적 조건이 유효한 마지막 날짜를 입력하세요.",
      "Estimated Shipping Date": "현재 예상하는 선적일을 입력하세요.",
      "Discount": "소계에서 차감할 할인 금액을 입력하세요.",
      "Additional Charges": "견적 소계에 추가할 비용을 입력하세요.",
      "Marks & Numbers": "포장 또는 화물을 식별하는 마크와 번호를 입력하세요.",
      "Package No.": "각 포장을 구분할 수 있는 포장 번호를 입력하세요.",
      "Package Type": "Carton, pallet 등 포장 형태를 입력하세요.",
      "Net Weight": "포장재를 제외한 상품의 순중량을 입력하세요.",
      "Gross Weight": "포장재를 포함한 화물의 총중량을 입력하세요.",
      "Measurement / CBM": "해당 화물의 용적을 CBM 단위로 입력하세요.",
      "Container No.": "해당되는 경우 컨테이너 식별번호를 입력하세요.",
      "Seal No.": "해당되는 경우 컨테이너 봉인번호를 입력하세요.",
      "Container Type / Size": "컨테이너 규격을 입력하세요. 예: 20GP, 40HC.",
      "Number of Packages": "이 화물 행에 포함된 포장 수량을 입력하세요.",
      "Booking No.": "선사 또는 포워더가 부여한 Booking 번호를 입력하세요.",
      "Shipper Reference": "화주가 내부적으로 사용하는 선적 참조번호를 입력하세요.",
      "Vessel": "해상운송에 해당하는 선박명을 입력하세요.",
      "Voyage": "해당 선박의 Voyage 번호를 입력하세요.",
      "Freight Terms": "해당되는 경우 운임 지불 조건(예: Prepaid 또는 Collect)을 입력하세요.",
      "B/L Type / Release Instruction": "요청할 B/L 형태 또는 release 지시사항을 입력하세요. LOGILEE가 B/L을 발행하지는 않습니다.",
      "Special Instructions": "운송사나 포워더가 확인해야 할 추가 운영 지시사항을 입력하세요.",
      "Dangerous Goods": "위험물 해당 여부를 선택하세요. 해당 시 별도 운송사·규제 서류가 필요할 수 있습니다.",
      "Remarks": "문서에 함께 전달할 필요한 추가 참고사항을 입력하세요."
    },
    en: {
      "Port of Loading": "Enter the port or place where the goods are loaded for international transport.",
      "Final Destination": "Enter the shipment's final destination as applicable to the transaction.",
      "Carrier": "Enter the carrier or transport provider handling the shipment.",
      "Sailing on or about": "Enter the best available planned departure or sailing date.",
      "Incoterms": "Select the agreed Incoterms® rule and confirm its Named Place for cost and risk allocation.",
      "Named Place": "Enter the place associated with the selected Incoterms® rule, such as Busan, Shanghai, or Hamburg.",
      "Country of Origin": "Select the country of origin under the applicable origin rules. Selection alone does not prove origin.",
      "Description": "Enter a clear commercial description that identifies the goods.",
      "HS Code": "Enter the HS classification reference. Final tariff classification requirements may vary by destination and are not automatically validated.",
      "Quantity": "Enter the commercial quantity for this line item.",
      "Unit": "Select the unit used for the entered quantity.",
      "Unit Price": "Enter the price per selected unit for this line item.",
      "Origin Override": "Optionally enter a line-level country of origin when this item differs from the document-level origin.",
      "B/L Type / Release Instruction": "Enter the requested B/L type or release instruction. LOGILEE does not issue a Bill of Lading."
    }
  };

  function localizedFieldHelp(label, fallback) {
    if (!fallback) return "";
    return fieldHelp[lang][label] || (lang === "ko" ? "이 항목에 해당하는 정보를 입력하세요. 거래처·운송사 또는 관계 기관의 요구사항이 있으면 함께 확인하세요." : fallback);
  }

  function closeFieldHelp() {
    root.querySelectorAll("[data-field-help][aria-expanded='true']").forEach((button) => button.setAttribute("aria-expanded", "false"));
    root.querySelectorAll(".template-help-popover:not([hidden])").forEach((popover) => { popover.hidden = true; });
  }

  function positionFieldHelp(button, popover) {
    popover.hidden = false;
    const buttonRect = button.getBoundingClientRect();
    const popoverRect = popover.getBoundingClientRect();
    const margin = 12;
    const left = Math.max(margin, Math.min(buttonRect.left, window.innerWidth - popoverRect.width - margin));
    let top = buttonRect.bottom + 8;
    if (top + popoverRect.height > window.innerHeight - margin) top = Math.max(margin, buttonRect.top - popoverRect.height - 8);
    top = Math.max(margin, Math.min(top, window.innerHeight - popoverRect.height - margin));
    popover.style.left = `${Math.round(left)}px`;
    popover.style.top = `${Math.round(top)}px`;
  }

  root.addEventListener("click", (event) => {
    const button = event.target.closest("[data-field-help]");
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    const wasOpen = button.getAttribute("aria-expanded") === "true";
    closeFieldHelp();
    if (wasOpen) return;
    const popover = document.getElementById(button.getAttribute("aria-controls"));
    if (!popover) return;
    button.setAttribute("aria-expanded", "true");
    positionFieldHelp(button, popover);
  });
  document.addEventListener("click", (event) => { if (!event.target.closest("[data-field-help], .template-help-popover")) closeFieldHelp(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeFieldHelp(); });
  window.addEventListener("resize", closeFieldHelp);
  window.addEventListener("scroll", closeFieldHelp, true);

  function loadDraft(id) {
    try { const value={ ...defaults[id](), ...(JSON.parse(localStorage.getItem(storageKey(id)) || "null") || {}) }; if(id==="shipment-checklist"){const canonical=new Map(checklistItems().map(item=>[item.id,item]));value.items=(value.items||[]).map(item=>({...canonical.get(item.id),...item,status:item.status||(item.checked?"Done":"Pending"),task:item.task||canonical.get(item.id)?.task||item.label||"",stage:item.stage||canonical.get(item.id)?.stage||""}));} return value; }
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
    fieldHelpCounter = 0;
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
    const guidance = localizedFieldHelp(label, help);
    const helpId = `template-help-${state.selected || "document"}-${++fieldHelpCounter}`;
    const info = guidance ? `<button class="template-info-button" type="button" data-field-help aria-label="${attr(`${label} ${lang === "ko" ? "도움말" : "help"}`)}" aria-expanded="false" aria-controls="${helpId}">i</button><span class="template-help-popover" id="${helpId}" role="tooltip" hidden>${esc(guidance)}</span>` : "";
    return `<label class="template-field"><span>${label}${info}</span><input name="${name}" type="${type}" value="${attr(value)}"><small>${esc(guidance)}</small></label>`;
  }
  function selectField(name, label, options, help) {
    const guidance = localizedFieldHelp(label, help);
    const helpId = `template-help-${state.selected || "document"}-${++fieldHelpCounter}`;
    const info = guidance ? `<button class="template-info-button" type="button" data-field-help aria-label="${attr(`${label} ${lang === "ko" ? "도움말" : "help"}`)}" aria-expanded="false" aria-controls="${helpId}">i</button><span class="template-help-popover" id="${helpId}" role="tooltip" hidden>${esc(guidance)}</span>` : "";
    return `<label class="template-field"><span>${label}${info}</span><select name="${name}">${options}</select><small>${esc(guidance)}</small></label>`;
  }
  function section(title, body) { return `<fieldset class="template-section"><legend>${title}</legend>${body}</fieldset>`; }
  function optionalSection(title, body, open = false) { return `<details class="template-optional" ${open ? "open" : ""}><summary>${title}</summary><div class="template-optional-body">${body}</div></details>`; }

  function formMarkup(id, d) {
    if (id === "shipment-checklist") return checklistForm(d);
    const commonHelp = lang === "ko" ? {
      ref: "거래별로 구분 가능한 관리번호를 입력하세요.", currency: "거래 금액에 적용되는 통화를 선택하세요.", incoterms: "조건명과 함께 Named Place를 확인하세요. 예: FOB Busan / CIF Rotterdam", hs: "확인된 분류번호가 있는 경우 입력하세요. 이 입력란이 HS 분류 자체를 검증하지는 않습니다.", desc: "화물을 식별할 수 있을 정도로 구체적으로 작성하는 것이 좋습니다."
    } : {
      ref: "Use a reference that distinguishes this transaction.", currency: "Select the currency used for the transaction value.", incoterms: "Confirm the rule together with the named place, e.g. FOB Busan or CIF Rotterdam.", hs: "Enter a confirmed classification if available. This field does not validate HS classification.", desc: "Use enough detail for trade and logistics parties to identify the goods."
    };
    if (id === "commercial-invoice") return [
      section("Document", field("invoiceNo", "Invoice No.", d.invoiceNo, commonHelp.ref) + field("invoiceDate", "Invoice Date", d.invoiceDate, commonHelp.ref, "date") + field("buyerRef", "Buyer Reference / PO No.", d.buyerRef, "Optional buyer reference.") + selectField("currency", "Currency", currencyOptions(d.currency), commonHelp.currency) + field("paymentTerms", "Terms of Payment", d.paymentTerms, "Payment terms shown on the invoice.")),
      `<div class="template-party-pair">${partyFields("seller", "Seller / Exporter", d, true)}${partyFields("buyer", "Consignee / Importer", d, false)}</div>`,
      optionalSection("Notify Party", `<label class="template-check"><input type="checkbox" name="notifySame" ${d.notifySame ? "checked" : ""}> ${lang === "ko" ? "Consignee와 동일" : "Same as Consignee"}</label><div data-notify-fields ${d.notifySame ? "hidden" : ""}>${field("notifyName", "Company Name", d.notifyName, "Notify party name.") + field("notifyAddress", "Address", d.notifyAddress, "Notify party address.") + field("notifyContact", "Contact", d.notifyContact, "Notify party contact.")}</div>`, !d.notifySame || Boolean(d.notifyName || d.notifyAddress || d.notifyContact)),
      section("Shipment", field("loading", "Port of Loading", d.loading, "Loading port.") + field("finalDestination", "Final Destination", d.finalDestination, "Final destination.") + field("carrier", "Carrier", d.carrier, "Carrier or forwarder.") + field("sailingDate", "Sailing on or about", d.sailingDate, "Planned sailing date.", "date") + selectField("incoterms", "Incoterms", incotermsOptions(d.incoterms), commonHelp.incoterms) + field("namedPlace", "Named Place", d.namedPlace, commonHelp.incoterms) + field("mode", "Mode of Transport", d.mode, "Ocean, air, truck, courier, or multimodal.") + selectField("origin", "Country of Origin", countryOptions(d.origin), "Country where the goods originate.") + selectField("destination", "Country of Destination", countryOptions(d.destination), "Destination country for this shipment.")),
      goodsRows(id, d.rows, commonHelp),
      optionalSection("Optional Details", `${shipToFields(d).replace('<fieldset class="template-section">', '<div class="template-subsection">').replace('</fieldset>', '</div>')}<div class="template-subsection"><h3>Letter of Credit</h3>${field("lcNo", "L/C No. & Date", d.lcNo, "Optional letter of credit reference.") + field("lcBank", "L/C Issuing Bank", d.lcBank, "Optional issuing bank.")}</div><div class="template-subsection"><h3>Additional Charges</h3>${chargesFields(d).replace('<fieldset class="template-section">', '<div>').replace('</fieldset>', '</div>')}</div>${field("remarks", "Remarks", d.remarks, "Optional document remarks.")}`, Boolean(d.lcNo || d.lcDate || d.lcBank || d.remarks || d.shipName || d.shipAddress || d.freight || d.insurance || d.packing || d.otherCharges || d.discount))
    ].join("");
    if (id === "packing-list") return [
      section("Reference", field("packingNo", "Packing List No.", d.packingNo, commonHelp.ref) + field("invoiceNo", "Invoice No.", d.invoiceNo, "Related invoice reference.") + field("packingDate", "Packing Date / Shipment Date", d.packingDate, "Date used for the packing record.", "date")),
      section("Seller / Shipper", field("sellerName", "Company Name", d.sellerName, "Company shown as seller or shipper.") + field("sellerAddress", "Address", d.sellerAddress, "Use the address requested by your partner.")),
      section("Buyer / Consignee", field("buyerName", "Company Name", d.buyerName, "Company receiving or buying the goods.") + field("buyerAddress", "Address", d.buyerAddress, "Use the address requested by your partner.")),
      optionalSection("Notify Party", `<label class="template-check"><input type="checkbox" name="notifySame" ${d.notifySame ? "checked" : ""}> ${lang === "ko" ? "Consignee와 동일" : "Same as Consignee"}</label><div data-notify-fields ${d.notifySame ? "hidden" : ""}>${field("notifyName", "Company Name", d.notifyName, "Notify party name.") + field("notifyAddress", "Address", d.notifyAddress, "Notify party address.")}</div>`, !d.notifySame || Boolean(d.notifyName || d.notifyAddress)),
      section("Shipment", field("mode", "Mode", d.mode, "Ocean, air, truck, courier, or multimodal.") + field("carrier", "Carrier", d.carrier, "Optional carrier or forwarder reference.") + field("loading", "Port/Airport of Loading", d.loading, "Loading location.") + field("discharge", "Port/Airport of Discharge", d.discharge, "Discharge location.") + field("finalDestination", "Final Destination", d.finalDestination, "Final delivery destination.")),
      `<button type="button" class="secondary-btn" data-import-ci>${T.importCi}</button>${packageRows(d.rows)}`
    ].join("");
    if (id === "pro-forma-invoice") return [
      `<p class="template-guardrail">${lang === "ko" ? "견적 및 거래조건 협의를 위한 참고 문서입니다. 최종 Commercial Invoice와 용도를 혼동하지 마세요." : "A pro forma invoice is used to present proposed transaction terms and should not be confused with the final commercial invoice."}</p>`,
      section("Document", field("proformaNo", "Pro Forma No.", d.proformaNo, commonHelp.ref) + field("issueDate", "Issue Date", d.issueDate, commonHelp.ref, "date") + field("validUntil", "Valid Until", d.validUntil, "Date through which the proposal is valid.", "date") + field("buyerRef", "Buyer Reference", d.buyerRef, "Optional buyer reference.") + field("estimatedShipDate", "Estimated Shipping Date", d.estimatedShipDate, "Estimated shipment timing.", "date")),
      `<div class="template-party-pair">${partyFields("seller", "Seller / Exporter", d, true)}${partyFields("buyer", "Consignee / Importer", d, false)}</div>`, optionalSection("Notify Party", `<label class="template-check"><input type="checkbox" name="notifySame" ${d.notifySame ? "checked" : ""}> ${lang === "ko" ? "Consignee와 동일" : "Same as Consignee"}</label><div data-notify-fields ${d.notifySame ? "hidden" : ""}>${field("notifyName", "Company Name", d.notifyName, "Notify party name.") + field("notifyAddress", "Address", d.notifyAddress, "Notify party address.")}</div>`, !d.notifySame || Boolean(d.notifyName || d.notifyAddress)), goodsRows(id, d.rows, commonHelp),
      section("Shipment", field("loading", "Port of Loading", d.loading, "Optional loading port.") + field("finalDestination", "Final Destination", d.finalDestination, "Optional final destination.") + field("carrier", "Carrier", d.carrier, "Optional carrier if known.")),
      section("Commercial Terms", selectField("currency", "Currency", currencyOptions(d.currency), commonHelp.currency) + selectField("incoterms", "Incoterms", incotermsOptions(d.incoterms), commonHelp.incoterms) + field("namedPlace", "Named Place / Port", d.namedPlace, commonHelp.incoterms) + field("paymentTerms", "Payment Terms", d.paymentTerms, "Proposed payment terms.") + field("discount", "Discount", d.discount, "Discount deducted from the subtotal.", "number") + field("additionalCharges", "Additional Charges", d.additionalCharges, "Charges added to the subtotal.", "number") + field("remarks", "Remarks", d.remarks, "Optional commercial note."))
    ].join("");
    return [
      `<p class="template-guardrail">${lang === "ko" ? "선사·포워더에 전달할 선적 정보를 정리하는 범용 참고 양식입니다. 실제 제출 전 선택한 선사 또는 포워더의 공식 요구사항을 확인하세요." : "This is a general reference form for preparing shipping instruction data. Verify the selected carrier or forwarder's official requirements before submission."}</p>`,
      section("Reference", field("siRef", "Shipping Instruction No.", d.siRef, commonHelp.ref) + field("siDate", "Date", d.siDate, "Document date.", "date") + field("bookingNo", "Booking No.", d.bookingNo, "Optional carrier or forwarder booking reference.") + field("shipperRef", "Shipper Reference", d.shipperRef, "Optional shipper reference.") + field("customerRef", "Customer / PO Reference", d.customerRef, "Optional customer reference.") + selectField("mode", "Mode of Transport", ["Ocean", "Air", "Road", "Rail", "Multimodal", "Other"].map(v => `<option ${d.mode === v ? "selected" : ""}>${v}</option>`).join(""), "Select the applicable transport mode.")),
      section("Shipper / Exporter", field("shipperName", "Company Name", d.shipperName, "Name used for this shipment.") + field("shipperAddress", "Address", d.shipperAddress, "Use one logical address line per line.")), section("Consignee", field("consigneeName", "Company Name", d.consigneeName, "Consignee name.") + field("consigneeAddress", "Address", d.consigneeAddress, "Use one logical address line per line.")), optionalSection("Notify Party", field("notifyName", "Company Name", d.notifyName, "Optional notify party.") + field("notifyAddress", "Address", d.notifyAddress, "Use one logical address line per line."), Boolean(d.notifyName || d.notifyAddress)), optionalSection("Forwarder / Agent", field("forwarderName", "Company Name", d.forwarderName, "Optional forwarder or agent.") + field("forwarderAddress", "Address", d.forwarderAddress, "Use one logical address line per line."), Boolean(d.forwarderName || d.forwarderAddress)),
      section("Routing", field("carrier", "Carrier", d.carrier, "Optional carrier.") + field("vessel", "Vessel", d.vessel, "Optional for applicable modes.") + field("voyage", "Voyage", d.voyage, "Optional voyage reference.") + field("receipt", "Place of Receipt", d.receipt, "Place where cargo is received.") + field("loading", "Port of Loading", d.loading, "Loading location.") + field("discharge", "Port of Discharge", d.discharge, "Discharge location.") + field("delivery", "Place of Delivery / Final Destination", d.delivery, "Final delivery place.") + field("etd", "Estimated Departure Date", d.etd, "Optional estimated date.", "date") + field("eta", "Estimated Arrival Date", d.eta, "Optional estimated date.", "date")),
      siRows(d.rows),
      section("Freight / B/L Instructions", field("freightTerms", "Freight Terms", d.freightTerms, "Prepaid or Collect, when applicable.") + field("freightPayableAt", "Freight Payable At", d.freightPayableAt, "Optional payment location.") + field("blType", "B/L Type / Release Instruction", d.blType, "Generic preparation instruction only.") + field("originalBlCount", "Number of Original B/Ls", d.originalBlCount, "Optional requested count.") + field("chargeInstructions", "Payment / Charge Instructions", d.chargeInstructions, "Optional instruction.") + field("releaseInstructions", "Document / Release Instructions", d.releaseInstructions, "Optional instruction.")),
      section("Special Instructions", field("specialInstructions", "Special Instructions", d.specialInstructions, "Optional operational notes.") + selectField("dangerousGoods", "Dangerous Goods", ["Not specified", "No", "Yes"].map(v => `<option ${d.dangerousGoods === v ? "selected" : ""}>${v}</option>`).join(""), "Additional carrier or regulatory documentation may be required.") + field("regulatoryInfo", "Additional Regulatory / Reference Information", d.regulatoryInfo, "Optional country or shipment reference.")),
      section("Prepared By", field("preparedBy", "Prepared By", d.preparedBy, "Name of preparer.") + field("preparedCompany", "Company", d.preparedCompany, "Preparing company.") + field("preparedDate", "Date", d.preparedDate, "Preparation date.", "date"))
    ].join("");
  }

  function partyFields(prefix, title, d, country = false) {
    return section(title, field(`${prefix}Name`, "Company Name", d[`${prefix}Name`], "Legal or trade name used on the document.") + field(`${prefix}Address`, "Address", d[`${prefix}Address`], "Address requested for this transaction.") + (country ? selectField(`${prefix}Country`, "Country", countryOptions(d[`${prefix}Country`]), "Country for this party.") : "") + field(`${prefix}Contact`, "Contact", d[`${prefix}Contact`] || "", "Optional operational contact."));
  }
  function shipToFields(d) {
    return section("Ship To", `<label class="template-check"><input type="checkbox" name="shipSame" ${d.shipSame ? "checked" : ""}> ${lang === "ko" ? "Buyer와 동일" : "Same as Buyer"}</label><div data-ship-fields ${d.shipSame ? "hidden" : ""}>${field("shipName", "Company", d.shipName, "Ship-to company if different.") + field("shipAddress", "Address", d.shipAddress, "Ship-to address if different.") + selectField("shipCountry", "Country", countryOptions(d.shipCountry), "Ship-to country.")}</div>`);
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
    return section("Container / Package / Cargo Details", `<div class="template-row-table">${rows.map((row, i) => `<div class="template-row" data-row="${i}">${field(`rows.${i}.containerNo`, "Container No.", row.containerNo, "Optional container number.")}${field(`rows.${i}.sealNo`, "Seal No.", row.sealNo, "Optional seal number.")}${field(`rows.${i}.containerType`, "Container Type / Size", row.containerType, "Example: 20GP or 40HC.")}${field(`rows.${i}.marks`, "Marks & Numbers", row.marks, "Cargo marks.")}${field(`rows.${i}.packages`, "Number of Packages", row.packages, "Package count.", "number")}${field(`rows.${i}.packageType`, "Package Type", row.packageType, "Package type.")}${field(`rows.${i}.description`, "Cargo Description", row.description, "Cargo description.")}${field(`rows.${i}.hsCode`, "HS Code", row.hsCode, "Optional HS Code reference.")}${field(`rows.${i}.grossWeight`, "Gross Weight", row.grossWeight, "Gross weight.", "number")}${selectField(`rows.${i}.weightUnit`, "Weight Unit", weightOptions(row.weightUnit), "kg or lb.")}${field(`rows.${i}.cbm`, "Measurement / CBM", row.cbm, "Measurement in CBM.", "number")}<button type="button" data-remove-row="${i}">${T.remove}</button></div>`).join("")}</div><button type="button" class="secondary-btn" data-add-row="shipping-instruction">${T.addRow}</button>`);
  }
  function checklistForm(d) {
    const items=d.items||[];
    const header=section(lang==="ko"?"선적 정보":"Shipment Information",field("reference","Shipment Reference",d.reference,"Internal shipment reference.")+field("customer","Customer / Buyer",d.customer,"Customer or buyer.")+field("consignee","Consignee",d.consignee,"Consignee.")+field("origin","Origin",d.origin,"Origin.")+field("destination","Destination",d.destination,"Destination.")+field("mode","Mode",d.mode,"Transport mode.")+field("incoterms","Incoterms",d.incoterms,"Rule, if applicable.")+field("namedPlace","Named Place",d.namedPlace,"Named place.")+field("etd","ETD",d.etd,"Estimated departure.","date")+field("eta","ETA",d.eta,"Estimated arrival.","date")+field("carrier","Carrier / Forwarder",d.carrier,"Carrier or forwarder.")+field("preparedBy","Prepared By",d.preparedBy,"Preparer.")+field("updated","Last Updated",d.updated,"Last updated date.","date"));
    const stages=[...new Set(items.map(item=>item.stage))];
    const rows=stages.map(stage=>section(stage,items.map((item,index)=>item.stage===stage?`<div class="checklist-edit-row"><select name="checklist.${index}.status"><option ${item.status==="Pending"?"selected":""}>Pending</option><option ${item.status==="Done"?"selected":""}>Done</option><option ${item.status==="N/A"?"selected":""}>N/A</option></select><input name="checklist.${index}.task" value="${attr(item.task)}" aria-label="Task"><input name="checklist.${index}.owner" value="${attr(item.owner)}" placeholder="Owner"><input name="checklist.${index}.due" type="date" value="${attr(item.due)}"><input name="checklist.${index}.notes" value="${attr(item.notes)}" placeholder="Notes">${item.custom?`<button type="button" data-remove-checklist="${index}">${T.remove}</button>`:""}</div>`:"").join(""))).join("");
    return `<p class="template-guardrail">${lang==="ko"?"LOGILEE Shipment Checklist는 운영 계획 지원 도구입니다. 선적, 운송사, 통관, 규제 및 도착지 요건은 달라질 수 있습니다.":"LOGILEE Shipment Checklist is an operational planning aid. Shipment, carrier, customs, regulatory, and destination requirements may vary."}</p>${header}${rows}<button type="button" class="secondary-btn" data-add-checklist>${lang==="ko"?"사용자 작업 추가":"Add custom task"}</button>`;
  }

  function totals(id, d) {
    const rows = meaningfulRows(d.rows || []);
    if (id === "packing-list") {
      return rows.reduce((acc, row) => {
        const cbm = num(row.length) * dimToM[row.dimensionUnit] * num(row.width) * dimToM[row.dimensionUnit] * num(row.height) * dimToM[row.dimensionUnit] * num(row.quantity);
        acc.packages += 1; acc.quantity += num(row.quantity); acc.net += num(row.netWeight) * weightToKg[row.weightUnit]; acc.gross += num(row.grossWeight) * weightToKg[row.weightUnit]; acc.cbm += Number.isFinite(cbm) ? cbm : 0; return acc;
      }, { packages: 0, quantity: 0, net: 0, gross: 0, cbm: 0 });
    }
    const goods = rows.reduce((sum, row) => sum + num(row.quantity) * num(row.unitPrice), 0);
    const charges = id === "pro-forma-invoice" ? num(d.additionalCharges) : num(d.freight) + num(d.insurance) + num(d.packing) + num(d.otherCharges);
    return { goods, total: goods + charges - num(d.discount) };
  }
  function meaningfulRow(row) {
    const textValues = [row.description, row.hsCode, row.origin, row.marks, row.packageNo, row.containerNo, row.sealNo];
    const hasText = textValues.some((value) => String(value ?? "").trim());
    const legacyPlaceholder = !hasText && ((row.quantity === 1 && row.unit === "pcs" && num(row.unitPrice) === 0) || (row.packages === 1 && row.packageType === "Carton" && num(row.grossWeight) === 0 && num(row.cbm) === 0));
    return !legacyPlaceholder && (hasText || [row.quantity, row.unitPrice, row.packages, row.netWeight, row.grossWeight, row.length, row.width, row.height, row.cbm].some((value) => String(value ?? "").trim()));
  }
  function meaningfulRows(rows) { return rows.filter(meaningfulRow); }
  function warnings(id, d) {
    const list = [];
    const rows = d.rows || [];
    if (id === "commercial-invoice" && !d.invoiceNo) list.push(`Invoice No.: ${T.required}`);
    if (id === "packing-list" && !d.packingNo) list.push(`Packing List No.: ${T.required}`);
    if (id === "pro-forma-invoice" && !d.proformaNo) list.push(`Pro Forma No.: ${T.required}`);
    if (id === "shipping-instruction" && !d.siRef && !d.bookingNo) list.push(`SI Reference / Booking No.: ${T.required}`);
    rows.forEach((row, i) => {
      if (!meaningfulRow(row)) return;
      if ("description" in row && !String(row.description || "").trim()) list.push(`${lang === "ko" ? "행" : "Row"} ${i + 1}: ${T.required}`);
      if (num(row.quantity ?? row.packages) <= 0 || num(row.unitPrice ?? 0) < 0) list.push(`Row ${i + 1}: ${T.invalidNumber}`);
    });
    if ((d.incoterms || "") && !String(d.namedPlace || "").trim()) list.push(T.namedPlace);
    if (id === "packing-list") {
      const ci = state.data["commercial-invoice"];
      const ciQty = meaningfulRows(ci.rows || []).reduce((sum, row) => sum + num(row.quantity), 0);
      const plQty = meaningfulRows(d.rows || []).reduce((sum, row) => sum + num(row.quantity), 0);
      if (ciQty && plQty && ciQty !== plQty) list.push(T.qtyMismatch);
    }
    return list;
  }

  function previewMarkup(id, d) {
    const title = templates.find((tpl) => tpl.id === id).title.toUpperCase();
    if (id === "shipment-checklist") return checklistPreview(d);
    const rows = meaningfulRows(d.rows || []);
    const total = totals(id, d);
    return `<article class="doc-preview" data-doc-preview><h2>${title}</h2>${documentSummary(id, d)}${partyPreview(d, id)}<table><thead><tr>${previewHeaders(id).map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => previewRow(id, row)).join("")}</tbody></table>${totalMarkup(id, total, d)}</article>`;
  }
  function documentSummary(id, d) {
    const rows = id === "commercial-invoice" ? [["Invoice No.", d.invoiceNo], ["Date", d.invoiceDate], ["Currency", d.currency], ["Incoterms", `${d.incoterms || ""} ${d.namedPlace || ""}`.trim()]]
      : id === "packing-list" ? [["Packing List No.", d.packingNo], ["Invoice No.", d.invoiceNo], ["Date", d.packingDate], ["Route", `${d.loading || ""} → ${d.discharge || ""}`]]
      : id === "pro-forma-invoice" ? [["Pro Forma No.", d.proformaNo], ["Issue Date", d.issueDate], ["Valid Until", d.validUntil], ["Currency", d.currency]]
      : [["Booking No.", d.bookingNo], ["SI Reference", d.siRef], ["B/L Type", d.blType], ["Freight Terms", d.freightTerms]];
    return `<dl>${rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>`;
  }
  function partyPreview(d, id) {
    const seller = d.sellerName || d.shipperName || "";
    const buyer = d.buyerName || d.consigneeName || "";
    const notify = d.notifySame ? buyer : d.notifyName;
    const notifyAddress = d.notifySame ? (d.buyerAddress || d.consigneeAddress || "") : d.notifyAddress;
    const labels = id === "commercial-invoice" || id === "pro-forma-invoice" ? ["Shipper / Exporter", "Consignee / Importer"] : ["Seller / Shipper", "Buyer / Consignee"];
    return `<div class="doc-party-grid"><section><h3>${labels[0]}</h3><p>${esc(seller)}<br>${esc(d.sellerAddress || d.shipperAddress || "")}</p></section><section><h3>${labels[1]}</h3><p>${esc(buyer)}<br>${esc(d.buyerAddress || d.consigneeAddress || "")}</p></section>${id === "commercial-invoice" || id === "pro-forma-invoice" ? `<section><h3>Notify Party</h3><p>${esc(notify)}<br>${esc(notifyAddress)}</p></section>` : ""}</div>`;
  }
  function previewHeaders(id) {
    if (id === "commercial-invoice") return ["Marks / Pkgs", "Description", "Quantity", "Unit Price", "Amount", "HS CODE"];
    if (id === "packing-list") return ["Package", "Description", "Qty", "Net", "Gross", "CBM"];
    if (id === "shipping-instruction") return ["Container", "Marks", "Packages", "Description", "HS", "Gross", "CBM"];
    return ["Description", "HS Code", "Qty", "Unit", "Unit Price", "Line Total"];
  }
  function previewRow(id, row) {
    if (id === "commercial-invoice") return `<tr><td>${esc(row.marks || row.packageNo)}</td><td>${esc(row.description)}</td><td>${esc(row.quantity)} ${esc(row.unit)}</td><td>${money(row.unitPrice)}</td><td>${money(num(row.quantity) * num(row.unitPrice))}</td><td>${esc(row.hsCode)}</td></tr>`;
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
    const items=d.items||[],done=items.filter(item=>item.status==="Done").length;
    return `<article class="doc-preview" data-doc-preview><h2>SHIPMENT CHECKLIST</h2><dl><div><dt>Reference</dt><dd>${esc(d.reference)}</dd></div><div><dt>Progress</dt><dd>${done}/${items.length}</dd></div></dl><table><thead><tr><th>Status</th><th>Stage</th><th>Task</th></tr></thead><tbody>${items.map(item=>`<tr><td>${esc(item.status)}</td><td>${esc(item.stage)}</td><td>${esc(item.task)}</td></tr>`).join("")}</tbody></table><footer>Created with LOGILEE</footer></article>`;
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
    root.querySelector("[data-add-checklist]")?.addEventListener("click",()=>{const d=state.data["shipment-checklist"],stage=checklistDefinition[0][lang==="ko"?2:1];d.items.push({id:`custom-${Date.now()}`,stageId:"custom",stage,status:"Pending",task:"",owner:"",due:"",notes:"",custom:true});render();});
    root.querySelectorAll("[data-remove-checklist]").forEach(btn=>btn.addEventListener("click",()=>{state.data["shipment-checklist"].items.splice(Number(btn.dataset.removeChecklist),1);render();}));
    root.querySelector("[data-import-ci]")?.addEventListener("click", importCommercialInvoice);
    root.querySelectorAll("[data-flow-target]").forEach((btn) => btn.addEventListener("click", () => transferTo(btn.dataset.flowTarget)));
    root.querySelectorAll("[data-export-template]").forEach((btn) => btn.addEventListener("click", () => exportTemplate(btn.dataset.exportTemplate, btn)));
  }

  function updateFromForm(event, rerender = true) {
    const d = state.data[state.selected];
    const target = event.target;
    if (!target.name) return;
    if (state.selected === "shipment-checklist" && target.name.startsWith("checklist.")) {
      const [,index,key]=target.name.split("."); if(d.items[Number(index)])d.items[Number(index)][key]=target.value;
    } else if (target.name.includes(".")) {
      const [, index, key] = target.name.split(".");
      d.rows[Number(index)][key] = target.type === "number" ? num(target.value) : target.value;
    } else {
      d[target.name] = target.type === "checkbox" ? target.checked : target.type === "number" ? num(target.value) : target.value;
    }
    if (rerender) render();
  }

  function refreshBuilderFeedback() {
    syncConditionalFields();
    const preview = root.querySelector("[data-doc-preview]");
    if (preview && state.selected) {
      preview.outerHTML = previewMarkup(state.selected, state.data[state.selected]);
    }
    const warningBox = root.querySelector("[data-template-warnings]");
    if (warningBox && state.selected) {
      warningBox.innerHTML = warnings(state.selected, state.data[state.selected]).map((msg) => `<p>${esc(msg)}</p>`).join("");
    }
  }
  function syncConditionalFields() {
    const d = state.data[state.selected];
    root.querySelectorAll("[data-notify-fields]").forEach((node) => { node.hidden = Boolean(d.notifySame); });
    root.querySelectorAll("[data-ship-fields]").forEach((node) => { node.hidden = Boolean(d.shipSame); });
  }

  function importCommercialInvoice() {
    const ci = state.data["commercial-invoice"];
    const pl = state.data["packing-list"];
    Object.assign(pl, { invoiceNo: ci.invoiceNo, sellerName: ci.sellerName, sellerAddress: ci.sellerAddress, buyerName: ci.buyerName, buyerAddress: ci.buyerAddress, notifySame: ci.notifySame, notifyName: ci.notifyName, notifyAddress: ci.notifyAddress, loading: ci.loading, finalDestination: ci.finalDestination, carrier: ci.carrier, remarks: ci.remarks });
    pl.rows = (ci.rows || []).map((row, index) => ({ ...packageRow(), packageNo: String(index + 1), description: row.description, quantity: row.quantity, unit: row.unit }));
    render();
  }
  function transferTo(target) {
    if (localStorage.getItem(storageKey(target)) && !confirm(T.draftExists)) return;
    const src = state.data[state.selected];
    const dst = { ...state.data[target] };
    if (target === "commercial-invoice") Object.assign(dst, { invoiceNo: src.proformaNo?.replace(/^PF/, "INV") || dst.invoiceNo, invoiceDate: today(), sellerName: src.sellerName, sellerAddress: src.sellerAddress, sellerCountry: src.sellerCountry, buyerName: src.buyerName, buyerAddress: src.buyerAddress, buyerCountry: src.buyerCountry, notifySame: src.notifySame, notifyName: src.notifyName, notifyAddress: src.notifyAddress, currency: src.currency, incoterms: src.incoterms, namedPlace: src.namedPlace, paymentTerms: src.paymentTerms, freight: src.freight, insurance: src.insurance, discount: src.discount, remarks: src.remarks, rows: src.rows });
    if (target === "packing-list") Object.assign(dst, { invoiceNo: src.invoiceNo, sellerName: src.sellerName, sellerAddress: src.sellerAddress, buyerName: src.buyerName, buyerAddress: src.buyerAddress, notifySame: src.notifySame, notifyName: src.notifyName, notifyAddress: src.notifyAddress, loading: src.loading, finalDestination: src.finalDestination, carrier: src.carrier, remarks: src.remarks, rows: src.rows.map((row, i) => ({ ...packageRow(), packageNo: String(i + 1), description: row.description, quantity: row.quantity, unit: row.unit })) });
    if (target === "shipping-instruction") Object.assign(dst, { siRef: dst.siRef, shipperName: src.sellerName, shipperAddress: src.sellerAddress, consigneeName: src.buyerName, consigneeAddress: src.buyerAddress, notifyName: src.notifySame ? src.buyerName : src.notifyName, notifyAddress: src.notifySame ? src.buyerAddress : src.notifyAddress, loading: src.loading, discharge: src.discharge, delivery: src.finalDestination, carrier: src.carrier, rows: src.rows.map((row) => ({ ...cargoRow(), marks: row.marks || row.packageNo || "", description: row.description, packages: row.quantity, packageType: row.type || row.unit, grossWeight: row.grossWeight, cbm: packageCbm(row) })) });
    state.data[target] = dst;
    saveDraft(target);
    state.selected = target;
    render();
  }
  function packageCbm(row) {
    return num(row.length) * dimToM[row.dimensionUnit] * num(row.width) * dimToM[row.dimensionUnit] * num(row.height) * dimToM[row.dimensionUnit] * num(row.quantity);
  }

  // Legacy marker helpers remain unused for backwards source compatibility; XLSX export below uses ExcelJS only.
  const baseFileNames = { "commercial-invoice": "commercial-invoice.xlsx", "packing-list": "packing-list.xlsx", "pro-forma-invoice": "pro-forma-invoice.xlsx", "shipment-checklist": "shipment-checklist.xlsx" };
  const baseMarkerValues = (id, d) => {
    const values = {};
    const put = (key, value) => { values[key] = value ?? ""; };
    const total = totals(id, d);
    const countryName = (code) => (countries().find((item) => item[0] === code) || ["", code, code])[1];
    if (id === "commercial-invoice") {
      put("CI_REF", d.invoiceNo); put("CI_DATE", d.invoiceDate); put("CI_SELLER", d.sellerName); put("CI_SELLER_ADDRESS", d.sellerAddress); put("CI_BUYER", d.buyerName); put("CI_BUYER_ADDRESS", d.buyerAddress); put("CI_ROUTE", `${d.incoterms || ""} ${d.namedPlace || ""} / ${d.mode || ""}`.trim()); put("CI_CURRENCY", d.currency);
      (d.rows || []).forEach((row, i) => [i + 1, row.description, row.hsCode, countryName(row.origin || d.origin), num(row.quantity), row.unit, num(row.unitPrice), num(row.quantity) * num(row.unitPrice)].forEach((value, j) => put(`CI_ITEM_${i + 1}_${j + 1}`, value)));
      put("CI_TOTAL_1", total.goods); put("CI_TOTAL_2", num(d.freight) + num(d.insurance) + num(d.packing) + num(d.otherCharges) - num(d.discount)); put("CI_TOTAL_3", total.total);
    } else if (id === "packing-list") {
      put("PL_REF", d.packingNo); put("PL_DATE", d.packingDate); put("PL_SELLER", d.sellerName); put("PL_SELLER_ADDRESS", d.sellerAddress); put("PL_BUYER", d.buyerName); put("PL_BUYER_ADDRESS", d.buyerAddress); put("PL_ROUTE", `${d.loading || ""} / ${d.discharge || ""} / ${d.finalDestination || ""}`.trim()); put("PL_CURRENCY", "");
      (d.rows || []).forEach((row, i) => { const factor = weightToKg[row.weightUnit] || 1; [row.packageNo || row.type, row.marks, row.type, row.description, num(row.quantity), row.unit, num(row.netWeight) * factor, num(row.grossWeight) * factor, `${row.length} x ${row.width} x ${row.height} ${row.dimensionUnit}`, packageCbm(row)].forEach((value, j) => put(`PL_ITEM_${i + 1}_${j + 1}`, value)); });
      put("PL_TOTAL_1", total.packages); put("PL_TOTAL_2", total.quantity); put("PL_TOTAL_3", total.cbm);
    } else if (id === "pro-forma-invoice") {
      put("PF_REF", d.proformaNo); put("PF_DATE", d.issueDate); put("PF_VALID", d.validUntil); put("PF_SELLER", d.sellerName); put("PF_SELLER_ADDRESS", d.sellerAddress); put("PF_BUYER", d.buyerName); put("PF_BUYER_ADDRESS", d.buyerAddress); put("PF_ROUTE", `${d.incoterms || ""} ${d.namedPlace || ""}`.trim()); put("PF_CURRENCY", d.currency);
      (d.rows || []).forEach((row, i) => [i + 1, row.description, row.hsCode, countryName(row.origin), num(row.quantity), row.unit, num(row.unitPrice), num(row.quantity) * num(row.unitPrice)].forEach((value, j) => put(`PF_ITEM_${i + 1}_${j + 1}`, value)));
      put("PF_TOTAL_1", total.goods); put("PF_TOTAL_2", num(d.freight) + num(d.insurance) - num(d.discount)); put("PF_TOTAL_3", total.total);
    } else {
      put("SC_REF", d.reference); const items = checklistItems(); const saved = new Map((d.items || []).map((item) => [item.id, item])); items.forEach((item, i) => { const value = saved.get(item.id) || {}; [item.group, value.checked ? "Done" : "Open", item.label, value.owner || "", value.due || "", value.checked ? "Complete" : "Pending", d.notes || ""].forEach((cellValue, j) => put(`SC_ITEM_${i + 1}_${j + 1}`, cellValue)); }); put("SC_TOTAL_1", items.filter((item) => !saved.get(item.id)?.checked).length); put("SC_TOTAL_2", items.filter((item) => saved.get(item.id)?.checked).length); put("SC_TOTAL_3", "Pending / Complete");
    }
    return values;
  };
  function readStoredZip(buffer) {
    const bytes = new Uint8Array(buffer); const view = new DataView(buffer); const decoder = new TextDecoder(); const files = {};
    for (let offset = 0; offset + 30 < bytes.length;) { if (view.getUint32(offset, true) !== 0x04034b50) break; const nameLength = view.getUint16(offset + 26, true); const extraLength = view.getUint16(offset + 28, true); const size = view.getUint32(offset + 18, true); const name = decoder.decode(bytes.slice(offset + 30, offset + 30 + nameLength)); const start = offset + 30 + nameLength + extraLength; files[name] = decoder.decode(bytes.slice(start, start + size)); offset = start + size; }
    return files;
  }
  function replaceBaseMarkers(xml, values) {
    const filled = Object.entries(values).reduce((output, [key, value]) => output.replace(new RegExp(`<c([^>]*)>\\s*<is>\\s*<t>\\{\\{${key}\\}\\}</t>\\s*</is>\\s*</c>`), (_, attrs) => { const clean = attrs.replace(/\s+t="[^"]*"/g, "").replace(/\s+s="[^"]*"/g, ""); return typeof value === "number" && Number.isFinite(value) ? `<c${clean} s="2"><v>${value}</v></c>` : value === "" ? `<c${clean}/>` : `<c${clean} t="inlineStr"><is><t>${xmlEscape(value)}</t></is></c>`; }), xml);
    return filled.replace(/<c([^>]*)>\s*<is>\s*<t>\{\{[^}]+\}\}<\/t>\s*<\/is>\s*<\/c>/g, "");
  }
  const xlsxLayouts = {
    "commercial-invoice": { file: "commercial-invoice.xlsx", sheet: "CI", title: "COMMERCIAL INVOICE", baseTitle: "COMMERCIAL INVOICE", itemStartRow: 24, itemCapacity: 22, totalsRow: 46, columns: [1, 3, 5, 7, 8, 9], rows: (d) => meaningfulRows(d.rows || []).map((row) => [row.marks || row.packageNo || "", [row.description, row.unit].filter(Boolean).join(" / "), num(row.quantity), num(row.unitPrice), num(row.quantity) * num(row.unitPrice), row.hsCode]), totals: (d) => { const total = totals("commercial-invoice", d); return [{ column: 5, value: meaningfulRows(d.rows || []).length ? meaningfulRows(d.rows || []).reduce((sum, row) => sum + num(row.quantity), 0) : "", rowOffset: 0 }, { column: 8, value: total.total || "", rowOffset: 1 }]; } },
    "packing-list": { file: "packing-list.xlsx", sheet: "PL", title: "PACKING LIST", baseTitle: "PACKING LIST", itemStartRow: 24, itemCapacity: 21, totalsRow: 45, columns: [1, 3, 5, 7, 8, 9], rows: (d) => meaningfulRows(d.rows || []).map((row) => { const factor = weightToKg[row.weightUnit] || 1; const packageLabel = [row.packageNo, row.marks, row.type].filter(Boolean).join(" / "); return [packageLabel, row.description, num(row.quantity), num(row.netWeight) * factor, num(row.grossWeight) * factor, `${row.length} x ${row.width} x ${row.height} ${row.dimensionUnit} / ${packageCbm(row).toFixed(3)} CBM`]; }), totals: (d) => { const total = totals("packing-list", d); return [{ column: 5, value: total.packages || "" }, { column: 7, value: total.net || "" }, { column: 8, value: total.gross || "" }, { column: 9, value: total.cbm || "" }]; } },
    "pro-forma-invoice": { file: "commercial-invoice.xlsx", sheet: "CI", title: "PRO FORMA INVOICE", baseTitle: "COMMERCIAL INVOICE", itemStartRow: 24, itemCapacity: 22, totalsRow: 46, columns: [1, 3, 5, 7, 8, 9], rows: (d) => meaningfulRows(d.rows || []).map((row) => [row.marks || row.packageNo || "", [row.description, row.unit].filter(Boolean).join(" / "), num(row.quantity), num(row.unitPrice), num(row.quantity) * num(row.unitPrice), row.hsCode]), totals: (d) => { const total = totals("pro-forma-invoice", d); return [{ column: 5, value: meaningfulRows(d.rows || []).length ? meaningfulRows(d.rows || []).reduce((sum, row) => sum + num(row.quantity), 0) : "", rowOffset: 0 }, { column: 8, value: total.total || "", rowOffset: 1 }]; } },
    "shipment-checklist": { file: "shipment-checklist.xlsx", sheet: "Shipment Checklist", title: "LOGILEE SHIPMENT CHECKLIST", columns: [1, 2, 3, 4, 5, 6, 7], totalsRow: 58, rows: (d) => { const saved = new Map((d.items || []).map((item) => [item.id, item])); return checklistItems().map((item) => { const value = saved.get(item.id) || {}; return [item.group, value.checked ? "Done" : "Open", item.label, value.owner || "", value.due || "", value.checked ? "Complete" : "Pending", d.notes || ""]; }); }, totals: (d) => { const items = checklistItems(); return [{ column: 2, value: items.filter((item) => !d.items?.find((saved) => saved.id === item.id && saved.checked)).length }, { column: 2, value: items.filter((item) => d.items?.find((saved) => saved.id === item.id && saved.checked)).length }]; } }
  };
  function countryName(code) { return (countries().find((item) => item[0] === code) || ["", code, code])[1]; }
  function topValues(id, d) {
    const notifyName = d.notifySame ? d.buyerName : d.notifyName;
    const notifyAddress = d.notifySame ? d.buyerAddress : d.notifyAddress;
    const route = id === "packing-list" ? { loading: d.loading, destination: d.finalDestination, carrier: d.carrier, sailing: d.sailingDate || d.packingDate } : { loading: d.loading || d.receipt, destination: d.finalDestination || d.delivery || d.discharge, carrier: d.carrier || "", sailing: d.sailingDate || d.estimatedShipDate };
    return { A4: [d.sellerName || d.shipperName, d.sellerAddress || d.shipperAddress].filter(Boolean).join("\n"), A9: [d.buyerName || d.consigneeName, d.buyerAddress || d.consigneeAddress].filter(Boolean).join("\n"), A14: [notifyName, notifyAddress].filter(Boolean).join("\n"), H4: [d.invoiceNo || d.packingNo || d.proformaNo, d.invoiceDate || d.packingDate || d.issueDate].filter(Boolean).join(" / "), H6: id === "packing-list" ? (d.remarks || "") : [d.lcNo, d.lcDate].filter(Boolean).join(" / "), H9: d.lcBank || "", H12: id === "packing-list" ? "" : (d.remarks || d.notes || ""), E19: route.loading || "", E21: [route.carrier, route.sailing].filter(Boolean).join(" / ") };
  }
  async function shippingInstructionXlsxBlob(d) {
    await ensureExcelJs();
    const response = await fetch(new URL("../assets/templates/shipping-instruction.xlsx", location.href).href, { cache: "no-store" });
    if (!response.ok) throw new Error("Template base unavailable");
    const workbook = new window.ExcelJS.Workbook(); await workbook.xlsx.load(await response.arrayBuffer());
    const sheet = workbook.getWorksheet("SI");
    if (!sheet || sheet.getCell("A1").value !== "SHIPPING INSTRUCTION") throw new Error("Template base integrity check failed");
    const clean = value => String(value ?? "").replace(/\r\n?/g, "\n");
    const put = (cell, value) => { sheet.getCell(cell).value = value === undefined || value === null ? "" : value; };
    const block = (column, start, end, value) => {
      const lines = clean(value).split("\n"); while (lines.length && !lines.at(-1).trim()) lines.pop();
      if (lines.length > end - start + 1) { const error = new Error(`${column}${start}:${column}${end}: maximum ${end - start + 1} lines; received ${lines.length}.`); error.code = "WORKBOOK_VALIDATION"; throw error; }
      for (let row = start; row <= end; row++) put(`${column}${row}`, lines[row - start] || "");
    };
    put("A6", [d.siRef, d.siDate].filter(Boolean).join(" / ")); put("E6", [d.bookingNo, d.shipperRef].filter(Boolean).join(" / "));
    put("A8", d.customerRef); put("E8", d.mode);
    block("A", 11, 14, [d.shipperName, d.shipperAddress].filter(Boolean).join("\n"));
    block("E", 11, 14, [d.consigneeName, d.consigneeAddress].filter(Boolean).join("\n"));
    block("A", 16, 19, [d.notifyName, d.notifyAddress].filter(Boolean).join("\n"));
    block("E", 16, 19, [d.forwarderName, d.forwarderAddress].filter(Boolean).join("\n"));
    put("A22", [d.carrier, d.vessel, d.voyage].filter(Boolean).join(" / ")); put("E22", [d.receipt, d.loading].filter(Boolean).join(" / "));
    put("A24", [d.discharge, d.delivery].filter(Boolean).join(" / ")); put("E24", [d.etd, d.eta].filter(Boolean).join(" / "));
    const rows = meaningfulRows(d.rows || []); if (rows.length > 8) { const error = new Error(`Cargo: maximum 8 rows; received ${rows.length}.`); error.code = "WORKBOOK_VALIDATION"; throw error; }
    for (let i=0;i<8;i++) { const row=rows[i]||{}; const n=27+i; put(`A${n}`,[row.containerNo,row.sealNo].filter(Boolean).join(" / ")); put(`B${n}`,row.containerType); put(`C${n}`,[row.marks,row.packages].filter(v=>v!==""&&v!=null).join(" / ")); put(`D${n}`,row.packageType); put(`E${n}`,row.description); put(`F${n}`,row.hsCode); put(`G${n}`,row.grossWeight === "" || row.grossWeight == null ? "" : `${row.grossWeight} ${row.weightUnit || "kg"}`); put(`H${n}`,row.cbm); }
    put("A37", [d.freightTerms,d.freightPayableAt].filter(Boolean).join(" / ")); put("E37", [d.blType,d.originalBlCount].filter(Boolean).join(" / "));
    put("A39", clean(d.chargeInstructions)); put("E39", clean(d.releaseInstructions));
    block("A",41,43,d.specialInstructions); put("A45", d.dangerousGoods || "Not specified"); put("E45", clean(d.regulatoryInfo));
    put("A48", [d.preparedBy,d.preparedCompany].filter(Boolean).join(" / ")); put("E48", d.preparedDate);
    return new Blob([await workbook.xlsx.writeBuffer()], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  }
  async function checklistXlsxBlob(d) {
    await ensureExcelJs();
    const workbook=new window.ExcelJS.Workbook(),sheet=workbook.addWorksheet("CHECKLIST");
    sheet.pageSetup={paperSize:9,orientation:"portrait",fitToPage:true,fitToWidth:1,fitToHeight:0,margins:{left:.25,right:.25,top:.35,bottom:.35,header:.1,footer:.1},printArea:`A1:F${12+(d.items||[]).length}`,printTitlesRow:"10:10"};sheet.views=[{showGridLines:false}];
    [12,18,48,15,15,32].forEach((width,index)=>sheet.getColumn(index+1).width=width);
    const thin={style:"thin",color:{argb:"FF60758A"}},border={top:thin,left:thin,bottom:thin,right:thin},fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFDCE6EF"}},label={type:"pattern",pattern:"solid",fgColor:{argb:"FFF1F4F7"}};
    sheet.mergeCells("A1:F2");Object.assign(sheet.getCell("A1"),{value:lang==="ko"?"선적 체크리스트":"SHIPMENT CHECKLIST",font:{name:"Arial",size:18,bold:true},alignment:{horizontal:"center",vertical:"middle"},border});
    const headers=[["Shipment Reference",d.reference],["Customer / Buyer",d.customer],["Consignee",d.consignee],["Origin / Destination",[d.origin,d.destination].filter(Boolean).join(" / ")],["Mode / Incoterms",[d.mode,d.incoterms,d.namedPlace].filter(Boolean).join(" / ")],["ETD / ETA",[d.etd,d.eta].filter(Boolean).join(" / ")],["Carrier / Forwarder",d.carrier],["Prepared By / Last Updated",[d.preparedBy,d.updated].filter(Boolean).join(" / ")]];
    for(let i=0;i<4;i++){const row=3+i,left=headers[i*2],right=headers[i*2+1];sheet.getCell(`A${row}`).value=left[0];sheet.mergeCells(`A${row}:B${row}`);sheet.getCell(`C${row}`).value=left[1];sheet.getCell(`D${row}`).value=right[0];sheet.getCell(`E${row}`).value=right[1];sheet.mergeCells(`E${row}:F${row}`);for(let c=1;c<=6;c++){const cell=sheet.getCell(row,c);cell.font={name:"Arial",size:8,bold:c===1||c===4};cell.fill=c===1||c===4?label:undefined;cell.border=border;cell.alignment={vertical:"middle",wrapText:true};}}
    sheet.mergeCells("A8:F8");Object.assign(sheet.getCell("A8"),{value:lang==="ko"?"운영 계획 지원 도구입니다. 선적, 운송사, 통관, 규제 및 도착지 요건은 달라질 수 있습니다.":"Operational planning aid. Shipment, carrier, customs, regulatory, and destination requirements may vary.",font:{name:"Arial",size:8,italic:true,color:{argb:"FF40566D"}},alignment:{vertical:"middle"},border});
    ["STATUS","STAGE","TASK","OWNER","TARGET DATE","NOTES"].forEach((v,i)=>{const cell=sheet.getCell(10,i+1);cell.value=lang==="ko"?["상태","단계","작업","담당자","목표일","메모"][i]:v;cell.font={name:"Arial",size:8,bold:true};cell.fill=fill;cell.border=border;cell.alignment={horizontal:"center",vertical:"middle",wrapText:true};});
    (d.items||[]).forEach((item,index)=>{const row=11+index,[status,stage,task,owner,due,notes]=[item.status||"Pending",item.stage,item.task,item.owner,item.due,item.notes];[status,stage,task,owner,due,notes].forEach((v,i)=>{const cell=sheet.getCell(row,i+1);cell.value=v||"";cell.font={name:"Arial",size:9};cell.border=border;cell.alignment={vertical:"middle",wrapText:true};});sheet.getRow(row).height=32;});
    const footer=11+(d.items||[]).length;sheet.mergeCells(`A${footer}:F${footer+1}`);Object.assign(sheet.getCell(`A${footer}`),{value:lang==="ko"?"LOGILEE Shipment Checklist는 운영 계획 지원 도구입니다. 법률·통관·운송사 요건의 완전성을 보증하지 않습니다.":"LOGILEE Shipment Checklist is an operational planning aid and does not guarantee complete legal, customs, or carrier requirements.",font:{name:"Arial",size:8,color:{argb:"FF40566D"}},alignment:{vertical:"middle",wrapText:true},border});
    return new Blob([await workbook.xlsx.writeBuffer()],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
  }
  async function baseXlsxBlob(id, d) {
    if (id === "commercial-invoice" || id === "packing-list" || id === "pro-forma-invoice") {
      const { buildTradeWorkbook } = await import("./logilee-workbook.mjs?v=templates-pi-border-v34-20260909");
      return buildTradeWorkbook(id, d);
    }
    if (id === "shipping-instruction") return shippingInstructionXlsxBlob(d);
    if (id === "shipment-checklist") return checklistXlsxBlob(d);
    const layout = xlsxLayouts[id]; const ExcelJS = window.ExcelJS;
    if (!layout || !ExcelJS) throw new Error("ExcelJS runtime unavailable");
    const response = await fetch(new URL(`../assets/templates/${layout.file}`, location.href).href, { cache: "no-store" });
    if (!response.ok) throw new Error("Template base unavailable");
    const workbook = new ExcelJS.Workbook(); await workbook.xlsx.load(await response.arrayBuffer());
    const sheet = workbook.getWorksheet(layout.sheet) || workbook.worksheets[0];
    if (!sheet || sheet.getCell("A1").value !== (layout.baseTitle || layout.title || layout.sheet.toUpperCase())) throw new Error("Template base integrity check failed");
    if (id === "pro-forma-invoice") { sheet.getCell("A1").value = "PRO FORMA INVOICE"; sheet.getCell("E4").value = "8.Pro Forma Invoice No. & Date"; }
    Object.entries(topValues(id, d)).forEach(([address, value]) => { sheet.getCell(address).value = value; });
    const rows = layout.rows(d); if (rows.length > 50) throw new Error("Template supports up to 50 item rows");
    const extraRows = Math.max(0, rows.length - layout.itemCapacity);
    if (extraRows) sheet.insertRows(layout.totalsRow, Array.from({ length: extraRows }, () => []), "i");
    for (let index = 0; index < layout.itemCapacity + extraRows; index++) layout.columns.forEach((column, valueIndex) => { sheet.getCell(layout.itemStartRow + index, column).value = rows[index]?.[valueIndex] ?? null; });
    layout.totals(d).forEach(({ column, value, rowOffset = 0 }) => { sheet.getCell(layout.totalsRow + extraRows + rowOffset, column).value = value; });
    const printEnd = layout.totalsRow + extraRows + (id === "commercial-invoice" || id === "pro-forma-invoice" ? 4 : 5);
    sheet.pageSetup.printArea = `A1:${id === "commercial-invoice" ? "K" : "I"}${printEnd}`;
    return new Blob([await workbook.xlsx.writeBuffer()], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
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
      meaningfulRows(d.rows || []).forEach((row, index) => add(index + 1, row.description, row.hsCode, countryName(row.origin || d.origin), num(row.quantity), row.unit, num(row.unitPrice), num(row.quantity) * num(row.unitPrice)));
      const total = totals(id, d); add(""); add("Subtotal", total.goods); add("Freight", num(d.freight)); add("Insurance", num(d.insurance)); add("Packing", num(d.packing)); add("Other Charges", num(d.otherCharges)); add("Discount", num(d.discount)); add("TOTAL", total.total, d.currency);
    } else if (id === "packing-list") {
      add("Packing List No.", d.packingNo); add("Invoice No.", d.invoiceNo); add("Date", d.packingDate); add("");
      party("SELLER / SHIPPER", d.sellerName, d.sellerAddress, "", ""); add(""); party("BUYER / CONSIGNEE", d.buyerName, d.buyerAddress, "", ""); add("");
      add("SHIPMENT INFORMATION"); add("Mode", d.mode); add("Port of Loading", d.loading); add("Port of Discharge", d.discharge); add("Final Destination", d.finalDestination); add("Carrier", d.carrier); add("");
      add("Package No.", "Marks & Numbers", "Package Type", "Description", "Quantity", "Unit", "Net Weight (kg)", "Gross Weight (kg)", "Dimensions", "CBM");
      meaningfulRows(d.rows || []).forEach((row) => { const factor = weightToKg[row.weightUnit] || 1; const cbm = packageCbm(row); add(row.packageNo || row.type, row.marks, row.type, row.description, num(row.quantity), row.unit, num(row.netWeight) * factor, num(row.grossWeight) * factor, `${row.length} × ${row.width} × ${row.height} ${row.dimensionUnit}`, cbm); });
      const total = totals(id, d); add(""); add("Total Packages", total.packages); add("Total Quantity", total.quantity); add("Total Net Weight (kg)", total.net); add("Total Gross Weight (kg)", total.gross); add("Total CBM", total.cbm);
    } else if (id === "pro-forma-invoice") {
      add("Quotation / Reference", d.proformaNo); add("Issue Date", d.issueDate); add("Validity Date", d.validUntil); add("Estimated Shipping Date", d.estimatedShipDate); add("Buyer Reference", d.buyerRef); add("Currency", d.currency); add("Payment Terms", d.paymentTerms); add("Incoterms® / Named Delivery Point", `${d.incoterms || ""} ${d.namedPlace || ""}`.trim()); add("");
      party("SELLER", d.sellerName, d.sellerAddress, countryName(d.sellerCountry), ""); add(""); party("BUYER", d.buyerName, d.buyerAddress, countryName(d.buyerCountry), ""); add("");
      add("No.", "Quoted Items", "HS Code", "Country of Origin", "Quantity", "Unit", "Unit Price", "Extended Amount");
      meaningfulRows(d.rows || []).forEach((row, index) => add(index + 1, row.description, row.hsCode, countryName(row.origin), num(row.quantity), row.unit, num(row.unitPrice), num(row.quantity) * num(row.unitPrice)));
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
  async function requestPdfConversion(workbookBlob) {
    const response = await fetch(xlsxPdfEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" },
      body: workbookBlob
    });
    if (!response.ok || !String(response.headers.get("Content-Type") || "").toLowerCase().startsWith("application/pdf")) {
      throw new Error(`PDF conversion failed (${response.status})`);
    }
    return response.blob();
  }
  async function exportTemplate(format, button) {
    const id = state.selected;
    const d = state.data[id];
    const name = filename(id, d, format);
    const cloudPdf = format === "pdf" && (id === "commercial-invoice" || id === "packing-list" || id === "pro-forma-invoice" || id === "shipping-instruction" || id === "shipment-checklist");
    const buttonLabel = button?.textContent;
    if (cloudPdf && button) {
      button.disabled = true;
      button.textContent = lang === "ko" ? "PDF 생성 중..." : "Generating PDF...";
    }
    try {
      const rows = exportRows(id, d);
      if (format === "xlsx") downloadBlob(await baseXlsxBlob(id, d), name, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
      if (format === "docx") downloadBlob(await docxBlob(rows, templates.find((tpl) => tpl.id === id).title), name, "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
      if (cloudPdf) downloadBlob(await requestPdfConversion(await baseXlsxBlob(id, d)), name, "application/pdf");
      else if (format === "pdf") downloadBlob(pdfBlob(id, d), name, "application/pdf");
      toast(T.exported);
    } catch (error) {
      if (format === "xlsx" && error?.code === "WORKBOOK_VALIDATION") {
        toast((lang === "ko" ? "XLSX 입력 확인: " : "Check XLSX input: ") + error.message);
        return;
      }
      console.error("Template export failed", error);
      if (cloudPdf) {
        toast(lang === "ko"
          ? "PDF 변환에 실패했습니다. XLSX 다운로드는 계속 사용할 수 있습니다."
          : "PDF conversion failed. XLSX download is still available.");
        return;
      }
      const xlsxFailure = format === "xlsx" && /ExcelJS|Template base/i.test(String(error?.message || error));
      toast(xlsxFailure
        ? (lang === "ko" ? "Excel 모듈을 불러오지 못했습니다. XLSX 다운로드를 다시 시도하세요." : "The Excel module could not be loaded. Please try the XLSX download again.")
        : (lang === "ko" ? "문서를 생성할 수 없습니다. 잠시 후 다시 시도하세요." : "Unable to generate the document. Please try again."));
    } finally {
      if (cloudPdf && button) {
        button.disabled = false;
        button.textContent = buttonLabel;
      }
    }
  }
  function filename(id, d, format) {
    const ref = d.invoiceNo || d.packingNo || d.proformaNo || d.bookingNo || d.siRef || d.reference || id;
    const labels = { "commercial-invoice": "Commercial_Invoice", "packing-list": "Packing_List", "pro-forma-invoice": "Pro_Forma_Invoice", "shipping-instruction": "Shipping_Instruction", "shipment-checklist": "Shipment_Checklist" };
    return `${labels[id] || id}_${String(ref).replace(/[\\/:*?"<>|]+/g, "-")}.${format}`;
  }
  function downloadBlob(blob, name, type) {
    const url = URL.createObjectURL(blob instanceof Blob ? blob : new Blob([blob], { type }));
    const a = document.createElement("a");
    a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  }
  function xmlEscape(value) { return String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  async function unusedLegacyXlsxBlob(rows, id) {
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
  // Draw a source-style business form directly as PDF primitives. This keeps PDF independent
  // from the immutable XLSX bases while preserving their compact A4 portrait geometry.
  function pdfBlob(id, d) {
    const pages = [];
    const items = meaningfulRows(d.rows || []);
    const kind = id === "packing-list" ? "pl" : id === "shipping-instruction" ? "si" : "ci";
    const capacity = kind === "pl" ? 21 : kind === "si" ? 8 : 22;
    for (let start = 0; start < Math.max(1, items.length); start += capacity) {
      const pageItems = items.slice(start, start + capacity);
      const last = start + pageItems.length >= items.length;
      const draw = new PdfPage();
      if (kind === "pl") drawPackingList(draw, d, pageItems, start, last);
      else if (kind === "si") drawShippingInstruction(draw, d, pageItems, start, last);
      else drawInvoice(draw, d, pageItems, start, last, id === "pro-forma-invoice");
      pages.push(draw.content());
    }
    return makePdf(pages);
  }
  class PdfPage {
    constructor() { this.ops = []; }
    line(x1, y1, x2, y2, width = 0.6) { this.ops.push(`${width} w ${x1} ${y1} m ${x2} ${y2} l S`); }
    rect(x, y, w, h, fill = false) { this.ops.push(fill ? `0.93 g ${x} ${y} ${w} ${h} re f 0 g` : `${x} ${y} ${w} ${h} re S`); }
    text(value, x, y, size = 8, bold = false, max = 0) {
      const text = pdfText(value, max, size);
      if (!text) return;
      this.ops.push(`BT /${bold ? "F2" : "F1"} ${size} Tf ${x} ${y} Td (${pdfEscape(text)}) Tj ET`);
    }
    content() { return this.ops.join("\n"); }
  }
  function pdfText(value, max, size) {
    const text = String(value ?? "").replace(/[\r\n]+/g, " / ").replace(/[^\x20-\x7E]/g, "?");
    if (!max) return text;
    const limit = Math.max(1, Math.floor(max / Math.max(3.2, size * 0.52)));
    return text.length > limit ? `${text.slice(0, Math.max(1, limit - 3))}...` : text;
  }
  function pdfField(page, label, value, x, y, w) {
    page.text(label, x + 5, y + 15, 6.5, true, w - 10);
    page.text(value, x + 5, y + 5, 8, false, w - 10);
  }
  function formHeader(page, title, d, meta) {
    page.rect(28, 32, 539, 778); page.text(title, 205, 786, 16, true, 250);
    page.line(28, 770, 567, 770, 1.1);
    pdfField(page, "SELLER / SHIPPER", d.sellerName || d.shipperName, 36, 706, 255);
    pdfField(page, "BUYER / CONSIGNEE", d.buyerName || d.consigneeName, 304, 706, 255);
    page.line(36, 706, 559, 706); page.line(298, 706, 298, 760);
    pdfField(page, "ADDRESS", d.sellerAddress || d.shipperAddress, 36, 665, 255);
    pdfField(page, "ADDRESS", d.buyerAddress || d.consigneeAddress, 304, 665, 255);
    page.line(36, 665, 559, 665);
    pdfField(page, meta.leftLabel, meta.leftValue, 36, 624, 255);
    pdfField(page, meta.rightLabel, meta.rightValue, 304, 624, 255);
    page.line(36, 624, 559, 624); page.line(298, 624, 298, 760);
  }
  function drawInvoice(page, d, rows, offset, last, proforma) {
    const capacity = 22;
    formHeader(page, proforma ? "PRO FORMA INVOICE" : "COMMERCIAL INVOICE", d, {
      leftLabel: proforma ? "PRO FORMA NO. / ISSUE DATE" : "INVOICE NO. / DATE",
      leftValue: [proforma ? d.proformaNo : d.invoiceNo, proforma ? d.issueDate : d.invoiceDate].filter(Boolean).join(" / "),
      rightLabel: "CURRENCY / PAYMENT TERMS",
      rightValue: [d.currency, d.paymentTerms].filter(Boolean).join(" / ")
    });
    pdfField(page, "INCOTERMS / NAMED PLACE", [d.incoterms, d.namedPlace].filter(Boolean).join(" "), 36, 583, 255);
    pdfField(page, "PORT / MODE", [d.loading, d.mode, d.discharge].filter(Boolean).join(" / "), 304, 583, 255);
    page.line(36, 583, 559, 583);
    const cols = [36, 72, 275, 335, 395, 455, 515, 559];
    const heads = ["NO.", "DESCRIPTION OF GOODS", "QTY", "UNIT", "UNIT PRICE", "AMOUNT", "HS CODE"];
    tableHeader(page, cols, heads, 542);
    for (let i = 0; i < capacity; i++) {
      const row = rows[i] || {};
      const y = 523 - i * 20;
      const amount = num(row.quantity) * num(row.unitPrice);
      const hasRow = Boolean(row.description || row.marks || row.packageNo || row.hsCode);
      const values = [hasRow ? offset + i + 1 : "", row.description, row.quantity ? num(row.quantity) : "", row.unit, row.unitPrice ? num(row.unitPrice) : "", amount || "", row.hsCode];
      tableRow(page, cols, values, y, 20);
    }
    const tableBottom = 523 - capacity * 20;
    page.line(36, tableBottom, 559, tableBottom);
    if (last) {
      const total = totals(proforma ? "pro-forma-invoice" : "commercial-invoice", d);
      pdfField(page, "GOODS TOTAL", total.goods || "", 36, tableBottom - 42, 175);
      pdfField(page, "TOTAL QUANTITY", rows.length ? meaningfulRows(d.rows || []).reduce((sum, row) => sum + num(row.quantity), 0) : "", 218, tableBottom - 42, 175);
      pdfField(page, proforma ? "QUOTED TOTAL" : "TOTAL AMOUNT", total.total || "", 400, tableBottom - 42, 159);
      page.line(36, tableBottom - 42, 559, tableBottom - 42);
      page.text("REMARKS", 41, tableBottom - 64, 7, true); page.text(d.remarks || d.notes || "", 41, tableBottom - 77, 8, false, 510);
      page.line(36, 88, 559, 88); page.text("AUTHORIZED SIGNATURE", 420, 61, 7, true);
    }
  }
  function drawPackingList(page, d, rows, offset, last) {
    formHeader(page, "PACKING LIST", d, { leftLabel: "PACKING LIST NO. / DATE", leftValue: [d.packingNo, d.packingDate].filter(Boolean).join(" / "), rightLabel: "INVOICE NO.", rightValue: d.invoiceNo });
    pdfField(page, "PORT OF LOADING / DISCHARGE", [d.loading, d.discharge].filter(Boolean).join(" / "), 36, 583, 255);
    pdfField(page, "FINAL DESTINATION / CARRIER", [d.finalDestination, d.carrier].filter(Boolean).join(" / "), 304, 583, 255);
    page.line(36, 583, 559, 583);
    const cols = [36, 86, 275, 335, 395, 455, 515, 559];
    tableHeader(page, cols, ["PKG.", "DESCRIPTION OF GOODS", "QTY", "UNIT", "NET KG", "GROSS KG", "MEASUREMENT"], 542);
    for (let i = 0; i < 21; i++) {
      const row = rows[i] || {};
      const factor = weightToKg[row.weightUnit] || 1;
      const hasRow = Boolean(row.description || row.packageNo || row.marks || row.type);
      const values = [hasRow ? (row.packageNo || row.type) : "", row.description, row.quantity ? num(row.quantity) : "", row.unit, row.netWeight ? num(row.netWeight) * factor : "", row.grossWeight ? num(row.grossWeight) * factor : "", hasRow ? `${row.length || ""} x ${row.width || ""} x ${row.height || ""} ${row.dimensionUnit || ""}` : ""];
      tableRow(page, cols, values, 523 - i * 20, 20);
    }
    const bottom = 523 - 21 * 20; page.line(36, bottom, 559, bottom);
    if (last) { const total = totals("packing-list", d); pdfField(page, "TOTAL PACKAGES", total.packages || "", 36, bottom - 42, 130); pdfField(page, "TOTAL NET KG", total.net || "", 180, bottom - 42, 130); pdfField(page, "TOTAL GROSS KG", total.gross || "", 324, bottom - 42, 130); pdfField(page, "TOTAL CBM", total.cbm || "", 468, bottom - 42, 91); page.line(36, bottom - 42, 559, bottom - 42); page.line(36, 88, 559, 88); page.text("AUTHORIZED SIGNATURE", 420, 61, 7, true); }
  }
  function drawShippingInstruction(page, d, rows, offset, last) {
    formHeader(page, "SHIPPING INSTRUCTION", d, { leftLabel: "BOOKING NO. / SI REFERENCE", leftValue: [d.bookingNo, d.siRef].filter(Boolean).join(" / "), rightLabel: "B/L TYPE / FREIGHT TERMS", rightValue: [d.blType, d.freightTerms].filter(Boolean).join(" / ") });
    pdfField(page, "PLACE OF RECEIPT / PORT OF LOADING", [d.receipt, d.loading].filter(Boolean).join(" / "), 36, 583, 255);
    pdfField(page, "PORT OF DISCHARGE / DELIVERY", [d.discharge, d.delivery].filter(Boolean).join(" / "), 304, 583, 255); page.line(36, 583, 559, 583);
    const cols = [36, 105, 175, 275, 335, 430, 500, 559];
    tableHeader(page, cols, ["CONTAINER", "SEAL", "MARKS", "PACKAGES", "TYPE", "DESCRIPTION", "GROSS KG"], 542);
    for (let i = 0; i < 8; i++) { const row = rows[i] || {}; tableRow(page, cols, [row.containerNo, row.sealNo, row.marks, row.packages ? num(row.packages) : "", row.packageType, row.description, row.grossWeight ? num(row.grossWeight) * (weightToKg[row.weightUnit] || 1) : ""], 523 - i * 20, 20); }
    if (last) { page.line(36, 523 - 8 * 20, 559, 523 - 8 * 20); page.line(36, 88, 559, 88); page.text("AUTHORIZED SIGNATURE", 420, 61, 7, true); }
  }
  function tableHeader(page, cols, heads, y) { page.rect(cols[0], y, cols[cols.length - 1] - cols[0], 20, true); heads.forEach((head, i) => { page.text(head, cols[i] + 4, y + 7, 6.2, true, cols[i + 1] - cols[i] - 8); }); cols.slice(0, -1).forEach((x) => page.line(x, y, x, y + 20)); page.line(cols[cols.length - 1], y, cols[cols.length - 1], y + 20); }
  function tableRow(page, cols, values, y, h) { values.forEach((value, i) => page.text(value, cols[i] + 4, y + 7, 6.8, false, cols[i + 1] - cols[i] - 8)); cols.forEach((x) => page.line(x, y, x, y + h)); page.line(cols[0], y, cols[cols.length - 1], y); }
  function makePdf(contents) {
    const enc = new TextEncoder(); const fontIds = { regular: 2, bold: 3 }; const objects = ["1 0 obj << /Type /Catalog /Pages 4 0 R >> endobj", "2 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj", "3 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> endobj"];
    const pageIds = []; contents.forEach((content, index) => { const pageId = 5 + index * 2; const contentId = pageId + 1; pageIds.push(pageId); objects.push(`${pageId} 0 obj << /Type /Page /Parent 4 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 ${fontIds.regular} 0 R /F2 ${fontIds.bold} 0 R >> >> /Contents ${contentId} 0 R >> endobj`); objects.push(`${contentId} 0 obj << /Length ${enc.encode(content).length} >> stream\n${content}\nendstream endobj`); });
    objects.splice(3, 0, `4 0 obj << /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >> endobj`);
    let pdf = "%PDF-1.4\n"; const offsets = [0]; objects.forEach((obj) => { offsets.push(enc.encode(pdf).length); pdf += `${obj}\n`; }); const xref = enc.encode(pdf).length; pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n${offsets.slice(1).map((n) => `${String(n).padStart(10, "0")} 00000 n `).join("\n")}\ntrailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`; return new Blob([pdf], { type: "application/pdf" });
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
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeDocuments, { once: true });
  } else {
    initializeDocuments();
  }
})();
