const LOGILEE = {
  ko: {
    searchPlaceholder: "물류 용어, 도구, 항만, 문서를 검색하세요",
    noResult: "No results found.",
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
    { type: "Tracking", title: "Container Tracking", summary: "컨테이너 번호로 공식 조회 페이지를 확인합니다.", url: "track.html", keywords: "container tracking container number 컨테이너 번호 추적" },
    { type: "Tracking", title: "B/L Tracking", summary: "Bill of Lading 번호로 선적 조회를 시작합니다.", url: "track.html", keywords: "bl bill of lading 선하증권 tracking" },
    { type: "Tracking", title: "Air Waybill Tracking", summary: "AWB 번호 기반 항공화물 조회 페이지로 이동합니다.", url: "track.html", keywords: "awb air waybill 항공화물 tracking" },
    { type: "Tool", title: "CBM Calculator", summary: "화물 부피, 수량, 중량을 입력해 총 CBM을 계산합니다.", url: "cbm.html", keywords: "cbm calculator 부피 계산 박스" },
    { type: "Tool", title: "Currency Converter", summary: "Frankfurter 환율 데이터로 주요 통화를 변환합니다.", url: "currency-converter.html", keywords: "currency converter 환율 계산기 exchange rate" },
    { type: "Tool", title: "Business Day Calculator", summary: "주말과 공휴일을 제외해 예상 영업일을 계산합니다.", url: "business-day.html", keywords: "business day working day 영업일 공휴일" },
    { type: "Tool", title: "HS Code Lookup", summary: "품목분류와 HS Code 검색 페이지로 이동합니다.", url: "../hscode.html", keywords: "hs code hscode 품목분류 관세" },
    { type: "Guide", title: "Incoterms 2020", summary: "무역 조건별 비용과 위험 이전 기준을 확인합니다.", url: "../incoterms-2020.html", keywords: "incoterms fob cif fca 인코텀즈" },
    { type: "Dictionary", title: "FOB · Free On Board", summary: "수출자가 본선 적재까지 책임지는 해상 운송 조건입니다.", url: "dictionary.html#fob", keywords: "fob free on board" },
    { type: "Port", title: "Port of Busan", summary: "부산항 정보 페이지로 이동합니다.", url: "ports.html", keywords: "busan port krpus 부산항 항만" },
    { type: "Country", title: "Country Guides", summary: "국가별 무역과 물류 정보 페이지로 이동합니다.", url: "countries.html", keywords: "country guide vietnam 국가 베트남 수출" },
    { type: "Trade Data", title: "Country Trade Profile", summary: "World Bank 지표로 국가별 무역 프로필을 확인합니다.", url: "country-trade-profile.html", keywords: "country trade profile world bank gdp exports imports" },
    { type: "Trade Data", title: "EU Trade Explorer", summary: "Eurostat 공식 무역 통계를 조회합니다.", url: "eu-trade-explorer.html", keywords: "eurostat eu trade statistics 무역 통계" },
    { type: "Trade Data", title: "Global Trade Holiday Calendar", summary: "주요 무역국 공휴일을 확인합니다.", url: "holidays.html", keywords: "holiday calendar public holidays 공휴일" },
    { type: "Document", title: "Commercial Invoice", summary: "무역 문서 허브로 이동합니다.", url: "documents.html", keywords: "invoice commercial document" },
    { type: "News", title: "Latest News", summary: "LOGILEE 뉴스 페이지로 이동합니다.", url: "news.html", keywords: "news rss market logistics trade 뉴스" }
  ],
  en: [
    { type: "Tracking", title: "Container Tracking", summary: "Start a carrier or official lookup by container number.", url: "track.html", keywords: "container tracking container number" },
    { type: "Tracking", title: "B/L Tracking", summary: "Start a shipment lookup by Bill of Lading number.", url: "track.html", keywords: "bl bill of lading tracking" },
    { type: "Tracking", title: "Air Waybill Tracking", summary: "Open the air cargo tracking workflow.", url: "track.html", keywords: "awb air waybill air cargo tracking" },
    { type: "Tool", title: "CBM Calculator", summary: "Calculate cargo volume from dimensions, quantity, and weight.", url: "cbm.html", keywords: "cbm calculator carton volume" },
    { type: "Tool", title: "Currency Converter", summary: "Convert major trade currencies using Frankfurter data.", url: "currency-converter.html", keywords: "currency converter exchange rate fx" },
    { type: "Tool", title: "Business Day Calculator", summary: "Calculate dates excluding weekends and public holidays.", url: "business-day.html", keywords: "business day working day holiday calculator" },
    { type: "Tool", title: "HS Code Lookup", summary: "Find HS codes and tariff classifications.", url: "../hscode-en.html", keywords: "hs code hscode tariff classification" },
    { type: "Guide", title: "Incoterms 2020", summary: "Compare cost and risk transfer by trade term.", url: "../incoterms-2020-en.html", keywords: "incoterms fob cif fca trade terms" },
    { type: "Dictionary", title: "FOB · Free On Board", summary: "A sea freight term where the seller is responsible until goods are loaded on board.", url: "dictionary.html#fob", keywords: "fob free on board" },
    { type: "Tool", title: "Shipment Tracking", summary: "Open official carrier tracking pages for courier, B/L, container, and air cargo.", url: "track.html", keywords: "tracking bl container dhl fedex ups" },
    { type: "Port", title: "Port of Busan", summary: "Open the port information page.", url: "ports.html", keywords: "busan port krpus korea" },
    { type: "Country", title: "Country Guides", summary: "Open country trade and logistics information.", url: "countries.html", keywords: "country guide vietnam export import" },
    { type: "Trade Data", title: "Country Trade Profile", summary: "Review World Bank indicators by country.", url: "country-trade-profile.html", keywords: "country trade profile world bank gdp exports imports" },
    { type: "Trade Data", title: "EU Trade Explorer", summary: "Search official Eurostat trade statistics.", url: "eu-trade-explorer.html", keywords: "eurostat eu trade statistics" },
    { type: "Trade Data", title: "Global Trade Holiday Calendar", summary: "Check public holidays in major trading countries.", url: "holidays.html", keywords: "holiday calendar public holidays" },
    { type: "Document", title: "Commercial Invoice", summary: "Open the document hub for trade paperwork.", url: "documents.html", keywords: "invoice commercial document" },
    { type: "News", title: "Latest News", summary: "Open LOGILEE news and insights.", url: "news.html", keywords: "news rss market logistics trade" }
  ]
};
const terms = {
  ko: [
    { id: "fob", term: "FOB", name: "Free On Board", category: "Trade", definition: "해상 운송에서 수출자가 화물을 본선에 적재할 때까지의 비용과 위험을 부담하는 조건입니다.", example: "부산항에서 FOB 조건으로 계약했다면 매수인은 본선 적재 이후의 해상 운임과 보험을 검토합니다.", related: ["FCA", "CFR", "CIF"] },
    { id: "cif", term: "CIF", name: "Cost, Insurance and Freight", category: "Trade", definition: "매도인이 목적항까지의 운임과 보험을 부담하지만 위험은 선적항에서 본선 적재 시 이전되는 해상 운송 조건입니다.", example: "CIF 인천 조건이라도 화물 손상 위험 이전 시점과 보험 보상 범위를 별도로 확인해야 합니다.", related: ["FOB", "CFR", "Incoterms"] },
    { id: "cfr", term: "CFR", name: "Cost and Freight", category: "Trade", definition: "매도인이 목적항까지의 운임을 부담하지만 보험은 포함하지 않는 해상 운송 조건입니다.", example: "CFR 조건에서는 매수인이 해상 보험 필요 여부를 직접 검토합니다.", related: ["FOB", "CIF"] },
    { id: "fca", term: "FCA", name: "Free Carrier", category: "Trade", definition: "매도인이 지정 장소에서 운송인에게 화물을 인도하고 수출 통관을 완료하는 조건입니다.", example: "항공 운송이나 컨테이너 운송에서는 FOB보다 FCA가 더 적합한 경우가 많습니다.", related: ["EXW", "FOB"] },
    { id: "exw", term: "EXW", name: "Ex Works", category: "Trade", definition: "매도인은 자신의 사업장에서 화물을 준비하고 이후 비용과 위험은 대부분 매수인이 부담하는 조건입니다.", example: "EXW 견적은 저렴해 보일 수 있지만 픽업, 수출통관, 내륙운송 비용을 별도로 계산해야 합니다.", related: ["FCA", "DDP"] },
    { id: "ddp", term: "DDP", name: "Delivered Duty Paid", category: "Trade", definition: "매도인이 목적지까지 운송과 수입 관세·세금 부담까지 책임지는 조건입니다.", example: "DDP 조건은 판매자 부담이 크므로 현지 통관 가능성과 세무 리스크를 확인해야 합니다.", related: ["DAP", "Incoterms"] },
    { id: "bl", term: "B/L", name: "Bill of Lading", korean: "선하증권", category: "Documentation", definition: "운송인이 화물 수령 또는 선적을 증명하기 위해 발행하는 운송 문서입니다.", example: "수입 통관과 화물 인도 과정에서 B/L 번호가 자주 필요합니다.", related: ["Sea Waybill", "Arrival Notice", "Commercial Invoice"], aliases: ["Bill of Lading", "BL", "선하증권"], relatedResource: { label: "Commercial Invoice 작성 시 자주 발생하는 7가지 오류", url: "posts/commercial-invoice-common-mistakes/" } },
    { id: "awb", term: "AWB", name: "Air Waybill", korean: "항공화물운송장", category: "Air", definition: "항공사가 항공화물 운송을 위해 발행하는 운송장 번호와 문서입니다.", example: "AWB 번호는 항공화물 추적과 도착 통지 확인에 사용됩니다.", related: ["Chargeable Weight", "Air Cargo", "Commercial Invoice"], aliases: ["Air Waybill", "항공운송장", "항공화물운송장"], relatedResource: { label: "Commercial Invoice 작성 시 자주 발생하는 7가지 오류", url: "posts/commercial-invoice-common-mistakes/" } },
    { id: "fcl", term: "FCL", name: "Full Container Load", category: "Ocean", definition: "한 화주의 화물로 컨테이너 한 대를 사용하는 해상 운송 방식입니다.", example: "물량이 충분하거나 혼재 리스크를 줄이고 싶다면 FCL을 검토합니다.", related: ["LCL", "Container"] },
    { id: "lcl", term: "LCL", name: "Less than Container Load", category: "Ocean", definition: "여러 화주의 화물을 한 컨테이너에 혼재하여 운송하는 방식입니다.", example: "소량 화물은 LCL이 유리할 수 있지만 콘솔 작업과 리드타임을 확인해야 합니다.", related: ["FCL", "CBM"] },
    { id: "eta", term: "ETA", name: "Estimated Time of Arrival", category: "Logistics", definition: "선박, 항공기, 차량 또는 화물의 예상 도착 시점입니다.", example: "ETA는 운항 상황에 따라 변경될 수 있으므로 최신 스케줄을 확인합니다.", related: ["ETD", "Tracking"] },
    { id: "etd", term: "ETD", name: "Estimated Time of Departure", category: "Logistics", definition: "운송 수단 또는 화물의 예상 출발 시점입니다.", example: "ETD 변경은 서류 마감과 창고 반입 일정에 영향을 줄 수 있습니다.", related: ["ETA", "Cutoff"] },
    { id: "demurrage", term: "Demurrage", name: "체선료", category: "Ocean", definition: "컨테이너가 터미널 무료 장치 기간을 초과했을 때 발생하는 비용입니다.", example: "수입 통관 지연은 demurrage 비용으로 이어질 수 있습니다.", related: ["Detention", "Free Time"] },
    { id: "detention", term: "Detention", name: "지체료", category: "Ocean", definition: "컨테이너를 터미널 밖으로 반출한 뒤 무료 사용 기간을 초과했을 때 발생하는 비용입니다.", example: "수입자가 빈 컨테이너 반납을 지연하면 detention이 발생할 수 있습니다.", related: ["Demurrage", "Free Time"] },
    { id: "chargeable-weight", term: "Chargeable Weight", name: "운임중량", category: "Air", definition: "실중량과 부피중량 중 운임 산정에 적용하는 중량입니다.", example: "항공화물은 가볍지만 부피가 크면 운임중량이 실제 중량보다 클 수 있습니다.", related: ["Dimensional Weight", "CBM"] },
    { id: "coo", term: "COO", name: "Certificate of Origin", category: "Documentation", definition: "상품의 원산지를 증명하기 위해 발급되는 문서입니다.", example: "FTA 적용이나 수입 규제 확인 시 원산지증명서가 필요할 수 있습니다.", related: ["Origin", "Customs"] },
    { id: "commercial-invoice", term: "Commercial Invoice", name: "Commercial Invoice", korean: "상업송장", category: "Documentation", definition: "판매자가 발행하며 품목, 수량, 가격, 통화, 거래 당사자와 거래 조건을 기록하는 국제무역 문서입니다.", example: "실무에서는 PO/계약서, Packing List, B/L 또는 AWB와 금액·수량·품목 정보가 일치하는지 확인해야 합니다.", related: ["Packing List", "B/L", "AWB", "HS Code", "Incoterms"], aliases: ["Invoice", "CI", "상업송장", "커머셜 인보이스"], relatedResource: { label: "Commercial Invoice 작성 시 자주 발생하는 7가지 오류", url: "posts/commercial-invoice-common-mistakes/" } },
    { id: "packing-list", term: "Packing List", name: "Packing List", korean: "포장명세서", category: "Documentation", definition: "포장 단위, 수량, 중량, 치수, 포장 번호와 마크를 정리해 실제 화물 구성을 확인하는 문서입니다.", example: "Commercial Invoice의 품목·수량과 Packing List의 포장 수량·중량이 맞지 않으면 통관, 창고 검수, 클레임 처리에서 문제가 생길 수 있습니다.", related: ["Commercial Invoice", "B/L", "CBM", "HS Code"], aliases: ["PL", "포장명세서", "패킹리스트"], relatedResource: { label: "Commercial Invoice 작성 시 자주 발생하는 7가지 오류", url: "posts/commercial-invoice-common-mistakes/" } },
    { id: "incoterms", term: "Incoterms", name: "International Commercial Terms", korean: "인코텀즈", category: "Trade", definition: "국제 거래에서 매도인과 매수인의 비용 부담, 위험 이전, 운송 관련 책임을 정리한 무역 조건 규칙입니다.", example: "Invoice에 적힌 FOB, CIF, FCA 같은 조건은 운임 포함 범위와 위험 이전 시점을 판단하는 기준이 됩니다.", related: ["FOB", "CIF", "FCA", "Commercial Invoice"], aliases: ["Incoterms 2020", "인코텀즈"], relatedResource: { label: "FOB vs CIF, 수입자에게 어떤 조건이 유리할까?", url: "posts/fob-vs-cif/" } },
    { id: "hs-code", term: "HS Code", name: "품목분류번호", korean: "품목분류번호", category: "Customs", definition: "국제 무역 상품 분류에 사용하는 코드로 관세와 규제 확인의 출발점입니다.", example: "같은 제품도 재질과 용도에 따라 HS Code가 달라질 수 있습니다.", related: ["Customs Clearance", "Duty", "Commercial Invoice"], aliases: ["Harmonized System Code", "HS", "품목분류번호"], relatedResource: { label: "Commercial Invoice 작성 시 자주 발생하는 7가지 오류", url: "posts/commercial-invoice-common-mistakes/" } }
  ],
  en: [
    { id: "fob", term: "FOB", name: "Free On Board", category: "Trade", definition: "A sea freight term where the seller covers cost and risk until goods are loaded on board.", example: "Under FOB Busan, the buyer usually reviews ocean freight and insurance after loading.", related: ["FCA", "CFR", "CIF"] },
    { id: "cif", term: "CIF", name: "Cost, Insurance and Freight", category: "Trade", definition: "A sea freight term where the seller pays freight and insurance to the destination port, while risk transfers at loading.", example: "Under CIF Incheon, confirm both the risk transfer point and the insurance coverage.", related: ["FOB", "CFR", "Incoterms"] },
    { id: "cfr", term: "CFR", name: "Cost and Freight", category: "Trade", definition: "A sea freight term where the seller pays freight to the destination port, but insurance is not included.", example: "Under CFR, the buyer should decide whether separate marine insurance is needed.", related: ["FOB", "CIF"] },
    { id: "fca", term: "FCA", name: "Free Carrier", category: "Trade", definition: "A term where the seller delivers goods to the carrier at the named place and handles export clearance.", example: "FCA is often more practical than FOB for air freight and containerized shipments.", related: ["EXW", "FOB"] },
    { id: "exw", term: "EXW", name: "Ex Works", category: "Trade", definition: "A term where the seller makes goods available at its premises and the buyer carries most cost and risk afterward.", example: "An EXW quote may look low, but pickup, export clearance, and inland freight need separate review.", related: ["FCA", "DDP"] },
    { id: "ddp", term: "DDP", name: "Delivered Duty Paid", category: "Trade", definition: "A term where the seller is responsible for delivery to destination including import duties and taxes.", example: "Before accepting DDP, confirm local import compliance and tax responsibilities.", related: ["DAP", "Incoterms"] },
    { id: "bl", term: "B/L", name: "Bill of Lading", korean: "선하증권", category: "Documentation", definition: "A transport document issued by a carrier to evidence cargo receipt or shipment.", example: "The B/L number is often used during customs clearance and cargo release.", related: ["Sea Waybill", "Arrival Notice", "Commercial Invoice"], aliases: ["Bill of Lading", "BL"], relatedResource: { label: "Commercial Invoice common mistakes", url: "posts/commercial-invoice-common-mistakes/" } },
    { id: "awb", term: "AWB", name: "Air Waybill", korean: "항공화물운송장", category: "Air", definition: "A transport document and number issued for air cargo shipments.", example: "The AWB number is used for air cargo status and arrival notice checks.", related: ["Chargeable Weight", "Air Cargo", "Commercial Invoice"], aliases: ["Air Waybill"], relatedResource: { label: "Commercial Invoice common mistakes", url: "posts/commercial-invoice-common-mistakes/" } },
    { id: "fcl", term: "FCL", name: "Full Container Load", category: "Ocean", definition: "Ocean freight where one shipper uses a full container.", example: "FCL may be preferred when cargo volume is large enough or mixing risk should be reduced.", related: ["LCL", "Container"] },
    { id: "lcl", term: "LCL", name: "Less than Container Load", category: "Ocean", definition: "Ocean freight where cargo from multiple shippers is consolidated in one container.", example: "LCL can suit smaller shipments, but consolidation handling and lead time should be checked.", related: ["FCL", "CBM"] },
    { id: "eta", term: "ETA", name: "Estimated Time of Arrival", category: "Logistics", definition: "The expected arrival time of a vessel, aircraft, truck, or shipment.", example: "ETA can change with congestion, weather, and schedule updates.", related: ["ETD", "Tracking"] },
    { id: "etd", term: "ETD", name: "Estimated Time of Departure", category: "Logistics", definition: "The expected departure time of a transport mode or shipment.", example: "An ETD change may affect document cutoff and warehouse delivery timing.", related: ["ETA", "Cutoff"] },
    { id: "demurrage", term: "Demurrage", name: "Demurrage", category: "Ocean", definition: "A charge that can apply when a container stays at the terminal beyond free time.", example: "Customs delays can create demurrage exposure for import shipments.", related: ["Detention", "Free Time"] },
    { id: "detention", term: "Detention", name: "Detention", category: "Ocean", definition: "A charge that can apply when a container is kept outside the terminal beyond free time.", example: "Late empty-container return can lead to detention charges.", related: ["Demurrage", "Free Time"] },
    { id: "chargeable-weight", term: "Chargeable Weight", name: "Chargeable Weight", category: "Air", definition: "The weight used to rate freight, usually the greater of actual and dimensional weight.", example: "Light but bulky air cargo can be charged by dimensional weight.", related: ["Dimensional Weight", "CBM"] },
    { id: "coo", term: "COO", name: "Certificate of Origin", category: "Documentation", definition: "A document used to certify the origin of goods.", example: "A COO may be needed for FTA treatment or import compliance checks.", related: ["Origin", "Customs"] },
    { id: "commercial-invoice", term: "Commercial Invoice", name: "Commercial Invoice", korean: "상업송장", category: "Documentation", definition: "A commercial document issued by the seller that records the goods, quantity, price, currency, buyer/seller information, and other transaction details used in international trade.", example: "In practice, it should be checked against the PO or contract, Packing List, and shipping documents for consistency.", related: ["Packing List", "B/L", "AWB", "HS Code", "Incoterms"], aliases: ["Invoice", "CI"], relatedResource: { label: "Commercial Invoice common mistakes", url: "posts/commercial-invoice-common-mistakes/" } },
    { id: "packing-list", term: "Packing List", name: "Packing List", korean: "포장명세서", category: "Documentation", definition: "A shipment document that lists package count, quantity, weight, dimensions, marks, and packing details for the physical cargo.", example: "Mismatch between the Commercial Invoice and Packing List can create customs, warehouse, or claims issues.", related: ["Commercial Invoice", "B/L", "CBM", "HS Code"], aliases: ["PL"], relatedResource: { label: "Commercial Invoice common mistakes", url: "posts/commercial-invoice-common-mistakes/" } },
    { id: "incoterms", term: "Incoterms", name: "International Commercial Terms", korean: "인코텀즈", category: "Trade", definition: "Rules used in international trade to define buyer and seller responsibilities for cost, risk transfer, delivery, and transport-related obligations.", example: "Terms such as FOB, CIF, and FCA on an invoice help determine freight scope and risk transfer points.", related: ["FOB", "CIF", "FCA", "Commercial Invoice"], aliases: ["Incoterms 2020"], relatedResource: { label: "FOB vs CIF: Which Term Works Better for Importers?", url: "posts/fob-vs-cif/" } },
    { id: "hs-code", term: "HS Code", name: "Harmonized System Code", korean: "품목분류번호", category: "Customs", definition: "A product classification code used as a starting point for customs duty and compliance checks.", example: "Material and use can change the HS classification for similar products.", related: ["Customs Clearance", "Duty", "Commercial Invoice"], aliases: ["Harmonized System Code", "HS"], relatedResource: { label: "Commercial Invoice common mistakes", url: "posts/commercial-invoice-common-mistakes/" } }
  ]
};
function currentLang() {
  return document.documentElement.lang && document.documentElement.lang.startsWith("ko") ? "ko" : "en";
}

function languageRoot(lang) {
  const match = location.pathname.match(/^(.*?)(?:\/ko|\/en)(?:\/|$)/);
  return `${match ? match[1] : ""}/${lang}/`;
}

function pageUrlForLang(lang, page = "") {
  return `${languageRoot(lang)}${page}`;
}

function localizedSearchUrl(lang, query) {
  return `${pageUrlForLang(lang, "search.html")}?q=${encodeURIComponent(query)}`;
}

function localizedResultUrl(item, lang) {
  const base = `${location.origin}${pageUrlForLang(lang)}`;
  try {
    const url = new URL(item.url, base);
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return item.url;
  }
}

function alternateLanguageHref(lang, previousLinks = []) {
  const alternate = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
  if (alternate?.href) return alternate.href;
  const existing = previousLinks.find((href) => href.includes(`/${lang}/`) || href.includes(`../${lang}/`));
  if (existing) return existing;
  const otherLang = lang === "ko" ? "en" : "ko";
  if (location.pathname.includes(`/${otherLang}/`)) {
    return `${location.pathname.replace(`/${otherLang}/`, `/${lang}/`)}${location.search}${location.hash}`;
  }
  return pageUrlForLang(lang);
}

function ensureGlobalHeader() {
  if (!location.pathname.includes("/ko/") && !location.pathname.includes("/en/")) return;
  let topbar = document.querySelector(".topbar");
  if (topbar?.querySelector("[data-header-search]")) return;
  if (!topbar) {
    const host = document.querySelector(".main, .content, main.page");
    if (!host) return;
    topbar = document.createElement("header");
    topbar.className = "topbar workspace-topbar global-common-topbar";
    host.insertBefore(topbar, host.firstChild);
  }

  const lang = currentLang();
  const previousLanguageLinks = [...topbar.querySelectorAll("a")]
    .map((link) => link.getAttribute("href") || "")
    .filter(Boolean);
  const shell = document.querySelector(".workspace-shell");
  const mobileNav = topbar.querySelector("nav[data-mobile-nav]");
  if (mobileNav) mobileNav.classList.add("global-mobile-nav");

  const placeholder = lang === "ko" ? "LOGILEE 검색..." : "Search LOGILEE...";
  const searchLabel = lang === "ko" ? "LOGILEE 검색" : "Search LOGILEE";
  const menuLabel = lang === "ko" ? "메뉴 열기" : "Open menu";
  const koHref = alternateLanguageHref("ko", previousLanguageLinks);
  const enHref = alternateLanguageHref("en", previousLanguageLinks);

  topbar.classList.add("workspace-topbar", "global-common-topbar");
  topbar.innerHTML = `
    <a class="mobile-logo" href="${pageUrlForLang(lang)}">LOGILEE</a>
    <form class="header-search" data-header-search role="search">
      <i data-lucide="search"></i>
      <input name="q" autocomplete="off" placeholder="${placeholder}" aria-label="${searchLabel}">
      <button type="submit" aria-label="${lang === "ko" ? "검색" : "Search"}"><i data-lucide="arrow-right"></i></button>
      <div class="header-search-results" data-header-search-results></div>
    </form>
    <div class="top-actions">
      <div class="language-menu" data-language-menu>
        <button class="icon-btn language-button" type="button" aria-expanded="false"><i data-lucide="globe-2"></i> Language <i data-lucide="chevron-down"></i></button>
        <div class="language-dropdown">
          <span>Language</span>
          <a class="${lang === "ko" ? "is-active" : ""}" href="${koHref}" data-lang-choice="ko">Korean</a>
          <a class="${lang === "en" ? "is-active" : ""}" href="${enHref}" data-lang-choice="en">English</a>
        </div>
      </div>
      <button class="menu-btn" data-menu-toggle aria-expanded="false" aria-label="${menuLabel}"><i data-lucide="menu"></i></button>
    </div>
  `;
  if (mobileNav && !shell) topbar.appendChild(mobileNav);
}

function workspaceNavMarkup(lang) {
  const nav = lang === "ko"
    ? {
        label: "LOGILEE 업무 메뉴",
        home: "Home",
        trade: "Trade",
        country: "국가별 무역 프로필",
        holidays: "무역 공휴일",
        eu: "EU 무역 통계",
        global: "Global Trade Explorer",
        hs: "HS Code",
        logistics: "Logistics",
        tracking: "Tracking Launcher",
        ports: "Port Search",
        cbm: "CBM Calculator",
        compliance: "Compliance",
        hub: "Compliance Hub",
        rules: "수출입 규제",
        market: "Market",
        freight: "Freight Market",
        fx: "환율 계산기",
        business: "영업일 계산기",
        resources: "Resources",
        templates: "Templates",
        documents: "Documents",
        dictionary: "Dictionary",
        learn: "Learn",
        contact: "Contact & Office"
      }
    : {
        label: "LOGILEE workspace menu",
        home: "Home",
        trade: "Trade",
        country: "Country Trade Profile",
        holidays: "Trade Holidays",
        eu: "EU Trade Explorer",
        global: "Global Trade Explorer",
        hs: "HS Code",
        logistics: "Logistics",
        tracking: "Tracking Launcher",
        ports: "Port Search",
        cbm: "CBM Calculator",
        compliance: "Compliance",
        hub: "Compliance Hub",
        rules: "Import / Export Rules",
        market: "Market",
        freight: "Freight Market",
        fx: "Currency Converter",
        business: "Business Day Calculator",
        resources: "Resources",
        templates: "Templates",
        documents: "Documents",
        dictionary: "Dictionary",
        learn: "Learn",
        contact: "Contact & Office"
      };
  const hsHref = lang === "ko" ? "../hscode.html" : "../hscode-en.html";
  return `
    <a class="brand compact-brand" href="./"><strong>LOGILEE</strong><span>Global Trade Workspace</span></a>
    <nav class="workspace-nav" aria-label="${nav.label}">
      <a class="nav-home" href="./"><i data-lucide="home"></i> ${nav.home}</a>
      <section><h2>${nav.trade}</h2><a href="country-trade-profile.html"><i data-lucide="globe"></i>${nav.country}</a><a href="holidays.html"><i data-lucide="calendar-check"></i>${nav.holidays}</a><a href="eu-trade-explorer.html"><i data-lucide="chart-column"></i>${nav.eu}</a><a href="global-trade-explorer.html"><i data-lucide="chart-column"></i>${nav.global}</a><a href="${hsHref}"><i data-lucide="barcode"></i>${nav.hs}</a></section>
      <section><h2>${nav.logistics}</h2><a href="track.html"><i data-lucide="radar"></i>${nav.tracking}</a><a href="ports.html"><i data-lucide="anchor"></i>${nav.ports}</a><a href="cbm.html"><i data-lucide="calculator"></i>${nav.cbm}</a></section>
      <section><h2>${nav.compliance}</h2><a href="dashboard.html"><i data-lucide="shield-check"></i>${nav.hub}</a><a href="dashboard.html"><i data-lucide="shield-alert"></i>${nav.rules}</a></section>
      <section><h2>${nav.market}</h2><a href="freight-market.html"><i data-lucide="chart-no-axes-combined"></i>${nav.freight}</a><a href="currency-converter.html"><i data-lucide="badge-dollar-sign"></i>${nav.fx}</a><a href="business-day.html"><i data-lucide="calendar-clock"></i>${nav.business}</a></section>
      <section><h2>${nav.resources}</h2><a href="templates.html"><i data-lucide="copy"></i>${nav.templates}</a><a href="documents.html"><i data-lucide="file-text"></i>${nav.documents}</a><a href="dictionary.html"><i data-lucide="languages"></i>${nav.dictionary}</a><a href="learn.html"><i data-lucide="graduation-cap"></i>${nav.learn}</a><a href="contact.html"><i data-lucide="building-2"></i>${nav.contact}</a></section>
    </nav>
  `;
}

function ensureGlobalSidebar() {
  if (!location.pathname.includes("/ko/") && !location.pathname.includes("/en/")) return;
  let shell = document.querySelector(".shell");
  let rail = shell?.querySelector(":scope > aside.rail");
  if (!shell) {
    const pageMain = document.querySelector("body > main.page");
    if (!pageMain) return;
    shell = document.createElement("div");
    shell.className = "shell workspace-shell";
    rail = document.createElement("aside");
    rail.className = "rail workspace-rail";
    const mainHost = document.createElement("main");
    mainHost.className = "main";
    document.body.insertBefore(shell, pageMain);
    shell.append(rail, mainHost);
    mainHost.appendChild(pageMain);
  }
  if (!rail) return;
  shell.classList.add("workspace-shell");
  rail.classList.add("workspace-rail");
  if (rail.querySelector(".workspace-nav")) return;
  rail.setAttribute("aria-label", currentLang() === "ko" ? "LOGILEE 업무 메뉴" : "LOGILEE workspace menu");
  rail.innerHTML = workspaceNavMarkup(currentLang());
}

function ensureIconLibrary() {
  if (window.lucide || document.querySelector('script[src*="lucide"]')) return;
  const script = document.createElement("script");
  script.src = "https://unpkg.com/lucide@latest/dist/umd/lucide.min.js";
  script.defer = true;
  script.onload = refreshIcons;
  document.head.appendChild(script);
}
function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function enhanceSidebar() {
  const rail = document.querySelector(".workspace-rail");
  const nav = rail?.querySelector(".workspace-nav");
  if (!rail || !nav || rail.dataset.enhanced === "true") return;

  rail.dataset.enhanced = "true";
  const brand = rail.querySelector(".compact-brand");
  const topToggle = rail.querySelector("[data-sidebar-toggle]");
  const header = document.createElement("div");
  header.className = "sidebar-header";
  if (brand) header.appendChild(brand);
  if (topToggle) header.appendChild(topToggle);
  const drawerClose = document.createElement("button");
  drawerClose.className = "sidebar-drawer-close";
  drawerClose.dataset.sidebarDrawerClose = "";
  drawerClose.type = "button";
  drawerClose.setAttribute("aria-label", "Close menu");
  drawerClose.innerHTML = `<i data-lucide="x"></i>`;
  header.appendChild(drawerClose);
  rail.insertBefore(header, rail.firstChild);

  nav.classList.add("sidebar-nav");
  nav.querySelectorAll("a").forEach((link) => {
    const label = link.textContent.trim().replace(/\s+/g, " ");
    link.dataset.menuLabel = label;
    if (!link.querySelector("span")) {
      const icon = link.querySelector("i, svg");
      const span = document.createElement("span");
      span.textContent = label;
      link.textContent = "";
      if (icon) link.appendChild(icon);
      link.appendChild(span);
    }
  });

  const currentFile = location.pathname.split("/").pop() || "index.html";
  let activeGroupId = "";
  nav.querySelectorAll("a").forEach((link) => {
    const hrefFile = (link.getAttribute("href") || "").split("#")[0].split("?")[0].split("/").pop() || "index.html";
    const isActive = currentFile === hrefFile || (currentFile === "index.html" && link.classList.contains("nav-home"));
    link.classList.toggle("is-active", isActive);
  });

  nav.querySelectorAll("section").forEach((section) => {
    const heading = section.querySelector("h2");
    if (!heading) return;
    const groupId = heading.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
    section.classList.add("nav-group");
    section.dataset.navGroup = groupId;
    const links = [...section.querySelectorAll("a")];
    if (links.some((link) => link.classList.contains("is-active"))) activeGroupId = groupId;

    const trigger = document.createElement("button");
    trigger.className = "nav-group-trigger";
    trigger.type = "button";
    trigger.dataset.accordionTrigger = groupId;
    trigger.setAttribute("aria-expanded", "false");
    trigger.innerHTML = `<span>${heading.textContent.trim()}</span><i data-lucide="chevron-right"></i>`;

    const panel = document.createElement("div");
    panel.className = "nav-group-panel";
    const inner = document.createElement("div");
    inner.className = "nav-group-panel-inner";
    links.forEach((link) => inner.appendChild(link));
    panel.appendChild(inner);
    section.replaceChildren(trigger, panel);
  });

  if (!activeGroupId) {
    activeGroupId = {
      "about.html": "resources",
      "countries.html": "trade"
    }[currentFile] || "";
  }

  if (!document.querySelector("[data-sidebar-overlay]")) {
    const overlay = document.createElement("div");
    overlay.className = "sidebar-overlay";
    overlay.dataset.sidebarOverlay = "";
    document.querySelector(".workspace-shell")?.appendChild(overlay);
  }

  wireSidebarAccordion(activeGroupId);
  requestAnimationFrame(() => {
    nav.querySelector("a.is-active")?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  });
}

function wireSidebarAccordion(activeGroupId) {
  const groups = [...document.querySelectorAll(".nav-group")];
  if (!groups.length) return;

  const key = `logilee-sidebar-groups:${currentLang()}`;
  let saved = null;
  try {
    saved = JSON.parse(localStorage.getItem(key) || "null");
  } catch {
    saved = null;
  }

  const state = {};
  groups.forEach((group) => {
    const groupId = group.dataset.navGroup;
    state[groupId] = saved ? Boolean(saved[groupId]) : groupId === activeGroupId;
    if (groupId === activeGroupId) state[groupId] = true;
  });

  const render = () => {
    groups.forEach((group) => {
      const open = Boolean(state[group.dataset.navGroup]);
      const trigger = group.querySelector(".nav-group-trigger");
      group.dataset.open = String(open);
      trigger?.setAttribute("aria-expanded", String(open));
      trigger?.querySelector("i")?.setAttribute("data-lucide", open ? "chevron-down" : "chevron-right");
    });
    refreshIcons();
  };

  groups.forEach((group) => {
    group.querySelector(".nav-group-trigger")?.addEventListener("click", () => {
      const groupId = group.dataset.navGroup;
      state[groupId] = !state[groupId];
      localStorage.setItem(key, JSON.stringify(state));
      render();
    });
  });

  render();
}

function wireMenu() {
  const button = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-mobile-nav]");
  const shell = document.querySelector(".workspace-shell");
  const overlay = document.querySelector("[data-sidebar-overlay]");
  const drawerClose = document.querySelector("[data-sidebar-drawer-close]");
  if (!button) return;

  if (shell && !nav) {
    const closeDrawer = () => {
      shell.classList.remove("sidebar-drawer-open");
      document.body.classList.remove("sidebar-drawer-active");
      button.setAttribute("aria-expanded", "false");
    };
    const openDrawer = () => {
      shell.classList.add("sidebar-drawer-open");
      document.body.classList.add("sidebar-drawer-active");
      button.setAttribute("aria-expanded", "true");
    };
    button.addEventListener("click", () => {
      shell.classList.contains("sidebar-drawer-open") ? closeDrawer() : openDrawer();
    });
    overlay?.addEventListener("click", closeDrawer);
    drawerClose?.addEventListener("click", closeDrawer);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeDrawer();
    });
    document.querySelectorAll(".workspace-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 1180px)").matches) closeDrawer();
      });
    });
    return;
  }

  if (!nav) return;
  button.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(open));
  });
}

function wireSidebarCollapse() {
  const buttons = document.querySelectorAll("[data-sidebar-toggle], [data-sidebar-footer-toggle]");
  const shell = document.querySelector(".workspace-shell");
  if (!buttons.length || !shell) return;
  const updateButtons = () => {
    const collapsed = shell.classList.contains("sidebar-collapsed");
    document.querySelectorAll("[data-sidebar-toggle]").forEach((button) => {
      button.setAttribute("aria-label", collapsed ? "Expand sidebar" : "Collapse sidebar");
      button.innerHTML = `<i data-lucide="${collapsed ? "chevron-right" : "chevron-left"}"></i>`;
    });
    document.querySelectorAll("[data-sidebar-footer-toggle]").forEach((button) => {
      button.querySelector("i")?.setAttribute("data-lucide", collapsed ? "panel-left-open" : "panel-left-close");
      const text = button.querySelector("span");
      if (text) text.textContent = collapsed ? "Expand" : "Collapse";
    });
    refreshIcons();
  };
  buttons.forEach((button) => button.addEventListener("click", () => {
    const collapsed = shell.classList.toggle("sidebar-collapsed");
    localStorage.setItem("logilee-sidebar-collapsed", String(collapsed));
    updateButtons();
  }));
  if (localStorage.getItem("logilee-sidebar-collapsed") === "true") shell.classList.add("sidebar-collapsed");
  updateButtons();
}

function setupLanguageChoice() {
  document.querySelectorAll("[data-lang-choice]").forEach((link) => {
    link.addEventListener("click", () => localStorage.setItem("logilee-lang", link.dataset.langChoice));
  });
}

function setupLanguageMenu() {
  document.querySelectorAll("[data-language-menu]").forEach((menu) => {
    const button = menu.querySelector("button");
    if (!button) return;
    button.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("click", (event) => {
      if (!menu.contains(event.target)) {
        menu.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        menu.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
      }
    });
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

function resultMarkup(item, lang = currentLang()) {
  return `
    <a class="header-result-item" href="${localizedResultUrl(item, lang)}">
      <span>${item.type}</span>
      <strong>${item.title}</strong>
      <small>${item.summary}</small>
    </a>
  `;
}

function wireHeaderSearch() {
  const lang = currentLang();
  document.querySelectorAll("[data-header-search]").forEach((form) => {
    const input = form.querySelector("input");
    const results = form.querySelector("[data-header-search-results]");
    if (!input || !results) return;

    const render = () => {
      const q = input.value.trim();
      if (!q) {
        results.innerHTML = "";
        form.classList.remove("has-results");
        return;
      }
      const matches = runSearch(q, lang).slice(0, 5);
      results.innerHTML = matches.length
        ? matches.map((item) => resultMarkup(item, lang)).join("")
        : `<div class="header-result-empty">${lang === "ko" ? "No results found." : "No results found."}</div>`;
      form.classList.add("has-results");
    };

    input.addEventListener("input", render);
    input.addEventListener("focus", render);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const q = input.value.trim();
      if (q) location.href = localizedSearchUrl(lang, q);
    });
    document.addEventListener("click", (event) => {
      if (!form.contains(event.target)) form.classList.remove("has-results");
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") form.classList.remove("has-results");
    });
  });
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
      location.href = localizedSearchUrl(lang, q);
    });
  });
  document.querySelectorAll("[data-search-chip]").forEach((button) => {
    button.addEventListener("click", () => {
      const q = button.dataset.searchChip || button.textContent.trim();
      localStorage.setItem("logilee-last-search", q);
      location.href = localizedSearchUrl(lang, q);
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

function formatKstTime(value) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Seoul"
  }).format(value);
}

function formatRate(value, digits = 2) {
  return Number(value).toLocaleString(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });
}

function fetchWithTimeout(url, options = {}, timeout = 9000) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeout);
  return fetch(url, { ...options, signal: controller.signal })
    .finally(() => window.clearTimeout(timer));
}

async function fetchJson(url, { cacheKey = "", ttl = 30 * 60 * 1000, timeout = 9000 } = {}) {
  if (cacheKey) {
    try {
      const cached = JSON.parse(localStorage.getItem(cacheKey) || "null");
      if (cached && Date.now() - cached.time < ttl) return cached.data;
    } catch {
      localStorage.removeItem(cacheKey);
    }
  }
  const response = await fetchWithTimeout(url, { cache: "no-store" }, timeout);
  if (!response.ok) throw new Error(`API ${response.status}`);
  const data = await response.json();
  if (cacheKey) localStorage.setItem(cacheKey, JSON.stringify({ time: Date.now(), data }));
  return data;
}

function dataError(target, message) {
  if (!target) return;
  target.innerHTML = `<div class="data-empty">${message}</div>`;
}

function setupAdSlots() {
  document.querySelectorAll(".ad-slot").forEach((slot) => {
    const ad = slot.querySelector(".adsbygoogle");
    if (!ad) {
      slot.textContent = "";
      slot.hidden = true;
      slot.setAttribute("aria-hidden", "true");
      return;
    }
    slot.classList.add("is-collapsed");
    Array.from(slot.childNodes).forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) node.textContent = "";
    });
    slot.querySelectorAll("span").forEach((label) => label.setAttribute("aria-hidden", "true"));
    slot.dataset.adSlot = slot.dataset.adSlot || "adsense";
    const revealIfFilled = () => {
      const filled = ad.getAttribute("data-ad-status") === "filled" || Boolean(ad.querySelector("iframe"));
      if (filled) slot.classList.remove("is-collapsed");
    };
    const collapseIfUnfilled = () => {
      const filled = ad.getAttribute("data-ad-status") === "filled" || Boolean(ad.querySelector("iframe"));
      slot.classList.toggle("is-collapsed", !filled);
    };
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.warn("AdSense slot unavailable:", error);
    }
    revealIfFilled();
    window.setTimeout(collapseIfUnfilled, 1800);
    new MutationObserver(revealIfFilled).observe(ad, { attributes: true, attributeFilter: ["data-ad-status", "style"] });
  });
}

const TRADE_CURRENCIES = ["USD", "KRW", "EUR", "CNY", "JPY", "GBP", "AUD", "CAD", "SGD", "HKD", "CHF", "INR", "MXN", "THB", "MYR"];

async function getUsdRates() {
  const url = `https://api.frankfurter.dev/v2/rates?base=USD&quotes=${TRADE_CURRENCIES.filter((code) => code !== "USD").join(",")}`;
  const data = await fetchJson(url, { cacheKey: "logilee:fx:usd:v2", ttl: 60 * 60 * 1000 });
  const rates = {};
  if (Array.isArray(data)) {
    data.forEach((item) => {
      const rate = Number(item.rate);
      if (item.quote && Number.isFinite(rate)) rates[item.quote] = rate;
    });
  } else if (data && data.rates) {
    Object.entries(data.rates).forEach(([quote, value]) => {
      const rate = Number(value);
      if (Number.isFinite(rate)) rates[quote] = rate;
    });
  }
  if (!Object.keys(rates).length) throw new Error("Invalid FX response");
  const firstDate = Array.isArray(data) ? data.find((item) => item.date)?.date : data.date;
  return { date: firstDate, base: "USD", rates: { USD: 1, ...rates } };
}

async function loadHomeMarket() {
  const snapshot = document.querySelector("[data-market-snapshot]");
  if (!snapshot) return;
  const status = document.querySelector("[data-market-status]");
  const updated = document.querySelector("[data-market-updated]");
  const lang = currentLang();
  const labels = lang === "ko"
    ? {
        loading: "불러오는 중...",
        latest: "최신 데이터",
        available: "최신 이용 가능 데이터",
        updated: (date) => date ? `FX 업데이트 ${date}. Freight는 공개 출처의 최신 이용 가능 기간을 표시합니다.` : "최신 이용 가능 데이터",
        fxUnavailable: "환율 데이터 조회 불가",
        freightUnavailable: "Freight 데이터 조회 불가"
      }
    : {
        loading: "Loading...",
        latest: "Latest Data",
        available: "Latest available data",
        updated: (date) => date ? `FX updated ${date}. Freight shows latest available source period.` : "Latest available data",
        fxUnavailable: "Market data unavailable",
        freightUnavailable: "Freight data unavailable"
      };
  snapshot.innerHTML = `
    <div class="market-section-label">FX</div>
    <div data-market-fx><strong>Exchange Rate</strong><span>${labels.loading}</span></div>
    <div class="market-section-label">Freight</div>
    <div data-market-freight><strong>Freight Market</strong><span>${labels.loading}</span></div>
  `;
  const fxTarget = snapshot.querySelector("[data-market-fx]");
  const freightTarget = snapshot.querySelector("[data-market-freight]");
  status?.classList.remove("soon");
  if (status) status.textContent = labels.latest;
  if (updated) updated.textContent = labels.available;

  try {
    const data = await getUsdRates();
    const rates = data.rates || {};
    const rows = [
      ["USD/KRW", rates.KRW, 2],
      ["USD/CNY", rates.CNY, 4],
      ["USD/JPY", rates.JPY, 2],
      ["EUR/USD", Number.isFinite(rates.EUR) && rates.EUR > 0 ? 1 / rates.EUR : null, 4]
    ].filter((row) => Number.isFinite(row[1]));

    if (!rows.length) throw new Error("No FX rates returned");
    if (updated) {
      updated.textContent = labels.updated(data.date);
    }
    fxTarget.outerHTML = `
      ${rows.map(([label, value, digits]) => `
        <div class="market-data-row market-data-row--fx">
          <strong>${label}</strong>
          <span>${formatRate(value, digits)}</span>
        </div>
      `).join("")}
    `;
  } catch (error) {
    console.warn("Market Snapshot unavailable:", error);
    fxTarget.innerHTML = `<strong>Exchange Rate</strong><span>${labels.fxUnavailable}</span>`;
  }

  try {
    const freight = await getFreightData();
    const compact = freight.filter((item) => ["tsi_freight", "truck_d11", "rail_frt_intermodal"].includes(item.key));
    freightTarget.outerHTML = compact.map((item) => freightRowMarkup(item, true)).join("");
  } catch (error) {
    console.warn("Freight Snapshot unavailable:", error);
    freightTarget.innerHTML = `<strong>Freight Market</strong><span>${labels.freightUnavailable}</span>`;
  }
}

async function wireFreightMarket() {
  const target = document.querySelector("[data-freight-market]");
  if (!target) return;
  target.innerHTML = `<div class="data-empty">Loading latest available freight data...</div>`;
  try {
    const rows = await getFreightData();
    const summary = rows.filter((item) => ["tsi_freight", "truck_d11", "rail_frt_intermodal"].includes(item.key));
    target.innerHTML = `
      <div class="data-summary-head">
        <div>
          <span class="kicker">Latest Freight Snapshot</span>
          <h2>Latest available public transportation indicators</h2>
          <p class="muted">These are BTS statistical indicators, not real-time freight quotes.</p>
        </div>
      </div>
      <div class="stat-grid freight-summary-grid">
        ${summary.map((item) => {
          const digits = item.latest > 1000 ? 0 : 1;
          const change = Number.isFinite(item.change) ? `${item.change >= 0 ? "↑ +" : "↓ "}${formatRate(item.change, 1)}%` : "";
          const cls = Number.isFinite(item.change) ? `trend-${item.change >= 0 ? "up" : "down"}` : "";
          return `<div class="stat-block"><span>${item.label}</span><strong>${Number.isFinite(item.latest) ? formatRate(item.latest, digits) : "N/A"}</strong>${change ? `<em class="${cls}">${change}</em>` : ""}<small>${formatPeriod(item.period)}</small></div>`;
        }).join("")}
      </div>
      <div class="responsive-table">
        <table class="result-table">
          <thead><tr><th>Indicator</th><th>Latest Value</th><th>Previous Value</th><th>Change %</th><th>Unit</th><th>Data Period</th><th>Source</th></tr></thead>
          <tbody>${rows.map((item) => freightRowMarkup(item)).join("")}</tbody>
        </table>
      </div>
      <p class="muted">Source: U.S. Bureau of Transportation Statistics. Dataset: Transportation Services Index and Seasonally-Adjusted Transportation Data. Update cycles vary by series and may be revised.</p>
    `;
  } catch (error) {
    console.warn("Freight Market unavailable:", error);
    dataError(target, "Freight market data is temporarily unavailable. Please retry later.");
  }
}

function splitNewsTitle(title) {
  const clean = String(title || "").trim();
  const separator = clean.lastIndexOf(" - ");
  if (separator <= 0) return { headline: clean, source: "" };
  return {
    headline: clean.slice(0, separator),
    source: clean.slice(separator + 3)
  };
}

function formatNewsTime(pubDate, lang) {
  if (!pubDate) return "";
  const date = new Date(pubDate);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(lang === "ko" ? "ko-KR" : "en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Seoul"
  }).format(date);
}

function plainText(value, fallback = "") {
  const div = document.createElement("div");
  div.innerHTML = String(value || "");
  return (div.textContent || div.innerText || fallback).replace(/\s+/g, " ").trim();
}

function escapeAttribute(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function firstImageUrlFromHtml(value) {
  if (!value || !/<img/i.test(String(value))) return "";
  const div = document.createElement("div");
  div.innerHTML = String(value);
  const img = div.querySelector("img[src], img[data-src], img[data-original]");
  return img?.getAttribute("src") || img?.getAttribute("data-src") || img?.getAttribute("data-original") || "";
}

function newsImageCandidate(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    for (const entry of value) {
      const candidate = newsImageCandidate(entry);
      if (candidate) return candidate;
    }
    return "";
  }
  if (typeof value === "object") {
    return value.url || value.link || value.href || value.thumbnail || value["@url"] || "";
  }
  return "";
}

function validNewsImageUrl(value) {
  const src = String(value || "").trim();
  if (!/^https?:\/\//i.test(src)) return "";
  if (/news\.google\.com\/rss|\/articles\//i.test(src)) return "";
  return src;
}

function resolveNewsImage(item) {
  const candidates = [
    item.thumbnail,
    item["media:content"],
    item["media:thumbnail"],
    item.enclosure,
    firstImageUrlFromHtml(item.content),
    firstImageUrlFromHtml(item.description)
  ];
  for (const value of candidates) {
    const src = validNewsImageUrl(newsImageCandidate(value));
    if (src) return src;
  }
  return "";
}

function newsCategory(item, parsed, lang) {
  const text = [
    item.title,
    parsed?.headline,
    parsed?.source,
    Array.isArray(item.categories) ? item.categories.join(" ") : ""
  ].join(" ").toLowerCase();
  const labels = {
    trade: lang === "ko" ? "무역" : "Trade",
    shipping: lang === "ko" ? "해운" : "Shipping",
    supply: lang === "ko" ? "공급망" : "Supply Chain",
    regulation: lang === "ko" ? "규제" : "Regulation",
    market: lang === "ko" ? "시장" : "Market",
    air: lang === "ko" ? "항공화물" : "Air Cargo"
  };
  if (/air|aviation|cargo|항공|항공화물/.test(text)) return { key: "air", label: labels.air };
  if (/ship|shipping|ocean|vessel|port|container|해운|선박|항만|컨테이너|물류 관문/.test(text)) return { key: "shipping", label: labels.shipping };
  if (/customs|compliance|regulation|policy|tariff|duty|통관|관세|규제|정책/.test(text)) return { key: "regulation", label: labels.regulation };
  if (/market|price|freight|rate|commodity|index|시장|운임|가격|원자재/.test(text)) return { key: "market", label: labels.market };
  if (/supply chain|logistics|warehouse|route|공급망|물류/.test(text)) return { key: "supply", label: labels.supply };
  return { key: "trade", label: labels.trade };
}

function newsVisualIcon(category) {
  const icons = {
    shipping: '<path d="M6 14h12l-2 4H8l-2-4Z"/><path d="M8 14V8h7v6"/><path d="M10 8V5h3v3"/><path d="M5 19c1.2 0 1.2-.7 2.4-.7s1.2.7 2.4.7 1.2-.7 2.4-.7 1.2.7 2.4.7 1.2-.7 2.4-.7 1.2.7 2.4.7"/>',
    supply: '<path d="M7 7h4v4H7z"/><path d="M13 13h4v4h-4z"/><path d="M15 7h2v2"/><path d="M17 7l-4 4"/><path d="M9 13v4h2"/>',
    regulation: '<path d="M8 5h6l3 3v11H8z"/><path d="M14 5v4h4"/><path d="M10 13h6"/><path d="M10 16h4"/>',
    market: '<path d="M6 18V9"/><path d="M11 18V6"/><path d="M16 18v-5"/><path d="M5 19h14"/><path d="M7 9l4-3 5 7"/>',
    air: '<path d="M5 13l14-7-4 14-3-6-7-1Z"/><path d="M12 14l-3 4"/>',
    trade: '<circle cx="12" cy="12" r="7"/><path d="M5 12h14"/><path d="M12 5c2 2 3 4.3 3 7s-1 5-3 7"/><path d="M12 5c-2 2-3 4.3-3 7s1 5 3 7"/>'
  };
  return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icons[category.key] || icons.trade}</svg>`;
}

function wireNewsImageFallbacks(root = document) {
  root.querySelectorAll("img[data-news-image]").forEach((img) => {
    if (img.dataset.fallbackWired === "true") return;
    img.dataset.fallbackWired = "true";
    img.addEventListener("error", () => {
      const media = img.closest(".news-media");
      if (media) media.classList.add("is-fallback");
      img.removeAttribute("src");
      img.hidden = true;
    }, { once: true });
  });
}

function renderHomeCarousel(target, items, renderItem, options = {}) {
  if (!target || !items.length) return;
  let index = 0;
  const dotCount = Math.min(items.length, 5);
  const slideIndexForDot = (dotIndex) => {
    if (dotCount < 2 || items.length < 2) return 0;
    return Math.round((dotIndex * (items.length - 1)) / (dotCount - 1));
  };
  const activeDotIndex = () => {
    if (dotCount < 2 || items.length < 2) return 0;
    return Math.round((index * (dotCount - 1)) / (items.length - 1));
  };
  const labels = {
    previous: options.previous || "Previous",
    next: options.next || "Next"
  };
  target.classList.add("home-card-carousel", "carousel-panel");

  const render = () => {
    target.innerHTML = `
      <div class="home-carousel-viewport carousel-viewport">
        <button class="home-carousel-btn home-carousel-btn--prev carousel-prev" type="button" aria-label="${labels.previous}" ${items.length < 2 ? "disabled" : ""}>←</button>
        <div class="home-carousel-stage">
          ${renderItem(items[index], index)}
        </div>
        <button class="home-carousel-btn home-carousel-btn--next carousel-next" type="button" aria-label="${labels.next}" ${items.length < 2 ? "disabled" : ""}>→</button>
      </div>
      <div class="home-carousel-dots carousel-pagination" role="tablist" aria-label="${options.dotsLabel || "Slides"}">
        ${Array.from({ length: 5 }, (_, dotIndex) => {
          if (dotIndex >= dotCount) {
            return `<span class="home-carousel-dot-placeholder" aria-hidden="true"></span>`;
          }
          const slideIndex = slideIndexForDot(dotIndex);
          return `<button type="button" aria-label="${dotIndex + 1}" aria-selected="${String(dotIndex === activeDotIndex())}" data-slide-index="${slideIndex}"></button>`;
        }).join("")}
      </div>
    `;
    wireNewsImageFallbacks(target);
  };

  target.addEventListener("click", (event) => {
    const previous = event.target.closest(".home-carousel-btn--prev");
    const next = event.target.closest(".home-carousel-btn--next");
    const dot = event.target.closest("[data-slide-index]");
    if (previous && items.length > 1) {
      index = (index - 1 + items.length) % items.length;
      render();
    } else if (next && items.length > 1) {
      index = (index + 1) % items.length;
      render();
    } else if (dot) {
      index = Number(dot.dataset.slideIndex);
      render();
    }
  });

  render();
}

function newsThumb(item, parsed, options = {}) {
  const lang = options.lang || currentLang();
  const category = options.category || newsCategory(item, parsed, lang);
  const src = resolveNewsImage(item);
  const source = escapeHtml(parsed.source || "News");
  const label = options.fallbackLabel || "LOGILEE";
  if (src) {
    return `
      <div class="posting-thumb posting-thumb--compact news-media news-media--${category.key}">
        <img src="${escapeAttribute(src)}" alt="${escapeAttribute(parsed.headline)}" loading="lazy" decoding="async" width="640" height="360" data-news-image>
        <span>${source}</span>
        <strong class="news-fallback-mark">${label}</strong>
        <em class="news-fallback-category">${escapeHtml(category.label)}</em>
        <i class="news-fallback-icon">${newsVisualIcon(category)}</i>
      </div>
    `;
  }
  return `
    <div class="posting-thumb posting-thumb--fallback posting-thumb--compact news-media news-media--${category.key} is-fallback" role="img" aria-label="${escapeAttribute(parsed.headline)}">
      <span>${source}</span>
      <strong class="news-fallback-mark">${label}</strong>
      <em class="news-fallback-category">${escapeHtml(category.label)}</em>
      <i class="news-fallback-icon">${newsVisualIcon(category)}</i>
    </div>
  `;
}

async function loadHomeNews() {
  const targets = document.querySelectorAll("[data-home-news]");
  if (!targets.length) return;
  const lang = currentLang();
  const labels = {
    loadingFailed: "News source unavailable.",
    noItems: "No news items available."
  };

  for (const target of targets) {
    const query = target.dataset.newsQuery || (lang === "ko" ? "무역 물류" : "global trade logistics");
    const queries = [query, lang === "ko" ? "국제 무역 물류" : "international trade logistics"];
    try {
      let data = null;
      let usedQuery = "";
      for (const candidate of queries) {
        try {
          const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(candidate)}&hl=${lang === "ko" ? "ko" : "en"}&gl=${lang === "ko" ? "KR" : "US"}&ceid=${lang === "ko" ? "KR:ko" : "US:en"}`;
          const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
          data = await fetchJson(apiUrl, { cacheKey: `logilee:news:${lang}:${candidate}`, ttl: 20 * 60 * 1000 });
          usedQuery = candidate;
          break;
        } catch (error) {
          console.warn("Homepage news query unavailable:", candidate, error);
        }
      }
      if (!data) throw new Error("All homepage news queries failed");
      const items = Array.isArray(data.items) ? data.items.slice(0, 6) : [];
      if (!items.length) {
        target.innerHTML = `<div class="data-empty">${labels.noItems}</div>`;
        continue;
      }
      renderHomeCarousel(target, items, (item) => {
        const parsed = splitNewsTitle(item.title);
        const time = formatNewsTime(item.pubDate, lang);
        const summary = plainText(item.description).replace(parsed.headline, "").slice(0, 130);
        const category = newsCategory(item, parsed, lang);
        return `
          <a class="home-slider-card" href="${item.link}" target="_blank" rel="noopener">
            ${newsThumb(item, parsed, { lang, category, fallbackLabel: "LOGILEE NEWS" })}
            <div class="home-slider-copy">
              <span class="kicker">${escapeHtml(parsed.source || "News")}</span>
              <h3>${escapeHtml(parsed.headline)}</h3>
              ${summary ? `<p>${escapeHtml(summary)}</p>` : ""}
              <small>${escapeHtml([time, parsed.source].filter(Boolean).join(" · "))}</small>
            </div>
          </a>
        `;
      }, {
        previous: lang === "ko" ? "이전 뉴스" : "Previous news",
        next: lang === "ko" ? "다음 뉴스" : "Next news",
        dotsLabel: lang === "ko" ? "뉴스 슬라이드" : "News slides",
        sourceQuery: usedQuery
      });
    } catch (error) {
      console.warn("Homepage news unavailable:", error);
      target.innerHTML = `<div class="data-empty">${labels.loadingFailed}</div>`;
    }
  }
}

function getPostsForCurrentLang() {
  const posts = Array.isArray(window.LOGILEE_POSTS) ? window.LOGILEE_POSTS : [];
  const lang = currentLang();
  const isPublished = (post) => String(post.status || "published").toLowerCase() === "published";
  const postTime = (post) => {
    const value = new Date(post.publishedAt || post.date || 0).getTime();
    return Number.isFinite(value) ? value : 0;
  };
  return posts
    .filter((post) => post.language === lang && isPublished(post) && post.path && post.title)
    .sort((a, b) => postTime(b) - postTime(a) || String(a.title).localeCompare(String(b.title)));
}

function postUrl(post) {
  const encodedPath = encodeURI(post.path || "");
  const inArchive = /\/posts\/?$/i.test(location.pathname) || /\/posts\/index\.html$/i.test(location.pathname);
  return `${inArchive ? "../../" : "../"}${encodedPath}`;
}

function postAssetUrl(assetPath) {
  if (!assetPath) return "";
  if (/^(?:https?:)?\/\//i.test(assetPath) || assetPath.startsWith("/")) return assetPath;
  const encodedPath = encodeURI(assetPath);
  const inArchive = /\/posts\/?$/i.test(location.pathname) || /\/posts\/index\.html$/i.test(location.pathname);
  return `${inArchive ? "../../" : "../"}${encodedPath}`;
}

function formatPostDate(date, lang) {
  const value = new Date(date);
  if (Number.isNaN(value.getTime())) return date || "";
  return new Intl.DateTimeFormat(lang === "ko" ? "ko-KR" : "en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(value);
}

function postThumb(post, compact = false) {
  const label = post.category || "LOGILEE";
  if (post.image) {
    return `
      <div class="posting-thumb${compact ? " posting-thumb--compact" : ""}">
        <img src="${postAssetUrl(post.image)}" alt="${post.imageAlt || post.title}" loading="lazy" width="640" height="360">
        <span>${label}</span>
      </div>
    `;
  }
  return `
    <div class="posting-thumb posting-thumb--fallback${compact ? " posting-thumb--compact" : ""}" role="img" aria-label="${post.imageAlt || post.title}">
      <span>${label}</span>
      <strong>LOGILEE</strong>
    </div>
  `;
}

function renderPostCard(post, lang) {
  return `
    <article class="posting-card" data-category="${post.category}">
      <a href="${postUrl(post)}">
        ${postThumb(post)}
        <div class="posting-card-body">
          <span class="kicker">${post.category}</span>
          <h3>${post.title}</h3>
          <p>${post.description}</p>
          <small>${formatPostDate(post.date, lang)}${post.readingTime ? ` · ${post.readingTime}` : ""}</small>
        </div>
      </a>
    </article>
  `;
}

function setupLatestPosting() {
  const slider = document.querySelector("[data-posting-slider]");
  if (!slider) return;
  const lang = currentLang();
  const MAX_HOME_POSTS = 5;
  const posts = getPostsForCurrentLang().slice(0, MAX_HOME_POSTS);
  const labels = lang === "ko"
    ? { empty: "표시할 실제 포스팅이 아직 없습니다." }
    : { empty: "No existing posts are available yet." };
  if (!posts.length) {
    slider.innerHTML = `<div class="data-empty">${labels.empty}</div>`;
    return;
  }

  renderHomeCarousel(slider, posts, (post) => `
    <a class="home-slider-card" href="${postUrl(post)}">
      ${postThumb(post, true)}
      <div class="home-slider-copy">
        <span class="kicker">${post.category}</span>
        <h3>${post.title}</h3>
        <p>${post.description}</p>
        <small>${formatPostDate(post.date, lang)}${post.readingTime ? ` · ${post.readingTime}` : ""}</small>
      </div>
    </a>
  `, {
    previous: lang === "ko" ? "이전 포스트" : "Previous post",
    next: lang === "ko" ? "다음 포스트" : "Next post",
    dotsLabel: lang === "ko" ? "포스트 슬라이드" : "Post slides"
  });
}

function setupPostsArchive() {
  const archive = document.querySelector("[data-posts-archive]");
  if (!archive) return;
  const lang = currentLang();
  const posts = getPostsForCurrentLang();
  const filter = archive.querySelector("[data-post-filter]");
  const grid = archive.querySelector("[data-posts-grid]");
  const allLabel = lang === "ko" ? "전체" : "All";
  const empty = lang === "ko" ? "표시할 실제 포스팅이 아직 없습니다." : "No existing posts are available yet.";
  const categories = [...new Set(posts.map((post) => post.category).filter(Boolean))];
  let active = "all";

  const render = () => {
    const visible = active === "all" ? posts : posts.filter((post) => post.category === active);
    if (filter) {
      filter.innerHTML = [`<button type="button" class="tab${active === "all" ? " is-active" : ""}" data-category-filter="all">${allLabel}</button>`]
        .concat(categories.map((category) => `<button type="button" class="tab${active === category ? " is-active" : ""}" data-category-filter="${category}">${category}</button>`))
        .join("");
    }
    if (grid) {
      grid.innerHTML = visible.length
        ? visible.map((post) => renderPostCard(post, lang)).join("")
        : `<div class="data-empty">${empty}</div>`;
    }
  };

  filter?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category-filter]");
    if (!button) return;
    active = button.dataset.categoryFilter;
    render();
  });

  render();
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
  const termCount = document.querySelector("[data-term-count]");
  if (termCount) termCount.textContent = `${terms[lang].length} ${lang === "ko" ? "terms" : "terms"}`;
  const normalizeTerm = (value) => (value || "").toLowerCase().replace(/[^a-z0-9가-힣]/g, "");
  const findTerm = (value) => {
    const normalized = normalizeTerm(value);
    return terms[lang].find((term) => {
      const candidates = [term.id, term.term, term.name, term.korean, ...(term.aliases || [])];
      return candidates.some((candidate) => normalizeTerm(candidate) === normalized);
    });
  };
  const render = (term, updateUrl = false) => {
    detail.innerHTML = `
      <span class="kicker">${term.category}</span>
      <h2 id="${term.id}">${term.term}</h2>
      <p class="lead">${term.name}</p>
      ${term.korean ? `<p class="muted"><strong>${lang === "ko" ? "한국어" : "Korean"}:</strong> ${term.korean}</p>` : ""}
      <p>${term.definition}</p>
      <div class="notice"><strong>${lang === "ko" ? "실무 참고" : "Practical note"}</strong><br>${term.example}</div>
      <h3>${lang === "ko" ? "관련 용어" : "Related terms"}</h3>
      <div class="chip-row">${term.related.map((item) => `<span class="chip">${item}</span>`).join("")}</div>
      ${term.relatedResource ? `<p class="dictionary-resource-link"><strong>${lang === "ko" ? "관련 자료" : "Related resource"}:</strong> <a href="${term.relatedResource.url}">${term.relatedResource.label} →</a></p>` : ""}
      <p class="muted">${lang === "ko" ? "Updated" : "Updated"}: 2026-07-26 · ${lang === "ko" ? "참고 정보입니다. 계약 확정 전 공식 기준을 확인하세요." : "For reference only. Confirm official standards before finalizing contracts."}</p>
    `;
    list.querySelectorAll("button").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.term === term.id)));
    if (updateUrl) {
      const url = new URL(location.href);
      url.searchParams.set("term", term.id);
      history.replaceState(null, "", `${url.pathname}?${url.searchParams.toString()}`);
    }
  };
  list.innerHTML = terms[lang].map((term) => `<button class="term-button" data-term="${term.id}" aria-pressed="false">${term.term} <span class="muted">${term.name}</span></button>`).join("");
  document.querySelector("[data-dictionary-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = event.currentTarget.querySelector("input")?.value || "";
    const normalized = query.toLowerCase().trim();
    const match = findTerm(query) || terms[lang].find((term) => {
      return [term.term, term.name, term.korean, term.definition, term.category, ...(term.aliases || [])]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(normalized));
    });
    if (match) {
      render(match, true);
      return;
    }
    detail.innerHTML = `<h2>${lang === "ko" ? "검색 결과가 없습니다" : "No matching term"}</h2><p class="muted">${lang === "ko" ? "다른 무역·물류 용어로 다시 검색해 보세요." : "Try another trade or logistics term."}</p>`;
  });
  list.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    render(terms[lang].find((term) => term.id === button.dataset.term), true);
  });
  const params = new URLSearchParams(location.search);
  const hash = location.hash.replace("#", "");
  render(findTerm(params.get("term")) || findTerm(hash) || terms[lang][0]);
}

function populateCurrencyOptions() {
  document.querySelectorAll("[data-currency-select]").forEach((select) => {
    if (select.options.length) return;
    select.innerHTML = TRADE_CURRENCIES.map((code) => `<option value="${code}">${code}</option>`).join("");
  });
  const from = document.querySelector("[data-fx-from]");
  const to = document.querySelector("[data-fx-to]");
  const params = new URLSearchParams(location.search);
  const fromParam = params.get("from");
  const toParam = params.get("to");
  if (from) from.value = TRADE_CURRENCIES.includes(fromParam) ? fromParam : "USD";
  if (to) to.value = TRADE_CURRENCIES.includes(toParam) ? toParam : (currentLang() === "ko" ? "KRW" : "EUR");
}

const BTS_FREIGHT_SOURCE = "https://data.bts.gov/resource/bw6n-ddqk.json";
const FREIGHT_SERIES = [
  ["Freight Transportation Index", "tsi_freight", "Index 2000=100"],
  ["Truck Freight", "truck_d11", "Truck Tonnage Index"],
  ["Rail Freight Carloads", "rail_frt_carloads", "Carloads"],
  ["Rail Intermodal", "rail_frt_intermodal", "Intermodal units"],
  ["Air Freight", "air_rtmfm_d11", "Revenue ton-miles"],
  ["Waterborne Freight", "waterborne_d11", "Million short tons"]
];

function formatPeriod(dateValue) {
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return "N/A";
  return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric", timeZone: "UTC" }).format(date);
}

async function getFreightData() {
  const params = new URLSearchParams({
    "$select": "obs_date,tsi_freight,truck_d11,rail_frt_carloads,rail_frt_intermodal,air_rtmfm_d11,waterborne_d11",
    "$order": "obs_date DESC",
    "$limit": "6"
  });
  const rows = await fetchJson(`${BTS_FREIGHT_SOURCE}?${params.toString()}`, {
    cacheKey: "logilee:bts:freight",
    ttl: 6 * 60 * 60 * 1000
  });
  if (!Array.isArray(rows) || rows.length < 2) throw new Error("Invalid BTS freight response");
  return FREIGHT_SERIES.map(([label, key, unit]) => {
    const latest = rows.find((row) => Number.isFinite(Number(row[key])));
    const previous = rows.find((row) => row !== latest && Number.isFinite(Number(row[key])));
    const latestValue = Number(latest?.[key]);
    const previousValue = Number(previous?.[key]);
    const change = Number.isFinite(latestValue) && Number.isFinite(previousValue) && previousValue !== 0
      ? (latestValue - previousValue) / previousValue * 100
      : null;
    return {
      label,
      key,
      unit,
      latest: latestValue,
      previous: previousValue,
      change,
      period: latest?.obs_date,
      previousPeriod: previous?.obs_date,
      source: "U.S. Bureau of Transportation Statistics"
    };
  });
}

function freightRowMarkup(item, compact = false) {
  const digits = item.latest > 1000 ? 0 : 1;
  const hasChange = Number.isFinite(item.change);
  const changeText = hasChange ? `${item.change >= 0 ? "↑ +" : "↓ "}${formatRate(item.change, 1)}%` : "";
  const changeClass = hasChange ? ` trend-${item.change >= 0 ? "up" : "down"}` : "";
  return compact ? `
    <div class="market-data-row market-data-row--freight">
      <strong>${item.label}</strong>
      <span>${Number.isFinite(item.latest) ? formatRate(item.latest, digits) : "N/A"}${changeText ? ` · <em class="${changeClass.trim()}">${changeText}</em>` : ""}</span>
    </div>
  ` : `
    <tr>
      <td>${item.label}</td>
      <td>${Number.isFinite(item.latest) ? formatRate(item.latest, digits) : "N/A"}</td>
      <td>${Number.isFinite(item.previous) ? formatRate(item.previous, digits) : "N/A"}</td>
      <td>${changeText ? `<span class="${changeClass.trim()}">${changeText}</span>` : ""}</td>
      <td>${item.unit}</td>
      <td>${formatPeriod(item.period)}</td>
      <td>${item.source}</td>
    </tr>
  `;
}

async function loadExchangePage() {
  const table = document.querySelector("[data-exchange-table]");
  if (!table) return;
  const lang = currentLang();
  try {
    const data = await getUsdRates();
    const rows = [
      ["USD/KRW", "USD", data.rates.KRW, 2],
      ["USD/EUR", "USD", data.rates.EUR, 4],
      ["USD/CNY", "USD", data.rates.CNY, 4],
      ["USD/JPY", "USD", data.rates.JPY, 2]
    ];
    table.innerHTML = rows.map(([pair, base, value, digits]) => `
      <tr><td>${pair}</td><td>${base}</td><td>${Number.isFinite(value) ? formatRate(value, digits) : "N/A"}</td><td>${data.date || "N/A"}</td></tr>
    `).join("");
    const note = document.querySelector("[data-exchange-note]");
    if (note) note.textContent = `${lang === "ko" ? "환율 데이터" : "Exchange rate data"}: Frankfurter`;
  } catch (error) {
    console.warn("Exchange page unavailable:", error);
    dataError(table.closest("[data-exchange-shell]") || table, "Exchange rate data is temporarily unavailable.");
  }
}

function renderFxResult(data) {
  const lang = currentLang();
  const amount = Number(document.querySelector("[data-fx-amount]")?.value);
  const from = document.querySelector("[data-fx-from]")?.value;
  const to = document.querySelector("[data-fx-to]")?.value;
  const result = document.querySelector("[data-fx-result]");
  if (!result || !Number.isFinite(amount) || amount < 0 || !from || !to) return;
  const rate = data.rates[to] / data.rates[from];
  const inverse = data.rates[from] / data.rates[to];
  if (!Number.isFinite(rate)) {
    dataError(result, "Exchange rate data is temporarily unavailable.");
    return;
  }
  const resultDigits = to === "KRW" || to === "JPY" || to === "VND" || to === "IDR" ? 0 : 2;
  result.innerHTML = `
    <span class="kicker">${lang === "ko" ? "환산 결과" : "Converted Amount"}</span>
    <span class="summary-number">${formatRate(amount * rate, resultDigits)}</span>
    <strong>${to}</strong>
    <div class="data-status-list compact-fx-meta">
      <div><strong>${lang === "ko" ? "기준 환율" : "Exchange Rate"}</strong><span>1 ${from} = ${formatRate(rate, 6)} ${to}</span></div>
      <div><strong>${lang === "ko" ? "반대 환율" : "Inverse Rate"}</strong><span>1 ${to} = ${formatRate(inverse, 6)} ${from}</span></div>
      <div><strong>${lang === "ko" ? "데이터 날짜" : "Data Date"}</strong><span>${data.date || "N/A"}</span></div>
      <div><strong>Source</strong><span>Frankfurter</span></div>
    </div>
    <p class="muted">${lang === "ko" ? "공개 기준 환율이며 은행, 카드, 송금, 정산 환율과 다를 수 있습니다." : "Public reference rates can differ from bank, card, remittance, and settlement rates."}</p>
  `;
}

async function wireCurrencyConverter() {
  const form = document.querySelector("[data-currency-converter]");
  if (!form) return;
  populateCurrencyOptions();
  try {
    const data = await getUsdRates();
    renderFxResult(data);
    document.querySelector("[data-fx-swap]")?.addEventListener("click", () => {
      const from = document.querySelector("[data-fx-from]");
      const to = document.querySelector("[data-fx-to]");
      if (!from || !to) return;
      const previous = from.value;
      from.value = to.value;
      to.value = previous;
      renderFxResult(data);
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      renderFxResult(data);
    });
    form.addEventListener("input", () => renderFxResult(data));
  } catch (error) {
    console.warn("Currency converter unavailable:", error);
    dataError(document.querySelector("[data-fx-result]"), "Exchange rate data is temporarily unavailable.");
  }
}

const ISO_COUNTRY_CODES = [
  "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ",
  "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS",
  "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN",
  "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE",
  "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF",
  "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM",
  "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM",
  "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC",
  "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK",
  "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA",
  "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG",
  "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW",
  "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS",
  "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO",
  "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI",
  "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"
];

const PRIORITY_COUNTRY_CODES = [
  "KR", "CN", "US", "JP", "DE", "VN", "IN", "MX", "SG", "GB", "NL", "AE", "HK", "TH", "MY", "LK",
  "BE", "TW", "FR", "ES", "IT", "GR", "RO", "PL", "CA", "BR", "AR", "PE", "CO", "PA", "ZA", "MA",
  "EG", "KE", "TZ", "NG", "GH", "SA", "OM", "QA", "PK", "BD", "ID", "PH", "ET", "CG", "CD"
];

const COUNTRY_NAME_OVERRIDES = {
  KR: { en: "South Korea", ko: "대한민국" }, CN: { en: "China", ko: "중국" }, US: { en: "United States", ko: "미국" }, JP: { en: "Japan", ko: "일본" }, DE: { en: "Germany", ko: "독일" }, VN: { en: "Vietnam", ko: "베트남" }, IN: { en: "India", ko: "인도" }, MX: { en: "Mexico", ko: "멕시코" }, SG: { en: "Singapore", ko: "싱가포르" }, GB: { en: "United Kingdom", ko: "영국" }, NL: { en: "Netherlands", ko: "네덜란드" }, AE: { en: "United Arab Emirates", ko: "아랍에미리트" }, HK: { en: "Hong Kong", ko: "홍콩" }, TH: { en: "Thailand", ko: "태국" }, MY: { en: "Malaysia", ko: "말레이시아" }, LK: { en: "Sri Lanka", ko: "스리랑카" }, BE: { en: "Belgium", ko: "벨기에" }, TW: { en: "Taiwan", ko: "대만" }, FR: { en: "France", ko: "프랑스" }, ES: { en: "Spain", ko: "스페인" }, IT: { en: "Italy", ko: "이탈리아" }, GR: { en: "Greece", ko: "그리스" }, RO: { en: "Romania", ko: "루마니아" }, PL: { en: "Poland", ko: "폴란드" }, CA: { en: "Canada", ko: "캐나다" }, BR: { en: "Brazil", ko: "브라질" }, AR: { en: "Argentina", ko: "아르헨티나" }, PE: { en: "Peru", ko: "페루" }, CO: { en: "Colombia", ko: "콜롬비아" }, PA: { en: "Panama", ko: "파나마" }, ZA: { en: "South Africa", ko: "남아프리카공화국" }, MA: { en: "Morocco", ko: "모로코" }, EG: { en: "Egypt", ko: "이집트" }, KE: { en: "Kenya", ko: "케냐" }, TZ: { en: "Tanzania", ko: "탄자니아" }, NG: { en: "Nigeria", ko: "나이지리아" }, GH: { en: "Ghana", ko: "가나" }, SA: { en: "Saudi Arabia", ko: "사우디아라비아" }, OM: { en: "Oman", ko: "오만" }, QA: { en: "Qatar", ko: "카타르" }, PK: { en: "Pakistan", ko: "파키스탄" }, BD: { en: "Bangladesh", ko: "방글라데시" }, ID: { en: "Indonesia", ko: "인도네시아" }, PH: { en: "Philippines", ko: "필리핀" }, ET: { en: "Ethiopia", ko: "에티오피아" }, CG: { en: "Republic of the Congo", ko: "콩고공화국" }, CD: { en: "Democratic Republic of the Congo", ko: "콩고민주공화국" }, RU: { en: "Russia", ko: "러시아" }
};

const COUNTRY_SEARCH_ALIASES = {
  KR: ["한국", "대한민국", "남한", "South Korea", "Korea", "Republic of Korea"],
  US: ["미국", "미합중국", "USA", "US", "United States"],
  GB: ["영국", "UK", "Britain", "Great Britain", "United Kingdom"],
  ZA: ["남아공", "남아프리카", "남아프리카공화국", "South Africa"],
  AE: ["UAE", "아랍에미리트", "아랍에미리트연합", "United Arab Emirates"],
  VN: ["베트남", "Vietnam"], DE: ["독일", "Germany"], CN: ["중국", "China"], JP: ["일본", "Japan"],
  RU: ["러시아", "Russia", "Russian Federation"], ET: ["에티오피아", "Ethiopia"],
  CG: ["콩고", "콩고공화국", "Congo", "Republic of Congo", "Republic of the Congo", "Congo Rep", "Congo, Rep."],
  CD: ["콩고", "콩고 민주 공화국", "콩고민주공화국", "민주콩고", "DR콩고", "DRC", "Congo", "DR Congo", "Democratic Republic of Congo", "Democratic Republic of the Congo", "Congo Dem Rep", "Congo, Dem. Rep."]
};

function displayCountryName(code, lang = "en") {
  const override = COUNTRY_NAME_OVERRIDES[code]?.[lang];
  if (override) return override;
  try {
    return new Intl.DisplayNames([lang === "ko" ? "ko-KR" : "en-US"], { type: "region" }).of(code) || code;
  } catch {
    return code;
  }
}

const TRADE_COUNTRIES = ISO_COUNTRY_CODES
  .map((code) => [code, displayCountryName(code, "en"), displayCountryName(code, "ko")])
  .sort((a, b) => {
    const priorityA = PRIORITY_COUNTRY_CODES.indexOf(a[0]);
    const priorityB = PRIORITY_COUNTRY_CODES.indexOf(b[0]);
    if (priorityA >= 0 || priorityB >= 0) return (priorityA >= 0 ? priorityA : 999) - (priorityB >= 0 ? priorityB : 999);
    return a[1].localeCompare(b[1], "en");
  });

const COUNTRY_CURRENCY = { KR: "KRW", CN: "CNY", US: "USD", JP: "JPY", DE: "EUR", VN: "VND", IN: "INR", MX: "MXN", SG: "SGD", GB: "GBP", NL: "EUR", AE: "AED", HK: "HKD", TH: "THB", MY: "MYR", LK: "LKR", BE: "EUR", TW: "TWD", FR: "EUR", ES: "EUR", IT: "EUR", GR: "EUR", RO: "RON", PL: "PLN", CA: "CAD", BR: "BRL", AR: "ARS", PE: "PEN", CO: "COP", PA: "PAB", ZA: "ZAR", MA: "MAD", EG: "EGP", KE: "KES", TZ: "TZS", NG: "NGN", GH: "GHS", SA: "SAR", OM: "OMR", QA: "QAR", PK: "PKR", BD: "BDT", ID: "IDR", PH: "PHP", ET: "ETB", CG: "XAF", CD: "CDF" };
const PORTS = [
  { slug: "busan", name: "Port of Busan", country: "South Korea", iso: "KR", locode: "KRPUS", lat: 35.10, lon: 129.04, timezone: "Asia/Seoul", region: "Northeast Asia", type: "Seaport" },
  { slug: "shanghai", name: "Port of Shanghai", country: "China", iso: "CN", locode: "CNSHA", lat: 31.23, lon: 121.50, timezone: "Asia/Shanghai", region: "East Asia", type: "Seaport" },
  { slug: "ningbo-zhoushan", name: "Ningbo-Zhoushan Port", aliases: ["Ningbo", "Zhoushan"], country: "China", iso: "CN", locode: "CNNGB", lat: 29.87, lon: 121.55, timezone: "Asia/Shanghai", region: "East Asia", type: "Seaport" },
  { slug: "singapore", name: "Port of Singapore", country: "Singapore", iso: "SG", locode: "SGSIN", lat: 1.26, lon: 103.82, timezone: "Asia/Singapore", region: "Southeast Asia", type: "Seaport" },
  { slug: "rotterdam", name: "Port of Rotterdam", country: "Netherlands", iso: "NL", locode: "NLRTM", lat: 51.95, lon: 4.14, timezone: "Europe/Amsterdam", region: "Europe", type: "Seaport" },
  { slug: "hamburg", name: "Port of Hamburg", country: "Germany", iso: "DE", locode: "DEHAM", lat: 53.54, lon: 9.99, timezone: "Europe/Berlin", region: "Europe", type: "Seaport" },
  { slug: "los-angeles", name: "Port of Los Angeles", country: "United States", iso: "US", locode: "USLAX", lat: 33.74, lon: -118.27, timezone: "America/Los_Angeles", region: "North America", type: "Seaport" },
  { slug: "long-beach", name: "Port of Long Beach", country: "United States", iso: "US", locode: "USLGB", lat: 33.75, lon: -118.22, timezone: "America/Los_Angeles", region: "North America", type: "Seaport" },
  { slug: "new-york-new-jersey", name: "Port of New York and New Jersey", aliases: ["New York", "New Jersey"], country: "United States", iso: "US", locode: "USNYC", lat: 40.68, lon: -74.04, timezone: "America/New_York", region: "North America", type: "Seaport" },
  { slug: "jebel-ali", name: "Jebel Ali Port", country: "United Arab Emirates", iso: "AE", locode: "AEJEA", lat: 25.01, lon: 55.06, timezone: "Asia/Dubai", region: "Middle East", type: "Seaport" },
  { slug: "hong-kong", name: "Port of Hong Kong", country: "Hong Kong", iso: "HK", locode: "HKHKG", lat: 22.30, lon: 114.17, timezone: "Asia/Hong_Kong", region: "East Asia", type: "Seaport" },
  { slug: "qingdao", name: "Port of Qingdao", country: "China", iso: "CN", locode: "CNQDG", lat: 36.07, lon: 120.38, timezone: "Asia/Shanghai", region: "East Asia", type: "Seaport" },
  { slug: "tianjin", name: "Port of Tianjin", country: "China", iso: "CN", locode: "CNTSN", lat: 39.00, lon: 117.72, timezone: "Asia/Shanghai", region: "East Asia", type: "Seaport" },
  { slug: "guangzhou", name: "Port of Guangzhou", country: "China", iso: "CN", locode: "CNCAN", lat: 23.11, lon: 113.26, timezone: "Asia/Shanghai", region: "South China", type: "Seaport" },
  { slug: "shenzhen", name: "Port of Shenzhen", country: "China", iso: "CN", locode: "CNSZX", lat: 22.54, lon: 114.05, timezone: "Asia/Shanghai", region: "South China", type: "Seaport" },
  { slug: "tokyo", name: "Port of Tokyo", country: "Japan", iso: "JP", locode: "JPTYO", lat: 35.62, lon: 139.78, timezone: "Asia/Tokyo", region: "Northeast Asia", type: "Seaport" },
  { slug: "yokohama", name: "Port of Yokohama", country: "Japan", iso: "JP", locode: "JPYOK", lat: 35.45, lon: 139.64, timezone: "Asia/Tokyo", region: "Northeast Asia", type: "Seaport" },
  { slug: "kaohsiung", name: "Port of Kaohsiung", country: "Taiwan", iso: "TW", locode: "TWKHH", lat: 22.61, lon: 120.27, timezone: "Asia/Taipei", region: "East Asia", type: "Seaport" },
  { slug: "cat-lai", name: "Ho Chi Minh City / Cat Lai", aliases: ["Ho Chi Minh City", "Cat Lai", "Saigon"], country: "Vietnam", iso: "VN", locode: "VNSGN", lat: 10.76, lon: 106.78, timezone: "Asia/Ho_Chi_Minh", region: "Southeast Asia", type: "Container terminal" },
  { slug: "hai-phong", name: "Hai Phong Port", country: "Vietnam", iso: "VN", locode: "VNHPH", lat: 20.86, lon: 106.68, timezone: "Asia/Ho_Chi_Minh", region: "Southeast Asia", type: "Seaport" },
  { slug: "laem-chabang", name: "Laem Chabang Port", country: "Thailand", iso: "TH", locode: "THLCH", lat: 13.08, lon: 100.89, timezone: "Asia/Bangkok", region: "Southeast Asia", type: "Seaport" },
  { slug: "port-klang", name: "Port Klang", country: "Malaysia", iso: "MY", locode: "MYPKG", lat: 3.00, lon: 101.40, timezone: "Asia/Kuala_Lumpur", region: "Southeast Asia", type: "Seaport" },
  { slug: "tanjung-pelepas", name: "Port of Tanjung Pelepas", country: "Malaysia", iso: "MY", locode: "MYTPP", lat: 1.36, lon: 103.55, timezone: "Asia/Kuala_Lumpur", region: "Southeast Asia", type: "Seaport" },
  { slug: "colombo", name: "Port of Colombo", country: "Sri Lanka", iso: "LK", locode: "LKCMB", lat: 6.95, lon: 79.84, timezone: "Asia/Colombo", region: "South Asia", type: "Seaport" },
  { slug: "nhava-sheva", name: "Mumbai / Nhava Sheva", aliases: ["JNPT", "Jawaharlal Nehru Port", "Nhava Sheva"], country: "India", iso: "IN", locode: "INNSA", lat: 18.95, lon: 72.95, timezone: "Asia/Kolkata", region: "South Asia", type: "Seaport" },
  { slug: "chennai", name: "Chennai Port", country: "India", iso: "IN", locode: "INMAA", lat: 13.10, lon: 80.30, timezone: "Asia/Kolkata", region: "South Asia", type: "Seaport" },
  { slug: "antwerp-bruges", name: "Port of Antwerp-Bruges", country: "Belgium", iso: "BE", locode: "BEANR", lat: 51.26, lon: 4.40, timezone: "Europe/Brussels", region: "Europe", type: "Seaport" },
  { slug: "felixstowe", name: "Port of Felixstowe", country: "United Kingdom", iso: "GB", locode: "GBFXT", lat: 51.95, lon: 1.31, timezone: "Europe/London", region: "Europe", type: "Seaport" },
  { slug: "savannah", name: "Port of Savannah", country: "United States", iso: "US", locode: "USSAV", lat: 32.08, lon: -81.09, timezone: "America/New_York", region: "North America", type: "Seaport" },
  { slug: "houston", name: "Port Houston", country: "United States", iso: "US", locode: "USHOU", lat: 29.73, lon: -95.27, timezone: "America/Chicago", region: "North America", type: "Seaport" }
];

const EXTRA_PORTS = [
  { slug: "incheon", name: "Port of Incheon", aliases: ["Inchon"], country: "South Korea", iso: "KR", locode: "KRINC", lat: 37.45, lon: 126.60, timezone: "Asia/Seoul", region: "East Asia", type: "Seaport" },
  { slug: "gwangyang", name: "Port of Gwangyang", aliases: ["Kwangyang"], country: "South Korea", iso: "KR", locode: "KRKAN", lat: 34.90, lon: 127.69, timezone: "Asia/Seoul", region: "East Asia", type: "Seaport" },
  { slug: "xiamen", name: "Port of Xiamen", country: "China", iso: "CN", locode: "CNXMN", lat: 24.48, lon: 118.08, timezone: "Asia/Shanghai", region: "East Asia", type: "Seaport" },
  { slug: "keelung", name: "Port of Keelung", country: "Taiwan", iso: "TW", locode: "TWKEL", lat: 25.14, lon: 121.74, timezone: "Asia/Taipei", region: "East Asia", type: "Seaport" },
  { slug: "kobe", name: "Port of Kobe", country: "Japan", iso: "JP", locode: "JPUKB", lat: 34.68, lon: 135.20, timezone: "Asia/Tokyo", region: "East Asia", type: "Seaport" },
  { slug: "nagoya", name: "Port of Nagoya", country: "Japan", iso: "JP", locode: "JPNGO", lat: 35.09, lon: 136.88, timezone: "Asia/Tokyo", region: "East Asia", type: "Seaport" },
  { slug: "osaka", name: "Port of Osaka", country: "Japan", iso: "JP", locode: "JPOSA", lat: 34.64, lon: 135.41, timezone: "Asia/Tokyo", region: "East Asia", type: "Seaport" },
  { slug: "bangkok", name: "Bangkok Port", aliases: ["Khlong Toei"], country: "Thailand", iso: "TH", locode: "THBKK", lat: 13.70, lon: 100.58, timezone: "Asia/Bangkok", region: "Southeast Asia", type: "River port" },
  { slug: "da-nang", name: "Da Nang Port", country: "Vietnam", iso: "VN", locode: "VNDAD", lat: 16.07, lon: 108.22, timezone: "Asia/Ho_Chi_Minh", region: "Southeast Asia", type: "Seaport" },
  { slug: "tanjung-priok", name: "Jakarta / Tanjung Priok", aliases: ["Jakarta", "Tanjung Priok"], country: "Indonesia", iso: "ID", locode: "IDTPP", lat: -6.10, lon: 106.88, timezone: "Asia/Jakarta", region: "Southeast Asia", type: "Seaport" },
  { slug: "surabaya", name: "Port of Surabaya", aliases: ["Tanjung Perak"], country: "Indonesia", iso: "ID", locode: "IDSUB", lat: -7.20, lon: 112.73, timezone: "Asia/Jakarta", region: "Southeast Asia", type: "Seaport" },
  { slug: "manila", name: "Port of Manila", country: "Philippines", iso: "PH", locode: "PHMNL", lat: 14.59, lon: 120.97, timezone: "Asia/Manila", region: "Southeast Asia", type: "Seaport" },
  { slug: "cebu", name: "Port of Cebu", country: "Philippines", iso: "PH", locode: "PHCEB", lat: 10.31, lon: 123.91, timezone: "Asia/Manila", region: "Southeast Asia", type: "Seaport" },
  { slug: "mumbai", name: "Mumbai Port", aliases: ["Bombay"], country: "India", iso: "IN", locode: "INBOM", lat: 18.95, lon: 72.85, timezone: "Asia/Kolkata", region: "South Asia", type: "Seaport" },
  { slug: "mundra", name: "Mundra Port", country: "India", iso: "IN", locode: "INMUN", lat: 22.75, lon: 69.70, timezone: "Asia/Kolkata", region: "South Asia", type: "Seaport" },
  { slug: "kolkata", name: "Kolkata Port", aliases: ["Calcutta"], country: "India", iso: "IN", locode: "INCCU", lat: 22.55, lon: 88.31, timezone: "Asia/Kolkata", region: "South Asia", type: "River port" },
  { slug: "chattogram", name: "Chattogram Port", aliases: ["Chittagong"], country: "Bangladesh", iso: "BD", locode: "BDCGP", lat: 22.31, lon: 91.80, timezone: "Asia/Dhaka", region: "South Asia", type: "Seaport" },
  { slug: "karachi", name: "Port of Karachi", country: "Pakistan", iso: "PK", locode: "PKKHI", lat: 24.84, lon: 66.99, timezone: "Asia/Karachi", region: "South Asia", type: "Seaport" },
  { slug: "port-qasim", name: "Port Qasim", country: "Pakistan", iso: "PK", locode: "PKBQM", lat: 24.77, lon: 67.35, timezone: "Asia/Karachi", region: "South Asia", type: "Seaport" },
  { slug: "khalifa-port", name: "Khalifa Port", aliases: ["Abu Dhabi"], country: "United Arab Emirates", iso: "AE", locode: "AEKHL", lat: 24.78, lon: 54.65, timezone: "Asia/Dubai", region: "Middle East", type: "Seaport" },
  { slug: "dammam", name: "King Abdul Aziz Port Dammam", aliases: ["Dammam"], country: "Saudi Arabia", iso: "SA", locode: "SADMM", lat: 26.48, lon: 50.20, timezone: "Asia/Riyadh", region: "Middle East", type: "Seaport" },
  { slug: "jeddah", name: "Jeddah Islamic Port", aliases: ["Jeddah"], country: "Saudi Arabia", iso: "SA", locode: "SAJED", lat: 21.48, lon: 39.17, timezone: "Asia/Riyadh", region: "Middle East", type: "Seaport" },
  { slug: "salalah", name: "Port of Salalah", country: "Oman", iso: "OM", locode: "OMSLL", lat: 16.94, lon: 54.01, timezone: "Asia/Muscat", region: "Middle East", type: "Seaport" },
  { slug: "sohar", name: "Port of Sohar", country: "Oman", iso: "OM", locode: "OMSOH", lat: 24.50, lon: 56.62, timezone: "Asia/Muscat", region: "Middle East", type: "Seaport" },
  { slug: "hamad-port", name: "Hamad Port", country: "Qatar", iso: "QA", locode: "QAHMD", lat: 25.02, lon: 51.62, timezone: "Asia/Qatar", region: "Middle East", type: "Seaport" },
  { slug: "bremerhaven", name: "Port of Bremerhaven", country: "Germany", iso: "DE", locode: "DEBRV", lat: 53.55, lon: 8.58, timezone: "Europe/Berlin", region: "Europe", type: "Seaport" },
  { slug: "london-gateway", name: "London Gateway", country: "United Kingdom", iso: "GB", locode: "GBLGP", lat: 51.51, lon: 0.49, timezone: "Europe/London", region: "Europe", type: "Seaport" },
  { slug: "southampton", name: "Port of Southampton", country: "United Kingdom", iso: "GB", locode: "GBSOU", lat: 50.90, lon: -1.40, timezone: "Europe/London", region: "Europe", type: "Seaport" },
  { slug: "le-havre", name: "Port of Le Havre", country: "France", iso: "FR", locode: "FRLEH", lat: 49.49, lon: 0.11, timezone: "Europe/Paris", region: "Europe", type: "Seaport" },
  { slug: "marseille-fos", name: "Marseille Fos Port", aliases: ["Marseille", "Fos"], country: "France", iso: "FR", locode: "FRMRS", lat: 43.35, lon: 5.35, timezone: "Europe/Paris", region: "Europe", type: "Seaport" },
  { slug: "barcelona", name: "Port of Barcelona", country: "Spain", iso: "ES", locode: "ESBCN", lat: 41.35, lon: 2.16, timezone: "Europe/Madrid", region: "Europe", type: "Seaport" },
  { slug: "valencia", name: "Port of Valencia", country: "Spain", iso: "ES", locode: "ESVLC", lat: 39.45, lon: -0.32, timezone: "Europe/Madrid", region: "Europe", type: "Seaport" },
  { slug: "algeciras", name: "Port of Algeciras", country: "Spain", iso: "ES", locode: "ESALG", lat: 36.13, lon: -5.45, timezone: "Europe/Madrid", region: "Europe", type: "Seaport" },
  { slug: "genoa", name: "Port of Genoa", country: "Italy", iso: "IT", locode: "ITGOA", lat: 44.41, lon: 8.90, timezone: "Europe/Rome", region: "Europe", type: "Seaport" },
  { slug: "gioia-tauro", name: "Port of Gioia Tauro", country: "Italy", iso: "IT", locode: "ITGIT", lat: 38.46, lon: 15.90, timezone: "Europe/Rome", region: "Europe", type: "Seaport" },
  { slug: "piraeus", name: "Port of Piraeus", country: "Greece", iso: "GR", locode: "GRPIR", lat: 37.94, lon: 23.64, timezone: "Europe/Athens", region: "Europe", type: "Seaport" },
  { slug: "constanta", name: "Port of Constanta", country: "Romania", iso: "RO", locode: "ROCND", lat: 44.17, lon: 28.66, timezone: "Europe/Bucharest", region: "Europe", type: "Seaport" },
  { slug: "gdansk", name: "Port of Gdansk", country: "Poland", iso: "PL", locode: "PLGDN", lat: 54.40, lon: 18.67, timezone: "Europe/Warsaw", region: "Europe", type: "Seaport" },
  { slug: "seattle", name: "Port of Seattle", country: "United States", iso: "US", locode: "USSEA", lat: 47.60, lon: -122.34, timezone: "America/Los_Angeles", region: "North America", type: "Seaport" },
  { slug: "tacoma", name: "Port of Tacoma", country: "United States", iso: "US", locode: "USTIW", lat: 47.26, lon: -122.41, timezone: "America/Los_Angeles", region: "North America", type: "Seaport" },
  { slug: "oakland", name: "Port of Oakland", country: "United States", iso: "US", locode: "USOAK", lat: 37.80, lon: -122.31, timezone: "America/Los_Angeles", region: "North America", type: "Seaport" },
  { slug: "charleston", name: "Port of Charleston", country: "United States", iso: "US", locode: "USCHS", lat: 32.78, lon: -79.93, timezone: "America/New_York", region: "North America", type: "Seaport" },
  { slug: "norfolk", name: "Port of Norfolk", aliases: ["Virginia Port"], country: "United States", iso: "US", locode: "USORF", lat: 36.85, lon: -76.29, timezone: "America/New_York", region: "North America", type: "Seaport" },
  { slug: "miami", name: "PortMiami", aliases: ["Miami"], country: "United States", iso: "US", locode: "USMIA", lat: 25.78, lon: -80.18, timezone: "America/New_York", region: "North America", type: "Seaport" },
  { slug: "vancouver", name: "Port of Vancouver", country: "Canada", iso: "CA", locode: "CAVAN", lat: 49.29, lon: -123.10, timezone: "America/Vancouver", region: "North America", type: "Seaport" },
  { slug: "prince-rupert", name: "Port of Prince Rupert", country: "Canada", iso: "CA", locode: "CAPRR", lat: 54.32, lon: -130.32, timezone: "America/Vancouver", region: "North America", type: "Seaport" },
  { slug: "montreal", name: "Port of Montreal", country: "Canada", iso: "CA", locode: "CAMTR", lat: 45.50, lon: -73.55, timezone: "America/Toronto", region: "North America", type: "Seaport" },
  { slug: "manzanillo-mexico", name: "Port of Manzanillo Mexico", aliases: ["Manzanillo"], country: "Mexico", iso: "MX", locode: "MXZLO", lat: 19.05, lon: -104.32, timezone: "America/Mexico_City", region: "Latin America", type: "Seaport" },
  { slug: "lazaro-cardenas", name: "Port of Lazaro Cardenas", country: "Mexico", iso: "MX", locode: "MXLZC", lat: 17.93, lon: -102.18, timezone: "America/Mexico_City", region: "Latin America", type: "Seaport" },
  { slug: "veracruz", name: "Port of Veracruz", country: "Mexico", iso: "MX", locode: "MXVER", lat: 19.20, lon: -96.14, timezone: "America/Mexico_City", region: "Latin America", type: "Seaport" },
  { slug: "santos", name: "Port of Santos", country: "Brazil", iso: "BR", locode: "BRSSZ", lat: -23.96, lon: -46.30, timezone: "America/Sao_Paulo", region: "Latin America", type: "Seaport" },
  { slug: "paranagua", name: "Port of Paranagua", country: "Brazil", iso: "BR", locode: "BRPNG", lat: -25.50, lon: -48.50, timezone: "America/Sao_Paulo", region: "Latin America", type: "Seaport" },
  { slug: "buenos-aires", name: "Port of Buenos Aires", country: "Argentina", iso: "AR", locode: "ARBUE", lat: -34.58, lon: -58.37, timezone: "America/Argentina/Buenos_Aires", region: "Latin America", type: "Seaport" },
  { slug: "callao", name: "Port of Callao", country: "Peru", iso: "PE", locode: "PECLL", lat: -12.05, lon: -77.15, timezone: "America/Lima", region: "Latin America", type: "Seaport" },
  { slug: "cartagena", name: "Port of Cartagena", country: "Colombia", iso: "CO", locode: "COCTG", lat: 10.40, lon: -75.53, timezone: "America/Bogota", region: "Latin America", type: "Seaport" },
  { slug: "colon", name: "Port of Colon", aliases: ["Cristobal", "Manzanillo International Terminal Panama"], country: "Panama", iso: "PA", locode: "PACTB", lat: 9.36, lon: -79.90, timezone: "America/Panama", region: "Latin America", type: "Seaport" },
  { slug: "durban", name: "Port of Durban", country: "South Africa", iso: "ZA", locode: "ZADUR", lat: -29.87, lon: 31.05, timezone: "Africa/Johannesburg", region: "Africa", type: "Seaport" },
  { slug: "cape-town", name: "Port of Cape Town", country: "South Africa", iso: "ZA", locode: "ZACPT", lat: -33.91, lon: 18.43, timezone: "Africa/Johannesburg", region: "Africa", type: "Seaport" },
  { slug: "gqeberha", name: "Port Elizabeth / Gqeberha", aliases: ["Port Elizabeth"], country: "South Africa", iso: "ZA", locode: "ZAPLZ", lat: -33.96, lon: 25.62, timezone: "Africa/Johannesburg", region: "Africa", type: "Seaport" },
  { slug: "tanger-med", name: "Tanger Med Port", aliases: ["Tangier Med"], country: "Morocco", iso: "MA", locode: "MAPTM", lat: 35.89, lon: -5.50, timezone: "Africa/Casablanca", region: "Africa", type: "Seaport" },
  { slug: "casablanca", name: "Port of Casablanca", country: "Morocco", iso: "MA", locode: "MACAS", lat: 33.61, lon: -7.62, timezone: "Africa/Casablanca", region: "Africa", type: "Seaport" },
  { slug: "alexandria", name: "Port of Alexandria", country: "Egypt", iso: "EG", locode: "EGALY", lat: 31.20, lon: 29.88, timezone: "Africa/Cairo", region: "Africa", type: "Seaport" },
  { slug: "port-said", name: "Port Said", country: "Egypt", iso: "EG", locode: "EGPSD", lat: 31.26, lon: 32.30, timezone: "Africa/Cairo", region: "Africa", type: "Seaport" },
  { slug: "mombasa", name: "Port of Mombasa", country: "Kenya", iso: "KE", locode: "KEMBA", lat: -4.04, lon: 39.65, timezone: "Africa/Nairobi", region: "Africa", type: "Seaport" },
  { slug: "dar-es-salaam", name: "Port of Dar es Salaam", country: "Tanzania", iso: "TZ", locode: "TZDAR", lat: -6.82, lon: 39.30, timezone: "Africa/Dar_es_Salaam", region: "Africa", type: "Seaport" },
  { slug: "lagos-apapa", name: "Lagos / Apapa Port", aliases: ["Lagos", "Apapa"], country: "Nigeria", iso: "NG", locode: "NGAPP", lat: 6.44, lon: 3.36, timezone: "Africa/Lagos", region: "Africa", type: "Seaport" },
  { slug: "tema", name: "Port of Tema", country: "Ghana", iso: "GH", locode: "GHTEM", lat: 5.63, lon: 0.01, timezone: "Africa/Accra", region: "Africa", type: "Seaport" }
];

const ALL_PORTS = [...PORTS, ...EXTRA_PORTS];

function populateCountrySelects() {
  document.querySelectorAll("[data-country-select]").forEach((select) => {
    if (select.options.length > 1) return;
    const lang = currentLang();
    const allOption = select.options.length === 1 && select.options[0].value === "" ? select.options[0].outerHTML : "";
    select.innerHTML = allOption + TRADE_COUNTRIES.map(([code, en, ko]) => `<option value="${code}">${lang === "ko" ? ko : en}</option>`).join("");
    const params = new URLSearchParams(location.search);
    const value = params.get(select.dataset.param || "country")?.toUpperCase();
    if (value && [...select.options].some((option) => option.value === value)) select.value = value;
  });
}

function normalizeCountrySearch(value = "") {
  return String(value)
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[’'`]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function compactCountrySearch(value = "") {
  return normalizeCountrySearch(value).replace(/\s+/g, "");
}

function countryComboboxItems(lang = currentLang()) {
  return TRADE_COUNTRIES.map(([code, en, ko]) => {
    const aliases = COUNTRY_SEARCH_ALIASES[code] || [];
    const terms = [code, en, ko, ...aliases];
    const normalizedTerms = [...new Set(terms.flatMap((term) => [normalizeCountrySearch(term), compactCountrySearch(term)]).filter(Boolean))];
    return {
      code,
      en,
      ko,
      label: lang === "ko" ? ko : en,
      terms: normalizedTerms
    };
  });
}

function countryMatchScore(item, query) {
  const q = normalizeCountrySearch(query);
  const compact = compactCountrySearch(query);
  if (!q && !compact) return 0;
  const queries = [q, compact].filter(Boolean);
  let best = 0;
  item.terms.forEach((term) => {
    queries.forEach((needle) => {
      if (term === needle) best = Math.max(best, 100);
      else if (term.startsWith(needle)) best = Math.max(best, 80);
      else if (term.includes(needle)) best = Math.max(best, 50);
    });
  });
  return best;
}

function enhanceCountryCombobox(select, onSelect) {
  if (!select || select.dataset.comboboxReady === "true") return;
  const lang = currentLang();
  const items = countryComboboxItems(lang);
  const labels = lang === "ko"
    ? { label: "국가 선택", placeholder: "국가명 또는 ISO 코드 검색...", noResult: "일치하는 국가가 없습니다." }
    : { label: "Select country", placeholder: "Search country name or ISO code...", noResult: "No matching countries." };
  const id = `country-combobox-${Math.random().toString(36).slice(2, 9)}`;
  const listId = `${id}-list`;
  const wrap = document.createElement("div");
  wrap.className = "country-combobox";
  wrap.dataset.countryCombobox = "";
  wrap.innerHTML = `
    <label class="sr-only" for="${id}">${labels.label}</label>
    <div class="country-combobox-control">
      <i data-lucide="search"></i>
      <input id="${id}" type="text" autocomplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="${listId}" aria-label="${labels.label}" placeholder="${labels.placeholder}">
      <button type="button" aria-label="${lang === "ko" ? "국가 목록 열기" : "Open country list"}"><i data-lucide="chevron-down"></i></button>
    </div>
    <div class="country-combobox-list" id="${listId}" role="listbox"></div>
  `;
  select.classList.add("visually-hidden-select");
  select.setAttribute("tabindex", "-1");
  select.setAttribute("aria-hidden", "true");
  select.parentElement?.appendChild(wrap);
  select.dataset.comboboxReady = "true";

  const input = wrap.querySelector("input");
  const button = wrap.querySelector("button");
  const list = wrap.querySelector(".country-combobox-list");
  let matches = [...items];
  let activeIndex = -1;
  let open = false;

  const selectedItem = () => items.find((item) => item.code === select.value) || items[0];
  const setInputToSelected = () => {
    const item = selectedItem();
    if (item) input.value = `${item.label} (${item.code})`;
  };
  const close = ({ reset = true } = {}) => {
    open = false;
    activeIndex = -1;
    wrap.classList.remove("is-open");
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
    if (reset) setInputToSelected();
  };
  const render = () => {
    list.innerHTML = matches.length
      ? matches.map((item, index) => `<button type="button" role="option" id="${listId}-${item.code}" data-country-option="${item.code}" aria-selected="${index === activeIndex}"><span>${escapeHtml(item.label)}</span><small>${escapeHtml(item.code)} · ${escapeHtml(item.en)}</small></button>`).join("")
      : `<div class="country-combobox-empty">${labels.noResult}</div>`;
    input.setAttribute("aria-activedescendant", activeIndex >= 0 && matches[activeIndex] ? `${listId}-${matches[activeIndex].code}` : "");
  };
  const filter = (query = "") => {
    const q = normalizeCountrySearch(query);
    if (q) {
      const scored = items
        .map((item) => ({ item, score: countryMatchScore(item, query) }))
        .filter((entry) => entry.score > 0);
      const exactMatch = scored.some((entry) => entry.score === 100);
      matches = scored
        .filter((entry) => !exactMatch || entry.score === 100)
        .sort((a, b) => b.score - a.score || items.indexOf(a.item) - items.indexOf(b.item))
        .map((entry) => entry.item);
    } else {
      matches = [...items];
    }
    activeIndex = matches.length ? 0 : -1;
    render();
  };
  const show = () => {
    open = true;
    wrap.classList.add("is-open");
    input.setAttribute("aria-expanded", "true");
    filter(input.value.includes("(") ? "" : input.value);
  };
  const choose = (code, { push = true } = {}) => {
    if (!code || select.value === code && !push) {
      close();
      return;
    }
    select.value = code;
    setInputToSelected();
    close({ reset: false });
    onSelect?.(code, { push });
  };

  setInputToSelected();
  render();
  input.addEventListener("focus", () => show());
  input.addEventListener("input", () => {
    if (!open) show();
    filter(input.value);
  });
  button.addEventListener("click", () => {
    open ? close() : (input.focus(), show());
  });
  list.addEventListener("mousedown", (event) => event.preventDefault());
  list.addEventListener("click", (event) => {
    const option = event.target.closest("[data-country-option]");
    if (option) choose(option.dataset.countryOption);
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!open) show(); else activeIndex = Math.min(activeIndex + 1, matches.length - 1);
      render();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!open) show(); else activeIndex = Math.max(activeIndex - 1, 0);
      render();
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (!open) show(); else if (matches[activeIndex]) choose(matches[activeIndex].code);
    } else if (event.key === "Escape") {
      event.preventDefault();
      close();
    }
  });
  document.addEventListener("click", (event) => {
    if (!wrap.contains(event.target)) close();
  });
  select.addEventListener("change", () => setInputToSelected());
  select.updateComboboxLabel = setInputToSelected;
}
function dayName(date, lang) {
  return new Intl.DateTimeFormat(lang === "ko" ? "ko-KR" : "en-US", { weekday: "long", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}

function localDateLabel(date, lang = currentLang()) {
  const value = typeof date === "string" ? new Date(`${date}T00:00:00Z`) : date;
  if (Number.isNaN(value.getTime())) return "";
  return new Intl.DateTimeFormat(lang === "ko" ? "ko-KR" : "en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }).format(value);
}

async function getHolidays(country, year) {
  return fetchJson(`https://date.nager.at/api/v3/PublicHolidays/${year}/${country}`, {
    cacheKey: `logilee:holidays:${country}:${year}`,
    ttl: 24 * 60 * 60 * 1000
  });
}

async function getNagerAvailableCountries() {
  try {
    const countries = await fetchJson("https://date.nager.at/api/v3/AvailableCountries", {
      cacheKey: "logilee:nager:available-countries",
      ttl: 7 * 24 * 60 * 60 * 1000,
      timeout: 9000
    });
    return new Set((Array.isArray(countries) ? countries : []).map((item) => String(item.countryCode || item.key || "").toUpperCase()).filter(Boolean));
  } catch (error) {
    console.warn("Nager.Date country coverage unavailable:", error);
    return null;
  }
}

function holidayYearRange() {
  const current = new Date().getFullYear();
  return Array.from({ length: 6 }, (_, index) => current - 1 + index);
}

function populateHolidayYears(select) {
  if (!select) return;
  const years = holidayYearRange();
  const params = new URLSearchParams(location.search);
  const requested = Number(params.get("year"));
  const current = new Date().getFullYear();
  const selected = years.includes(requested) ? requested : current;
  select.innerHTML = years.map((year) => `<option value="${year}">${year}</option>`).join("");
  select.value = String(selected);
}

function holidayDateValue(date) {
  return new Date(`${date}T00:00:00Z`).getTime();
}

function todayIsoLocal() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function daysUntilHoliday(date) {
  const today = new Date(todayIsoLocal());
  const holiday = new Date(`${date}T00:00:00Z`);
  return Math.round((holiday.getTime() - today.getTime()) / 86400000);
}

function longestHolidayStretch(holidays) {
  const dates = [...new Set(holidays.map((item) => item.date))].sort();
  let best = 0;
  let current = 0;
  let previous = null;
  dates.forEach((date) => {
    if (previous && holidayDateValue(date) - holidayDateValue(previous) === 86400000) current += 1;
    else current = 1;
    best = Math.max(best, current);
    previous = date;
  });
  return best;
}

function holidayHeavyMonths(holidays, lang = currentLang()) {
  const counts = new Map();
  holidays.forEach((item) => {
    const month = item.date.slice(5, 7);
    counts.set(month, (counts.get(month) || 0) + 1);
  });
  const max = Math.max(0, ...counts.values());
  if (!max) return "N/A";
  const formatter = new Intl.DateTimeFormat(lang === "ko" ? "ko-KR" : "en-US", { month: "long", timeZone: "UTC" });
  return [...counts.entries()]
    .filter(([, count]) => count === max)
    .map(([month]) => formatter.format(new Date(`2026-${month}-01T00:00:00Z`)))
    .join(lang === "ko" ? ", " : ", ");
}

function holidayRelatedToolsMarkup(country) {
  const lang = currentLang();
  const currency = COUNTRY_CURRENCY[country] || "USD";
  const tools = lang === "ko"
    ? [
        ["국가 무역 프로필", `country-trade-profile.html?country=${country}`, "globe"],
        ["주요 항만", `ports.html?country=${country}`, "anchor"],
        ["환율 계산기", `currency-converter.html?from=USD&to=${currency}`, "badge-dollar-sign"],
        ["무역 통계", `country-trade-profile.html?country=${country}`, "chart-column"],
        ["HS Code 검색", "../hscode.html", "barcode"]
      ]
    : [
        ["Country Trade Profile", `country-trade-profile.html?country=${country}`, "globe"],
        ["Major Ports", `ports.html?country=${country}`, "anchor"],
        ["Currency Converter", `currency-converter.html?from=USD&to=${currency}`, "badge-dollar-sign"],
        ["Trade Statistics", `country-trade-profile.html?country=${country}`, "chart-column"],
        ["HS Code Search", "../hscode-en.html", "barcode"]
      ];
  return `
    <section class="holiday-result-section">
      <h2>${lang === "ko" ? "Related Trade Tools" : "Related Trade Tools"}</h2>
      <div class="country-tool-grid holiday-tool-grid">${tools.map(([label, href, icon]) => `<a href="${href}"><i data-lucide="${icon}"></i><strong>${escapeHtml(label)}</strong></a>`).join("")}</div>
    </section>
  `;
}

function holidayScheduleSnapshotMarkup(holidays, nextHoliday, metrics) {
  const lang = currentLang();
  const nextText = nextHoliday ? `${nextHoliday.date} ${nextHoliday.localName || nextHoliday.name}` : "N/A";
  const heavy = holidayHeavyMonths(holidays, lang);
  const rows = lang === "ko"
    ? [
        ["총 공휴일", `${holidays.length}일`],
        ["평일 공휴일", `${metrics.weekdayCount}일`],
        ["월/금 공휴일", `${metrics.mondayFridayCount}일`],
        ["최장 연속 공휴일", `${metrics.longestStretch}일`],
        ["공휴일 집중 월", heavy],
        ["다음 공휴일", nextText]
      ]
    : [
        ["Total holidays", `${holidays.length}`],
        ["Weekday holidays", `${metrics.weekdayCount}`],
        ["Monday/Friday holidays", `${metrics.mondayFridayCount}`],
        ["Longest consecutive stretch", `${metrics.longestStretch} day${metrics.longestStretch === 1 ? "" : "s"}`],
        ["Holiday-heavy month", heavy],
        ["Next holiday", nextText]
      ];
  return `
    <section class="holiday-result-section trade-schedule-snapshot">
      <h2>${lang === "ko" ? "Trade Schedule Snapshot" : "Trade Schedule Snapshot"}</h2>
      <dl>${rows.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl>
    </section>
  `;
}

async function wireHolidayCalendar() {
  const form = document.querySelector("[data-holiday-form]");
  if (!form) return;
  populateCountrySelects();
  const select = form.querySelector("[data-country-select]");
  const year = form.querySelector("[data-year]");
  populateHolidayYears(year);
  const output = document.querySelector("[data-holiday-output]");
  const lang = currentLang();
  const labels = lang === "ko"
    ? {
        loading: "공휴일 데이터를 불러오는 중입니다...",
        unavailable: "선택한 국가 또는 연도의 공휴일 데이터를 제공하지 않습니다.",
        total: "전체 공휴일",
        weekday: "평일 공휴일",
        weekend: "주말 공휴일",
        next: "다음 공휴일",
        date: "날짜",
        name: "영문명",
        localName: "현지명",
        day: "요일",
        noNext: "선택 연도에 남은 공휴일이 없습니다."
      }
    : {
        loading: "Loading holiday data...",
        unavailable: "Holiday data is not available for the selected country or year.",
        total: "전체 공휴일",
        weekday: "평일 공휴일",
        weekend: "주말 공휴일",
        next: "다음 공휴일",
        date: "Date",
        name: "Holiday",
        localName: "Local Name",
        day: "Day",
        noNext: "No remaining holiday in the selected year."
      };
  const coverage = await getNagerAvailableCountries();
  const currentRenderToken = { value: 0 };
  const render = async () => {
    const token = ++currentRenderToken.value;
    const country = select.value;
    const valueYear = year.value;
    output.innerHTML = `<div class="data-empty">${labels.loading}</div>`;
    try {
      if (coverage && !coverage.has(country)) {
        output.innerHTML = `<div class="data-empty">${labels.unavailable}</div>${holidayRelatedToolsMarkup(country)}`;
        refreshIcons();
        return;
      }
      const holidays = (await getHolidays(country, valueYear)).sort((a, b) => a.date.localeCompare(b.date));
      if (token !== currentRenderToken.value) return;
      const todayIso = todayIsoLocal();
      const nextHoliday = holidays.find((item) => item.date >= todayIso) || (Number(valueYear) > new Date().getFullYear() ? holidays[0] : null);
      const weekdayCount = holidays.filter((item) => {
        const day = new Date(`${item.date}T00:00:00Z`).getUTCDay();
        return day !== 0 && day !== 6;
      }).length;
      const weekendCount = holidays.length - weekdayCount;
      const mondayFridayCount = holidays.filter((item) => {
        const day = new Date(`${item.date}T00:00:00Z`).getUTCDay();
        return day === 1 || day === 5;
      }).length;
      const metrics = { weekdayCount, weekendCount, mondayFridayCount, longestStretch: longestHolidayStretch(holidays) };
      const dday = nextHoliday ? daysUntilHoliday(nextHoliday.date) : null;
      output.innerHTML = `
        <div class="stat-grid compact-stat-grid holiday-summary-grid">
          <div class="stat-block"><span>${labels.total}</span><strong>${holidays.length}</strong><small>${escapeHtml(valueYear)}</small></div>
          <div class="stat-block"><span>${labels.weekday}</span><strong>${weekdayCount}</strong><small>Mon-Fri</small></div>
          <div class="stat-block"><span>${labels.weekend}</span><strong>${weekendCount}</strong><small>Sat-Sun</small></div>
          <div class="stat-block"><span>${labels.next}</span><strong>${nextHoliday ? localDateLabel(nextHoliday.date, lang) : "N/A"}</strong><small>${nextHoliday ? `${escapeHtml(nextHoliday.localName || nextHoliday.name)} · D-${Math.max(0, dday)}` : labels.noNext}</small></div>
        </div>
        ${holidayScheduleSnapshotMarkup(holidays, nextHoliday, metrics)}
        <div class="responsive-table holiday-table-wrap"><table class="result-table holiday-table"><thead><tr><th>${labels.date}</th><th>${labels.name}</th><th>${labels.localName}</th><th>${labels.day}</th></tr></thead>
        <tbody>${holidays.map((item) => {
          const isPast = item.date < todayIso;
          const isNext = nextHoliday && item.date === nextHoliday.date;
          return `<tr class="${isNext ? "is-next-row" : isPast ? "is-past-row" : ""}"><td>${escapeHtml(item.date)}</td><td>${escapeHtml(item.name)}</td><td>${escapeHtml(item.localName)}</td><td>${escapeHtml(dayName(item.date, lang))}</td></tr>`;
        }).join("")}</tbody></table></div>
        ${holidayRelatedToolsMarkup(country)}
      `;
      refreshIcons();
    } catch (error) {
      console.warn("Holiday calendar unavailable:", error);
      output.innerHTML = `<div class="data-empty">${labels.unavailable}</div>${holidayRelatedToolsMarkup(select.value)}`;
      refreshIcons();
    }
  };
  const updateUrlAndRender = ({ push = true } = {}) => {
    const url = new URL(location.href);
    url.searchParams.set("country", select.value);
    url.searchParams.set("year", year.value);
    if (push) history.pushState({ country: select.value, year: year.value }, "", url); else history.replaceState({ country: select.value, year: year.value }, "", url);
    render();
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    updateUrlAndRender({ push: false });
  });
  enhanceCountryCombobox(select, () => updateUrlAndRender());
  year.addEventListener("change", () => updateUrlAndRender());
  window.addEventListener("popstate", () => {
    const params = new URLSearchParams(location.search);
    const country = params.get("country")?.toUpperCase();
    const selectedYear = params.get("year");
    if (country && [...select.options].some((option) => option.value === country)) select.value = country;
    if (selectedYear && [...year.options].some((option) => option.value === selectedYear)) year.value = selectedYear;
    select.updateComboboxLabel?.();
    render();
  });
  updateUrlAndRender({ push: false });
}
function addDaysUtc(date, days) {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

async function wireBusinessDay() {
  const form = document.querySelector("[data-business-day-form]");
  if (!form) return;
  populateCountrySelects();
  const start = form.querySelector("[data-start-date]");
  if (start && !start.value) start.value = isoDate(new Date());
  const output = document.querySelector("[data-business-day-output]");
  const render = async () => {
    output.innerHTML = `<div class="data-empty">Loading...</div>`;
    try {
      const country = form.querySelector("[data-country-select]").value;
      const amount = Math.max(0, Number(form.querySelector("[data-business-days]").value || 0));
      const direction = form.querySelector("[data-direction]").value === "subtract" ? -1 : 1;
      let cursor = new Date(`${start.value}T00:00:00Z`);
      const years = new Set([cursor.getUTCFullYear(), addDaysUtc(cursor, direction * (amount + 45)).getUTCFullYear()]);
      const holidays = (await Promise.all([...years].map((year) => getHolidays(country, year)))).flat();
      const holidayMap = new Map(holidays.map((item) => [item.date, item]));
      const excluded = [];
      let weekendDays = 0;
      let counted = 0;
      while (counted < amount) {
        cursor = addDaysUtc(cursor, direction);
        const weekday = cursor.getUTCDay();
        const date = isoDate(cursor);
        if (weekday === 0 || weekday === 6) {
          weekendDays += 1;
          continue;
        }
        const holiday = holidayMap.get(date);
        if (holiday) {
          excluded.push(holiday);
          continue;
        }
        counted += 1;
      }
      output.innerHTML = `
        <span class="summary-number">${isoDate(cursor)}</span>
        <strong>Estimated Business Date</strong>
        <div class="stat-grid compact-stat-grid">
          <div class="stat-block"><span>Business days</span><strong>${amount}</strong></div>
          <div class="stat-block"><span>Weekend days excluded</span><strong>${weekendDays}</strong></div>
          <div class="stat-block"><span>Holidays excluded</span><strong>${excluded.length}</strong></div>
        </div>
        ${excluded.length ? `<h3>Excluded Holidays</h3><ul class="plain-list">${excluded.map((item) => `<li>${item.date} ${item.localName || item.name}</li>`).join("")}</ul>` : `<p class="muted">No public holidays were excluded in this calculation.</p>`}
        <p class="muted">Holiday data: Nager.Date</p>
      `;
    } catch (error) {
      console.warn("Business day unavailable:", error);
      dataError(output, "Business day data is temporarily unavailable.");
    }
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    render();
  });
  render();
}

const WB_INDICATORS = [
  ["Population", "SP.POP.TOTL", 0],
  ["GDP", "NY.GDP.MKTP.CD", 0],
  ["GDP Growth", "NY.GDP.MKTP.KD.ZG", 2],
  ["Inflation", "FP.CPI.TOTL.ZG", 2],
  ["Trade (% of GDP)", "NE.TRD.GNFS.ZS", 2],
  ["Exports of goods and services", "NE.EXP.GNFS.CD", 0],
  ["Imports of goods and services", "NE.IMP.GNFS.CD", 0],
  ["Export Growth", "NE.EXP.GNFS.KD.ZG", 2],
  ["Import Growth", "NE.IMP.GNFS.KD.ZG", 2]
];

async function getWorldBankRecords(country) {
  const records = await Promise.all(WB_INDICATORS.map(async ([label, code, digits]) => {
    try {
      const data = await fetchJson(`https://api.worldbank.org/v2/country/${country}/indicator/${code}?format=json&per_page=80&date=2018:2026`, {
        cacheKey: `logilee:wb:${country}:${code}`,
        ttl: 24 * 60 * 60 * 1000
      });
      const item = Array.isArray(data?.[1]) ? data[1].find((row) => row.value !== null) : null;
      return { label, code, value: item?.value, year: item?.date || "N/A", digits };
    } catch (error) {
      console.warn("World Bank indicator unavailable:", country, code, error);
      return { label, code, value: null, year: "N/A", digits };
    }
  }));
  const exports = records.find((row) => row.code === "NE.EXP.GNFS.CD");
  const imports = records.find((row) => row.code === "NE.IMP.GNFS.CD");
  records.splice(7, 0, {
    label: "Trade Balance",
    code: "LOGILEE.TRADE.BALANCE",
    value: exports?.year === imports?.year && Number.isFinite(exports?.value) && Number.isFinite(imports?.value) ? exports.value - imports.value : null,
    year: exports?.year === imports?.year ? exports.year : "N/A",
    digits: 0
  });
  return records;
}

function countryNameFromCode(country, lang = currentLang()) {
  const found = TRADE_COUNTRIES.find(([code]) => code === country);
  return found ? found[lang === "ko" ? 2 : 1] : country;
}

const EU_COUNTRY_CODES = new Set(["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE"]);
const PORT_DETAIL_SLUGS = new Set(["busan", "shanghai", "singapore", "rotterdam", "los-angeles", "long-beach", "ningbo-zhoushan", "jebel-ali", "cat-lai", "hamburg"]);

const COUNTRY_LANGUAGE_REFERENCE = {
  KR: "Korean", CN: "Mandarin Chinese", US: "English", JP: "Japanese", DE: "German", VN: "Vietnamese", IN: "Hindi, English", MX: "Spanish", SG: "English, Malay, Mandarin, Tamil", GB: "English", NL: "Dutch", AE: "Arabic", HK: "Chinese, English", TH: "Thai", MY: "Malay", LK: "Sinhala, Tamil", BE: "Dutch, French, German", TW: "Mandarin Chinese", FR: "French", ES: "Spanish", IT: "Italian", GR: "Greek", RO: "Romanian", PL: "Polish", CA: "English, French", BR: "Portuguese", AR: "Spanish", PE: "Spanish", CO: "Spanish", PA: "Spanish", ZA: "Zulu, Xhosa, Afrikaans, English", MA: "Arabic, Amazigh", EG: "Arabic", KE: "Swahili, English", TZ: "Swahili, English", NG: "English", GH: "English", SA: "Arabic", OM: "Arabic", QA: "Arabic", PK: "Urdu, English", BD: "Bengali", ID: "Indonesian", PH: "Filipino, English", ET: "Amharic", CG: "French", CD: "French"
};

const CURRENCY_NAME_REFERENCE = {
  KRW: "South Korean won", CNY: "Chinese yuan", USD: "United States dollar", JPY: "Japanese yen", EUR: "Euro", VND: "Vietnamese dong", INR: "Indian rupee", MXN: "Mexican peso", SGD: "Singapore dollar", GBP: "Pound sterling", AED: "United Arab Emirates dirham", HKD: "Hong Kong dollar", THB: "Thai baht", MYR: "Malaysian ringgit", LKR: "Sri Lankan rupee", TWD: "New Taiwan dollar", RON: "Romanian leu", PLN: "Polish zloty", CAD: "Canadian dollar", BRL: "Brazilian real", ARS: "Argentine peso", PEN: "Peruvian sol", COP: "Colombian peso", PAB: "Panamanian balboa", ZAR: "South African rand", MAD: "Moroccan dirham", EGP: "Egyptian pound", KES: "Kenyan shilling", TZS: "Tanzanian shilling", NGN: "Nigerian naira", GHS: "Ghanaian cedi", SAR: "Saudi riyal", OMR: "Omani rial", QAR: "Qatari riyal", PKR: "Pakistani rupee", BDT: "Bangladeshi taka", IDR: "Indonesian rupiah", PHP: "Philippine peso", ETB: "Ethiopian birr", XAF: "Central African CFA franc", CDF: "Congolese franc"
};

const INDICATOR_UNITS = {
  "Population": "people",
  "GDP": "current US$",
  "GDP Growth": "%",
  "Inflation": "%",
  "Trade (% of GDP)": "%",
  "Exports of goods and services": "current US$",
  "Imports of goods and services": "current US$",
  "Trade Balance": "current US$",
  "Export Growth": "%",
  "Import Growth": "%"
};

function indicatorUnit(label) {
  return INDICATOR_UNITS[label] || "";
}

function isMoneyIndicator(label) {
  return ["GDP", "Exports of goods and services", "Imports of goods and services", "Trade Balance"].includes(label);
}

function isPercentIndicator(label) {
  return ["GDP Growth", "Inflation", "Trade (% of GDP)", "Export Growth", "Import Growth"].includes(label);
}

function abbreviateNumber(value, digits = 2) {
  const abs = Math.abs(value);
  if (abs >= 1e12) return `${formatRate(value / 1e12, digits)}T`;
  if (abs >= 1e9) return `${formatRate(value / 1e9, digits)}B`;
  if (abs >= 1e6) return `${formatRate(value / 1e6, digits)}M`;
  if (abs >= 1e3) return `${formatRate(value / 1e3, digits)}K`;
  return formatRate(value, digits);
}

function formatIndicatorValue(row, { compact = false } = {}) {
  if (!row || row.value === undefined || row.value === null || !Number.isFinite(Number(row.value))) return "N/A";
  const value = Number(row.value);
  if (isMoneyIndicator(row.label)) return compact ? `US$ ${abbreviateNumber(value)}` : `US$ ${formatRate(value, row.digits)}`;
  if (isPercentIndicator(row.label)) return `${formatRate(value, row.digits)}%`;
  if (row.label === "Population") return compact ? abbreviateNumber(value, 2) : `${formatRate(value, 0)} people`;
  return formatRate(value, row.digits);
}

function plainIndicatorValue(row) {
  if (!row || row.value === undefined || row.value === null || !Number.isFinite(Number(row.value))) return "N/A";
  return formatRate(Number(row.value), row.digits);
}

async function getCountryMetadata(country) {
  const currencyCode = COUNTRY_CURRENCY[country] || "";
  const fallbackName = countryNameFromCode(country, "en");
  const fallback = {
    source: "World Bank country metadata with LOGILEE local language and currency reference",
    name: fallbackName,
    officialName: "",
    iso: country,
    capital: "N/A",
    region: "N/A",
    incomeGroup: "N/A",
    languages: COUNTRY_LANGUAGE_REFERENCE[country] || "N/A",
    currency: currencyCode ? `${currencyCode} · ${CURRENCY_NAME_REFERENCE[currencyCode] || currencyCode}` : "N/A",
    flagPng: `https://flagcdn.com/w160/${country.toLowerCase()}.png`,
    flagSvg: `https://flagcdn.com/${country.toLowerCase()}.svg`,
    flagAlt: `${fallbackName} flag`,
    latlng: null,
    mapUrl: ""
  };
  try {
    const data = await fetchJson(`https://api.worldbank.org/v2/country/${country}?format=json`, {
      cacheKey: `logilee:country-meta-wb:${country}`,
      ttl: 7 * 24 * 60 * 60 * 1000,
      timeout: 9000
    });
    const item = Array.isArray(data?.[1]) ? data[1][0] : null;
    if (!item) throw new Error("No World Bank country metadata");
    const lat = Number(item.latitude);
    const lon = Number(item.longitude);
    return {
      ...fallback,
      source: "World Bank country metadata with LOGILEE local language and currency reference",
      name: item.name || fallback.name,
      officialName: item.name || "",
      iso: item.iso2Code || country,
      capital: item.capitalCity || fallback.capital,
      region: item.region?.value || fallback.region,
      incomeGroup: item.incomeLevel?.value || fallback.incomeGroup,
      latlng: Number.isFinite(lat) && Number.isFinite(lon) ? [lat, lon] : null,
      mapUrl: Number.isFinite(lat) && Number.isFinite(lon) ? `https://www.openstreetmap.org/#map=5/${lat}/${lon}` : ""
    };
  } catch (error) {
    console.warn("Country metadata unavailable:", error);
    return fallback;
  }
}
function countryMapMarkup(meta, country) {
  const lang = currentLang();
  if (meta?.latlng?.length >= 2) {
    const [lat, lon] = meta.latlng;
    const bbox = `${lon - 18},${lat - 10},${lon + 18},${lat + 10}`;
    return `
      <div class="country-map-frame">
        <iframe title="${escapeAttribute(countryNameFromCode(country, lang))} map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${encodeURIComponent(`${lat},${lon}`)}"></iframe>
      </div>
      <a class="source-link" href="${escapeAttribute(meta.mapUrl || `https://www.openstreetmap.org/#map=5/${lat}/${lon}`)}" target="_blank" rel="noopener">OpenStreetMap</a>
    `;
  }
  return `<div class="country-map-fallback"><strong>${lang === "ko" ? "지도 위치를 불러올 수 없습니다." : "Map location unavailable."}</strong><span>${lang === "ko" ? "프로필 데이터와 도구는 계속 사용할 수 있습니다." : "The profile data and tools remain available."}</span></div>`;
}

function countryOverviewMarkup(country, meta) {
  const lang = currentLang();
  const localizedName = countryNameFromCode(country, lang);
  const rows = lang === "ko"
    ? [["영문명", meta.name], ["공식명", meta.officialName], ["ISO code", meta.iso], ["수도", meta.capital], ["지역", meta.region], ["소득분류", meta.incomeGroup], ["언어", meta.languages], ["통화", meta.currency]]
    : [["Country name", localizedName], ["Official name", meta.officialName], ["ISO code", meta.iso], ["Capital", meta.capital], ["Region", meta.region], ["Income Group", meta.incomeGroup], ["Languages", meta.languages], ["Currency", meta.currency]];
  return `
    <section class="country-overview-grid" aria-label="${lang === "ko" ? "국가 개요" : "Country overview"}">
      <div class="country-overview-card">
        <div class="country-identity">
          ${meta.flagPng || meta.flagSvg ? `<img src="${escapeAttribute(meta.flagSvg || meta.flagPng)}" alt="${escapeAttribute(meta.flagAlt)}" loading="lazy">` : `<span class="flag-fallback">${escapeHtml(country)}</span>`}
          <div><span class="kicker">Country Overview</span><h2>${escapeHtml(localizedName)}</h2></div>
        </div>
        <dl class="country-facts">${rows.filter(([, value]) => value).map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl>
      </div>
      <div class="country-map-card"><span class="kicker">Map</span>${countryMapMarkup(meta, country)}</div>
    </section>
  `;
}

function tradeSnapshotMarkup(records) {
  const lang = currentLang();
  const byLabel = new Map(records.map((row) => [row.label, row]));
  const exports = byLabel.get("Exports of goods and services");
  const imports = byLabel.get("Imports of goods and services");
  const balance = byLabel.get("Trade Balance");
  const exportGrowth = byLabel.get("Export Growth");
  const importGrowth = byLabel.get("Import Growth");
  const tradeShare = byLabel.get("Trade (% of GDP)");
  const facts = [];
  if (Number.isFinite(balance?.value)) {
    const surplus = balance.value >= 0;
    facts.push({
      title: lang === "ko" ? "Trade Balance" : "Trade Balance",
      text: lang === "ko"
        ? `${balance.year}년 기준 상품·서비스 무역수지는 ${formatIndicatorValue(balance, { compact: true })} ${surplus ? "흑자" : "적자"}입니다.`
        : `In ${balance.year}, the goods and services trade balance was a ${formatIndicatorValue(balance, { compact: true })} ${surplus ? "surplus" : "deficit"}.`
    });
  }
  if (Number.isFinite(exports?.value) && Number.isFinite(imports?.value) && exports.year === imports.year) {
    facts.push({
      title: lang === "ko" ? "Export / Import Scale" : "Export / Import Scale",
      text: lang === "ko"
        ? `${exports.year}년 수출은 ${formatIndicatorValue(exports, { compact: true })}, 수입은 ${formatIndicatorValue(imports, { compact: true })}입니다.`
        : `In ${exports.year}, exports were ${formatIndicatorValue(exports, { compact: true })} and imports were ${formatIndicatorValue(imports, { compact: true })}.`
    });
  }
  if (Number.isFinite(exportGrowth?.value) && Number.isFinite(importGrowth?.value)) {
    const diff = Math.abs(exportGrowth.value - importGrowth.value);
    const exportHigher = exportGrowth.value >= importGrowth.value;
    facts.push({
      title: lang === "ko" ? "Growth Comparison" : "Growth Comparison",
      text: lang === "ko"
        ? `최신 수출 증가율은 ${formatIndicatorValue(exportGrowth)}, 수입 증가율은 ${formatIndicatorValue(importGrowth)}로, ${exportHigher ? "수출" : "수입"} 증가율이 ${formatRate(diff, 2)}%p 높습니다.`
        : `The latest export growth rate is ${formatIndicatorValue(exportGrowth)} and import growth is ${formatIndicatorValue(importGrowth)}, so ${exportHigher ? "export" : "import"} growth is higher by ${formatRate(diff, 2)} percentage points.`
    });
  }
  if (Number.isFinite(tradeShare?.value)) {
    facts.push({
      title: lang === "ko" ? "Trade Share" : "Trade Share",
      text: lang === "ko"
        ? `${tradeShare.year}년 상품·서비스 무역 규모는 GDP의 ${formatIndicatorValue(tradeShare)}로 표시됩니다.`
        : `In ${tradeShare.year}, goods and services trade was reported at ${formatIndicatorValue(tradeShare)} of GDP.`
    });
  }
  return `
    <section class="country-profile-section">
      <h2>${lang === "ko" ? "Trade Snapshot" : "Trade Snapshot"}</h2>
      <div class="trade-fact-list">${facts.map((fact) => `<article><strong>${escapeHtml(fact.title)}</strong><p>${escapeHtml(fact.text)}</p></article>`).join("") || `<article><p>${lang === "ko" ? "선택 국가의 비교 가능한 수출입 지표가 부족합니다." : "Comparable export and import indicators are not available for this country."}</p></article>`}</div>
    </section>
  `;
}
function countryToolsMarkup(country) {
  const lang = currentLang();
  const currency = COUNTRY_CURRENCY[country] || "USD";
  const countryLabel = countryNameFromCode(country, lang);
  const tools = [
    [lang === "ko" ? "해당 국가 Trade Statistics" : "Country trade statistics", `country-trade-profile.html?country=${country}`, "globe"],
    [lang === "ko" ? "Public Holidays" : "Public holidays", `holidays.html?country=${country}`, "calendar-check"],
    [lang === "ko" ? "Major Ports" : "Major ports", `ports.html?country=${country}`, "anchor"],
    [`USD/${currency} ${lang === "ko" ? "환율 계산" : "currency check"}`, `currency-converter.html?from=USD&to=${currency}`, "badge-dollar-sign"],
    [lang === "ko" ? "HS Code Search" : "HS Code search", lang === "ko" ? "../hscode.html" : "../hscode-en.html", "barcode"]
  ];
  if (EU_COUNTRY_CODES.has(country)) tools.push([lang === "ko" ? "EU Trade Explorer" : "EU Trade Explorer", `eu-trade-explorer.html?reporter=${country}`, "chart-column"]);
  return `
    <section class="country-profile-section">
      <h2>${lang === "ko" ? "Trade & Logistics Tools" : "Trade & Logistics Tools"}</h2>
      <p class="muted">${lang === "ko" ? `${countryLabel} 조사에서 다음 단계로 이어질 수 있는 LOGILEE 도구입니다.` : `LOGILEE tools that can support the next step of ${countryLabel} research.`}</p>
      <div class="country-tool-grid">${tools.map(([label, href, icon]) => `<a href="${href}"><i data-lucide="${icon}"></i><strong>${escapeHtml(label)}</strong></a>`).join("")}</div>
    </section>
  `;
}

function countryPortsMarkup(country) {
  const lang = currentLang();
  const ports = ALL_PORTS.filter((port) => port.iso === country).slice(0, 8);
  return `
    <section class="country-profile-section">
      <h2>${lang === "ko" ? "Major Ports" : "Major Ports"}</h2>
      ${ports.length ? `<div class="major-port-grid">${ports.map((port) => `<a href="${PORT_DETAIL_SLUGS.has(port.slug) ? `ports/${port.slug}.html` : `ports.html?q=${encodeURIComponent(port.name)}`}"><strong>${escapeHtml(port.name)}</strong><span>${escapeHtml(port.locode)} · ${escapeHtml(port.type)}</span></a>`).join("")}</div>` : `<div class="data-empty">${lang === "ko" ? "이 국가에 등록된 LOGILEE 항만 데이터가 아직 없습니다." : "No LOGILEE port records are registered for this country yet."}</div>`}
    </section>
  `;
}

function dataSourcesMarkup(meta) {
  const lang = currentLang();
  return `
    <section class="country-profile-section source-notes">
      <h2>${lang === "ko" ? "Sources & Data Notes" : "Sources & Data Notes"}</h2>
      <div class="source-note-grid">
        <div><strong>Economic & Trade Data</strong><a href="https://data.worldbank.org/" target="_blank" rel="noopener">World Bank</a></div>
        <div><strong>Country Metadata</strong><a href="https://data.worldbank.org/country" target="_blank" rel="noopener">World Bank + LOGILEE local reference</a></div>
        <div><strong>Map</strong><a href="https://www.openstreetmap.org/" target="_blank" rel="noopener">OpenStreetMap</a></div>
        <div><strong>Flag</strong><a href="https://flagcdn.com/" target="_blank" rel="noopener">FlagCDN</a></div>
      </div>
      <p class="muted">${lang === "ko" ? "외부 데이터 제공 상태에 따라 일부 정보의 업데이트 시점이 다를 수 있습니다. 각 지표의 표시 연도를 확인하고, 실제 거래 전 최신 규제·관세·통관 조건은 공식 채널에서 별도로 확인하세요." : "Update timing can differ across external data providers. Check the displayed year for each indicator and confirm current regulations, tariffs, and customs conditions through official channels before a transaction."}</p>
    </section>
  `;
}
function countryRelatedMarkup(country) {
  const currency = COUNTRY_CURRENCY[country] || "USD";
  const lang = currentLang();
  const labels = lang === "ko"
    ? ["Related Logistics Data", "Public Holidays", "Major Ports", `USD/${currency} Currency Converter`, "Trade Statistics", "EU Trade Explorer"]
    : ["Related Logistics Data", "Public Holidays", "Major Ports", `USD/${currency} Currency Converter`, "Trade Statistics", "EU Trade Explorer"];
  const countryPorts = ALL_PORTS.filter((port) => port.iso === country).slice(0, 8);
  return `
    <div class="related-links">
      <h3>${labels[0]}</h3>
      <a href="holidays.html?country=${country}">${countryNameFromCode(country, lang)} ${labels[1]}</a>
      <a href="ports.html?country=${country}">${countryNameFromCode(country, lang)} ${labels[2]}</a>
      <a href="currency-converter.html?from=USD&to=${currency}">${labels[2 + 1]}</a>
      <a href="country-trade-profile.html?country=${country}">${countryNameFromCode(country, lang)} ${labels[4]}</a>
      <a href="eu-trade-explorer.html?reporter=${country}">${labels[5]}</a>
    </div>
    ${countryPorts.length ? `
      <div class="related-links major-port-links">
        <h3>${labels[2]}</h3>
        ${countryPorts.map((port) => `<a href="ports.html?q=${encodeURIComponent(port.name)}">${port.name} · ${port.locode}</a>`).join("")}
      </div>
    ` : ""}
  `;
}

async function wireCountryProfile() {
  const form = document.querySelector("[data-country-profile-form]");
  if (!form) return;
  populateCountrySelects();
  const select = form.querySelector("[data-country-select]");
  const output = document.querySelector("[data-country-profile-output]");
  const lang = currentLang();
  const labels = lang === "ko"
    ? {
        loading: "국가 프로필 데이터를 불러오는 중입니다...",
        unavailable: "국가 무역 프로필 데이터를 일시적으로 불러올 수 없습니다.",
        economic: "Economic & Trade Snapshot",
        detailed: "Detailed Indicators",
        indicator: "Indicator",
        value: "Value",
        readable: "Readable value",
        unit: "Unit",
        year: "Latest available year"
      }
    : {
        loading: "Loading country profile data...",
        unavailable: "Country trade profile data is temporarily unavailable.",
        economic: "Economic & Trade Snapshot",
        detailed: "Detailed Indicators",
        indicator: "Indicator",
        value: "Value",
        readable: "Readable value",
        unit: "Unit",
        year: "Latest available year"
      };
  const render = async () => {
    output.innerHTML = `<div class="data-empty">${labels.loading}</div>`;
    try {
      const country = select.value;
      const [records, meta] = await Promise.all([getWorldBankRecords(country), getCountryMetadata(country)]);
      const priority = ["Population", "GDP", "GDP Growth", "Inflation", "Trade (% of GDP)", "Exports of goods and services", "Imports of goods and services", "Trade Balance", "Export Growth", "Import Growth"];
      const byLabel = new Map(records.map((row) => [row.label, row]));
      output.innerHTML = `
        ${countryOverviewMarkup(country, meta)}
        <section class="country-profile-section">
          <h2>${labels.economic}</h2>
          <div class="stat-grid country-kpi-grid">
            ${priority.map((label) => {
              const row = byLabel.get(label);
              return `<div class="stat-block"><span>${escapeHtml(label)}</span><strong>${formatIndicatorValue(row, { compact: true })}</strong><small>${escapeHtml(indicatorUnit(label))} · ${escapeHtml(row?.year || "N/A")}</small></div>`;
            }).join("")}
          </div>
        </section>
        ${tradeSnapshotMarkup(records)}
        ${countryToolsMarkup(country)}
        ${countryPortsMarkup(country)}
        <section class="country-profile-section">
          <h2>${labels.detailed}</h2>
          <div class="responsive-table"><table class="result-table"><thead><tr><th>${labels.indicator}</th><th>${labels.readable}</th><th>${labels.value}</th><th>${labels.unit}</th><th>${labels.year}</th></tr></thead>
          <tbody>${records.map((row) => `<tr><td>${escapeHtml(row.label)}</td><td>${formatIndicatorValue(row, { compact: true })}</td><td>${plainIndicatorValue(row)}</td><td>${escapeHtml(indicatorUnit(row.label))}</td><td>${escapeHtml(row.year)}</td></tr>`).join("")}</tbody></table></div>
        </section>
        ${dataSourcesMarkup(meta)}
      `;
      refreshIcons();
    } catch (error) {
      console.warn("Country profile unavailable:", error);
      dataError(output, labels.unavailable);
    }
  };
  const updateUrlAndRender = (country, { push = true } = {}) => {
    const url = new URL(location.href);
    if (country) url.searchParams.set("country", country);
    if (push) history.pushState({ country }, "", url); else history.replaceState({ country }, "", url);
    render();
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    updateUrlAndRender(select.value, { push: false });
  });
  enhanceCountryCombobox(select, (country, options) => updateUrlAndRender(country, options));
  window.addEventListener("popstate", () => {
    const country = new URLSearchParams(location.search).get("country")?.toUpperCase();
    if (country && [...select.options].some((option) => option.value === country)) {
      select.value = country;
      select.updateComboboxLabel?.();
      render();
    }
  });
  render();
}
async function wireCountryCompare() {
  const form = document.querySelector("[data-country-compare-form]");
  if (!form) return;
  populateCountrySelects();
  const params = new URLSearchParams(location.search);
  const a = form.querySelector("[data-country-a]");
  const b = form.querySelector("[data-country-b]");
  if (a && params.get("a")) a.value = params.get("a");
  if (b && params.get("b")) b.value = params.get("b");
  const output = document.querySelector("[data-country-compare-output]");
  const render = async () => {
    output.innerHTML = `<div class="data-empty">Loading...</div>`;
    try {
      const countryA = a.value;
      const countryB = b.value;
      const [recordsA, recordsB] = await Promise.all([getWorldBankRecords(countryA), getWorldBankRecords(countryB)]);
      const byLabelA = new Map(recordsA.map((row) => [row.label, row]));
      const byLabelB = new Map(recordsB.map((row) => [row.label, row]));
      const labels = ["Population", "GDP", "GDP Growth", "Inflation", "Trade (% of GDP)", "Exports of goods and services", "Imports of goods and services"];
      output.innerHTML = `
        <table class="result-table"><thead><tr><th>Indicator</th><th>${countryNameFromCode(countryA)}</th><th>${countryNameFromCode(countryB)}</th></tr></thead>
        <tbody>${labels.map((label) => {
          const left = byLabelA.get(label);
          const right = byLabelB.get(label);
          const formatCell = (row) => row && row.value !== null && row.value !== undefined ? `${formatRate(row.value, row.digits)} (${row.year})` : "N/A";
          return `<tr><td>${label}</td><td>${formatCell(left)}</td><td>${formatCell(right)}</td></tr>`;
        }).join("")}</tbody></table>
        <p class="muted">Economic data: World Bank. Each cell shows the latest available year for that indicator.</p>
      `;
    } catch (error) {
      console.warn("Country compare unavailable:", error);
      dataError(output, "Country comparison data is temporarily unavailable.");
    }
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = new URL(location.href);
    url.searchParams.set("a", a.value);
    url.searchParams.set("b", b.value);
    history.replaceState(null, "", url);
    render();
  });
  render();
}

function portDetailUrl(port) {
  const prefix = location.pathname.includes("/ko/") ? "ports/" : "ports/";
  return `${prefix}${port.slug}.html`;
}

function localTimeForPort(port) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: port.timezone,
      timeZoneName: "short"
    }).format(new Date());
  } catch {
    return "N/A";
  }
}

const PORT_SEO_COPY = {
  busan: [
    "Port of Busan is South Korea's primary ocean gateway and a practical starting point for Northeast Asia routing checks. It is commonly used in export, import, and transshipment planning where Korean manufacturing, distribution, and customs schedules matter.",
    "Use this page to confirm the port identity, UN/LOCODE, country context, holidays, currency reference, and nearby Korean ports before moving into carrier booking, customs filing, or partner-specific documentation."
  ],
  shanghai: [
    "Port of Shanghai sits within one of China's most important manufacturing and distribution regions. For logistics teams, it is often a reference point when comparing East China routings, supplier lead times, and inland connection assumptions.",
    "The page connects the port record to China country indicators, holiday checks, currency conversion, and trade data tools so operational research can move from a port code to broader market context."
  ],
  singapore: [
    "Port of Singapore is a major Southeast Asia logistics hub used for regional consolidation, transshipment planning, and trade lane comparisons. Its location makes it relevant when reviewing routings between Asia, Europe, the Middle East, and Oceania.",
    "Use the related tools to pair port identity with Singapore country data, public holidays, USD/SGD planning rates, and wider trade references before confirming a carrier or forwarder schedule."
  ],
  rotterdam: [
    "Port of Rotterdam is a key European gateway for ocean freight moving into the Netherlands and wider continental Europe. It is useful for comparing EU entry points, inland distribution options, and market access assumptions.",
    "This reference links the port record with Netherlands indicators, holidays, currency planning, and EU trade statistics so the port can be reviewed alongside broader commercial context."
  ],
  "los-angeles": [
    "Port of Los Angeles is a major U.S. West Coast gateway for Pacific trade lanes and North American distribution planning. It is especially relevant when comparing arrival ports, inland movement, and U.S. market lead-time assumptions.",
    "Use the page as a quick identity check before confirming carrier details, customs documentation, public holiday timing, and USD-based cost comparisons."
  ],
  "ningbo-zhoushan": [
    "Ningbo-Zhoushan Port serves an important East China coastal region and is often reviewed alongside Shanghai for supplier and routing decisions. It can be relevant for ocean freight moving through Zhejiang and nearby manufacturing areas.",
    "The page keeps the operational basics in one place: UN/LOCODE, coordinates, country tools, holiday context, currency reference, and links into trade statistics."
  ],
  hamburg: [
    "Port of Hamburg is a major North European gateway with strong relevance for German and Central European logistics planning. It is useful when checking EU market access, inland connection assumptions, and Germany-related trade context.",
    "Review the port data together with German holidays, country indicators, and Eurostat trade values before using the information in a shipment plan or documentation workflow."
  ],
  "long-beach": [
    "Port of Long Beach is an important U.S. West Coast container gateway located near Los Angeles. Logistics teams often review it together with neighboring Southern California ports for routing, drayage, and distribution planning.",
    "This page links the port identifier to U.S. country data, holiday checks, currency planning, and related port records so users can move from a port search to operational context."
  ],
  "jebel-ali": [
    "Jebel Ali Port is a major Middle East logistics hub and a common reference point for Gulf, Africa, South Asia, and Europe trade lane planning. It is useful when reviewing regional consolidation and re-export workflows.",
    "Use the page to pair the port code with United Arab Emirates country indicators, holidays, currency context, and related tools before final booking or documentation checks."
  ],
  "cat-lai": [
    "Ho Chi Minh City / Cat Lai is a practical port reference for southern Vietnam trade and manufacturing supply chains. It is often considered when reviewing Vietnam sourcing, export preparation, and regional Southeast Asia logistics options.",
    "The page connects the port record to Vietnam country data, public holidays, currency planning, and trade exploration tools so users can keep market and port context together."
  ]
};

function portCard(port) {
  const countryParam = port.iso;
  const currency = COUNTRY_CURRENCY[countryParam] || "USD";
  return `
    <article class="port-row">
      <div><strong><a href="${portDetailUrl(port)}">${port.name}</a></strong><small>${port.region} · ${port.type}</small></div>
      <span>${port.country}</span>
      <span>${port.locode}</span>
      <span>${port.timezone}</span>
      <details>
        <summary>View</summary>
        <div class="port-row-detail">
          <span>Coordinates: ${port.lat.toFixed(2)}, ${port.lon.toFixed(2)}</span>
          <a href="country-trade-profile.html?country=${countryParam}">${port.country} Profile</a>
          <a href="holidays.html?country=${countryParam}">Holidays</a>
          <a href="currency-converter.html?from=USD&to=${currency}">USD/${currency}</a>
          <a href="eu-trade-explorer.html?reporter=${port.iso}">EU Trade</a>
        </div>
      </details>
    </article>
  `;
}

function filterPorts(query, country = "") {
  const normalized = query.trim().toLowerCase();
  return ALL_PORTS.filter((port) => {
    const countryMatch = !country || port.iso === country;
    const haystack = `${port.name} ${(port.aliases || []).join(" ")} ${port.city || ""} ${port.country} ${port.iso} ${port.locode} ${port.region}`.toLowerCase();
    return countryMatch && (!normalized || haystack.includes(normalized));
  });
}

function wirePortFinder() {
  const form = document.querySelector("[data-port-search-form]");
  const output = document.querySelector("[data-port-results]");
  if (!form || !output) return;
  populateCountrySelects();
  const params = new URLSearchParams(location.search);
  const input = form.querySelector("[data-port-query]");
  const country = form.querySelector("[data-country-select]");
  if (input && params.get("q")) input.value = params.get("q");
  if (country && params.get("country")) country.value = params.get("country");
  let visibleCount = 24;
  const render = () => {
    const results = filterPorts(input?.value || "", country?.value || "");
    const visibleResults = results.slice(0, visibleCount);
    output.innerHTML = results.length
      ? `
        <div class="port-table" role="table" aria-label="Port results">
          <div class="port-row port-row-head" role="row"><span>Port</span><span>Country</span><span>UN/LOCODE</span><span>Time Zone</span><span>Actions</span></div>
          ${visibleResults.map(portCard).join("")}
        </div>
        ${results.length > visibleCount ? `<button class="secondary-btn port-load-more" type="button" data-port-load-more>Load more</button>` : ""}
      `
      : `<div class="data-empty">No matching ports found.</div>`;
    const count = document.querySelector("[data-port-count]");
    if (count) count.textContent = `${results.length} ports`;
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    visibleCount = 24;
    const url = new URL(location.href);
    if (input?.value) url.searchParams.set("q", input.value); else url.searchParams.delete("q");
    if (country?.value) url.searchParams.set("country", country.value); else url.searchParams.delete("country");
    history.replaceState(null, "", url);
    render();
  });
  form.addEventListener("input", () => {
    visibleCount = 24;
    render();
  });
  output.addEventListener("click", (event) => {
    if (!event.target.closest("[data-port-load-more]")) return;
    visibleCount += 24;
    render();
  });
  render();
}

function wirePortDetail() {
  const target = document.querySelector("[data-port-detail]");
  if (!target) return;
  const slug = target.dataset.portDetail;
  const port = ALL_PORTS.find((item) => item.slug === slug);
  if (!port) {
    dataError(target, "Port data is unavailable.");
    return;
  }
  const currency = COUNTRY_CURRENCY[port.iso] || "USD";
  target.innerHTML = `
    <section class="page-title">
      <p class="eyebrow">Port Overview</p>
      <h1>${port.name}</h1>
      <p class="lead">${port.name} is a major ${port.region} logistics hub. Use this page as a reference for port identity, coordinates, country context, holidays, currency, trade statistics, and related ports.</p>
    </section>
    <section class="panel">
      <div class="grid cols-3">
        <div><strong>UN/LOCODE</strong><p>${port.locode}</p></div>
        <div><strong>Country</strong><p>${port.country} (${port.iso})</p></div>
        <div><strong>Coordinates</strong><p>${port.lat.toFixed(2)}, ${port.lon.toFixed(2)}</p></div>
        <div><strong>Time Zone</strong><p>${port.timezone}</p></div>
        <div><strong>Local Time</strong><p>${localTimeForPort(port)}</p></div>
        <div><strong>Port Type</strong><p>${port.type}</p></div>
      </div>
    </section>
    <section class="panel prose-panel">
      <h2>Logistics role</h2>
      ${(PORT_SEO_COPY[port.slug] || [
        `${port.name} is a ${port.type.toLowerCase()} in ${port.region}. Use it as a reference point when comparing port identity, country context, holidays, currency, and related logistics data.`,
        "Confirm final operational details with carriers, forwarders, terminal notices, and official documentation sources before using the port in a booking or customs workflow."
      ]).map((paragraph) => `<p>${paragraph}</p>`).join("")}
      <h2>Related Trade Data</h2>
      <div class="chip-row">
        <a class="chip" href="../country-trade-profile.html?country=${port.iso}">${port.country} Profile</a>
        <a class="chip" href="../holidays.html?country=${port.iso}">${port.country} Holidays</a>
        <a class="chip" href="../currency-converter.html?from=USD&to=${currency}">USD/${currency}</a>
        <a class="chip" href="../global-trade-explorer.html?reporter=${port.iso}">Global Trade Statistics</a>
        <a class="chip" href="../eu-trade-explorer.html?reporter=${port.iso}">EU Trade Explorer</a>
      </div>
      <p>Port data is stored locally for speed and to avoid unnecessary API calls. Confirm official port identifiers before customs filing or carrier documentation.</p>
      <h2>Related Ports</h2>
      <div class="chip-row">
        ${ALL_PORTS.filter((item) => item.iso === port.iso && item.slug !== port.slug).slice(0, 6).map((item) => `<a class="chip" href="../ports.html?q=${encodeURIComponent(item.name)}">${item.name}</a>`).join("") || `<a class="chip" href="../ports.html?country=${port.iso}">View country ports</a>`}
      </div>
    </section>
  `;
}

function renderPortWeather() {
  const target = document.querySelector("[data-port-weather]");
  if (!target) return;
  const selected = new URLSearchParams(location.search).get("port");
  const ports = selected ? ALL_PORTS.filter((port) => port.slug === selected) : [];
  target.innerHTML = `
    ${ports.length ? `<p><strong>${ports[0].name}</strong> · ${ports[0].country} · ${ports[0].locode}</p>` : ""}
    <div class="notice">Weather data integration is planned.</div>
  `;
}

const EUROSTAT_REPORTERS = [
  ["DE", "Germany", "독일"],
  ["NL", "Netherlands", "네덜란드"],
  ["FR", "France", "프랑스"],
  ["IT", "Italy", "이탈리아"],
  ["ES", "Spain", "스페인"],
  ["BE", "Belgium", "벨기에"],
  ["PL", "Poland", "폴란드"]
];

const EUROSTAT_PARTNERS = [
  ["WORLD", "World", "전 세계"],
  ["EXT_EU27_2020", "Extra-EU27", "EU27 역외"],
  ["EU27_2020", "EU27", "EU27"],
  ["EXT_EA21", "Extra-euro area", "유로존 역외"]
];

const EUROSTAT_PRODUCTS = [
  ["TOTAL", "Total - all products", "전체 상품"],
  ["SITC0_1", "Food, drinks and tobacco", "식품, 음료, 담배"],
  ["SITC2_4", "Raw materials", "원재료"],
  ["SITC3", "Mineral fuels and related materials", "광물성 연료"],
  ["SITC5", "Chemicals and related products", "화학제품"],
  ["SITC6_8", "Other manufactured goods", "기타 제조품"],
  ["SITC7", "Machinery and transport equipment", "기계 및 운송장비"],
  ["SITC9", "Unclassified commodities", "기타 미분류 상품"]
];

function optionMarkup(options) {
  const lang = currentLang();
  return options.map(([value, en, ko]) => `<option value="${value}">${lang === "ko" ? ko : en}</option>`).join("");
}

function eurostatCategoryLabel(data, dimension, code) {
  return data?.dimension?.[dimension]?.category?.label?.[code] || code;
}

function firstEurostatValue(data) {
  if (!data?.value) return null;
  if (Array.isArray(data.value)) return data.value.find((value) => value !== null && value !== undefined);
  const firstKey = Object.keys(data.value)[0];
  return firstKey ? data.value[firstKey] : null;
}

function formatEurostatMillionEur(value) {
  if (!Number.isFinite(value)) return "N/A";
  const raw = `${formatRate(value, 1)} million EUR`;
  if (Math.abs(value) >= 1000000) return `${raw} (approx. ${formatRate(value / 1000000, 2)} trillion EUR)`;
  if (Math.abs(value) >= 1000) return `${raw} (approx. ${formatRate(value / 1000, 2)} billion EUR)`;
  return raw;
}

async function getEurostatTrade({ reporter, partner, product, year, flow }) {
  const indicator = flow === "import" ? "MIO_IMP_VAL" : "MIO_EXP_VAL";
  const params = new URLSearchParams({
    format: "JSON",
    lang: "EN",
    freq: "A",
    geo: reporter,
    partner,
    sitc06: product,
    indic_et: indicator,
    time: year
  });
  const url = `https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/ext_lt_intertrd?${params}`;
  const data = await fetchJson(url, {
    cacheKey: `logilee:eurostat:${reporter}:${partner}:${product}:${year}:${flow}`,
    ttl: 12 * 60 * 60 * 1000,
    timeout: 12000
  });
  const value = firstEurostatValue(data);
  return {
    dataset: "ext_lt_intertrd",
    updated: data.updated || "",
    reporter: eurostatCategoryLabel(data, "geo", reporter),
    partner: eurostatCategoryLabel(data, "partner", partner),
    product: eurostatCategoryLabel(data, "sitc06", product),
    flow: eurostatCategoryLabel(data, "indic_et", indicator),
    year,
    value
  };
}

function wireEuTradeExplorer() {
  const form = document.querySelector("[data-eu-trade-form]");
  if (!form) return;
  const params = new URLSearchParams(location.search);
  const reporter = form.querySelector("[name='reporter']");
  const partner = form.querySelector("[name='partner']");
  const product = form.querySelector("[name='product']");
  const year = form.querySelector("[name='year']");
  const flow = form.querySelector("[name='flow']");
  const output = document.querySelector("[data-eu-trade-output]");
  reporter.innerHTML = optionMarkup(EUROSTAT_REPORTERS);
  partner.innerHTML = optionMarkup(EUROSTAT_PARTNERS);
  product.innerHTML = optionMarkup(EUROSTAT_PRODUCTS);
  reporter.value = "DE";
  partner.value = "WORLD";
  product.value = "TOTAL";
  flow.value = "export";
  if (!year.value) year.value = "2023";
  ["reporter", "partner", "product", "year", "flow"].forEach((name) => {
    const field = form.querySelector(`[name='${name}']`);
    const value = params.get(name);
    if (!value || !field) return;
    if (field.tagName === "SELECT" && ![...field.options].some((option) => option.value === value)) return;
    field.value = value;
  });
  const render = async () => {
    const selectedYear = String(year.value || "").trim();
    if (!/^\d{4}$/.test(selectedYear) || Number(selectedYear) < 2010 || Number(selectedYear) > new Date().getFullYear()) {
      dataError(output, currentLang() === "ko" ? "연도는 2010년 이후의 4자리 값으로 입력해 주세요." : "Enter a four-digit year from 2010 onward.");
      return;
    }
    output.innerHTML = `<div class="data-empty">${currentLang() === "ko" ? "Eurostat 데이터를 불러오는 중입니다..." : "Loading Eurostat data..."}</div>`;
    try {
      const result = await getEurostatTrade({
        reporter: reporter.value,
        partner: partner.value,
        product: product.value,
        year: selectedYear,
        flow: flow.value
      });
      output.innerHTML = `
        <div class="eu-result-summary">
          <span class="kicker">${result.dataset}</span>
          <h2>${result.reporter} → ${result.partner}</h2>
          <div class="stat-grid compact-stat-grid">
            <div class="stat-block"><span>${result.flow}</span><strong>${formatEurostatMillionEur(result.value)}</strong><small>${result.year}</small></div>
            <div class="stat-block"><span>Product Group</span><strong>${result.product}</strong><small>SITC aggregate</small></div>
            <div class="stat-block"><span>Updated</span><strong>${result.updated || "Latest available"}</strong><small>Eurostat metadata</small></div>
          </div>
        </div>
        <div class="responsive-table"><table class="result-table">
          <thead><tr><th>Reporter</th><th>Partner</th><th>Product</th><th>Year</th><th>Flow</th><th>Trade Value</th><th>Source</th></tr></thead>
          <tbody><tr>
            <td>${result.reporter}</td>
            <td>${result.partner}</td>
            <td>${result.product}</td>
            <td>${result.year}</td>
            <td>${result.flow}</td>
            <td>${formatEurostatMillionEur(result.value)}</td>
            <td>Eurostat</td>
          </tr></tbody>
        </table></div>
        <p class="muted">Dataset: ${result.dataset}. Updated: ${result.updated || "latest available"}. Product groups use SITC categories, not HS/CN line codes.</p>
      `;
    } catch (error) {
      console.warn("Eurostat trade unavailable:", error);
      dataError(output, currentLang() === "ko" ? "Eurostat 데이터를 일시적으로 불러올 수 없습니다." : "Eurostat data is temporarily unavailable.");
    }
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = new URL(location.href);
    ["reporter", "partner", "product", "year", "flow"].forEach((name) => {
      const field = form.querySelector(`[name='${name}']`);
      if (field?.value) url.searchParams.set(name, field.value); else url.searchParams.delete(name);
    });
    history.replaceState(null, "", url);
    render();
  });
  render();
}

function wireTradeExplorerParams() {
  const form = document.querySelector("[data-trade-explorer-form]");
  if (!form) return;
  const params = new URLSearchParams(location.search);
  form.querySelectorAll("[name]").forEach((field) => {
    const value = params.get(field.name);
    if (value) field.value = value;
  });
  const output = document.querySelector("[data-trade-explorer-output]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = new URL(location.href);
    form.querySelectorAll("[name]").forEach((field) => {
      if (field.value) url.searchParams.set(field.name, field.value); else url.searchParams.delete(field.name);
    });
    history.replaceState(null, "", url);
    if (output) output.innerHTML = `<div class="data-empty">${currentLang() === "ko" ? "쿼리가 준비되었습니다. 현재 이 페이지는 실시간 UN Comtrade 데이터를 제공하지 않으며, 데이터 연결을 준비 중입니다." : "Query prepared. This page does not provide live UN Comtrade data yet; the data connection is in preparation."}</div>`;
  });
}

async function wireNewsPage() {
  const target = document.querySelector("[data-news-page]");
  if (!target) return;
  const lang = currentLang();
  const query = target.dataset.newsQuery || (lang === "ko" ? "무역 물류" : "global trade logistics");
  const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=${lang === "ko" ? "ko" : "en"}&gl=${lang === "ko" ? "KR" : "US"}&ceid=${lang === "ko" ? "KR:ko" : "US:en"}`;
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
  try {
    const data = await fetchJson(apiUrl, { cacheKey: `logilee:newspage:${lang}:${query}`, ttl: 20 * 60 * 1000 });
    const items = Array.isArray(data.items) ? data.items.slice(0, 12) : [];
    target.innerHTML = items.length ? items.map((item) => {
      const parsed = splitNewsTitle(item.title);
      const time = formatNewsTime(item.pubDate, lang);
      const category = newsCategory(item, parsed, lang);
      const originalLabel = lang === "ko" ? "원문 기사 보기" : "Original Article";
      return `
        <a class="result-item news-result-card" href="${escapeAttribute(item.link)}" target="_blank" rel="noopener">
          ${newsThumb(item, parsed, { lang, category, fallbackLabel: "LOGILEE NEWS" })}
          <div class="news-result-copy">
            <span class="kicker">${escapeHtml([parsed.source || "News", time].filter(Boolean).join(" · "))}</span>
            <h3>${escapeHtml(parsed.headline)}</h3>
            <p class="muted">${escapeHtml(category.label)} · ${escapeHtml(originalLabel)}</p>
            <span class="news-original-link">${escapeHtml(originalLabel)} →</span>
          </div>
        </a>
      `;
    }).join("") : `<div class="data-empty">No news items available.</div>`;
    wireNewsImageFallbacks(target);
  } catch (error) {
    console.warn("News page unavailable:", error);
    dataError(target, "News source unavailable.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ensureIconLibrary();
  ensureGlobalSidebar();
  ensureGlobalHeader();
  enhanceSidebar();
  refreshIcons();
  wireMenu();
  wireSidebarCollapse();
  setupLanguageChoice();
  setupLanguageMenu();
  setupAdSlots();
  wireHeaderSearch();
  wireSearch();
  loadHomeMarket();
  loadHomeNews();
  setupLatestPosting();
  setupPostsArchive();
  wireCbm();
  wireTracking();
  wireDictionary();
  loadExchangePage();
  wireCurrencyConverter();
  wireHolidayCalendar();
  wireBusinessDay();
  wireCountryProfile();
  wireCountryCompare();
  wireFreightMarket();
  wirePortFinder();
  wirePortDetail();
  renderPortWeather();
  wireEuTradeExplorer();
  wireTradeExplorerParams();
  wireNewsPage();
});