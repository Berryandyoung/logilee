const LOGILEE = {
  ko: {
    searchPlaceholder: "물류 용어, 도구, 항만, 문서를 검색하세요",
    noResult: "검색 결과가 없습니다. FOB, CBM, B/L, 부산항 같은 키워드를 시도해 보세요.",
    copied: "결과를 복사했습니다.",
    external: "공식 조회 페이지로 이동합니다. LOGILEE는 실제 추적 상태를 임의로 생성하지 않습니다.",
    invalid: "값을 올바르게 입력해 주세요.",
    recent: "최근 조회"
  },
  en: {
    searchPlaceholder: "Search terms, tools, ports, documents",
    noResult: "No results found. Try FOB, CBM, B/L, Busan Port, or Incoterms.",
    copied: "Result copied.",
    external: "Opening the official tracking page. LOGILEE does not invent tracking status.",
    invalid: "Please enter valid values.",
    recent: "Recent lookups"
  }
};

const searchIndex = {
  ko: [
    { type: "Tracking", title: "Container Tracking", summary: "컨테이너 번호로 선사 또는 공식 조회 페이지를 확인합니다.", url: "track.html", keywords: "container tracking container number 컨테이너 번호 추적" },
    { type: "Tracking", title: "B/L Tracking", summary: "Bill of Lading 번호로 선적 조회를 시작합니다.", url: "track.html", keywords: "bl bill of lading 선하증권 tracking" },
    { type: "Tracking", title: "Booking Tracking", summary: "Booking 번호 기반 조회 구조를 준비했습니다.", url: "track.html", keywords: "booking number 부킹 번호 tracking" },
    { type: "Tracking", title: "Air Waybill Tracking", summary: "AWB 번호 기반 항공화물 조회 구조입니다.", url: "track.html", keywords: "awb air waybill 항공화물 tracking" },
    { type: "Guide", title: "FOB란? 비용과 위험 이전 시점", summary: "Incoterms 2020 기준 FOB 조건의 핵심을 실무 관점으로 정리했습니다.", url: "dictionary.html#fob", keywords: "fob free on board 인코텀즈 선적" },
    { type: "Dictionary", title: "FOB · Free On Board", summary: "수출자가 본선 적재까지 책임지는 해상 운송 조건입니다.", url: "dictionary.html#fob", keywords: "fob free on board" },
    { type: "Tool", title: "CBM 계산기", summary: "화물 부피, 수량, 중량을 입력해 총 CBM을 계산합니다.", url: "cbm.html", keywords: "cbm calculator 부피 계산 박스" },
    { type: "Tool", title: "화물 추적", summary: "Courier, B/L, Container, Air Cargo 공식 조회 페이지로 연결합니다.", url: "track.html", keywords: "tracking bl container dhl fedex ups" },
    { type: "Port", title: "부산항 KRPUS", summary: "한국의 주요 컨테이너 항만입니다. 상세 데이터 페이지 구조가 준비되어 있습니다.", url: "ports.html", keywords: "busan port krpus 부산항 항만" },
    { type: "Country", title: "Vietnam Country Guide", summary: "베트남 수출입 규정, 서류, 항만, 시장 정보를 연결할 국가 가이드입니다.", url: "countries.html", keywords: "vietnam country 베트남 국가 수출" },
    { type: "Company", title: "Maersk", summary: "선사와 운송사 정보를 조회할 수 있는 확장 구조입니다.", url: "ports.html", keywords: "maersk carrier company 선사 회사" },
    { type: "Product", title: "Stainless steel bolt", summary: "제품명 기반 HS Code 및 규제 검색으로 확장할 수 있습니다.", url: "search.html?q=stainless%20steel%20bolt", keywords: "product stainless steel bolt hs code 제품" },
    { type: "Document", title: "Commercial Invoice", summary: "상업송장의 목적, 필수 항목, 작성 실수를 정리할 문서 허브입니다.", url: "documents.html", keywords: "invoice commercial document" },
    { type: "FAQ", title: "FOB와 FCA는 어떻게 다른가요?", summary: "운송 방식과 위험 이전 지점이 다르므로 계약 조건 확인이 필요합니다.", url: "dictionary.html#fob", keywords: "fob fca faq" }
  ],
  en: [
    { type: "Tracking", title: "Container Tracking", summary: "Start a carrier or official lookup by container number.", url: "track.html", keywords: "container tracking container number" },
    { type: "Tracking", title: "B/L Tracking", summary: "Start a shipment lookup by Bill of Lading number.", url: "track.html", keywords: "bl bill of lading tracking" },
    { type: "Tracking", title: "Booking Tracking", summary: "Prepared structure for booking number lookup.", url: "track.html", keywords: "booking number tracking" },
    { type: "Tracking", title: "Air Waybill Tracking", summary: "Prepared structure for AWB air cargo lookup.", url: "track.html", keywords: "awb air waybill air cargo tracking" },
    { type: "Guide", title: "What FOB Means in Practice", summary: "A practical overview of cost and risk transfer under Incoterms 2020.", url: "dictionary.html#fob", keywords: "fob free on board incoterms" },
    { type: "Dictionary", title: "FOB · Free On Board", summary: "A sea freight term where the seller is responsible until goods are loaded on board.", url: "dictionary.html#fob", keywords: "fob free on board" },
    { type: "Tool", title: "CBM Calculator", summary: "Calculate cargo volume from dimensions, quantity, and weight.", url: "cbm.html", keywords: "cbm calculator carton volume" },
    { type: "Tool", title: "Shipment Tracking", summary: "Open official carrier tracking pages for courier, B/L, container, and air cargo.", url: "track.html", keywords: "tracking bl container dhl fedex ups" },
    { type: "Port", title: "Port of Busan KRPUS", summary: "A core Korean container port. Detail data structure is ready for expansion.", url: "ports.html", keywords: "busan port krpus korea" },
    { type: "Country", title: "Vietnam Country Guide", summary: "Country guide structure for regulations, documents, ports, and market signals.", url: "countries.html", keywords: "vietnam country export import" },
    { type: "Company", title: "Maersk", summary: "Expandable carrier and company information structure.", url: "ports.html", keywords: "maersk carrier company shipping line" },
    { type: "Product", title: "Stainless steel bolt", summary: "Prepared for product-based HS Code and compliance search.", url: "search.html?q=stainless%20steel%20bolt", keywords: "product stainless steel bolt hs code" },
    { type: "Document", title: "Commercial Invoice", summary: "Document hub for purpose, required fields, examples, and common mistakes.", url: "documents.html", keywords: "invoice commercial document" },
    { type: "FAQ", title: "How are FOB and FCA different?", summary: "Transport mode and risk transfer points differ. Review contract terms carefully.", url: "dictionary.html#fob", keywords: "fob fca faq" }
  ]
};

const terms = {
  ko: [
    { id: "fob", term: "FOB", name: "Free On Board", category: "Trade", definition: "해상 운송에서 수출자가 화물을 본선에 적재할 때까지의 비용과 위험을 부담하는 조건입니다.", example: "부산항에서 FOB 조건으로 계약했다면 매수인은 본선 적재 이후의 해상 운임과 보험을 검토합니다.", related: ["FCA", "CFR", "CIF"] },
    { id: "bl", term: "B/L", name: "Bill of Lading", category: "Documentation", definition: "운송인이 화물 수령 또는 선적을 증명하기 위해 발행하는 선하증권입니다.", example: "수입 통관과 화물 인도 과정에서 B/L 번호가 자주 필요합니다.", related: ["Sea Waybill", "Arrival Notice"] },
    { id: "chargeable-weight", term: "Chargeable Weight", name: "운임중량", category: "Air", definition: "실중량과 부피중량 중 운임 산정에 적용되는 중량입니다.", example: "항공화물은 가볍지만 부피가 크면 운임중량이 실제 중량보다 커질 수 있습니다.", related: ["Dimensional Weight", "CBM"] },
    { id: "hs-code", term: "HS Code", name: "품목분류번호", category: "Customs", definition: "국제 무역 상품 분류에 사용하는 코드로 관세와 규제 확인의 출발점입니다.", example: "같은 제품도 재질과 용도에 따라 HS Code가 달라질 수 있습니다.", related: ["Customs Clearance", "Duty"] }
  ],
  en: [
    { id: "fob", term: "FOB", name: "Free On Board", category: "Trade", definition: "A sea freight term where the seller covers cost and risk until goods are loaded on board.", example: "Under FOB Busan, the buyer usually reviews ocean freight and insurance after loading.", related: ["FCA", "CFR", "CIF"] },
    { id: "bl", term: "B/L", name: "Bill of Lading", category: "Documentation", definition: "A transport document issued by a carrier to evidence cargo receipt or shipment.", example: "The B/L number is often used during customs clearance and cargo release.", related: ["Sea Waybill", "Arrival Notice"] },
    { id: "chargeable-weight", term: "Chargeable Weight", name: "운임중량", category: "Air", definition: "The weight used to rate freight, usually the greater of actual and dimensional weight.", example: "Light but bulky air cargo can be charged by dimensional weight.", related: ["Dimensional Weight", "CBM"] },
    { id: "hs-code", term: "HS Code", name: "Harmonized System Code", category: "Customs", definition: "A product classification code used as a starting point for customs duty and compliance checks.", example: "Material and use can change the HS classification for similar products.", related: ["Customs Clearance", "Duty"] }
  ]
};

function currentLang() {
  return document.documentElement.lang && document.documentElement.lang.startsWith("ko") ? "ko" : "en";
}

function wireMenu() {
  const button = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-mobile-nav]");
  if (!button || !nav) return;
  button.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(open));
  });
}

function wireSidebarCollapse() {
  const button = document.querySelector("[data-sidebar-toggle]");
  const shell = document.querySelector(".workspace-shell");
  if (!button || !shell) return;
  button.addEventListener("click", () => {
    const collapsed = shell.classList.toggle("sidebar-collapsed");
    button.setAttribute("aria-label", collapsed ? "사이드바 펼치기" : "사이드바 접기");
    if (window.lucide) window.lucide.createIcons();
  });
}

function setupLanguageChoice() {
  document.querySelectorAll("[data-lang-choice]").forEach((link) => {
    link.addEventListener("click", () => localStorage.setItem("logilee-lang", link.dataset.langChoice));
  });
}

function runSearch(query, lang) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return searchIndex[lang];
  return searchIndex[lang].filter((item) => {
    const haystack = `${item.type} ${item.title} ${item.summary} ${item.keywords}`.toLowerCase();
    return haystack.includes(normalized);
  });
}

function renderResults(target, results, lang) {
  if (!target) return;
  if (!results.length) {
    target.innerHTML = `<div class="empty-state">${LOGILEE[lang].noResult}</div>`;
    return;
  }
  target.innerHTML = results.map((item) => `
    <a class="result-item" href="${item.url}">
      <span class="kicker">${item.type}</span>
      <h3>${item.title}</h3>
      <p class="muted">${item.summary}</p>
    </a>
  `).join("");
}

function wireSearch() {
  const lang = currentLang();
  document.querySelectorAll("[data-search-form]").forEach((form) => {
    const input = form.querySelector("input");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const q = input.value.trim();
      if (!q) return;
      localStorage.setItem("logilee-last-search", q);
      location.href = `search.html?q=${encodeURIComponent(q)}`;
    });
  });
  const results = document.querySelector("[data-search-results]");
  if (results) {
    const input = document.querySelector("[data-search-input]");
    const params = new URLSearchParams(location.search);
    const q = params.get("q") || input?.value || "";
    if (input) input.value = q;
    renderResults(results, runSearch(q, lang), lang);
    input?.addEventListener("input", () => renderResults(results, runSearch(input.value, lang), lang));
  }
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      const input = document.querySelector("[data-search-input], .search-box input");
      input?.focus();
    }
  });
}

function rowTemplate(lang) {
  const labels = lang === "ko"
    ? ["화물명", "수량", "길이", "너비", "높이", "중량"]
    : ["Cargo", "Qty", "Length", "Width", "Height", "Weight"];
  return `
    <div class="form-grid cargo-row">
      <div class="field"><label>${labels[0]}</label><input value="Box" data-cargo></div>
      <div class="field"><label>${labels[1]}</label><input type="number" min="1" value="10" data-qty></div>
      <div class="field"><label>${labels[2]}</label><input type="number" min="0" value="50" data-length></div>
      <div class="field"><label>${labels[3]}</label><input type="number" min="0" value="40" data-width></div>
      <div class="field"><label>${labels[4]}</label><input type="number" min="0" value="30" data-height></div>
      <div class="field"><label>${labels[5]} kg</label><input type="number" min="0" value="0" data-weight></div>
    </div>
  `;
}

function calculateRows(lang) {
  const unit = document.querySelector("[data-unit]")?.value || "cm";
  const rows = [...document.querySelectorAll(".cargo-row")].map((row) => {
    const qty = Number(row.querySelector("[data-qty]").value);
    let length = Number(row.querySelector("[data-length]").value);
    let width = Number(row.querySelector("[data-width]").value);
    let height = Number(row.querySelector("[data-height]").value);
    const weight = Number(row.querySelector("[data-weight]").value || 0);
    if (!qty || length < 0 || width < 0 || height < 0 || weight < 0) return null;
    if (unit === "cm") {
      length /= 100; width /= 100; height /= 100;
    } else {
      length *= 0.0254; width *= 0.0254; height *= 0.0254;
    }
    const cbm = length * width * height * qty;
    return { cargo: row.querySelector("[data-cargo]").value || "Cargo", qty, weight: weight * qty, cbm };
  }).filter(Boolean);
  const totalCbm = rows.reduce((sum, row) => sum + row.cbm, 0);
  const totalQty = rows.reduce((sum, row) => sum + row.qty, 0);
  const totalWeight = rows.reduce((sum, row) => sum + row.weight, 0);
  const utilization20 = Math.min(100, totalCbm / 28 * 100);
  return { rows, totalCbm, totalQty, totalWeight, utilization20 };
}

function renderCbm(lang) {
  const output = document.querySelector("[data-cbm-output]");
  if (!output) return;
  const data = calculateRows(lang);
  output.innerHTML = `
    <span class="summary-number">${data.totalCbm.toFixed(3)}</span>
    <strong>CBM</strong>
    <p class="muted">${lang === "ko" ? "총 수량" : "Total quantity"} ${data.totalQty} · ${lang === "ko" ? "총 중량" : "Total weight"} ${data.totalWeight.toFixed(1)} kg</p>
    <p class="muted">20GP ${lang === "ko" ? "예상 부피 사용률" : "estimated volume use"} ${util(data.utilization20)}</p>
    <table class="result-table">
      <thead><tr><th>${lang === "ko" ? "화물" : "Cargo"}</th><th>Qty</th><th>CBM</th><th>kg</th></tr></thead>
      <tbody>${data.rows.map((row) => `<tr><td>${row.cargo}</td><td>${row.qty}</td><td>${row.cbm.toFixed(3)}</td><td>${row.weight.toFixed(1)}</td></tr>`).join("")}</tbody>
    </table>
  `;
}

function util(value) {
  return `${Math.round(value)}%`;
}

function wireCbm() {
  const lang = currentLang();
  const rows = document.querySelector("[data-cargo-rows]");
  if (!rows) return;
  rows.innerHTML = rowTemplate(lang);
  renderCbm(lang);
  document.querySelector("[data-add-row]")?.addEventListener("click", () => {
    rows.insertAdjacentHTML("beforeend", rowTemplate(lang));
    renderCbm(lang);
  });
  document.querySelector("[data-sample]")?.addEventListener("click", () => {
    rows.innerHTML = rowTemplate(lang) + rowTemplate(lang);
    const second = rows.querySelectorAll(".cargo-row")[1];
    second.querySelector("[data-cargo]").value = "Carton";
    second.querySelector("[data-qty]").value = "24";
    second.querySelector("[data-length]").value = "60";
    second.querySelector("[data-width]").value = "45";
    second.querySelector("[data-height]").value = "40";
    second.querySelector("[data-weight]").value = "12";
    renderCbm(lang);
  });
  document.querySelector("[data-reset]")?.addEventListener("click", () => {
    rows.innerHTML = rowTemplate(lang);
    renderCbm(lang);
  });
  document.querySelector("[data-copy]")?.addEventListener("click", async () => {
    const data = calculateRows(lang);
    await navigator.clipboard?.writeText(`LOGILEE CBM: ${data.totalCbm.toFixed(3)} CBM / ${data.totalQty} pcs / ${data.totalWeight.toFixed(1)} kg`);
    alert(LOGILEE[lang].copied);
  });
  document.addEventListener("input", (event) => {
    if (event.target.closest(".cargo-row") || event.target.matches("[data-unit]")) renderCbm(lang);
  });
}

const carrierLinks = {
  dhl: "https://www.dhl.com/kr-en/home/tracking.html?tracking-id=",
  fedex: "https://www.fedex.com/fedextrack/?trknbr=",
  ups: "https://www.ups.com/track?tracknum=",
  usps: "https://tools.usps.com/go/TrackConfirmAction?qtc_tLabels1=",
  maersk: "https://www.maersk.com/tracking/",
  msc: "https://www.msc.com/track-a-shipment?bl=",
  hmm: "https://www.hmm21.com/cms/business/ebiz/trackTrace/index.jsp?blNo=",
  cma: "https://www.cma-cgm.com/ebusiness/tracking?SearchBy=BL&Reference="
};

function detectCarrier(value) {
  const code = value.toUpperCase();
  if (code.startsWith("1Z")) return "ups";
  if (/^\d{12}$/.test(code)) return "fedex";
  if (/^\d{10}$/.test(code)) return "dhl";
  if (code.startsWith("MAEU")) return "maersk";
  if (code.startsWith("MED")) return "msc";
  if (code.startsWith("HMM")) return "hmm";
  if (code.startsWith("CMD") || code.startsWith("CMA")) return "cma";
  return "";
}

function wireTracking() {
  const form = document.querySelector("[data-track-form]");
  if (!form) return;
  const lang = currentLang();
  const number = form.querySelector("[data-track-number]");
  const carrier = form.querySelector("[data-carrier]");
  const recent = document.querySelector("[data-recent]");
  const renderRecent = () => {
    const items = JSON.parse(localStorage.getItem("logilee-recent-track") || "[]");
    if (!recent) return;
    recent.innerHTML = items.length ? items.map((item) => `<span class="chip">${item}</span>`).join("") : `<p class="muted">${LOGILEE[lang].recent}: -</p>`;
  };
  number.addEventListener("input", () => {
    const detected = detectCarrier(number.value.replace(/\s+/g, ""));
    if (detected) carrier.value = detected;
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const clean = number.value.replace(/\s+/g, "");
    const selected = carrier.value || detectCarrier(clean);
    if (!clean || !carrierLinks[selected]) {
      alert(LOGILEE[lang].invalid);
      return;
    }
    const items = JSON.parse(localStorage.getItem("logilee-recent-track") || "[]");
    localStorage.setItem("logilee-recent-track", JSON.stringify([clean, ...items.filter((item) => item !== clean)].slice(0, 5)));
    renderRecent();
    alert(LOGILEE[lang].external);
    window.open(carrierLinks[selected] + encodeURIComponent(clean), "_blank", "noopener");
  });
  renderRecent();
}

function wireDictionary() {
  const list = document.querySelector("[data-term-list]");
  const detail = document.querySelector("[data-term-detail]");
  if (!list || !detail) return;
  const lang = currentLang();
  const render = (term) => {
    detail.innerHTML = `
      <span class="kicker">${term.category}</span>
      <h2 id="${term.id}">${term.term}</h2>
      <p class="lead">${term.name}</p>
      <p>${term.definition}</p>
      <div class="notice"><strong>${lang === "ko" ? "실무 예시" : "Practical example"}</strong><br>${term.example}</div>
      <h3>${lang === "ko" ? "관련 용어" : "Related terms"}</h3>
      <div class="chip-row">${term.related.map((item) => `<span class="chip">${item}</span>`).join("")}</div>
      <p class="muted">${lang === "ko" ? "수정일" : "Updated"}: 2026-07-26 · ${lang === "ko" ? "참고 정보이며 계약 확정 전 공식 기준을 확인하세요." : "For reference only. Confirm official standards before finalizing contracts."}</p>
    `;
    list.querySelectorAll("button").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.term === term.id)));
  };
  list.innerHTML = terms[lang].map((term) => `<button class="term-button" data-term="${term.id}" aria-pressed="false">${term.term} <span class="muted">${term.name}</span></button>`).join("");
  list.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    render(terms[lang].find((term) => term.id === button.dataset.term));
  });
  const hash = location.hash.replace("#", "");
  render(terms[lang].find((term) => term.id === hash) || terms[lang][0]);
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
  wireMenu();
  wireSidebarCollapse();
  setupLanguageChoice();
  wireSearch();
  wireCbm();
  wireTracking();
  wireDictionary();
});
