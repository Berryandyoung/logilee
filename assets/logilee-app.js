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
    { type: "Tool", title: "Airport Intelligence", summary: "공항명, 도시, IATA·ICAO 코드로 주요 공항 프로필을 확인합니다.", url: "airports.html", keywords: "airport search 공항 검색 iata icao 공항 코드 airport intelligence" },
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
    { type: "Tool", title: "Airport Intelligence", summary: "Search major airport profiles by airport name, city, IATA code, or ICAO code.", url: "airports.html", keywords: "airport search iata icao airport code airport intelligence" },
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

function logileeAssetUrl(file) {
  const normalized = String(file || "").replace(/^\/+/, "");
  return `${/^\/(?:ko|en)\//.test(location.pathname) ? "../assets/" : "assets/"}${normalized}`;
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
  const preservePageState = (href) => {
    if (!/(?:\/ko\/|\/en\/)(?:airports|compliance)\.html$/.test(location.pathname) || (!location.search && !location.hash)) return href;
    try {
      const url = new URL(href, location.origin);
      url.search = location.search;
      url.hash = location.hash;
      return url.href;
    } catch {
      return href;
    }
  };
  const alternate = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
  if (alternate?.href) return preservePageState(alternate.href);
  const existing = previousLinks.find((href) => href.includes(`/${lang}/`) || href.includes(`../${lang}/`));
  if (existing) return preservePageState(existing);
  const otherLang = lang === "ko" ? "en" : "ko";
  if (location.pathname.includes(`/${otherLang}/`)) {
    return preservePageState(`${location.pathname.replace(`/${otherLang}/`, `/${lang}/`)}${location.search}${location.hash}`);
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
        tracking: "화물 추적",
        ports: "항만 검색",
        airports: "공항 검색",
        cbm: "CBM 계산기",

        compliance: "Compliance",
        hub: "무역 규제 허브",
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
        tracking: "Shipment Tracking",
        ports: "Port Search",
        airports: "Airport Search",
        cbm: "CBM Calculator",

        compliance: "Compliance",
        hub: "Compliance Hub",
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
      <section><h2>${nav.logistics}</h2><a href="ports.html"><i data-lucide="anchor"></i>${nav.ports}</a><a href="airports.html"><i data-lucide="plane"></i>${nav.airports}</a><a href="track.html"><i data-lucide="radar"></i>${nav.tracking}</a><a href="cbm.html"><i data-lucide="calculator"></i>${nav.cbm}</a></section>
      <section><h2>${nav.compliance}</h2><a href="compliance.html" data-nav-key="compliance-hub"><i data-lucide="shield-check"></i>${nav.hub}</a></section>
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
  const currentHash = location.hash || "";
  const currentNavKey = (() => {
    if (["compliance.html", "dashboard.html"].includes(currentFile)) return "compliance-hub";
    return "";
  })();
  let activeGroupId = "";
  nav.querySelectorAll("a").forEach((link) => {
    const navKey = link.dataset.navKey || "";
    const hrefFile = (link.getAttribute("href") || "").split("#")[0].split("?")[0].split("/").pop() || "index.html";
    const isActive = currentNavKey
      ? navKey === currentNavKey
      : currentFile === hrefFile || (currentFile === "index.html" && link.classList.contains("nav-home"));
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

function updateComplianceSidebarActiveState() {
  const currentFile = location.pathname.split("/").pop() || "index.html";
  if (!["compliance.html", "dashboard.html"].includes(currentFile)) return;
  document.querySelectorAll(".workspace-nav a[data-nav-key]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.navKey === "compliance-hub");
  });
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

const TRADE_CURRENCIES = ["USD", "KRW", "EUR", "CNY", "JPY", "GBP", "AUD", "CAD", "SGD", "HKD", "CHF", "INR", "MXN", "THB", "MYR", "PLN", "SEK", "DKK", "CZK", "HUF", "RON"];

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
        updated: (date) => date ? `FX 업데이트 ${date}. Freight는 미국 BTS 공개 출처의 최신 이용 가능 기간을 표시합니다.` : "최신 이용 가능 데이터",
        fxUnavailable: "환율 데이터 조회 불가",
        freightUnavailable: "미국 화물 활동 조회 불가",
        freightLabel: "U.S. Freight Activity"
      }
    : {
        loading: "Loading...",
        latest: "Latest Data",
        available: "Latest available data",
        updated: (date) => date ? `FX updated ${date}. Freight shows the latest available U.S. BTS source period.` : "Latest available data",
        fxUnavailable: "Market data unavailable",
        freightUnavailable: "U.S. freight activity unavailable",
        freightLabel: "U.S. Freight Activity"
      };
  snapshot.innerHTML = `
    <div class="market-section-label">FX</div>
    <div data-market-fx><strong>Exchange Rate</strong><span>${labels.loading}</span></div>
    <div class="market-section-label">Freight</div>
    <div data-market-freight><strong>${labels.freightLabel}</strong><span>${labels.loading}</span></div>
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
    freightTarget.innerHTML = `<strong>${labels.freightLabel}</strong><span>${labels.freightUnavailable}</span>`;
  }
}

async function wireFreightMarket() {
  const target = document.querySelector("[data-freight-market]");
  if (!target) return;
  const lang = currentLang();
  const labels = lang === "ko"
    ? {
        loading: "화물운송 시장 브리프를 준비하는 중입니다...",
        unavailable: "공식 시장 데이터를 일시적으로 표시할 수 없습니다. 잠시 후 다시 시도해 주세요.",
        marketBrief: "시장 브리프",
        briefEyebrow: "MARKET BRIEF",
        routeQuestion: "어디에서 어디로 보내시나요?",
        summaryTitle: "시장 요약",
        relevantSignals: "핵심 시장 신호",
        coverageTitle: "데이터 범위",
        noCoverageGap: "선택 시장의 핵심 신호가 모두 표시됩니다.",
        nextActionsTitle: "이 거래 계속 준비하기",
        globalSignal: "GLOBAL",
        originSignal: "ORIGIN",
        routeSignal: "ROUTE",
        destinationSignal: "DESTINATION",
        regionalSignal: "REGIONAL",
        gscpiTitle: "공급망 압력",
        current: "현재",
        previous: "이전",
        change: "변화",
        source: "출처",
        dataset: "데이터셋",
        purpose: "용도",
        limitation: "한계",
        gscpiNote: "0보다 높으면 역사적 평균보다 공급망 압력이 높은 상태, 0보다 낮으면 평균보다 낮은 상태를 뜻합니다. 운임 지수나 견적이 아닙니다.",
        exploreTitle: "내 시장 살펴보기",
        exploreLead: "출발국과 도착국, 운송 모드를 선택하면 관련 시장 신호와 다음 업무를 한 화면에 정리합니다.",
        origin: "출발국",
        destination: "도착국",
        mode: "운송 모드",
        ocean: "Ocean",
        air: "Air",
        roadRail: "Road / Rail",
        viewMarket: "시장 확인",
        freightCharges: "운임·부대비용",
        shipmentContext: "선적 조건",
        shipmentContextLead: "운임 견적이 아니라 비용 항목과 공식 확인처를 정리합니다.",
        shipmentType: "선적 형태",
        equipment: "장비",
        cargoCondition: "화물 조건",
        provider: "운송사 / Provider",
        noProvider: "운송사 미선택",
        chargeChecklist: "예상 비용 체크리스트",
        officialProviderLookups: "선택한 운송사 공식 조회",
        providerHint: "운송사를 선택하면 해당 운송사의 공식 조회 링크만 별도로 보여줍니다. 요율표 금액은 복사하지 않습니다.",
        generalProviderHint: "운송사를 아직 모르는 경우 일반 비용 체크리스트로 준비하고, 실제 부대비용은 견적 또는 운송사 공식 조회에서 확인하세요.",
        chargeExplainer: "비용 항목 설명",
        chargeSearch: "THC, DEM, BAF 등 검색",
        allCharges: "전체 항목",
        importantNotes: "중요 안내",
        incotermsNote: "비용 발생 여부와 비용 부담 주체는 Incoterms, 계약 조건, 운송사·터미널 정책 및 실제 선적 조건에 따라 달라질 수 있습니다.",
        holidayTitle: "다음 공휴일",
        holidayWindow: "30일 내 공휴일",
        holidayLoading: "목적지 공휴일을 확인하는 중입니다...",
        holidayUnavailable: "목적지 공휴일 데이터를 표시할 수 없습니다.",
        selectCountry: "국가 검색...",
        selectOrigin: "출발국을 선택하세요.",
        selectDestination: "도착국을 선택하세요.",
        noSelection: "출발국과 도착국을 선택하면 시장 요약과 다음 업무가 표시됩니다.",
        latestOfficial: "최신 이용 가능 공식 데이터",
        countryConnectivity: "정기선 연결성",
        bilateralConnectivity: "양국 정기선 연결성",
        portConnectivity: "Port Intelligence",
        originLsci: "출발국 LSCI",
        destinationLsci: "도착국 LSCI",
        relevantPorts: "관련 항만",
        relevantAirports: "관련 공항",
        unavailableSignal: "이용 가능한 공식 지표 없음",
        usActivity: "U.S. Freight Activity",
        airNotice: "항공 운임 시장 지수 값은 라이선스 없이 표시하지 않습니다. 공항 정보와 글로벌 공급망 압력만 참고하세요.",
        roadNotice: "글로벌 도로/철도 운임 데이터는 제공하지 않습니다. 미국이 포함된 경우에만 BTS 지역 지표를 함께 보여줍니다.",
        rateNoticeTitle: "실제 운임·시장 지수 확인",
        rateNotice: "LOGILEE는 라이선스가 필요한 운임지수 값을 재게시하지 않습니다. 실제 운임 및 시장 지수는 공식 제공처에서 확인하세요.",
        connectivityTitle: "연결성 신호",
        connectivityLead: "연결성은 운임 가격이 아니라 정기선 네트워크의 상대적 참고 신호입니다.",
        regionalTitle: "미국 운송 지표 상세",
        regionalSubtitle: "North America · U.S. Freight Activity",
        regionalNote: "이 지표는 미국 화물 운송 활동의 흐름을 보여주는 참고 자료이며, 실제 운송 견적, 특정 항로의 컨테이너 운임 또는 선사별 운임을 의미하지 않습니다.",
        latestObservation: "최신 관측 기간",
        updateBasis: "업데이트 기준",
        monthly: "월별 공개 통계, 지표별 공표 지연 및 수정 가능",
        sourceNote: "출처: Bureau of Transportation Statistics (BTS). 데이터셋: Transportation Services Index and Seasonally-Adjusted Transportation Data. 지표별 공표 주기와 수정 가능성이 다를 수 있습니다.",
        detailSummary: "상세 지표 보기",
        resourcesTitle: "공식 자료 및 데이터 출처",
        resourcesLead: "공식 공개 데이터와 라이선스형 시장 자료 링크를 한곳에 모았습니다.",
        sourceCta: "공식 출처 열기",
        relatedTitle: "다음 업무",
        sourcesTitle: "데이터 및 출처",
        tableIndicator: "지표",
        tableLatest: "최신 값",
        tablePrevious: "이전 값",
        tableChange: "변화 %",
        tableUnit: "단위",
        tablePeriod: "기간",
        tableSource: "출처",
        allPorts: "항만 보기",
        allAirports: "공항 보기",
        noPorts: "등록된 Port Intelligence 항목 없음"
      }
    : {
        loading: "Preparing your freight market brief...",
        unavailable: "Official market data is temporarily unavailable. Please retry later.",
        marketBrief: "Market Brief",
        briefEyebrow: "MARKET BRIEF",
        routeQuestion: "Where are you shipping?",
        summaryTitle: "Market Summary",
        relevantSignals: "Key Market Signals",
        coverageTitle: "Data Coverage",
        noCoverageGap: "All key signals for the selected market are displayed.",
        nextActionsTitle: "Continue Your Shipment",
        globalSignal: "GLOBAL",
        originSignal: "ORIGIN",
        routeSignal: "ROUTE",
        destinationSignal: "DESTINATION",
        regionalSignal: "REGIONAL",
        gscpiTitle: "Supply Chain Pressure",
        current: "Current",
        previous: "Previous",
        change: "Change",
        purpose: "Purpose",
        limitation: "Limitation",
        gscpiNote: "Readings above 0 indicate higher pressure than the historical average; readings below 0 indicate lower pressure. This is not a freight rate index or quote.",
        exploreTitle: "Explore Your Market",
        exploreLead: "Choose an origin, destination, and mode to organize relevant market signals and practical next actions.",
        origin: "Origin Country",
        destination: "Destination Country",
        mode: "Mode",
        ocean: "Ocean",
        air: "Air",
        roadRail: "Road / Rail",
        viewMarket: "View Market",
        freightCharges: "Freight Charges",
        shipmentContext: "Shipment Context",
        shipmentContextLead: "This is not a freight quotation. It organizes charge items and official lookup paths.",
        shipmentType: "Shipment Type",
        equipment: "Equipment",
        cargoCondition: "Cargo Condition",
        provider: "Carrier / Provider",
        noProvider: "No provider selected",
        chargeChecklist: "Expected Charge Checklist",
        officialProviderLookups: "Official Provider Lookups",
        providerHint: "Select a provider to show that provider's official lookup links. LOGILEE does not copy tariff values.",
        generalProviderHint: "If the provider is not known yet, use the general checklist and verify actual charges through a quote or official provider lookup.",
        chargeExplainer: "Charge Item Explainer",
        chargeSearch: "Search THC, DEM, BAF...",
        allCharges: "All items",
        importantNotes: "Important Notes",
        incotermsNote: "The existence of a charge and who bears it may vary by Incoterms, contract terms, provider policy, terminal rules, and actual shipment conditions.",
        holidayTitle: "Next Public Holiday",
        holidayWindow: "Public holidays in the next 30 days",
        holidayLoading: "Checking destination public holidays...",
        holidayUnavailable: "Destination public holiday data is unavailable.",
        selectCountry: "Search country...",
        selectOrigin: "Select origin country.",
        selectDestination: "Select destination country.",
        noSelection: "Select an origin and destination to show a market summary and next actions.",
        latestOfficial: "Latest available official data",
        countryConnectivity: "Country Connectivity",
        bilateralConnectivity: "Bilateral Connectivity",
        portConnectivity: "Port Connectivity",
        originLsci: "Origin LSCI",
        destinationLsci: "Destination LSCI",
        relevantPorts: "Relevant Port Intelligence",
        relevantAirports: "Relevant Airport Intelligence",
        unavailableSignal: "Not available",
        usActivity: "U.S. Freight Activity",
        airNotice: "Licensed air freight market rate values are not displayed. Use airport intelligence and global supply-chain pressure as context.",
        roadNotice: "Global road/rail freight rates are not provided. BTS regional indicators are shown only when the U.S. is involved.",
        rateNoticeTitle: "Check Actual Freight Rates and Market Indices",
        rateNotice: "LOGILEE does not republish licensed freight index values. Confirm actual rates and market indices through the official providers.",
        connectivityTitle: "Connectivity Signals",
        connectivityLead: "Connectivity is a network reference signal, not a freight price or quote.",
        regionalTitle: "U.S. Freight Details",
        regionalSubtitle: "North America · U.S. Freight Activity",
        regionalNote: "These indicators show U.S. freight transportation activity trends. They are not shipment quotations, lane-specific container rates, or carrier-specific freight rates.",
        latestObservation: "Latest observation period",
        source: "Source",
        dataset: "Dataset",
        updateBasis: "Update basis",
        monthly: "Monthly public statistics, with series-specific publication lag and revisions",
        sourceNote: "Source: Bureau of Transportation Statistics (BTS). Dataset: Transportation Services Index and Seasonally-Adjusted Transportation Data. Update cycles vary by series and may be revised.",
        detailSummary: "View detailed indicators",
        resourcesTitle: "Official Resources and Data Sources",
        resourcesLead: "Official public data and licensed market-resource links in one compact reference.",
        sourceCta: "Open official source",
        relatedTitle: "Next Actions",
        sourcesTitle: "Data & Sources",
        tableIndicator: "Indicator",
        tableLatest: "Latest Value",
        tablePrevious: "Previous Value",
        tableChange: "Change %",
        tableUnit: "Unit",
        tablePeriod: "Data Period",
        tableSource: "Source",
        allPorts: "View country ports",
        allAirports: "View country airports",
        noPorts: "No registered Port Intelligence entries"
      };
  target.innerHTML = `<div class="data-empty">${labels.loading}</div>`;
  try {
    const [snapshot, btsRows] = await Promise.all([getGlobalFreightData(), getFreightData()]);
    target.innerHTML = renderGlobalFreightMarket(snapshot, btsRows, labels, lang);
    setupFreightExplorer(target, snapshot, btsRows, labels, lang);
    refreshIcons();
  } catch (error) {
    console.warn("Freight Market unavailable:", error);
    dataError(target, labels.unavailable);
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

async function copyTextWithFallback(text) {
  let copied = false;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      copied = true;
    }
  } catch (_) {}
  if (!copied) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    try { copied = document.execCommand("copy"); } catch (_) {}
    textarea.remove();
  }
  return copied;
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
const CBM_DIMENSION_UNITS = {
  mm: { label: "mm", toM: 0.001, toCm: 0.1, fromM: 1000 },
  cm: { label: "cm", toM: 0.01, toCm: 1, fromM: 100 },
  m: { label: "m", toM: 1, toCm: 100, fromM: 1 },
  in: { label: "in", toM: 0.0254, toCm: 2.54, fromM: 39.3700787402 },
  ft: { label: "ft", toM: 0.3048, toCm: 30.48, fromM: 3.280839895 }
};

const CBM_WEIGHT_UNITS = {
  kg: { label: "kg", toKg: 1, fromKg: 1 },
  lb: { label: "lb", toKg: 0.45359237, fromKg: 2.2046226218 }
};

const CBM_CONTAINER_REFERENCES = [
  { code: "20GP", volume: 33.2, payload: 28130 },
  { code: "40GP", volume: 67.7, payload: 28750 },
  { code: "40HC", volume: 76.3, payload: 28600 }
];

function cbmText(lang) {
  return lang === "ko" ? {
    cargo: "화물명", qty: "수량", length: "길이", width: "너비", height: "높이", unitWeight: "개당 중량 (선택)",
    duplicate: "복제", delete: "삭제", rowFallback: "Cargo",
    rowError: "치수와 수량은 0보다 커야 하며, 중량은 비워두거나 0 이상이어야 합니다.",
    tooLarge: "입력값이 너무 큽니다. 화물 치수, 수량, 중량을 다시 확인하세요.",
    totalCbm: "총 CBM", totalWeight: "총 중량", density: "Density", qtyTotal: "총 수량",
    noWeight: "중량을 입력하면 Density와 중량 기준 참고값을 계산합니다.",
    airTitle: "항공 화물 참고 계산", actualWeight: "실제 중량", volumetricWeight: "부피중량",
    chargeableWeight: "예상 과금중량", divisor: "Divisor",
    airNote: "실제 적용 기준은 항공사, 특송사, 포워더 및 서비스 조건에 따라 달라질 수 있으므로 최종 운임 기준을 확인하세요.",
    lclTitle: "LCL W/M 참고 계산", volumeRt: "부피 기준", weightRt: "중량 기준", wmReference: "W/M 참고값",
    lclNote: "실제 LCL 운임의 W/M 기준, 최소 과금 단위 및 반올림 방식은 포워더·운송사·항로별 tariff를 확인하세요.",
    containerTitle: "컨테이너 용적 비교", nominalVolume: "명목 내부 용적", referencePayload: "참고 payload",
    cbmVsNominal: "명목 용적 대비",
    containerNote: "컨테이너 비교값은 명목 내부 용적 기준의 참고값입니다. 실제 적재 가능 여부는 화물 형상, 포장, 팔레트, 중량 배분 및 장비 사양에 따라 달라집니다.",
    breakdown: "화물별 계산 내역", unitWeightShort: "개당 중량", rowWeight: "행 총중량", total: "합계",
    copyAlert: "결과가 복사되었습니다.", csvName: "logilee-cbm-summary.csv",
    notesTitle: "계산 기준 및 출처", relatedTitle: "관련 LOGILEE 도구",
    sources: "20GP, 40GP, 40HC 기준값은 Hapag-Lloyd Container Specification의 dry container fleet 예시를 대표 nominal reference로 사용했습니다. 컨테이너 사양은 제조사, 선사, 장비 시리즈별로 달라질 수 있습니다.",
    notes: ["CBM = 길이 x 너비 x 높이 x 수량, 치수는 내부적으로 meters로 변환합니다.", "Density = 총중량 / 총 CBM이며 중량이 입력된 경우에만 계산합니다.", "Air volumetric weight는 cm 기준 L x W x H x 수량 / divisor로 계산합니다.", "Estimated chargeable weight는 총중량과 부피중량 중 큰 값을 참고값으로 표시합니다.", "LCL W/M reference는 CBM과 총중량/1,000 중 큰 RT 값을 보여주며 실제 운임은 계산하지 않습니다."],
    related: [["항만 검색", "ports.html", "anchor"], ["공항 검색", "airports.html", "plane"], ["화물 추적", "track.html", "radar"]]
  } : {
    cargo: "Cargo", qty: "Quantity", length: "Length", width: "Width", height: "Height", unitWeight: "Unit Weight (optional)",
    duplicate: "Duplicate", delete: "Delete", rowFallback: "Cargo",
    rowError: "Dimensions and quantity must be greater than 0. Weight may be blank or 0 and above.",
    tooLarge: "The input value is too large. Check cargo dimensions, quantity, and weight.",
    totalCbm: "Total CBM", totalWeight: "Total Weight", density: "Density", qtyTotal: "Total Quantity",
    noWeight: "Enter cargo weight to calculate density and weight-based reference values.",
    airTitle: "Air Freight Reference", actualWeight: "Actual Weight", volumetricWeight: "Volumetric Weight",
    chargeableWeight: "Estimated Chargeable Weight", divisor: "Divisor",
    airNote: "Actual rules may vary by airline, courier, forwarder, service level, and trade lane. Confirm the final rating basis before using it for freight cost.",
    lclTitle: "LCL W/M Reference", volumeRt: "Volume basis", weightRt: "Weight basis", wmReference: "W/M Reference",
    lclNote: "Actual LCL W/M rules, minimum charges, and rounding may vary by forwarder, carrier, and trade lane.",
    containerTitle: "Container Volume Comparison", nominalVolume: "Nominal internal volume", referencePayload: "Reference payload",
    cbmVsNominal: "Against nominal volume",
    containerNote: "Container comparison values are nominal internal-volume references. Actual loading feasibility depends on cargo shape, packing, pallets, weight distribution, and equipment specification.",
    breakdown: "Cargo Breakdown", unitWeightShort: "Unit Weight", rowWeight: "Row Total Weight", total: "TOTAL",
    copyAlert: "Result copied.", csvName: "logilee-cbm-summary.csv",
    notesTitle: "Calculation Notes / Sources", relatedTitle: "Related LOGILEE Tools",
    sources: "20GP, 40GP, and 40HC values use Hapag-Lloyd Container Specification dry-container fleet examples as representative nominal references. Container specifications can vary by manufacturer, carrier, and equipment series.",
    notes: ["CBM = length x width x height x quantity, with dimensions converted internally to meters.", "Density = total weight / total CBM and is calculated only when weight is entered.", "Air volumetric weight uses centimeter dimensions: L x W x H x quantity / divisor.", "Estimated chargeable weight shows the greater of actual weight and volumetric weight as a reference value.", "LCL W/M reference shows the greater of CBM and total weight / 1,000 in RT. It does not calculate freight charges."],
    related: [["Port Search", "ports.html", "anchor"], ["Airport Search", "airports.html", "plane"], ["Shipment Tracking", "track.html", "radar"]]
  };
}

function cbmFormat(value, digits = 3) {
  if (!Number.isFinite(value)) return "-";
  return Number(value).toLocaleString(undefined, { minimumFractionDigits: digits, maximumFractionDigits: digits });
}
function cbmTrim(value, digits = 3) { return Number.isFinite(value) ? String(Number(value.toFixed(digits))) : ""; }
function cbmWeight(value, unit = "kg", digits = 1) {
  if (!Number.isFinite(value)) return "-";
  return `${cbmFormat(value * CBM_WEIGHT_UNITS[unit].fromKg, digits)} ${CBM_WEIGHT_UNITS[unit].label}`;
}
function cbmPercent(value) { return Number.isFinite(value) ? `${cbmFormat(value, 1)}%` : "-"; }
function cbmNum(input) { const value = Number(String(input ?? "").trim()); return Number.isFinite(value) ? value : NaN; }

function cbmRowTemplate(lang, values = {}) {
  const t = cbmText(lang);
  return `
    <div class="form-grid cargo-row cbm-cargo-row">
      <div class="field"><label>${t.cargo}</label><input value="${escapeAttribute(values.cargo ?? "Box")}" data-cargo></div>
      <div class="field"><label>${t.qty}</label><input type="number" inputmode="decimal" min="0" step="any" value="${escapeAttribute(values.qty ?? "10")}" data-qty></div>
      <div class="field"><label>${t.length}</label><input type="number" inputmode="decimal" min="0" step="any" value="${escapeAttribute(values.length ?? "50")}" data-length></div>
      <div class="field"><label>${t.width}</label><input type="number" inputmode="decimal" min="0" step="any" value="${escapeAttribute(values.width ?? "40")}" data-width></div>
      <div class="field"><label>${t.height}</label><input type="number" inputmode="decimal" min="0" step="any" value="${escapeAttribute(values.height ?? "30")}" data-height></div>
      <div class="field"><label>${t.unitWeight}</label><input type="number" inputmode="decimal" min="0" step="any" value="${escapeAttribute(values.weight ?? "")}" data-weight></div>
      <div class="cbm-row-tools"><button class="secondary-btn" type="button" data-duplicate-row>${t.duplicate}</button><button class="secondary-btn" type="button" data-delete-row>${t.delete}</button></div>
      <p class="cbm-row-error" data-row-error hidden></p>
    </div>`;
}

function cbmReadRow(row, lang) {
  const t = cbmText(lang);
  const dimUnit = document.querySelector("[data-dim-unit]")?.value || "cm";
  const weightUnit = document.querySelector("[data-weight-unit]")?.value || "kg";
  const qty = cbmNum(row.querySelector("[data-qty]")?.value);
  const lengthInput = cbmNum(row.querySelector("[data-length]")?.value);
  const widthInput = cbmNum(row.querySelector("[data-width]")?.value);
  const heightInput = cbmNum(row.querySelector("[data-height]")?.value);
  const weightRaw = row.querySelector("[data-weight]")?.value || "";
  const unitWeightInput = String(weightRaw).trim() === "" ? null : cbmNum(weightRaw);
  const errors = [];
  if (!(qty > 0) || !(lengthInput > 0) || !(widthInput > 0) || !(heightInput > 0) || (unitWeightInput !== null && !(unitWeightInput >= 0))) errors.push(t.rowError);
  if (qty > 1000000 || lengthInput > 1000000 || widthInput > 1000000 || heightInput > 1000000 || unitWeightInput > 10000000) errors.push(t.tooLarge);
  const errorEl = row.querySelector("[data-row-error]");
  if (errors.length) {
    row.classList.add("is-invalid");
    if (errorEl) { errorEl.textContent = [...new Set(errors)].join(" "); errorEl.hidden = false; }
    return null;
  }
  row.classList.remove("is-invalid");
  if (errorEl) { errorEl.textContent = ""; errorEl.hidden = true; }
  const lengthM = lengthInput * CBM_DIMENSION_UNITS[dimUnit].toM;
  const widthM = widthInput * CBM_DIMENSION_UNITS[dimUnit].toM;
  const heightM = heightInput * CBM_DIMENSION_UNITS[dimUnit].toM;
  const lengthCm = lengthInput * CBM_DIMENSION_UNITS[dimUnit].toCm;
  const widthCm = widthInput * CBM_DIMENSION_UNITS[dimUnit].toCm;
  const heightCm = heightInput * CBM_DIMENSION_UNITS[dimUnit].toCm;
  const unitWeightKg = unitWeightInput === null ? null : unitWeightInput * CBM_WEIGHT_UNITS[weightUnit].toKg;
  const rowWeightKg = unitWeightKg === null ? null : unitWeightKg * qty;
  return { cargo: row.querySelector("[data-cargo]")?.value.trim() || t.rowFallback, qty, lengthInput, widthInput, heightInput, dimUnit, weightUnit, unitWeightKg, rowWeightKg, cbm: lengthM * widthM * heightM * qty, volumetricBase: lengthCm * widthCm * heightCm * qty };
}

function cbmSelectedDivisor() {
  const select = document.querySelector("[data-air-divisor]");
  if (!select || select.value !== "custom") return Number(select?.value || 6000);
  const custom = Number(document.querySelector("[data-custom-air-divisor]")?.value || "");
  return Number.isFinite(custom) && custom > 0 ? custom : null;
}

function calculateRows(lang) {
  const rows = [...document.querySelectorAll(".cargo-row")].map((row) => cbmReadRow(row, lang)).filter(Boolean);
  const totalCbm = rows.reduce((sum, row) => sum + row.cbm, 0);
  const totalQty = rows.reduce((sum, row) => sum + row.qty, 0);
  const weightedRows = rows.filter((row) => row.rowWeightKg !== null);
  const totalWeight = weightedRows.length ? weightedRows.reduce((sum, row) => sum + row.rowWeightKg, 0) : null;
  const density = totalWeight !== null && totalCbm > 0 ? totalWeight / totalCbm : null;
  const divisor = cbmSelectedDivisor();
  const volumetricWeight = divisor ? rows.reduce((sum, row) => sum + row.volumetricBase / divisor, 0) : null;
  const chargeableWeight = totalWeight !== null && volumetricWeight !== null ? Math.max(totalWeight, volumetricWeight) : null;
  const volumeRt = totalCbm;
  const weightRt = totalWeight !== null ? totalWeight / 1000 : null;
  const wmReference = weightRt !== null ? Math.max(volumeRt, weightRt) : null;
  return { rows, totalCbm, totalQty, totalWeight, density, divisor, volumetricWeight, chargeableWeight, volumeRt, weightRt, wmReference };
}

function cbmKpi(label, value, note = "") {
  return `<article><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong>${note ? `<small>${escapeHtml(note)}</small>` : ""}</article>`;
}

function cbmOpenStates() {
  return {
    air: document.querySelector('[data-cbm-ref="air"]')?.open || false,
    lcl: document.querySelector('[data-cbm-ref="lcl"]')?.open || false,
    container: document.querySelector('[data-cbm-ref="container"]')?.open || false
  };
}

function cbmBasicLabels(lang) {
  return lang === "ko" ? {
    basicNote: "CBM은 화물이 차지하는 부피를 세제곱미터(m³)로 나타낸 값입니다.",
    weightHint: "중량을 입력하면 추가 계산을 확인할 수 있습니다.",
    breakdownStep: "화물별 계산 내역",
    breakdownHelp: "각 행이 총 CBM과 총중량에 어떻게 반영되었는지 확인하세요.",
    referencesStep: "③ 어떤 운송을 준비하고 있나요?",
    referencesHelp: "운송 방식에 따라 필요한 참고 계산을 선택해서 확인하세요.",
    airOption: "항공 운송",
    airOptionHelp: "화물의 부피중량과 예상 과금중량을 확인합니다.",
    airHeading: "항공 화물 참고 계산",
    airIntro: "항공 화물은 실제 중량과 화물이 차지하는 부피를 중량으로 환산한 값을 비교해 운임 기준을 정하는 경우가 있습니다.",
    divisorLabel: "부피중량 계산 기준",
    divisorHelp: "항공사·특송사·포워더 및 서비스 조건에 따라 기준이 달라질 수 있습니다.",
    customDivisor: "직접 입력",
    volumetricTitle: "부피중량이란?",
    volumetricHelp: "화물이 차지하는 공간을 중량으로 환산한 참고값입니다.",
    chargeableHelp: "실제 중량과 부피중량 중 큰 값을 기준으로 표시한 참고값입니다. 실제 운임 적용 기준은 운송사 또는 포워더에 확인하세요.",
    lclOption: "LCL 해상운송",
    lclOptionHelp: "소량 해상화물의 부피와 중량 기준 참고값을 확인합니다.",
    lclHeading: "LCL W/M 참고 계산",
    lclIntro: "LCL 운임은 화물의 부피와 중량을 비교해 과금 기준을 정하는 경우가 있습니다.",
    wmTitle: "W/M이란?",
    wmHelp: "LCL 운임에서 화물의 부피(Measurement)와 중량(Weight)을 비교하는 방식입니다.",
    rtTitle: "RT는?",
    rtHelp: "이 계산기에서는 참고용으로 1 CBM = 1 RT, 1,000 kg = 1 RT 기준을 사용합니다.",
    lclMissing: "중량을 입력하면 부피와 중량을 비교한 W/M 참고값을 계산합니다.",
    containerOption: "컨테이너 운송",
    containerOptionHelp: "화물 CBM을 20GP, 40GP, 40HC 명목 용적과 비교합니다.",
    containerHeading: "컨테이너 용적 비교",
    cargoCbm: "내 화물",
    nominalRatio: "명목 용적 대비",
    payloadDetail: "참고 payload",
    containerSafety: "이 값은 화물 CBM과 컨테이너 명목 내부 용적을 단순 비교한 참고값이며 실제 적재 가능률을 의미하지 않습니다. 실제 적재 가능 여부는 화물 형상, 포장, 팔레트, 중량 배분 및 장비 사양에 따라 달라집니다."
  } : {
    basicNote: "CBM is cargo volume measured in cubic meters (m³).",
    weightHint: "Add weight to unlock additional reference calculations.",
    breakdownStep: "Cargo Breakdown",
    breakdownHelp: "Check how each cargo row contributes to total CBM and total weight.",
    referencesStep: "3. Choose Your Shipping Method",
    referencesHelp: "Select a shipping method to see relevant freight reference calculations.",
    airOption: "Air Freight",
    airOptionHelp: "Check volumetric weight and estimated chargeable weight.",
    airHeading: "Air Freight Reference",
    airIntro: "Air cargo rating often compares actual weight with a weight converted from the space occupied by the cargo.",
    divisorLabel: "Volumetric weight basis",
    divisorHelp: "The basis can vary by airline, courier, forwarder, service level, and trade lane.",
    customDivisor: "Custom",
    volumetricTitle: "What is volumetric weight?",
    volumetricHelp: "A reference weight calculated from the space occupied by the cargo.",
    chargeableHelp: "This reference uses the greater of actual weight and volumetric weight. Confirm the final rating basis with the carrier or forwarder.",
    lclOption: "LCL Ocean Freight",
    lclOptionHelp: "Compare volume and weight reference values for LCL cargo.",
    lclHeading: "LCL W/M Reference",
    lclIntro: "LCL freight may compare cargo volume and cargo weight to decide the charging basis.",
    wmTitle: "What is W/M?",
    wmHelp: "A method that compares Measurement volume and Weight for LCL freight.",
    rtTitle: "What is RT?",
    rtHelp: "This calculator uses 1 CBM = 1 RT and 1,000 kg = 1 RT as reference values.",
    lclMissing: "Enter weight to calculate the W/M reference by comparing volume and weight.",
    containerOption: "Container Shipping",
    containerOptionHelp: "Compare cargo CBM with nominal 20GP, 40GP, and 40HC volume.",
    containerHeading: "Container Volume Comparison",
    cargoCbm: "My cargo",
    nominalRatio: "Against nominal volume",
    payloadDetail: "Reference payload",
    containerSafety: "This is a simple comparison between cargo CBM and nominal internal container volume. It does not mean actual loading utilization. Actual feasibility depends on cargo shape, packing, pallets, weight distribution, and equipment specification."
  };
}

function cbmBreakdownMarkup(lang, data, weightUnit) {
  const t = cbmText(lang);
  const b = cbmBasicLabels(lang);
  const noWeight = data.totalWeight === null;
  const rowsHtml = data.rows.map((row) => `<tr><td>${escapeHtml(row.cargo)}</td><td>${cbmFormat(row.qty, row.qty % 1 ? 2 : 0)}</td><td>${cbmFormat(row.cbm, 3)}</td><td>${row.unitWeightKg === null ? "-" : cbmWeight(row.unitWeightKg, weightUnit)}</td><td>${row.rowWeightKg === null ? "-" : cbmWeight(row.rowWeightKg, weightUnit)}</td></tr>`).join("");
  const totalRow = `<tr class="cbm-total-row"><td>${t.total}</td><td>${cbmFormat(data.totalQty, data.totalQty % 1 ? 2 : 0)}</td><td>${cbmFormat(data.totalCbm, 3)}</td><td>-</td><td>${noWeight ? "-" : cbmWeight(data.totalWeight, weightUnit)}</td></tr>`;
  return `<div class="cbm-section-heading"><h2>${b.breakdownStep}</h2><p>${b.breakdownHelp}</p></div><div class="cbm-table-wrap"><table class="result-table"><thead><tr><th>${t.cargo}</th><th>${t.qty}</th><th>CBM</th><th>${t.unitWeightShort}</th><th>${t.rowWeight}</th></tr></thead><tbody>${rowsHtml || `<tr><td colspan="5">-</td></tr>`}${totalRow}</tbody></table></div>`;
}

function cbmReferencesMarkup(lang, data, weightUnit, open = cbmOpenStates()) {
  const t = cbmText(lang);
  const b = cbmBasicLabels(lang);
  const noWeight = data.totalWeight === null;
  const divisorValue = data.divisor || 6000;
  const selectedDivisor = document.querySelector("[data-air-divisor]")?.value || "6000";
  const customDivisor = document.querySelector("[data-custom-air-divisor]")?.value || String(divisorValue);
  const divisorControls = `<div class="cbm-air-settings"><div class="field"><label for="air-divisor">${b.divisorLabel}</label><select id="air-divisor" data-air-divisor><option value="6000" ${selectedDivisor === "6000" ? "selected" : ""}>6000</option><option value="5000" ${selectedDivisor === "5000" ? "selected" : ""}>5000</option><option value="custom" ${selectedDivisor === "custom" ? "selected" : ""}>${b.customDivisor}</option></select><small>${b.divisorHelp}</small></div><div class="field cbm-custom-divisor" ${selectedDivisor === "custom" ? "" : "hidden"}><label for="custom-air-divisor">Divisor</label><input id="custom-air-divisor" type="number" inputmode="decimal" min="1" value="${escapeAttribute(customDivisor)}" data-custom-air-divisor></div></div>`;
  const containerRows = CBM_CONTAINER_REFERENCES.map((item) => `<article><strong>${item.code}</strong><span>${t.nominalVolume}</span><b>${cbmFormat(item.volume, 1)} m³</b><span>${b.cargoCbm}: ${cbmFormat(data.totalCbm, 3)} m³</span><span>${b.nominalRatio}: ${cbmPercent(data.totalCbm / item.volume * 100)}</span><small>${b.payloadDetail}: ${cbmFormat(item.payload, 0)} kg</small></article>`).join("");
  return `<div class="cbm-section-heading"><h2>${b.referencesStep}</h2><p>${b.referencesHelp}</p></div><div class="cbm-reference-accordions">
    <details class="cbm-method" data-cbm-ref="air" ${open.air ? "open" : ""}><summary><span><strong>${b.airOption}</strong><small>${b.airOptionHelp}</small></span></summary><div class="cbm-method-body"><h3>${b.airHeading}</h3><p>${b.airIntro}</p>${divisorControls}<div class="cbm-mini-grid">${cbmKpi(t.actualWeight, noWeight ? "-" : cbmWeight(data.totalWeight, weightUnit))}${cbmKpi(t.volumetricWeight, data.volumetricWeight === null ? "-" : `${cbmFormat(data.volumetricWeight, 1)} kg`)}${cbmKpi(t.chargeableWeight, data.chargeableWeight === null ? "-" : `${cbmFormat(data.chargeableWeight, 1)} kg`)}</div><div class="cbm-help-grid"><p><strong>${b.volumetricTitle}</strong><br>${b.volumetricHelp}</p><p><strong>${t.chargeableWeight}</strong><br>${b.chargeableHelp}</p></div></div></details>
    <details class="cbm-method" data-cbm-ref="lcl" ${open.lcl ? "open" : ""}><summary><span><strong>${b.lclOption}</strong><small>${b.lclOptionHelp}</small></span></summary><div class="cbm-method-body"><h3>${b.lclHeading}</h3><p>${b.lclIntro}</p><div class="cbm-mini-grid">${cbmKpi(t.volumeRt, `${cbmFormat(data.volumeRt, 3)} RT`)}${cbmKpi(t.weightRt, data.weightRt === null ? "-" : `${cbmFormat(data.weightRt, 3)} RT`)}${cbmKpi(t.wmReference, data.wmReference === null ? "-" : `${cbmFormat(data.wmReference, 3)} RT`)}</div><div class="cbm-help-grid"><p><strong>${b.wmTitle}</strong><br>${b.wmHelp}</p><p><strong>${b.rtTitle}</strong><br>${b.rtHelp}</p></div><p class="muted">${noWeight ? b.lclMissing : t.lclNote}</p></div></details>
    <details class="cbm-method" data-cbm-ref="container" ${open.container ? "open" : ""}><summary><span><strong>${b.containerOption}</strong><small>${b.containerOptionHelp}</small></span></summary><div class="cbm-method-body"><h3>${b.containerHeading}</h3><div class="cbm-container-grid">${containerRows}</div><div class="notice cbm-compact-notice">${b.containerSafety}</div></div></details>
  </div>`;
}

function renderCbm(lang) {
  const output = document.querySelector("[data-cbm-output]");
  if (!output) return;
  const t = cbmText(lang);
  const b = cbmBasicLabels(lang);
  const weightUnit = document.querySelector("[data-weight-unit]")?.value || "kg";
  const open = cbmOpenStates();
  const data = calculateRows(lang);
  const noWeight = data.totalWeight === null;
  output.innerHTML = `<div class="cbm-kpi-grid cbm-basic-kpis">${cbmKpi(t.totalCbm, `${cbmFormat(data.totalCbm, 3)} m³`)}${cbmKpi(t.qtyTotal, cbmFormat(data.totalQty, data.totalQty % 1 ? 2 : 0))}${cbmKpi(t.totalWeight, noWeight ? "-" : cbmWeight(data.totalWeight, weightUnit))}${data.density === null ? "" : cbmKpi(t.density, `${cbmFormat(data.density, 1)} kg/m³`)}</div><p class="cbm-microcopy">${b.basicNote}</p>${noWeight ? `<p class="cbm-microcopy">${b.weightHint}</p>` : ""}`;
  const breakdown = document.querySelector("[data-cbm-breakdown]");
  if (breakdown) breakdown.innerHTML = cbmBreakdownMarkup(lang, data, weightUnit);
  const references = document.querySelector("[data-cbm-references]");
  if (references) references.innerHTML = cbmReferencesMarkup(lang, data, weightUnit, open);
  renderCbmNotes(lang);
}
function renderCbmNotes(lang) {
  const target = document.querySelector("[data-cbm-notes]");
  if (!target) return;
  const t = cbmText(lang);
  target.innerHTML = `<h2>${t.notesTitle}</h2><div class="cbm-notes-grid"><div><ul>${t.notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}</ul><p class="muted">${escapeHtml(t.sources)}</p></div><div class="cbm-related-tools"><h3>${t.relatedTitle}</h3>${t.related.map(([label, href, icon]) => `<a href="${escapeAttribute(href)}"><i data-lucide="${icon}"></i><span>${escapeHtml(label)}</span></a>`).join("")}</div></div>`;
}

function cbmConvertDimensions(fromUnit, toUnit) {
  if (fromUnit === toUnit) return;
  document.querySelectorAll(".cargo-row").forEach((row) => ["length", "width", "height"].forEach((name) => {
    const input = row.querySelector(`[data-${name}]`);
    const current = cbmNum(input?.value);
    if (input && Number.isFinite(current)) input.value = cbmTrim(current * CBM_DIMENSION_UNITS[fromUnit].toM * CBM_DIMENSION_UNITS[toUnit].fromM, 4);
  }));
}
function cbmConvertWeights(fromUnit, toUnit) {
  if (fromUnit === toUnit) return;
  document.querySelectorAll(".cargo-row").forEach((row) => {
    const input = row.querySelector("[data-weight]");
    const current = cbmNum(input?.value);
    if (input && String(input.value).trim() !== "" && Number.isFinite(current)) input.value = cbmTrim(current * CBM_WEIGHT_UNITS[fromUnit].toKg * CBM_WEIGHT_UNITS[toUnit].fromKg, 3);
  });
}

function cbmCopyText(lang, data) {
  const t = cbmText(lang);
  const weightUnit = document.querySelector("[data-weight-unit]")?.value || "kg";
  const lines = lang === "ko" ? ["화물 요약"] : ["Cargo Summary"];
  lines.push(`${t.qtyTotal}: ${cbmFormat(data.totalQty, data.totalQty % 1 ? 2 : 0)}`);
  lines.push(`${t.totalCbm}: ${cbmFormat(data.totalCbm, 3)} m³`);
  if (data.totalWeight !== null) lines.push(`${t.totalWeight}: ${cbmWeight(data.totalWeight, weightUnit)}`);
  if (data.density !== null) lines.push(`${t.density}: ${cbmFormat(data.density, 1)} kg/m³`);
  lines.push("", t.airTitle, `${t.volumetricWeight}: ${data.volumetricWeight === null ? "-" : `${cbmFormat(data.volumetricWeight, 1)} kg`}`);
  if (data.chargeableWeight !== null) lines.push(`${t.chargeableWeight}: ${cbmFormat(data.chargeableWeight, 1)} kg`);
  if (data.divisor) lines.push(`${t.divisor}: ${data.divisor}`);
  if (data.wmReference !== null) lines.push("", t.lclTitle, `${t.volumeRt}: ${cbmFormat(data.volumeRt, 3)} RT`, `${t.weightRt}: ${cbmFormat(data.weightRt, 3)} RT`, `${t.wmReference}: ${cbmFormat(data.wmReference, 3)} RT`);
  return lines.join("\n");
}

function cbmDownloadCsv(lang, data) {
  const dimUnit = document.querySelector("[data-dim-unit]")?.value || "cm";
  const weightUnit = document.querySelector("[data-weight-unit]")?.value || "kg";
  const t = cbmText(lang);
  const escapeCsv = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;
  const lines = [["Cargo Name", "Quantity", "Length", "Width", "Height", "Dimension Unit", "Unit Weight", "Weight Unit", "Row Total Weight", "CBM"].map(escapeCsv).join(",")];
  data.rows.forEach((row) => lines.push([row.cargo, row.qty, row.lengthInput, row.widthInput, row.heightInput, dimUnit, row.unitWeightKg === null ? "" : cbmTrim(row.unitWeightKg * CBM_WEIGHT_UNITS[weightUnit].fromKg, 3), weightUnit, row.rowWeightKg === null ? "" : cbmTrim(row.rowWeightKg * CBM_WEIGHT_UNITS[weightUnit].fromKg, 3), cbmTrim(row.cbm, 3)].map(escapeCsv).join(",")));
  lines.push([t.total, data.totalQty, "", "", "", "", "", weightUnit, data.totalWeight === null ? "" : cbmTrim(data.totalWeight * CBM_WEIGHT_UNITS[weightUnit].fromKg, 3), cbmTrim(data.totalCbm, 3)].map(escapeCsv).join(","));
  const blob = new Blob(["\ufeff" + lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url; link.download = t.csvName; document.body.appendChild(link); link.click(); link.remove(); URL.revokeObjectURL(url);
}

function cbmCurrentRowValues(row) {
  return { cargo: row.querySelector("[data-cargo]")?.value || "", qty: row.querySelector("[data-qty]")?.value || "", length: row.querySelector("[data-length]")?.value || "", width: row.querySelector("[data-width]")?.value || "", height: row.querySelector("[data-height]")?.value || "", weight: row.querySelector("[data-weight]")?.value || "" };
}

function wireCbm() {
  const lang = currentLang();
  const rows = document.querySelector("[data-cargo-rows]");
  if (!rows) return;
  const t = cbmText(lang);
  const dimSelect = document.querySelector("[data-dim-unit]");
  const weightSelect = document.querySelector("[data-weight-unit]");
  const referencesPanel = document.querySelector("[data-cbm-references]");
  let currentDimUnit = dimSelect?.value || "cm";
  let currentWeightUnit = weightSelect?.value || "kg";
  rows.innerHTML = cbmRowTemplate(lang);
  renderCbm(lang);
  document.querySelector("[data-add-row]")?.addEventListener("click", () => { rows.insertAdjacentHTML("beforeend", cbmRowTemplate(lang, { cargo: "", qty: "1", length: "", width: "", height: "", weight: "" })); rows.lastElementChild?.querySelector("[data-cargo]")?.focus(); renderCbm(lang); });
  document.querySelector("[data-sample]")?.addEventListener("click", () => {
    if (dimSelect) { dimSelect.value = "cm"; currentDimUnit = "cm"; }
    if (weightSelect) { weightSelect.value = "kg"; currentWeightUnit = "kg"; }
    const activeDivisor = document.querySelector("[data-air-divisor]");
    const activeCustomDivisor = document.querySelector("[data-custom-air-divisor]");
    if (activeDivisor) activeDivisor.value = "6000";
    if (activeCustomDivisor) activeCustomDivisor.closest(".field").hidden = true;
    rows.innerHTML = cbmRowTemplate(lang, { cargo: lang === "ko" ? "카톤 A" : "Carton A", qty: "10", length: "50", width: "40", height: "30", weight: "35" }) + cbmRowTemplate(lang, { cargo: lang === "ko" ? "카톤 B" : "Carton B", qty: "20", length: "60", width: "45", height: "40", weight: "24" });
    renderCbm(lang);
  });
  document.querySelector("[data-reset]")?.addEventListener("click", () => { rows.innerHTML = cbmRowTemplate(lang); renderCbm(lang); });
  rows.addEventListener("click", (event) => {
    const duplicate = event.target.closest("[data-duplicate-row]");
    const del = event.target.closest("[data-delete-row]");
    if (duplicate) { const row = duplicate.closest(".cargo-row"); row.insertAdjacentHTML("afterend", cbmRowTemplate(lang, cbmCurrentRowValues(row))); renderCbm(lang); }
    if (del) { const row = del.closest(".cargo-row"); if (rows.querySelectorAll(".cargo-row").length > 1) row.remove(); else row.querySelectorAll("input").forEach((input) => { input.value = ""; }); renderCbm(lang); }
  });
  dimSelect?.addEventListener("change", () => { cbmConvertDimensions(currentDimUnit, dimSelect.value); currentDimUnit = dimSelect.value; renderCbm(lang); });
  weightSelect?.addEventListener("change", () => { cbmConvertWeights(currentWeightUnit, weightSelect.value); currentWeightUnit = weightSelect.value; renderCbm(lang); });
  referencesPanel?.addEventListener("change", (event) => {
    if (event.target.matches("[data-air-divisor], [data-custom-air-divisor]")) renderCbm(lang);
  });
  document.querySelector("[data-copy]")?.addEventListener("click", async () => {
    const text = cbmCopyText(lang, calculateRows(lang));
    let copied = false;
    try { if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(text); copied = true; } } catch (_) {}
    if (!copied) {
      const area = document.createElement("textarea");
      area.value = text; area.setAttribute("readonly", ""); area.style.position = "fixed"; area.style.opacity = "0"; document.body.appendChild(area); area.focus(); area.select();
      try { copied = document.execCommand("copy"); } catch (_) {}
      area.remove();
    }
    alert(copied ? t.copyAlert : (lang === "ko" ? "복사 권한이 차단되었습니다." : "Copy permission was blocked."));
  });
  document.querySelector("[data-csv]")?.addEventListener("click", () => cbmDownloadCsv(lang, calculateRows(lang)));
  document.addEventListener("input", (event) => { if (event.target.closest(".cargo-row")) renderCbm(lang); });
}

const TRACKING_CARRIERS = [
  { id: "maersk", name: "Maersk", category: "ocean", url: "https://www.maersk.com/tracking/", deepLink: false, prefixes: ["MAEU", "MSKU", "MRSU"] },
  { id: "msc", name: "MSC", category: "ocean", url: "https://www.msc.com/track-a-shipment", deepLink: false, prefixes: ["MSCU", "MEDU"] },
  { id: "cma", name: "CMA CGM", category: "ocean", url: "https://www.cma-cgm.com/ebusiness/tracking", deepLink: false, prefixes: ["CMAU", "CMDU", "CGMU"] },
  { id: "hmm", name: "HMM", category: "ocean", url: "https://www.hmm21.com/cms/business/ebiz/trackTrace/index.jsp", deepLink: false, prefixes: ["HMMU", "HDMU"] },
  { id: "one", name: "ONE", category: "ocean", url: "https://ecomm.one-line.com/one-ecom/manage-shipment/cargo-tracking", deepLink: false, prefixes: ["ONEY"] },
  { id: "cosco", name: "COSCO Shipping", category: "ocean", url: "https://elines.coscoshipping.com/ebusiness/cargoTracking", deepLink: false, prefixes: ["COSU", "CBHU"] },
  { id: "evergreen", name: "Evergreen", category: "ocean", url: "https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do", deepLink: false, prefixes: ["EISU", "EMCU", "EGHU"] },
  { id: "yangming", name: "Yang Ming", category: "ocean", url: "https://www.yangming.com/e-service/track_trace/track_trace_cargo_tracking.aspx", deepLink: false, prefixes: ["YMLU"] },
  { id: "zim", name: "ZIM", category: "ocean", url: "https://www.zim.com/tools/track-a-shipment", deepLink: false, prefixes: ["ZIMU"] },
  { id: "koreanair", name: "Korean Air Cargo", category: "air", url: "https://cargo.koreanair.com/en/tracking", deepLink: false, awbPrefix: "180" },
  { id: "asiana", name: "Asiana Cargo", category: "air", url: "https://www.asianacargo.com/tracking/viewTraceAirWaybill.do", deepLink: false, awbPrefix: "988" },
  { id: "lufthansa", name: "Lufthansa Cargo", category: "air", url: "https://www.lufthansa-cargo.com/en/eservices/etracking", deepLink: false, awbPrefix: "020" },
  { id: "emirates", name: "Emirates SkyCargo", category: "air", url: "https://www.skycargo.com/track-a-shipment/", deepLink: false, awbPrefix: "176" },
  { id: "qatar", name: "Qatar Airways Cargo", category: "air", url: "https://www.qrcargo.com/s/track-your-shipment", deepLink: false, awbPrefix: "157" },
  { id: "cathay", name: "Cathay Cargo", category: "air", url: "https://www.cathaycargo.com/en-us/track-and-trace.html", deepLink: false, awbPrefix: "160" },
  { id: "dhl", name: "DHL", category: "courier", url: "https://www.dhl.com/kr-en/home/tracking.html?tracking-id=", deepLink: true, patterns: [/^\d{10}$/] },
  { id: "fedex", name: "FedEx", category: "courier", url: "https://www.fedex.com/fedextrack/?trknbr=", deepLink: true, patterns: [/^\d{12}$/, /^\d{15}$/, /^\d{20}$/, /^\d{22}$/] },
  { id: "ups", name: "UPS", category: "courier", url: "https://www.ups.com/track?tracknum=", deepLink: true, patterns: [/^1Z[A-Z0-9]{16}$/i, /^T\d{10}$/i, /^\d{9}$/, /^\d{12}$/] },
  { id: "usps", name: "USPS", category: "courier", url: "https://tools.usps.com/go/TrackConfirmAction?qtc_tLabels1=", deepLink: true, patterns: [/^\d{20,22}$/, /^9\d{21,33}$/] }
];

const AIR_PREFIX_HINTS = new Map(TRACKING_CARRIERS.filter((carrier) => carrier.awbPrefix).map((carrier) => [carrier.awbPrefix, carrier]));
const OCEAN_PREFIX_HINTS = new Map(TRACKING_CARRIERS.filter((carrier) => carrier.category === "ocean").flatMap((carrier) => (carrier.prefixes || []).map((prefix) => [prefix, carrier])));

function normalizeTrackingReference(value) {
  return String(value || "").trim().toUpperCase().replace(/[\s-]+/g, "");
}

function prettyTrackingReference(value) {
  const clean = normalizeTrackingReference(value);
  if (/^\d{11}$/.test(clean)) return `${clean.slice(0, 3)}-${clean.slice(3)}`;
  return clean;
}

function maskTrackingReference(value) {
  const clean = normalizeTrackingReference(value);
  if (clean.length <= 6) return clean;
  return `${clean.slice(0, 4)}...${clean.slice(-3)}`;
}

function containerCheckDigit(number) {
  const clean = normalizeTrackingReference(number);
  if (!/^[A-Z]{4}\d{7}$/.test(clean)) return null;
  const map = {};
  let value = 10;
  for (let code = 65; code <= 90; code += 1) {
    while (value % 11 === 0) value += 1;
    map[String.fromCharCode(code)] = value;
    value += 1;
  }
  const payload = clean.slice(0, 10);
  const sum = [...payload].reduce((total, char, index) => {
    const numeric = /\d/.test(char) ? Number(char) : map[char];
    return total + numeric * Math.pow(2, index);
  }, 0);
  const digit = sum % 11 % 10;
  return { expected: digit, actual: Number(clean[10]), valid: digit === Number(clean[10]) };
}

function awbCheckDigit(number) {
  const clean = normalizeTrackingReference(number);
  if (!/^\d{11}$/.test(clean)) return null;
  const serial = clean.slice(3, 10);
  const actual = Number(clean[10]);
  const expected = Number(serial) % 7;
  return { expected, actual, valid: expected === actual };
}

function trackingCarrierUrl(carrier, reference) {
  if (!carrier) return "";
  return carrier.deepLink ? `${carrier.url}${encodeURIComponent(normalizeTrackingReference(reference))}` : carrier.url;
}

function trackingResultLabel(type, lang = currentLang()) {
  const labels = {
    ko: { container: "Container Number", awb: "Air Waybill", courier: "Courier Reference", bl: "해상운송 참조번호", unsupported: "번호 유형 미확정", empty: "입력 대기" },
    en: { container: "Container Number", awb: "Air Waybill", courier: "Courier Reference", bl: "Ocean Carrier Reference", unsupported: "Reference Type Unknown", empty: "Ready" }
  };
  return labels[lang][type] || labels[lang].unsupported;
}

function trackingManualTypeLabel(type, lang = currentLang()) {
  const labels = {
    ko: { auto: "자동 감지", container: "Container", bl: "B/L / Booking", awb: "AWB", courier: "Courier" },
    en: { auto: "Auto detect", container: "Container", bl: "B/L / Booking", awb: "AWB", courier: "Courier" }
  };
  return labels[lang][type] || labels[lang].auto;
}

function trackingBuildResult({ type, status, severity, rows, candidates = [], primaryCarrier = null, reference, note = "" }) {
  return { type, status, severity, rows, candidates, primaryCarrier, reference, note };
}

function inspectTrackingReference(value, manualType = "auto") {
  const lang = currentLang();
  const clean = normalizeTrackingReference(value);
  const selectedType = ["container", "bl", "awb", "courier"].includes(manualType) ? manualType : "auto";
  if (!clean) return { type: "empty", status: "empty", severity: "neutral", rows: [], candidates: [], primaryCarrier: null, reference: "" };

  const rows = [[lang === "ko" ? "Reference number" : "Reference number", prettyTrackingReference(clean)]];
  const unsupported = (type = "unsupported") => trackingBuildResult({
    type,
    status: "unsupported",
    severity: "warning",
    rows: [...rows, [lang === "ko" ? "판정" : "Detection", lang === "ko" ? "번호 유형을 자동으로 확인하지 못했습니다." : "We could not confidently identify this reference type."]],
    reference: clean,
    note: lang === "ko" ? "번호를 다시 확인하거나 유형을 직접 선택한 뒤 운송사 공식 조회 서비스를 이용하세요." : "Check the number, select a type manually, or use the carrier's official tracking service."
  });

  if ((selectedType === "auto" || selectedType === "container") && /^[A-Z]{4}\d{7}$/.test(clean)) {
    const check = containerCheckDigit(clean);
    const owner = clean.slice(0, 4);
    const possible = OCEAN_PREFIX_HINTS.get(owner);
    return trackingBuildResult({
      type: "container",
      status: check?.valid ? "valid" : "invalid",
      severity: check?.valid ? "success" : "danger",
      rows: [...rows, ["Format", "ISO 6346"], [lang === "ko" ? "Check digit" : "Check digit", check?.valid ? (lang === "ko" ? `Valid (${check.actual})` : `Valid (${check.actual})`) : (lang === "ko" ? `Invalid: expected ${check.expected}, got ${check.actual}` : `Invalid: expected ${check.expected}, got ${check.actual}`)], [lang === "ko" ? "Owner code" : "Owner code", owner]],
      candidates: possible ? [possible] : [],
      primaryCarrier: possible || null,
      reference: clean,
      note: lang === "ko" ? "형식 검증은 번호 구조와 check digit만 확인하며, 실제 컨테이너 존재 여부나 운송 상태를 확인하지 않습니다." : "Format validation checks only the number structure and check digit. It does not confirm actual container existence or shipment status."
    });
  }
  if (selectedType === "container") return trackingBuildResult({ type: "container", status: "invalid", severity: "danger", rows: [...rows, ["Format", "ISO 6346"], [lang === "ko" ? "판정" : "Detection", lang === "ko" ? "Container 번호 형식과 일치하지 않습니다." : "This does not match the container number format."]], reference: clean, note: lang === "ko" ? "Container 번호는 일반적으로 소유자 코드 4자와 숫자 7자리로 구성됩니다." : "Container numbers normally use a 4-letter owner code plus 7 digits." });

  if ((selectedType === "auto" || selectedType === "awb") && /^\d{11}$/.test(clean)) {
    const check = awbCheckDigit(clean);
    const prefix = clean.slice(0, 3);
    const serial = clean.slice(3);
    const carrier = AIR_PREFIX_HINTS.get(prefix);
    return trackingBuildResult({
      type: "awb",
      status: check?.valid ? "valid" : "invalid",
      severity: check?.valid ? "success" : "danger",
      rows: [...rows, ["Format", "IATA AWB 3+8"], [lang === "ko" ? "Airline prefix" : "Airline prefix", prefix], ["Serial", serial], [lang === "ko" ? "Check digit" : "Check digit", check?.valid ? (lang === "ko" ? `Valid (${check.actual})` : `Valid (${check.actual})`) : (lang === "ko" ? `Invalid: expected ${check.expected}, got ${check.actual}` : `Invalid: expected ${check.expected}, got ${check.actual}`)]],
      candidates: carrier ? [carrier] : [],
      primaryCarrier: carrier || null,
      reference: clean,
      note: lang === "ko" ? "AWB 형식 검증은 실제 항공화물 존재 또는 운송 상태를 확인하지 않습니다." : "AWB format validation does not confirm actual cargo existence or shipment status."
    });
  }
  if (selectedType === "awb") return trackingBuildResult({ type: "awb", status: "invalid", severity: "danger", rows: [...rows, ["Format", "IATA AWB 3+8"], [lang === "ko" ? "판정" : "Detection", lang === "ko" ? "AWB 번호 형식과 일치하지 않습니다." : "This does not match the AWB number format."]], reference: clean });

  const courierCandidates = TRACKING_CARRIERS.filter((carrier) => carrier.category === "courier" && (carrier.patterns || []).some((pattern) => pattern.test(clean)));
  if ((selectedType === "auto" || selectedType === "courier") && courierCandidates.length) {
    return trackingBuildResult({
      type: "courier",
      status: courierCandidates.length === 1 ? "valid" : "multiple",
      severity: courierCandidates.length === 1 ? "success" : "warning",
      rows: [...rows, ["Format", lang === "ko" ? "Courier tracking number pattern" : "Courier tracking number pattern"], [lang === "ko" ? "판정" : "Detection", courierCandidates.length === 1 ? courierCandidates[0].name : (lang === "ko" ? "여러 운송사 후보" : "Multiple possible carriers")]],
      candidates: courierCandidates,
      primaryCarrier: courierCandidates.length === 1 ? courierCandidates[0] : null,
      reference: clean,
      note: courierCandidates.length > 1 ? (lang === "ko" ? "숫자형 Courier 번호는 여러 운송사 pattern과 겹칠 수 있습니다." : "Numeric courier references can overlap across carriers.") : ""
    });
  }
  if (selectedType === "courier") return trackingBuildResult({ type: "courier", status: "unknown", severity: "warning", rows: [...rows, [lang === "ko" ? "판정" : "Detection", lang === "ko" ? "확인 가능한 Courier pattern과 일치하지 않습니다." : "This does not match a verified courier pattern."]], reference: clean });

  const oceanCandidates = TRACKING_CARRIERS.filter((carrier) => carrier.category === "ocean" && (carrier.prefixes || []).some((prefix) => clean.startsWith(prefix)));
  if ((selectedType === "auto" || selectedType === "bl") && oceanCandidates.length) {
    return trackingBuildResult({
      type: "bl",
      status: "possible",
      severity: "warning",
      rows: [...rows, [lang === "ko" ? "Prefix" : "Prefix", oceanCandidates.map((carrier) => carrier.prefixes.find((prefix) => clean.startsWith(prefix))).filter(Boolean).join(", ")], [lang === "ko" ? "판정" : "Detection", lang === "ko" ? "가능한 해상운송 참조번호" : "Possible ocean carrier reference"]],
      candidates: oceanCandidates,
      primaryCarrier: oceanCandidates.length === 1 ? oceanCandidates[0] : null,
      reference: clean,
      note: lang === "ko" ? "B/L 또는 Booking 번호 여부는 운송사 공식 조회 페이지에서 확인하세요." : "Confirm whether this is a B/L or Booking reference on the carrier's official tracking page."
    });
  }

  if ((selectedType === "auto" || selectedType === "bl") && /^[A-Z0-9]{6,24}$/.test(clean)) {
    return trackingBuildResult({
      type: "bl",
      status: "unknown",
      severity: "neutral",
      rows: [...rows, ["Format", lang === "ko" ? "Carrier-specific reference" : "Carrier-specific reference"], [lang === "ko" ? "판정" : "Detection", lang === "ko" ? "Carrier를 확정할 수 없습니다." : "Carrier cannot be confirmed."]],
      candidates: [],
      primaryCarrier: null,
      reference: clean,
      note: lang === "ko" ? "B/L 또는 Booking 번호는 carrier별 규칙이 다르므로 공식 조회 화면에서 확인하세요." : "B/L and Booking references are carrier-specific. Confirm on the official carrier page."
    });
  }

  return unsupported(selectedType === "auto" ? "unsupported" : selectedType);
}

function trackingStatusText(result, lang = currentLang()) {
  if (result.status === "empty") return lang === "ko" ? "번호를 입력하세요" : "Enter a reference number";
  if (result.status === "valid") return lang === "ko" ? "형식 검증 완료" : "Format validated";
  if (result.status === "invalid") return lang === "ko" ? "형식 확인 필요" : "Check the format";
  if (result.status === "multiple") return lang === "ko" ? "여러 운송사 후보" : "Multiple possible carriers";
  if (result.status === "unknown") return lang === "ko" ? "가능한 참조번호" : "Possible reference";
  if (result.status === "unsupported") return lang === "ko" ? "번호 유형 미확정" : "Reference type unknown";
  return lang === "ko" ? "가능한 운송사 후보" : "Possible carrier match";
}

function renderTrackingResult(target, result) {
  if (!target) return;
  const lang = currentLang();
  if (result.type === "empty") {
    target.hidden = true;
    target.innerHTML = "";
    return;
  }
  target.hidden = false;
  const primary = result.primaryCarrier;
  const canOpenPrimary = primary && result.status !== "invalid";
  const cta = canOpenPrimary ? `<a class="primary-btn" href="${escapeAttribute(trackingCarrierUrl(primary, result.reference))}" target="_blank" rel="noopener"><i data-lucide="external-link"></i>${lang === "ko" ? "공식 조회 열기" : "Open official tracking"}</a>` : "";
  const candidateLinks = result.candidates.length ? `<div class="tracking-candidates"><h3>${lang === "ko" ? "가능한 운송사" : "Possible carriers"}</h3>${result.candidates.map((carrier) => `<a href="${escapeAttribute(trackingCarrierUrl(carrier, result.reference))}" target="_blank" rel="noopener"><strong>${escapeHtml(carrier.name)}</strong><span>${carrier.deepLink ? (lang === "ko" ? "번호 전달 지원" : "Prefill supported") : (lang === "ko" ? "공식 페이지" : "Official page")}</span></a>`).join("")}</div>` : "";
  const carrierValue = result.candidates.length ? result.candidates.map((carrier) => carrier.name).join(", ") : (lang === "ko" ? "자동 식별 불가" : "Not identified");
  const copyLabel = lang === "ko" ? "복사" : "Copy";
  const rows = [...result.rows, [lang === "ko" ? "Possible carrier" : "Possible carrier", carrierValue]];
  target.innerHTML = `<article class="tracking-result-card is-${escapeAttribute(result.severity)}"><div class="tracking-result-head"><div><span class="kicker">${escapeHtml(trackingResultLabel(result.type, lang))}</span><h2>${escapeHtml(trackingStatusText(result, lang))}</h2></div><span class="tracking-status-pill"><i data-lucide="${result.severity === "success" ? "check-circle-2" : result.severity === "danger" ? "x-circle" : "alert-circle"}"></i>${escapeHtml(trackingStatusText(result, lang))}</span></div><div class="tracking-reference-line"><strong>${escapeHtml(prettyTrackingReference(result.reference))}</strong><button type="button" data-copy-track="${escapeAttribute(result.reference)}">${copyLabel}</button><span aria-live="polite"></span></div><dl class="tracking-kv-grid">${rows.map(([key, value]) => `<div><dt>${escapeHtml(key)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl>${result.note ? `<p class="tracking-result-note">${escapeHtml(result.note)}</p>` : ""}${candidateLinks}<div class="tracking-result-actions">${cta}<a class="secondary-btn" href="#carrier-directory">${lang === "ko" ? "운송사 공식 조회 보기" : "View carrier directory"}</a></div></article>`;
  refreshIcons();
}

function trackingDirectoryMarkup() {
  const lang = currentLang();
  const groups = ["ocean", "air", "courier"];
  const groupLabels = {
    ko: { ocean: "해상 운송", air: "항공 화물", courier: "특송" },
    en: { ocean: "Ocean Carriers", air: "Air Cargo", courier: "Courier" }
  };
  const helpers = {
    ko: { ocean: "Container, B/L, Booking reference는 운송사 공식 화면에서 확인합니다.", air: "AWB는 항공사 cargo portal에서 확인합니다.", courier: "공식 parcel tracking 화면으로 이동합니다." },
    en: { ocean: "Use official carrier screens for container, B/L, and booking references.", air: "Use the airline cargo portal for AWB tracking.", courier: "Open official parcel tracking services." }
  };
  return groups.map((group, index) => `<details class="tracking-directory-group" ${index === 0 ? "open" : ""}><summary><span><strong>${groupLabels[lang][group]}</strong><small>${helpers[lang][group]}</small></span><b>${TRACKING_CARRIERS.filter((carrier) => carrier.category === group).length}</b></summary><div class="tracking-directory-list">${TRACKING_CARRIERS.filter((carrier) => carrier.category === group).map((carrier) => `<a href="${escapeAttribute(carrier.url)}" target="_blank" rel="noopener" data-track-carrier-link="${escapeAttribute(carrier.id)}"><strong>${escapeHtml(carrier.name)}</strong><span>${carrier.deepLink ? (lang === "ko" ? "번호 전달 지원" : "Prefill supported") : (lang === "ko" ? "공식 페이지" : "Official page")}</span></a>`).join("")}</div></details>`).join("");
}

function renderTrackingRecent(target) {
  if (!target) return;
  const lang = currentLang();
  const items = JSON.parse(localStorage.getItem("logilee-recent-track-v2") || "[]");
  if (!items.length) {
    target.hidden = true;
    target.innerHTML = "";
    return;
  }
  target.hidden = false;
  target.innerHTML = `<div class="tracking-recent-head"><h2>${lang === "ko" ? "최근 검사" : "Recent Checks"}</h2><button type="button" data-clear-track-recent>${lang === "ko" ? "지우기" : "Clear"}</button></div><div class="tracking-recent-list">${items.map((item) => `<span>${escapeHtml(item.type)} · ${escapeHtml(item.masked)}</span>`).join("")}</div>`;
}

function wireTracking() {
  const form = document.querySelector("[data-track-form]");
  if (!form) return;
  const lang = currentLang();
  const number = form.querySelector("[data-track-number]");
  const type = form.querySelector("[data-track-type]");
  const output = document.querySelector("[data-track-output]");
  const recent = document.querySelector("[data-recent]");
  const directory = document.querySelector("[data-carrier-directory]");
  if (type) {
    const options = ["auto", "container", "bl", "awb", "courier"];
    type.innerHTML = options.map((item) => `<option value="${item === "auto" ? "" : item}">${escapeHtml(trackingManualTypeLabel(item, lang))}</option>`).join("");
  }
  if (directory) directory.innerHTML = trackingDirectoryMarkup();
  const saveRecent = (result) => {
    if (!result.reference || result.type === "empty") return;
    const next = { type: trackingResultLabel(result.type, lang), masked: maskTrackingReference(result.reference), time: Date.now() };
    const items = JSON.parse(localStorage.getItem("logilee-recent-track-v2") || "[]");
    localStorage.setItem("logilee-recent-track-v2", JSON.stringify([next, ...items.filter((item) => item.masked !== next.masked)].slice(0, 5)));
    renderTrackingRecent(recent);
  };
  const render = (persist = false) => {
    const result = inspectTrackingReference(number.value, type?.value || "auto");
    renderTrackingResult(output, result);
    if (persist) saveRecent(result);
    return result;
  };
  number.addEventListener("input", () => render(false));
  type?.addEventListener("change", () => render(false));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    render(true);
  });
  document.addEventListener("click", async (event) => {
    const clear = event.target.closest("[data-clear-track-recent]");
    if (clear) { localStorage.removeItem("logilee-recent-track-v2"); renderTrackingRecent(recent); return; }
    const copy = event.target.closest("[data-copy-track]");
    if (!copy) return;
    const feedback = copy.nextElementSibling;
    const text = copy.dataset.copyTrack || "";
    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        copied = true;
      }
    } catch (_) {}
    if (!copied) {
      try {
        const area = document.createElement("textarea");
        area.value = text;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.focus();
        area.select();
        copied = document.execCommand("copy");
        area.remove();
      } catch (_) {}
    }
    if (feedback) feedback.textContent = copied ? (lang === "ko" ? "복사됨" : "Copied") : (lang === "ko" ? "복사 실패" : "Copy failed");
  });
  renderTrackingRecent(recent);
  render(false);
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

function freightPeriodKey(dateValue) {
  const match = String(dateValue || "").match(/^(\d{4})-(\d{2})-\d{2}/);
  return match ? `${match[1]}-${match[2]}` : "";
}

function formatPeriod(dateValue, lang = currentLang()) {
  const match = String(dateValue || "").match(/^(\d{4})-(\d{2})-\d{2}/);
  if (!match) return "—";
  const year = match[1];
  const month = Number(match[2]);
  if (!Number.isInteger(month) || month < 1 || month > 12) return "—";
  if (lang === "ko") return `${year}년 ${month}월`;
  const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][month - 1];
  return `${monthName} ${year}`;
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
  const sortedRows = rows.slice().sort((a, b) => freightPeriodKey(b.obs_date).localeCompare(freightPeriodKey(a.obs_date)));
  return FREIGHT_SERIES.map(([label, key, unit]) => {
    const latest = sortedRows.find((row) => Number.isFinite(Number(row[key])));
    const previous = sortedRows.find((row) => row !== latest && Number.isFinite(Number(row[key])));
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
      <small>${formatPeriod(item.period)}</small>
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

async function getGlobalFreightData() {
  return fetchJson(new URL("../assets/logilee-freight-data.json?v=freight-charges-actionable-20260904", location.href).toString(), {
    cacheKey: "logilee:global-freight:charges-actionable-20260904",
    ttl: 24 * 60 * 60 * 1000
  });
}

function formatFreightDate(value, lang = currentLang()) {
  const parsed = new Date(value);
  if (!Number.isFinite(parsed.getTime())) return value || "N/A";
  if (lang === "ko") {
    return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long" }).format(parsed);
  }
  return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(parsed);
}

function formatQuarterLabel(value, lang = currentLang()) {
  const match = String(value || "").match(/^(\d{4})Q0?([1-4])$/);
  if (!match) return value || "N/A";
  return lang === "ko" ? `${match[1]}년 Q${match[2]}` : `Q${match[2]} ${match[1]}`;
}

function formatSignedValue(value, digits = 2) {
  if (!Number.isFinite(value)) return "N/A";
  return `${value >= 0 ? "+" : ""}${formatRate(value, digits)}`;
}

function freightMetricCard(title, current, previous, change, period, note, labels, options = {}) {
  const digits = options.digits ?? 2;
  const changeClass = Number.isFinite(change) ? `trend-${change >= 0 ? "up" : "down"}` : "";
  return `
    <article class="freight-metric-card">
      <div>
        <span class="kicker">${escapeHtml(period || labels.latestObservation)}</span>
        <h3>${escapeHtml(title)}</h3>
      </div>
      <strong>${Number.isFinite(current) ? formatRate(current, digits) : "N/A"}</strong>
      <dl>
        <div><dt>${labels.previous}</dt><dd>${Number.isFinite(previous) ? formatRate(previous, digits) : "N/A"}</dd></div>
        <div><dt>${labels.change}</dt><dd class="${changeClass}">${formatSignedValue(change, digits)}</dd></div>
      </dl>
      <p>${escapeHtml(note)}</p>
    </article>
  `;
}

const FREIGHT_CHARGE_PROVIDERS = [
  {
    id: "hmm",
    mode: "ocean",
    name: "HMM",
    resources: [
      ["quote", "Hi Quote", "Hi Quote", "https://www.hmm21.com/e-service/hiquote/quotationNew.do", true, "LINK_ONLY"],
      ["surcharge", "Surcharge Inquiry", "Surcharge Inquiry", "https://www.hmm21.com/e-service/general/tariffRate/SurchargeInquiry.do", false, "LINK_ONLY"],
      ["tariff", "HMM Tariff (United States)", "HMM Tariff (United States)", "https://www.hmm21.com/e-service/general/tariffRate/HmmTariff.do", false, "LINK_ONLY"],
      ["demdet", "DEM/DET Tariff", "DEM/DET Tariff", "https://www.hmm21.com/e-service/general/tariffRate/DemDetTariff.do", false, "LINK_ONLY"],
      ["local", "Korea Import Surcharge", "Korea Import Surcharge", "https://www.hmm21.com/e-service/import/quickInquiry/DomImpSchgRt.do", false, "LINK_ONLY"],
      ["schedule", "Schedule", "Schedule", "https://www.hmm21.com/e-service/general/schedule/ScheduleMain.do", false, "LINK_ONLY"]
    ],
    noteKo: "HMM 공식 e-Service에서 견적, surcharge, DEM/DET, 한국 수입 local charge를 확인합니다.",
    noteEn: "Use HMM's official e-Service for quote, surcharge, DEM/DET, and Korea import local charge lookups."
  },
  {
    id: "maersk",
    mode: "ocean",
    name: "Maersk",
    resources: [
      ["quote", "Maersk Spot / Quote", "Maersk Spot / Quote", "https://www.maersk.com/book", true, "LINK_ONLY"],
      ["demdet", "Detention & Demurrage Terms", "Detention & Demurrage Terms", "https://terms.maersk.com/dnd", false, "LINK_ONLY"],
      ["local", "Local Information", "Local Information", "https://www.maersk.com/local-information", false, "LINK_ONLY"],
      ["schedule", "Schedules", "Schedules", "https://www.maersk.com/schedules", false, "LINK_ONLY"]
    ],
    noteKo: "국가별 local information과 D&D 조회는 Maersk 공식 페이지에서 확인합니다.",
    noteEn: "Check country local information and D&D details through Maersk's official pages."
  },
  {
    id: "msc",
    mode: "ocean",
    name: "MSC",
    resources: [
      ["local", "Local Information", "Local Information", "https://www.msc.com/en/local-information", false, "LINK_ONLY"],
      ["schedule", "Schedules", "Schedules", "https://www.msc.com/en/track-a-shipment", false, "LINK_ONLY"],
      ["quote", "myMSC", "myMSC", "https://www.msc.com/en/solutions/digital-business-solutions/mymsc", true, "LINK_ONLY"]
    ],
    noteKo: "MSC 공식 local information과 myMSC를 통해 국가별 조건과 예약/조회 기능을 확인합니다.",
    noteEn: "Use MSC local information and myMSC for country-specific conditions and booking tools."
  },
  {
    id: "cma-cgm",
    mode: "ocean",
    name: "CMA CGM",
    resources: [
      ["quote", "SpotOn / Quote", "SpotOn / Quote", "https://www.cma-cgm.com/my-cma-cgm/prices/spoton", true, "LINK_ONLY"],
      ["tariff", "Rates & Tariffs", "Rates & Tariffs", "https://www.cma-cgm.com/my-cma-cgm/prices/rates-tariffs", false, "LINK_ONLY"],
      ["demdet", "Demurrage and Detention Tariffs", "Demurrage and Detention Tariffs", "https://www.cma-cgm.com/my-cma-cgm/prices/rates-tariffs/demurrage-detention", false, "LINK_ONLY"],
      ["schedule", "Schedules", "Schedules", "https://www.cma-cgm.com/ebusiness/schedules", false, "LINK_ONLY"]
    ],
    noteKo: "CMA CGM 공식 rate/tariff 도구에서 carrier charge와 DEM/DET 자료를 확인합니다.",
    noteEn: "Use CMA CGM's official rates and tariff tools for carrier charges and DEM/DET resources."
  },
  {
    id: "cosco",
    mode: "ocean",
    name: "COSCO SHIPPING",
    resources: [
      ["local", "COSCO SHIPPING Lines", "COSCO SHIPPING Lines", "https://elines.coscoshipping.com/ebusiness/", true, "LINK_ONLY"],
      ["schedule", "Sailing Schedule", "Sailing Schedule", "https://elines.coscoshipping.com/ebusiness/sailingSchedule", false, "LINK_ONLY"]
    ],
    noteKo: "COSCO 공식 eBusiness에서 schedule 및 업무 조회를 확인합니다.",
    noteEn: "Use COSCO's official eBusiness tools for schedules and service lookups."
  },
  {
    id: "one",
    mode: "ocean",
    name: "ONE",
    resources: [
      ["quote", "ONE Quote", "ONE Quote", "https://ecomm.one-line.com/one-ecom", true, "LINK_ONLY"],
      ["site", "ONE local sites / advisories", "ONE local sites / advisories", "https://us.one-line.com/", false, "LINK_ONLY"],
      ["schedule", "Point-to-Point Schedule", "Point-to-Point Schedule", "https://ecomm.one-line.com/one-ecom/schedule/point-to-point-schedule", false, "LINK_ONLY"]
    ],
    noteKo: "ONE 공식 eCommerce와 local information에서 견적/스케줄/지역 charge 자료를 확인합니다.",
    noteEn: "Use ONE eCommerce and local information for quote, schedule, and local charge resources."
  },
  {
    id: "evergreen",
    mode: "ocean",
    name: "Evergreen",
    resources: [
      ["local", "Local Information", "Local Information", "https://www.evergreen-line.com/", false, "LINK_ONLY"],
      ["schedule", "Sailing Schedule", "Sailing Schedule", "https://www.evergreen-line.com/route/jsp/TransitTime.jsp", false, "LINK_ONLY"],
      ["quote", "ShipmentLink", "ShipmentLink", "https://www.shipmentlink.com/", true, "LINK_ONLY"]
    ],
    noteKo: "Evergreen 공식 사이트와 ShipmentLink에서 스케줄 및 업무 조회를 확인합니다.",
    noteEn: "Use Evergreen and ShipmentLink official tools for schedules and shipment services."
  },
  {
    id: "yang-ming",
    mode: "ocean",
    name: "Yang Ming",
    resources: [
      ["local", "Local Information", "Local Information", "https://www.yangming.com/", false, "LINK_ONLY"],
      ["schedule", "Schedule", "Schedule", "https://www.yangming.com/e-service/schedule/PointToPointSchedule.aspx", false, "LINK_ONLY"],
      ["quote", "e-Service", "e-Service", "https://www.yangming.com/e-service/", true, "LINK_ONLY"]
    ],
    noteKo: "Yang Ming 공식 e-Service에서 스케줄과 선적 관련 조회를 확인합니다.",
    noteEn: "Use Yang Ming's official e-Service for schedules and shipment lookups."
  },
  {
    id: "hapag-lloyd",
    mode: "ocean",
    name: "Hapag-Lloyd",
    resources: [
      ["quote", "Quick Quotes", "Quick Quotes", "https://www.hapag-lloyd.com/en/online-business/quotation/quick-quotes.html", true, "LINK_ONLY"],
      ["local", "Tariffs", "Tariffs", "https://www.hapag-lloyd.com/en/online-business/tariffs.html", false, "LINK_ONLY"],
      ["demdet", "Detention and Demurrage", "Detention and Demurrage", "https://www.hapag-lloyd.com/en/online-business/quotation/detention-demurrage.html", false, "LINK_ONLY"],
      ["schedule", "Schedules", "Schedules", "https://www.hapag-lloyd.com/en/online-business/schedule.html", false, "LINK_ONLY"]
    ],
    noteKo: "Hapag-Lloyd 공식 quotation, tariff, D&D 도구를 사용해 조건을 확인합니다.",
    noteEn: "Use Hapag-Lloyd quotation, tariff, and D&D tools for official checks."
  },
  {
    id: "zim",
    mode: "ocean",
    name: "ZIM",
    resources: [
      ["quote", "Request a Quote", "Request a Quote", "https://www.zim.com/tools/request-a-quote", true, "LINK_ONLY"],
      ["demdet", "Demurrage & Detention Tariff", "Demurrage & Detention Tariff", "https://www.zim.com/tools/demurrage-detention-tariff?containerType=All&countryCode=US&direction=false&portCode=USNYC", false, "LINK_ONLY"],
      ["local", "Tariff Calculator / Local Charges", "Tariff Calculator / Local Charges", "https://www.zim.com/tools/tariff-calculator", false, "LINK_ONLY"],
      ["schedule", "Schedules", "Schedules", "https://www.zim.com/schedules", false, "LINK_ONLY"]
    ],
    noteKo: "ZIM 공식 도구에서 D&D와 스케줄, 고객용 quote 기능을 확인합니다.",
    noteEn: "Use ZIM official tools for D&D, schedules, and customer quote functions."
  },
  {
    id: "korean-air",
    mode: "air",
    name: "Korean Air Cargo",
    resources: [
      ["tariff", "Cargo Tariff Guide", "Cargo Tariff Guide", "https://cargo.koreanair.com/ko/node/393", false, "LINK_ONLY"],
      ["terminal", "Storage / Terminal Charges", "Storage / Terminal Charges", "https://cargosvc.koreanair.com/tms/storageChargeInfo.do", false, "LINK_ONLY"],
      ["schedule", "Flight Schedule", "Flight Schedule", "https://cargo.koreanair.com/en/schedule/search", false, "LINK_ONLY"]
    ],
    noteKo: "대한항공카고 공식 tariff 안내와 터미널/보관료 조회를 확인합니다.",
    noteEn: "Use Korean Air Cargo's official tariff guide and terminal/storage charge lookup."
  },
  {
    id: "lufthansa-cargo",
    mode: "air",
    name: "Lufthansa Cargo",
    resources: [
      ["quote", "eServices", "eServices", "https://www.lufthansa-cargo.com/en/eservices", true, "LINK_ONLY"],
      ["tariff", "General Terms", "General Terms", "https://www.lufthansa-cargo.com/en/meta/meta/company/general-terms", false, "LINK_ONLY"],
      ["schedule", "Schedule", "Schedule", "https://www.lufthansa-cargo.com/en/eservices/schedules", false, "LINK_ONLY"]
    ],
    noteKo: "Lufthansa Cargo 공식 eServices와 약관에서 항공화물 조건을 확인합니다.",
    noteEn: "Use Lufthansa Cargo eServices and terms for air cargo conditions."
  },
  {
    id: "cathay-cargo",
    mode: "air",
    name: "Cathay Cargo",
    resources: [
      ["surcharge", "Cargo Fuel Surcharge", "Cargo Fuel Surcharge", "https://www.cathaycargo.com/en-us/help-and-support/cargo-fuel-surcharge.html", false, "LINK_ONLY"],
      ["quote", "Booking", "Booking", "https://www.cathaycargo.com/en-us/manage-booking.html", true, "LINK_ONLY"],
      ["schedule", "Flight Schedule", "Flight Schedule", "https://www.cathaycargo.com/en-us/tools/flight-schedule.html", false, "LINK_ONLY"]
    ],
    noteKo: "Cathay Cargo 공식 fuel surcharge와 booking/schedule 자료를 확인합니다.",
    noteEn: "Use Cathay Cargo's official fuel surcharge, booking, and schedule resources."
  },
  {
    id: "singapore-airlines-cargo",
    mode: "air",
    name: "Singapore Airlines Cargo",
    resources: [
      ["quote", "myCargo", "myCargo", "https://www.siacargo.com/", true, "LINK_ONLY"],
      ["schedule", "Flight Schedule", "Flight Schedule", "https://www.siacargo.com/eServices/FlightSchedule", false, "LINK_ONLY"]
    ],
    noteKo: "Singapore Airlines Cargo 공식 서비스에서 booking과 schedule을 확인합니다.",
    noteEn: "Use Singapore Airlines Cargo official services for booking and schedules."
  },
  {
    id: "emirates-skycargo",
    mode: "air",
    name: "Emirates SkyCargo",
    resources: [
      ["quote", "Emirates SkyCargo", "Emirates SkyCargo", "https://www.skycargo.com/", true, "LINK_ONLY"],
      ["schedule", "Schedules", "Schedules", "https://www.skycargo.com/shipping-services/schedules/", false, "LINK_ONLY"]
    ],
    noteKo: "Emirates SkyCargo 공식 사이트에서 booking/contact 및 schedule을 확인합니다.",
    noteEn: "Use Emirates SkyCargo official resources for booking/contact and schedules."
  },
  {
    id: "qatar-airways-cargo",
    mode: "air",
    name: "Qatar Airways Cargo",
    resources: [
      ["quote", "Digital Lounge", "Digital Lounge", "https://www.qrcargo.com/s/digital-lounge", true, "LINK_ONLY"],
      ["schedule", "Flight Schedule", "Flight Schedule", "https://www.qrcargo.com/s/flight-schedule", false, "LINK_ONLY"]
    ],
    noteKo: "Qatar Airways Cargo 공식 Digital Lounge와 schedule 자료를 확인합니다.",
    noteEn: "Use Qatar Airways Cargo's official Digital Lounge and schedule resources."
  }
];

const FREIGHT_CHARGE_GLOSSARY = [
  ["ocean-freight", "Ocean Freight", "해상 운임", ["ocean"], "main", "Carrier", "Quote Required / Contractual", "선사가 제공하는 해상 본운송 운임입니다. 실제 금액은 route, 장비, 계약, spot 조건에 따라 견적으로 확인합니다.", "Main ocean transportation charge quoted by the carrier. The actual amount depends on route, equipment, contract, and spot conditions.", "quote"],
  ["air-freight", "Air Freight", "항공 운임", ["air"], "main", "Airline / GSSA", "Quote Required / Contractual", "항공 본운송 운임입니다. chargeable weight, 서비스, 계약 조건에 따라 견적으로 확인합니다.", "Main air transportation charge. Verify by quote based on chargeable weight, service, and contract terms.", "quote"],
  ["thc", "THC", "THC", ["ocean", "air"], "terminal", "Carrier or Terminal", "Published / Provider-specific", "Terminal Handling Charge입니다. 터미널 처리와 관련된 비용으로 운송사 local charge 또는 터미널 tariff에서 확인합니다.", "Terminal Handling Charge related to terminal handling. Verify in carrier local charges or terminal tariffs.", "carrier_terminal"],
  ["doc", "DOC", "DOC", ["ocean"], "origin", "Carrier", "Published / Provider-specific", "선적 서류 또는 documentation 처리와 관련된 운송사 charge입니다.", "Carrier documentation-related charge. Verify through the selected carrier's local charges.", "carrier"],
  ["do", "D/O", "D/O", ["ocean", "air"], "destination", "Carrier / Airline / Agent", "Published / Provider-specific", "Delivery Order 또는 화물 인도 관련 문서/업무 charge입니다. 목적지 운송사 또는 agent 조건을 확인합니다.", "Delivery Order or release-related document/service charge. Verify with destination carrier or agent conditions.", "carrier"],
  ["baf", "BAF", "BAF", ["ocean"], "surcharge", "Carrier", "Variable / Provider-specific", "Bunker Adjustment Factor입니다. 연료비 변동을 반영하는 운송사 surcharge로 carrier tariff 또는 견적에서 확인합니다.", "Bunker Adjustment Factor. A carrier surcharge reflecting fuel cost movement; verify in carrier tariff or quote.", "carrier"],
  ["lss", "LSS", "LSS", ["ocean"], "surcharge", "Carrier", "Variable / Provider-specific", "Low Sulphur Surcharge입니다. 저유황유 또는 배출 규제 관련 비용으로 carrier 조건에 따라 달라집니다.", "Low Sulphur Surcharge related to low-sulphur fuel or emissions rules. It varies by carrier conditions.", "carrier"],
  ["pss", "PSS", "PSS", ["ocean", "air"], "surcharge", "Carrier / Airline", "Conditional / Provider-specific", "Peak Season Surcharge입니다. 성수기 또는 수요 증가 구간에 조건부로 적용될 수 있습니다.", "Peak Season Surcharge. It may apply conditionally during peak demand periods.", "provider"],
  ["gri", "GRI", "GRI", ["ocean"], "surcharge", "Carrier", "Variable / Provider-specific", "General Rate Increase입니다. 특정 기간 또는 trade lane에 운임 인상 공지가 적용될 수 있습니다.", "General Rate Increase. A carrier-announced increase that may apply by period or trade lane.", "carrier"],
  ["ebs", "EBS", "EBS", ["ocean"], "surcharge", "Carrier", "Variable / Provider-specific", "Emergency Bunker Surcharge입니다. 급격한 연료비 변동 등으로 적용될 수 있는 carrier surcharge입니다.", "Emergency Bunker Surcharge. A carrier surcharge that may apply during sharp fuel cost changes.", "carrier"],
  ["caf", "CAF", "CAF", ["ocean", "air"], "surcharge", "Carrier / Airline", "Variable / Provider-specific", "Currency Adjustment Factor입니다. 통화 변동을 반영할 수 있는 surcharge입니다.", "Currency Adjustment Factor. A surcharge that may reflect currency movement.", "provider"],
  ["dem", "DEM", "DEM", ["ocean"], "conditional", "Carrier / Terminal", "Conditional / Published", "Demurrage입니다. free time 이후 컨테이너가 터미널에 남아 있을 때 발생할 수 있습니다. carrier/terminal/date/equipment별로 확인합니다.", "Demurrage may apply when a container remains at the terminal after free time. Verify by carrier, terminal, date, and equipment.", "demdet"],
  ["det", "DET", "DET", ["ocean"], "conditional", "Carrier", "Conditional / Published", "Detention입니다. 컨테이너를 터미널 밖에서 free time 이후 보유할 때 발생할 수 있습니다.", "Detention may apply when carrier equipment is kept outside the terminal after free time.", "demdet"],
  ["storage", "Storage", "Storage", ["ocean", "air", "road-rail"], "conditional", "Terminal / Warehouse", "Conditional / Published", "터미널 또는 창고 보관료입니다. free time, 기간, 화물 상태, 시설 정책에 따라 달라집니다.", "Terminal or warehouse storage. It varies by free time, duration, cargo condition, and facility rules.", "terminal"],
  ["wharfage", "Wharfage", "Wharfage", ["ocean"], "terminal", "Government / Port / Terminal", "Published / Authority", "항만 시설 사용 또는 부두 관련 요금입니다. 항만/터미널 공식 tariff에서 확인합니다.", "Port or wharf-related charge. Verify through port or terminal official tariffs.", "authority"],
  ["pfs", "PFS", "PFS", ["ocean"], "terminal", "Government / Port / Terminal", "Published / Authority", "Port Facility Security 관련 charge입니다. 국가/항만 정책에 따라 확인합니다.", "Port Facility Security-related charge. Verify by country and port authority rules.", "authority"],
  ["psc", "PSC", "PSC", ["ocean"], "terminal", "Government / Port / Terminal", "Published / Authority", "Port Safety Charge 등 항만 안전 관련 charge입니다. 공식 항만/기관 자료를 확인합니다.", "Port Safety Charge or similar safety-related port charge. Verify official port or authority sources.", "authority"],
  ["ccf", "CCF", "CCF", ["ocean"], "conditional", "Carrier", "Conditional / Provider-specific", "Container Cleaning Fee입니다. 컨테이너 반납 상태나 carrier 정책에 따라 발생할 수 있습니다.", "Container Cleaning Fee. It may apply based on container return condition or carrier policy.", "carrier"],
  ["dg", "DG Surcharge", "DG Surcharge", ["ocean", "air", "road-rail"], "conditional", "Carrier / Airline / Transport Provider", "Conditional / Quote Required", "위험물 취급과 관련된 추가 비용입니다. DG class, 포장, route, provider 조건을 확인합니다.", "Additional charge for dangerous goods handling. Verify DG class, packaging, route, and provider conditions.", "quote"],
  ["reefer", "Reefer Surcharge", "Reefer Surcharge", ["ocean", "road-rail"], "conditional", "Carrier / Terminal / Transport Provider", "Conditional / Quote Required", "냉동·냉장 장비와 전력/모니터링 관련 비용입니다. 장비와 시설 조건에 따라 달라집니다.", "Charge related to reefer equipment, power, or monitoring. It varies by equipment and facility rules.", "quote"],
  ["oog", "OOG Surcharge", "OOG Surcharge", ["ocean", "road-rail", "air"], "conditional", "Carrier / Airline / Transport Provider", "Conditional / Quote Required", "규격 외 화물 취급 비용입니다. 크기, 중량, 장비, route에 따라 개별 확인합니다.", "Out-of-gauge or oversized cargo handling charge. Verify individually by dimensions, weight, equipment, and route.", "quote"],
  ["awb", "AWB Fee", "AWB Fee", ["air"], "origin", "Airline / GSSA", "Published / Provider-specific", "Air Waybill 발행 또는 documentation 관련 항공화물 charge입니다.", "Air Waybill or documentation-related air cargo charge.", "airline"],
  ["fuel", "Fuel Surcharge", "Fuel Surcharge", ["air", "road-rail"], "surcharge", "Airline / Transport Provider", "Variable / Provider-specific", "연료비 변동을 반영하는 surcharge입니다. airline/provider의 공식 조건 또는 견적으로 확인합니다.", "Surcharge reflecting fuel cost movement. Verify through official airline/provider terms or quote.", "provider"],
  ["security", "Security Surcharge", "Security Surcharge", ["air", "ocean"], "surcharge", "Airline / Carrier / Terminal", "Published / Provider-specific", "보안 검색 또는 보안 관련 운영 비용입니다. mode와 provider별 조건을 확인합니다.", "Security screening or security-related operating charge. Verify by mode and provider.", "provider"],
  ["customs-broker", "Customs Broker Service Fee", "관세사 통관대행 수수료", ["ocean", "air", "road-rail"], "customs", "Customs Broker", "Market / Contractual", "관세사 또는 통관 대행 서비스 비용입니다. 정부 세금과 구분하고 업무 범위별로 확인합니다.", "Customs broker or clearance service fee. Keep it separate from government taxes and verify by service scope.", "broker"],
  ["duty-tax", "Duty / VAT / GST", "관세 / VAT / GST", ["ocean", "air", "road-rail"], "customs", "Government / Customs Authority", "Government-set / Formula-based", "품목분류, 과세가격, 원산지, 수입국 규정에 따라 발생할 수 있는 정부 부담금입니다.", "Government charges that may depend on classification, customs value, origin, and import-country rules.", "government"],
  ["trucking", "Base Trucking / Drayage", "기본 운송 / Drayage", ["road-rail", "ocean", "air"], "origin", "Transport Provider", "Quote Required / Market", "내륙 운송 또는 항만/공항 drayage 비용입니다. 거리, 장비, 대기, 톨, provider 조건에 따라 견적으로 확인합니다.", "Inland transport or port/airport drayage charge. Verify by quote based on distance, equipment, waiting, tolls, and provider terms.", "quote"],
  ["toll", "Toll", "통행료", ["road-rail"], "road", "Authority / Transport Provider", "Published / Pass-through", "유료도로 또는 통행료입니다. 실제 청구 방식은 운송 계약과 route에 따라 확인합니다.", "Road toll or access fee. Billing treatment depends on transport contract and route.", "authority"]
].map(([code, nameEn, nameKo, modes, category, party, nature, descriptionKo, descriptionEn, verificationType]) => ({
  code, nameEn, nameKo, modes, category, party, nature, descriptionKo, descriptionEn, verificationType
}));

const FREIGHT_DISPLAY_STATES = {
  OFFICIAL_FORMULA: { ko: "공식 계산", en: "Official Formula", tone: "formula" },
  NUMERIC_OFFICIAL: { ko: "공식 요율", en: "Official Rate", tone: "rate" },
  OFFICIAL_LOOKUP: { ko: "공식 조회", en: "Official Lookup", tone: "lookup" },
  QUOTE_REQUIRED: { ko: "견적 필요", en: "Quote Required", tone: "quote" },
  CHECK_INCLUSION: { ko: "포함 여부 확인", en: "Check Inclusion", tone: "quote" },
  CONFIRM_AMOUNT: { ko: "금액 확인 필요", en: "Confirm Amount", tone: "quote" },
  CONDITIONAL_CHECK: { ko: "조건부 확인", en: "Conditional Check", tone: "conditional" },
  CONDITIONAL: { ko: "조건부", en: "Conditional", tone: "conditional" },
  CONDITIONAL_LOOKUP: { ko: "조건부 · 공식 조회", en: "Conditional · Official Lookup", tone: "conditional" },
  CONDITIONAL_QUOTE: { ko: "조건부 · 견적 필요", en: "Conditional · Quote Required", tone: "conditional" },
  EXPLAIN_ONLY: { ko: "설명", en: "Explainer", tone: "explain" },
  NOT_RELEVANT: { ko: "해당 없음", en: "Not Relevant", tone: "muted" }
};

const FREIGHT_PROVIDER_ACTION_LABELS = {
  quote: { ko: "{provider} 견적 확인", en: "Get {provider} Quote" },
  surcharge: { ko: "{provider} Surcharge 조회", en: "Check {provider} Surcharges" },
  tariff: { ko: "{provider} Tariff 확인", en: "Check {provider} Tariff" },
  demdet: { ko: "{provider} DEM/DET 조회", en: "Check {provider} DEM/DET" },
  local: { ko: "{provider} 공식 요율 확인", en: "Check {provider} Official Charges" },
  schedule: { ko: "{provider} Schedule 확인", en: "Check {provider} Schedule" },
  terminal: { ko: "{provider} 터미널/보관료 확인", en: "Check {provider} Terminal Charges" }
};

const FREIGHT_GOVERNMENT_SOURCES = {
  usMpf: {
    id: "us-mpf",
    labelKo: "CBP MPF 공식 기준",
    labelEn: "CBP MPF official rule",
    url: "https://www.help.cbp.gov/s/article/Article-1128?language=en_US",
    authority: "U.S. Customs and Border Protection",
    effective: "FY2026",
    rate: 0.003464,
    min: 33.58,
    max: 651.50,
    currency: "USD"
  },
  usHmf: {
    id: "us-hmf",
    labelKo: "CBP HMF 공식 기준",
    labelEn: "CBP HMF official rule",
    url: "https://www.help.cbp.gov/s/article/Article-1105?language=en_US",
    authority: "U.S. Customs and Border Protection",
    effective: "Current CBP rule",
    rate: 0.00125,
    currency: "USD"
  }
};

const FREIGHT_CHARGE_ROWS = [
  {
    id: "origin-inland",
    modes: ["ocean"],
    group: "origin",
    category: "Service",
    party: "Trucking Provider / Freight Forwarder",
    titleKo: "출발지 내륙운송 / Drayage",
    titleEn: "Origin Inland / Drayage",
    descKo: "공장·창고에서 항만까지의 픽업 또는 컨테이너 반입 비용입니다.",
    descEn: "Pickup or container drayage from factory/warehouse to the origin port.",
    state: "QUOTE_REQUIRED",
    actionType: "quote",
    genericAction: "quote",
    questionKo: "출발지 내륙운송료가 포함되어 있나요? 추가 대기료, 톨, 상하차 비용 조건도 알려주세요.",
    questionEn: "Is origin inland/drayage included in this quote? Please also confirm waiting time, toll, and loading/unloading conditions."
  },
  {
    id: "export-clearance",
    modes: ["ocean", "air"],
    group: "origin",
    category: "Customs / Government",
    party: "Customs Broker / Forwarder",
    titleKo: "수출 통관대행",
    titleEn: "Export Customs Clearance",
    descKo: "수출 신고와 서류 처리 서비스 비용입니다. 정부 세금과 별도로 봅니다.",
    descEn: "Service fee for export declaration and document handling, separate from government taxes.",
    state: "QUOTE_REQUIRED",
    actionType: "quote",
    genericAction: "quote",
    questionKo: "수출통관 대행료가 포함되어 있나요? 신고 수수료 외 별도 서류, 검사, 정정 비용이 발생할 수 있나요?",
    questionEn: "Is export customs clearance included? Can document, inspection, or amendment charges be billed separately?"
  },
  {
    id: "origin-thc",
    modes: ["ocean"],
    group: "origin",
    category: "Local Charge",
    party: "Carrier / Terminal",
    titleKo: "출발지 THC",
    titleEn: "Origin THC",
    rawLabel: "THC / OTHC",
    descKo: "출발 항만 터미널 처리 관련 비용입니다. 선사 local charge 또는 터미널 tariff에서 확인합니다.",
    descEn: "Origin terminal handling-related charge. Verify through carrier local charges or terminal tariffs.",
    state: "OFFICIAL_LOOKUP",
    actionType: "local",
    genericAction: "carrierLookup",
    questionKo: "출발지 THC가 현재 견적에 포함되어 있나요? 별도 청구라면 금액, 통화, 과금 단위를 알려주세요.",
    questionEn: "Is origin THC included in this quote? If charged separately, please confirm the amount, currency, and charging unit."
  },
  {
    id: "ocean-doc",
    modes: ["ocean"],
    group: "origin",
    category: "Local Charge",
    party: "Carrier / Forwarder",
    titleKo: "Documentation",
    titleEn: "Documentation",
    rawLabel: "DOC / B/L fee",
    descKo: "B/L 또는 선적 서류 발행·처리 관련 비용입니다.",
    descEn: "Charge for B/L or shipment-document issuance and handling.",
    state: "OFFICIAL_LOOKUP",
    actionType: "local",
    genericAction: "carrierLookup",
    questionKo: "B/L 발행 관련 Documentation Fee가 포함되어 있나요? Surrender 또는 Telex Release 시 추가 비용이 있나요?",
    questionEn: "Is the B/L documentation fee included? Are there additional charges for surrender or telex release?"
  },
  {
    id: "ocean-freight-main",
    modes: ["ocean"],
    group: "main",
    category: "Freight",
    party: "Carrier / Freight Forwarder",
    titleKo: "해상 운임",
    titleEn: "Ocean Freight",
    descKo: "본운송 운임입니다. route, 장비, 일자, 계약, booking 조건에 따라 견적으로 확인합니다.",
    descEn: "Base ocean transportation charge. It depends on route, equipment, date, contract, and booking conditions.",
    state: "QUOTE_REQUIRED",
    actionType: "quote",
    genericAction: "quote",
    questionKo: "선택한 장비와 항로의 본운임 전체가 포함되어 있나요?",
    questionEn: "Does this quote include the full base freight for the selected equipment and route?"
  },
  {
    id: "carrier-surcharges",
    modes: ["ocean"],
    group: "main",
    category: "Carrier Surcharge",
    party: "Carrier",
    titleKo: "Carrier Surcharges",
    titleEn: "Carrier Surcharges",
    rawLabel: "BAF / LSS / PSS / GRI / EBS / CAF",
    descKo: "항로·일자·선사별 surcharge입니다. BAF, LSS, PSS, GRI, EBS, CAF 등이 포함될 수 있습니다.",
    descEn: "Provider, route, and date-specific surcharges. They may include BAF, LSS, PSS, GRI, EBS, CAF, and others.",
    state: "OFFICIAL_LOOKUP",
    actionType: "surcharge",
    genericAction: "carrierLookup",
    questionKo: "현재 surcharge가 견적에 포함인지, 선적 시점에 별도 청구되는지 확인했나요?",
    questionEn: "Are current carrier surcharges included or billed separately at shipment time?"
  },
  {
    id: "destination-thc",
    modes: ["ocean"],
    group: "destination",
    category: "Local Charge",
    party: "Carrier / Terminal",
    titleKo: "도착지 THC",
    titleEn: "Destination THC",
    rawLabel: "DTHC / THD",
    descKo: "도착 항만 터미널 처리 관련 비용입니다. 도착국·선사·터미널별로 확인합니다.",
    descEn: "Destination terminal handling-related charge. Verify by destination country, carrier, and terminal.",
    state: "OFFICIAL_LOOKUP",
    actionType: "local",
    genericAction: "carrierLookup",
    questionKo: "도착지 THC가 견적에 포함되어 있나요? 별도라면 금액, 통화, 과금 기준을 알려주세요.",
    questionEn: "Is destination THC included in this quote? If separate, please confirm the amount, currency, and charging basis."
  },
  {
    id: "delivery-order",
    modes: ["ocean"],
    group: "destination",
    category: "Local Charge",
    party: "Carrier / Agent / Forwarder",
    titleKo: "D/O / 현지 서류 비용",
    titleEn: "D/O / Local Documentation",
    rawLabel: "D/O / DOD",
    descKo: "화물 인도 또는 도착지 documentation 관련 비용입니다.",
    descEn: "Destination release or local documentation-related charge.",
    state: "OFFICIAL_LOOKUP",
    actionType: "local",
    genericAction: "carrierLookup",
    questionKo: "Destination D/O 또는 local documentation fee가 포함되어 있나요? 별도라면 금액을 알려주세요.",
    questionEn: "Is the destination D/O or local documentation fee included? If separate, please confirm the amount."
  },
  {
    id: "import-clearance",
    modes: ["ocean", "air", "road-rail"],
    group: "destination",
    category: "Service",
    party: "Customs Broker",
    titleKo: "수입 통관대행",
    titleEn: "Import Customs Clearance",
    descKo: "관세사 또는 통관대행 서비스 비용입니다. 관세·세금과 구분해 견적으로 확인합니다.",
    descEn: "Customs broker or clearance service fee, separate from duties and taxes.",
    state: "QUOTE_REQUIRED",
    actionType: "quote",
    genericAction: "quote",
    questionKo: "수입통관 대행료에 어떤 업무가 포함되어 있나요? 검사, 정정, 추가 서류 비용은 별도인가요?",
    questionEn: "What services are included in the import clearance fee? Are inspection, amendment, or additional document charges separate?"
  },
  {
    id: "duty-tax",
    modes: ["ocean", "air", "road-rail"],
    group: "destination",
    category: "Customs / Government",
    party: "Government / Customs Authority",
    titleKo: "관세 / VAT / GST",
    titleEn: "Duty / VAT / GST",
    descKo: "HS Code, 과세가격, 원산지, FTA, 수입국 규정에 따라 확인하는 정부 부담금입니다.",
    descEn: "Government charges checked by HS code, customs value, origin, FTA, and import-country rules.",
    state: "OFFICIAL_LOOKUP",
    actionType: "government",
    genericAction: "customsLookup",
    questionKo: "HS Code, 원산지, 과세가격 기준을 공식 tariff service에서 확인했나요?",
    questionEn: "Have HS code, origin, and customs value assumptions been checked in the official tariff service?"
  },
  {
    id: "destination-inland",
    modes: ["ocean", "air"],
    group: "destination",
    category: "Service",
    party: "Trucking Provider / Freight Forwarder",
    titleKo: "도착지 내륙운송",
    titleEn: "Destination Inland Delivery",
    descKo: "항만·공항에서 최종 목적지까지의 배송 또는 drayage 비용입니다.",
    descEn: "Delivery or drayage from destination port/airport to the final place.",
    state: "QUOTE_REQUIRED",
    actionType: "quote",
    genericAction: "quote",
    questionKo: "도착지 내륙운송료가 포함되어 있나요? 대기, 톨, 상하차 등 별도 비용 조건도 확인 부탁드립니다.",
    questionEn: "Is destination inland delivery included? Please also confirm waiting time, toll, and loading/unloading charge conditions."
  },
  {
    id: "demdet",
    modes: ["ocean"],
    group: "delay",
    category: "Delay",
    party: "Carrier / Terminal",
    titleKo: "DEM / DET",
    titleEn: "DEM / DET",
    rawLabel: "Demurrage / Detention",
    descKo: "free time 이후 터미널 장치 또는 컨테이너 사용 지연으로 발생할 수 있는 비용입니다.",
    descEn: "Potential delay charge after free time for terminal stay or carrier-equipment use.",
    state: "CONDITIONAL_LOOKUP",
    actionType: "demdet",
    genericAction: "carrierLookup",
    questionKo: "적용 Free Time은 며칠인가요? Free Time 종료 후 DEM/DET 과금 기준과 요율 확인처를 알려주세요.",
    questionEn: "What free time applies to this shipment? Please confirm where the applicable DEM/DET tariff can be checked after free time expires."
  },
  {
    id: "storage",
    modes: ["ocean", "air", "road-rail"],
    group: "delay",
    category: "Delay",
    party: "Terminal / Warehouse",
    titleKo: "Storage",
    titleEn: "Storage",
    descKo: "터미널 또는 창고 보관료입니다. free time, 기간, 화물 상태, 시설 정책에 따라 달라집니다.",
    descEn: "Terminal or warehouse storage. It varies by free time, duration, cargo condition, and facility rules.",
    state: "CONDITIONAL_LOOKUP",
    actionType: "terminal",
    genericAction: "terminalLookup",
    questionKo: "도착 지연, 통관 지연, 반출 예약 실패 시 보관료 기준을 확인했나요?",
    questionEn: "Have storage rules been checked for arrival, customs, or pickup delays?"
  },
  {
    id: "lcl-freight",
    modes: ["ocean"],
    shipmentTypes: ["lcl"],
    group: "main",
    category: "Freight",
    party: "Forwarder / Consolidator",
    titleKo: "LCL Freight",
    titleEn: "LCL Freight",
    descKo: "혼재 운송의 W/M, 최소 과금, 콘솔 조건에 따라 견적으로 확인합니다.",
    descEn: "LCL freight depends on W/M, minimum charges, and consolidation terms.",
    state: "QUOTE_REQUIRED",
    actionType: "quote",
    genericAction: "quote",
    questionKo: "W/M 기준, 최소 과금, CFS handling 포함 여부가 명확한가요?",
    questionEn: "Are W/M basis, minimum charge, and CFS handling inclusion clear?"
  },
  {
    id: "cfs-handling",
    modes: ["ocean"],
    shipmentTypes: ["lcl"],
    group: "origin",
    category: "Port / Terminal",
    party: "CFS / Forwarder",
    titleKo: "CFS / Handling",
    titleEn: "CFS / Handling",
    descKo: "LCL 콘솔·디콘솔 작업과 창고 처리 관련 비용입니다.",
    descEn: "LCL consolidation/deconsolidation and warehouse handling charge.",
    state: "QUOTE_REQUIRED",
    actionType: "quote",
    genericAction: "quote",
    questionKo: "출발지와 도착지 CFS handling이 각각 포함되어 있나요?",
    questionEn: "Are both origin and destination CFS handling charges included?"
  },
  {
    id: "air-pickup",
    modes: ["air"],
    group: "origin",
    category: "Service",
    party: "Trucking Provider / Forwarder",
    titleKo: "Pickup",
    titleEn: "Pickup",
    descKo: "화물을 공항 또는 포워더 창고로 반입하는 운송 비용입니다.",
    descEn: "Transporting cargo to the airport or forwarder warehouse.",
    state: "QUOTE_REQUIRED",
    actionType: "quote",
    genericAction: "quote",
    questionKo: "픽업, 항공보안 반입 시간, 대기 조건이 포함되어 있나요?",
    questionEn: "Are pickup, security acceptance timing, and waiting conditions included?"
  },
  {
    id: "origin-air-terminal",
    modes: ["air"],
    group: "origin",
    category: "Port / Terminal",
    party: "Airline / Cargo Terminal",
    titleKo: "출발지 항공 터미널 처리",
    titleEn: "Origin Cargo Terminal Handling",
    descKo: "공항 화물터미널 반입·처리 관련 비용입니다. 항공사 또는 터미널 공식 자료로 확인합니다.",
    descEn: "Airport cargo terminal acceptance and handling-related charge.",
    state: "OFFICIAL_LOOKUP",
    actionType: "terminal",
    genericAction: "terminalLookup",
    questionKo: "터미널 handling, 보관, 특수화물 할증 기준을 확인했나요?",
    questionEn: "Have terminal handling, storage, and special-cargo surcharge rules been checked?"
  },
  {
    id: "awb-doc",
    modes: ["air"],
    group: "origin",
    category: "Local Charge",
    party: "Airline / GSSA / Forwarder",
    titleKo: "AWB / Documentation",
    titleEn: "AWB / Documentation",
    rawLabel: "AWB",
    descKo: "Air Waybill 발행 또는 항공 서류 처리 비용입니다.",
    descEn: "Air Waybill issuance or air-cargo document handling charge.",
    state: "OFFICIAL_LOOKUP",
    actionType: "local",
    genericAction: "providerLookup",
    questionKo: "AWB 발행, 보안서류, 정정 비용이 별도인가요?",
    questionEn: "Are AWB issuance, security documents, or amendment fees separate?"
  },
  {
    id: "air-freight-main",
    modes: ["air"],
    group: "main",
    category: "Freight",
    party: "Airline / Forwarder",
    titleKo: "항공 운임",
    titleEn: "Air Freight",
    descKo: "chargeable weight, 서비스, route, 계약 조건에 따라 견적으로 확인합니다.",
    descEn: "Air freight depends on chargeable weight, service, route, and contract conditions.",
    state: "QUOTE_REQUIRED",
    actionType: "quote",
    genericAction: "quote",
    questionKo: "실중량과 부피중량 중 어떤 기준으로 과금되는지 확인했나요?",
    questionEn: "Is the quote based on actual weight or volumetric chargeable weight?"
  },
  {
    id: "air-surcharges",
    modes: ["air"],
    group: "main",
    category: "Carrier Surcharge",
    party: "Airline",
    titleKo: "항공 Fuel / Security Surcharges",
    titleEn: "Airline Fuel / Security Surcharges",
    descKo: "항공사·출발지·일자별 fuel/security surcharge입니다. 공식 자료 또는 견적으로 확인합니다.",
    descEn: "Airline, origin, and date-specific fuel/security surcharge. Verify through official resources or quote.",
    state: "OFFICIAL_LOOKUP",
    actionType: "surcharge",
    genericAction: "providerLookup",
    questionKo: "fuel/security surcharge가 최신 기준으로 포함되어 있나요?",
    questionEn: "Are fuel/security surcharges included under current rules?"
  },
  {
    id: "destination-air-terminal",
    modes: ["air"],
    group: "destination",
    category: "Port / Terminal",
    party: "Airline / Cargo Terminal",
    titleKo: "도착지 항공 터미널 처리",
    titleEn: "Destination Cargo Terminal Handling",
    descKo: "도착 공항의 화물 인도, 보관, handling 관련 비용입니다.",
    descEn: "Destination airport cargo release, storage, and handling-related charge.",
    state: "OFFICIAL_LOOKUP",
    actionType: "terminal",
    genericAction: "terminalLookup",
    questionKo: "보관 free time과 terminal release 조건을 확인했나요?",
    questionEn: "Have storage free time and terminal release conditions been checked?"
  },
  {
    id: "road-base",
    modes: ["road-rail"],
    group: "main",
    category: "Freight",
    party: "Trucking Provider",
    titleKo: "기본 Trucking",
    titleEn: "Base Trucking",
    descKo: "거리, 차량, 중량, 대기, 상하차 조건에 따라 견적으로 확인합니다.",
    descEn: "Base trucking depends on distance, vehicle, weight, waiting time, and loading/unloading terms.",
    state: "QUOTE_REQUIRED",
    actionType: "quote",
    genericAction: "quote",
    questionKo: "상하차, 대기, 왕복/편도, 톨 조건이 견적에 반영되어 있나요?",
    questionEn: "Do loading/unloading, waiting, round-trip/one-way, and toll terms affect the quote?"
  },
  {
    id: "road-fuel",
    modes: ["road-rail"],
    group: "main",
    category: "Carrier Surcharge",
    party: "Trucking Provider",
    titleKo: "Fuel-related Charge",
    titleEn: "Fuel-related Charge",
    descKo: "유가 지표는 참고일 뿐 실제 fuel surcharge 공식은 운송사 계약에 따릅니다.",
    descEn: "Fuel indices are context only; the actual fuel surcharge formula depends on the transport contract.",
    state: "QUOTE_REQUIRED",
    actionType: "quote",
    genericAction: "quote",
    questionKo: "fuel surcharge 공식 또는 조정 기준이 계약서에 명시되어 있나요?",
    questionEn: "Is the fuel surcharge formula or adjustment rule stated in the contract?"
  },
  {
    id: "road-toll",
    modes: ["road-rail"],
    group: "main",
    category: "Service",
    party: "Authority / Trucking Provider",
    titleKo: "Toll",
    titleEn: "Toll",
    descKo: "유료도로·교량·도심 진입 비용 등 pass-through 여부를 확인합니다.",
    descEn: "Check whether road, bridge, or access tolls are pass-through charges.",
    state: "CONDITIONAL_QUOTE",
    actionType: "quote",
    genericAction: "quote",
    questionKo: "통행료가 운임에 포함인지 실비 정산인지 확인했나요?",
    questionEn: "Are tolls included in the rate or billed as pass-through costs?"
  },
  {
    id: "road-waiting",
    modes: ["road-rail"],
    group: "delay",
    category: "Delay",
    party: "Trucking Provider",
    titleKo: "Waiting",
    titleEn: "Waiting",
    descKo: "상하차 지연, 입출고 예약 실패, 대기 시간에 따른 비용입니다.",
    descEn: "Cost related to loading/unloading delay, appointment failure, or waiting time.",
    state: "CONDITIONAL_QUOTE",
    actionType: "quote",
    genericAction: "quote",
    questionKo: "무료 대기 시간과 초과 대기료 기준이 있나요?",
    questionEn: "Is there free waiting time, and when does waiting charge begin?"
  },
  {
    id: "kr-safe-freight",
    modes: ["road-rail"],
    routeCountries: ["KR"],
    group: "main",
    category: "Customs / Government",
    party: "Government / Transport Provider",
    titleKo: "한국 안전운임 공식 참고",
    titleEn: "Korea Safe Freight Official Reference",
    descKo: "일부 적용 대상 화물에 한해 공식 참고가 가능합니다. LOGILEE는 일반 trucking 금액으로 일반화하지 않습니다.",
    descEn: "Official reference may exist for covered categories only. LOGILEE does not generalize it to all trucking.",
    state: "OFFICIAL_LOOKUP",
    actionType: "safeFreight",
    genericAction: "safeFreight",
    questionKo: "선택한 화물이 안전운임 적용 대상인지 공식 자료로 확인했나요?",
    questionEn: "Have you checked whether this cargo is within the official safe-freight scope?"
  },
  {
    id: "dg-surcharge",
    modes: ["ocean", "air", "road-rail"],
    cargoConditions: ["dg"],
    group: "conditional",
    category: "Cargo Condition",
    party: "Carrier / Airline / Terminal / Transport Provider",
    titleKo: "DG Surcharge / 승인",
    titleEn: "DG Surcharge / Approval",
    descKo: "위험물 등급, 포장, 신고, route, provider 승인 조건에 따라 발생할 수 있습니다.",
    descEn: "May apply depending on DG class, packing, declaration, route, and provider approval.",
    state: "CONDITIONAL_QUOTE",
    actionType: "quote",
    genericAction: "compliance",
    questionKo: "DG class, MSDS, 포장, 선사·항공사 승인 조건을 확인했나요?",
    questionEn: "Have DG class, SDS/MSDS, packing, and carrier/airline approval conditions been checked?"
  },
  {
    id: "dg-terminal",
    modes: ["ocean", "air"],
    cargoConditions: ["dg"],
    group: "conditional",
    category: "Port / Terminal",
    party: "Terminal / Port Authority",
    titleKo: "위험물 터미널 Handling / Storage",
    titleEn: "Hazardous Terminal Handling / Storage",
    descKo: "위험물 반입 가능 시간, 보관 제한, 터미널 할증이 별도로 적용될 수 있습니다.",
    descEn: "DG acceptance timing, storage restrictions, and terminal surcharges may apply separately.",
    state: "CONDITIONAL_LOOKUP",
    actionType: "terminal",
    genericAction: "terminalLookup",
    questionKo: "터미널 위험물 반입·보관 제한과 할증 기준을 확인했나요?",
    questionEn: "Have terminal DG acceptance, storage limits, and surcharges been checked?"
  },
  {
    id: "reefer-surcharge",
    modes: ["ocean", "road-rail"],
    cargoConditions: ["reefer", "temperature"],
    group: "conditional",
    category: "Cargo Condition",
    party: "Carrier / Terminal / Transport Provider",
    titleKo: "Reefer Surcharge",
    titleEn: "Reefer Surcharge",
    descKo: "냉동·냉장 장비, 전력, 모니터링, 온도 지시 조건에 따라 확인합니다.",
    descEn: "Check reefer equipment, power, monitoring, and temperature-instruction conditions.",
    state: "CONDITIONAL_QUOTE",
    actionType: "quote",
    genericAction: "quote",
    questionKo: "온도 조건, pre-cooling, genset 또는 모니터링 비용이 포함되어 있나요?",
    questionEn: "Are temperature settings, pre-cooling, genset, or monitoring costs included?"
  },
  {
    id: "reefer-plug",
    modes: ["ocean"],
    cargoConditions: ["reefer", "temperature"],
    group: "conditional",
    category: "Port / Terminal",
    party: "Terminal",
    titleKo: "Plug-in / Electricity / Monitoring",
    titleEn: "Plug-in / Electricity / Monitoring",
    descKo: "터미널 장치 중 reefer 전력과 모니터링 비용이 발생할 수 있습니다.",
    descEn: "Reefer plug-in, electricity, and monitoring charges may apply while at terminal.",
    state: "CONDITIONAL_LOOKUP",
    actionType: "terminal",
    genericAction: "terminalLookup",
    questionKo: "터미널 reefer plug-in free time과 일별 기준을 확인했나요?",
    questionEn: "Have terminal reefer plug-in free time and daily rules been checked?"
  },
  {
    id: "oog-surcharge",
    modes: ["ocean", "air", "road-rail"],
    cargoConditions: ["oog", "overweight"],
    group: "conditional",
    category: "Cargo Condition",
    party: "Carrier / Airline / Terminal / Transport Provider",
    titleKo: "OOG / Special Equipment",
    titleEn: "OOG / Special Equipment",
    descKo: "규격 외 치수, 중량, 특수 장비, terminal handling 조건에 따라 개별 견적이 필요합니다.",
    descEn: "Oversized dimensions, weight, special equipment, and terminal handling require individual quotation.",
    state: "CONDITIONAL_QUOTE",
    actionType: "quote",
    genericAction: "quote",
    questionKo: "치수·중량 도면, 장비 가능 여부, 특수 handling 비용을 확인했나요?",
    questionEn: "Have dimensions, weight drawings, equipment availability, and special handling costs been checked?"
  }
];

function freightProviderOptions(mode, selected = "", labels) {
  const providers = FREIGHT_CHARGE_PROVIDERS.filter((item) => item.mode === mode);
  return `<option value="">${labels.noProvider}</option>${providers.map((item) => `<option value="${escapeAttribute(item.id)}"${item.id === selected ? " selected" : ""}>${escapeHtml(item.name)}</option>`).join("")}`;
}

function freightChargeName(item, lang) {
  return lang === "ko" ? item.nameKo : item.nameEn;
}

function freightChargeByCode(code) {
  return FREIGHT_CHARGE_GLOSSARY.find((item) => item.code === code);
}

function freightCostGroupTitle(key, lang) {
  const ko = { origin: "출발지", main: "본운송", destination: "도착지", delay: "지연 / 조건부", conditional: "특수화물 조건" };
  const en = { origin: "Origin", main: "Main Transport", destination: "Destination", delay: "Delay / Conditional", conditional: "Special Cargo Conditions" };
  return (lang === "ko" ? ko : en)[key] || key;
}

function freightStatusLabel(item, lang) {
  const type = item.verificationType;
  if (lang === "ko") {
    if (type === "quote") return "견적 필요";
    if (type === "demdet") return "공식 요율 확인";
    if (type === "government" || type === "authority") return "정부/기관 기준";
    if (item.category === "conditional") return "조건부";
    return "일반적으로 확인";
  }
  if (type === "quote") return "Quote Required";
  if (type === "demdet") return "Official Tariff Lookup";
  if (type === "government" || type === "authority") return "Government / Authority";
  if (item.category === "conditional") return "Conditional";
  return "Common Check";
}

function freightDisplayState(state, lang) {
  const item = FREIGHT_DISPLAY_STATES[state] || FREIGHT_DISPLAY_STATES.EXPLAIN_ONLY;
  return { label: lang === "ko" ? item.ko : item.en, tone: item.tone };
}

function freightSelectedProvider(mode, providerId) {
  return FREIGHT_CHARGE_PROVIDERS.find((item) => item.mode === mode && item.id === providerId);
}

function providerResource(provider, actionType) {
  if (!provider || !actionType) return null;
  const direct = provider.resources.find(([type]) => type === actionType);
  if (direct) return direct;
  if (actionType === "terminal") return provider.resources.find(([type]) => type === "terminal" || type === "local" || type === "tariff") || null;
  if (actionType === "government") return null;
  if (actionType === "local") return provider.resources.find(([type]) => type === "local" || type === "tariff") || null;
  if (actionType === "surcharge") return provider.resources.find(([type]) => type === "surcharge" || type === "tariff") || null;
  return provider.resources.find(([type]) => type === "quote" || type === "local") || null;
}

function providerResourceApplies(provider, resource, context) {
  if (!provider || !resource) return false;
  const [type] = resource;
  if (provider.id === "hmm" && type === "tariff") return context.origin === "US" || context.destination === "US";
  if (provider.id === "hmm" && type === "local") return context.destination === "KR";
  if (provider.id === "zim" && type === "demdet") return context.origin === "US" || context.destination === "US";
  return true;
}

function freightProviderAction(provider, row, context, lang) {
  if (!provider) return null;
  if (row.actionType === "quote" && !["ocean-freight-main", "air-freight-main"].includes(row.id)) return null;
  if (provider.id === "hmm" && row.actionType === "local" && !(row.group === "destination" && row.destination === "KR")) return null;
  const resource = providerResource(provider, row.actionType);
  if (!providerResourceApplies(provider, resource, context)) return null;
  if (!resource) return null;
  const [type, labelKo, labelEn, url, loginRequired] = resource;
  const template = FREIGHT_PROVIDER_ACTION_LABELS[type]?.[lang] || (lang === "ko" ? "{provider} 공식 조회" : "Check {provider} Official Resource");
  const label = template.replace("{provider}", provider.name);
  return {
    label: label || (lang === "ko" ? labelKo : labelEn),
    url,
    note: loginRequired
      ? (lang === "ko" ? "로그인 또는 계정 권한이 필요할 수 있습니다." : "Login or account permission may be required.")
      : (lang === "ko" ? "공식 제공처에서 직접 확인합니다." : "Verify directly with the official provider."),
    scope: type === "local" && provider.id === "hmm" ? (lang === "ko" ? "HMM Korea import/local resource" : "HMM Korea import/local resource") : ""
  };
}

function freightGenericAction(row, context, lang) {
  const destination = context.destination;
  if (row.genericAction === "carrierLookup" || row.genericAction === "providerLookup") {
    return { kind: "question", label: lang === "ko" ? "질문 복사" : "Copy Question", note: lang === "ko" ? "견적 포함 여부와 별도 청구 기준을 바로 문의하세요." : "Ask directly about inclusion and separate charge basis." };
  }
  if (row.genericAction === "terminalLookup") {
    return {
      label: lang === "ko" ? "공식 터미널 Tariff 확인" : "View Official Terminal Tariff",
      url: modeLocationToolHref(context.mode, destination, lang),
      note: lang === "ko" ? "항만·공항 정보에서 관련 공식 자료를 확인하세요." : "Use port or airport intelligence to find relevant official resources."
    };
  }
  if (row.genericAction === "customsLookup") {
    return {
      label: lang === "ko" ? "HS Code / 공식 tariff 확인" : "Check HS Code / Official Tariff",
      url: lang === "ko" ? "../hscode.html" : "../hscode-en.html",
      note: lang === "ko" ? "품목분류와 수입국 공식 tariff에서 확인합니다." : "Verify classification and tariff treatment through official sources."
    };
  }
  if (row.genericAction === "compliance") {
    return {
      label: lang === "ko" ? "Compliance Hub에서 DG 확인" : "Check DG in Compliance Hub",
      url: `compliance.html?market=${encodeURIComponent(String(destination || "").toLowerCase())}`,
      note: lang === "ko" ? "위험물 규제와 선적 제한을 별도로 확인합니다." : "Review dangerous-goods rules and shipment restrictions separately."
    };
  }
  if (row.genericAction === "safeFreight") {
    return {
      label: lang === "ko" ? "한국 안전운임 공식 참고" : "Korea Safe Freight Official Reference",
      url: "https://www.molit.go.kr/USR/I0204/m_45/dtl.jsp?gubun=4&idx=18770&lcmspage=5&psize=10&srch_usr_year=",
      note: lang === "ko" ? "적용 대상 화물인지 공식 고시에서 먼저 확인하세요." : "First confirm whether the selected cargo is covered by the official notice."
    };
  }
  return {
    kind: "question",
    label: lang === "ko" ? "질문 복사" : "Copy Question",
    note: lang === "ko" ? "금액과 포함 범위를 견적 담당자에게 확인하세요." : "Confirm amount and inclusion with the quote owner."
  };
}

function modeLocationToolHref(mode, country, lang) {
  if (mode === "air") return `airports.html?country=${encodeURIComponent(country || "")}`;
  if (mode === "ocean") return `ports.html?country=${encodeURIComponent(country || "")}`;
  return `country-trade-profile.html?country=${encodeURIComponent(country || "")}`;
}

function rowMatchesFreightContext(row, context) {
  if (!row.modes.includes(context.mode)) return false;
  if (row.shipmentTypes && !row.shipmentTypes.includes(context.shipmentType)) return false;
  if (context.mode === "ocean" && context.shipmentType === "lcl" && ["origin-thc", "destination-thc", "demdet"].includes(row.id)) return false;
  if (row.cargoConditions && !row.cargoConditions.includes(context.cargoCondition)) return false;
  if (!row.cargoConditions && ["dg-surcharge", "dg-terminal", "reefer-surcharge", "reefer-plug", "oog-surcharge"].includes(row.id)) return false;
  if (row.equipmentValues && context.equipment && !row.equipmentValues.includes(context.equipment)) return false;
  if (row.routeCountries && !row.routeCountries.includes(context.origin) && !row.routeCountries.includes(context.destination)) return false;
  return true;
}

function freightChargeRowsForContext(context) {
  return FREIGHT_CHARGE_ROWS.filter((row) => rowMatchesFreightContext(row, context));
}

function formatUsdAmount(value) {
  if (!Number.isFinite(value)) return "";
  return `USD ${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function parseCustomsValue(value) {
  const normalized = String(value || "").replace(/,/g, "").trim();
  if (!normalized) return null;
  const parsed = Number(normalized);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function usGovernmentFormulaRows(context, lang) {
  if (context.destination !== "US") return [];
  const customsValue = parseCustomsValue(context.customsValue);
  const mpf = FREIGHT_GOVERNMENT_SOURCES.usMpf;
  const hmf = FREIGHT_GOVERNMENT_SOURCES.usHmf;
  const rows = [];
  const mpfAmount = customsValue === null ? null : Math.min(Math.max(customsValue * mpf.rate, mpf.min), mpf.max);
  rows.push({
    id: "us-mpf",
    group: "destination",
    titleKo: "U.S. MPF",
    titleEn: "U.S. MPF",
    descKo: "미국 formal entry의 Merchandise Processing Fee 공식입니다. 면제·entry type은 별도 확인이 필요합니다.",
    descEn: "Official Merchandise Processing Fee formula for U.S. formal entries. Exemptions and entry type still need review.",
    state: "OFFICIAL_FORMULA",
    category: "Customs / Government",
    party: mpf.authority,
    formula: customsValue === null
      ? (lang === "ko" ? "Customs Value를 입력하면 FY2026 공식 기준 참고 금액을 계산합니다." : "Enter Customs Value to calculate the FY2026 official-formula reference.")
      : `${formatUsdAmount(mpfAmount)} = min/max(${formatUsdAmount(customsValue)} x 0.3464%)`,
    metadata: [mpf.currency, mpf.effective, lang === "ko" ? "최소 USD 33.58 / 최대 USD 651.50" : "Min USD 33.58 / Max USD 651.50"],
    action: { label: lang === "ko" ? "CBP 공식 기준 확인" : "Check Official CBP Rule", url: mpf.url, note: mpf.authority },
    questionKo: "MPF 면제 대상 FTA나 entry type 예외가 있는지 확인했나요?",
    questionEn: "Have MPF exemptions or entry-type exceptions been checked?"
  });
  if (context.mode === "ocean") {
    const hmfAmount = customsValue === null ? null : customsValue * hmf.rate;
    rows.push({
      id: "us-hmf",
      group: "destination",
      titleKo: "U.S. HMF",
      titleEn: "U.S. HMF",
      descKo: "미국 항만 이용 수입화물에 적용될 수 있는 Harbor Maintenance Fee 공식입니다. Air에는 표시하지 않습니다.",
      descEn: "Official Harbor Maintenance Fee formula that may apply to U.S. port-use imports. It is not shown for air.",
      state: "OFFICIAL_FORMULA",
      category: "Customs / Government",
      party: hmf.authority,
      formula: customsValue === null
        ? (lang === "ko" ? "Customs Value를 입력하면 공식 0.125% 기준 참고 금액을 계산합니다." : "Enter Customs Value to calculate the 0.125% official-formula reference.")
        : `${formatUsdAmount(hmfAmount)} = ${formatUsdAmount(customsValue)} x 0.125%`,
      metadata: [hmf.currency, hmf.effective, lang === "ko" ? "수입·항만 이용 범위 확인 필요" : "Check import and port-use applicability"],
      action: { label: lang === "ko" ? "CBP 공식 기준 확인" : "Check Official CBP Rule", url: hmf.url, note: hmf.authority },
      questionKo: "해당 화물이 항만 이용 수입화물 범위에 해당하나요?",
      questionEn: "Is this shipment within the port-use import scope?"
    });
  }
  return rows;
}

function freightRowAction(row, provider, context, lang) {
  if (row.action) return row.action;
  return freightProviderAction(provider, row, context, lang) || freightGenericAction(row, context, lang);
}

function freightEffectiveState(row, action) {
  if (row.state === "OFFICIAL_FORMULA") return row.state;
  if (action?.url && ["OFFICIAL_LOOKUP", "CONDITIONAL_LOOKUP"].includes(row.state)) return row.state;
  if (row.state === "OFFICIAL_LOOKUP") return ["origin-thc", "destination-thc", "ocean-doc", "delivery-order", "awb-doc"].includes(row.id) ? "CHECK_INCLUSION" : "CONFIRM_AMOUNT";
  if (row.state === "CONDITIONAL_LOOKUP") return "CONDITIONAL_CHECK";
  return row.state;
}

function freightQuestionText(row, context, lang) {
  const question = lang === "ko" ? row.questionKo : row.questionEn;
  return String(question || "").trim();
}

function freightChargeRowMarkup(row, provider, context, labels, lang) {
  const rowContext = { ...context, providerName: provider?.name || context.providerName || "" };
  const action = freightRowAction(row, provider, rowContext, lang);
  const stateKey = freightEffectiveState(row, action);
  const state = freightDisplayState(stateKey, lang);
  const title = lang === "ko" ? row.titleKo : row.titleEn;
  const desc = lang === "ko" ? row.descKo : row.descEn;
  const question = freightQuestionText(row, rowContext, lang);
  const detailsLabel = lang === "ko" ? "상세 보기" : "Details";
  const copyLabel = lang === "ko" ? "질문 복사" : "Copy Question";
  return `
    <article class="freight-charge-row" data-charge-row="${escapeAttribute(row.id)}" data-state="${escapeAttribute(stateKey)}">
      <div class="freight-charge-row-main">
        <div>
          <h5>${escapeHtml(title)}</h5>
          ${row.rawLabel ? `<small>${escapeHtml(row.rawLabel)}</small>` : ""}
        </div>
      </div>
      <div class="freight-charge-state">
        <span class="freight-status-badge is-${escapeAttribute(state.tone)}">${escapeHtml(state.label)}</span>
      </div>
      <div class="freight-charge-action">
        ${row.formula ? `<div class="freight-formula-box freight-formula-primary"><strong>${escapeHtml(row.formula)}</strong></div>` : ""}
        ${action.url ? `<a href="${escapeAttribute(action.url)}"${/^https?:/.test(action.url) ? ' target="_blank" rel="noopener noreferrer"' : ""}>${escapeHtml(action.label)} <span aria-hidden="true">→</span></a>` : (action.kind === "question" ? "" : `<span>${escapeHtml(action.label)}</span>`)}
        ${question ? `<button type="button" data-copy-freight-question="${escapeAttribute(question)}" aria-label="${escapeAttribute(copyLabel)}">${escapeHtml(copyLabel)}</button>` : ""}
        ${action.note ? `<small>${escapeHtml(action.note)}</small>` : ""}
        ${action.scope ? `<small>${escapeHtml(action.scope)}</small>` : ""}
        <span class="freight-copy-feedback" aria-live="polite"></span>
      </div>
      <details class="freight-row-details">
        <summary>${escapeHtml(detailsLabel)}</summary>
        <p>${escapeHtml(desc)}</p>
        ${row.formula ? `<div class="freight-formula-box"><strong>${escapeHtml(row.formula)}</strong>${row.metadata?.length ? `<small>${row.metadata.map(escapeHtml).join(" · ")}</small>` : ""}</div>` : ""}
        <div class="freight-charge-row-meta">
          <span>${escapeHtml(row.category || "")}</span>
          <span>${escapeHtml(row.party || "")}</span>
        </div>
        ${question ? `<p class="freight-quote-question">${escapeHtml(question)}</p>` : ""}
      </details>
    </article>
  `;
}

function freightPrimaryGroup(row) {
  if (["ocean-freight-main", "carrier-surcharges", "origin-thc", "ocean-doc", "destination-thc", "delivery-order", "air-freight-main", "air-surcharges", "awb-doc", "origin-air-terminal", "destination-air-terminal", "road-base", "road-fuel", "road-toll"].includes(row.id)) return "core";
  if (["demdet", "storage", "dg-surcharge", "dg-terminal", "reefer-surcharge", "reefer-plug", "oog-surcharge", "road-waiting"].includes(row.id)) return "conditional";
  return "service";
}

function freightPrimaryGroupTitle(key, lang) {
  const ko = { core: "지금 확인할 주요 비용", conditional: "조건에 따라 발생할 비용", service: "통관·정부·별도 서비스" };
  const en = { core: "Core Costs to Check", conditional: "Conditional Costs", service: "Customs, Government & Services" };
  return (lang === "ko" ? ko : en)[key] || key;
}

function freightActionabilitySummary(rows, provider, context, lang) {
  return rows.reduce((acc, row) => {
    const action = freightRowAction(row, provider, context, lang);
    const question = freightQuestionText(row, context, lang);
    if (action?.url) acc.linked += 1;
    if (row.formula) acc.formula += 1;
    if (question) acc.copyable += 1;
    return acc;
  }, { linked: 0, formula: 0, copyable: 0 });
}

function freightQuestionBundle(origin, destination, mode, rows, provider, context, lang) {
  const questions = rows
    .map((row) => freightQuestionText(row, context, lang))
    .filter(Boolean);
  const unique = [...new Set(questions)];
  const modeLabel = mode === "ocean" ? "Ocean" : mode === "air" ? "Air" : "Road / Rail";
  const header = `[${displayCountryName(origin, lang)} -> ${displayCountryName(destination, lang)} / ${modeLabel}${context.shipmentType ? ` / ${String(context.shipmentType).toUpperCase()}` : ""}${context.equipment ? ` / ${String(context.equipment).toUpperCase()}` : ""}${provider?.name ? ` / ${provider.name}` : ""}]`;
  if (lang === "ko") {
    return `${header}\n\n견적 관련 아래 사항 확인 부탁드립니다.\n\n${unique.map((question, index) => `${index + 1}. ${question}`).join("\n\n")}\n\n감사합니다.`;
  }
  return `${header}\n\nPlease help confirm the following points for this shipment quote.\n\n${unique.map((question, index) => `${index + 1}. ${question}`).join("\n\n")}\n\nThank you.`;
}

function renderChargeNavigator(origin, destination, mode, context, labels, lang) {
  const provider = freightSelectedProvider(mode, context.provider);
  const rowContext = { ...context, origin, destination, mode, providerName: provider?.name || "" };
  const rows = [...freightChargeRowsForContext(rowContext), ...usGovernmentFormulaRows(rowContext, lang)].map((row) => ({ ...row, origin, destination }));
  const groups = ["core", "conditional", "service"];
  const summary = freightActionabilitySummary(rows, provider, rowContext, lang);
  const bundle = freightQuestionBundle(origin, destination, mode, rows, provider, rowContext, lang);
  const tableLabels = lang === "ko" ? ["비용 항목", "상태", "지금 할 일"] : ["Charge", "Status", "Action"];
  return `
    <section class="freight-charge-section freight-navigator-section">
      <div class="freight-charge-section-head">
        <div>
          <h4>${lang === "ko" ? "이 선적에서 확인할 비용" : "Costs to Check for This Shipment"}</h4>
          <p>${lang === "ko" ? "각 row는 공식 링크, 계산 결과 또는 바로 복사할 질문 중 하나 이상의 action을 제공합니다." : "Every row gives an official link, a calculation, or a copyable question you can act on."}</p>
        </div>
        <div class="freight-copy-all-wrap">
          <button type="button" class="secondary-btn freight-copy-all" data-copy-freight-all="${escapeAttribute(bundle)}">${lang === "ko" ? "확인 질문 전체 복사" : "Copy All Questions"}</button>
          <span class="freight-copy-feedback" aria-live="polite"></span>
        </div>
      </div>
      <div class="freight-action-summary">
        <span>${lang === "ko" ? "공식/내부 링크" : "Official/internal links"} ${summary.linked}</span>
        <span>${lang === "ko" ? "공식 계산" : "Official formulas"} ${summary.formula}</span>
        <span>${lang === "ko" ? "복사 가능 질문" : "Copyable questions"} ${summary.copyable}</span>
      </div>
      <div class="freight-row-table-head" aria-hidden="true">
        <span>${tableLabels.map(escapeHtml).join("</span><span>")}</span>
      </div>
      <div class="freight-charge-row-groups">
        ${groups.map((group) => {
          const groupRows = rows.filter((row) => freightPrimaryGroup(row) === group);
          if (!groupRows.length) return "";
          return `
            <section class="freight-charge-row-group">
              <h5>${escapeHtml(freightPrimaryGroupTitle(group, lang))}</h5>
              <div class="freight-charge-row-list">
                ${groupRows.map((row) => freightChargeRowMarkup(row, provider, rowContext, labels, lang)).join("")}
              </div>
            </section>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderProviderLookups(mode, providerId, labels, lang, origin, destination) {
  const provider = FREIGHT_CHARGE_PROVIDERS.find((item) => item.mode === mode && item.id === providerId);
  if (!provider) {
    return `
      <section class="freight-provider-panel freight-provider-empty">
        <h4>${labels.officialProviderLookups}</h4>
        <p>${labels.generalProviderHint}</p>
      </section>
    `;
  }
  const routeNote = `${displayCountryName(origin, lang)} → ${displayCountryName(destination, lang)}`;
  const context = { mode, origin, destination };
  const resources = provider.resources.filter((resource) => providerResourceApplies(provider, resource, context));
  return `
    <section class="freight-provider-panel">
      <div class="freight-provider-head">
        <div>
          <h4>${labels.officialProviderLookups}</h4>
          <p><strong>${escapeHtml(provider.name)}</strong> · ${escapeHtml(routeNote)}</p>
        </div>
        <span>${resources.length} ${lang === "ko" ? "관련 링크" : "relevant links"}</span>
      </div>
      <p>${escapeHtml(lang === "ko" ? "선택한 선적 조건에 맞는 공식 도구만 표시합니다. 국가·방향 범위가 맞지 않는 tariff/local charge 링크는 숨깁니다." : "Only official tools relevant to the selected shipment are shown. Country or direction-specific tariff/local-charge links are hidden when out of scope.")}</p>
      <div class="freight-provider-links">
        ${resources.map(([, labelKo, labelEn, url, loginRequired]) => `
          <a href="${escapeAttribute(url)}" target="_blank" rel="noopener noreferrer">
            <strong>${escapeHtml(lang === "ko" ? labelKo : labelEn)} <span aria-hidden="true">↗</span></strong>
            <small>${loginRequired ? (lang === "ko" ? "로그인 또는 계정 권한이 필요할 수 있습니다." : "Login or account permission may be required.") : (lang === "ko" ? "공식 제공처에서 직접 확인합니다." : "Verify directly with the official provider.")}</small>
          </a>
        `).join("") || `<div class="data-empty">${lang === "ko" ? "선택 조건에 맞는 별도 공식 링크가 없습니다. 위 비용 row의 질문을 사용해 provider에게 확인하세요." : "No separate official link fits this selection. Use the questions in the charge rows to confirm with the provider."}</div>`}
      </div>
      <p class="muted">${labels.providerHint}</p>
    </section>
  `;
}

function renderChargeExplainer(mode, labels, lang, query = "") {
  const needle = String(query || "").trim().toLowerCase();
  const placeholder = mode === "air"
    ? (lang === "ko" ? "AWB, Fuel, Security 등 검색" : "Search AWB, Fuel, Security...")
    : mode === "road-rail"
      ? (lang === "ko" ? "Trucking, Toll, Fuel 등 검색" : "Search Trucking, Toll, Fuel...")
      : labels.chargeSearch;
  const rows = FREIGHT_CHARGE_GLOSSARY
    .filter((item) => item.modes.includes(mode))
    .filter((item) => !needle || [item.code, item.nameEn, item.nameKo, item.party, item.nature].join(" ").toLowerCase().includes(needle));
  return `
    <details class="freight-charge-section freight-explainer-section freight-glossary-details" ${needle ? "open" : ""}>
      <summary>
        <span>
          <strong>${lang === "ko" ? "운임·부대비용 용어사전" : "Freight Charge Glossary"}</strong>
          <small>${lang === "ko" ? "용어 설명은 보조 자료입니다. 주요 업무는 위 비용 row에서 바로 처리하세요." : "Definitions are secondary. Use the action rows above for the practical workflow."}</small>
        </span>
      </summary>
      <div class="freight-charge-section-head">
        <h4>${labels.chargeExplainer}</h4>
        <label><span>${escapeHtml(placeholder)}</span><input type="search" value="${escapeAttribute(query)}" data-freight-charge-search placeholder="${escapeAttribute(placeholder)}"></label>
      </div>
      <div class="freight-explainer-list">
        ${rows.length ? rows.map((item) => `
          <article>
            <div>
              <h5>${escapeHtml(freightChargeName(item, lang))}</h5>
              <span>${escapeHtml(freightStatusLabel(item, lang))}</span>
            </div>
            <p>${escapeHtml(lang === "ko" ? item.descriptionKo : item.descriptionEn)}</p>
            <dl>
              <div><dt>${lang === "ko" ? "청구 주체" : "Typical party"}</dt><dd>${escapeHtml(item.party)}</dd></div>
              <div><dt>${lang === "ko" ? "요율 성격" : "Rate nature"}</dt><dd>${escapeHtml(item.nature)}</dd></div>
              <div><dt>${lang === "ko" ? "확인 위치" : "Where to verify"}</dt><dd>${escapeHtml(freightVerificationLabel(item.verificationType, lang))}</dd></div>
            </dl>
          </article>
        `).join("") : `<div class="data-empty">${lang === "ko" ? "일치하는 비용 항목이 없습니다." : "No matching charge item."}</div>`}
      </div>
    </details>
  `;
}

function freightVerificationLabel(type, lang) {
  const ko = {
    quote: "견적서 또는 운송사/Provider",
    carrier: "선사 local charge 또는 tariff",
    carrier_terminal: "선사 local charge 또는 터미널 tariff",
    provider: "운송사/항공사 공식 조건",
    demdet: "공식 DEM/DET 조회",
    terminal: "터미널 또는 창고 tariff",
    authority: "정부/항만/기관 공식 자료",
    airline: "항공사/GSSA 공식 자료",
    broker: "관세사 또는 서비스 제공자",
    government: "관세청/세관/정부 공식 자료"
  };
  const en = {
    quote: "Quote or provider",
    carrier: "Carrier local charges or tariff",
    carrier_terminal: "Carrier local charges or terminal tariff",
    provider: "Provider official terms",
    demdet: "Official DEM/DET lookup",
    terminal: "Terminal or warehouse tariff",
    authority: "Government, port, or authority source",
    airline: "Airline or GSSA official source",
    broker: "Customs broker or service provider",
    government: "Customs or government source"
  };
  return (lang === "ko" ? ko : en)[type] || type;
}

function renderChargeResourceLinks(origin, destination, mode, lang) {
  const hsHref = lang === "ko" ? "../hscode.html" : "../hscode-en.html";
  const rows = [
    [lang === "ko" ? `${destinationNameForCharge(destination, lang)} 수입 규제` : `${destinationNameForCharge(destination, lang)} import compliance`, `compliance.html?market=${encodeURIComponent(destination.toLowerCase())}`, "shield-check"],
    [lang === "ko" ? "HS Code / 관세 확인" : "HS Code / tariff check", hsHref, "barcode"],
    [lang === "ko" ? `${destinationNameForCharge(destination, lang)} 공휴일` : `${destinationNameForCharge(destination, lang)} public holidays`, `holidays.html?country=${encodeURIComponent(destination)}`, "calendar-check"]
  ];
  if (mode === "ocean") rows.push([lang === "ko" ? "항만 확인" : "Port check", `ports.html?country=${encodeURIComponent(destination)}`, "anchor"]);
  if (mode === "air") rows.push([lang === "ko" ? "공항 확인" : "Airport check", `airports.html?country=${encodeURIComponent(destination)}`, "plane"]);
  if (mode === "road-rail" && (origin === "KR" || destination === "KR")) rows.push([lang === "ko" ? "한국 안전운임 참고" : "Korea safe freight reference", "https://safetruck.go.kr/intro1/system1.do", "truck"]);
  return `
    <section class="freight-charge-section">
      <h4>${lang === "ko" ? "정부 / 터미널 / 통관 자료" : "Government / Terminal / Customs Resources"}</h4>
      <div class="country-tool-grid freight-charge-resource-grid">
        ${rows.map(([label, href, icon]) => `<a href="${escapeAttribute(href)}"${/^https?:/.test(href) ? ' target="_blank" rel="noopener noreferrer"' : ""}><i data-lucide="${icon}"></i><strong>${escapeHtml(label)}</strong></a>`).join("")}
      </div>
    </section>
  `;
}

function destinationNameForCharge(destination, lang) {
  return displayCountryName(destination, lang);
}

function renderFreightCharges(origin, destination, mode, context, labels, lang) {
  if (!origin || !destination) {
    return `<div class="data-empty">${labels.noSelection}</div>`;
  }
  const modeLabel = mode === "ocean" ? labels.ocean : mode === "air" ? labels.air : labels.roadRail;
  return `
    <article class="freight-charges-workflow">
      <div class="freight-brief-head">
        <div>
          <span class="kicker">${labels.freightCharges}</span>
          <h3>${labels.shipmentContext}</h3>
          <p>${escapeHtml(displayCountryName(origin, lang))} <span aria-hidden="true">→</span> ${escapeHtml(displayCountryName(destination, lang))} · ${escapeHtml(modeLabel)}</p>
        </div>
        <span class="freight-mode-pill">${escapeHtml(context.providerName || labels.noProvider)}</span>
      </div>
      <p class="muted">${labels.shipmentContextLead}</p>
      ${renderChargeNavigator(origin, destination, mode, context, labels, lang)}
      ${renderProviderLookups(mode, context.provider, labels, lang, origin, destination)}
      ${renderChargeExplainer(mode, labels, lang, context.search)}
      ${renderChargeResourceLinks(origin, destination, mode, lang)}
      <section class="freight-charge-note">
        <h4>${labels.importantNotes}</h4>
        <p>${labels.incotermsNote}</p>
        <p>${lang === "ko" ? "LOGILEE는 평균 운임, 총액 견적, 운임 적정성 판단을 제공하지 않습니다. 실제 금액은 운송사, 터미널, 관세사, 포워더 또는 정부 공식 자료로 확인하세요." : "LOGILEE does not provide average rates, total quotations, or price fairness judgments. Confirm actual amounts with the carrier, terminal, broker, forwarder, or official government source."}</p>
      </section>
    </article>
  `;
}

function renderGlobalFreightMarket(snapshot, btsRows, labels, lang) {
  return `
    <div class="freight-tabs" role="tablist" aria-label="${lang === "ko" ? "Freight Market sections" : "Freight Market sections"}">
      <button class="freight-tab is-active" type="button" role="tab" id="freight-tab-brief" aria-selected="true" aria-controls="freight-panel-brief" data-freight-tab="brief">${labels.marketBrief}</button>
      <button class="freight-tab" type="button" role="tab" id="freight-tab-charges" aria-selected="false" aria-controls="freight-panel-charges" data-freight-tab="charges">${labels.freightCharges}</button>
    </div>
    <section class="freight-v2-section freight-explorer-panel freight-explorer-primary">
      <div class="data-summary-head">
        <div>
          <span class="kicker">${labels.exploreTitle}</span>
          <h2>${labels.routeQuestion}</h2>
          <p class="muted">${labels.exploreLead}</p>
        </div>
      </div>
      <form class="freight-explorer-form" data-freight-explorer-form>
        <div class="field"><label for="freight-origin">${labels.origin}</label><select id="freight-origin" name="origin" data-freight-origin><option value="">${labels.selectOrigin}</option></select></div>
        <div class="field"><label for="freight-destination">${labels.destination}</label><select id="freight-destination" name="destination" data-freight-destination><option value="">${labels.selectDestination}</option></select></div>
        <div class="field"><label for="freight-mode">${labels.mode}</label><select id="freight-mode" name="mode"><option value="ocean">${labels.ocean}</option><option value="air">${labels.air}</option><option value="road-rail">${labels.roadRail}</option></select></div>
      </form>
      <form class="freight-charge-context-form" data-freight-charge-form>
        <div class="field" data-freight-shipment-field><label for="freight-shipment-type">${labels.shipmentType}</label><select id="freight-shipment-type" name="shipmentType"><option value="fcl">FCL</option><option value="lcl">LCL</option><option value="general">General</option></select></div>
        <div class="field" data-freight-equipment-field><label for="freight-equipment">${labels.equipment}</label><select id="freight-equipment" name="equipment"><option value="">Other / Not selected</option><option value="20gp">20GP</option><option value="40gp">40GP</option><option value="40hc">40HC</option><option value="reefer">Reefer</option></select></div>
        <div class="field"><label for="freight-cargo-condition">${labels.cargoCondition}</label><select id="freight-cargo-condition" name="cargoCondition"><option value="general">General</option><option value="dg">DG</option><option value="reefer">Reefer / Temperature-controlled</option><option value="oog">OOG / Oversized</option></select></div>
        <div class="field"><label for="freight-provider">${labels.provider}</label><select id="freight-provider" name="provider" data-freight-provider></select></div>
        <div class="field" data-freight-customs-value-field hidden><label for="freight-customs-value">${lang === "ko" ? "Customs Value (USD)" : "Customs Value (USD)"}</label><input id="freight-customs-value" name="customsValue" inputmode="decimal" placeholder="${lang === "ko" ? "선택 입력" : "Optional"}"></div>
      </form>
      <p class="freight-selector-helper" data-freight-empty-helper>${labels.noSelection}</p>
      <div id="freight-panel-brief" role="tabpanel" aria-labelledby="freight-tab-brief" data-freight-panel="brief">
        <div data-freight-explorer-output class="freight-explorer-output"></div>
      </div>
      <div id="freight-panel-charges" role="tabpanel" aria-labelledby="freight-tab-charges" data-freight-panel="charges" hidden>
        <div data-freight-charges-output class="freight-explorer-output"></div>
      </div>
    </section>
    ${renderFreightResourceAccordion(snapshot, labels, lang)}
  `;
}

function renderBtsRegionalSection(rows, labels, lang, options = {}) {
  const summary = rows.filter((item) => ["tsi_freight", "truck_d11", "rail_frt_intermodal"].includes(item.key));
  const latestObservation = rows.map((item) => item.period).filter(Boolean).sort().at(-1);
  const body = `
      <div class="data-status-list compact-fx-meta">
        <div><strong>${labels.latestObservation}</strong><span>${formatPeriod(latestObservation, lang)}</span></div>
        <div><strong>${labels.source}</strong><span><a href="${BTS_FREIGHT_SOURCE}" target="_blank" rel="noopener noreferrer">Bureau of Transportation Statistics (BTS)</a></span></div>
        <div><strong>${labels.dataset}</strong><span>Transportation Services Index and Seasonally-Adjusted Transportation Data</span></div>
        <div><strong>${labels.updateBasis}</strong><span>${labels.monthly}</span></div>
      </div>
      <div class="stat-grid freight-summary-grid">
        ${summary.map((item) => {
          const digits = item.latest > 1000 ? 0 : 1;
          const change = Number.isFinite(item.change) ? `${item.change >= 0 ? "↑ +" : "↓ "}${formatRate(item.change, 1)}%` : "";
          const cls = Number.isFinite(item.change) ? `trend-${item.change >= 0 ? "up" : "down"}` : "";
          return `<div class="stat-block"><span>${item.label}</span><strong>${Number.isFinite(item.latest) ? formatRate(item.latest, digits) : "N/A"}</strong>${change ? `<em class="${cls}">${change}</em>` : ""}<small>${formatPeriod(item.period, lang)}</small></div>`;
        }).join("")}
      </div>
      <div class="responsive-table">
        <table class="result-table">
          <thead><tr><th>${labels.tableIndicator}</th><th>${labels.tableLatest}</th><th>${labels.tablePrevious}</th><th>${labels.tableChange}</th><th>${labels.tableUnit}</th><th>${labels.tablePeriod}</th><th>${labels.tableSource}</th></tr></thead>
          <tbody>${rows.map((item) => freightRowMarkup(item)).join("")}</tbody>
        </table>
      </div>
      <p class="muted">${labels.sourceNote}</p>
  `;
  if (options.collapsed) {
    return `
      <details class="freight-detail-disclosure">
        <summary>${labels.detailSummary}</summary>
        <div class="freight-detail-body">${body}</div>
      </details>
    `;
  }
  return `
    <section class="freight-v2-section freight-regional-section">
      <div class="data-summary-head">
        <div>
          <span class="kicker">${labels.regionalSubtitle}</span>
          <h2>${labels.regionalTitle}</h2>
          <p class="muted">${labels.regionalNote}</p>
        </div>
      </div>
      ${body}
    </section>
  `;
}

function setupFreightExplorer(target, snapshot, btsRows, labels, lang) {
  const form = target.querySelector("[data-freight-explorer-form]");
  if (!form) return;
  const origin = form.querySelector("[name='origin']");
  const destination = form.querySelector("[name='destination']");
  const mode = form.querySelector("[name='mode']");
  const output = target.querySelector("[data-freight-explorer-output]");
  const chargesOutput = target.querySelector("[data-freight-charges-output]");
  const chargeForm = target.querySelector("[data-freight-charge-form]");
  const shipmentType = chargeForm?.querySelector("[name='shipmentType']");
  const equipment = chargeForm?.querySelector("[name='equipment']");
  const cargoCondition = chargeForm?.querySelector("[name='cargoCondition']");
  const provider = chargeForm?.querySelector("[name='provider']");
  const shipmentField = target.querySelector("[data-freight-shipment-field]");
  const equipmentField = target.querySelector("[data-freight-equipment-field]");
  const customsValue = chargeForm?.querySelector("[name='customsValue']");
  const customsValueField = target.querySelector("[data-freight-customs-value-field]");
  const helper = target.querySelector("[data-freight-empty-helper]");
  const countryItems = TRADE_COUNTRIES.map(([value, en, ko]) => ({ value, label: lang === "ko" ? ko : en, meta: `${value} · ${en}`, terms: [value, en, ko, ...(COUNTRY_SEARCH_ALIASES[value] || [])].map(normalizeCountrySearch) }));
  origin.innerHTML = `<option value="">${labels.selectOrigin}</option>` + optionMarkup(TRADE_COUNTRIES);
  destination.innerHTML = `<option value="">${labels.selectDestination}</option>` + optionMarkup(TRADE_COUNTRIES);
  const params = new URLSearchParams(location.search);
  if (TRADE_COUNTRIES.some(([code]) => code === params.get("origin"))) origin.value = params.get("origin");
  if (TRADE_COUNTRIES.some(([code]) => code === params.get("destination"))) destination.value = params.get("destination");
  if (["ocean", "air", "road-rail"].includes(params.get("mode"))) mode.value = params.get("mode");
  const validTab = ["brief", "charges"].includes(params.get("tab")) ? params.get("tab") : "brief";
  let activeTab = validTab;
  enhanceSimpleCombobox(origin, countryItems, { label: labels.origin, placeholder: labels.selectCountry, open: labels.origin, empty: labels.unavailableSignal });
  enhanceSimpleCombobox(destination, countryItems, { label: labels.destination, placeholder: labels.selectCountry, open: labels.destination, empty: labels.unavailableSignal });
  let syncingHistory = false;
  let chargeSearchQuery = "";
  const syncChargeControls = () => {
    if (!provider || !shipmentType || !equipment || !cargoCondition) return;
    const selectedProvider = provider.value;
    const selectedShipmentType = shipmentType.value;
    const selectedEquipment = equipment.value;
    const selectedCargoCondition = cargoCondition.value;
    provider.innerHTML = freightProviderOptions(mode.value, selectedProvider, labels);
    if (![...provider.options].some((item) => item.value === selectedProvider)) provider.value = "";
    if (mode.value === "air") {
      shipmentType.innerHTML = `<option value="general">General Air Cargo</option>`;
      cargoCondition.innerHTML = `<option value="general">General</option><option value="dg">DG</option><option value="temperature">Temperature-controlled</option><option value="oog">Oversized</option>`;
      if (shipmentField) shipmentField.hidden = true;
      if (equipmentField) equipmentField.hidden = true;
    } else if (mode.value === "road-rail") {
      shipmentType.innerHTML = `<option value="general">General Trucking</option>`;
      cargoCondition.innerHTML = `<option value="general">General</option><option value="dg">DG</option><option value="reefer">Reefer</option><option value="overweight">Overweight</option>`;
      if (shipmentField) shipmentField.hidden = true;
      if (equipmentField) equipmentField.hidden = true;
    } else {
      shipmentType.innerHTML = `<option value="fcl">FCL</option><option value="lcl">LCL</option>`;
      cargoCondition.innerHTML = `<option value="general">General</option><option value="dg">DG</option><option value="reefer">Reefer</option><option value="oog">OOG</option>`;
      if ([...shipmentType.options].some((item) => item.value === selectedShipmentType)) shipmentType.value = selectedShipmentType;
      if ([...equipment.options].some((item) => item.value === selectedEquipment)) equipment.value = selectedEquipment;
      if (shipmentField) shipmentField.hidden = false;
      if (equipmentField) equipmentField.hidden = shipmentType.value === "lcl";
    }
    if ([...cargoCondition.options].some((item) => item.value === selectedCargoCondition)) cargoCondition.value = selectedCargoCondition;
    if (customsValueField) customsValueField.hidden = destination.value !== "US";
  };
  const syncTabs = () => {
    target.querySelectorAll("[data-freight-tab]").forEach((button) => {
      const selected = button.dataset.freightTab === activeTab;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-selected", String(selected));
      button.tabIndex = selected ? 0 : -1;
    });
    target.querySelectorAll("[data-freight-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.freightPanel !== activeTab;
    });
  };
  const render = (push = false) => {
    syncChargeControls();
    output.innerHTML = renderFreightExplorerResult(origin.value, destination.value, mode.value, snapshot, btsRows, labels, lang);
    if (chargesOutput) {
      const selectedProvider = FREIGHT_CHARGE_PROVIDERS.find((item) => item.id === provider?.value && item.mode === mode.value);
      chargesOutput.innerHTML = renderFreightCharges(origin.value, destination.value, mode.value, {
        shipmentType: shipmentType?.value || "",
        equipment: equipment?.value || "",
        cargoCondition: cargoCondition?.value || "",
        provider: provider?.value || "",
        providerName: selectedProvider?.name || "",
        customsValue: customsValue?.value || "",
        search: chargeSearchQuery
      }, labels, lang);
    }
    if (helper) helper.hidden = Boolean(origin.value && destination.value);
    if (push && !syncingHistory) {
      const next = new URL(location.href);
      origin.value ? next.searchParams.set("origin", origin.value) : next.searchParams.delete("origin");
      destination.value ? next.searchParams.set("destination", destination.value) : next.searchParams.delete("destination");
      next.searchParams.set("mode", mode.value);
      next.searchParams.set("tab", activeTab);
      provider?.value ? next.searchParams.set("provider", provider.value) : next.searchParams.delete("provider");
      shipmentType?.value ? next.searchParams.set("shipmentType", shipmentType.value) : next.searchParams.delete("shipmentType");
      equipment?.value ? next.searchParams.set("equipment", equipment.value) : next.searchParams.delete("equipment");
      cargoCondition?.value ? next.searchParams.set("cargo", cargoCondition.value) : next.searchParams.delete("cargo");
      customsValue?.value ? next.searchParams.set("customsValue", customsValue.value) : next.searchParams.delete("customsValue");
      history.pushState({}, "", next);
      updateFreightLanguageSwitch();
    }
    syncTabs();
    renderFreightHolidayCard(target, destination.value, labels, lang);
    refreshIcons();
  };
  target.querySelector("[data-freight-resource-toggle]")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    const panel = target.querySelector(`#${button.getAttribute("aria-controls")}`);
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    if (panel) panel.hidden = expanded;
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    render(true);
  });
  form.addEventListener("change", () => render(true));
  chargeForm?.addEventListener("change", () => render(true));
  chargeForm?.addEventListener("submit", (event) => event.preventDefault());
  target.addEventListener("input", (event) => {
    if (event.target?.matches("[data-freight-charge-search]")) {
      chargeSearchQuery = event.target.value;
      const cursor = event.target.selectionStart || chargeSearchQuery.length;
      render(true);
      const nextInput = target.querySelector("[data-freight-charge-search]");
      nextInput?.focus();
      nextInput?.setSelectionRange(cursor, cursor);
    }
  });
  target.addEventListener("click", async (event) => {
    const copyButton = event.target.closest("[data-copy-freight-question], [data-copy-freight-all]");
    if (!copyButton) return;
    const text = copyButton.getAttribute("data-copy-freight-question") || copyButton.getAttribute("data-copy-freight-all") || "";
    const copied = await copyTextWithFallback(text);
    const original = copyButton.dataset.originalLabel || copyButton.textContent;
    copyButton.dataset.originalLabel = original;
    copyButton.textContent = copied ? (lang === "ko" ? "복사됨" : "Copied") : (lang === "ko" ? "복사 실패" : "Copy failed");
    const feedback = copyButton.parentElement?.querySelector(".freight-copy-feedback") || copyButton.closest(".freight-navigator-section")?.querySelector(".freight-copy-feedback");
    if (feedback) feedback.textContent = copyButton.textContent;
    window.setTimeout(() => {
      copyButton.textContent = copyButton.dataset.originalLabel || original;
      if (feedback) feedback.textContent = "";
    }, 1400);
  });
  target.querySelectorAll("[data-freight-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      activeTab = button.dataset.freightTab || "brief";
      render(true);
    });
    button.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const tabs = [...target.querySelectorAll("[data-freight-tab]")];
      const index = tabs.indexOf(button);
      const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : event.key === "ArrowRight" ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
      tabs[nextIndex]?.focus();
      tabs[nextIndex]?.click();
    });
  });
  syncChargeControls();
  if (provider && FREIGHT_CHARGE_PROVIDERS.some((item) => item.id === params.get("provider") && item.mode === mode.value)) provider.value = params.get("provider");
  if (shipmentType && params.get("shipmentType")) shipmentType.value = params.get("shipmentType");
  if (equipment && params.get("equipment")) equipment.value = params.get("equipment");
  if (cargoCondition && params.get("cargo")) cargoCondition.value = params.get("cargo");
  if (customsValue && params.get("customsValue")) customsValue.value = params.get("customsValue");
  window.addEventListener("popstate", () => {
    const nextParams = new URLSearchParams(location.search);
    syncingHistory = true;
    origin.value = nextParams.get("origin") || "";
    destination.value = nextParams.get("destination") || "";
    mode.value = ["ocean", "air", "road-rail"].includes(nextParams.get("mode")) ? nextParams.get("mode") : "ocean";
    activeTab = ["brief", "charges"].includes(nextParams.get("tab")) ? nextParams.get("tab") : "brief";
    syncChargeControls();
    if (provider) provider.value = nextParams.get("provider") || "";
    if (shipmentType) shipmentType.value = nextParams.get("shipmentType") || shipmentType.value;
    if (equipment) equipment.value = nextParams.get("equipment") || "";
    if (cargoCondition) cargoCondition.value = nextParams.get("cargo") || cargoCondition.value;
    if (customsValue) customsValue.value = nextParams.get("customsValue") || "";
    origin.dispatchEvent(new Event("change"));
    destination.dispatchEvent(new Event("change"));
    syncingHistory = false;
    render(false);
  });
  updateFreightLanguageSwitch();
  render(false);
}

function updateFreightLanguageSwitch() {
  const link = document.querySelector("[data-freight-lang-switch]");
  if (link) {
    const base = link.getAttribute("href").split("?")[0];
    link.setAttribute("href", `${base}${location.search || ""}`);
  }
  document.querySelectorAll("[data-lang-choice]").forEach((item) => {
    const href = item.getAttribute("href") || "";
    if (!/freight-market\.html/.test(href)) return;
    const base = href.split("?")[0];
    item.setAttribute("href", `${base}${location.search || ""}`);
  });
}

function renderFreightExplorerResult(origin, destination, mode, snapshot, btsRows, labels, lang) {
  if (!origin || !destination) return "";
  const gscpi = snapshot.gscpi || {};
  const originLsci = snapshot.unctad?.lsci?.[origin];
  const destinationLsci = snapshot.unctad?.lsci?.[destination];
  const bilateral = mode === "ocean" ? snapshot.unctad?.bilateral?.[`${origin}-${destination}`] : null;
  const involvesUs = origin === "US" || destination === "US";
  const originName = displayCountryName(origin, lang);
  const destinationName = displayCountryName(destination, lang);
  const modeLabel = mode === "ocean" ? labels.ocean : mode === "air" ? labels.air : labels.roadRail;
  const coverageNotes = freightCoverageNotes({ originName, destinationName, originLsci, destinationLsci, bilateral, mode, labels, lang });
  const periodParts = [
    `GSCPI ${formatFreightDate(gscpi.current?.date, lang)}`
  ];
  if (mode === "ocean") periodParts.push(`LSCI ${formatQuarterLabel(originLsci?.period || destinationLsci?.period || bilateral?.period, lang)}`);
  if (involvesUs) periodParts.push(`BTS ${formatPeriod(btsRows.map((item) => item.period).filter(Boolean).sort().at(-1), lang)}`);
  return `
    <article class="freight-market-brief">
      <div class="freight-brief-head">
        <div>
          <span class="kicker">${labels.briefEyebrow}</span>
          <h3>${labels.marketBrief}</h3>
          <p>${escapeHtml(originName)} <span aria-hidden="true">→</span> ${escapeHtml(destinationName)}</p>
        </div>
        <span class="freight-mode-pill">${escapeHtml(modeLabel)}</span>
      </div>
      <div class="data-status-list compact-fx-meta freight-brief-meta">
        <div><strong>${labels.latestOfficial}</strong><span>${periodParts.join(" · ")}</span></div>
      </div>
      <section class="freight-market-summary">
        <h4>${labels.summaryTitle}</h4>
        ${renderMarketSummary({ gscpi, originName, destinationName, originLsci, destinationLsci, bilateral, mode, modeLabel, labels, lang })}
      </section>
      <section class="freight-holiday-card" data-freight-holiday="${escapeAttribute(destination)}">
        <h4>${labels.holidayTitle}</h4>
        <p>${labels.holidayLoading}</p>
      </section>
      <h4>${labels.relevantSignals}</h4>
      <div class="freight-signal-list">
        ${renderGscpiBriefCard(gscpi, labels, lang)}
        ${mode === "ocean" && originLsci ? renderLsciCard(`${originName} LSCI`, originLsci, labels, lang, labels.originSignal) : ""}
        ${mode === "ocean" && bilateral ? renderBilateralCard(bilateral, labels, lang) : ""}
        ${mode === "ocean" && destinationLsci ? renderLsciCard(`${destinationName} LSCI`, destinationLsci, labels, lang, labels.destinationSignal) : ""}
        ${involvesUs ? renderUsActivityCard(btsRows, labels, lang) : ""}
      </div>
      ${coverageNotes.length ? renderCoverageNote(coverageNotes, labels) : ""}
      ${mode === "ocean" || mode === "air" ? renderLocationLinks(origin, destination, mode, labels, lang) : ""}
      ${renderRateResources(mode, labels, lang)}
      ${renderFreightRelatedTools(labels, lang, origin, destination, mode)}
      ${involvesUs ? renderBtsRegionalSection(btsRows, labels, lang, { collapsed: true }) : ""}
    </article>
  `;
}

async function renderFreightHolidayCard(target, destination, labels, lang) {
  const card = target.querySelector("[data-freight-holiday]");
  if (!card || !destination || card.dataset.freightHoliday !== destination) return;
  const year = new Date().getFullYear();
  try {
    const holidays = [
      ...(await getHolidays(destination, year)),
      ...(await getHolidays(destination, year + 1))
    ].filter((item) => item && item.date);
    const today = new Date(todayIsoLocal()).getTime();
    const upcoming = holidays
      .map((item) => ({ ...item, days: daysUntilHoliday(item.date), time: holidayDateValue(item.date) }))
      .filter((item) => item.time >= today)
      .sort((a, b) => a.time - b.time);
    const next = upcoming[0];
    const within30 = upcoming.filter((item) => item.days >= 0 && item.days <= 30).slice(0, 4);
    if (!next) throw new Error("No upcoming holiday");
    const dateLabel = formatFreightHolidayDate(next.date, lang);
    const daysLabel = lang === "ko" ? `${next.days}일 후` : `in ${next.days} day${next.days === 1 ? "" : "s"}`;
    card.innerHTML = `
      <h4>${labels.holidayTitle}</h4>
      <div class="freight-holiday-main">
        <strong>${escapeHtml(dateLabel)}</strong>
        <span>${escapeHtml(next.localName || next.name || "")}</span>
        <small>${escapeHtml(daysLabel)}</small>
      </div>
      ${within30.length ? `<p>${labels.holidayWindow}: ${within30.map((item) => `${formatFreightHolidayDate(item.date, lang)} ${item.localName || item.name || ""}`).map(escapeHtml).join(" · ")}</p>` : `<p>${lang === "ko" ? "30일 내 표시할 공휴일이 없습니다." : "No public holidays are shown in the next 30 days."}</p>`}
      <small>${lang === "ko" ? "공휴일 자료: Nager.Date. 통관·항만·터미널 휴무 여부를 의미하지 않습니다." : "Holiday data: Nager.Date. This does not indicate customs, port, or terminal closure."}</small>
    `;
  } catch (error) {
    card.innerHTML = `<h4>${labels.holidayTitle}</h4><p>${labels.holidayUnavailable}</p>`;
  }
}

function formatFreightHolidayDate(value, lang) {
  const date = new Date(`${value}T00:00:00Z`);
  if (!Number.isFinite(date.getTime())) return value || "N/A";
  return new Intl.DateTimeFormat(lang === "ko" ? "ko-KR" : "en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC"
  }).format(date);
}

function renderMarketSummary(context) {
  const { gscpi, originName, destinationName, originLsci, destinationLsci, bilateral, mode, modeLabel, labels, lang } = context;
  const sentences = [gscpiSummarySentence(gscpi, lang)];
  if (mode === "ocean") {
    if (originLsci) sentences.push(lsciSummarySentence(originName, originLsci, lang));
    if (bilateral) sentences.push(bilateralSummarySentence(originName, destinationName, bilateral, lang));
    if (destinationLsci) sentences.push(lsciSummarySentence(destinationName, destinationLsci, lang));
  } else if (mode === "air") {
    sentences.push(lang === "ko" ? "항공 운임 지수 값은 라이선스 없이 표시하지 않고, 공항 정보와 공급망 압력 지표만 연결합니다." : "Licensed air freight index values are not displayed; this brief links airport intelligence and supply-chain pressure context only.");
  } else {
    sentences.push(lang === "ko" ? "도로/철도 운임 지수 값은 제공하지 않고, 미국이 포함된 경우에만 BTS 운송 활동 지표를 연결합니다." : "Road/rail freight-rate values are not provided; BTS activity indicators are linked only when the U.S. is involved.");
  }
  return `
    <p class="freight-route-summary">${escapeHtml(originName)} → ${escapeHtml(destinationName)} · ${escapeHtml(modeLabel)}</p>
    <ul>${sentences.map((sentence) => `<li>${escapeHtml(sentence)}</li>`).join("")}</ul>
  `;
}

function gscpiSummarySentence(gscpi, lang) {
  const value = Number(gscpi.current?.value);
  const change = Number(gscpi.change);
  const level = value === 0
    ? (lang === "ko" ? "역사적 평균 수준" : "near its historical average")
    : value > 0
      ? (lang === "ko" ? "역사적 평균보다 높은 수준" : "above its historical average")
      : (lang === "ko" ? "역사적 평균보다 낮은 수준" : "below its historical average");
  const movement = !Number.isFinite(change)
    ? ""
    : change === 0
      ? (lang === "ko" ? "전월과 같은 수준입니다" : "and was unchanged from the previous month")
      : change < 0
        ? (lang === "ko" ? `전월보다 ${formatRate(Math.abs(change), 2)} 완화됐지만` : `eased by ${formatRate(Math.abs(change), 2)} from the previous month but remains`)
        : (lang === "ko" ? `전월보다 ${formatRate(change, 2)} 상승했고` : `rose by ${formatRate(change, 2)} from the previous month and is`);
  if (lang === "ko") return movement ? `글로벌 공급망 압력은 ${movement} ${level}입니다.` : `글로벌 공급망 압력은 ${level}입니다.`;
  return movement ? `Global supply-chain pressure ${movement} ${level}.` : `Global supply-chain pressure is ${level}.`;
}

function lsciSummarySentence(countryName, data, lang) {
  const qoq = Number(data.qoq);
  const movement = !Number.isFinite(qoq) || qoq === 0
    ? (lang === "ko" ? "전분기와 유사합니다" : "was similar to the previous quarter")
    : qoq > 0
      ? (lang === "ko" ? `전분기 대비 ${formatRate(qoq, 1)}% 상승했습니다` : `rose ${formatRate(qoq, 1)}% from the previous quarter`)
      : (lang === "ko" ? `전분기 대비 ${formatRate(Math.abs(qoq), 1)}% 하락했습니다` : `fell ${formatRate(Math.abs(qoq), 1)}% from the previous quarter`);
  return lang === "ko" ? `${countryName}의 정기선 연결성은 ${movement}.` : `${countryName} liner shipping connectivity ${movement}.`;
}

function bilateralSummarySentence(originName, destinationName, data, lang) {
  const value = Number(data.value);
  const previous = Number(data.previousValue);
  const change = Number.isFinite(value) && Number.isFinite(previous) ? value - previous : 0;
  const movement = change === 0
    ? (lang === "ko" ? "이전 관측치와 유사합니다" : "was similar to the previous observation")
    : change > 0
      ? (lang === "ko" ? `이전 관측치보다 ${formatRate(change, 3)} 상승했습니다` : `increased by ${formatRate(change, 3)} from the previous observation`)
      : (lang === "ko" ? `이전 관측치보다 ${formatRate(Math.abs(change), 3)} 하락했습니다` : `decreased by ${formatRate(Math.abs(change), 3)} from the previous observation`);
  return lang === "ko" ? `${originName}–${destinationName} 양자 정기선 연결성은 ${movement}.` : `${originName}–${destinationName} bilateral liner connectivity ${movement}.`;
}

function freightCoverageNotes(context) {
  const { originName, destinationName, originLsci, destinationLsci, bilateral, mode, labels, lang } = context;
  const notes = [];
  if (mode === "ocean") {
    if (!originLsci) notes.push(lang === "ko" ? `${originName} 국가 정기선 연결성: 현재 제공 데이터 없음.` : `${originName} country LSCI: no data in the current dataset.`);
    if (!bilateral) notes.push(lang === "ko" ? `${originName}–${destinationName} 양자 정기선 연결성: 현재 제공 데이터 없음.` : `${originName}–${destinationName} bilateral LSCI: no data in the current dataset.`);
    if (!destinationLsci) notes.push(lang === "ko" ? `${destinationName} 국가 정기선 연결성: 현재 제공 데이터 없음.` : `${destinationName} country LSCI: no data in the current dataset.`);
  } else {
    notes.push(mode === "air" ? labels.airNotice : labels.roadNotice);
  }
  return notes;
}

function renderCoverageNote(notes, labels) {
  return `
    <section class="freight-coverage-note">
      <h4>${labels.coverageTitle}</h4>
      <ul>${notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}</ul>
    </section>
  `;
}

function renderSignalCard(scope, title, value, previous, change, period, note, labels, options = {}) {
  const digits = options.digits ?? 2;
  const changeClass = Number.isFinite(change) ? `trend-${change >= 0 ? "up" : "down"}` : "";
  return `
    <article class="freight-signal-card">
      <div><span class="kicker">${escapeHtml(scope)}</span><h5>${escapeHtml(title)}</h5><small>${escapeHtml(period || labels.latestObservation)}</small></div>
      <strong>${Number.isFinite(value) ? formatRate(value, digits) : labels.unavailableSignal}</strong>
      <span class="${changeClass}">${formatSignedValue(change, digits)}${options.percent ? "%" : ""}</span>
      <p>${escapeHtml(note)}</p>
    </article>
  `;
}

function gscpiBriefNote(gscpi, lang) {
  const value = Number(gscpi.current?.value);
  const change = Number(gscpi.change);
  const level = value >= 0
    ? (lang === "ko" ? "역사적 평균보다 높은 공급망 압력입니다." : "Supply-chain pressure is above its historical average.")
    : (lang === "ko" ? "역사적 평균보다 낮은 공급망 압력입니다." : "Supply-chain pressure is below its historical average.");
  const movement = Number.isFinite(change)
    ? change < 0
      ? (lang === "ko" ? `전월보다 ${formatRate(Math.abs(change), 2)} 완화되었습니다.` : `It eased by ${formatRate(Math.abs(change), 2)} from the previous month.`)
      : (lang === "ko" ? `전월보다 ${formatRate(change, 2)} 높아졌습니다.` : `It increased by ${formatRate(change, 2)} from the previous month.`)
    : "";
  return `${level} ${movement} ${lang === "ko" ? "운임 가격이나 견적은 아닙니다." : "This is not a freight price or quote."}`;
}

function renderGscpiBriefCard(gscpi, labels, lang) {
  return renderSignalCard(labels.globalSignal, labels.gscpiTitle, Number(gscpi.current?.value), Number(gscpi.previous?.value), Number(gscpi.change), formatFreightDate(gscpi.current?.date, lang), gscpiBriefNote(gscpi, lang), labels);
}

function lsciNote(data, labels, lang) {
  if (!data) return labels.connectivityLead;
  const qoq = Number(data.qoq);
  const yoy = Number(data.yoy);
  const rank = data.rank ? `Rank ${data.rank}. ` : "";
  const movement = Number.isFinite(qoq)
    ? qoq > 0
      ? (lang === "ko" ? `전분기보다 ${formatRate(qoq, 1)}% 높습니다.` : `${formatRate(qoq, 1)}% higher than the previous quarter.`)
      : qoq < 0
        ? (lang === "ko" ? `전분기보다 ${formatRate(Math.abs(qoq), 1)}% 낮습니다.` : `${formatRate(Math.abs(qoq), 1)}% lower than the previous quarter.`)
        : (lang === "ko" ? "전분기와 같은 수준입니다." : "Flat versus the previous quarter.")
    : "";
  const yoyText = Number.isFinite(yoy) ? ` YoY ${formatSignedValue(yoy, 1)}%.` : "";
  return `${rank}${movement}${yoyText} ${labels.connectivityLead}`;
}

function renderLsciCard(title, data, labels, lang, scope = labels.originSignal) {
  return renderSignalCard(scope, title, Number(data.value), Number(data.previousValue), Number(data.qoq), formatQuarterLabel(data.period, lang), lsciNote(data, labels, lang), labels, { digits: 1, percent: true });
}

function renderBilateralCard(data, labels, lang) {
  const change = Number.isFinite(Number(data.value)) && Number.isFinite(Number(data.previousValue)) ? Number(data.value) - Number(data.previousValue) : null;
  const note = `${labels.connectivityLead} ${lang === "ko" ? "선택 국가 간 해운 네트워크의 상대적 연결성만 보여줍니다." : "It shows relative maritime network connectivity between the selected countries."}`;
  return renderSignalCard(labels.routeSignal, labels.bilateralConnectivity, Number(data.value), Number(data.previousValue), change, formatQuarterLabel(data.period, lang), note, labels, { digits: 3 });
}

function renderUsActivityCard(rows, labels, lang) {
  const summary = rows.filter((row) => ["tsi_freight", "truck_d11", "rail_frt_intermodal"].includes(row.key));
  if (!summary.length) return "";
  const latestObservation = summary.map((item) => item.period).filter(Boolean).sort().at(-1);
  return `
    <article class="freight-signal-card freight-us-summary">
      <span class="kicker">${labels.regionalSignal}</span>
      <h5>${labels.usActivity}</h5>
      <strong>${formatPeriod(latestObservation, lang)}</strong>
      <div class="freight-mini-metrics">
        ${summary.map((item) => {
          const digits = item.latest > 1000 ? 0 : 1;
          const change = Number.isFinite(item.change) ? `${item.change >= 0 ? "↑ +" : "↓ "}${formatRate(item.change, 1)}%` : "";
          const cls = Number.isFinite(item.change) ? `trend-${item.change >= 0 ? "up" : "down"}` : "";
          return `<div><span>${escapeHtml(item.label)}</span><b>${Number.isFinite(item.latest) ? formatRate(item.latest, digits) : "N/A"}</b>${change ? `<em class="${cls}">${change}</em>` : ""}</div>`;
        }).join("")}
      </div>
      <p>${labels.regionalNote}</p>
    </article>
  `;
}

function renderRateNotice(mode, labels) {
  return `
    <div class="freight-rate-notice">
      <strong>${labels.rateNoticeTitle}</strong>
      <p>${labels.rateNotice}</p>
    </div>
  `;
}

function renderLocationLinks(origin, destination, mode, labels, lang) {
  const isAir = mode === "air";
  const path = isAir ? "airports.html" : "ports.html";
  const title = isAir ? labels.relevantAirports : labels.relevantPorts;
  const noun = isAir ? labels.allAirports : labels.allPorts;
  const icon = isAir ? "plane" : "anchor";
  return `
    <div class="freight-port-links">
      <h4>${title}</h4>
      <div class="country-tool-grid freight-location-grid">
        <a href="${path}?country=${escapeAttribute(origin)}"><i data-lucide="${icon}"></i><strong>${escapeHtml(displayCountryName(origin, lang))} ${noun}</strong></a>
        <a href="${path}?country=${escapeAttribute(destination)}"><i data-lucide="${icon}"></i><strong>${escapeHtml(displayCountryName(destination, lang))} ${noun}</strong></a>
      </div>
    </div>
  `;
}

function freightMarketResources(mode) {
  const ocean = [
    ["Ocean Container", "Shanghai Shipping Exchange SCFI", "Container spot market reference published by Shanghai Shipping Exchange.", "https://en.sse.net.cn/indices/scfinew.jsp"],
    ["Ocean Container", "Shanghai Shipping Exchange CCFI", "China export container market reference published by Shanghai Shipping Exchange.", "https://en.sse.net.cn/indices/ccfinew.jsp"],
    ["Ocean Container", "Drewry World Container Index", "Licensed container freight index resource; LOGILEE does not republish values.", "https://www.drewry.co.uk/supply-chain-advisors/supply-chain-expertise/world-container-index-assessed-by-drewry"],
    ["Ocean Container", "Freightos FBX", "Freightos official index resource; licensed data terms apply.", "https://terminal.freightos.com/freightos-baltic-index"]
  ];
  if (mode === "air") return [["Air Cargo", "IATA Air Cargo Market Analysis", "Official IATA air cargo analysis resource.", "https://www.iata.org/en/publications/economics/"]];
  if (mode === "road-rail") return [];
  return ocean;
}

function renderRateResources(mode, labels, lang) {
  const resources = freightMarketResources(mode);
  if (!resources.length) return "";
  return `
    <section class="freight-rate-resources">
      <div>
        <h4>${labels.rateNoticeTitle}</h4>
        <p>${labels.rateNotice}</p>
      </div>
      <div class="freight-rate-links">
        ${resources.map(([, name, , href]) => `<a href="${escapeAttribute(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(name)} <span aria-hidden="true">↗</span></a>`).join("")}
      </div>
    </section>
  `;
}

function renderFreightResourceAccordion(snapshot, labels, lang) {
  const marketResources = [
    ...freightMarketResources("ocean"),
    ["Dry Bulk", "Baltic Exchange Market Data", "Official Baltic Exchange market data resource; subscription/licensing may apply.", "https://www.balticexchange.com/en/data-services/market-information0.html"],
    ...freightMarketResources("air")
  ];
  const dataRows = [
    ["New York Fed", "GSCPI", labels.gscpiNote, snapshot.gscpi?.sourceUrl],
    ["UNCTAD", "LSCI / Bilateral LSCI", labels.connectivityLead, snapshot.unctad?.sourceUrl],
    ["BTS / USDOT", "U.S. Freight Activity", labels.regionalNote, BTS_FREIGHT_SOURCE]
  ];
  return `
    <section class="freight-v2-section freight-compact-details freight-bottom-resources">
      <button class="freight-resource-toggle" type="button" data-freight-resource-toggle aria-expanded="false" aria-controls="freight-resource-panel">
        <span>${labels.resourcesTitle}</span><small>${labels.resourcesLead}</small>
      </button>
      <div class="freight-resource-panel" id="freight-resource-panel" hidden>
        <div>
          <h3>${lang === "ko" ? "시장 지표 데이터" : "Market Signal Data"}</h3>
          <div class="freight-compact-list">
            ${dataRows.map(([source, name, note, href]) => `<a href="${escapeAttribute(href)}" target="_blank" rel="noopener noreferrer"><strong>${escapeHtml(source)} — ${escapeHtml(name)}</strong><small>${escapeHtml(note)}</small></a>`).join("")}
          </div>
        </div>
        <div>
          <h3>${lang === "ko" ? "운임·시장 자료" : "Freight Rate and Market Resources"}</h3>
          <div class="freight-compact-list">
            ${marketResources.map(([, name, text, href]) => `<a href="${escapeAttribute(href)}" target="_blank" rel="noopener noreferrer"><strong>${escapeHtml(name)}</strong><small>${escapeHtml(text)}</small></a>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFreightRelatedTools(labels, lang, origin, destination, mode) {
  const originParam = `country=${encodeURIComponent(origin)}`;
  const destinationParam = `country=${encodeURIComponent(destination)}`;
  const originName = displayCountryName(origin, lang);
  const destinationName = displayCountryName(destination, lang);
  const routeName = lang === "ko" ? `${originName}–${destinationName}` : `${originName}–${destinationName}`;
  const complianceHref = `compliance.html?market=${encodeURIComponent(destination.toLowerCase())}`;
  const tools = mode === "air"
    ? [
        [lang === "ko" ? `${originName} 공항 확인` : `${originName} Airports`, `airports.html?${originParam}`, "plane"],
        [lang === "ko" ? `${destinationName} 공항 확인` : `${destinationName} Airports`, `airports.html?${destinationParam}`, "plane-landing"],
        [lang === "ko" ? `${destinationName} 공휴일 확인` : `${destinationName} Trade Holidays`, `holidays.html?${destinationParam}`, "calendar-check"],
        [lang === "ko" ? "CBM 계산기" : "CBM Calculator", "cbm.html", "box"],
        [lang === "ko" ? `${destinationName} 수입 규제 확인` : `${destinationName} Import Compliance`, complianceHref, "shield-check"]
      ]
    : mode === "road-rail"
      ? [
          [lang === "ko" ? `${originName} 국가 프로필` : `${originName} Country Profile`, `country-trade-profile.html?${originParam}`, "globe"],
          [lang === "ko" ? `${destinationName} 국가 프로필` : `${destinationName} Country Profile`, `country-trade-profile.html?${destinationParam}`, "globe-2"],
          [lang === "ko" ? "영업일 확인" : "Check business days", "business-day.html", "calendar-clock"],
          [lang === "ko" ? "CBM 계산기" : "CBM Calculator", "cbm.html", "box"],
          [lang === "ko" ? `${destinationName} 수입 규제 확인` : `${destinationName} Import Compliance`, complianceHref, "shield-check"]
        ]
      : [
          [lang === "ko" ? `${originName} 항만 확인` : `${originName} Ports`, `ports.html?${originParam}`, "anchor"],
          [lang === "ko" ? `${destinationName} 항만 확인` : `${destinationName} Ports`, `ports.html?${destinationParam}`, "ship"],
          [lang === "ko" ? `${routeName} 무역 데이터` : `${routeName} Trade Data`, `global-trade-explorer.html?reporter=${encodeURIComponent(origin)}&partner=${encodeURIComponent(destination)}`, "bar-chart-3"],
          [lang === "ko" ? `${destinationName} 공휴일 확인` : `${destinationName} Trade Holidays`, `holidays.html?${destinationParam}`, "calendar-check"],
          [lang === "ko" ? "CBM 계산기" : "CBM Calculator", "cbm.html", "box"],
          [lang === "ko" ? `${destinationName} 수입 규제 확인` : `${destinationName} Import Compliance`, complianceHref, "shield-check"]
        ];
  return `<section class="freight-next-actions"><h4>${labels.nextActionsTitle}</h4><div class="country-tool-grid freight-action-grid">${tools.map(([label, href, icon]) => `<a href="${href}"><i data-lucide="${icon}"></i><strong>${escapeHtml(label)}</strong></a>`).join("")}</div></section>`;
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

if (typeof window !== "undefined") {
  window.LOGILEE_COUNTRY_OPTIONS = TRADE_COUNTRIES;
  window.LOGILEE_COUNTRY_ALIASES = COUNTRY_SEARCH_ALIASES;
}

const COUNTRY_CURRENCY = { KR: "KRW", CN: "CNY", US: "USD", JP: "JPY", DE: "EUR", VN: "VND", IN: "INR", MX: "MXN", SG: "SGD", GB: "GBP", NL: "EUR", AE: "AED", HK: "HKD", TH: "THB", MY: "MYR", LK: "LKR", AT: "EUR", BE: "EUR", BG: "EUR", HR: "EUR", CY: "EUR", CZ: "CZK", DK: "DKK", EE: "EUR", FI: "EUR", FR: "EUR", EL: "EUR", ES: "EUR", IT: "EUR", GR: "EUR", HU: "HUF", IE: "EUR", LV: "EUR", LT: "EUR", LU: "EUR", MT: "EUR", PT: "EUR", RO: "RON", SK: "EUR", SI: "EUR", SE: "SEK", TW: "TWD", PL: "PLN", CA: "CAD", BR: "BRL", AR: "ARS", PE: "PEN", CO: "COP", PA: "PAB", ZA: "ZAR", MA: "MAD", EG: "EGP", KE: "KES", TZ: "TZS", NG: "NGN", GH: "GHS", SA: "SAR", OM: "OMR", QA: "QAR", PK: "PKR", BD: "BDT", ID: "IDR", PH: "PHP", ET: "ETB", CG: "XAF", CD: "CDF" };
const PORTS = [
  { slug: "busan", name: "Port of Busan", aliases: ["Busan", "Pusan", "부산항"], country: "South Korea", iso: "KR", locode: "KRPUS", lat: 35.10, lon: 129.04, timezone: "Asia/Seoul", region: "Northeast Asia", type: "Seaport" },
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

const PORT_DATA_AUDIT = {
  updated: "2026-08-28",
  locodeRelease: "UN/LOCODE 2025-1",
  locodeSource: "UNECE UN/LOCODE",
  coordinateSource: "LOGILEE curated coordinates cross-checked against UN/LOCODE or official/public geographic references where available",
  mapSource: "OpenStreetMap",
  timezoneSource: "IANA time zone identifiers rendered with JavaScript Intl",
  officialCoverage: "Selected major ports only",
  terminalCoverage: "Selected verified terminals only",
  liveData: "Not enabled"
};

const PORT_RESOURCE_PROFILES = {
  busan: { city: "Busan", roleKo: "한국의 대표 해상 관문이자 동북아 환적·수출입 라우팅 검토의 기준 항만입니다.", roleEn: "South Korea's primary ocean gateway and a reference port for Northeast Asia routing and transshipment checks.", official: [["Busan Port Authority", "Port Authority", "https://www.busanpa.com/eng/Main.do"], ["Port-MIS", "Vessel / Port Operations", "https://new.portmis.go.kr/"]], maps: [["Busan Port Authority Port Guide", "Official Port Map", "https://www.busanpa.com/eng/Contents.do?mCode=MN0022"]], terminals: [["Busan New Port", "Container", "Multiple terminal operators", "https://www.busanpa.com/eng/Main.do"]] },
  shanghai: { city: "Shanghai", roleKo: "상하이와 장강삼각주 제조·유통권을 연결하는 중국 동부 핵심 해상 관문입니다.", roleEn: "A major East China seaport serving Shanghai and the Yangtze River Delta manufacturing and distribution region.", official: [["Shanghai International Port Group", "Port Operator", "https://www.portshanghai.com.cn/"]] },
  "ningbo-zhoushan": { city: "Ningbo / Zhoushan", roleKo: "저장성 제조권과 중국 동부 항로를 검토할 때 상하이와 함께 비교되는 대형 항만입니다.", roleEn: "A large East China port often reviewed with Shanghai for Zhejiang-area sourcing and ocean routing decisions.", official: [["Ningbo Zhoushan Port", "Official Port Website", "https://www.nbport.com.cn/"]] },
  singapore: { city: "Singapore", roleKo: "동남아 환적, 지역 허브, 장거리 항로 연결을 검토할 때 기준점이 되는 글로벌 항만입니다.", roleEn: "A global hub port used for Southeast Asia transshipment, regional consolidation, and long-haul route comparisons.", official: [["Maritime and Port Authority of Singapore", "Port Authority", "https://www.mpa.gov.sg/"], ["PSA Singapore", "Terminal Operator", "https://www.singaporepsa.com/"]], maps: [["MPA Port Marine Circulars", "Port Notices", "https://www.mpa.gov.sg/port-marine-ops/circulars-and-notices/port-marine-circulars"]], terminals: [["PSA Singapore Terminals", "Container", "PSA Singapore", "https://www.singaporepsa.com/"]] },
  rotterdam: { city: "Rotterdam", roleKo: "네덜란드와 유럽 내륙시장 진입을 검토할 때 중요한 북유럽 해상 관문입니다.", roleEn: "A key North European gateway for the Netherlands and onward inland distribution into continental Europe.", official: [["Port of Rotterdam Authority", "Port Authority", "https://www.portofrotterdam.com/en"], ["Port Information Guide", "Operational Information", "https://www.portofrotterdam.com/en/sea-shipping/port-information-guide"]], maps: [["Port of Rotterdam Maps", "Official Port Map", "https://www.portofrotterdam.com/en/sea-shipping/port-maps"]] },
  hamburg: { city: "Hamburg", roleKo: "독일 및 중부 유럽 물류 흐름을 검토할 때 유용한 북유럽 항만 기준점입니다.", roleEn: "A North European port reference for Germany and Central European logistics planning.", official: [["Port of Hamburg", "Official Port Website", "https://www.hafen-hamburg.de/en/"], ["Hamburg Port Authority", "Port Authority", "https://www.hamburg-port-authority.de/en/"]], maps: [["Port of Hamburg Port Map", "Official Port Map", "https://www.hafen-hamburg.de/en/port-map/"]] },
  "los-angeles": { city: "Los Angeles", roleKo: "태평양 항로와 미국 서부 내륙 물류를 검토할 때 기준이 되는 주요 컨테이너 항만입니다.", roleEn: "A major U.S. West Coast container gateway for Pacific trade lanes and inland distribution planning.", official: [["Port of Los Angeles", "Port Authority", "https://www.portoflosangeles.org/"], ["Port of Los Angeles Tariffs", "Port Tariff", "https://www.portoflosangeles.org/business/tariff"]], maps: [["Port of Los Angeles Map", "Official Port Map", "https://www.portoflosangeles.org/about/maps"]] },
  "long-beach": { city: "Long Beach", roleKo: "Los Angeles와 함께 남부 캘리포니아 관문 항만으로 drayage와 내륙 운송 검토에 자주 사용됩니다.", roleEn: "A Southern California gateway often reviewed with Los Angeles for drayage and inland movement planning.", official: [["Port of Long Beach", "Port Authority", "https://polb.com/"], ["Port of Long Beach Tariff", "Port Tariff", "https://polb.com/business/tariffs/"]], maps: [["Port of Long Beach Facilities Map", "Official Port Map", "https://polb.com/port-info/maps/"]] },
  "new-york-new-jersey": { city: "New York / New Jersey", roleKo: "미국 동부 소비시장과 내륙 유통망을 검토할 때 중요한 대서양 관문 항만입니다.", roleEn: "A major Atlantic gateway for U.S. East Coast consumer markets and inland distribution.", official: [["Port of New York and New Jersey", "Port Authority", "https://www.panynj.gov/port/en/index.html"]] },
  "jebel-ali": { city: "Dubai / Jebel Ali", roleKo: "중동, 아프리카, 남아시아, 유럽을 잇는 걸프 지역 환적·재수출 허브입니다.", roleEn: "A Gulf hub used for transshipment and re-export flows across the Middle East, Africa, South Asia, and Europe.", official: [["DP World Jebel Ali", "Port / Terminal Operator", "https://www.dpworld.com/jebelali"]] },
  "hong-kong": { city: "Hong Kong", roleKo: "남중국과 국제 해상 네트워크를 연결하는 항만·물류 기준점입니다.", roleEn: "A port and logistics reference point connecting South China with international ocean networks.", official: [["Hong Kong Marine Department", "Port Authority", "https://www.mardep.gov.hk/en/home.html"]] },
  shenzhen: { city: "Shenzhen", roleKo: "광둥성 제조권과 남중국 수출입 라우팅을 검토할 때 사용하는 주요 항만군입니다.", roleEn: "A South China port cluster used when reviewing Guangdong manufacturing and export/import routings.", official: [["Shenzhen Port", "Official Port Website", "http://www.szport.net/"]] },
  kaohsiung: { city: "Kaohsiung", roleKo: "대만 남부의 주요 해상 관문으로 동아시아 항로 검토에 자주 사용됩니다.", roleEn: "A major southern Taiwan seaport used for East Asia routing checks.", official: [["Port of Kaohsiung", "Official Port Website", "https://kh.twport.com.tw/en/"]] },
  tokyo: { city: "Tokyo", roleKo: "일본 수도권 수입·유통 흐름을 검토할 때 사용하는 도쿄만 항만 기준점입니다.", roleEn: "A Tokyo Bay gateway used for Japan capital-region import and distribution planning.", official: [["Port of Tokyo", "Official Port Website", "https://www.kouwan.metro.tokyo.lg.jp/en/"]] },
  yokohama: { city: "Yokohama", roleKo: "도쿄만 항만군의 주요 항만으로 일본 동부 라우팅 검토에 활용됩니다.", roleEn: "A major Tokyo Bay port used in eastern Japan ocean routing reviews.", official: [["Port of Yokohama", "Official Port Website", "https://www.city.yokohama.lg.jp/lang/overseas/port/"]] },
  kobe: { city: "Kobe", roleKo: "간사이권 해상 물류와 일본 서부 라우팅 검토에 쓰이는 주요 항만입니다.", roleEn: "A major Kansai-area port used for western Japan logistics and routing checks.", official: [["Port of Kobe", "Official Port Website", "https://www.city.kobe.lg.jp/a44800/business/transport/kowanjigyo/index.html"]] },
  "cat-lai": { city: "Ho Chi Minh City / Cat Lai", roleKo: "베트남 남부 제조·수출 물류에서 자주 검토되는 호치민권 컨테이너 항만 기준점입니다.", roleEn: "A practical Ho Chi Minh City container-port reference for southern Vietnam sourcing and export workflows.", official: [["Saigon Newport Corporation", "Terminal Operator", "https://saigonnewport.com.vn/en"]], terminals: [["Cat Lai Terminal", "Container", "Saigon Newport Corporation", "https://saigonnewport.com.vn/en"]] },
  "hai-phong": { city: "Hai Phong", roleKo: "베트남 북부 제조권과 하노이권 물류를 검토할 때 사용하는 주요 해상 관문입니다.", roleEn: "A northern Vietnam gateway for Hanoi-area and northern manufacturing logistics checks.", official: [["Hai Phong Port", "Official Port Website", "https://haiphongport.com.vn/en/"]] },
  "laem-chabang": { city: "Laem Chabang", roleKo: "태국 동부 해상 물류와 방콕권 수출입을 검토할 때 쓰이는 주요 항만입니다.", roleEn: "A major Thai seaport for eastern Thailand logistics and Bangkok-area export/import checks.", official: [["Port Authority of Thailand", "Port Authority", "https://www.port.co.th/cs/internet/internet/index.html"]] },
  "port-klang": { city: "Port Klang", roleKo: "말레이시아 서해안과 쿠알라룸푸르권 물류를 검토할 때 쓰이는 대표 항만입니다.", roleEn: "A primary Malaysian west-coast port for Kuala Lumpur-area logistics planning.", official: [["Port Klang Authority", "Port Authority", "https://www.pka.gov.my/"]] },
  "tanjung-pelepas": { city: "Tanjung Pelepas", roleKo: "말레이시아 남부와 싱가포르 인접 해상 네트워크를 검토할 때 사용하는 컨테이너 항만입니다.", roleEn: "A southern Malaysia container port used for routing checks near Singapore's maritime network.", official: [["Port of Tanjung Pelepas", "Official Port Website", "https://www.ptp.com.my/"]] },
  colombo: { city: "Colombo", roleKo: "남아시아 환적과 인도양 항로 검토에서 자주 등장하는 스리랑카 주요 항만입니다.", roleEn: "Sri Lanka's major port and a South Asia transshipment reference on Indian Ocean routes.", official: [["Sri Lanka Ports Authority", "Port Authority", "https://www.slpa.lk/"]] },
  "nhava-sheva": { city: "Mumbai / Nhava Sheva", roleKo: "인도 서부와 뭄바이권 컨테이너 수출입을 검토할 때 자주 사용하는 항만입니다.", roleEn: "A western India container gateway used for Mumbai-area import and export planning.", official: [["Jawaharlal Nehru Port Authority", "Port Authority", "https://www.jnport.gov.in/"]] },
  "antwerp-bruges": { city: "Antwerp / Bruges", roleKo: "벨기에와 서유럽 내륙 유통망을 검토할 때 중요한 북유럽 복합 항만입니다.", roleEn: "A major North European port complex for Belgium and inland distribution into Western Europe.", official: [["Port of Antwerp-Bruges", "Port Authority", "https://www.portofantwerpbruges.com/en"]], maps: [["Port of Antwerp-Bruges Map", "Official Port Map", "https://www.portofantwerpbruges.com/en/our-port/map"]] },
  felixstowe: { city: "Felixstowe", roleKo: "영국 주요 컨테이너 관문 중 하나로 UK 수입·유통 검토에 사용됩니다.", roleEn: "A major UK container gateway used for import and distribution planning.", official: [["Port of Felixstowe", "Official Port Website", "https://www.portoffelixstowe.co.uk/"]] },
  savannah: { city: "Savannah", roleKo: "미국 동남부 소비시장과 내륙 철도 연결을 검토할 때 자주 쓰이는 항만입니다.", roleEn: "A U.S. Southeast gateway often used for consumer-market and inland rail distribution checks.", official: [["Georgia Ports Authority", "Port Authority", "https://gaports.com/"]] },
  seattle: { city: "Seattle", roleKo: "미국 북서부 태평양 항로와 내륙 연결을 검토할 때 쓰이는 항만입니다.", roleEn: "A Pacific Northwest gateway for ocean routing and inland connection checks.", official: [["Port of Seattle", "Port Authority", "https://www.portseattle.org/"]] },
  tacoma: { city: "Tacoma", roleKo: "Seattle와 함께 미국 북서부 관문 항만군을 구성하는 항만입니다.", roleEn: "A Pacific Northwest gateway port commonly reviewed with Seattle.", official: [["Port of Tacoma", "Port Authority", "https://www.portoftacoma.com/"]] },
  vancouver: { city: "Vancouver", roleKo: "캐나다 서부와 북미 태평양 항로를 검토할 때 기준이 되는 주요 항만입니다.", roleEn: "A major western Canada gateway for North Pacific and inland North America logistics checks.", official: [["Port of Vancouver", "Port Authority", "https://www.portvancouver.com/"]] }
};

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
      <h2>${lang === "ko" ? "무역 스냅샷" : "Trade Snapshot"}</h2>
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

function portProfileData(port) {
  return PORT_RESOURCE_PROFILES[port.slug] || {};
}

function portCity(port) {
  return portProfileData(port).city || port.city || (port.name || "").replace(/^Port of\s+/i, "").split(" /")[0];
}

function portLocalizedRole(port, lang = currentLang()) {
  const profile = portProfileData(port);
  if (lang === "ko" && profile.roleKo) return profile.roleKo;
  if (profile.roleEn) return profile.roleEn;
  return lang === "ko"
    ? `${port.name}은 ${port.region}의 ${port.type.toLowerCase()}로, 항만 식별자와 국가·시간·위치 정보를 빠르게 확인하기 위한 LOGILEE reference입니다.`
    : `${port.name} is a ${port.type.toLowerCase()} in ${port.region}, provided as a LOGILEE reference for port identity, country context, time, and location checks.`;
}

function portFunctionLabel(port, lang = currentLang()) {
  const code = portProfileData(port).functionCode || "1----";
  const label = lang === "ko" ? "해상항만 기능 포함" : "Includes seaport function";
  return `${code} · ${label}`;
}

function portResourceRows(port, key) {
  return (portProfileData(port)[key] || []).filter((row) => row && row[0] && row[2]).map(([label, type, url, note]) => ({ label, type, url, note }));
}

function portTerminalRows(port) {
  return (portProfileData(port).terminals || []).filter((row) => row && row[0]).map(([name, type, operator, url]) => ({ name, type, operator, url }));
}

function portOsmUrl(port, zoom = 12) {
  return `https://www.openstreetmap.org/?mlat=${encodeURIComponent(port.lat)}&mlon=${encodeURIComponent(port.lon)}#map=${zoom}/${encodeURIComponent(port.lat)}/${encodeURIComponent(port.lon)}`;
}

function portMapZoom(port) {
  const contextZoom = {
    busan: 10,
    rotterdam: 10,
    singapore: 11,
    "los-angeles": 10,
    "long-beach": 10,
    "new-york-new-jersey": 10,
    "ningbo-zhoushan": 10,
    shanghai: 10,
    "jebel-ali": 10,
    "hong-kong": 11,
    "cat-lai": 11
  };
  return contextZoom[port.slug] || 10;
}

const LEAFLET_VERSION = "1.9.4";
const LEAFLET_CSS_URL = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
const LEAFLET_JS_URL = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
const LEAFLET_CSS_INTEGRITY = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
const LEAFLET_JS_INTEGRITY = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
const MAPLIBRE_VERSION = "5.24.0";
const MAPLIBRE_CSS_URL = "https://unpkg.com/maplibre-gl@5.24.0/dist/maplibre-gl.css";
const MAPLIBRE_JS_URL = "https://unpkg.com/maplibre-gl@5.24.0/dist/maplibre-gl.js";
const MAPLIBRE_LEAFLET_VERSION = "0.1.4";
const MAPLIBRE_LEAFLET_JS_URL = "https://unpkg.com/@maplibre/maplibre-gl-leaflet@0.1.4/leaflet-maplibre-gl.js";
const MAPLIBRE_CSS_INTEGRITY = "sha384-uTttxo/aOKbdE5RlD/SPzSDoDmNvGlUYPjONi2MN/b7c9HPSvW07OIuyP7uL6jxK";
const MAPLIBRE_JS_INTEGRITY = "sha384-5+cfbwT0iiub6VsQAdn6yz16nr6sDiQoHx6tm4O8OVYXHYOxcffFmCJBL0dgdvGp";
const MAPLIBRE_LEAFLET_JS_INTEGRITY = "sha384-tXYNKOHx4T02jMP7YYCtBxPIv1B5gaA5mcVPBzqMp6d7VzWzxJgI2aWF/nJLrQdS";
const OPENFREEMAP_STYLE_URL = "https://tiles.openfreemap.org/styles/bright";
let leafletLoadPromise = null;
let mapLibreLoadPromise = null;
let portBasemapStylePromise = null;
const portLeafletMaps = new WeakMap();
const portLeafletResizeObservers = new WeakMap();

function loadLeafletForPortMap() {
  if (window.L?.map) return Promise.resolve(window.L);
  if (leafletLoadPromise) return leafletLoadPromise;
  leafletLoadPromise = new Promise((resolve, reject) => {
    if (!document.querySelector("link[data-logilee-leaflet]")) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = LEAFLET_CSS_URL;
      link.integrity = LEAFLET_CSS_INTEGRITY;
      link.crossOrigin = "";
      link.dataset.logileeLeaflet = LEAFLET_VERSION;
      document.head.appendChild(link);
    }
    const existing = document.querySelector("script[data-logilee-leaflet]");
    if (existing) {
      existing.addEventListener("load", () => resolve(window.L), { once: true });
      existing.addEventListener("error", () => reject(new Error("Leaflet failed to load")), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = LEAFLET_JS_URL;
    script.integrity = LEAFLET_JS_INTEGRITY;
    script.crossOrigin = "";
    script.defer = true;
    script.dataset.logileeLeaflet = LEAFLET_VERSION;
    script.onload = () => window.L?.map ? resolve(window.L) : reject(new Error("Leaflet unavailable"));
    script.onerror = () => reject(new Error("Leaflet failed to load"));
    document.head.appendChild(script);
  });
  return leafletLoadPromise;
}

function loadScriptForPortMap({ selector, src, integrity, version, isReady, errorMessage }) {
  if (isReady()) return Promise.resolve();
  const existing = document.querySelector(selector);
  if (existing) {
    return new Promise((resolve, reject) => {
      if (isReady()) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => isReady() ? resolve() : reject(new Error(errorMessage)), { once: true });
      existing.addEventListener("error", () => reject(new Error(errorMessage)), { once: true });
    });
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.integrity = integrity;
    script.crossOrigin = "";
    script.defer = true;
    script.dataset.logileeMapDependency = version;
    if (selector.includes("maplibre-gl")) script.dataset.logileeMaplibreGl = version;
    if (selector.includes("maplibre-leaflet")) script.dataset.logileeMaplibreLeaflet = version;
    script.onload = () => isReady() ? resolve() : reject(new Error(errorMessage));
    script.onerror = () => reject(new Error(errorMessage));
    document.head.appendChild(script);
  });
}

function loadMapLibreForPortMap() {
  if (window.L?.maplibreGL && window.maplibregl?.Map) return Promise.resolve(window.L);
  if (mapLibreLoadPromise) return mapLibreLoadPromise;
  mapLibreLoadPromise = loadLeafletForPortMap().then((L) => {
    if (!document.querySelector("link[data-logilee-maplibre]")) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = MAPLIBRE_CSS_URL;
      link.integrity = MAPLIBRE_CSS_INTEGRITY;
      link.crossOrigin = "";
      link.dataset.logileeMaplibre = MAPLIBRE_VERSION;
      document.head.appendChild(link);
    }
    return loadScriptForPortMap({
      selector: "script[data-logilee-maplibre-gl]",
      src: MAPLIBRE_JS_URL,
      integrity: MAPLIBRE_JS_INTEGRITY,
      version: MAPLIBRE_VERSION,
      isReady: () => Boolean(window.maplibregl?.Map),
      errorMessage: "MapLibre failed to load"
    }).then(() => loadScriptForPortMap({
      selector: "script[data-logilee-maplibre-leaflet]",
      src: MAPLIBRE_LEAFLET_JS_URL,
      integrity: MAPLIBRE_LEAFLET_JS_INTEGRITY,
      version: MAPLIBRE_LEAFLET_VERSION,
      isReady: () => Boolean(window.L?.maplibreGL),
      errorMessage: "MapLibre Leaflet binding failed to load"
    })).then(() => L);
  });
  return mapLibreLoadPromise;
}

function labelExpressionUsesName(value) {
  if (typeof value === "string") return value.includes("name");
  if (!Array.isArray(value)) return false;
  return value.some((item) => labelExpressionUsesName(item));
}

function preferLatinPortMapLabels(style) {
  if (!style?.layers) return style;
  const latinLabel = ["coalesce", ["get", "name:latin"], ["get", "name_en"], ["get", "name:en"], ["get", "name"]];
  style.layers.forEach((layer) => {
    const textField = layer?.layout?.["text-field"];
    if (textField && labelExpressionUsesName(textField)) {
      layer.layout["text-field"] = latinLabel;
    }
  });
  style.metadata = {
    ...(style.metadata || {}),
    "logilee:label-language": "latin-first"
  };
  return style;
}

function loadPortBasemapStyle() {
  if (portBasemapStylePromise) return portBasemapStylePromise;
  portBasemapStylePromise = fetch(OPENFREEMAP_STYLE_URL, { cache: "force-cache" })
    .then((response) => response.ok ? response.json() : Promise.reject(new Error(`OpenFreeMap style ${response.status}`)))
    .then((style) => preferLatinPortMapLabels(style));
  return portBasemapStylePromise;
}

function portOsmRasterLayer(L) {
  return L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    minZoom: 0,
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap contributors</a>'
  });
}

function refreshPortBasemapLayer(layer) {
  if (layer && typeof layer.redraw === "function") layer.redraw();
  const maplibre = layer && typeof layer.getMaplibreMap === "function" ? layer.getMaplibreMap() : null;
  if (maplibre && typeof maplibre.resize === "function") maplibre.resize();
  if (maplibre && typeof maplibre.triggerRepaint === "function") maplibre.triggerRepaint();
}

function portLocationMapMarkup(port) {
  const lang = currentLang();
  const zoom = portMapZoom(port);
  const label = `${port.name} ${lang === "ko" ? "위치 지도" : "location map"}`;
  const coordinates = `${port.lat.toFixed(4)}, ${port.lon.toFixed(4)}`;
  return `<div class="port-map-card port-map-card--leaflet" data-port-map="${escapeAttribute(port.slug)}" data-map-zoom="${zoom}" data-map-min="2" data-map-max="14" data-map-lat="${escapeAttribute(port.lat)}" data-map-lon="${escapeAttribute(port.lon)}" aria-label="${escapeAttribute(label)}"><div class="port-map-leaflet" data-port-leaflet-map></div><button class="port-map-reset" type="button" data-port-map-reset aria-label="${lang === "ko" ? "지도 초기화" : "Reset map"}">${lang === "ko" ? "초기화" : "Reset"}</button><div class="port-map-caption"><strong>${escapeHtml(port.name)}</strong><span>${escapeHtml(coordinates)} · ${lang === "ko" ? "근사 위치" : "Approximate location"}</span></div><p>${lang === "ko" ? "일반 위치 지도입니다. 공식 터미널 배치도는 아래 Official Port Map 링크에서 별도로 확인하세요." : "General location map. Official terminal or port-layout maps are listed separately below when available."} <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap contributors</a></p><div class="port-map-fallback"><strong>${lang === "ko" ? "지도를 불러올 수 없습니다." : "Map could not load."}</strong><span>${escapeHtml(coordinates)}</span><a href="${escapeAttribute(portOsmUrl(port, zoom))}" target="_blank" rel="noopener">OpenStreetMap →</a></div></div>`;
}

function initializePortMapElement(map, port) {
  if (!map || !port || portLeafletMaps.has(map) || ![port.lat, port.lon].every(Number.isFinite)) return;
  const target = map.querySelector("[data-port-leaflet-map]");
  if (!target) return;
  const zoom = Number(map.dataset.mapZoom || portMapZoom(port));
  const start = () => loadLeafletForPortMap().then((L) => {
    if (!document.body.contains(map) || portLeafletMaps.has(map)) return;
    const bounds = target.getBoundingClientRect();
    if (!bounds.width || !bounds.height) {
      requestAnimationFrame(() => initializePortMapElement(map, port));
      return;
    }
    const leaflet = L.map(target, {
      center: [port.lat, port.lon],
      zoom,
      minZoom: Number(map.dataset.mapMin || 2),
      maxZoom: Number(map.dataset.mapMax || 14),
      zoomSnap: 1,
      zoomDelta: 1,
      doubleClickZoom: true,
      scrollWheelZoom: true,
      touchZoom: true,
      dragging: true,
      zoomControl: true,
      attributionControl: true
    });
    const tileLayer = portOsmRasterLayer(L);
    target.__logileeLeafletTileLayer = tileLayer;
    Promise.all([loadMapLibreForPortMap(), loadPortBasemapStyle()])
      .then(([mapLibreLeaflet, style]) => {
        if (!document.body.contains(map) || !portLeafletMaps.has(map)) return;
        const vectorLayer = mapLibreLeaflet.maplibreGL({ style, interactive: false });
        tileLayer.remove();
        vectorLayer.addTo(leaflet);
        target.__logileeLeafletTileLayer = vectorLayer;
        target.__logileePortBasemapProvider = "openfreemap-vector";
        map.classList.add("is-vector-basemap");
        refreshPortBasemapLayer(vectorLayer);
      })
      .catch((error) => {
        console.warn("Port vector basemap unavailable; using OSM raster fallback:", error);
        if (!document.body.contains(map) || !portLeafletMaps.has(map)) return;
        if (!leaflet.hasLayer(tileLayer)) tileLayer.addTo(leaflet);
        target.__logileePortBasemapProvider = "osm-raster";
        map.classList.add("is-raster-basemap");
      });
    tileLayer.addTo(leaflet);
    const marker = L.divIcon({
      className: "port-leaflet-marker",
      html: `<span></span><b>${escapeHtml(port.locode)}</b>`,
      iconSize: [76, 48],
      iconAnchor: [38, 21]
    });
    const leafletMarker = L.marker([port.lat, port.lon], { icon: marker, keyboard: false }).addTo(leaflet);
    target.__logileeLeafletMap = leaflet;
    target.__logileeLeafletMarker = leafletMarker;
    target.__logileeLeafletTileLayer = tileLayer;
    portLeafletMaps.set(map, leaflet);
    map.classList.add("is-map-ready");
    const syncSize = () => requestAnimationFrame(() => {
      leaflet.invalidateSize({ pan: false });
      refreshPortBasemapLayer(target.__logileeLeafletTileLayer);
    });
    requestAnimationFrame(syncSize);
    setTimeout(syncSize, 120);
    setTimeout(syncSize, 360);
    if (window.ResizeObserver) {
      let resizeTimer = 0;
      const resizeObserver = new ResizeObserver(() => {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(syncSize, 80);
      });
      resizeObserver.observe(map);
      portLeafletResizeObservers.set(map, resizeObserver);
    }
  });
  requestAnimationFrame(() => start().catch((error) => {
    console.warn("Port map unavailable:", error);
    map.classList.add("is-map-fallback");
  }));
}

function destroyPortMaps(root = document) {
  root.querySelectorAll("[data-port-map]").forEach((map) => {
    const leaflet = portLeafletMaps.get(map);
    const resizeObserver = portLeafletResizeObservers.get(map);
    if (resizeObserver) resizeObserver.disconnect();
    if (leaflet) leaflet.remove();
    portLeafletMaps.delete(map);
    portLeafletResizeObservers.delete(map);
  });
}

function initializePortMaps(root = document) {
  root.querySelectorAll("[data-port-map]").forEach((map) => {
    const port = ALL_PORTS.find((item) => item.slug === map.dataset.portMap);
    initializePortMapElement(map, port);
  });
}

function updatePortMapElement(map, port, zoom = portMapZoom(port)) {
  const leaflet = portLeafletMaps.get(map);
  if (!leaflet || !port) return;
  const nextZoom = Math.max(Number(map.dataset.mapMin || 2), Math.min(Number(map.dataset.mapMax || 14), Number(zoom || portMapZoom(port))));
  const target = map.querySelector("[data-port-leaflet-map]");
  const tileLayer = target?.__logileeLeafletTileLayer;
  map.dataset.mapZoom = String(nextZoom);
  const syncView = () => {
    leaflet.invalidateSize({ pan: false });
    leaflet.setView([port.lat, port.lon], nextZoom, { animate: false });
    refreshPortBasemapLayer(tileLayer);
  };
  syncView();
  requestAnimationFrame(syncView);
  setTimeout(syncView, 120);
  setTimeout(syncView, 360);
}

function portFlag(port) {
  return /^[A-Z]{2}$/.test(port.iso) ? `<img class="port-profile-flag" src="https://flagcdn.com/${port.iso.toLowerCase()}.svg" alt="" loading="lazy">` : "";
}

function portDistanceKm(a, b) {
  if (![a.lat, a.lon, b.lat, b.lon].every(Number.isFinite)) return null;
  const toRad = (value) => value * Math.PI / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

function nearbyPorts(port, limit = 5) {
  return ALL_PORTS.filter((item) => item.slug !== port.slug && Number.isFinite(item.lat) && Number.isFinite(item.lon))
    .map((item) => ({ ...item, distance: portDistanceKm(port, item) }))
    .filter((item) => Number.isFinite(item.distance))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);
}

function portRelatedToolsMarkup(port) {
  const lang = currentLang();
  const currency = COUNTRY_CURRENCY[port.iso] || "USD";
  const tools = lang === "ko"
    ? [["국가 무역 프로필", `country-trade-profile.html?country=${port.iso}`, "globe"], ["무역 공휴일", `holidays.html?country=${port.iso}`, "calendar-check"], ["Shipment Tracking", "track.html", "radar"], ["Global Trade Explorer", `global-trade-explorer.html?reporter=${port.iso}`, "chart-column"], ["CBM Calculator", "cbm.html", "calculator"], ["환율 계산기", `currency-converter.html?from=USD&to=${currency}`, "badge-dollar-sign"]]
    : [["Country Trade Profile", `country-trade-profile.html?country=${port.iso}`, "globe"], ["Trade Holidays", `holidays.html?country=${port.iso}`, "calendar-check"], ["Shipment Tracking", "track.html", "radar"], ["Global Trade Explorer", `global-trade-explorer.html?reporter=${port.iso}`, "chart-column"], ["CBM Calculator", "cbm.html", "calculator"], ["Currency Converter", `currency-converter.html?from=USD&to=${currency}`, "badge-dollar-sign"]];
  return `<section class="port-intel-section port-related-section"><h2>${lang === "ko" ? "관련 LOGILEE 도구" : "Related Trade Tools"}</h2><div class="port-tool-grid">${tools.map(([label, href, icon]) => `<a href="${escapeAttribute(href)}"><i data-lucide="${icon}"></i><span>${escapeHtml(label)}</span></a>`).join("")}</div></section>`;
}

function portResourceMarkup(port) {
  const lang = currentLang();
  const official = portResourceRows(port, "official");
  const maps = portResourceRows(port, "maps");
  const rows = [...official, ...maps];
  if (!rows.length) return `<section class="port-intel-section"><h2>${lang === "ko" ? "공식 자료" : "Official Resources"}</h2><div class="data-empty">${lang === "ko" ? "이 항만의 검증된 공식 링크가 아직 LOGILEE reference에 없습니다. 항만명과 UN/LOCODE를 기준으로 공식 기관에서 최종 확인하세요." : "LOGILEE has not added verified official links for this port yet. Use the port name and UN/LOCODE to confirm details with official sources."}</div></section>`;
  return `<section class="port-intel-section"><h2>${lang === "ko" ? "공식 자료" : "Official Resources"}</h2><div class="port-resource-grid">${rows.map((row) => `<a href="${escapeAttribute(row.url)}" target="_blank" rel="noopener"><i data-lucide="external-link"></i><span>${escapeHtml(row.type)}</span><strong>${escapeHtml(row.label)}</strong>${row.note ? `<small>${escapeHtml(row.note)}</small>` : ""}</a>`).join("")}</div></section>`;
}

function portTerminalsMarkup(port) {
  const lang = currentLang();
  const terminals = portTerminalRows(port);
  const fallbackResource = [...portResourceRows(port, "official"), ...portResourceRows(port, "maps")][0];
  if (!terminals.length) {
    const link = fallbackResource ? `<a href="${escapeAttribute(fallbackResource.url)}" target="_blank" rel="noopener">${lang === "ko" ? "공식 항만 자료에서 확인" : "Check official port resources"} →</a>` : "";
    return `<section class="port-intel-section port-terminal-section is-compact-empty"><h2>${lang === "ko" ? "터미널 정보" : "Terminal Information"}</h2><p class="port-terminal-empty"><span>${lang === "ko" ? "LOGILEE에 검증된 터미널 데이터가 아직 없습니다. 터미널이 없다는 의미는 아닙니다." : "No verified terminal data is stored in LOGILEE yet. This does not mean the port has no terminals."}</span>${link}</p></section>`;
  }
  return `<section class="port-intel-section port-terminal-section"><h2>${lang === "ko" ? "검증된 터미널 정보" : "Selected Verified Terminals"}</h2><div class="port-terminal-list">${terminals.map((item) => `<article><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.type || "Terminal")}${item.operator ? ` · ${escapeHtml(item.operator)}` : ""}</span>${item.url ? `<a href="${escapeAttribute(item.url)}" target="_blank" rel="noopener">${lang === "ko" ? "공식 자료 열기" : "Open official source"}</a>` : ""}</article>`).join("")}</div></section>`;
}

function portNearbyMarkup(port) {
  const lang = currentLang();
  const ports = nearbyPorts(port, 5);
  return `<section class="port-intel-section port-nearby-section"><div class="section-head"><h2>${lang === "ko" ? "주변 항만" : "Nearby Ports"}</h2><span>${lang === "ko" ? "직선거리 기준" : "Approx. straight-line distance"}</span></div><div class="port-nearby-list">${ports.map((item) => `<a href="?locode=${encodeURIComponent(item.locode)}"><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.locode)}</span><em>${Math.round(item.distance)} km</em><b aria-hidden="true">→</b></a>`).join("")}</div></section>`;
}

function portProfileMarkup(port) {
  const lang = currentLang();
  const localTime = localTimeForPort(port);
  const coordinates = Number.isFinite(port.lat) && Number.isFinite(port.lon) ? `${port.lat.toFixed(2)}, ${port.lon.toFixed(2)}` : "";
  const rows = lang === "ko"
    ? [["UN/LOCODE", port.locode], ["국가", `${port.country} (${port.iso})`], ["도시 / 지역", portCity(port)], ["좌표", coordinates], ["시간대", port.timezone], ["현지시간", localTime], ["위치 유형", port.type], ["UN/LOCODE Function", portFunctionLabel(port, lang)]]
    : [["UN/LOCODE", port.locode], ["Country", `${port.country} (${port.iso})`], ["City / Area", portCity(port)], ["Coordinates", coordinates], ["Time Zone", port.timezone], ["Local Time", localTime], ["Location Type", port.type], ["UN/LOCODE Function", portFunctionLabel(port, lang)]];
  return `<section class="port-profile" id="port-profile" aria-live="polite"><div class="port-profile-hero"><div>${portFlag(port)}<span class="kicker">Port Profile</span><h2>${escapeHtml(port.name)}</h2><p>${escapeHtml(port.locode)} · ${escapeHtml(portCity(port))}, ${escapeHtml(port.country)}</p><p class="port-role-copy">${escapeHtml(portLocalizedRole(port, lang))}</p></div><a class="secondary-btn" href="${escapeAttribute(portOsmUrl(port, portMapZoom(port)))}" target="_blank" rel="noopener"><i data-lucide="map"></i>${lang === "ko" ? "OpenStreetMap에서 보기" : "Open in OpenStreetMap"}</a></div><div class="port-profile-grid">${portLocationMapMarkup(port)}<dl class="port-core-facts">${rows.filter(([, value]) => value).map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl></div>${portResourceMarkup(port)}${portTerminalsMarkup(port)}${portNearbyMarkup(port)}${portRelatedToolsMarkup(port)}</section>`;
}

function portCard(port) {
  const lang = currentLang();
  return `<article class="port-result-card"><div><strong>${escapeHtml(port.name)}</strong><small>${escapeHtml(portCity(port))}, ${escapeHtml(port.country)} · ${escapeHtml(port.region)}</small></div><span>${escapeHtml(port.locode)}</span><span>${escapeHtml(port.type)}</span><span>${escapeHtml(localTimeForPort(port))}</span><button class="secondary-btn" type="button" data-port-view="${escapeAttribute(port.slug)}">${lang === "ko" ? "보기" : "View"}</button></article>`;
}

function filterPorts(query, country = "") {
  const normalized = normalizeCountrySearch(query);
  const compact = compactCountrySearch(query);
  return ALL_PORTS.filter((port) => {
    const countryMatch = !country || port.iso === country;
    const terms = [port.name, ...(port.aliases || []), portCity(port), port.country, displayCountryName(port.iso, "ko"), displayCountryName(port.iso, "en"), port.iso, port.locode, port.region, port.type].filter(Boolean);
    const haystack = normalizeCountrySearch(terms.join(" "));
    const compactHaystack = compactCountrySearch(terms.join(" "));
    return countryMatch && (!normalized || haystack.includes(normalized) || compactHaystack.includes(compact));
  });
}

function findPortFromParams(params) {
  const locode = (params.get("locode") || "").replace(/\s+/g, "").toUpperCase();
  const slug = params.get("port") || params.get("slug");
  const query = params.get("query") || params.get("q") || "";
  if (locode) return ALL_PORTS.find((port) => port.locode === locode) || null;
  if (slug) return ALL_PORTS.find((port) => port.slug === slug) || null;
  const normalizedQuery = compactCountrySearch(query);
  if (!normalizedQuery) return null;
  return ALL_PORTS.find((port) => compactCountrySearch(port.locode) === normalizedQuery || compactCountrySearch(port.name) === normalizedQuery || (port.aliases || []).some((alias) => compactCountrySearch(alias) === normalizedQuery)) || null;
}

function wirePortFinder() {
  const form = document.querySelector("[data-port-search-form]");
  const output = document.querySelector("[data-port-results]");
  const profile = document.querySelector("[data-port-profile]");
  const resultsPanel = output?.closest(".port-results-panel");
  if (!form || !output) return;
  const lang = currentLang();
  const params = new URLSearchParams(location.search);
  const input = form.querySelector("[data-port-query]");
  const country = form.querySelector("[data-country-select]");
  const portCountryOptions = [...new Set(ALL_PORTS.map((port) => port.iso))].sort((a, b) => displayCountryName(a, lang).localeCompare(displayCountryName(b, lang), lang === "ko" ? "ko" : "en"));
  if (country) country.innerHTML = `<option value="">${lang === "ko" ? "전체 국가" : "All countries"}</option>${portCountryOptions.map((code) => `<option value="${code}">${escapeHtml(displayCountryName(code, lang))}</option>`).join("")}`;
  const clear = form.querySelector("[data-port-clear]");
  const count = document.querySelector("[data-port-count]");
  const popular = document.querySelector("[data-popular-ports]");
  const featured = ["busan", "shanghai", "singapore", "rotterdam", "los-angeles", "long-beach", "hamburg", "jebel-ali", "cat-lai", "nhava-sheva"];
  if (input) input.value = params.get("query") || params.get("q") || "";
  if (country && params.get("country")) country.value = params.get("country").toUpperCase();
  let visibleCount = 16;
  const renderPopular = () => {
    if (!popular) return;
    popular.innerHTML = featured.map((slug) => ALL_PORTS.find((port) => port.slug === slug)).filter(Boolean).map((port) => `<button type="button" data-port-view="${escapeAttribute(port.slug)}"><strong>${escapeHtml(port.name)}</strong><span>${escapeHtml(port.locode)}</span></button>`).join("");
  };
  const selectPort = (port, { push = true, scroll = true } = {}) => {
    if (!port || !profile) return;
    destroyPortMaps(profile);
    profile.innerHTML = portProfileMarkup(port);
    if (push) {
      const url = new URL(location.href);
      url.searchParams.set("locode", port.locode);
      url.searchParams.set("query", input?.value || port.name);
      if (country?.value) url.searchParams.set("country", country.value); else url.searchParams.delete("country");
      history.replaceState({ locode: port.locode }, "", url);
    }
    refreshIcons();
    initializePortMaps(profile);
    if (scroll) profile.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const render = ({ keepProfile = false } = {}) => {
    const activeQuery = Boolean((input?.value || "").trim() || country?.value);
    const currentParams = new URLSearchParams(location.search);
    const requestedLocode = currentParams.get("locode");
    const results = filterPorts(input?.value || "", country?.value || "");
    const visibleResults = results.slice(0, visibleCount);
    if (resultsPanel) resultsPanel.hidden = !activeQuery;
    output.innerHTML = !activeQuery ? "" : results.length
      ? `<div class="port-result-list" role="list" aria-label="${lang === "ko" ? "항만 검색 결과" : "Port search results"}"><div class="port-result-head"><span>Port</span><span>UN/LOCODE</span><span>Type</span><span>Local Time</span><span>Action</span></div>${visibleResults.map(portCard).join("")}</div>${results.length > visibleCount ? `<button class="secondary-btn port-load-more" type="button" data-port-load-more>${lang === "ko" ? "더 보기" : "Load more"}</button>` : ""}`
      : `<div class="data-empty">${lang === "ko" ? "일치하는 항만을 찾지 못했습니다. 항만명, 별칭, 국가명 또는 UN/LOCODE를 다시 확인하세요." : "No matching ports found. Check the port name, alias, country, or UN/LOCODE."}</div>`;
    if (count) count.textContent = lang === "ko" ? `${results.length}개 항만` : `${results.length} ${results.length === 1 ? "Port" : "Ports"}`;
    if (!keepProfile && profile) {
      destroyPortMaps(profile);
      const paramPort = findPortFromParams(currentParams);
      const preferred = paramPort || (activeQuery ? results[0] : null) || null;
      profile.innerHTML = requestedLocode && !paramPort
        ? `<section class="port-intel-section"><h2>${lang === "ko" ? "UN/LOCODE 확인 필요" : "UN/LOCODE Not Found"}</h2><div class="data-empty">${lang === "ko" ? "입력한 UN/LOCODE가 현재 LOGILEE 항만 reference에 없습니다. 국가 필터와 항만명을 함께 확인하세요." : "The requested UN/LOCODE is not in the current LOGILEE port reference. Check the country filter and port name."}</div></section>`
        : (preferred ? portProfileMarkup(preferred) : "");
      refreshIcons();
      initializePortMaps(profile);
    }
  };
  const updateUrl = () => {
    const url = new URL(location.href);
    if (input?.value) url.searchParams.set("query", input.value); else url.searchParams.delete("query");
    if (country?.value) url.searchParams.set("country", country.value); else url.searchParams.delete("country");
    if (!findPortFromParams(url.searchParams)) url.searchParams.delete("locode");
    history.replaceState(null, "", url);
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    visibleCount = 16;
    const match = findPortFromParams(new URLSearchParams(`query=${encodeURIComponent(input?.value || "")}`));
    updateUrl();
    render({ keepProfile: Boolean(match) });
    if (match) selectPort(match);
  });
  form.addEventListener("input", () => {
    visibleCount = 16;
    updateUrl();
    render();
  });
  country?.addEventListener("change", () => { visibleCount = 16; updateUrl(); render(); });
  clear?.addEventListener("click", () => { if (input) input.value = ""; if (country) country.value = ""; country?.updateComboboxLabel?.(); visibleCount = 16; updateUrl(); render(); input?.focus(); });
  [output, popular, profile].filter(Boolean).forEach((root) => root.addEventListener("click", (event) => {
    const load = event.target.closest("[data-port-load-more]");
    if (load) { visibleCount += 16; render({ keepProfile: true }); return; }
    const zoomButton = event.target.closest("[data-port-map-zoom], [data-port-map-reset]");
    if (zoomButton) {
      const map = zoomButton.closest("[data-port-map]");
      const port = map ? ALL_PORTS.find((item) => item.slug === map.dataset.portMap) : null;
      if (!map || !port) return;
      const currentZoom = Number(map.dataset.mapZoom || portMapZoom(port));
      const nextZoom = zoomButton.hasAttribute("data-port-map-reset") ? portMapZoom(port) : currentZoom + (zoomButton.dataset.portMapZoom === "in" ? 1 : -1);
      updatePortMapElement(map, port, nextZoom);
      return;
    }
    const button = event.target.closest("[data-port-view]");
    if (!button) return;
    const port = ALL_PORTS.find((item) => item.slug === button.dataset.portView);
    selectPort(port);
  }));
  enhanceSimpleCombobox(country, [{ value: "", label: lang === "ko" ? "전체 국가" : "All countries", meta: lang === "ko" ? "모든 등록 항만" : "All registered ports", terms: ["", "all", "전체", "모든"] }, ...portCountryOptions.map((code) => ({ value: code, label: displayCountryName(code, lang), meta: `${code} · ${displayCountryName(code, "en")}`, terms: [code, displayCountryName(code, "en"), displayCountryName(code, "ko"), ...(COUNTRY_SEARCH_ALIASES[code] || [])].map(normalizeCountrySearch) }))], lang === "ko" ? { label: "항만 국가 선택", placeholder: "국가명 또는 ISO 코드 검색...", open: "국가 목록 열기", empty: "일치하는 국가가 없습니다." } : { label: "Select port country", placeholder: "Search country name or ISO code...", open: "Open country list", empty: "No matching countries." });
  window.addEventListener("popstate", () => {
    const next = new URLSearchParams(location.search);
    if (input) input.value = next.get("query") || next.get("q") || "";
    if (country) country.value = next.get("country")?.toUpperCase() || "";
    country?.updateComboboxLabel?.();
    render();
  });
  renderPopular();
  render();
}
const airportLeafletMaps = new WeakMap();
const airportLeafletResizeObservers = new WeakMap();

function airportDataset() {
  return Array.isArray(window.LOGILEE_AIRPORTS?.airports) ? window.LOGILEE_AIRPORTS.airports : [];
}

function airportMeta() {
  return window.LOGILEE_AIRPORTS?.meta || {};
}

function normalizeAirportText(value) {
  return String(value || "").toLocaleLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9가-힣\s-]/g, " ").replace(/\s+/g, " ").trim();
}

function compactAirportCode(value) {
  return String(value || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function airportCode(airport) {
  return airport?.icao || airport?.ident || airport?.iata || "";
}

function airportUrl(airport) {
  const key = airport?.icao ? "icao" : "ident";
  return `?${key}=${encodeURIComponent(airportCode(airport))}`;
}

function airportOsmUrl(airport, zoom = 10) {
  return `https://www.openstreetmap.org/?mlat=${airport.lat}&mlon=${airport.lon}#map=${zoom}/${airport.lat}/${airport.lon}`;
}

function airportDisplayCodes(airport) {
  const lang = currentLang();
  const unavailable = lang === "ko" ? "확인 불가" : "unavailable";
  return [airport.iata ? `IATA ${airport.iata}` : `IATA ${unavailable}`, airport.icao ? `ICAO ${airport.icao}` : `IDENT ${airport.ident}`].join(" · ");
}

function airportFlag(airport) {
  return /^[A-Z]{2}$/.test(airport.iso) ? `<img class="port-profile-flag airport-profile-flag" src="https://flagcdn.com/${airport.iso.toLowerCase()}.svg" alt="" loading="lazy">` : "";
}

function airportTypeLabel(airport, lang = currentLang()) {
  if (lang !== "ko") return airport.typeLabel || airport.type || "Airport";
  return airport.type === "large_airport" ? "대형 공항" : airport.type === "medium_airport" ? "중형 공항" : "공항";
}

function airportCity(airport) {
  return airport.city || (currentLang() === "ko" ? "도시 정보 없음" : "City unavailable");
}

function localTimeForAirport(airport) {
  const lang = currentLang();
  if (!airport?.timezone) return lang === "ko" ? "확인 가능한 시간대 없음" : "Time zone unavailable";
  try {
    return new Intl.DateTimeFormat(lang === "ko" ? "ko-KR" : "en-US", {
      timeZone: airport.timezone,
      dateStyle: "medium",
      timeStyle: "short"
    }).format(new Date());
  } catch {
    return lang === "ko" ? "확인 가능한 시간대 없음" : "Time zone unavailable";
  }
}

function airportSearchHaystack(airport) {
  return normalizeAirportText([airport.name, airport.city, airport.country, airport.iso, airport.region, airport.iata, airport.icao, airport.ident, ...(airport.keywords || [])].filter(Boolean).join(" "));
}

function airportSearchScore(airport, query) {
  const compact = compactAirportCode(query);
  const normalized = normalizeAirportText(query);
  const codes = [airport.iata, airport.icao, airport.ident].filter(Boolean).map(compactAirportCode);
  if (compact && codes.some((code) => code === compact)) return airport.iata === compact || airport.icao === compact ? 0 : 2;
  if (compact && codes.some((code) => code.startsWith(compact))) return 10;
  const name = normalizeAirportText(airport.name);
  const city = normalizeAirportText(airport.city);
  const country = normalizeAirportText(airport.country);
  if (normalized && name.startsWith(normalized)) return 20;
  if (normalized && city.startsWith(normalized)) return 24;
  if (normalized && country.startsWith(normalized)) return 32;
  const haystack = airportSearchHaystack(airport);
  if (normalized && haystack.includes(normalized)) return 46;
  return Number.POSITIVE_INFINITY;
}

function searchAirports(query, limit = 10, country = "") {
  const q = String(query || "").trim();
  if (!q) return [];
  const selectedCountry = String(country || "").trim().toUpperCase();
  return airportDataset()
    .filter((airport) => !selectedCountry || airport.iso === selectedCountry)
    .map((airport) => ({ airport, score: airportSearchScore(airport, q) }))
    .filter((item) => Number.isFinite(item.score))
    .sort((a, b) => a.score - b.score || (a.airport.type === "large_airport" ? -1 : 1) || a.airport.name.localeCompare(b.airport.name))
    .slice(0, limit)
    .map((item) => item.airport);
}

function findAirportFromParams(params) {
  const airports = airportDataset();
  const icao = compactAirportCode(params.get("icao"));
  const iata = compactAirportCode(params.get("iata"));
  const ident = compactAirportCode(params.get("ident"));
  const query = params.get("q") || params.get("query") || "";
  if (icao) return airports.find((airport) => compactAirportCode(airport.icao) === icao) || null;
  if (iata) return airports.find((airport) => compactAirportCode(airport.iata) === iata) || null;
  if (ident) return airports.find((airport) => compactAirportCode(airport.ident) === ident) || null;
  return searchAirports(query, 1)[0] || null;
}

function airportDistanceKm(a, b) {
  if (![a.lat, a.lon, b.lat, b.lon].every(Number.isFinite)) return null;
  const toRad = (value) => value * Math.PI / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

function nearbyAirports(airport, limit = 6) {
  return airportDataset().filter((item) => item.id !== airport.id && Number.isFinite(item.lat) && Number.isFinite(item.lon))
    .map((item) => ({ ...item, distance: airportDistanceKm(airport, item) }))
    .filter((item) => Number.isFinite(item.distance))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);
}

function airportMapZoom() {
  return 10;
}

function airportLocationMapMarkup(airport) {
  const lang = currentLang();
  const zoom = airportMapZoom(airport);
  const coordinates = `${airport.lat.toFixed(4)}, ${airport.lon.toFixed(4)}`;
  const label = `${airport.name} ${lang === "ko" ? "위치 지도" : "location map"}`;
  const markerCode = airport.iata || airport.icao || airport.ident;
  return `<div class="port-map-card port-map-card--leaflet airport-map-card" data-airport-map="${escapeAttribute(airportCode(airport))}" data-map-zoom="${zoom}" data-map-min="2" data-map-max="14" data-map-lat="${escapeAttribute(airport.lat)}" data-map-lon="${escapeAttribute(airport.lon)}" aria-label="${escapeAttribute(label)}"><div class="port-map-leaflet airport-map-leaflet" data-airport-leaflet-map></div><button class="port-map-reset" type="button" data-airport-map-reset aria-label="${lang === "ko" ? "지도 초기화" : "Reset map"}">${lang === "ko" ? "초기화" : "Reset"}</button><div class="port-map-caption"><strong>${escapeHtml(airport.name)}</strong><span>${escapeHtml(coordinates)} · ${lang === "ko" ? "근사 위치" : "Approximate location"}</span></div><p>${lang === "ko" ? "일반 위치 지도입니다. 활주로·터미널 배치도 또는 공식 운영 정보는 아래 공식 자료에서 별도로 확인하세요." : "General location map. Terminal layouts and official operating information should be checked through the official resources below when available."} <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap contributors</a></p><div class="port-map-fallback"><strong>${lang === "ko" ? "지도를 불러올 수 없습니다." : "Map could not load."}</strong><span>${escapeHtml(coordinates)}</span><a href="${escapeAttribute(airportOsmUrl(airport, zoom))}" target="_blank" rel="noopener">OpenStreetMap →</a></div><template data-airport-marker>${escapeHtml(markerCode)}</template></div>`;
}

function initializeAirportMapElement(map, airport) {
  if (!map || !airport || airportLeafletMaps.has(map) || ![airport.lat, airport.lon].every(Number.isFinite)) return;
  const target = map.querySelector("[data-airport-leaflet-map]");
  if (!target) return;
  const zoom = Number(map.dataset.mapZoom || airportMapZoom(airport));
  const start = () => loadLeafletForPortMap().then((L) => {
    if (!document.body.contains(map) || airportLeafletMaps.has(map)) return;
    const bounds = target.getBoundingClientRect();
    if (!bounds.width || !bounds.height) {
      requestAnimationFrame(() => initializeAirportMapElement(map, airport));
      return;
    }
    const leaflet = L.map(target, {
      center: [airport.lat, airport.lon],
      zoom,
      minZoom: Number(map.dataset.mapMin || 2),
      maxZoom: Number(map.dataset.mapMax || 14),
      zoomSnap: 1,
      zoomDelta: 1,
      doubleClickZoom: true,
      scrollWheelZoom: true,
      touchZoom: true,
      dragging: true,
      zoomControl: true,
      attributionControl: true
    });
    const tileLayer = portOsmRasterLayer(L);
    target.__logileeLeafletTileLayer = tileLayer;
    Promise.all([loadMapLibreForPortMap(), loadPortBasemapStyle()])
      .then(([mapLibreLeaflet, style]) => {
        if (!document.body.contains(map) || !airportLeafletMaps.has(map)) return;
        const vectorLayer = mapLibreLeaflet.maplibreGL({ style, interactive: false });
        tileLayer.remove();
        vectorLayer.addTo(leaflet);
        target.__logileeLeafletTileLayer = vectorLayer;
        target.__logileeAirportBasemapProvider = "openfreemap-vector";
        map.classList.add("is-vector-basemap");
        refreshPortBasemapLayer(vectorLayer);
      })
      .catch((error) => {
        console.warn("Airport vector basemap unavailable; using OSM raster fallback:", error);
        if (!document.body.contains(map) || !airportLeafletMaps.has(map)) return;
        if (!leaflet.hasLayer(tileLayer)) tileLayer.addTo(leaflet);
        target.__logileeAirportBasemapProvider = "osm-raster";
        map.classList.add("is-raster-basemap");
      });
    tileLayer.addTo(leaflet);
    const markerLabel = airport.iata || airport.icao || airport.ident;
    const marker = L.divIcon({
      className: "port-leaflet-marker airport-leaflet-marker",
      html: `<span></span><b>${escapeHtml(markerLabel)}</b>`,
      iconSize: [76, 48],
      iconAnchor: [38, 21]
    });
    const leafletMarker = L.marker([airport.lat, airport.lon], { icon: marker, keyboard: false }).addTo(leaflet);
    target.__logileeLeafletMap = leaflet;
    target.__logileeLeafletMarker = leafletMarker;
    target.__logileeLeafletTileLayer = tileLayer;
    airportLeafletMaps.set(map, leaflet);
    map.classList.add("is-map-ready");
    const syncSize = () => requestAnimationFrame(() => {
      leaflet.invalidateSize({ pan: false });
      refreshPortBasemapLayer(target.__logileeLeafletTileLayer);
    });
    requestAnimationFrame(syncSize);
    setTimeout(syncSize, 120);
    setTimeout(syncSize, 360);
    if (window.ResizeObserver) {
      let resizeTimer = 0;
      const resizeObserver = new ResizeObserver(() => {
        window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(syncSize, 80);
      });
      resizeObserver.observe(map);
      airportLeafletResizeObservers.set(map, resizeObserver);
    }
  });
  requestAnimationFrame(() => start().catch((error) => {
    console.warn("Airport map unavailable:", error);
    map.classList.add("is-map-fallback");
  }));
}

function destroyAirportMaps(root = document) {
  root.querySelectorAll("[data-airport-map]").forEach((map) => {
    const leaflet = airportLeafletMaps.get(map);
    const resizeObserver = airportLeafletResizeObservers.get(map);
    if (resizeObserver) resizeObserver.disconnect();
    if (leaflet) leaflet.remove();
    airportLeafletMaps.delete(map);
    airportLeafletResizeObservers.delete(map);
  });
}

function initializeAirportMaps(root = document) {
  root.querySelectorAll("[data-airport-map]").forEach((map) => {
    const code = compactAirportCode(map.dataset.airportMap);
    const airport = airportDataset().find((item) => compactAirportCode(airportCode(item)) === code);
    initializeAirportMapElement(map, airport);
  });
}

function updateAirportMapElement(map, airport, zoom = airportMapZoom(airport)) {
  const leaflet = airportLeafletMaps.get(map);
  if (!leaflet || !airport) return;
  const nextZoom = Math.max(Number(map.dataset.mapMin || 2), Math.min(Number(map.dataset.mapMax || 14), Number(zoom || airportMapZoom(airport))));
  const target = map.querySelector("[data-airport-leaflet-map]");
  const tileLayer = target?.__logileeLeafletTileLayer;
  map.dataset.mapZoom = String(nextZoom);
  const syncView = () => {
    leaflet.invalidateSize({ pan: false });
    leaflet.setView([airport.lat, airport.lon], nextZoom, { animate: false });
    refreshPortBasemapLayer(tileLayer);
  };
  syncView();
  requestAnimationFrame(syncView);
  setTimeout(syncView, 120);
}

function airportFactsMarkup(airport) {
  const lang = currentLang();
  const coordinates = `${airport.lat.toFixed(4)}, ${airport.lon.toFixed(4)}`;
  const rows = lang === "ko"
    ? [["IATA", airport.iata || "확인 불가"], ["ICAO", airport.icao || airport.ident || "확인 불가"], ["국가", `${airport.country} (${airport.iso})`], ["도시 / 지역", airportCity(airport)], ["공항 유형", airportTypeLabel(airport, lang)], ["정기편", airport.scheduled ? "있음" : "확인 불가"], ["좌표", coordinates], ["시간대", airport.timezone || "확인 불가"], ["현지시간", localTimeForAirport(airport)]]
    : [["IATA", airport.iata || "Unavailable"], ["ICAO", airport.icao || airport.ident || "Unavailable"], ["Country", `${airport.country} (${airport.iso})`], ["City / Area", airportCity(airport)], ["Airport Type", airportTypeLabel(airport, lang)], ["Scheduled Service", airport.scheduled ? "Yes" : "Unavailable"], ["Coordinates", coordinates], ["Time Zone", airport.timezone || "Unavailable"], ["Local Time", localTimeForAirport(airport)]];
  return `<dl class="port-core-facts airport-core-facts">${rows.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl>`;
}

function airportOfficialResourcesMarkup(airport) {
  const lang = currentLang();
  const title = lang === "ko" ? "공식 자료" : "Official Resources";
  if (!airport.official) {
    return `<section class="port-intel-section airport-resource-section"><h2>${title}</h2><div class="data-empty">${lang === "ko" ? "LOGILEE에 검증된 공식 공항 링크가 아직 없습니다. 공항명과 IATA/ICAO 코드를 기준으로 공식 기관에서 최종 확인하세요." : "No verified official airport resource is available in LOGILEE yet. Use the airport name and IATA/ICAO code when checking with official sources."}</div></section>`;
  }
  const note = airport.officialVerified ? (lang === "ko" ? "검증된 공식 공항 웹사이트" : "Verified official airport website") : (lang === "ko" ? "OurAirports 데이터에 등록된 공항 홈페이지" : "Airport home link supplied by OurAirports data");
  return `<section class="port-intel-section airport-resource-section"><h2>${title}</h2><div class="port-resource-grid"><a href="${escapeAttribute(airport.official)}" target="_blank" rel="noopener"><i data-lucide="external-link"></i><span>${escapeHtml(note)}</span><strong>${escapeHtml(airport.name)}</strong></a><a href="${escapeAttribute(airportOsmUrl(airport, airportMapZoom(airport)))}" target="_blank" rel="noopener"><i data-lucide="map"></i><span>${lang === "ko" ? "공항 위치 확인" : "Airport location reference"}</span><strong>OpenStreetMap</strong></a></div></section>`;
}

function airportNearbyMarkup(airport) {
  const lang = currentLang();
  const rows = nearbyAirports(airport, 6);
  return `<section class="port-intel-section airport-nearby-section"><div class="section-head"><h2>${lang === "ko" ? "주변 공항" : "Nearby Airports"}</h2><span>${lang === "ko" ? "직선거리 기준" : "Straight-line distance"}</span></div><div class="port-nearby-list airport-nearby-list">${rows.map((item) => `<a href="${escapeAttribute(airportUrl(item))}" data-airport-link="${escapeAttribute(airportCode(item))}"><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(airportDisplayCodes(item))}</span><em>${Math.round(item.distance)} km</em><b aria-hidden="true">→</b></a>`).join("")}</div></section>`;
}

function airportRelatedToolsMarkup(airport) {
  const lang = currentLang();
  const tools = lang === "ko"
    ? [["화물 추적", "track.html#awb", "radar"], ["국가별 무역 프로필", `country-trade-profile.html?country=${airport.iso}`, "globe"], ["Global Trade Explorer", `global-trade-explorer.html?reporter=${airport.iso}`, "chart-column"], ["CBM 계산기", "cbm.html", "calculator"]]
    : [["Shipment Tracking", "track.html#awb", "radar"], ["Country Trade Profile", `country-trade-profile.html?country=${airport.iso}`, "globe"], ["Global Trade Explorer", `global-trade-explorer.html?reporter=${airport.iso}`, "chart-column"], ["CBM Calculator", "cbm.html", "calculator"]];
  return `<section class="port-intel-section airport-related-section"><h2>${lang === "ko" ? "관련 LOGILEE 도구" : "Related LOGILEE Tools"}</h2><div class="port-tool-grid airport-tool-grid">${tools.map(([label, href, icon]) => `<a href="${escapeAttribute(href)}"><i data-lucide="${icon}"></i><span>${escapeHtml(label)}</span></a>`).join("")}</div></section>`;
}

function airportDataSourcesMarkup(airport) {
  const lang = currentLang();
  const meta = airportMeta();
  const rows = lang === "ko"
    ? [["공항 기준 데이터", "OurAirports airports.csv"], ["국가명", "OurAirports countries.csv"], ["라이선스", meta.license || "Public Domain / Unlicense"], ["검색 포함 범위", `${meta.exposedRecords || airportDataset().length}개 주요 정기편 공항`], ["시간대", airport.timezone ? "LOGILEE 검증 보강 데이터" : "이 공항은 확인 가능한 시간대 없음"], ["지도", "OpenFreeMap / OpenStreetMap contributors"]]
    : [["Airport Reference", "OurAirports airports.csv"], ["Country Names", "OurAirports countries.csv"], ["License", meta.license || "Public Domain / Unlicense"], ["Search Scope", `${meta.exposedRecords || airportDataset().length} major scheduled airports`], ["Time Zone", airport.timezone ? "LOGILEE verified enrichment" : "Unavailable for this airport"], ["Map", "OpenFreeMap / OpenStreetMap contributors"]];
  return `<section class="port-intel-section port-data-coverage airport-data-coverage"><h2>${lang === "ko" ? "데이터 및 출처" : "Data & Sources"}</h2><dl>${rows.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl><p class="muted">${lang === "ko" ? "LOGILEE는 공항 코드, 좌표, 기본 분류를 업무 참고용으로 정리합니다. 실제 운항, 터미널, 화물 반입 규정은 공식 공항·항공사·포워더 자료에서 최종 확인하세요." : "LOGILEE organizes airport codes, coordinates, and basic classification for workflow reference. Confirm operating, terminal, and cargo handling details with official airport, airline, or forwarder sources."}</p></section>`;
}

function airportProfileMarkup(airport) {
  const lang = currentLang();
  return `<section class="port-profile airport-profile" id="airport-profile" aria-live="polite"><div class="port-profile-hero airport-profile-hero"><div>${airportFlag(airport)}<span class="kicker">Airport Profile</span><h2>${escapeHtml(airport.name)}</h2><p>${escapeHtml(airportDisplayCodes(airport))} · ${escapeHtml(airportCity(airport))}, ${escapeHtml(airport.country)}</p><p class="port-role-copy">${lang === "ko" ? "공항 코드, 위치, 현지 시간, 공식 자료를 한 화면에서 확인해 항공화물·복합운송 실무 확인의 출발점으로 사용할 수 있습니다." : "Use this profile as a starting point for air cargo and multimodal checks: airport codes, location, local time, and official resources in one place."}</p></div><a class="secondary-btn" href="${escapeAttribute(airportOsmUrl(airport, airportMapZoom(airport)))}" target="_blank" rel="noopener"><i data-lucide="map"></i>${lang === "ko" ? "OpenStreetMap에서 보기" : "Open in OpenStreetMap"}</a></div><div class="port-profile-grid airport-profile-grid">${airportLocationMapMarkup(airport)}${airportFactsMarkup(airport)}</div>${airportOfficialResourcesMarkup(airport)}${airportNearbyMarkup(airport)}${airportRelatedToolsMarkup(airport)}${airportDataSourcesMarkup(airport)}</section>`;
}

function airportSuggestionMarkup(airport, index, activeIndex) {
  const meta = [airportDisplayCodes(airport), airportCity(airport), airport.country].filter(Boolean).join(" · ");
  return `<button type="button" role="option" id="airport-option-${index}" data-airport-option="${escapeAttribute(airportCode(airport))}" aria-selected="${index === activeIndex}"><span>${escapeHtml(airport.name)}</span><small>${escapeHtml(meta)}</small></button>`;
}

function wireAirportFinder() {
  const form = document.querySelector("[data-airport-search-form]");
  const input = form?.querySelector("[data-airport-query]");
  const suggest = form?.querySelector("[data-airport-suggest]");
  const country = form?.querySelector("[data-airport-country]");
  const clear = form?.querySelector("[data-airport-clear]");
  const profile = document.querySelector("[data-airport-profile]");
  const popular = document.querySelector("[data-popular-airports]");
  const count = document.querySelector("[data-airport-count]");
  if (!form || !input || !profile) return;
  const lang = currentLang();
  const airports = airportDataset();
  let suggestions = [];
  let activeIndex = -1;
  const labels = lang === "ko"
    ? { empty: "일치하는 공항을 찾지 못했습니다. 공항명, 도시명, IATA 또는 ICAO 코드를 다시 확인하세요.", invalid: "요청한 공항이 현재 LOGILEE 공항 reference에 없습니다.", found: "개 공항", intro: "공항명, 도시, IATA, ICAO 코드로 검색하세요.", noData: "공항 데이터가 로드되지 않았습니다.", allCountries: "전체 국가" }
    : { empty: "No matching airport found. Check the airport name, city, IATA code, or ICAO code.", invalid: "The requested airport is not in the current LOGILEE airport reference.", found: "Airports", intro: "Search by airport name, city, IATA, or ICAO code.", noData: "Airport data is not loaded.", allCountries: "All countries" };
  const airportsForCountry = (countryCode = country?.value || "") => airports.filter((airport) => !countryCode || airport.iso === countryCode);
  const matchingCount = () => {
    const countryCode = country?.value || "";
    const query = input.value.trim();
    return query ? searchAirports(query, airports.length, countryCode).length : airportsForCountry(countryCode).length;
  };
  const updateCount = () => {
    if (!count) return;
    const total = matchingCount().toLocaleString(lang === "ko" ? "ko-KR" : "en-US");
    count.textContent = lang === "ko" ? `${total}${labels.found}` : `${total} ${labels.found}`;
  };
  const syncUrlFilters = () => {
    const url = new URL(location.href);
    if (input.value.trim()) url.searchParams.set("query", input.value.trim()); else url.searchParams.delete("query");
    if (country?.value) url.searchParams.set("country", country.value); else url.searchParams.delete("country");
    history.replaceState(null, "", url);
  };
  const setProfile = (html) => {
    destroyAirportMaps(profile);
    profile.innerHTML = html;
    refreshIcons();
    initializeAirportMaps(profile);
  };
  const renderSuggest = () => {
    if (!suggest) return;
    input.setAttribute("aria-expanded", suggestions.length ? "true" : "false");
    suggest.innerHTML = suggestions.length ? suggestions.map((airport, index) => airportSuggestionMarkup(airport, index, activeIndex)).join("") : "";
  };
  const updateSuggestions = () => {
    suggestions = searchAirports(input.value, 10, country?.value || "");
    activeIndex = suggestions.length ? 0 : -1;
    renderSuggest();
    updateCount();
  };
  const selectAirport = (airport, { push = true, scroll = true } = {}) => {
    if (!airport) return;
    input.value = airport.iata || airport.icao || airport.name;
    suggestions = [];
    activeIndex = -1;
    renderSuggest();
    if (push) {
      const url = new URL(location.href);
      url.search = airportUrl(airport).slice(1);
      if (country?.value) url.searchParams.set("country", country.value);
      history.replaceState({ airport: airportCode(airport) }, "", url);
    }
    updateCount();
    setProfile(airportProfileMarkup(airport));
    if (scroll) profile.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const renderPopular = () => {
    if (!popular) return;
    const codes = ["RKSI", "RKPK", "ZSPD", "RJTT", "WSSS", "EHAM", "OMDB", "KLAX"];
    popular.innerHTML = codes.map((code) => airports.find((airport) => airport.icao === code)).filter(Boolean).map((airport) => `<button type="button" data-airport-view="${escapeAttribute(airportCode(airport))}"><strong>${escapeHtml(airport.name)}</strong><span>${escapeHtml(airportDisplayCodes(airport))}</span></button>`).join("");
  };
  const renderInitial = () => {
    if (!airports.length) {
      setProfile(`<section class="port-intel-section airport-empty-panel"><h2>${lang === "ko" ? "공항 데이터 없음" : "Airport Data Unavailable"}</h2><div class="data-empty">${labels.noData}</div></section>`);
      updateCount();
      return;
    }
    const params = new URLSearchParams(location.search);
    const countryParam = (params.get("country") || "").toUpperCase();
    if (country && countryParam && [...country.options].some((option) => option.value === countryParam)) country.value = countryParam;
    country?.updateComboboxLabel?.();
    let requested = findAirportFromParams(params);
    if (requested && country?.value && requested.iso !== country.value) requested = null;
    if (requested) {
      input.value = requested.iata || requested.icao || requested.name;
      selectAirport(requested, { push: false, scroll: false });
      return;
    }
    input.value = params.get("query") || params.get("q") || "";
    updateSuggestions();
    const hasQuery = Boolean(location.search);
    setProfile(`<section class="port-intel-section airport-empty-panel"><h2>${hasQuery ? (lang === "ko" ? "공항 확인 필요" : "Airport Not Found") : (lang === "ko" ? "공항을 검색하세요" : "Search an Airport")}</h2><div class="data-empty">${hasQuery ? labels.invalid : labels.intro}</div></section>`);
  };
  if (country) {
    const countries = [...new Set(airports.map((airport) => airport.iso).filter(Boolean))].sort((a, b) => displayCountryName(a, lang).localeCompare(displayCountryName(b, lang), lang === "ko" ? "ko" : "en"));
    country.innerHTML = `<option value="">${labels.allCountries}</option>${countries.map((code) => `<option value="${escapeAttribute(code)}">${escapeHtml(displayCountryName(code, lang))}</option>`).join("")}`;
    enhanceSimpleCombobox(country, [{ value: "", label: labels.allCountries, meta: lang === "ko" ? "모든 공항" : "All airports", terms: ["", "all", "전체"] }, ...countries.map((code) => ({ value: code, label: displayCountryName(code, lang), meta: `${code} · ${displayCountryName(code, "en")}`, terms: [code, displayCountryName(code, "en"), displayCountryName(code, "ko"), ...(COUNTRY_SEARCH_ALIASES[code] || [])].map(normalizeCountrySearch) }))], lang === "ko" ? { label: "공항 국가 선택", placeholder: "국가명 또는 ISO 코드 검색...", open: "국가 목록 열기", empty: "일치하는 국가가 없습니다." } : { label: "Select airport country", placeholder: "Search country name or ISO code...", open: "Open country list", empty: "No matching countries." });
  }
  form.addEventListener("input", () => {
    updateSuggestions();
    syncUrlFilters();
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const airport = suggestions[activeIndex] || searchAirports(input.value, 1, country?.value || "")[0];
    if (airport) {
      selectAirport(airport);
    } else {
      updateCount();
      setProfile(`<section class="port-intel-section airport-empty-panel"><h2>${lang === "ko" ? "검색 결과 없음" : "No Airport Found"}</h2><div class="data-empty">${labels.empty}</div></section>`);
    }
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (suggestions.length) activeIndex = (activeIndex + 1) % suggestions.length;
      renderSuggest();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (suggestions.length) activeIndex = (activeIndex - 1 + suggestions.length) % suggestions.length;
      renderSuggest();
    } else if (event.key === "Enter" && suggestions[activeIndex]) {
      event.preventDefault();
      selectAirport(suggestions[activeIndex]);
    } else if (event.key === "Escape") {
      suggestions = [];
      activeIndex = -1;
      renderSuggest();
    }
  });
  country?.addEventListener("change", () => {
    updateSuggestions();
    syncUrlFilters();
  });
  clear?.addEventListener("click", () => {
    input.value = "";
    if (country) country.value = "";
    country?.updateComboboxLabel?.();
    suggestions = [];
    activeIndex = -1;
    renderSuggest();
    updateCount();
    history.replaceState(null, "", location.pathname);
    setProfile(`<section class="port-intel-section airport-empty-panel"><h2>${lang === "ko" ? "공항을 검색하세요" : "Search an Airport"}</h2><div class="data-empty">${labels.intro}</div></section>`);
    input.focus();
  });
  form.addEventListener("click", (event) => {
    const option = event.target.closest("[data-airport-option]");
    if (!option) return;
    const airport = airports.find((item) => compactAirportCode(airportCode(item)) === compactAirportCode(option.dataset.airportOption));
    selectAirport(airport);
  });
  [popular, profile].filter(Boolean).forEach((root) => root.addEventListener("click", (event) => {
    const link = event.target.closest("[data-airport-link]");
    const view = event.target.closest("[data-airport-view]");
    const zoomButton = event.target.closest("[data-airport-map-reset]");
    if (zoomButton) {
      const map = zoomButton.closest("[data-airport-map]");
      const airport = airports.find((item) => compactAirportCode(airportCode(item)) === compactAirportCode(map?.dataset.airportMap));
      if (map && airport) updateAirportMapElement(map, airport, airportMapZoom(airport));
      return;
    }
    const code = link?.dataset.airportLink || view?.dataset.airportView;
    if (!code) return;
    event.preventDefault();
    const airport = airports.find((item) => compactAirportCode(airportCode(item)) === compactAirportCode(code));
    selectAirport(airport);
  }));
  window.addEventListener("popstate", () => renderInitial());
  renderPopular();
  renderInitial();
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
  ["AT", "Austria", "오스트리아"],
  ["BE", "Belgium", "벨기에"],
  ["BG", "Bulgaria", "불가리아"],
  ["HR", "Croatia", "크로아티아"],
  ["CY", "Cyprus", "키프로스"],
  ["CZ", "Czechia", "체코"],
  ["DK", "Denmark", "덴마크"],
  ["EE", "Estonia", "에스토니아"],
  ["FI", "Finland", "핀란드"],
  ["FR", "France", "프랑스"],
  ["DE", "Germany", "독일"],
  ["EL", "Greece", "그리스"],
  ["HU", "Hungary", "헝가리"],
  ["IE", "Ireland", "아일랜드"],
  ["IT", "Italy", "이탈리아"],
  ["LV", "Latvia", "라트비아"],
  ["LT", "Lithuania", "리투아니아"],
  ["LU", "Luxembourg", "룩셈부르크"],
  ["MT", "Malta", "몰타"],
  ["NL", "Netherlands", "네덜란드"],
  ["PL", "Poland", "폴란드"],
  ["PT", "Portugal", "포르투갈"],
  ["RO", "Romania", "루마니아"],
  ["SK", "Slovakia", "슬로바키아"],
  ["SI", "Slovenia", "슬로베니아"],
  ["ES", "Spain", "스페인"],
  ["SE", "Sweden", "스웨덴"]
];

const EUROSTAT_REPORTER_ALIASES = {
  CZ: ["Czech Republic", "체코 공화국"],
  EL: ["GR", "Hellas", "Greek Republic"],
  NL: ["Holland"],
  XS: ["RS"]
};

const EUROSTAT_PARTNERS = [
  ["WORLD", "World - all countries", "전 세계"],
  ["US", "United States", "미국"],
  ["CN", "China", "중국"],
  ["KR", "South Korea", "대한민국"],
  ["GB", "United Kingdom", "영국"],
  ["JP", "Japan", "일본"],
  ["VN", "Vietnam", "베트남"],
  ["IN", "India", "인도"],
  ["CA", "Canada", "캐나다"],
  ["MX", "Mexico", "멕시코"],
  ["BR", "Brazil", "브라질"],
  ["TR", "Turkey", "튀르키예"],
  ["CH", "Switzerland", "스위스"],
  ["NO", "Norway", "노르웨이"],
  ["AU", "Australia", "호주"],
  ["SG", "Singapore", "싱가포르"],
  ["TW", "Taiwan", "대만"],
  ["HK", "Hong Kong", "홍콩"],
  ["AE", "United Arab Emirates", "아랍에미리트"],
  ["SA", "Saudi Arabia", "사우디아라비아"],
  ["ZA", "South Africa", "남아프리카공화국"],
  ["IL", "Israel", "이스라엘"],
  ["ID", "Indonesia", "인도네시아"],
  ["MY", "Malaysia", "말레이시아"],
  ["TH", "Thailand", "태국"],
  ["PH", "Philippines", "필리핀"],
  ["BD", "Bangladesh", "방글라데시"],
  ["PK", "Pakistan", "파키스탄"],
  ["MA", "Morocco", "모로코"],
  ["TN", "Tunisia", "튀니지"],
  ["EG", "Egypt", "이집트"],
  ["UA", "Ukraine", "우크라이나"],
  ["XS", "Serbia", "세르비아"],
  ["AR", "Argentina", "아르헨티나"],
  ["CL", "Chile", "칠레"],
  ["NZ", "New Zealand", "뉴질랜드"],
  ["AT", "Austria", "오스트리아"],
  ["BE", "Belgium", "벨기에"],
  ["FR", "France", "프랑스"],
  ["DE", "Germany", "독일"],
  ["IT", "Italy", "이탈리아"],
  ["NL", "Netherlands", "네덜란드"],
  ["PL", "Poland", "폴란드"],
  ["ES", "Spain", "스페인"]
];

const EUROSTAT_PARTNER_ALIASES = {
  US: ["USA", "United States of America", "미합중국"],
  CN: ["PRC", "People's Republic of China", "중화인민공화국"],
  KR: ["Korea", "Republic of Korea", "ROK", "South Korea", "한국", "대한민국"],
  GB: ["UK", "Britain", "Great Britain", "United Kingdom of Great Britain and Northern Ireland"],
  VN: ["Viet Nam"],
  AE: ["UAE"],
  ZA: ["South Africa", "남아공"],
  TR: ["Turkiye", "Türkiye"],
  NL: ["Holland"],
  XS: ["RS"]
};

const EUROSTAT_PRODUCTS = [
  ["TOTAL", "SITC Total - all products", "SITC 전체 상품"],
  ["0", "SITC 0 - Food and live animals", "SITC 0 - 식품 및 산동물"],
  ["1", "SITC 1 - Beverages and tobacco", "SITC 1 - 음료 및 담배"],
  ["2", "SITC 2 - Crude materials, except fuels", "SITC 2 - 비연료 원재료"],
  ["3", "SITC 3 - Mineral fuels and related materials", "SITC 3 - 광물성 연료"],
  ["4", "SITC 4 - Animal and vegetable oils, fats and waxes", "SITC 4 - 동식물성 유지 및 왁스"],
  ["5", "SITC 5 - Chemicals and related products", "SITC 5 - 화학제품"],
  ["6", "SITC 6 - Manufactured goods by material", "SITC 6 - 재료별 제조품"],
  ["7", "SITC 7 - Machinery and transport equipment", "SITC 7 - 기계 및 운송장비"],
  ["8", "SITC 8 - Miscellaneous manufactured articles", "SITC 8 - 기타 제조제품"],
  ["9", "SITC 9 - Unclassified commodities", "SITC 9 - 기타 미분류 상품"]
];

const EUROSTAT_YEARS = Array.from({ length: 24 }, (_, index) => String(2025 - index));
const EUROSTAT_DATASET = "DS-059331";
const EUROSTAT_DATASET_LABEL = "International trade of EU and non-EU countries since 2002 by SITC";
const EUROSTAT_UNIT = "EUR";
const EUROSTAT_VALUE_INDICATOR = "VALUE_EUR";
const EUROSTAT_PRODUCT_CODES = EUROSTAT_PRODUCTS.map(([code]) => code).filter((code) => code !== "TOTAL");
const EUROSTAT_FLOW_CODES = { export: "2", import: "1" };
const EUROSTAT_PRODUCT_PARAM_ALIASES = { SITC3: "3", SITC5: "5", SITC7: "7", SITC9: "9" };
function optionMarkup(options) {
  const lang = currentLang();
  return options.map(([value, en, ko]) => `<option value="${value}">${lang === "ko" ? ko : en}</option>`).join("");
}

function selectOptionLabel(options, code, lang = currentLang()) {
  const found = options.find(([value]) => value === code);
  return found ? found[lang === "ko" ? 2 : 1] : code;
}

function eurostatCategoryLabel(data, dimension, code) {
  return data?.dimension?.[dimension]?.category?.label?.[code] || code;
}

function eurostatFriendlyUpdated(value, lang = currentLang()) {
  if (!value) return lang === "ko" ? "업데이트 일자 미제공" : "Update date unavailable";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return lang === "ko"
    ? `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 업데이트`
    : `Updated ${new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(date)}`;
}

function eurostatRawValue(data, codes) {
  const ids = data?.id || [];
  const sizes = data?.size || [];
  if (!ids.length || !sizes.length || !data?.dimension) return null;
  let index = 0;
  for (let i = 0; i < ids.length; i += 1) {
    const dimension = ids[i];
    const code = codes[dimension];
    const map = data.dimension?.[dimension]?.category?.index || {};
    const dimIndex = map[code];
    if (dimIndex === undefined || dimIndex === null) return null;
    index = index * sizes[i] + Number(dimIndex);
  }
  const values = data.value;
  if (Array.isArray(values)) return values[index] ?? null;
  return values?.[index] ?? null;
}

function eurostatRows(data, selections) {
  const flows = selections.flows || [selections.flowCode];
  const products = selections.products || [selections.product];
  const partners = selections.partners || [selections.partner];
  const years = selections.years || [selections.year];
  const rows = [];
  flows.forEach((flowCode) => {
    products.forEach((product) => {
      partners.forEach((partner) => {
        years.forEach((year) => {
          const value = eurostatRawValue(data, { freq: "A", reporter: selections.reporter, partner, product, flow: flowCode, indicators: EUROSTAT_VALUE_INDICATOR, time: year });
          rows.push({
            reporter: selections.reporter,
            partner,
            product,
            flowCode,
            flow: flowCode === EUROSTAT_FLOW_CODES.import ? "import" : "export",
            year,
            value: value === null || value === undefined ? null : Number(value),
            dataset: EUROSTAT_DATASET,
            updated: data?.updated || ""
          });
        });
      });
    });
  });
  return rows;
}

function eurostatDimensionCodes(data, dimension) {
  const index = data?.dimension?.[dimension]?.category?.index || {};
  return Object.entries(index).sort((a, b) => Number(a[1]) - Number(b[1])).map(([code]) => code);
}

async function getEurostatDataset(selections, extraParams = {}) {
  const params = new URLSearchParams({ format: "JSON", lang: "EN", freq: "A", reporter: selections.reporter, indicators: EUROSTAT_VALUE_INDICATOR });
  const addValues = (name, values) => values.forEach((value) => params.append(name, value));
  if (!extraParams.allPartners) addValues("partner", extraParams.partners || [selections.partner]);
  addValues("product", extraParams.products || [selections.product]);
  addValues("flow", extraParams.flows || [EUROSTAT_FLOW_CODES.export, EUROSTAT_FLOW_CODES.import]);
  addValues("time", extraParams.years || [selections.year]);
  const url = `https://ec.europa.eu/eurostat/api/comext/dissemination/statistics/1.0/data/${EUROSTAT_DATASET}?${params}`;
  return fetchJson(url, {
    cacheKey: `logilee:eurostat:${EUROSTAT_DATASET}:${params.toString()}`,
    ttl: 12 * 60 * 60 * 1000,
    timeout: extraParams.allPartners ? 18000 : 14000
  });
}
function eurostatValueLabel(value, { compact = true } = {}) {
  if (!Number.isFinite(value)) return "N/A";
  if (value === 0) return compact ? "€0" : "EUR 0";
  if (!compact) return `EUR ${formatRate(value, 0)}`;
  const abs = Math.abs(value);
  if (abs >= 1000000000000) return `€${formatRate(value / 1000000000000, 2)}T`;
  if (abs >= 1000000000) return `€${formatRate(value / 1000000000, 1)}B`;
  if (abs >= 1000000) return `€${formatRate(value / 1000000, 1)}M`;
  return `€${formatRate(value, 0)}`;
}
function eurostatPercent(current, previous) {
  if (!Number.isFinite(current) || !Number.isFinite(previous) || previous === 0) return null;
  return ((current - previous) / previous) * 100;
}

function eurostatShare(value, total) {
  if (!Number.isFinite(value) || !Number.isFinite(total) || total <= 0) return null;
  return (value / total) * 100;
}

function eurostatFlagCode(code) {
  return code === "EL" ? "gr" : String(code || "").toLowerCase();
}

function eurostatReporterFlag(code) {
  return `<img class="eu-reporter-flag" src="https://flagcdn.com/${eurostatFlagCode(code)}.svg" alt="" loading="lazy">`;
}

function eurostatCleanPartnerName(name) {
  return String(name || "").replace(/\s*\([^)]*\)\s*$/g, "").replace(/\s+/g, " ").trim();
}

function eurostatPartnerLabel(code, data, lang = currentLang()) {
  const local = EUROSTAT_PARTNERS.find(([value]) => value === code);
  if (local) return local[lang === "ko" ? 2 : 1];
  return eurostatCleanPartnerName(eurostatCategoryLabel(data, "partner", code));
}

function euTradeOverviewTitle(context) {
  const productName = context.productLabel.replace(/^SITC[^-]*-\s*/, "");
  const isTotal = context.product === "TOTAL";
  if (context.partner === "WORLD") {
    return context.lang === "ko"
      ? `${context.reporterLabel}${isTotal ? " 무역 개요" : ` — ${productName} 무역 개요`}`
      : `${context.reporterLabel}${isTotal ? " Trade Overview" : ` — ${productName} Trade Overview`}`;
  }
  return context.lang === "ko"
    ? `${context.reporterLabel} → ${context.partnerLabel}${isTotal ? " 무역 개요" : ` — ${productName} 무역 개요`}`
    : `${context.reporterLabel} → ${context.partnerLabel}${isTotal ? " Trade Overview" : ` — ${productName} Trade Overview`}`;
}

function euDirectionLabel(context, flow) {
  if (context.partner === "WORLD") return flow === "export"
    ? (context.lang === "ko" ? "전체 수출" : "Total exports")
    : (context.lang === "ko" ? "전체 수입" : "Total imports");
  return flow === "export"
    ? (context.lang === "ko" ? `${context.partnerLabel} 대상 수출` : `Exports to ${context.partnerLabel}`)
    : (context.lang === "ko" ? `${context.partnerLabel}발 수입` : `Imports from ${context.partnerLabel}`);
}

function euTradeSnapshotMarkup(context) {
  const lang = currentLang();
  const rows = [];
  const scope = context.partner === "WORLD"
    ? (lang === "ko" ? `${context.reporterLabel}의 ${context.year}년 전체 교역` : `${context.reporterLabel}'s ${context.year} world trade`)
    : (lang === "ko" ? `${context.year}년 ${context.reporterLabel} ↔ ${context.partnerLabel} 교역` : `${context.reporterLabel} ↔ ${context.partnerLabel} trade in ${context.year}`);
  if (Number.isFinite(context.exports?.value) && Number.isFinite(context.imports?.value)) {
    const diff = context.exports.value - context.imports.value;
    rows.push(lang === "ko"
      ? `${scope}: 수출 ${eurostatValueLabel(context.exports.value)}, 수입 ${eurostatValueLabel(context.imports.value)}입니다.`
      : `${scope}: exports are ${eurostatValueLabel(context.exports.value)} and imports are ${eurostatValueLabel(context.imports.value)}.`);
    rows.push(lang === "ko"
      ? `무역수지는 ${eurostatValueLabel(Math.abs(diff))} ${diff >= 0 ? "흑자" : "적자"}입니다.`
      : `The trade balance is a ${eurostatValueLabel(Math.abs(diff))} ${diff >= 0 ? "surplus" : "deficit"}.`);
  }
  if (Number.isFinite(context.selectedCurrent?.value) && Number.isFinite(context.selectedPrevious?.value)) {
    const yoy = eurostatPercent(context.selectedCurrent.value, context.selectedPrevious.value);
    if (yoy !== null) rows.push(lang === "ko"
      ? `${context.flowLabel}은 전년 대비 ${yoy >= 0 ? "+" : ""}${formatRate(yoy, 1)}%입니다.`
      : `${context.flowLabel} changed ${yoy >= 0 ? "+" : ""}${formatRate(yoy, 1)}% from the previous year.`);
  }
  if (context.topProduct && Number.isFinite(context.selectedTotalValue)) {
    const share = eurostatShare(context.topProduct.value, context.selectedTotalValue);
    if (share !== null) rows.push(lang === "ko"
      ? `${context.topProduct.label} 비중은 ${formatRate(share, 1)}%입니다.`
      : `${context.topProduct.label} represents ${formatRate(share, 1)}% of selected ${context.flowLabel.toLowerCase()}.`);
  }
  return `
    <section class="eu-dashboard-section eu-trade-snapshot">
      <h2>${lang === "ko" ? "무역 스냅샷" : "Trade Snapshot"}</h2>
      ${rows.length ? `<ul>${rows.map((row) => `<li>${escapeHtml(row)}</li>`).join("")}</ul>` : `<div class="data-empty">${lang === "ko" ? "계산 가능한 요약 데이터가 없습니다." : "No calculated snapshot is available for this selection."}</div>`}
    </section>
  `;
}
function eurostatNiceTicks(maxValue, count = 4) {
  if (!Number.isFinite(maxValue) || maxValue <= 0) return [0, 1];
  const roughStep = maxValue / Math.max(1, count - 1);
  const power = Math.pow(10, Math.floor(Math.log10(roughStep)));
  const fraction = roughStep / power;
  const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
  const step = niceFraction * power;
  const top = Math.ceil(maxValue / step) * step;
  const ticks = [];
  for (let value = 0; value <= top + step / 2; value += step) ticks.push(value);
  return ticks.length >= 3 ? ticks : [0, top / 2, top];
}

function euLineChartMarkup(trendRows) {
  const lang = currentLang();
  const rows = trendRows.filter((row) => Number.isFinite(row.exportValue) || Number.isFinite(row.importValue));
  if (!rows.length) return `<section class="eu-dashboard-section"><h2>${lang === "ko" ? "최근 5개년 무역 추이" : "5-Year Trade Trend"}</h2><div class="data-empty">${lang === "ko" ? "최근 추이 데이터를 표시할 수 없습니다." : "Trend data is unavailable for this selection."}</div></section>`;
  const width = 640;
  const height = 250;
  const pad = { left: 64, right: 18, top: 24, bottom: 34 };
  const values = rows.flatMap((row) => [row.exportValue, row.importValue]).filter(Number.isFinite);
  const ticks = eurostatNiceTicks(Math.max(...values, 1), 4);
  const max = Math.max(...ticks, 1);
  const x = (index) => rows.length === 1 ? width / 2 : pad.left + (index * (width - pad.left - pad.right)) / (rows.length - 1);
  const y = (value) => pad.top + (1 - value / max) * (height - pad.top - pad.bottom);
  const line = (key) => rows.map((row, index) => Number.isFinite(row[key]) ? `${x(index)},${y(row[key])}` : "").filter(Boolean).join(" ");
  return `
    <section class="eu-dashboard-section eu-chart-section eu-primary-section">
      <div class="section-head"><h2>${lang === "ko" ? "최근 5개년 수출입 추이" : "5-Year Export / Import Trend"}</h2><span>${EUROSTAT_UNIT}</span></div>
      <svg class="eu-line-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="5-year export and import trend">
        ${ticks.map((tick) => `<g class="eu-chart-tick"><line x1="${pad.left}" y1="${y(tick)}" x2="${width - pad.right}" y2="${y(tick)}" /><text x="8" y="${y(tick) + 4}">${escapeHtml(eurostatValueLabel(tick))}</text></g>`).join("")}
        <line class="eu-chart-axis" x1="${pad.left}" y1="${height - pad.bottom}" x2="${width - pad.right}" y2="${height - pad.bottom}" />
        <line class="eu-chart-axis" x1="${pad.left}" y1="${pad.top}" x2="${pad.left}" y2="${height - pad.bottom}" />
        <polyline class="export-line" points="${line("exportValue")}" />
        <polyline class="import-line" points="${line("importValue")}" />
        ${rows.map((row, index) => `<g><text class="eu-chart-year" x="${x(index)}" y="${height - 10}" text-anchor="middle">${escapeHtml(row.year)}</text>${Number.isFinite(row.exportValue) ? `<circle class="export-dot" cx="${x(index)}" cy="${y(row.exportValue)}" r="4"><title>${row.year} Export: ${eurostatValueLabel(row.exportValue, { compact: false })}</title></circle>` : ""}${Number.isFinite(row.importValue) ? `<circle class="import-dot" cx="${x(index)}" cy="${y(row.importValue)}" r="4"><title>${row.year} Import: ${eurostatValueLabel(row.importValue, { compact: false })}</title></circle>` : ""}</g>`).join("")}
      </svg>
      <div class="eu-chart-legend"><span class="export-line-key">${lang === "ko" ? "수출" : "Export"}</span><span class="import-line-key">${lang === "ko" ? "수입" : "Import"}</span></div>
    </section>
  `;
}
function euComparisonMarkup(exports, imports) {
  const lang = currentLang();
  const hasExports = Number.isFinite(exports?.value);
  const hasImports = Number.isFinite(imports?.value);
  const title = lang === "ko" ? "수출입 비교" : "Export vs Import";
  if (!hasExports && !hasImports) {
    return `<section class="eu-dashboard-section eu-comparison-section eu-primary-section"><h2>${title}</h2><div class="data-empty">${lang === "ko" ? "선택 조건의 수출입 비교 데이터를 표시할 수 없습니다." : "Export/import comparison data is unavailable for this selection."}</div></section>`;
  }
  const max = Math.max(hasExports ? exports.value : 0, hasImports ? imports.value : 0, 1);
  const bars = [
    [lang === "ko" ? "수출" : "Export", exports?.value, "export"],
    [lang === "ko" ? "수입" : "Import", imports?.value, "import"]
  ];
  return `
    <section class="eu-dashboard-section eu-comparison-section eu-primary-section">
      <h2>${title}</h2>
      <div class="eu-bar-compare">${bars.map(([label, value, type]) => `<div><span>${label}</span><div class="eu-bar-track"><b class="${type}" style="width:${Number.isFinite(value) ? Math.max(2, (value / max) * 100) : 0}%"></b></div><strong>${eurostatValueLabel(value)}</strong></div>`).join("")}</div>
    </section>
  `;
}

function euProductBreakdownMarkup(rows, selectedFlow, totalValue) {
  const lang = currentLang();
  const title = lang === "ko" ? "품목 구조" : "Product Breakdown";
  const items = rows.filter((row) => row.flow === selectedFlow && row.product !== "TOTAL" && Number.isFinite(row.value))
    .map((row) => {
      const label = selectOptionLabel(EUROSTAT_PRODUCTS, row.product, lang);
      const name = label.replace(/^SITC\s*[0-9_\-]+\s*-\s*/i, "");
      return { ...row, label, name, share: eurostatShare(row.value, totalValue) };
    })
    .sort((a, b) => b.value - a.value)
    .slice(0, 7);
  if (!items.length) return `<section class="eu-dashboard-section"><h2>${title}</h2><div class="data-empty">${lang === "ko" ? "SITC 품목 구조 데이터를 표시할 수 없습니다." : "SITC product breakdown is unavailable for this selection."}</div></section>`;
  return `
    <section class="eu-dashboard-section eu-product-breakdown eu-primary-section">
      <h2>${title}</h2>
      <div class="eu-ranking-list">${items.map((row) => `<article><div class="eu-sitc-label"><span>${escapeHtml(row.product)} · ${row.share === null ? "N/A" : `${formatRate(row.share, 1)}%`}</span><strong>${escapeHtml(row.name)}</strong></div><div class="eu-bar-track"><b style="width:${row.share === null ? 0 : Math.max(2, Math.min(100, row.share))}%"></b></div><em>${eurostatValueLabel(row.value)}</em></article>`).join("")}</div>
    </section>
  `;
}
function euMajorTradePartnersMarkup(rows, data, worldRows) {
  const lang = currentLang();
  const title = lang === "ko" ? "주요 교역 상대국" : "Major Trade Partners";
  const worldExport = worldRows.find((row) => row.flow === "export")?.value;
  const worldImport = worldRows.find((row) => row.flow === "import")?.value;
  const worldTotal = (Number.isFinite(worldExport) ? worldExport : 0) + (Number.isFinite(worldImport) ? worldImport : 0);
  const byPartner = new Map();
  rows.forEach((row) => {
    if (!/^[A-Z]{2}$/.test(row.partner) || row.partner === row.reporter || !Number.isFinite(row.value)) return;
    const entry = byPartner.get(row.partner) || { partner: row.partner, exports: 0, imports: 0 };
    if (row.flow === "export") entry.exports += row.value;
    if (row.flow === "import") entry.imports += row.value;
    byPartner.set(row.partner, entry);
  });
  const items = [...byPartner.values()]
    .map((item) => ({ ...item, total: item.exports + item.imports, label: eurostatPartnerLabel(item.partner, data, lang) }))
    .filter((item) => item.total > 0)
    .sort((a, b) => b.total - a.total)
    .slice(0, 10);
  if (!items.length) return `<section class="eu-dashboard-section eu-partner-ranking"><h2>${title}</h2><div class="data-empty">${lang === "ko" ? "선택 조건의 상대국 ranking 데이터를 표시할 수 없습니다." : "Partner ranking data is unavailable for this selection."}</div></section>`;
  const max = Math.max(...items.map((item) => item.total), 1);
  return `
    <section class="eu-dashboard-section eu-partner-ranking eu-primary-section">
      <h2>${title}</h2>
      <div class="eu-ranking-list">${items.map((item, index) => `<article><div><span>${index + 1}. ${escapeHtml(item.partner)}</span><strong>${escapeHtml(item.label)}</strong><small>${lang === "ko" ? "수출" : "Exports"} ${eurostatValueLabel(item.exports)} · ${lang === "ko" ? "수입" : "Imports"} ${eurostatValueLabel(item.imports)}${worldTotal ? ` · ${formatRate((item.total / worldTotal) * 100, 1)}%` : ""}</small></div><div class="eu-bar-track"><b style="width:${Math.max(2, (item.total / max) * 100)}%"></b></div><em>${eurostatValueLabel(item.total)}</em></article>`).join("")}</div>
    </section>
  `;
}
function euDetailedDataMarkup(rows, labels) {
  const lang = currentLang();
  const headers = lang === "ko"
    ? ["Reporter", "Partner", "품목 그룹", "SITC", "Flow", "Year", "거래액", "Unit", "Source"]
    : ["Reporter", "Partner", "Product Group", "SITC", "Flow", "Year", "Trade Value", "Unit", "Source"];
  const years = [...new Set(rows.map((row) => row.year).filter(Boolean))].sort();
  const yearRange = years.length > 1 ? `${years[0]}-${years[years.length - 1]}` : years[0] || "N/A";
  const summaryLabel = lang === "ko" ? "원데이터 보기" : "View Detailed Data";
  const helper = `${EUROSTAT_DATASET} · ${yearRange} · ${EUROSTAT_UNIT}`;
  const flowOrder = { export: 0, import: 1 };
  const sortedRows = [...rows].sort((a, b) => {
    const productDiff = (a.product === "TOTAL" ? 0 : 1) - (b.product === "TOTAL" ? 0 : 1);
    if (productDiff) return productDiff;
    const yearDiff = Number(b.year) - Number(a.year);
    if (yearDiff) return yearDiff;
    const flowDiff = (flowOrder[a.flow] ?? 9) - (flowOrder[b.flow] ?? 9);
    if (flowDiff) return flowDiff;
    return String(a.product).localeCompare(String(b.product), undefined, { numeric: true });
  });
  return `
    <details class="eu-dashboard-section eu-detail-disclosure">
      <summary><span><strong>${summaryLabel}</strong><small>${escapeHtml(helper)}</small></span><b aria-hidden="true"></b></summary>
      <div class="responsive-table"><table class="result-table eu-detail-table"><thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead><tbody>
        ${sortedRows.map((row) => `<tr><td>${escapeHtml(labels.reporter)}</td><td>${escapeHtml(selectOptionLabel(EUROSTAT_PARTNERS, row.partner, lang))}</td><td>${escapeHtml(selectOptionLabel(EUROSTAT_PRODUCTS, row.product, lang))}</td><td>${escapeHtml(row.product)}</td><td>${row.flow === "export" ? (lang === "ko" ? "수출" : "Export") : (lang === "ko" ? "수입" : "Import")}</td><td>${escapeHtml(row.year)}</td><td>${Number.isFinite(row.value) ? escapeHtml(eurostatValueLabel(row.value, { compact: false })) : "N/A"}</td><td>${EUROSTAT_UNIT}</td><td>Eurostat</td></tr>`).join("")}
      </tbody></table></div>
    </details>
  `;
}
function euDataClassificationMarkup(context) {
  const lang = currentLang();
  const rows = lang === "ko"
    ? [["데이터 출처", "Eurostat"], ["데이터셋", EUROSTAT_DATASET], ["품목 분류", "SITC"], ["통화 / 단위", EUROSTAT_UNIT], ["기준 연도", context.year], ["업데이트", eurostatFriendlyUpdated(context.updated, lang)]]
    : [["Data Source", "Eurostat"], ["Dataset", EUROSTAT_DATASET], ["Product Classification", "SITC"], ["Currency / Unit", EUROSTAT_UNIT], ["Reference Period", context.year], ["Last Updated", eurostatFriendlyUpdated(context.updated, lang)]];
  return `<section class="eu-dashboard-section eu-classification"><h2>${lang === "ko" ? "데이터 및 분류" : "Data & Classification"}</h2><dl>${rows.map(([label, value]) => `<div><dt>${label}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl><p class="muted">${lang === "ko" ? "이 도구의 품목 그룹은 SITC 분류를 사용합니다. HS/CN 품목 코드 조회가 필요한 경우 LOGILEE HS Code Search를 이용하세요." : "Product groups in this tool use SITC classification. Use LOGILEE HS Code Search when you need HS/CN item code lookup."}</p></section>`;
}

function euCurrencyConverterHref(reporter, partner) {
  if (!partner || partner === "WORLD") return "currency-converter.html";
  const from = COUNTRY_CURRENCY[reporter];
  const to = COUNTRY_CURRENCY[partner];
  if (!from || !to || from === to) return "currency-converter.html";
  if (!TRADE_CURRENCIES.includes(from) || !TRADE_CURRENCIES.includes(to)) return "currency-converter.html";
  return `currency-converter.html?from=${from}&to=${to}`;
}

function euRelatedToolsMarkup(reporter, partner) {
  const lang = currentLang();
  const currencyHref = euCurrencyConverterHref(reporter, partner);
  const tools = lang === "ko"
    ? [["국가 무역 프로필", `country-trade-profile.html?country=${reporter}`, "globe"], ["무역 공휴일", `holidays.html?country=${reporter}`, "calendar-check"], ["주요 항만", `ports.html?country=${reporter}`, "anchor"], ["HS Code 검색", "../hscode.html", "barcode"], ["환율 계산기", currencyHref, "badge-dollar-sign"]]
    : [["Country Trade Profile", `country-trade-profile.html?country=${reporter}`, "globe"], ["Trade Holidays", `holidays.html?country=${reporter}`, "calendar-check"], ["Major Ports", `ports.html?country=${reporter}`, "anchor"], ["HS Code Search", "../hscode-en.html", "barcode"], ["Currency Converter", currencyHref, "badge-dollar-sign"]];
  return `<section class="eu-dashboard-section"><h2>${lang === "ko" ? "관련 무역 도구" : "Related Trade Tools"}</h2><div class="country-tool-grid eu-tool-grid">${tools.map(([label, href, icon]) => `<a href="${href}"><i data-lucide="${icon}"></i><strong>${escapeHtml(label)}</strong></a>`).join("")}</div></section>`;
}
function populateEurostatYears(select, defaultYear = EUROSTAT_YEARS[0]) {
  select.innerHTML = EUROSTAT_YEARS.map((year) => `<option value="${year}">${year}</option>`).join("");
  select.value = EUROSTAT_YEARS.includes(defaultYear) ? defaultYear : EUROSTAT_YEARS[0];
}

function enhanceSimpleCombobox(select, items, labels) {
  if (!select || select.dataset.simpleComboboxReady === "true") return;
  const id = `simple-combobox-${Math.random().toString(36).slice(2, 9)}`;
  const listId = `${id}-list`;
  const wrap = document.createElement("div");
  wrap.className = "country-combobox simple-combobox";
  wrap.innerHTML = `
    <label class="sr-only" for="${id}">${labels.label}</label>
    <div class="country-combobox-control">
      <i data-lucide="search"></i>
      <input id="${id}" type="text" autocomplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="${listId}" aria-label="${labels.label}" placeholder="${labels.placeholder}">
      <button type="button" aria-label="${labels.open}"><i data-lucide="chevron-down"></i></button>
    </div>
    <div class="country-combobox-list" id="${listId}" role="listbox"></div>
  `;
  select.classList.add("visually-hidden-select");
  select.setAttribute("tabindex", "-1");
  select.setAttribute("aria-hidden", "true");
  select.parentElement?.appendChild(wrap);
  select.dataset.simpleComboboxReady = "true";
  const input = wrap.querySelector("input");
  const button = wrap.querySelector("button");
  const list = wrap.querySelector(".country-combobox-list");
  let matches = [...items];
  let activeIndex = -1;
  let open = false;
  const setInput = () => { input.value = items.find((item) => item.value === select.value)?.label || ""; };
  const render = () => {
    list.innerHTML = matches.length ? matches.map((item, index) => `<button type="button" role="option" id="${listId}-${escapeAttribute(item.value)}" data-simple-option="${escapeAttribute(item.value)}" aria-selected="${index === activeIndex}"><span>${escapeHtml(item.label)}</span><small>${escapeHtml(item.meta || item.value)}</small></button>`).join("") : `<div class="country-combobox-empty">${labels.empty}</div>`;
    input.setAttribute("aria-activedescendant", activeIndex >= 0 && matches[activeIndex] ? `${listId}-${matches[activeIndex].value}` : "");
  };
  const filter = () => {
    const query = normalizeCountrySearch(input.value);
    matches = query ? items.filter((item) => item.terms.some((term) => term.includes(query) || compactCountrySearch(term).includes(compactCountrySearch(query)))) : [...items];
    activeIndex = matches.length ? 0 : -1;
    render();
  };
  const show = () => { open = true; wrap.classList.add("is-open"); input.setAttribute("aria-expanded", "true"); filter(); };
  const close = () => { open = false; wrap.classList.remove("is-open"); input.setAttribute("aria-expanded", "false"); input.removeAttribute("aria-activedescendant"); setInput(); };
  const choose = (value) => { if (value === undefined) return; select.value = value; select.dispatchEvent(new Event("change", { bubbles: true })); setInput(); close(); };
  setInput(); render();
  input.addEventListener("focus", show);
  input.addEventListener("input", show);
  button.addEventListener("click", () => open ? close() : (input.focus(), show()));
  list.addEventListener("mousedown", (event) => event.preventDefault());
  list.addEventListener("click", (event) => { const option = event.target.closest("[data-simple-option]"); if (option) choose(option.dataset.simpleOption); });
  input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") { event.preventDefault(); if (!open) show(); else activeIndex = Math.min(activeIndex + 1, matches.length - 1); render(); }
    else if (event.key === "ArrowUp") { event.preventDefault(); if (!open) show(); else activeIndex = Math.max(activeIndex - 1, 0); render(); }
    else if (event.key === "Enter") { event.preventDefault(); if (!open) show(); else if (matches[activeIndex]) choose(matches[activeIndex].value); }
    else if (event.key === "Escape") { event.preventDefault(); close(); }
  });
  document.addEventListener("click", (event) => { if (!wrap.contains(event.target)) close(); });
  select.addEventListener("change", setInput);
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
  const lang = currentLang();
  const labels = lang === "ko"
    ? { loading: "Eurostat 데이터를 불러오는 중입니다...", unavailable: "선택한 조건의 Eurostat 데이터를 표시할 수 없습니다.", reporter: "Reporter", partner: "Partner", product: "Product Group", year: "Year", flow: "Flow", search: "조회" }
    : { loading: "Loading Eurostat data...", unavailable: "Eurostat data is unavailable for this selection.", reporter: "Reporter", partner: "Partner", product: "Product Group", year: "Year", flow: "Flow", search: "Search" };
  reporter.innerHTML = optionMarkup(EUROSTAT_REPORTERS);
  partner.innerHTML = optionMarkup(EUROSTAT_PARTNERS);
  product.innerHTML = optionMarkup(EUROSTAT_PRODUCTS);
  populateEurostatYears(year);
  reporter.value = "DE";
  partner.value = "WORLD";
  product.value = "TOTAL";
  flow.value = "export";
  ["reporter", "partner", "product", "year", "flow"].forEach((name) => {
    const field = form.querySelector(`[name='${name}']`);
    let value = params.get(name);
    if (name === "product" && EUROSTAT_PRODUCT_PARAM_ALIASES[value]) value = EUROSTAT_PRODUCT_PARAM_ALIASES[value];
    if (!value || !field) return;
    if (field.tagName === "SELECT" && ![...field.options].some((option) => option.value === value)) return;
    field.value = value;
  });
  enhanceSimpleCombobox(reporter, EUROSTAT_REPORTERS.map(([value, en, ko]) => ({ value, label: lang === "ko" ? ko : en, meta: `${value} · ${en}`, terms: [value, en, ko, ...(EUROSTAT_REPORTER_ALIASES[value] || []), ...(COUNTRY_SEARCH_ALIASES[value] || [])].map(normalizeCountrySearch) })), lang === "ko" ? { label: "Reporter 선택", placeholder: "Reporter 국가 검색...", open: "Reporter 목록 열기", empty: "일치하는 reporter가 없습니다." } : { label: "Select reporter", placeholder: "Search reporter country...", open: "Open reporter list", empty: "No matching reporter." });
  enhanceSimpleCombobox(partner, EUROSTAT_PARTNERS.map(([value, en, ko]) => ({ value, label: lang === "ko" ? ko : en, meta: value === "WORLD" ? en : `${value} · ${en}`, terms: [value, en, ko, ...(EUROSTAT_PARTNER_ALIASES[value] || []), ...(COUNTRY_SEARCH_ALIASES[value] || [])].map(normalizeCountrySearch) })), lang === "ko" ? { label: "Partner 선택", placeholder: "상대국 검색...", open: "Partner 목록 열기", empty: "일치하는 partner가 없습니다." } : { label: "Select partner", placeholder: "Search partner country...", open: "Open partner list", empty: "No matching partner." });
  enhanceSimpleCombobox(product, EUROSTAT_PRODUCTS.map(([value, en, ko]) => ({ value, label: lang === "ko" ? ko : en, meta: value, terms: [value, en, ko].map(normalizeCountrySearch) })), lang === "ko" ? { label: "Product Group 선택", placeholder: "SITC 코드 또는 품목명 검색...", open: "Product 목록 열기", empty: "일치하는 품목군이 없습니다." } : { label: "Select product group", placeholder: "Search SITC code or product group...", open: "Open product list", empty: "No matching product group." });
  const render = async () => {
    const selectedYear = year.value;
    output.innerHTML = `<div class="data-empty">${labels.loading}</div>`;
    try {
      const selections = { reporter: reporter.value, partner: partner.value, product: product.value, year: selectedYear, flow: flow.value };
      const currentYear = Number(selectedYear);
      const trendYears = EUROSTAT_YEARS.filter((item) => Number(item) <= currentYear).slice(0, 5).reverse();
      const [currentData, previousData, trendData, productData, partnerData] = await Promise.all([
        getEurostatDataset(selections),
        EUROSTAT_YEARS.includes(String(currentYear - 1)) ? getEurostatDataset({ ...selections, year: String(currentYear - 1) }) : Promise.resolve(null),
        getEurostatDataset(selections, { years: trendYears }),
        getEurostatDataset(selections, { products: EUROSTAT_PRODUCT_CODES, flows: [EUROSTAT_FLOW_CODES[flow.value]] }).catch((error) => ({ error })),
        selections.partner === "WORLD" ? getEurostatDataset(selections, { allPartners: true, products: [selections.product], years: [selectedYear] }).catch((error) => ({ error })) : Promise.resolve(null)
      ]);
      const currentRows = eurostatRows(currentData, { ...selections, flows: [EUROSTAT_FLOW_CODES.export, EUROSTAT_FLOW_CODES.import], years: [selectedYear] });
      const previousRows = previousData ? eurostatRows(previousData, { ...selections, flows: [EUROSTAT_FLOW_CODES.export, EUROSTAT_FLOW_CODES.import], years: [String(currentYear - 1)] }) : [];
      const trendRowsRaw = eurostatRows(trendData, { ...selections, flows: [EUROSTAT_FLOW_CODES.export, EUROSTAT_FLOW_CODES.import], years: trendYears });
      const productRows = productData?.error ? [] : eurostatRows(productData, { ...selections, products: EUROSTAT_PRODUCT_CODES, flows: [EUROSTAT_FLOW_CODES[flow.value]], years: [selectedYear] });
      const partnerRows = partnerData?.error || !partnerData ? [] : eurostatRows(partnerData, { ...selections, partners: eurostatDimensionCodes(partnerData, "partner"), products: [selections.product], flows: [EUROSTAT_FLOW_CODES.export, EUROSTAT_FLOW_CODES.import], years: [selectedYear] });
      const exports = currentRows.find((row) => row.flow === "export");
      const imports = currentRows.find((row) => row.flow === "import");
      const selectedCurrent = currentRows.find((row) => row.flow === flow.value);
      const selectedPrevious = previousRows.find((row) => row.flow === flow.value);
      const yoy = eurostatPercent(selectedCurrent?.value, selectedPrevious?.value);
      const reporterLabel = selectOptionLabel(EUROSTAT_REPORTERS, selections.reporter, lang);
      const partnerLabel = selectOptionLabel(EUROSTAT_PARTNERS, selections.partner, lang);
      const productLabel = selectOptionLabel(EUROSTAT_PRODUCTS, selections.product, lang);
      const context = { lang, reporterLabel, partnerLabel, partner: selections.partner, product: selections.product, productLabel, year: selectedYear };
      const flowLabel = euDirectionLabel(context, flow.value);
      const trendRows = trendYears.map((trendYear) => ({
        year: trendYear,
        exportValue: trendRowsRaw.find((row) => row.year === trendYear && row.flow === "export")?.value,
        importValue: trendRowsRaw.find((row) => row.year === trendYear && row.flow === "import")?.value
      }));
      const topProduct = productRows.filter((row) => Number.isFinite(row.value)).sort((a, b) => b.value - a.value)[0];
      const selectedTotalValue = selectedCurrent?.value;
      const detailedRows = [...currentRows, ...previousRows, ...trendRowsRaw, ...productRows].filter((row, index, rows) => rows.findIndex((item) => item.reporter === row.reporter && item.partner === row.partner && item.product === row.product && item.flow === row.flow && item.year === row.year) === index);
      output.innerHTML = `
        <section class="eu-result-header">
          ${eurostatReporterFlag(selections.reporter)}
          <div><span class="kicker">${EUROSTAT_DATASET}</span><h2>${escapeHtml(euTradeOverviewTitle(context))}</h2><p>${escapeHtml(partnerLabel)} · ${escapeHtml(productLabel)} · ${escapeHtml(selectedYear)}</p></div>
        </section>
        <section class="eu-kpi-grid">
          <article><span>${lang === "ko" ? "수출" : "Exports"}</span><strong>${eurostatValueLabel(exports?.value)}</strong><small>${escapeHtml(euDirectionLabel(context, "export"))} · ${selectedYear}</small></article>
          <article><span>${lang === "ko" ? "수입" : "Imports"}</span><strong>${eurostatValueLabel(imports?.value)}</strong><small>${escapeHtml(euDirectionLabel(context, "import"))} · ${selectedYear}</small></article>
          <article><span>${lang === "ko" ? "무역수지" : "Trade Balance"}</span><strong>${Number.isFinite(exports?.value) && Number.isFinite(imports?.value) ? eurostatValueLabel(exports.value - imports.value) : "N/A"}</strong><small>${lang === "ko" ? "수출 - 수입" : "Exports - Imports"}</small></article>
          <article><span>${flowLabel} YoY</span><strong>${yoy === null ? "N/A" : `${yoy >= 0 ? "+" : ""}${formatRate(yoy, 1)}%`}</strong><small>${currentYear - 1} → ${selectedYear}</small></article>
        </section>
        ${euTradeSnapshotMarkup({ ...context, exports, imports, selectedCurrent, selectedPrevious, flowLabel, topProduct: topProduct ? { ...topProduct, label: selectOptionLabel(EUROSTAT_PRODUCTS, topProduct.product, lang) } : null, selectedTotalValue })}
        ${euLineChartMarkup(trendRows)}
        ${euComparisonMarkup(exports, imports)}
        ${euProductBreakdownMarkup(productRows, flow.value, selectedTotalValue)}
        ${selections.partner === "WORLD" ? euMajorTradePartnersMarkup(partnerRows, partnerData, currentRows) : ""}
        ${euDetailedDataMarkup(detailedRows, { reporter: reporterLabel })}
        ${euDataClassificationMarkup({ year: selectedYear, updated: currentData.updated })}
        ${euRelatedToolsMarkup(selections.reporter, selections.partner)}
      `;
      refreshIcons();
    } catch (error) {
      console.warn("Eurostat trade unavailable:", error);
      dataError(output, labels.unavailable);
    }
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = new URL(location.href);
    ["reporter", "partner", "product", "year", "flow"].forEach((name) => {
      const field = form.querySelector(`[name='${name}']`);
      if (field?.value) url.searchParams.set(name, field.value); else url.searchParams.delete(name);
    });
    history.pushState(null, "", url);
    render();
  });
  window.addEventListener("popstate", () => {
    const next = new URLSearchParams(location.search);
    ["reporter", "partner", "product", "year", "flow"].forEach((name) => {
      const field = form.querySelector(`[name='${name}']`);
      let value = next.get(name);
      if (name === "product" && EUROSTAT_PRODUCT_PARAM_ALIASES[value]) value = EUROSTAT_PRODUCT_PARAM_ALIASES[value];
      if (field && value && [...field.options].some((option) => option.value === value)) field.value = value;
    });
    form.querySelectorAll("select").forEach((select) => select.dispatchEvent(new Event("change")));
    render();
  });
  render();
}
const GLOBAL_TRADE_ENDPOINT = "https://us-central1-logilee-cms.cloudfunctions.net/globalTradeExplorer";
const GLOBAL_TRADE_YEARS = Array.from({ length: 16 }, (_, index) => String(2025 - index));
const GLOBAL_HS_REFERENCE_URL = logileeAssetUrl("comtrade-hs-reference.json");
const GLOBAL_HS_POPULAR_CODES = ["2613", "8504", "8703", "8708", "9403", "8542", "2710", "3004", "8471", "6204"];
const GLOBAL_HS_FALLBACK_OPTIONS = [
  { code: "2613", desc: "Molybdenum ores and concentrates", level: 4, unit: "kg" },
  { code: "8504", desc: "Electrical transformers, static converters and inductors", level: 4, unit: "u" },
  { code: "8703", desc: "Motor cars and other motor vehicles", level: 4, unit: "u" },
  { code: "9403", desc: "Furniture and parts thereof, n.e.c. in chapter 94", level: 4, unit: "u" }
];
let globalHsReferencePromise = null;
let globalHsReferenceItems = GLOBAL_HS_FALLBACK_OPTIONS;

function globalTradeValueLabel(value, { compact = true } = {}) {
  if (!Number.isFinite(value)) return "N/A";
  if (!compact) return `USD ${formatRate(value, 0)}`;
  const abs = Math.abs(value);
  if (abs >= 1000000000000) return `US$ ${formatRate(value / 1000000000000, 2)}T`;
  if (abs >= 1000000000) return `US$ ${formatRate(value / 1000000000, 1)}B`;
  if (abs >= 1000000) return `US$ ${formatRate(value / 1000000, 1)}M`;
  if (abs >= 1000) return `US$ ${formatRate(value / 1000, 1)}K`;
  return `US$ ${formatRate(value, 0)}`;
}

function globalFlowLabel(flow, lang = currentLang()) {
  return flow === "import" ? (lang === "ko" ? "수입" : "Import") : (lang === "ko" ? "수출" : "Export");
}

function globalDirectionLabel(context, flow) {
  const lang = currentLang();
  if (context.partner === "WORLD") return flow === "export"
    ? (lang === "ko" ? "전 세계 대상 수출" : "Exports to world")
    : (lang === "ko" ? "전 세계발 수입" : "Imports from world");
  return flow === "export"
    ? (lang === "ko" ? `${context.partnerLabel} 대상 수출` : `Exports to ${context.partnerLabel}`)
    : (lang === "ko" ? `${context.partnerLabel}발 수입` : `Imports from ${context.partnerLabel}`);
}

function globalReporterFlag(code) {
  return /^[A-Z]{2}$/.test(code) ? `<img class="eu-reporter-flag" src="https://flagcdn.com/${code.toLowerCase()}.svg" alt="" loading="lazy">` : `<span class="eu-reporter-flag global-world-flag">World</span>`;
}

function normalizeGlobalHsCode(value) {
  return String(value || "").trim().replace(/\D/g, "");
}

function validGlobalHsCode(value) {
  return /^(?:\d{2}|\d{4}|\d{6})$/.test(String(value || ""));
}

function globalHsLevelLabel(code, lang = currentLang()) {
  const length = String(code || "").length;
  if (length === 2) return lang === "ko" ? "HS 2-digit Chapter" : "HS 2-digit Chapter";
  if (length === 4) return lang === "ko" ? "HS 4-digit Heading" : "HS 4-digit Heading";
  if (length === 6) return lang === "ko" ? "HS 6-digit Subheading" : "HS 6-digit Subheading";
  return lang === "ko" ? "HS Code" : "HS Code";
}

async function loadGlobalHsReference() {
  if (globalHsReferencePromise) return globalHsReferencePromise;
  globalHsReferencePromise = fetchWithTimeout(GLOBAL_HS_REFERENCE_URL, { cache: "force-cache" }, 15000)
    .then((response) => {
      if (!response.ok) throw new Error(`HS reference ${response.status}`);
      return response.json();
    })
    .then((rows) => {
      const items = Array.isArray(rows) ? rows
        .map((row) => ({
          code: normalizeGlobalHsCode(row.code),
          desc: String(row.desc || "").trim(),
          level: Number(row.level) || String(row.code || "").length,
          unit: String(row.unit || "").trim()
        }))
        .filter((row) => validGlobalHsCode(row.code)) : [];
      if (items.length) globalHsReferenceItems = items;
      return globalHsReferenceItems;
    })
    .catch((error) => {
      console.warn("HS reference unavailable:", error);
      return globalHsReferenceItems;
    });
  return globalHsReferencePromise;
}

function findGlobalHsItem(code) {
  const normalized = normalizeGlobalHsCode(code);
  return globalHsReferenceItems.find((item) => item.code === normalized) || null;
}

function globalHsLabel(hs, lang = currentLang()) {
  const code = normalizeGlobalHsCode(hs);
  const item = findGlobalHsItem(code);
  if (item?.desc) return item.desc;
  return lang === "ko" ? `HS ${code} 품목명 없음` : `HS ${code} description unavailable`;
}

function parseGlobalHsInput(value) {
  const raw = String(value || "").trim();
  const leading = raw.match(/^(\d{6}|\d{4}|\d{2})(?=\D|$)/);
  if (leading) return normalizeGlobalHsCode(leading[1]);
  const digits = normalizeGlobalHsCode(raw);
  return digits.length > 6 ? digits.slice(0, 6) : digits;
}
function globalHsSearchItems(items, rawQuery, labels) {
  const query = normalizeCountrySearch(rawQuery);
  const compactQuery = compactCountrySearch(query);
  const codeQuery = normalizeGlobalHsCode(rawQuery);
  const ranked = [];
  const push = (item, score) => ranked.push({ ...item, score });
  const base = query || codeQuery ? items : GLOBAL_HS_POPULAR_CODES.map((code) => findGlobalHsItem(code)).filter(Boolean);
  base.forEach((item) => {
    const desc = normalizeCountrySearch(item.desc);
    const compactDesc = compactCountrySearch(desc);
    let score = -1;
    if (codeQuery && item.code === codeQuery) score = 1000;
    else if (codeQuery && item.code.startsWith(codeQuery)) score = 900 - item.code.length;
    else if (query && desc === query) score = 820;
    else if (query && desc.split(/\W+/).includes(query)) score = 760;
    else if (query && (desc.includes(query) || compactDesc.includes(compactQuery))) score = 650;
    else if (!query && !codeQuery) score = 500;
    if (score >= 0) push(item, score);
  });
  const hasExact = codeQuery && ranked.some((item) => item.code === codeQuery);
  if (validGlobalHsCode(codeQuery) && !hasExact) {
    ranked.push({ code: codeQuery, desc: labels.direct(codeQuery), level: codeQuery.length, unit: "", score: 1100, direct: true });
  }
  return ranked
    .sort((a, b) => b.score - a.score || a.code.length - b.code.length || a.code.localeCompare(b.code))
    .slice(0, 40);
}

function enhanceGlobalHsCombobox(select, items, labels) {
  if (!select || select.dataset.globalHsComboboxReady === "true") return;
  const id = `global-hs-combobox-${Math.random().toString(36).slice(2, 9)}`;
  const listId = `${id}-list`;
  const wrap = document.createElement("div");
  wrap.className = "country-combobox simple-combobox global-hs-combobox";
  wrap.innerHTML = `
    <label class="sr-only" for="${id}">${labels.label}</label>
    <div class="country-combobox-control">
      <i data-lucide="search"></i>
      <input id="${id}" type="text" autocomplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="${listId}" aria-label="${labels.label}" placeholder="${labels.placeholder}">
      <button type="button" aria-label="${labels.open}"><i data-lucide="chevron-down"></i></button>
    </div>
    <div class="country-combobox-list" id="${listId}" role="listbox"></div>
  `;
  select.classList.add("visually-hidden-select");
  select.setAttribute("tabindex", "-1");
  select.setAttribute("aria-hidden", "true");
  select.parentElement?.appendChild(wrap);
  select.dataset.globalHsComboboxReady = "true";
  const input = wrap.querySelector("input");
  const button = wrap.querySelector("button");
  const list = wrap.querySelector(".country-combobox-list");
  let matches = [];
  let activeIndex = -1;
  let open = false;
  const ensureOption = (code) => {
    const normalized = normalizeGlobalHsCode(code);
    if (!validGlobalHsCode(normalized)) return "";
    let option = [...select.options].find((item) => item.value === normalized);
    if (!option) {
      option = document.createElement("option");
      option.value = normalized;
      option.textContent = normalized;
      select.appendChild(option);
    }
    select.value = normalized;
    return normalized;
  };
  const setInput = () => {
    const code = normalizeGlobalHsCode(select.value);
    const item = findGlobalHsItem(code);
    input.value = code ? `${code}${item?.desc ? ` - ${item.desc}` : ""}` : "";
  };
  const commit = () => {
    const code = parseGlobalHsInput(input.value || select.value);
    if (!validGlobalHsCode(code)) return "";
    ensureOption(code);
    select.dispatchEvent(new Event("change", { bubbles: true }));
    setInput();
    return code;
  };
  select.globalHsCommit = commit;
  select.globalHsRawCode = () => parseGlobalHsInput(input.value || select.value);
  const render = () => {
    list.innerHTML = matches.length ? matches.map((item, index) => `<button type="button" role="option" id="${listId}-${escapeAttribute(item.code)}" data-hs-option="${escapeAttribute(item.code)}" aria-selected="${index === activeIndex}"><span><strong>${escapeHtml(item.code)}</strong> — ${escapeHtml(item.desc || labels.noDescription)}</span><small>${escapeHtml(globalHsLevelLabel(item.code))}${item.direct ? ` · ${escapeHtml(labels.directBadge)}` : ""}</small></button>`).join("") : `<div class="country-combobox-empty">${escapeHtml(labels.empty)}</div>`;
    input.setAttribute("aria-activedescendant", activeIndex >= 0 && matches[activeIndex] ? `${listId}-${matches[activeIndex].code}` : "");
  };
  const filter = () => {
    matches = globalHsSearchItems(items, input.value, labels);
    activeIndex = matches.length ? 0 : -1;
    render();
  };
  const show = () => { open = true; wrap.classList.add("is-open"); input.setAttribute("aria-expanded", "true"); filter(); };
  const close = (commitInput = true) => { if (commitInput) commit(); open = false; wrap.classList.remove("is-open"); input.setAttribute("aria-expanded", "false"); input.removeAttribute("aria-activedescendant"); setInput(); };
  const choose = (value) => { if (!value) return; ensureOption(value); select.dispatchEvent(new Event("change", { bubbles: true })); setInput(); close(false); };
  ensureOption(select.value || "2613");
  setInput();
  input.addEventListener("focus", show);
  input.addEventListener("input", show);
  button.addEventListener("click", () => open ? close() : (input.focus(), show()));
  list.addEventListener("mousedown", (event) => event.preventDefault());
  list.addEventListener("click", (event) => { const option = event.target.closest("[data-hs-option]"); if (option) choose(option.dataset.hsOption); });
  input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") { event.preventDefault(); if (!open) show(); else activeIndex = Math.min(activeIndex + 1, matches.length - 1); render(); }
    else if (event.key === "ArrowUp") { event.preventDefault(); if (!open) show(); else activeIndex = Math.max(activeIndex - 1, 0); render(); }
    else if (event.key === "Enter") { event.preventDefault(); if (!open) show(); else if (matches[activeIndex]) choose(matches[activeIndex].code); else commit(); select.form?.requestSubmit(); }
    else if (event.key === "Escape") { event.preventDefault(); close(false); }
  });
  document.addEventListener("click", (event) => { if (!wrap.contains(event.target)) close(); });
  select.addEventListener("change", setInput);
}

function globalTradeSnapshotMarkup(data, context) {
  const lang = currentLang();
  const rows = [];
  const exportsValue = data.current?.exportValue;
  const importsValue = data.current?.importValue;
  if (Number.isFinite(exportsValue)) rows.push(lang === "ko"
    ? `${context.year}년 ${context.reporterLabel}의 ${context.partnerLabel} 대상 HS ${context.hs} 수출은 ${globalTradeValueLabel(exportsValue)}입니다.`
    : `${context.reporterLabel}'s HS ${context.hs} exports to ${context.partnerLabel} in ${context.year} were ${globalTradeValueLabel(exportsValue)}.`);
  if (Number.isFinite(importsValue)) rows.push(lang === "ko"
    ? `${context.year}년 ${context.partnerLabel}발 HS ${context.hs} 수입은 ${globalTradeValueLabel(importsValue)}입니다.`
    : `${context.reporterLabel}'s HS ${context.hs} imports from ${context.partnerLabel} in ${context.year} were ${globalTradeValueLabel(importsValue)}.`);
  if (Number.isFinite(data.current?.tradeBalance)) rows.push(lang === "ko"
    ? `무역수지는 ${globalTradeValueLabel(Math.abs(data.current.tradeBalance))} ${data.current.tradeBalance >= 0 ? "흑자" : "적자"}입니다.`
    : `The trade balance is a ${globalTradeValueLabel(Math.abs(data.current.tradeBalance))} ${data.current.tradeBalance >= 0 ? "surplus" : "deficit"}.`);
  if (Number.isFinite(data.yoy?.value)) rows.push(lang === "ko"
    ? `${globalFlowLabel(data.yoy.flow, lang)}은 전년 대비 ${data.yoy.value >= 0 ? "+" : ""}${formatRate(data.yoy.value, 1)}%입니다.`
    : `${globalFlowLabel(data.yoy.flow, lang)} changed ${data.yoy.value >= 0 ? "+" : ""}${formatRate(data.yoy.value, 1)}% from the previous year.`);
  return `<section class="eu-dashboard-section eu-trade-snapshot"><h2>${lang === "ko" ? "무역 스냅샷" : "Trade Snapshot"}</h2>${rows.length ? `<ul>${rows.map((row) => `<li>${escapeHtml(row)}</li>`).join("")}</ul>` : `<div class="data-empty">${lang === "ko" ? "계산 가능한 거래 요약이 없습니다. 선택 조건에 대한 UN Comtrade 데이터가 없을 수 있습니다." : "No calculated trade snapshot is available. UN Comtrade may not have data for this selection."}</div>`}</section>`;
}

function globalLineChartMarkup(trendRows) {
  const lang = currentLang();
  const rows = (trendRows || []).filter((row) => Number.isFinite(row.exportValue) || Number.isFinite(row.importValue));
  if (!rows.length) return `<section class="eu-dashboard-section"><h2>${lang === "ko" ? "최근 5개년 수출입 추이" : "5-Year Export / Import Trend"}</h2><div class="data-empty">${lang === "ko" ? "최근 추이 데이터를 표시할 수 없습니다." : "Trend data is unavailable for this selection."}</div></section>`;
  const width = 640;
  const height = 250;
  const pad = { left: 72, right: 18, top: 24, bottom: 34 };
  const values = rows.flatMap((row) => [row.exportValue, row.importValue]).filter(Number.isFinite);
  const ticks = eurostatNiceTicks(Math.max(...values, 1), 4);
  const max = Math.max(...ticks, 1);
  const x = (index) => rows.length === 1 ? width / 2 : pad.left + (index * (width - pad.left - pad.right)) / (rows.length - 1);
  const y = (value) => pad.top + (1 - value / max) * (height - pad.top - pad.bottom);
  const line = (key) => rows.map((row, index) => Number.isFinite(row[key]) ? `${x(index)},${y(row[key])}` : "").filter(Boolean).join(" ");
  return `<section class="eu-dashboard-section eu-chart-section eu-primary-section"><div class="section-head"><h2>${lang === "ko" ? "최근 5개년 수출입 추이" : "5-Year Export / Import Trend"}</h2><span>USD</span></div><svg class="eu-line-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="5-year export and import trend">${ticks.map((tick) => `<g><line x1="${pad.left}" y1="${y(tick)}" x2="${width - pad.right}" y2="${y(tick)}" /><text x="8" y="${y(tick) + 4}">${escapeHtml(globalTradeValueLabel(tick))}</text></g>`).join("")}<line x1="${pad.left}" y1="${height - pad.bottom}" x2="${width - pad.right}" y2="${height - pad.bottom}" /><line x1="${pad.left}" y1="${pad.top}" x2="${pad.left}" y2="${height - pad.bottom}" /><polyline class="export-line" points="${line("exportValue")}" /><polyline class="import-line" points="${line("importValue")}" />${rows.map((row, index) => `<g><text x="${x(index)}" y="${height - 10}" text-anchor="middle">${escapeHtml(row.year)}</text>${Number.isFinite(row.exportValue) ? `<circle class="export-dot" cx="${x(index)}" cy="${y(row.exportValue)}" r="4"><title>${row.year} Export: ${globalTradeValueLabel(row.exportValue, { compact: false })}</title></circle>` : ""}${Number.isFinite(row.importValue) ? `<circle class="import-dot" cx="${x(index)}" cy="${y(row.importValue)}" r="4"><title>${row.year} Import: ${globalTradeValueLabel(row.importValue, { compact: false })}</title></circle>` : ""}</g>`).join("")}</svg><div class="eu-chart-legend"><span class="export-line-key">${lang === "ko" ? "수출" : "Export"}</span><span class="import-line-key">${lang === "ko" ? "수입" : "Import"}</span></div></section>`;
}

function globalComparisonMarkup(data) {
  const lang = currentLang();
  const exportsValue = data.current?.exportValue;
  const importsValue = data.current?.importValue;
  if (!Number.isFinite(exportsValue) && !Number.isFinite(importsValue)) return `<section class="eu-dashboard-section eu-comparison-section eu-primary-section"><h2>${lang === "ko" ? "수출입 비교" : "Export vs Import"}</h2><div class="data-empty">${lang === "ko" ? "선택 연도의 수출입 비교 데이터를 표시할 수 없습니다." : "Export/import comparison data is unavailable for the selected year."}</div></section>`;
  const max = Math.max(Number.isFinite(exportsValue) ? exportsValue : 0, Number.isFinite(importsValue) ? importsValue : 0, 1);
  const bars = [[lang === "ko" ? "수출" : "Export", exportsValue, "export"], [lang === "ko" ? "수입" : "Import", importsValue, "import"]];
  return `<section class="eu-dashboard-section eu-comparison-section eu-primary-section"><h2>${lang === "ko" ? "수출입 비교" : "Export vs Import"}</h2><div class="eu-bar-compare">${bars.map(([label, value, type]) => `<div><span>${label}</span><div class="eu-bar-track"><b class="${type}" style="width:${Number.isFinite(value) ? Math.max(2, (value / max) * 100) : 0}%"></b></div><strong>${globalTradeValueLabel(value)}</strong></div>`).join("")}</div></section>`;
}

function globalDetailedDataMarkup(data, context) {
  const lang = currentLang();
  const rows = [...(data.rows || [])].sort((a, b) => Number(b.year) - Number(a.year) || (a.flow === "export" ? -1 : 1));
  const headers = ["Reporter", "Partner", "HS", "Product", "Flow", "Year", "Trade Value", "Quantity", "Net Weight", "Source"];
  const years = rows.map((row) => row.year).filter(Boolean).sort();
  const helper = `UN Comtrade · ${years[0] || context.year}${years.length > 1 ? `-${years[years.length - 1]}` : ""} · USD`;
  return `<details class="eu-dashboard-section eu-detail-disclosure"><summary><span><strong>${lang === "ko" ? "원데이터 보기" : "View Detailed Data"}</strong><small>${escapeHtml(helper)}</small></span><b aria-hidden="true"></b></summary><div class="responsive-table"><table class="result-table eu-detail-table"><thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr><td>${escapeHtml(context.reporterLabel)}</td><td>${escapeHtml(context.partnerLabel)}</td><td>${escapeHtml(context.hs)}</td><td>${escapeHtml(context.hsLabel)}</td><td>${globalFlowLabel(row.flow, lang)}</td><td>${escapeHtml(row.year)}</td><td>${Number.isFinite(row.value) ? escapeHtml(globalTradeValueLabel(row.value, { compact: false })) : "N/A"}</td><td>${Number.isFinite(row.quantity) ? escapeHtml(`${formatRate(row.quantity, 0)} ${row.quantityUnit || ""}`.trim()) : "N/A"}</td><td>${Number.isFinite(row.netWeight) ? escapeHtml(`${formatRate(row.netWeight, 0)} kg`) : "N/A"}</td><td>UN Comtrade</td></tr>`).join("")}</tbody></table></div></details>`;
}

function globalDataClassificationMarkup(data, context) {
  const lang = currentLang();
  const meta = data.metadata || {};
  const rows = lang === "ko"
    ? [["데이터 출처", "UN Comtrade"], ["Dataset/API", meta.api || "data/v1/get/C/A/HS"], ["품목 분류", meta.classification || "HS combined annual data"], ["선택 HS Level", globalHsLevelLabel(context.hs, lang)], ["HS Reference", "UN Comtrade HS combined reference"], ["통화 / 단위", "USD"], ["기준 연도", context.year], ["Cache", data.cache?.hit ? "hit" : "miss"]]
    : [["Data Source", "UN Comtrade"], ["Dataset/API", meta.api || "data/v1/get/C/A/HS"], ["Classification", meta.classification || "HS combined annual data"], ["Selected HS Level", globalHsLevelLabel(context.hs, lang)], ["HS Reference", "UN Comtrade HS combined reference"], ["Currency / Unit", "USD"], ["Reference Year", context.year], ["Cache", data.cache?.hit ? "hit" : "miss"]];
  const note = lang === "ko" ? "품목명은 UN Comtrade HS combined reference를 기준으로 표시합니다. 과거 연도 데이터는 HS 개정에 따라 품목 정의가 달라질 수 있으므로 원자료 확인이 필요합니다." : "Descriptions use the UN Comtrade HS combined reference. Historical data can reflect different HS revisions, so confirm commodity definitions in the source when filing or auditing.";
  return `<section class="eu-dashboard-section eu-classification"><h2>${lang === "ko" ? "데이터 및 분류" : "Data & Classification"}</h2><dl>${rows.map(([label, value]) => `<div><dt>${label}</dt><dd>${escapeHtml(String(value))}</dd></div>`).join("")}</dl><p class="muted">${escapeHtml(note)}</p></section>`;
}

function globalRelatedToolsMarkup(context) {
  const lang = currentLang();
  const currencyHref = euCurrencyConverterHref(context.reporter, context.partner);
  const euCodes = new Set(EUROSTAT_REPORTERS.map(([code]) => code));
  const tools = lang === "ko"
    ? [["국가 무역 프로필", `country-trade-profile.html?country=${context.reporter}`, "globe"], ["무역 공휴일", `holidays.html?country=${context.reporter}`, "calendar-check"], ["주요 항만", `ports.html?country=${context.reporter}`, "anchor"], ["HS Code 검색", "../hscode.html", "barcode"], ["환율 계산기", currencyHref, "badge-dollar-sign"]]
    : [["Country Trade Profile", `country-trade-profile.html?country=${context.reporter}`, "globe"], ["Trade Holidays", `holidays.html?country=${context.reporter}`, "calendar-check"], ["Major Ports", `ports.html?country=${context.reporter}`, "anchor"], ["HS Code Search", "../hscode-en.html", "barcode"], ["Currency Converter", currencyHref, "badge-dollar-sign"]];
  if (euCodes.has(context.reporter)) tools.push(lang === "ko" ? ["EU 무역 통계", `eu-trade-explorer.html?reporter=${context.reporter}`, "chart-column"] : ["EU Trade Explorer", `eu-trade-explorer.html?reporter=${context.reporter}`, "chart-column"]);
  return `<section class="eu-dashboard-section"><h2>${lang === "ko" ? "관련 무역 도구" : "Related Trade Tools"}</h2><div class="country-tool-grid eu-tool-grid">${tools.map(([label, href, icon]) => `<a href="${href}"><i data-lucide="${icon}"></i><strong>${escapeHtml(label)}</strong></a>`).join("")}</div></section>`;
}

function renderGlobalTradeDashboard(output, data) {
  const lang = currentLang();
  const query = data.query || {};
  const context = { reporter: query.reporter, partner: query.partner, hs: query.hs, year: query.year, flow: query.flow, reporterLabel: displayCountryName(query.reporter, lang), partnerLabel: query.partner === "WORLD" ? (lang === "ko" ? "전 세계" : "World") : displayCountryName(query.partner, lang), hsLabel: globalHsLabel(query.hs, lang) };
  const selectedFlow = globalFlowLabel(query.flow, lang);
  output.innerHTML = `<section class="eu-result-header">${globalReporterFlag(context.reporter)}<div><h2>${escapeHtml(context.reporterLabel)} → ${escapeHtml(context.partnerLabel)} HS ${escapeHtml(context.hs)} ${lang === "ko" ? "무역 개요" : "Trade Overview"}</h2><p>${escapeHtml(context.hsLabel)} · ${escapeHtml(context.year)}</p></div></section><section class="eu-kpi-grid"><article><span>${lang === "ko" ? "수출" : "Exports"}</span><strong>${globalTradeValueLabel(data.current?.exportValue)}</strong><small>${escapeHtml(globalDirectionLabel(context, "export"))}</small></article><article><span>${lang === "ko" ? "수입" : "Imports"}</span><strong>${globalTradeValueLabel(data.current?.importValue)}</strong><small>${escapeHtml(globalDirectionLabel(context, "import"))}</small></article><article><span>${lang === "ko" ? "무역수지" : "Trade Balance"}</span><strong>${globalTradeValueLabel(data.current?.tradeBalance)}</strong><small>${lang === "ko" ? "수출 - 수입" : "Exports - Imports"}</small></article><article><span>${selectedFlow} YoY</span><strong>${Number.isFinite(data.yoy?.value) ? `${data.yoy.value >= 0 ? "+" : ""}${formatRate(data.yoy.value, 1)}%` : "N/A"}</strong><small>${escapeHtml(`${data.yoy?.previousYear || Number(context.year) - 1} → ${context.year}`)}</small></article></section>${globalTradeSnapshotMarkup(data, context)}${globalLineChartMarkup(data.trend)}${globalComparisonMarkup(data)}${globalDetailedDataMarkup(data, context)}${globalDataClassificationMarkup(data, context)}${globalRelatedToolsMarkup(context)}`;
  refreshIcons();
}

function globalTradeErrorMarkup(error, status) {
  const lang = currentLang();
  const messages = { invalid_hs: lang === "ko" ? "HS Code는 2, 4, 6자리 숫자로 입력하세요." : "Enter a 2, 4, or 6 digit HS code.", invalid_year: lang === "ko" ? "지원되는 연도를 선택하세요." : "Select a supported year.", unsupported_reporter: lang === "ko" ? "UN Comtrade annual HS 데이터에서 지원되지 않는 Reporter입니다." : "This reporter is not supported for UN Comtrade annual HS data.", unsupported_partner: lang === "ko" ? "UN Comtrade annual HS 데이터에서 지원되지 않는 Partner입니다." : "This partner is not supported for UN Comtrade annual HS data.", backend_not_configured: lang === "ko" ? "Global Trade 데이터 백엔드 설정이 아직 완료되지 않았습니다." : "The Global Trade data backend is not fully configured yet.", rate_limited: lang === "ko" ? "UN Comtrade 요청 한도에 도달했습니다. 잠시 후 다시 시도하세요." : "UN Comtrade is rate limited. Please try again later.", upstream_unavailable: lang === "ko" ? "UN Comtrade 데이터를 일시적으로 불러올 수 없습니다." : "UN Comtrade data is temporarily unavailable." };
  return `<div class="data-empty">${escapeHtml(messages[error] || (status === 404 ? (lang === "ko" ? "선택 조건의 데이터가 없습니다." : "No data is available for this selection.") : messages.upstream_unavailable))}</div>`;
}

async function fetchGlobalTrade(selected) {
  const url = new URL(GLOBAL_TRADE_ENDPOINT);
  Object.entries(selected).forEach(([key, value]) => url.searchParams.set(key, value));
  const response = await fetchWithTimeout(url.toString(), { cache: "no-store" }, 45000);
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data?.error || `API ${response.status}`);
    error.status = response.status;
    error.code = data?.error || "";
    throw error;
  }
  return data;
}

async function wireTradeExplorerParams() {
  const form = document.querySelector("[data-trade-explorer-form]");
  if (!form) return;
  const params = new URLSearchParams(location.search);
  const lang = currentLang();
  const reporter = form.querySelector("[name='reporter']");
  const partner = form.querySelector("[name='partner']");
  const hs = form.querySelector("[name='hs']");
  const year = form.querySelector("[name='year']");
  const flow = form.querySelector("[name='flow']");
  const output = document.querySelector("[data-trade-explorer-output]");
  const hsReference = await loadGlobalHsReference();
  const countryItems = TRADE_COUNTRIES.map(([value, en, ko]) => ({ value, label: lang === "ko" ? ko : en, meta: `${value} · ${en}`, terms: [value, en, ko, ...(COUNTRY_SEARCH_ALIASES[value] || [])].map(normalizeCountrySearch) }));
  const partnerItems = [{ value: "WORLD", label: lang === "ko" ? "전 세계" : "World", meta: "World aggregate", terms: ["world", "전세계", "전 세계", "global"].map(normalizeCountrySearch) }, ...countryItems];
  const setHsValue = (value) => {
    const code = normalizeGlobalHsCode(value) || "2613";
    hs.innerHTML = `<option value="${escapeAttribute(code)}">${escapeHtml(code)}</option>`;
    hs.value = code;
  };
  reporter.innerHTML = optionMarkup(TRADE_COUNTRIES);
  partner.innerHTML = `<option value="WORLD">${lang === "ko" ? "전 세계" : "World"}</option>${optionMarkup(TRADE_COUNTRIES)}`;
  setHsValue(params.get("hs") || "2613");
  year.innerHTML = GLOBAL_TRADE_YEARS.map((item) => `<option value="${item}">${item}</option>`).join("");
  reporter.value = "KR";
  partner.value = "US";
  year.value = GLOBAL_TRADE_YEARS[0];
  flow.value = "export";
  ["reporter", "partner", "year", "flow"].forEach((name) => { const field = form.querySelector(`[name='${name}']`); const value = params.get(name); if (value) field.value = name === "partner" || name === "reporter" ? value.toUpperCase() : value; });
  enhanceSimpleCombobox(reporter, countryItems, lang === "ko" ? { label: "Reporter 선택", placeholder: "Reporter 국가 검색...", open: "Reporter 목록 열기", empty: "일치하는 reporter가 없습니다." } : { label: "Select reporter", placeholder: "Search reporter country...", open: "Open reporter list", empty: "No matching reporter." });
  enhanceSimpleCombobox(partner, partnerItems, lang === "ko" ? { label: "Partner 선택", placeholder: "Partner 또는 World 검색...", open: "Partner 목록 열기", empty: "일치하는 partner가 없습니다." } : { label: "Select partner", placeholder: "Search partner or World...", open: "Open partner list", empty: "No matching partner." });
  enhanceGlobalHsCombobox(hs, hsReference, lang === "ko" ? { label: "HS Code 선택", placeholder: "HS Code 또는 품목명 검색", open: "HS 목록 열기", empty: "검색 결과가 없습니다. 2, 4, 6자리 HS Code는 직접 입력해 조회할 수 있습니다.", direct: (code) => `HS ${code}로 직접 조회`, directBadge: "직접 입력", noDescription: "품목명 없음" } : { label: "Select HS code", placeholder: "Search HS code or product", open: "Open HS list", empty: "No results. You can directly enter a 2, 4, or 6 digit HS code.", direct: (code) => `Search directly with HS ${code}`, directBadge: "direct entry", noDescription: "description unavailable" });
  const render = async () => {
    const hsInputCode = typeof hs.globalHsRawCode === "function" ? hs.globalHsRawCode() : normalizeGlobalHsCode(hs.value);
    if (validGlobalHsCode(hsInputCode) && typeof hs.globalHsCommit === "function") hs.globalHsCommit();
    const selected = { reporter: reporter.value, partner: partner.value, hs: hsInputCode, year: year.value, flow: flow.value };
    const localError = !/^[A-Z]{2}$/.test(selected.reporter) ? "unsupported_reporter" : !/^(WORLD|[A-Z]{2})$/.test(selected.partner) ? "unsupported_partner" : !validGlobalHsCode(selected.hs) ? "invalid_hs" : !GLOBAL_TRADE_YEARS.includes(selected.year) ? "invalid_year" : "";
    if (localError) { output.innerHTML = globalTradeErrorMarkup(localError, 400); return; }
    output.innerHTML = `<div class="data-empty">${lang === "ko" ? "UN Comtrade 데이터를 조회하는 중입니다..." : "Loading UN Comtrade data..."}</div>`;
    try { renderGlobalTradeDashboard(output, await fetchGlobalTrade(selected)); }
    catch (error) { output.innerHTML = globalTradeErrorMarkup(error.code, error.status); }
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const hsInputCode = typeof hs.globalHsRawCode === "function" ? hs.globalHsRawCode() : normalizeGlobalHsCode(hs.value);
    if (validGlobalHsCode(hsInputCode) && typeof hs.globalHsCommit === "function") hs.globalHsCommit();
    const url = new URL(location.href);
    ["reporter", "partner", "year", "flow"].forEach((name) => { const field = form.querySelector(`[name='${name}']`); if (field.value) url.searchParams.set(name, field.value); else url.searchParams.delete(name); });
    if (hsInputCode) url.searchParams.set("hs", hsInputCode); else url.searchParams.delete("hs");
    history.replaceState(null, "", url);
    render();
  });
  if (params.get("hs")) render();
}

const HS_TARIFF_ENDPOINT = "https://us-central1-logilee-cms.cloudfunctions.net/hsTariffLookup";
const HS_TARIFF_SOURCES = {
  KR: { name: "Korea Customs Service Tariff", status: "official-link", url: "https://www.customs.go.kr/english/ad/ct/CustomsTariffList.do" },
  US: { name: "HTSUS", status: "searchable", url: "https://hts.usitc.gov/", api: "https://hts.usitc.gov/reststop/search" },
  EU: { name: "EU TARIC", status: "official-link", url: "https://taxation-customs.ec.europa.eu/online-services/online-services-and-databases-customs/eu-customs-tariff-taric_en" },
  JP: { name: "Japan Customs Tariff Schedule", status: "official-link", url: "https://www.customs.go.jp/english/tariff/" },
  CN: { name: "China Customs tariff resources", status: "official-link", url: "http://english.customs.gov.cn/" },
  GB: { name: "UK Integrated Online Tariff", status: "official-link", url: "https://www.trade-tariff.service.gov.uk/" },
  CA: { name: "Canadian Customs Tariff", status: "official-link", url: "https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif/menu-eng.html" },
  AU: { name: "Australian Working Tariff", status: "official-link", url: "https://www.abf.gov.au/importing-exporting-and-manufacturing/tariff-classification/current-tariff" }
};
const HS_EU_COUNTRIES = new Set(["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE"]);

function hsCodeParam(params) {
  return normalizeGlobalHsCode(params.get("hscode") || params.get("hs") || params.get("q") || "8504");
}

function hsTariffSourceForCountry(code) {
  if (code === "US") return HS_TARIFF_SOURCES.US;
  if (code === "KR") return HS_TARIFF_SOURCES.KR;
  if (HS_EU_COUNTRIES.has(code)) return HS_TARIFF_SOURCES.EU;
  if (code === "JP") return HS_TARIFF_SOURCES.JP;
  if (code === "CN") return HS_TARIFF_SOURCES.CN;
  if (code === "GB") return HS_TARIFF_SOURCES.GB;
  if (code === "CA") return HS_TARIFF_SOURCES.CA;
  if (code === "AU") return HS_TARIFF_SOURCES.AU;
  return null;
}

function hsCountrySelectItems(lang = currentLang()) {
  return TRADE_COUNTRIES.map(([value, en, ko]) => ({
    value,
    label: lang === "ko" ? ko : en,
    meta: `${value} · ${en}`,
    terms: [value, en, ko, ...(COUNTRY_SEARCH_ALIASES[value] || [])].map(normalizeCountrySearch)
  }));
}

function hsFindHierarchy(code) {
  const normalized = normalizeGlobalHsCode(code);
  const chapter = normalized.length >= 2 ? findGlobalHsItem(normalized.slice(0, 2)) : null;
  const heading = normalized.length >= 4 ? findGlobalHsItem(normalized.slice(0, 4)) : null;
  const subheading = normalized.length >= 6 ? findGlobalHsItem(normalized.slice(0, 6)) : null;
  const children = globalHsReferenceItems
    .filter((item) => normalized.length === 2 ? item.level === 4 && item.code.startsWith(normalized) : normalized.length === 4 ? item.level === 6 && item.code.startsWith(normalized) : false)
    .sort((a, b) => a.code.localeCompare(b.code));
  return { chapter, heading, subheading, children };
}

function hsLevelShort(code, lang = currentLang()) {
  const length = String(code || "").length;
  if (length === 2) return lang === "ko" ? "Chapter" : "Chapter";
  if (length === 4) return lang === "ko" ? "Heading" : "Heading";
  if (length === 6) return lang === "ko" ? "Subheading" : "Subheading";
  return "HS";
}

function hsGlobalTradeHref(code, exporter, importer, lang = currentLang()) {
  const partner = importer || "US";
  return `${lang}/global-trade-explorer.html?reporter=${encodeURIComponent(exporter || "KR")}&partner=${encodeURIComponent(partner)}&hs=${encodeURIComponent(code)}&flow=export`;
}

function hsOfficialSearchHref(source, code) {
  const hs = normalizeGlobalHsCode(code);
  if (!source) return "";
  if (source === HS_TARIFF_SOURCES.US) return `https://hts.usitc.gov/?query=${encodeURIComponent(hs)}`;
  if (source === HS_TARIFF_SOURCES.GB) return `https://www.trade-tariff.service.gov.uk/search?query=${encodeURIComponent(hs)}`;
  return source.url;
}

function hsStaticReferenceMarkup(context) {
  const lang = currentLang();
  const rows = lang === "ko"
    ? [["International HS Reference", "UN Comtrade HS combined reference"], ["Coverage", "HS 2 / HS 4 / HS 6"], ["National tariff line", "국가별 8-10자리 이상 세번은 공식 자료로 검증"], ["Classification risk", "재질, 기능, 용도, 구성에 따라 달라질 수 있음"]]
    : [["International HS Reference", "UN Comtrade HS combined reference"], ["Coverage", "HS 2 / HS 4 / HS 6"], ["National tariff line", "Verify 8-10+ digit national codes in official tariff schedules"], ["Classification risk", "Material, function, use, and composition can change classification"]];
  return `<section class="eu-dashboard-section eu-classification hs-data-note"><h2>${lang === "ko" ? "데이터 및 분류 기준" : "Data & Classification"}</h2><dl>${rows.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl><p class="muted">${escapeHtml(context.note)}</p></section>`;
}

function hsHierarchyMarkup(code, item) {
  const lang = currentLang();
  const hierarchy = hsFindHierarchy(code);
  const trail = [hierarchy.chapter, hierarchy.heading, hierarchy.subheading].filter(Boolean);
  const childLimit = code.length === 2 ? 24 : 36;
  const childLabel = code.length === 2 ? (lang === "ko" ? "이 Chapter의 주요 Heading" : "Headings in this chapter") : (lang === "ko" ? "이 Heading의 Subheading" : "Subheadings in this heading");
  return `<section class="eu-dashboard-section hs-hierarchy-section"><h2>${lang === "ko" ? "HS 계층 구조" : "HS Hierarchy"}</h2><div class="hs-hierarchy-trail">${trail.map((row) => `<article class="${row.code === code ? "is-current" : ""}"><span>${escapeHtml(hsLevelShort(row.code, lang))}</span><strong>${escapeHtml(row.code)}</strong><p>${escapeHtml(row.desc || (lang === "ko" ? "품목명 없음" : "description unavailable"))}</p></article>`).join("")}</div>${hierarchy.children.length ? `<div class="hs-child-list"><div class="section-head"><h3>${escapeHtml(childLabel)}</h3><span>${hierarchy.children.length} ${lang === "ko" ? "개" : "items"}</span></div><div>${hierarchy.children.slice(0, childLimit).map((child) => `<a href="?hscode=${escapeAttribute(child.code)}"><strong>${escapeHtml(child.code)}</strong><span>${escapeHtml(child.desc || "")}</span></a>`).join("")}</div>${hierarchy.children.length > childLimit ? `<p class="muted">${lang === "ko" ? `상위 ${childLimit}개만 표시합니다. 검색창에서 더 구체적인 코드나 품목명을 입력하세요.` : `Showing the first ${childLimit}. Search a more specific code or product name to narrow the list.`}</p>` : ""}</div>` : ""}</section>`;
}

async function fetchUsHtsCandidates(code) {
  const hs6 = normalizeGlobalHsCode(code).slice(0, 6);
  const url = new URL(HS_TARIFF_ENDPOINT);
  url.searchParams.set("country", "US");
  url.searchParams.set("hscode", hs6);
  const response = await fetchWithTimeout(url.toString(), { cache: "force-cache" }, 20000);
  if (!response.ok) throw new Error(`HTSUS lookup ${response.status}`);
  const data = await response.json();
  return (Array.isArray(data.candidates) ? data.candidates : [])
    .map((row) => ({ code: String(row.code || "").trim(), desc: String(row.description || row.desc || "").trim(), general: String(row.general || "").trim() }))
    .filter((row) => row.code.replace(/\D/g, "").startsWith(hs6))
    .slice(0, 40);
}

function hsTariffCardMarkup(role, country, code, candidates, error) {
  const lang = currentLang();
  const source = hsTariffSourceForCountry(country);
  const countryName = displayCountryName(country, lang);
  const roleLabel = role === "export" ? (lang === "ko" ? "수출국" : "Export country") : (lang === "ko" ? "수입국" : "Import country");
  if (!source) {
    return `<article class="hs-mapper-card"><span>${roleLabel}</span><h3>${escapeHtml(countryName)}</h3><p>${lang === "ko" ? "이 국가의 공식 tariff schedule을 안정적으로 자동 조회할 수 없어 매핑 후보를 표시하지 않습니다." : "No stable official tariff schedule lookup is enabled for this country, so candidate mappings are not displayed."}</p></article>`;
  }
  if (source.status !== "searchable") {
    return `<article class="hs-mapper-card hs-unsupported"><span>${roleLabel}</span><h3>${escapeHtml(countryName)} · ${escapeHtml(source.name)}</h3><p>${lang === "ko" ? "공식 자료에서 국가별 세번을 직접 확인하세요. LOGILEE는 검증되지 않은 8-10자리 코드를 생성하지 않습니다." : "Check the national tariff line in the official source. LOGILEE does not generate unverified 8-10 digit codes."}</p><a class="text-link" href="${escapeAttribute(hsOfficialSearchHref(source, code))}" target="_blank" rel="noopener">${lang === "ko" ? "공식 자료 열기" : "Open official source"}</a></article>`;
  }
  if (error) {
    return `<article class="hs-mapper-card"><span>${roleLabel}</span><h3>${escapeHtml(countryName)} · ${escapeHtml(source.name)}</h3><p>${lang === "ko" ? "USITC 후보를 일시적으로 불러오지 못했습니다. 공식 HTS에서 직접 확인하세요." : "USITC candidates could not be loaded temporarily. Verify directly in the official HTS."}</p><a class="text-link" href="${escapeAttribute(hsOfficialSearchHref(source, code))}" target="_blank" rel="noopener">${lang === "ko" ? "HTSUS에서 확인" : "Verify on HTSUS"}</a></article>`;
  }
  return `<article class="hs-mapper-card hs-supported"><span>${roleLabel}</span><h3>${escapeHtml(countryName)} · ${escapeHtml(source.name)}</h3><p>${lang === "ko" ? "공식 HTSUS 검색 결과 중 선택한 HS6로 시작하는 후보입니다. 1:N 후보이며 추천 순위가 아닙니다." : "Official HTSUS search candidates starting with the selected HS6. This is a 1:N candidate list, not a recommendation."}</p>${candidates.length ? `<div class="hs-candidate-list">${candidates.map((candidate) => `<div><strong>${escapeHtml(candidate.code)}</strong><span>${escapeHtml(candidate.desc || (lang === "ko" ? "설명 없음" : "No description"))}</span>${candidate.general ? `<small>${lang === "ko" ? "General rate text" : "General rate text"}: ${escapeHtml(candidate.general)}</small>` : ""}</div>`).join("")}</div>` : `<div class="data-empty">${lang === "ko" ? "선택한 HS6로 시작하는 HTSUS 후보를 찾지 못했습니다." : "No HTSUS candidates starting with this HS6 were found."}</div>`}<a class="text-link" href="${escapeAttribute(hsOfficialSearchHref(source, code))}" target="_blank" rel="noopener">${lang === "ko" ? "HTSUS 원문 열기" : "Open HTSUS source"}</a></article>`;
}

function hsOfficialResourcesMarkup(code) {
  const lang = currentLang();
  const rows = [
    ["UN Comtrade HS Reference", "https://comtradeapi.un.org/files/v1/app/reference/HS.json"],
    ["Korea Customs Service", HS_TARIFF_SOURCES.KR.url],
    ["USITC HTSUS", hsOfficialSearchHref(HS_TARIFF_SOURCES.US, code)],
    ["EU TARIC", HS_TARIFF_SOURCES.EU.url],
    ["Japan Customs", HS_TARIFF_SOURCES.JP.url],
    ["China Customs", HS_TARIFF_SOURCES.CN.url],
    ["UK Trade Tariff", HS_TARIFF_SOURCES.GB.url],
    ["Canada Customs Tariff", HS_TARIFF_SOURCES.CA.url],
    ["Australia Working Tariff", HS_TARIFF_SOURCES.AU.url]
  ];
  return `<section class="eu-dashboard-section"><h2>${lang === "ko" ? "공식 검증 자료" : "Official Verification"}</h2><div class="country-tool-grid eu-tool-grid hs-official-grid">${rows.map(([label, href]) => `<a href="${escapeAttribute(href)}" target="_blank" rel="noopener"><i data-lucide="external-link"></i><strong>${escapeHtml(label)}</strong></a>`).join("")}</div></section>`;
}

function hsNextToolsMarkup(code, exporter, importer) {
  const lang = currentLang();
  const tools = lang === "ko"
    ? [["Global Trade에서 거래 데이터 보기", hsGlobalTradeHref(code, exporter, importer, "ko"), "chart-column"], ["EU Trade Explorer", "ko/eu-trade-explorer.html", "bar-chart-3"], ["Dictionary: HS Code", "ko/dictionary.html?term=hs-code", "book-open"], ["Country Trade Profile", `ko/country-trade-profile.html?country=${encodeURIComponent(exporter)}`, "globe"]]
    : [["Open in Global Trade Explorer", hsGlobalTradeHref(code, exporter, importer, "en"), "chart-column"], ["EU Trade Explorer", "en/eu-trade-explorer.html", "bar-chart-3"], ["Dictionary: HS Code", "en/dictionary.html?term=hs-code", "book-open"], ["Country Trade Profile", `en/country-trade-profile.html?country=${encodeURIComponent(exporter)}`, "globe"]];
  return `<section class="eu-dashboard-section"><h2>${lang === "ko" ? "다음 실무 도구" : "Next Trade Tools"}</h2><div class="country-tool-grid eu-tool-grid">${tools.map(([label, href, icon]) => `<a href="${escapeAttribute(href)}"><i data-lucide="${icon}"></i><strong>${escapeHtml(label)}</strong></a>`).join("")}</div></section>`;
}

async function renderHsClassification(output, selected) {
  const lang = currentLang();
  const code = normalizeGlobalHsCode(selected.code);
  if (!validGlobalHsCode(code)) {
    output.innerHTML = `<div class="data-empty">${lang === "ko" ? "HS Code는 2, 4, 6자리 숫자로 입력하세요." : "Enter a 2, 4, or 6 digit HS code."}</div>`;
    return;
  }
  const item = findGlobalHsItem(code);
  const missing = !item;
  const hs6Ready = code.length === 6;
  let exportCandidates = [];
  let importCandidates = [];
  let exportError = null;
  let importError = null;
  if (hs6Ready) {
    await Promise.all([
      selected.exporter === "US" ? fetchUsHtsCandidates(code).then((rows) => { exportCandidates = rows; }).catch((error) => { exportError = error; }) : Promise.resolve(),
      selected.importer === "US" ? fetchUsHtsCandidates(code).then((rows) => { importCandidates = rows; }).catch((error) => { importError = error; }) : Promise.resolve()
    ]);
  }
  const desc = item?.desc || (lang === "ko" ? "UN Comtrade HS reference에서 일치하는 설명을 찾지 못했습니다." : "No matching description was found in the UN Comtrade HS reference.");
  output.innerHTML = `<section class="eu-result-header hs-result-header"><i data-lucide="barcode"></i><div><span class="kicker">UN Comtrade HS Reference</span><h2>HS ${escapeHtml(code)} ${escapeHtml(hsLevelShort(code, lang))}</h2><p>${escapeHtml(desc)}</p></div></section><section class="eu-kpi-grid hs-summary-grid"><article><span>${lang === "ko" ? "선택 코드" : "Selected code"}</span><strong>${escapeHtml(code)}</strong><small>${escapeHtml(globalHsLevelLabel(code, lang))}</small></article><article><span>${lang === "ko" ? "Reference" : "Reference"}</span><strong>${missing ? "No match" : "Matched"}</strong><small>UN Comtrade HS combined</small></article><article><span>${lang === "ko" ? "수출국" : "Export country"}</span><strong>${escapeHtml(selected.exporter)}</strong><small>${escapeHtml(displayCountryName(selected.exporter, lang))}</small></article><article><span>${lang === "ko" ? "수입국" : "Import country"}</span><strong>${escapeHtml(selected.importer)}</strong><small>${escapeHtml(displayCountryName(selected.importer, lang))}</small></article></section>${missing ? `<div class="data-empty hs-warning">${lang === "ko" ? "해당 코드는 2/4/6자리 형식은 맞지만 현재 LOGILEE HS reference에 없습니다. 공식 자료에서 직접 검증하세요." : "The code has a valid 2/4/6 digit format, but it is not present in the current LOGILEE HS reference. Verify it in official sources."}</div>` : hsHierarchyMarkup(code, item)}<section class="eu-dashboard-section hs-mapper-section"><div class="section-head"><h2>${lang === "ko" ? "국가별 Tariff Line 후보" : "National Tariff Line Candidates"}</h2><span>${hs6Ready ? "HS6" : (lang === "ko" ? "HS6 필요" : "HS6 required")}</span></div>${hs6Ready ? `<div class="hs-mapper-grid">${hsTariffCardMarkup("export", selected.exporter, code, exportCandidates, exportError)}${hsTariffCardMarkup("import", selected.importer, code, importCandidates, importError)}</div>` : `<div class="data-empty">${lang === "ko" ? "국가별 8-10자리 tariff line 후보는 HS 6자리 Subheading을 선택했을 때만 표시합니다." : "National 8-10 digit tariff-line candidates are shown only after selecting an HS 6-digit subheading."}</div>`}</section><section class="eu-dashboard-section hs-reverse-section"><h2>${lang === "ko" ? "Reverse Lookup" : "Reverse Lookup"}</h2><p>${lang === "ko" ? "국가별 tariff line에서 국제 HS6로 되돌리는 자동 역매핑은 이번 버전에서 제공하지 않습니다. 국가별 추가 세번 체계가 다르므로 공식 자료에서 원문을 확인하세요." : "Automated reverse mapping from national tariff lines back to international HS6 is not enabled in this version. National extensions differ by jurisdiction, so verify in the official schedule."}</p></section>${hsStaticReferenceMarkup({ note: lang === "ko" ? "LOGILEE는 국제 HS reference와 공식 검증 링크를 결합해 분류 리서치를 돕습니다. 신고용 최종 분류는 관할 세관 자료와 전문가 검토로 확인하세요." : "LOGILEE combines an international HS reference with official verification links for classification research. Confirm filing classifications with the relevant customs authority or a qualified specialist." })}${hsOfficialResourcesMarkup(code)}${hsNextToolsMarkup(code, selected.exporter, selected.importer)}`;
  refreshIcons();
}

async function wireHsClassificationPage() {
  const form = document.querySelector("[data-hs-classification-form]");
  if (!form) return;
  const lang = currentLang();
  const params = new URLSearchParams(location.search);
  const hs = form.querySelector("[name='hscode']");
  const exporter = form.querySelector("[name='export']");
  const importer = form.querySelector("[name='import']");
  const output = document.querySelector("[data-hs-classification-output]");
  const hsReference = await loadGlobalHsReference();
  const countryItems = hsCountrySelectItems(lang);
  const optionMarkupLocal = (rows) => rows.map(([code, en, ko]) => `<option value="${code}">${lang === "ko" ? ko : en}</option>`).join("");
  exporter.innerHTML = optionMarkupLocal(TRADE_COUNTRIES);
  importer.innerHTML = optionMarkupLocal(TRADE_COUNTRIES);
  exporter.value = (params.get("export") || params.get("exporter") || params.get("reporter") || "KR").toUpperCase();
  importer.value = (params.get("import") || params.get("importer") || params.get("partner") || "US").toUpperCase();
  const initialHs = hsCodeParam(params) || "8504";
  hs.innerHTML = `<option value="${escapeAttribute(initialHs)}">${escapeHtml(initialHs)}</option>`;
  hs.value = initialHs;
  enhanceGlobalHsCombobox(hs, hsReference, lang === "ko" ? { label: "HS Code 선택", placeholder: "HS Code 또는 품목명 검색", open: "HS 목록 열기", empty: "검색 결과가 없습니다. 2, 4, 6자리 HS Code는 직접 입력할 수 있습니다.", direct: (code) => `HS ${code}로 직접 확인`, directBadge: "직접 입력", noDescription: "품목명 없음" } : { label: "Select HS code", placeholder: "Search HS code or product", open: "Open HS list", empty: "No results. You can directly enter a 2, 4, or 6 digit HS code.", direct: (code) => `Use HS ${code}`, directBadge: "direct entry", noDescription: "description unavailable" });
  enhanceSimpleCombobox(exporter, countryItems, lang === "ko" ? { label: "수출국 선택", placeholder: "수출국 검색", open: "수출국 목록 열기", empty: "일치하는 국가가 없습니다." } : { label: "Select export country", placeholder: "Search export country", open: "Open export country list", empty: "No matching country." });
  enhanceSimpleCombobox(importer, countryItems, lang === "ko" ? { label: "수입국 선택", placeholder: "수입국 검색", open: "수입국 목록 열기", empty: "일치하는 국가가 없습니다." } : { label: "Select import country", placeholder: "Search import country", open: "Open import country list", empty: "No matching country." });
  const render = () => {
    const rawHs = typeof hs.globalHsRawCode === "function" ? hs.globalHsRawCode() : hs.value;
    if (validGlobalHsCode(rawHs) && typeof hs.globalHsCommit === "function") hs.globalHsCommit();
    const selected = { code: normalizeGlobalHsCode(rawHs), exporter: exporter.value, importer: importer.value };
    output.innerHTML = `<div class="data-empty">${lang === "ko" ? "HS reference를 확인하는 중입니다..." : "Checking the HS reference..."}</div>`;
    renderHsClassification(output, selected);
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const rawHs = typeof hs.globalHsRawCode === "function" ? hs.globalHsRawCode() : hs.value;
    if (validGlobalHsCode(rawHs) && typeof hs.globalHsCommit === "function") hs.globalHsCommit();
    const url = new URL(location.href);
    url.searchParams.set("hscode", normalizeGlobalHsCode(rawHs));
    url.searchParams.set("export", exporter.value);
    url.searchParams.set("import", importer.value);
    history.replaceState(null, "", url);
    render();
  });
  render();
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
  updateComplianceSidebarActiveState();
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
  wireAirportFinder();
  wirePortDetail();
  renderPortWeather();
  wireEuTradeExplorer();
  wireTradeExplorerParams();
  wireHsClassificationPage();
  wireNewsPage();
});

window.addEventListener("hashchange", updateComplianceSidebarActiveState);
