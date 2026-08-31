(function () {
  const page = document.querySelector("[data-compliance-page]");
  if (!page) return;

  const lang = document.documentElement.lang && document.documentElement.lang.startsWith("ko") ? "ko" : "en";
  const safeHtml = window.escapeHtml || ((value) => String(value || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"));
  const safeAttr = window.escapeAttribute || ((value) => String(value || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"));
  const own = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);

  const t = {
    ko: {
      categoryTitle: "1. 무엇을 확인하고 있나요?",
      marketTitle: "2. 목적지 시장을 선택하세요",
      marketLabel: "목적지 국가 또는 규제권역",
      marketPlaceholder: "국가명, ISO2, 한국어 이름 검색",
      categoryNeeded: "확인할 업무 영역을 선택하세요.",
      marketNeeded: "목적지 시장을 선택하세요.",
      bothNeeded: "1. 확인할 업무를 선택하고 2. 목적지 시장을 선택하세요.",
      selected: "선택됨",
      destination: "Destination",
      framework: "Regulatory framework",
      coverage: "Coverage",
      area: "Selected compliance area",
      euWide: "EU 공통 자료",
      national: "국가별 자료",
      gateway: "공식 확인처",
      official: "공식 자료 제공",
      partial: "일부 자료 제공",
      regionOnly: "권역 공통 자료 제공",
      gatewayOnly: "공식 확인처 중심",
      noDetermination: "자동 판정하지 않음",
      additional: "추가 확인 필요",
      sourceLanguage: "Source language",
      what: "확인할 내용",
      when: "언제 유용한가",
      timing: "확인 시점",
      parties: "일반적으로 확인에 참여하는 담당",
      cta: "공식 자료 확인 ->",
      ctaHs: "HS Code ->",
      ctaSource: "공식 확인처 ->",
      ctaGuide: "가이드 ->",
      ctaExplorer: "탐색하기 ->",
      reset: "체크리스트 초기화",
      relatedIntro: "품목 분류가 아직 정해지지 않았다면 HS Code를 먼저 확인하세요.",
      fallbackTitle: "상세 규제 자료 미구축 시장",
      fallbackCopy: "LOGILEE는 아직 {country}의 상세 규제 source를 큐레이션하지 않았습니다. 다른 국가의 규제를 재사용하지 않으며, 아래의 일반 실무 경로와 국가 프로필에서 추가 확인을 시작하세요.",
      sourcesTitle: "전체 공식 출처",
      curated: "Curated coverage",
      other: "Additional markets",
      limitationTitle: "참고 범위와 한계",
      limitation: "이 페이지는 참고용 탐색 허브입니다. 규정은 변경될 수 있고, 제품의 성분·용도·기술사양·원산지·거래 상대방에 따라 확인 범위가 달라질 수 있습니다. 실제 거래 전 공식기관, 수입자, 관세사, 인증기관 또는 법률 전문가를 통해 최신 요건을 확인하세요."
    },
    en: {
      categoryTitle: "1. What do you need to check?",
      marketTitle: "2. Choose a Destination Market",
      marketLabel: "Destination country or regulatory region",
      marketPlaceholder: "Search country name, ISO2, Korean name, or alias",
      categoryNeeded: "Choose the compliance area you need to check.",
      marketNeeded: "Choose a destination market.",
      bothNeeded: "1. Choose a compliance area and 2. choose a destination market.",
      selected: "Selected",
      destination: "Destination",
      framework: "Regulatory framework",
      coverage: "Coverage",
      area: "Selected compliance area",
      euWide: "EU-wide sources",
      national: "National sources",
      gateway: "Official gateway",
      official: "Official coverage",
      partial: "Partial coverage",
      regionOnly: "Regional coverage",
      gatewayOnly: "Official gateway only",
      noDetermination: "No automated determination",
      additional: "Additional verification required",
      sourceLanguage: "Source language",
      what: "What you can check",
      when: "When it is useful",
      timing: "When to check",
      parties: "Typical parties involved",
      cta: "Official source ->",
      ctaHs: "HS Code ->",
      ctaSource: "Official source ->",
      ctaGuide: "Guide ->",
      ctaExplorer: "Explore ->",
      reset: "Reset Checklist",
      relatedIntro: "If the product classification is not settled yet, start with the HS Code check.",
      fallbackTitle: "Detailed regulatory sources not yet curated",
      fallbackCopy: "LOGILEE has not yet curated detailed regulatory sources for {country}. It does not reuse another market's rules. Start with general trade checks and the country profile while verifying with official authorities.",
      sourcesTitle: "All Official Sources",
      curated: "Curated coverage",
      other: "Additional markets",
      limitationTitle: "Scope and Limitations",
      limitation: "This page is an informational navigation hub. Regulations can change, and product composition, use, technical specifications, origin, and transaction parties can change what must be checked. Before an actual transaction, verify current requirements with official authorities, the importer, a customs broker, certification body, or qualified legal professional."
    }
  }[lang];

  const timing = {
    quote: { ko: "견적·계약 전", en: "Before quotation / contract" },
    order: { ko: "주문 확정 전", en: "Before order confirmation" },
    production: { ko: "생산·라벨링 전", en: "Before production / labeling" },
    shipment: { ko: "선적 전", en: "Before shipment" },
    clearance: { ko: "통관 전", en: "Before customs clearance" }
  };

  const parties = {
    exporter: { ko: "Exporter", en: "Exporter" },
    importer: { ko: "Importer / Buyer", en: "Importer / Buyer" },
    broker: { ko: "Customs Broker", en: "Customs Broker" },
    qa: { ko: "Product Compliance / QA", en: "Product Compliance / QA" },
    cert: { ko: "Certification / Testing Body", en: "Certification / Testing Body" },
    legal: { ko: "Legal / Trade Compliance Specialist", en: "Legal / Trade Compliance Specialist" }
  };

  const categories = {
    import: { label: { ko: "수입 규제", en: "Import Requirements" }, desc: { ko: "목적지 시장에 물품을 반입할 때 확인해야 할 기본 요건과 공식 절차를 찾습니다.", en: "Find basic requirements and official procedures to review before goods enter the destination market." }, timing: ["quote", "clearance"], parties: ["importer", "broker", "exporter"] },
    export: { label: { ko: "수출통제", en: "Export Controls" }, desc: { ko: "전략물자·이중용도 품목 및 수출허가 관련 공식 확인처를 찾습니다.", en: "Find official sources for dual-use, strategic goods, and export-licensing checks." }, timing: ["quote", "shipment"], parties: ["exporter", "legal", "importer"] },
    product: { label: { ko: "제품 인증·안전", en: "Product Certification & Safety" }, desc: { ko: "제품에 적용될 수 있는 인증·등록·제품안전 요구사항을 확인합니다.", en: "Review official certification, registration, and product-safety sources that may apply to a product." }, timing: ["order", "production"], parties: ["qa", "cert", "importer"] },
    restricted: { label: { ko: "금지·제한 품목", en: "Prohibited / Restricted Goods" }, desc: { ko: "수입·수출 금지 또는 별도 허가·조건이 있을 수 있는 품목의 공식 확인처를 찾습니다.", en: "Find official sources for goods that may be prohibited, restricted, or subject to conditions." }, timing: ["quote", "clearance"], parties: ["importer", "broker", "legal"] },
    chemical: { label: { ko: "화학·환경 규제", en: "Chemicals & Environmental Rules" }, desc: { ko: "화학물질·환경 관련 등록, 제한 및 관련 제도를 확인합니다.", en: "Review official chemical, environmental, registration, and restriction sources." }, timing: ["order", "production"], parties: ["qa", "importer", "legal"] },
    sanctions: { label: { ko: "제재·거래제한", en: "Sanctions / Restricted Party Screening" }, desc: { ko: "거래 상대방 및 거래와 관련된 공식 제재·거래제한 자료를 확인합니다.", en: "Find official sanctions and restricted-party screening resources for transaction due diligence." }, timing: ["quote", "shipment"], parties: ["exporter", "legal", "importer"] }
  };

  const EU_MEMBERS = new Set(["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "EL", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE"]);
  const coverageLabel = { official: t.official, partial: t.partial, "region-only": t.regionOnly, "gateway-only": t.gatewayOnly };
  const coverageClass = { official: "", partial: "soon", "region-only": "", "gateway-only": "soon" };

  const countryNameOverride = {
    US: { en: "United States", ko: "미국" }, EU: { en: "European Union", ko: "European Union" }, CN: { en: "China", ko: "중국" }, KR: { en: "Korea", ko: "대한민국" }, JP: { en: "Japan", ko: "일본" }, GB: { en: "United Kingdom", ko: "영국" }, CA: { en: "Canada", ko: "캐나다" }, AU: { en: "Australia", ko: "호주" }, IN: { en: "India", ko: "인도" }, VN: { en: "Vietnam", ko: "베트남" }, TH: { en: "Thailand", ko: "태국" }, ID: { en: "Indonesia", ko: "인도네시아" }, SG: { en: "Singapore", ko: "싱가포르" }, MX: { en: "Mexico", ko: "멕시코" }, DE: { en: "Germany", ko: "독일" }, FR: { en: "France", ko: "프랑스" }, BR: { en: "Brazil", ko: "브라질" }
  };

  const sources = {
    cbp: ["US", "U.S. Customs and Border Protection (CBP)", "Basic import and export guidance", "https://www.cbp.gov/trade/basic-import-export", { ko: "미국 수입통관 기본 절차와 신규 수입자 안내", en: "Core U.S. import procedures and new importer guidance." }, { ko: "미국 반입 전 통관 절차와 필요 서류 흐름을 확인할 때", en: "Use before importing into the U.S. to map customs process and documents." }, "English"],
    htsus: ["US", "U.S. International Trade Commission", "Harmonized Tariff Schedule of the United States", "https://hts.usitc.gov/", { ko: "미국 HTS 분류, 관세율, tariff-line 기준", en: "U.S. HTS classification, tariff lines, and duty-rate references." }, { ko: "HS Code에서 미국 세번 확인이 필요할 때", en: "Use when the U.S. tariff-line classification needs official verification." }, "English"],
    bisEar: ["US", "U.S. Bureau of Industry and Security (BIS)", "Export Administration Regulations (EAR)", "https://www.bis.gov/regulations/ear", { ko: "EAR, Commerce Control List, ECCN 관련 공식 자료", en: "EAR, Commerce Control List, and ECCN official resources." }, { ko: "이중용도 품목·기술 수출통제 검토를 시작할 때", en: "Use when starting dual-use goods, software, or technology review." }, "English"],
    csl: ["US", "International Trade Administration", "Consolidated Screening List", "https://www.trade.gov/consolidated-screening-list", { ko: "미국 정부 주요 거래제한 목록 통합 검색", en: "Consolidated U.S. government restricted-party screening lists." }, { ko: "buyer, consignee, end user 이름을 공식 경로에서 확인할 때", en: "Use for official restricted-party screening routes." }, "English"],
    ofac: ["US", "U.S. Treasury OFAC", "Sanctions List Search", "https://ofac.treasury.gov/sanctions-list-search-tool", { ko: "OFAC 제재 목록 검색", en: "OFAC sanctions list search." }, { ko: "제재 또는 거래제한 확인이 필요할 때", en: "Use when sanctions due diligence is needed." }, "English"],
    fda: ["US", "U.S. Food and Drug Administration (FDA)", "Import Program", "https://www.fda.gov/industry/import-program", { ko: "FDA 관할 가능 제품의 수입 프로그램과 import alerts", en: "Import program and import alerts for potentially FDA-regulated products." }, { ko: "식품, 의료기기, 의약품, 화장품 등 관련 확인을 시작할 때", en: "Use for food, devices, drugs, cosmetics, and related product checks." }, "English"],
    epa: ["US", "U.S. Environmental Protection Agency (EPA)", "TSCA Import-Export Requirements", "https://www.epa.gov/tsca-import-export-requirements", { ko: "TSCA 화학물질 수입·수출 요구사항", en: "TSCA chemical import and export requirement references." }, { ko: "화학물질 또는 화학 성분 포함 제품을 확인할 때", en: "Use for chemicals or products containing chemical substances." }, "English"],
    cpsc: ["US", "U.S. Consumer Product Safety Commission (CPSC)", "Business and Manufacturing", "https://www.cpsc.gov/Business--Manufacturing", { ko: "소비자 제품 안전 요구사항과 인증서 자료", en: "Consumer product safety requirements and certificates." }, { ko: "소비자용 제품 안전 기준을 확인할 때", en: "Use when consumer product safety rules need review." }, "English"],
    fcc: ["US", "Federal Communications Commission (FCC)", "Equipment Authorization", "https://apps.fcc.gov/oetcf/kdb/forms/FTSSearchResultPage.cfm?id=30744&switch=P", { ko: "무선·통신 장비 승인 및 수입 관련 자료", en: "Equipment authorization and importation guidance for RF devices." }, { ko: "전자·무선·통신 기능 제품을 검토할 때", en: "Use for electronic, wireless, or communications-capable products." }, "English"],
    usda: ["US", "USDA APHIS", "Plant Imports", "https://www.aphis.usda.gov/plant-imports", { ko: "식물·농산물 검역 및 수입 자료", en: "Plant and agricultural quarantine import references." }, { ko: "식물성 자재, 농산물 등 검역 민감 품목을 확인할 때", en: "Use for plant or agricultural goods." }, "English"],
    nhtsa: ["US", "National Highway Traffic Safety Administration (NHTSA)", "Importing a Vehicle", "https://www.nhtsa.gov/importing-vehicle", { ko: "차량 및 자동차 장비 수입 안전 기준 자료", en: "Vehicle and motor-vehicle equipment import safety references." }, { ko: "차량 또는 자동차 부품 관련 확인이 필요할 때", en: "Use when vehicles or motor-vehicle equipment are involved." }, "English"],
    taric: ["EU", "European Commission Taxation and Customs Union", "TARIC", "https://taxation-customs.ec.europa.eu/online-services/online-services-and-databases-customs/eu-customs-tariff-taric_en", { ko: "EU commodity code 기준 관세·무역조치·제한", en: "EU commodity-code based tariffs, trade measures, and restrictions." }, { ko: "CN/TARIC 코드 기준으로 EU 관세와 조치를 확인할 때", en: "Use when checking EU measures by CN or TARIC commodity code." }, "English"],
    a2m: ["EU", "European Commission", "Access2Markets", "https://trade.ec.europa.eu/access-to-markets/en/home", { ko: "수출국·수입국·품목 기준 관세, 절차, 원산지, 수입요건", en: "Tariffs, procedures, origin, import requirements, and trade information." }, { ko: "특정 출발국에서 EU 회원국으로 보내는 품목 요건을 볼 때", en: "Use when exploring a product shipment into an EU member state." }, "English"],
    euProduct: ["EU", "European Commission", "Product Safety", "https://commission.europa.eu/topics/business-and-industry/product-safety_en", { ko: "EU 제품 안전, Safety Gate, 사업자 의무", en: "EU product safety, Safety Gate, and business obligations." }, { ko: "비식품 소비자 제품 안전과 리콜 정보를 확인할 때", en: "Use for non-food consumer product safety and recall checks." }, "English"],
    euReq: ["EU", "Your Europe", "Identifying Product Requirements", "https://europa.eu/youreurope/business/product-rules-compliance/general-product-compliance/identifying-product-requirements/index_en.htm", { ko: "EU 제품 요구사항과 Access2Markets 활용 경로", en: "How to identify EU product requirements and use Access2Markets." }, { ko: "CE, 라벨링, 일반 제품 요구사항 출발점을 찾을 때", en: "Use as a starting point for CE, labelling, and general product requirements." }, "English"],
    echa: ["EU", "European Chemicals Agency (ECHA)", "Information on Chemicals", "https://echa.europa.eu/en-US/information-on-chemicals", { ko: "REACH, CLP 관련 화학물질 정보", en: "REACH and CLP chemical information." }, { ko: "CAS, EC 번호 또는 물질명으로 EU 화학 자료를 찾을 때", en: "Use when searching EU chemical data by CAS, EC number, or substance name." }, "English"],
    euDual: ["EU", "European Commission", "Exporting Dual-Use Items", "https://policy.trade.ec.europa.eu/help-exporters-and-importers/exporting-dual-use-items_en", { ko: "EU 이중용도 수출통제 체계와 관할기관 자료", en: "EU dual-use export-control framework and competent-authority references." }, { ko: "EU에서 이중용도 품목·기술 수출을 검토할 때", en: "Use when reviewing EU exports of dual-use goods, software, or technology." }, "English"],
    euSanctions: ["EU", "European Commission DG FISMA", "EU Sanctions Resources", "https://finance.ec.europa.eu/eu-and-world/sanctions-restrictive-measures/overview-sanctions-and-related-resources_en", { ko: "EU 제재 개요, consolidated list, sanctions map", en: "EU sanctions overview, consolidated list, sanctions map, and related resources." }, { ko: "EU 관련 거래제한을 확인할 때", en: "Use when checking EU sanctions context." }, "English"],
    gacc: ["CN", "General Administration of Customs of China (GACC)", "GACC English Portal", "http://english.customs.gov.cn/", { ko: "중국 세관 공지와 통관·검역 공식 자료 출발점", en: "China customs notices and customs/quarantine reference entry point." }, { ko: "중국 통관 관련 공식 세관 자료를 확인할 때", en: "Use as an official customs starting point for China." }, "English / Chinese"],
    samrCcc: ["CN", "State Administration for Market Regulation (SAMR)", "CCC Related Provisions and Rules", "https://english.samr.gov.cn/CooperationandExchanges/Organizations/art/2026/art_c2f7533f9c0046a1ae3e65a95259218a.html", { ko: "China Compulsory Certification(CCC) 관련 공식 영문 규정", en: "Official English provisions for China Compulsory Certification (CCC)." }, { ko: "중국 시장 진입 전 CCC 제도 확인을 시작할 때", en: "Use when CCC framework research is needed before China market entry." }, "English"],
    mofcom: ["CN", "Ministry of Commerce of China (MOFCOM)", "China Export Control Information", "https://exportcontrol.mofcom.gov.cn/", { ko: "중국 수출통제 정책법규, 공지, 이중용도 품목 자료", en: "China export-control laws, notices, and dual-use item resources." }, { ko: "중국 수출통제 또는 제한 품목 원문 확인이 필요할 때", en: "Use when checking China export-control or restricted-goods materials." }, "Chinese"],
    unipassReq: ["KR", "Korea Customs Service / UNI-PASS", "품목번호별 요건사항", "https://unipass.customs.go.kr/clip/hsinfosrch/openULS0201010Q.do", { ko: "품목번호별 세관장확인, 수출입공고, 통합공고 요건", en: "Item-code based customs confirmation, import/export notice, and integrated notice requirements." }, { ko: "한국 수출입 요건을 HS/품목번호 기준으로 확인할 때", en: "Use when checking Korea import/export requirements by HS or item code." }, "Korean"],
    kcs: ["KR", "Korea Customs Service", "UNI-PASS", "https://unipass.customs.go.kr/per/index.do", { ko: "전자통관, 신고, 통관정보, 품목분류 서비스", en: "Electronic customs clearance, declarations, customs information, and classification services." }, { ko: "한국 통관 실무와 UNI-PASS 서비스를 확인할 때", en: "Use when working through Korea customs and UNI-PASS processes." }, "Korean"],
    yestrade: ["KR", "YESTRADE / 무역안보관리원", "전략물자관리시스템", "https://www.yestrade.go.kr/", { ko: "전략물자 자가판정, 전문판정, 수출허가, 우려거래자 검색", en: "Strategic-goods self-classification, expert classification, export licenses, and parties of concern." }, { ko: "한국 수출통제와 전략물자 확인이 필요할 때", en: "Use when reviewing Korea strategic-goods export controls." }, "Korean"],
    safetyKorea: ["KR", "Safety Korea / 국가기술표준원", "제품안전정보센터", "https://www.safetykorea.kr/policy/targetsSafetyCert", { ko: "전기용품, 생활용품, 어린이제품 안전관리제도", en: "Product safety systems for electrical, household, and children's products." }, { ko: "KC 제품안전 대상 여부를 공식 자료에서 검토할 때", en: "Use when reviewing Korean KC product-safety categories." }, "Korean"],
    rra: ["KR", "National Radio Research Agency (RRA)", "Broadcasting/Telecom Conformity Assessment", "https://www.rra.go.kr/ko/license/A_c_search.do", { ko: "방송통신기자재 적합성평가 및 인증 현황", en: "Broadcasting and telecom equipment conformity-assessment references." }, { ko: "무선·통신·전자기기 KC 전파 적합성 확인이 필요할 때", en: "Use when radio, telecom, or electronic equipment conformity needs review." }, "Korean"],
    kreach: ["KR", "Ministry of Environment / K-REACH Portal", "화학물질정보처리시스템", "https://kreach.me.go.kr/repwrt/portal/manualList.do", { ko: "화학물질 등록, 신고, 등록등면제 안내", en: "K-REACH registration, notification, exemption, and system manuals." }, { ko: "한국 화학물질 등록·신고 확인이 필요할 때", en: "Use when Korean chemical registration or notification checks are needed." }, "Korean"],
    mfds: ["KR", "Ministry of Food and Drug Safety", "수입식품정보마루", "https://impfood.mfds.go.kr/", { ko: "수입식품 신고, 검사, 해외제조업소 자료", en: "Imported food declaration, inspection, and foreign establishment references." }, { ko: "식품, 건강기능식품, 식품용 기구 수입 확인이 필요할 때", en: "Use for imported food, health functional food, or food-contact materials." }, "Korean"],
    jpCustoms: ["JP", "Japan Customs", "Import / Export Procedures", "https://www.customs.go.jp/english/exp-imp/", { ko: "일본 수입·수출 통관 절차, 금지·제한 물품, 관세표", en: "Japan import/export customs procedures, prohibited/restricted goods, and tariff references." }, { ko: "일본 통관 절차와 customs requirements를 확인할 때", en: "Use when mapping Japan customs and import/export procedures." }, "English"],
    jpMeti: ["JP", "Ministry of Economy, Trade and Industry (METI)", "Security Export Control", "https://www.meti.go.jp/policy/anpo/englishpage.html", { ko: "일본 안전보장 수출관리와 controlled items 관련 자료", en: "Japan security export control and controlled-item references." }, { ko: "일본 수출통제 확인이 필요할 때", en: "Use when Japan export-control checks are needed." }, "English"],
    jpPse: ["JP", "METI", "Product Safety Guide", "https://www.meti.go.jp/english/policy/economy/consumer/product_safety/index.html", { ko: "전기용품안전법(PSE) 등 제품안전 제도 출발점", en: "Product-safety framework including electrical appliance safety references." }, { ko: "일본 제품안전·PSE 관련 확인을 시작할 때", en: "Use to start Japan product safety and PSE research." }, "English"],
    jpChem: ["JP", "NITE / METI", "CHRIP Chemical Risk Information Platform", "https://www.nite.go.jp/chem/chrip/chrip_search/systemTop", { ko: "일본 화학물질 관련 법규와 물질 정보 검색", en: "Chemical substance and regulation search for Japan." }, { ko: "물질명 또는 CAS 기준으로 일본 화학 규제를 탐색할 때", en: "Use when checking Japanese chemical information by substance or CAS." }, "English / Japanese"],
    jpMhlw: ["JP", "Ministry of Health, Labour and Welfare", "Imported Foods Inspection Services", "https://www.mhlw.go.jp/english/topics/importedfoods/index.html", { ko: "일본 수입식품 검사 및 관련 자료", en: "Imported food inspection services and related references." }, { ko: "식품·위생 관련 일본 수입 확인이 필요할 때", en: "Use for Japan food and health-related import checks." }, "English"],
    ukTariff: ["GB", "GOV.UK / HMRC", "Trade Tariff", "https://www.gov.uk/trade-tariff", { ko: "UK commodity code, duty, VAT, quotas, trade measures", en: "UK commodity codes, duties, VAT, quotas, and trade measures." }, { ko: "영국 관세와 수입 조치를 코드 기준으로 확인할 때", en: "Use when checking UK tariff and import measures." }, "English"],
    ukImport: ["GB", "GOV.UK", "Import goods into the UK", "https://www.gov.uk/import-goods-into-uk", { ko: "영국 수입 절차와 신고·통관 출발점", en: "UK import process, declarations, and customs entry point." }, { ko: "Brexit 이후 EU와 별도인 영국 수입 절차를 확인할 때", en: "Use for UK import checks separate from the EU framework." }, "English"],
    ukEcju: ["GB", "Export Control Joint Unit (ECJU)", "UK Strategic Export Controls", "https://www.gov.uk/guidance/uk-strategic-export-controls", { ko: "영국 전략물자 수출통제, control lists, licensing", en: "UK strategic export controls, control lists, and licensing." }, { ko: "영국 수출통제 또는 licence 검토를 시작할 때", en: "Use when UK export-control or licence checks are needed." }, "English"],
    ukProduct: ["GB", "Office for Product Safety and Standards", "Product safety advice for businesses", "https://www.gov.uk/guidance/product-safety-advice-for-businesses", { ko: "영국 소비자 제품 안전, 라벨링, technical documentation", en: "UK consumer product safety, labelling, and technical documentation guidance." }, { ko: "영국 제품안전 및 UKCA/CE 관련 확인을 시작할 때", en: "Use when product-safety or UKCA/CE route research is needed." }, "English"],
    ukReach: ["GB", "Health and Safety Executive", "UK REACH", "https://www.hse.gov.uk/reach/", { ko: "UK REACH 화학물질 등록·평가·허가·제한", en: "UK REACH registration, evaluation, authorisation, and restriction." }, { ko: "영국 화학물질 관련 확인이 필요할 때", en: "Use for Great Britain chemical regulation research." }, "English"],
    ukSanctions: ["GB", "GOV.UK", "UK Sanctions", "https://www.gov.uk/government/collections/uk-sanctions", { ko: "UK Sanctions List, trade sanctions, guidance", en: "UK Sanctions List, trade sanctions, and guidance." }, { ko: "영국 제재와 거래제한 확인이 필요할 때", en: "Use when UK sanctions due diligence is needed." }, "English"],
    cbsaTariff: ["CA", "Canada Border Services Agency (CBSA)", "Canadian customs tariff", "https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif/menu-eng.html", { ko: "캐나다 관세표와 tariff classification 자료", en: "Canadian Customs Tariff and tariff-classification references." }, { ko: "캐나다 수입 전 세번·관세 확인이 필요할 때", en: "Use before importing into Canada to check tariff references." }, "English / French"],
    cbsaImport: ["CA", "CBSA", "Importing commercial goods into Canada", "https://www.cbsa-asfc.gc.ca/import/guide-eng.html", { ko: "상업용 물품 수입 절차와 importer guidance", en: "Commercial-goods import process and importer guidance." }, { ko: "캐나다 수입 절차를 처음 정리할 때", en: "Use when mapping Canadian commercial import steps." }, "English / French"],
    canadaControls: ["CA", "Global Affairs Canada", "Export and import controls", "https://international.canada.ca/en/global-affairs/services/controls", { ko: "수출입 허가, controlled goods, sanctions 관련 출발점", en: "Export/import permits, controlled goods, and sanctions entry point." }, { ko: "캐나다 수출통제 또는 수입통제 확인이 필요할 때", en: "Use for Canadian export/import control checks." }, "English / French"],
    canadaSanctions: ["CA", "Global Affairs Canada", "Consolidated Canadian Autonomous Sanctions List", "https://www.international.gc.ca/world-monde/international_relations-relations_internationales/sanctions/consolidated-consolide.aspx?lang=eng", { ko: "캐나다 autonomous sanctions list", en: "Canada's autonomous sanctions list." }, { ko: "캐나다 제재 관련 거래 상대방 확인이 필요할 때", en: "Use when Canadian sanctions due diligence is needed." }, "English / French"],
    healthCanada: ["CA", "Health Canada", "Consumer product safety", "https://www.canada.ca/en/health-canada/services/consumer-product-safety.html", { ko: "캐나다 소비자 제품 안전 및 리콜 자료", en: "Canadian consumer product safety and recall references." }, { ko: "소비자 제품 안전 요구사항을 확인할 때", en: "Use when consumer product safety checks are needed." }, "English / French"],
    caChem: ["CA", "Environment and Climate Change Canada", "Chemicals management plan", "https://www.canada.ca/en/health-canada/services/chemical-substances/chemicals-management-plan.html", { ko: "캐나다 화학물질 관리와 관련 자료", en: "Canadian chemicals management references." }, { ko: "캐나다 화학·환경 관련 확인이 필요할 때", en: "Use for chemicals and environmental checks." }, "English / French"],
    abf: ["AU", "Australian Border Force", "Importing goods", "https://www.abf.gov.au/importing-exporting-and-manufacturing/importing-goods", { ko: "호주 수입 절차와 border clearance 출발점", en: "Australian importing and border-clearance entry point." }, { ko: "호주 수입 절차를 확인할 때", en: "Use when mapping Australian import requirements." }, "English"],
    bicon: ["AU", "Department of Agriculture, Fisheries and Forestry", "BICON", "https://bicon.agriculture.gov.au/", { ko: "biosecurity import conditions 및 food safety requirements", en: "Biosecurity import conditions and food safety requirements." }, { ko: "동식물, 식품, 생물학적 제품 등 biosecurity 확인이 필요할 때", en: "Use for biosecurity-sensitive goods and imported food checks." }, "English"],
    auExport: ["AU", "Department of Defence", "Export controls", "https://www.defence.gov.au/business-industry/export-controls", { ko: "호주 defence and strategic goods 수출통제", en: "Australian defence and strategic-goods export controls." }, { ko: "호주 전략물자 수출통제 확인이 필요할 때", en: "Use when Australian export-control checks are needed." }, "English"],
    auProduct: ["AU", "Australian Competition & Consumer Commission", "Product Safety Australia", "https://www.productsafety.gov.au/", { ko: "호주 소비자 제품 안전 및 리콜 자료", en: "Australian consumer product safety and recalls." }, { ko: "호주 제품안전 확인을 시작할 때", en: "Use when Australian product-safety checks are needed." }, "English"],
    aicis: ["AU", "Australian Industrial Chemicals Introduction Scheme (AICIS)", "Importing and manufacturing chemicals", "https://www.industrialchemicals.gov.au/importing-and-manufacturing-chemicals", { ko: "산업용 화학물질 도입·수입 관련 공식 안내", en: "Industrial chemical introduction and import guidance." }, { ko: "호주 산업용 화학물질 확인이 필요할 때", en: "Use for industrial chemical checks in Australia." }, "English"],
    auSanctions: ["AU", "Department of Foreign Affairs and Trade", "Australia and sanctions", "https://www.dfat.gov.au/international-relations/security/sanctions", { ko: "호주 제재 체계와 consolidated list", en: "Australian sanctions framework and consolidated list." }, { ko: "호주 제재·거래제한 확인이 필요할 때", en: "Use for Australian sanctions due diligence." }, "English"],
    indiaCustoms: ["IN", "CBIC", "Customs clearance procedure", "https://www.cbic.gov.in/htdocs-cbec/customs/clearance-procedure", { ko: "인도 통관 절차와 customs guidance", en: "Indian customs clearance procedure and guidance." }, { ko: "인도 수입·통관 절차를 확인할 때", en: "Use when mapping Indian customs clearance." }, "English"],
    dgft: ["IN", "Directorate General of Foreign Trade (DGFT)", "ITC HS Import Export Policy", "https://www.dgft.gov.in/CP/?opt=itchs-import-export", { ko: "ITC-HS 기반 수출입 정책 및 SCOMET 확인 경로", en: "ITC-HS based import/export policy and SCOMET route." }, { ko: "인도 수출입 제한·통제 품목 확인을 시작할 때", en: "Use when checking India import/export policy and export controls." }, "English"],
    indiaBis: ["IN", "Bureau of Indian Standards (BIS)", "Products under Compulsory Certification", "https://www.bis.gov.in/product-certification/products-under-compulsory-certification/?lang=en", { ko: "BIS compulsory certification and QCO 출발점", en: "BIS compulsory certification and Quality Control Order references." }, { ko: "인도 제품 인증·표준 확인이 필요할 때", en: "Use when Indian product certification or standards need review." }, "English"],
    indiaEnv: ["IN", "Ministry of Environment, Forest and Climate Change", "Hazardous substances and rules", "https://moef.gov.in/", { ko: "환경·화학 관련 공식 부처 출발점", en: "Official environment and chemical-policy entry point." }, { ko: "인도 화학·환경 관련 확인이 필요할 때", en: "Use as an official gateway for India chemical/environment checks." }, "English / Hindi"],
    vnTrade: ["VN", "Vietnam Trade Information Portal", "Procedures and Documentary Requirements", "https://vietnamtradeportal.gov.vn/", { ko: "수출입·통과 절차, measures, standards, requirements 검색", en: "Import/export/transit procedures, measures, standards, and requirements." }, { ko: "베트남 수출입 요건을 공식 포털에서 탐색할 때", en: "Use when exploring Vietnam trade procedures through the official portal." }, "English / Vietnamese"],
    vnMoit: ["VN", "Ministry of Industry and Trade", "MOIT Web Portal", "https://moit.gov.vn/en", { ko: "베트남 산업무역부 공지와 정책 자료", en: "Vietnam industry and trade ministry notices and policy resources." }, { ko: "베트남 수출입 정책 및 규제 공지를 확인할 때", en: "Use when checking Vietnam trade-policy notices." }, "English / Vietnamese"],
    vnStameq: ["VN", "STAMEQ", "Standards, Metrology and Quality", "https://tcvn.gov.vn/general-introduction/10/08/2022/?lang=en", { ko: "베트남 표준·측정·품질 관리 기관 정보", en: "Vietnam standards, metrology, and quality-management authority information." }, { ko: "베트남 제품 품질·표준 출발점을 확인할 때", en: "Use as a product-quality and standards gateway." }, "English / Vietnamese"],
    vnChem: ["VN", "Vietnam Chemicals Agency", "Cục Hóa chất", "https://moit.gov.vn/don-vi-quan-ly-nha-nuoc/khoi-tong-cuc-cuc/cuc-hoa-chat", { ko: "베트남 화학물질 관리 기관 및 관련 업무", en: "Vietnam chemicals authority and related functions." }, { ko: "베트남 화학 규제 확인이 필요할 때", en: "Use as a Vietnam chemicals official gateway." }, "Vietnamese"],
    thaiCustoms: ["TH", "Thai Customs", "Importing / Exporting and prohibited goods", "https://www.customs.go.th/cont_strc_simple.php?ini_content=individual_160426_01&lang=en&left_menu=menu_individual", { ko: "태국 금지·제한 물품과 관련 기관 안내", en: "Thai prohibited/restricted goods and related agency guidance." }, { ko: "태국 수입·수출 제한 여부와 담당기관을 찾을 때", en: "Use when checking Thai controlled or restricted goods routes." }, "English / Thai"],
    thaiTariff: ["TH", "Thai Customs", "Integrated Tariff Database", "https://itd.customs.go.th/igtf/en/main_frame.jsp", { ko: "태국 관세 및 품목분류 확인", en: "Thai tariff and classification reference." }, { ko: "태국 세번·관세 확인이 필요할 때", en: "Use when checking Thai tariff references." }, "English / Thai"],
    tisi: ["TH", "Thai Industrial Standards Institute (TISI)", "Product Certification", "https://www.tisi.go.th/website/services/product_certification", { ko: "태국 산업표준 및 제품 인증 출발점", en: "Thai industrial standards and product certification entry point." }, { ko: "태국 제품 인증·표준 확인이 필요할 때", en: "Use when Thai product certification or standards need review." }, "Thai"],
    thaiFda: ["TH", "Food and Drug Administration Thailand", "Hazardous Substances", "https://en.fda.moph.go.th/our-services-new/category/cat-how-to-apply-for-permission-on-hazardous-substances", { ko: "태국 FDA 관할 유해물질 허가 절차", en: "Thai FDA hazardous-substance permission process." }, { ko: "태국 식품·의약품·유해물질 관련 확인을 시작할 때", en: "Use for Thai FDA and hazardous-substance checks." }, "English / Thai"],
    idCustoms: ["ID", "Directorate General of Customs and Excise", "Bea Cukai", "https://www.beacukai.go.id/", { ko: "인도네시아 수입·수출·HS Code·통관 공식 포털", en: "Indonesia customs import, export, HS code, and clearance portal." }, { ko: "인도네시아 통관과 세관 서비스를 확인할 때", en: "Use when mapping Indonesian customs procedures." }, "Indonesian"],
    idTrade: ["ID", "Ministry of Trade", "Export-import information", "https://www.kemendag.go.id/", { ko: "인도네시아 수출입 정책·규정 공지", en: "Indonesia export/import policy and regulatory notices." }, { ko: "인도네시아 수출입 규정 확인이 필요할 때", en: "Use when checking Indonesia trade-policy notices." }, "Indonesian"],
    idSni: ["ID", "National Standardization Agency of Indonesia (BSN)", "SNI standards catalogue", "https://pesta.bsn.go.id/produk", { ko: "SNI 표준 검색과 제품 표준 자료", en: "SNI standards catalogue and product-standard references." }, { ko: "인도네시아 SNI 표준·제품 인증 확인을 시작할 때", en: "Use when Indonesian SNI standards need review." }, "Indonesian"],
    idInsw: ["ID", "Indonesia National Single Window", "INSW", "https://www.insw.go.id/", { ko: "인도네시아 national single window와 수출입 관련 확인처", en: "Indonesia national single window and trade gateway." }, { ko: "인도네시아 공식 gateway에서 수출입 절차를 탐색할 때", en: "Use as an official gateway for Indonesian trade procedures." }, "Indonesian"],
    sgImport: ["SG", "Singapore Customs", "Import Operations Overview", "https://www.customs.gov.sg/doing-business/import-operations/import-operations-overview/", { ko: "싱가포르 수입 절차, UEN, controlled goods, permit flow", en: "Singapore import process, UEN, controlled goods, and permit flow." }, { ko: "싱가포르 수입 절차를 확인할 때", en: "Use when checking Singapore import procedures." }, "English"],
    sgTradenet: ["SG", "Singapore Customs", "TradeNet", "https://www.customs.gov.sg/doing-business/quick-links-for-traders/tradenet/", { ko: "수입·수출·환적 permit application 및 controlled items", en: "Import/export/transhipment permits and controlled-item requirements." }, { ko: "싱가포르 TradeNet 신고·허가 경로를 확인할 때", en: "Use when TradeNet permit workflow is relevant." }, "English"],
    sgStrategic: ["SG", "Singapore Customs", "Strategic Goods Control", "https://www.customs.gov.sg/permits-and-licences/trade-controls-and-prohibitions/strategic-goods-control/", { ko: "전략물자 통제, control list, permit, sanctions red flags", en: "Strategic goods control, control list, permits, sanctions, and red flags." }, { ko: "싱가포르 전략물자·제재 확인이 필요할 때", en: "Use for Singapore strategic-goods and sanctions checks." }, "English"],
    sgProduct: ["SG", "Enterprise Singapore", "Consumer Protection and Product Safety", "https://www.enterprisesg.gov.sg/quality-standards/consumer-protection-and-product-safety", { ko: "소비자 제품 안전과 controlled goods 확인", en: "Consumer product safety and controlled-goods references." }, { ko: "싱가포르 제품 안전·표준 확인이 필요할 때", en: "Use when Singapore product safety or standards need review." }, "English"],
    mxSat: ["MX", "SAT / Aduanas", "Foreign Trade Rules", "https://www.sat.gob.mx/minisitio/NormatividadRMFyRGCE/index.html", { ko: "멕시코 외국무역 일반규칙(RGCE) 및 annexes", en: "Mexico foreign trade rules (RGCE) and annexes." }, { ko: "멕시코 통관·외국무역 규정 원문 확인이 필요할 때", en: "Use when checking Mexico customs and foreign-trade rules." }, "Spanish"],
    mxEconomia: ["MX", "Secretaría de Economía", "SNICE", "https://www.snice.gob.mx/", { ko: "멕시코 무역정보, 관세, 비관세 규제 gateway", en: "Mexico trade information, tariff, and non-tariff regulation gateway." }, { ko: "멕시코 수출입 요건을 공식 gateway에서 탐색할 때", en: "Use when exploring Mexican import/export requirements." }, "Spanish"],
    mxNom: ["MX", "Secretaría de Economía", "Normas Oficiales Mexicanas", "https://www.sinec.gob.mx/SINEC/Vista/Normalizacion/BusquedaNormas.xhtml", { ko: "NOM 등 멕시코 공식 표준 검색", en: "Official Mexican standards search, including NOM references." }, { ko: "NOM 적용 가능성 확인을 공식 표준에서 시작할 때", en: "Use when starting NOM or conformity-standard research." }, "Spanish"],
    mxHealth: ["MX", "COFEPRIS", "Trámites y Servicios", "https://www.gob.mx/cofepris/acciones-y-programas/tramites-y-servicios", { ko: "보건·식품·의약품 관련 허가와 절차", en: "Health, food, drugs, and sanitary procedure references." }, { ko: "멕시코 보건 관련 수입 요건 확인이 필요할 때", en: "Use for Mexico health-related import checks." }, "Spanish"]
  };

  const S = Object.fromEntries(Object.entries(sources).map(([key, row]) => [key, { id: key, market: row[0], agency: row[1], name: row[2], url: row[3], what: row[4], when: row[5], language: row[6] }]));

  const marketCoverage = {
    EU: { framework: "European Union", coverage: "official", sources: { import: ["taric", "a2m"], export: ["euDual", "euSanctions"], product: ["euReq", "euProduct", "a2m"], restricted: ["taric", "a2m", "euSanctions"], chemical: ["echa", "euReq"], sanctions: ["euSanctions"] } },
    US: { framework: "United States", coverage: "official", sources: { import: ["cbp", "htsus", "fda", "usda"], export: ["bisEar", "csl"], product: ["cpsc", "fcc", "fda", "nhtsa"], restricted: ["cbp", "fda", "usda", "epa"], chemical: ["epa", "fda"], sanctions: ["csl", "ofac"] } },
    CN: { framework: "China", coverage: "partial", note: { ko: "공식 영문 자료가 제한적입니다. 중국어 공식 원문, 수입자, 전문가 확인을 병행하세요.", en: "Official English coverage is limited. Verify with Chinese official sources, the importer, and qualified professionals." }, sources: { import: ["gacc", "samrCcc"], export: ["gacc", "mofcom"], product: ["samrCcc", "gacc"], restricted: ["gacc", "mofcom"], chemical: ["gacc"], sanctions: ["mofcom"] } },
    KR: { framework: "Korea", coverage: "official", sources: { import: ["unipassReq", "kcs", "mfds"], export: ["yestrade", "unipassReq"], product: ["safetyKorea", "rra"], restricted: ["unipassReq", "kcs", "yestrade"], chemical: ["kreach", "unipassReq"], sanctions: ["yestrade"] } },
    JP: { framework: "Japan", coverage: "partial", sources: { import: ["jpCustoms", "jpMhlw"], export: ["jpCustoms", "jpMeti"], product: ["jpPse", "jpCustoms"], restricted: ["jpCustoms", "jpMeti"], chemical: ["jpChem"], sanctions: ["jpMeti"] } },
    GB: { framework: "United Kingdom", coverage: "official", sources: { import: ["ukImport", "ukTariff"], export: ["ukEcju", "ukSanctions"], product: ["ukProduct"], restricted: ["ukTariff", "ukSanctions"], chemical: ["ukReach"], sanctions: ["ukSanctions"] } },
    CA: { framework: "Canada", coverage: "partial", sources: { import: ["cbsaImport", "cbsaTariff"], export: ["canadaControls", "canadaSanctions"], product: ["healthCanada"], restricted: ["canadaControls", "cbsaTariff"], chemical: ["caChem"], sanctions: ["canadaSanctions"] } },
    AU: { framework: "Australia", coverage: "partial", sources: { import: ["abf", "bicon"], export: ["auExport", "auSanctions"], product: ["auProduct"], restricted: ["abf", "bicon"], chemical: ["aicis"], sanctions: ["auSanctions"] } },
    IN: { framework: "India", coverage: "partial", sources: { import: ["indiaCustoms", "dgft"], export: ["dgft"], product: ["indiaBis"], restricted: ["dgft", "indiaCustoms"], chemical: ["indiaEnv"], sanctions: ["dgft"] } },
    VN: { framework: "Vietnam", coverage: "partial", note: { ko: "영문 source가 일부 제공되지만 현지어 원문 확인이 필요할 수 있습니다.", en: "Some English sources are available, but Vietnamese official text may still be needed." }, sources: { import: ["vnTrade"], export: ["vnTrade", "vnMoit"], product: ["vnStameq"], restricted: ["vnTrade", "vnMoit"], chemical: ["vnChem"], sanctions: ["vnMoit"] } },
    TH: { framework: "Thailand", coverage: "partial", sources: { import: ["thaiCustoms", "thaiTariff"], export: ["thaiCustoms"], product: ["tisi", "thaiFda"], restricted: ["thaiCustoms"], chemical: ["thaiFda"], sanctions: ["thaiCustoms"] } },
    ID: { framework: "Indonesia", coverage: "gateway-only", note: { ko: "현지어 공식 gateway 중심 coverage입니다.", en: "Coverage is mostly official Indonesian-language gateways." }, sources: { import: ["idCustoms", "idInsw"], export: ["idCustoms", "idTrade"], product: ["idSni"], restricted: ["idCustoms", "idTrade"], chemical: ["idTrade"], sanctions: ["idTrade"] } },
    SG: { framework: "Singapore", coverage: "official", sources: { import: ["sgImport", "sgTradenet"], export: ["sgTradenet", "sgStrategic"], product: ["sgProduct", "sgTradenet"], restricted: ["sgTradenet", "sgStrategic"], chemical: ["sgStrategic"], sanctions: ["sgStrategic"] } },
    MX: { framework: "Mexico", coverage: "partial", note: { ko: "스페인어 공식 source 중심입니다.", en: "Coverage relies mostly on official Spanish-language sources." }, sources: { import: ["mxSat", "mxEconomia"], export: ["mxEconomia", "mxSat"], product: ["mxNom", "mxEconomia"], restricted: ["mxSat", "mxEconomia"], chemical: ["mxHealth", "mxEconomia"], sanctions: ["mxEconomia"] } }
  };

  const priorityMarkets = ["US", "EU", "CN", "KR", "JP", "GB", "CA", "AU", "IN", "VN", "TH", "ID", "SG", "MX"];
  const categoryKeys = Object.keys(categories);
  let selectedCategory = "";
  let selectedMarket = "";
  let comboOpen = false;
  let activeOption = 0;
  let query = "";

  function local(value) {
    return value?.[lang] || value || "";
  }

  function countryName(code, useLang = lang) {
    const upper = String(code || "").toUpperCase();
    if (countryNameOverride[upper]?.[useLang]) return countryNameOverride[upper][useLang];
    const match = (window.LOGILEE_COUNTRY_OPTIONS || []).find((row) => row[0] === upper);
    if (match) return useLang === "ko" ? match[2] : match[1];
    try {
      return new Intl.DisplayNames([useLang === "ko" ? "ko-KR" : "en-US"], { type: "region" }).of(upper) || upper;
    } catch {
      return upper;
    }
  }

  function allMarkets() {
    const base = (window.LOGILEE_COUNTRY_OPTIONS || []).map(([code, en, ko]) => ({ code, en, ko, aliases: window.LOGILEE_COUNTRY_ALIASES?.[code] || [] }));
    if (!base.some((item) => item.code === "EU")) base.unshift({ code: "EU", en: "European Union", ko: "European Union", aliases: ["EU", "European Union", "유럽연합"] });
    return base;
  }

  function marketRecord(code) {
    const key = String(code || "").toUpperCase();
    if (key === "EU") return { iso2: "EU", countryName: countryName("EU"), framework: "European Union", coverage: "official", regionalSources: [], nationalSources: marketCoverage.EU.sources[selectedCategory] || [] };
    if (EU_MEMBERS.has(key)) return { iso2: key, countryName: countryName(key), framework: "European Union", coverage: "region-only", regionalSources: marketCoverage.EU.sources[selectedCategory] || [], nationalSources: [] };
    const curated = marketCoverage[key];
    if (curated) return { iso2: key, countryName: countryName(key), framework: curated.framework, coverage: curated.coverage, note: curated.note, regionalSources: [], nationalSources: curated.sources[selectedCategory] || [] };
    return { iso2: key, countryName: countryName(key), framework: countryName(key), coverage: "gateway-only", regionalSources: [], nationalSources: [] };
  }

  function sourceCard(key) {
    const item = S[key];
    if (!item) return "";
    const cat = categories[selectedCategory];
    return `<article class="compliance-source-card">
      <div class="compliance-source-head"><span class="status">${safeHtml(t.noDetermination)}</span><strong>${safeHtml(item.agency)}</strong></div>
      <h3>${safeHtml(item.name)}</h3>
      <dl>
        <div><dt>${safeHtml(t.what)}</dt><dd>${safeHtml(local(item.what))}</dd></div>
        <div><dt>${safeHtml(t.when)}</dt><dd>${safeHtml(local(item.when))}</dd></div>
      </dl>
      <div class="compliance-source-meta"><span>${safeHtml(t.timing)}: ${safeHtml(cat.timing.map((key) => local(timing[key])).join(" / "))}</span><span>${safeHtml(t.sourceLanguage)}: ${safeHtml(item.language)}</span></div>
      <a class="secondary-btn" href="${safeAttr(item.url)}" target="_blank" rel="noopener noreferrer"><i data-lucide="external-link"></i>${safeHtml(t.cta)}</a>
    </article>`;
  }

  function sourceGroup(title, keys) {
    if (!keys.length) return "";
    return `<section class="compliance-source-group"><h4>${safeHtml(title)}</h4><div class="compliance-source-grid">${keys.map(sourceCard).join("")}</div></section>`;
  }

  function updateUrl() {
    const url = new URL(location.href);
    selectedCategory ? url.searchParams.set("category", selectedCategory) : url.searchParams.delete("category");
    selectedMarket ? url.searchParams.set("market", selectedMarket.toLowerCase()) : url.searchParams.delete("market");
    history.replaceState(null, "", url);
  }

  function selectedSummary() {
    const bits = [];
    if (selectedCategory) bits.push(`${local(categories[selectedCategory].label)}`);
    if (selectedMarket) bits.push(countryName(selectedMarket));
    return bits.length ? bits.join(" / ") : "";
  }

  function renderGuidance() {
    const target = page.querySelector("[data-compliance-guidance]");
    if (!target) return;
    if (!selectedCategory || !selectedMarket) {
      const message = selectedCategory ? `${local(categories[selectedCategory].label)} ${t.selected}. ${t.marketNeeded}` : selectedMarket ? `${countryName(selectedMarket)} ${t.selected}. ${t.categoryNeeded}` : t.bothNeeded;
      target.innerHTML = `<div class="data-empty compliance-empty"><strong>${safeHtml(message)}</strong><span>${safeHtml(lang === "ko" ? "선택하면 Destination, regulatory framework, coverage, official source가 표시됩니다." : "After selection, this area shows destination, regulatory framework, coverage, and official sources.")}</span></div>`;
      return;
    }
    const market = marketRecord(selectedMarket);
    const cat = categories[selectedCategory];
    const allSourceKeys = [...market.regionalSources, ...market.nationalSources];
    const summaryRows = [[t.destination, market.countryName], [t.framework, market.framework], [t.coverage, coverageLabel[market.coverage]], [t.area, local(cat.label)]];
    const partyText = cat.parties.map((key) => local(parties[key])).join(" / ");
    const timingText = cat.timing.map((key) => local(timing[key])).join(" / ");
    target.innerHTML = `<div class="compliance-guidance">
      <div class="compliance-guidance-intro">
        <span class="status ${coverageClass[market.coverage] || ""}">${safeHtml(coverageLabel[market.coverage])}</span>
        <h3>${safeHtml(market.countryName)} / ${safeHtml(local(cat.label))}</h3>
        <p>${safeHtml(local(cat.desc))}</p>
        ${market.note ? `<p class="notice">${safeHtml(local(market.note))}</p>` : ""}
        <dl class="compliance-guidance-facts">${summaryRows.map(([label, value]) => `<div><dt>${safeHtml(label)}</dt><dd>${safeHtml(value)}</dd></div>`).join("")}</dl>
        <div class="compliance-practitioner"><span>${safeHtml(t.timing)}: ${safeHtml(timingText)}</span><span>${safeHtml(t.parties)}: ${safeHtml(partyText)}</span></div>
      </div>
      ${allSourceKeys.length ? `${sourceGroup(t.euWide, market.regionalSources)}${sourceGroup(market.iso2 === "EU" ? t.euWide : t.national, market.nationalSources)}` : `<div class="data-empty compliance-empty"><strong>${safeHtml(t.fallbackTitle)}</strong><span>${safeHtml(t.fallbackCopy.replace("{country}", market.countryName))}</span></div>`}
    </div>`;
    if (window.refreshIcons) window.refreshIcons();
  }

  function filteredMarkets() {
    const q = query.trim().toLowerCase();
    const rows = allMarkets();
    if (!q) {
      const ordered = priorityMarkets.map((code) => rows.find((item) => item.code === code)).filter(Boolean);
      return ordered.concat(rows.filter((item) => !priorityMarkets.includes(item.code)).slice(0, 8));
    }
    return rows.filter((item) => [item.code, item.en, item.ko].concat(item.aliases || []).join(" ").toLowerCase().includes(q)).slice(0, 12);
  }

  function renderOptions(listbox) {
    const rows = filteredMarkets();
    listbox.innerHTML = rows.length ? rows.map((item, index) => {
      const coverage = item.code === "EU" ? "official" : EU_MEMBERS.has(item.code) ? "region-only" : marketCoverage[item.code]?.coverage || "gateway-only";
      return `<button type="button" role="option" id="compliance-market-${safeAttr(item.code)}" data-market-option="${safeAttr(item.code)}" aria-selected="${index === activeOption}">
        <span><strong>${safeHtml(lang === "ko" ? item.ko : item.en)}</strong><b>${safeHtml(item.code)}</b></span>
        <small>${safeHtml(coverageLabel[coverage])}${EU_MEMBERS.has(item.code) ? ` / ${safeHtml("European Union")}` : ""}</small>
      </button>`;
    }).join("") : `<div class="country-combobox-empty">${safeHtml(lang === "ko" ? "일치하는 목적지 시장이 없습니다." : "No matching destination market.")}</div>`;
  }

  function selectMarket(code) {
    selectedMarket = String(code || "").toUpperCase();
    query = "";
    comboOpen = false;
    updateUrl();
    renderWorkflow();
    renderGuidance();
    renderRelated();
  }

  function renderWorkflow(restoreMarketFocus = false) {
    const target = page.querySelector("[data-compliance-workflow]");
    if (!target) return;
    const display = selectedMarket ? `${countryName(selectedMarket)} (${selectedMarket})` : query;
    const rows = filteredMarkets();
    const activeMarketId = comboOpen && rows[activeOption] ? `compliance-market-${rows[activeOption].code}` : "";
    target.innerHTML = `<div class="compliance-step">
      <h3>${safeHtml(t.categoryTitle)}</h3>
      <div class="compliance-choice-grid compliance-category-grid">${categoryKeys.map((key) => `<button type="button" class="compliance-choice${key === selectedCategory ? " is-selected" : ""}" data-compliance-category="${key}" aria-pressed="${key === selectedCategory}">
        <span>${safeHtml(local(categories[key].label))}</span><small>${safeHtml(local(categories[key].desc))}</small>${key === selectedCategory ? `<b>${safeHtml(t.selected)}</b>` : ""}
      </button>`).join("")}</div>
    </div>
    <div class="compliance-step">
      <h3>${safeHtml(t.marketTitle)}</h3>
      <div class="compliance-market-combobox" data-compliance-combobox>
        <label for="compliance-market-input">${safeHtml(t.marketLabel)}</label>
        <div class="compliance-market-input">
          <input id="compliance-market-input" type="text" role="combobox" aria-expanded="${comboOpen}" aria-controls="compliance-market-list" aria-autocomplete="list" ${activeMarketId ? `aria-activedescendant="${safeAttr(activeMarketId)}"` : ""} autocomplete="off" placeholder="${safeAttr(t.marketPlaceholder)}" value="${safeAttr(display)}">
          <button type="button" aria-label="${safeAttr(lang === "ko" ? "목적지 목록 열기" : "Open destination list")}" data-compliance-combo-toggle><i data-lucide="chevron-down"></i></button>
        </div>
        <div class="compliance-market-list${comboOpen ? " is-open" : ""}" id="compliance-market-list" role="listbox"></div>
      </div>
      <p class="compliance-selection-line">${safeHtml(selectedSummary() || (lang === "ko" ? "공식 source coverage는 시장별로 다릅니다." : "Official-source coverage varies by market."))}</p>
    </div>`;
    const listbox = target.querySelector("#compliance-market-list");
    renderOptions(listbox);
    if (window.refreshIcons) window.refreshIcons();
    if (restoreMarketFocus) {
      requestAnimationFrame(() => {
        const input = target.querySelector("#compliance-market-input");
        input?.focus();
        if (!selectedMarket) input?.setSelectionRange(query.length, query.length);
      });
    }
  }

  function wireWorkflow() {
    page.addEventListener("click", (event) => {
      const category = event.target.closest("[data-compliance-category]");
      const option = event.target.closest("[data-market-option]");
      const toggle = event.target.closest("[data-compliance-combo-toggle]");
      const insideCombo = event.target.closest("[data-compliance-combobox]");
      if (category) {
        selectedCategory = category.dataset.complianceCategory || "";
        updateUrl();
        renderWorkflow();
        renderGuidance();
        return;
      }
      if (option) {
        selectMarket(option.dataset.marketOption);
        return;
      }
      if (toggle) {
        comboOpen = !comboOpen;
        activeOption = 0;
        renderWorkflow(true);
        return;
      }
      if (!insideCombo && comboOpen) {
        comboOpen = false;
        renderWorkflow();
      }
    });

    page.addEventListener("input", (event) => {
      if (event.target.id !== "compliance-market-input") return;
      selectedMarket = "";
      query = event.target.value;
      comboOpen = true;
      activeOption = 0;
      renderWorkflow(true);
    });

    page.addEventListener("keydown", (event) => {
      if (event.target.id !== "compliance-market-input") return;
      const rows = filteredMarkets();
      if (event.key === "ArrowDown") {
        event.preventDefault();
        comboOpen = true;
        activeOption = Math.min(rows.length - 1, activeOption + 1);
        renderWorkflow(true);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        comboOpen = true;
        activeOption = Math.max(0, activeOption - 1);
        renderWorkflow(true);
      } else if (event.key === "Enter") {
        event.preventDefault();
        if (rows[activeOption]) selectMarket(rows[activeOption].code);
      } else if (event.key === "Escape") {
        comboOpen = false;
        renderWorkflow(true);
      }
    });
  }

  const checklist = [
    { id: "product", title: { ko: "제품 정보", en: "Product" }, items: [["hs", "HS Code 확인", "Confirm HS Code", "quote", "../hscode.html", "../hscode-en.html", t.ctaHs], ["use", "제품 용도 확인", "Confirm product use", "quote"], ["material", "주요 성분/재질 확인", "Confirm main ingredients/materials", "order"], ["spec", "기술사양 확인", "Confirm technical specifications", "order"]] },
    { id: "market", title: { ko: "수입국 요건", en: "Market Requirements" }, items: [["import", "일반 수입요건 확인", "Check general import requirements", "quote", "#reference-areas", "#reference-areas", t.ctaExplorer], ["restricted", "금지·제한 품목 여부 확인", "Check prohibited/restricted goods sources", "quote", "#reference-areas", "#reference-areas", t.ctaSource], ["cert", "제품 인증/등록 요건 확인", "Check product certification/registration sources", "production", "#reference-areas", "#reference-areas", t.ctaSource], ["label", "라벨링/마킹 요건 확인", "Check labelling/marking requirements", "production"], ["chemical", "필요 시 화학·환경 규제 확인", "Check chemical/environmental rules if needed", "order", "#reference-areas", "#reference-areas", t.ctaSource]] },
    { id: "transaction", title: { ko: "거래 확인", en: "Transaction" }, items: [["export", "수출통제 관련 확인", "Check export-control sources", "quote", "#reference-areas", "#reference-areas", t.ctaSource], ["enduse", "최종사용자/최종용도 확인", "Confirm end user/end use", "quote"], ["screening", "거래제한/제재 목록 확인", "Check sanctions/restricted-party sources", "shipment", "https://www.trade.gov/consolidated-screening-list", "https://www.trade.gov/consolidated-screening-list", t.ctaSource], ["license", "필요 시 수출허가 관련 확인", "Check export-license sources if needed", "shipment", "#reference-areas", "#reference-areas", t.ctaSource]] },
    { id: "documents", title: { ko: "서류", en: "Documents" }, items: [["invoice", "Commercial Invoice 확인", "Check Commercial Invoice", "shipment", "posts/commercial-invoice-common-mistakes/", "posts/commercial-invoice-common-mistakes/", t.ctaGuide], ["packing", "Packing List 확인", "Check Packing List", "shipment"], ["origin", "Certificate of Origin 필요 여부 확인", "Check whether Certificate of Origin is needed", "shipment"], ["permit", "License / Permit / Certificate 필요 여부 확인", "Check whether a license, permit, or certificate is needed", "clearance"]] }
  ];

  function renderChecklist() {
    const target = page.querySelector("[data-compliance-checklist]");
    if (!target) return;
    const storageKey = `logilee:compliance-checklist:${lang}`;
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(storageKey) || "{}"); } catch { saved = {}; }
    target.innerHTML = `<div class="compliance-checklist-grid">${checklist.map((group) => `<fieldset class="compliance-checklist-group"><legend>${safeHtml(local(group.title))}</legend>${group.items.map(([id, koLabel, enLabel, timeKey, koHref, enHref, label]) => {
      const itemId = `${group.id}-${id}`;
      const href = lang === "ko" ? koHref : enHref;
      return `<label class="compliance-check-item" for="${safeAttr(itemId)}"><input id="${safeAttr(itemId)}" type="checkbox" data-compliance-check="${safeAttr(itemId)}" ${saved[itemId] ? "checked" : ""}><span><strong>${safeHtml(lang === "ko" ? koLabel : enLabel)}</strong><small>${safeHtml(local(timing[timeKey]))}</small></span>${href ? `<a href="${safeAttr(href)}" ${/^https?:/.test(href) ? 'target="_blank" rel="noopener noreferrer"' : ""}>${safeHtml(label)}</a>` : ""}</label>`;
    }).join("")}</fieldset>`).join("")}</div><button class="secondary-btn compliance-reset" type="button" data-compliance-reset><i data-lucide="rotate-ccw"></i>${safeHtml(t.reset)}</button>`;
    target.addEventListener("change", (event) => {
      const input = event.target.closest("[data-compliance-check]");
      if (!input) return;
      saved[input.dataset.complianceCheck] = input.checked;
      localStorage.setItem(storageKey, JSON.stringify(saved));
    }, { once: false });
    target.querySelector("[data-compliance-reset]")?.addEventListener("click", () => {
      localStorage.removeItem(storageKey);
      target.querySelectorAll("[data-compliance-check]").forEach((input) => { input.checked = false; });
    });
    if (window.refreshIcons) window.refreshIcons();
  }

  function renderRelated() {
    const target = page.querySelector("[data-compliance-related]");
    if (!target) return;
    const country = selectedMarket && selectedMarket !== "EU" ? selectedMarket : "US";
    const tools = lang === "ko"
      ? [["HS Code 확인", "../hscode.html", "barcode"], ["국가 무역 프로필", `country-trade-profile.html?country=${encodeURIComponent(country)}`, "globe"], ["Global Trade Explorer", "global-trade-explorer.html", "chart-column"], ["Commercial Invoice guide", "posts/commercial-invoice-common-mistakes/", "file-text"]]
      : [["HS Code Lookup", "../hscode-en.html", "barcode"], ["Country Trade Profile", `country-trade-profile.html?country=${encodeURIComponent(country)}`, "globe"], ["Global Trade Explorer", "global-trade-explorer.html", "chart-column"], ["Commercial Invoice guide", "posts/commercial-invoice-common-mistakes/", "file-text"]];
    target.innerHTML = `<p class="muted">${safeHtml(t.relatedIntro)}</p><div class="country-tool-grid compliance-tool-grid">${tools.map(([label, href, icon]) => `<a href="${safeAttr(href)}"><i data-lucide="${safeAttr(icon)}"></i><strong>${safeHtml(label)}</strong></a>`).join("")}</div>`;
    if (window.refreshIcons) window.refreshIcons();
  }

  function renderSources() {
    const target = page.querySelector("[data-compliance-sources]");
    if (!target) return;
    const selected = selectedMarket ? marketRecord(selectedMarket) : null;
    const groups = priorityMarkets.map((code) => {
      const cov = code === "EU" ? marketCoverage.EU : marketCoverage[code];
      const keys = [...new Set(Object.values(cov.sources).flat())];
      return { code, name: countryName(code), coverage: cov.coverage, keys };
    });
    target.innerHTML = `${selected ? `<div class="compliance-selected-source-note"><strong>${safeHtml(selected.countryName)}</strong><span>${safeHtml(coverageLabel[selected.coverage])}</span></div>` : ""}
    <div class="compliance-source-accordions">${groups.map((group) => `<details class="compliance-source-accordion" ${selected?.iso2 === group.code ? "open" : ""}>
      <summary aria-expanded="${selected?.iso2 === group.code ? "true" : "false"}"><span><strong>${safeHtml(group.name)}</strong><small>${group.keys.length} ${safeHtml(lang === "ko" ? "official sources" : "official sources")}${group.coverage !== "official" ? ` / ${safeHtml(coverageLabel[group.coverage])}` : ""}</small></span><b aria-hidden="true"></b></summary>
      <ul>${group.keys.map((key) => `<li><a href="${safeAttr(S[key].url)}" target="_blank" rel="noopener noreferrer">${safeHtml(S[key].agency)} - ${safeHtml(S[key].name)}</a><span>${safeHtml(local(S[key].what))}</span></li>`).join("")}</ul>
    </details>`).join("")}</div>
    <div class="panel compliance-limitations"><h3>${safeHtml(t.limitationTitle)}</h3><p>${safeHtml(t.limitation)}</p><p><strong>${safeHtml(t.curated)}:</strong> ${safeHtml(priorityMarkets.map(countryName).join(", "))}. <strong>${safeHtml(t.other)}:</strong> ${safeHtml(lang === "ko" ? "상세 source 미구축 국가는 공식 gateway 중심으로 안내합니다." : "Non-curated countries are shown as official-gateway-only or general guidance.")}</p></div>`;
    target.querySelectorAll(".compliance-source-accordion").forEach((details) => {
      details.addEventListener("toggle", () => {
        details.querySelector("summary")?.setAttribute("aria-expanded", details.open ? "true" : "false");
      });
    });
  }

  function normalizeMarket(value) {
    const raw = String(value || "").toUpperCase();
    if (raw === "EU") return "EU";
    return raw.length === 2 ? raw : "";
  }

  function readInitialState() {
    const params = new URLSearchParams(location.search);
    const market = normalizeMarket(params.get("market"));
    const category = (params.get("category") || "").toLowerCase();
    selectedMarket = market && allMarkets().some((item) => item.code === market) ? market : "";
    selectedCategory = own(categories, category) ? category : "";
  }

  readInitialState();
  renderWorkflow();
  renderGuidance();
  renderChecklist();
  renderRelated();
  renderSources();
  wireWorkflow();
})();
