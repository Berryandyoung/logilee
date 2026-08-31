(function () {
  const page = document.querySelector("[data-compliance-page]");
  if (!page) return;

  const lang = document.documentElement.lang && document.documentElement.lang.startsWith("ko") ? "ko" : "en";
  const safeHtml = window.escapeHtml || ((value) => String(value || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"));
  const safeAttr = window.escapeAttribute || ((value) => String(value || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"));

  const text = {
    ko: {
      categoryTitle: "1. 무엇을 확인하고 있나요?",
      marketTitle: "2. 어느 시장을 확인하나요?",
      selected: "선택됨",
      guidanceEmpty: "업무 영역과 시장을 선택하면 관련 공식 확인처가 표시됩니다.",
      additional: "추가 확인 필요",
      noDetermination: "자동 판정하지 않음",
      official: "공식 확인처",
      what: "확인할 내용",
      when: "언제 유용한가",
      cta: "공식 자료 확인 ->",
      checklistReset: "Reset Checklist",
      limitationTitle: "참고 범위와 한계",
      limitation: "이 페이지는 참고용 탐색 허브입니다. 규정은 변경될 수 있고, 제품의 성분·용도·기술사양·원산지·거래 상대방에 따라 확인 범위가 달라질 수 있습니다. 실제 거래 전 공식기관, 수입자, 관세사, 인증기관 또는 법률 전문가를 통해 최신 요건을 확인하세요.",
      relatedIntro: "품목 분류가 아직 정해지지 않았다면 HS Code를 먼저 확인하세요.",
      partial: "공식 영문 자료가 제한적일 수 있어 추가 확인이 필요합니다."
    },
    en: {
      categoryTitle: "1. What do you need to check?",
      marketTitle: "2. Choose a Market",
      selected: "Selected",
      guidanceEmpty: "Select a compliance category and market to see relevant official sources.",
      additional: "Additional verification required",
      noDetermination: "No automated determination",
      official: "Official source",
      what: "What you can check",
      when: "When it is useful",
      cta: "Official source ->",
      checklistReset: "Reset Checklist",
      limitationTitle: "Scope and Limitations",
      limitation: "This page is an informational navigation hub. Regulations can change, and product composition, use, technical specifications, origin, and transaction parties can change what must be checked. Before an actual transaction, verify current requirements with official authorities, the importer, a customs broker, certification body, or qualified legal professional.",
      relatedIntro: "If the product classification is not settled yet, start with the HS Code check.",
      partial: "Official English coverage may be incomplete, so additional verification is required."
    }
  }[lang];

  const labels = {
    import: { ko: ["수입 규제", "해당 시장에 물품을 반입할 때 확인해야 할 기본 요건과 공식 절차를 찾습니다."], en: ["Import Requirements", "Find basic requirements and official procedures to review before goods enter the market."] },
    export: { ko: ["수출통제", "전략물자·이중용도 품목 및 수출허가 관련 공식 확인처를 찾습니다."], en: ["Export Controls", "Find official sources for dual-use, strategic goods, and export-licensing checks."] },
    product: { ko: ["제품 인증·안전", "제품에 적용될 수 있는 인증·등록·제품안전 요구사항을 확인합니다."], en: ["Product Certification & Safety", "Review official certification, registration, and product-safety sources that may apply to a product."] },
    restricted: { ko: ["금지·제한 품목", "수입·수출 금지 또는 별도 허가·조건이 있을 수 있는 품목의 공식 확인처를 찾습니다."], en: ["Prohibited / Restricted Goods", "Find official sources for goods that may be prohibited, restricted, or subject to conditions."] },
    chemical: { ko: ["화학·환경 규제", "화학물질·환경 관련 등록, 제한 및 관련 제도를 확인합니다."], en: ["Chemicals & Environmental Rules", "Review official chemical, environmental, registration, and restriction sources."] },
    sanctions: { ko: ["제재·거래제한", "거래 상대방 및 거래와 관련된 공식 제재·거래제한 자료를 확인합니다."], en: ["Sanctions / Restricted Party Screening", "Find official sanctions and restricted-party screening resources for transaction due diligence."] }
  };

  const markets = {
    us: { code: "US", name: "United States", labelKo: "United States", icon: "US" },
    eu: { code: "EU", name: "European Union", labelKo: "European Union", icon: "EU" },
    cn: { code: "CN", name: "China", labelKo: "China", icon: "CN", partial: true },
    kr: { code: "KR", name: "Korea", labelKo: "Korea", icon: "KR" }
  };

  const categories = Object.keys(labels);
  const sourceText = {
    cbp: {
      agency: "U.S. Customs and Border Protection (CBP)",
      name: "Basic import and export guidance",
      url: "https://www.cbp.gov/trade/basic-import-export",
      what: { ko: "미국 수입통관의 기본 절차, 신규 수입자 안내, 통관 관련 공식 자료", en: "Core U.S. import procedures, new importer guidance, and customs reference material." },
      when: { ko: "미국으로 물품을 수입하기 전 일반적인 customs requirements를 확인할 때", en: "Useful before importing goods into the United States and mapping the customs workflow." },
      description: { ko: "CBP 수입·수출 기본 안내", en: "CBP import and export basics." }
    },
    htsus: {
      agency: "U.S. International Trade Commission",
      name: "Harmonized Tariff Schedule of the United States",
      url: "https://hts.usitc.gov/",
      what: { ko: "미국 HTS 분류, 관세율, tariff-line 기준 확인", en: "U.S. HTS classifications, tariff lines, and duty-rate references." },
      when: { ko: "HS Code에서 미국 8~10자리 HTSUS 확인이 필요할 때", en: "Useful when the U.S. tariff-line classification needs official verification." },
      description: { ko: "미국 공식 관세표", en: "Official U.S. tariff schedule." }
    },
    bisEar: {
      agency: "U.S. Bureau of Industry and Security (BIS)",
      name: "Export Administration Regulations (EAR)",
      url: "https://www.bis.gov/regulations/ear",
      what: { ko: "EAR 적용 범위, 수출통제 절차, Commerce Control List 관련 공식 자료", en: "EAR scope, export-control rules, and Commerce Control List references." },
      when: { ko: "이중용도 품목, 기술, 소프트웨어 수출통제 검토를 시작할 때", en: "Useful when starting a dual-use goods, software, or technology export-control review." },
      description: { ko: "미국 EAR 공식 자료", en: "Official U.S. EAR resource." }
    },
    bisCcl: {
      agency: "U.S. Bureau of Industry and Security (BIS)",
      name: "Interactive Commerce Control List",
      url: "https://www.bis.gov/regulations/ear/interactive-commerce-control-list",
      what: { ko: "ECCN(Export Control Classification Number) 후보를 키워드와 카테고리로 탐색", en: "Search potential Export Control Classification Number (ECCN) entries by keyword and category." },
      when: { ko: "제품 사양을 기준으로 CCL 항목을 직접 검토해야 할 때", en: "Useful when reviewing technical specifications against CCL entries." },
      description: { ko: "ECCN 탐색 도구", en: "ECCN exploration tool." }
    },
    csl: {
      agency: "International Trade Administration",
      name: "Consolidated Screening List",
      url: "https://www.trade.gov/consolidated-screening-list",
      what: { ko: "Commerce, State, Treasury의 주요 거래제한 목록을 통합 검색", en: "Search consolidated Commerce, State, and Treasury screening lists." },
      when: { ko: "buyer, consignee, end user 등 거래 상대방 이름을 공식 경로에서 확인할 때", en: "Useful when checking buyer, consignee, end-user, or other party names through the official route." },
      description: { ko: "미국 통합 거래제한 목록", en: "U.S. consolidated restricted-party screening resource." }
    },
    ofac: {
      agency: "U.S. Treasury OFAC",
      name: "Sanctions List Search",
      url: "https://ofac.treasury.gov/sanctions-list-search-tool",
      what: { ko: "SDN 및 Non-SDN 제재 목록의 잠재적 일치 결과 검색", en: "Search for potential matches against SDN and non-SDN sanctions lists." },
      when: { ko: "제재 리스크 또는 거래 상대방 확인이 필요한 경우", en: "Useful when sanctions or restricted-party due diligence is needed." },
      description: { ko: "OFAC 제재 목록 검색", en: "OFAC sanctions list search." }
    },
    fda: {
      agency: "U.S. Food and Drug Administration (FDA)",
      name: "Import Program",
      url: "https://www.fda.gov/industry/import-program",
      what: { ko: "FDA 규제 대상 제품의 수입 프로그램, entry 제출, import alerts", en: "FDA-regulated product import programs, entry submission, and import alerts." },
      when: { ko: "식품, 의약품, 의료기기, 화장품 등 FDA 관할 가능성이 있는 제품을 확인할 때", en: "Useful for products that may fall under FDA oversight, such as food, drugs, devices, or cosmetics." },
      description: { ko: "FDA 수입 관리", en: "FDA import program." }
    },
    epa: {
      agency: "U.S. Environmental Protection Agency (EPA)",
      name: "TSCA Import-Export Requirements",
      url: "https://www.epa.gov/tsca-import-export-requirements",
      what: { ko: "TSCA 대상 화학물질 수입·수출 관련 요구사항", en: "TSCA chemical import and export requirement references." },
      when: { ko: "화학물질 또는 화학 성분이 포함된 제품을 미국에 반입하거나 수출할 때", en: "Useful for chemicals or products containing chemical substances." },
      description: { ko: "미국 화학물질 규제", en: "U.S. chemical rules." }
    },
    cpsc: {
      agency: "U.S. Consumer Product Safety Commission (CPSC)",
      name: "Business and Manufacturing",
      url: "https://www.cpsc.gov/Business--Manufacturing",
      what: { ko: "소비자 제품 안전 요구사항, 인증서, 리콜 및 사업자 자료", en: "Consumer product safety requirements, certificates, recalls, and business guidance." },
      when: { ko: "소비자용 제품의 안전 기준 또는 인증서 확인이 필요할 때", en: "Useful when consumer product safety rules or certificates need review." },
      description: { ko: "소비자 제품 안전", en: "Consumer product safety." }
    },
    fcc: {
      agency: "Federal Communications Commission (FCC)",
      name: "Equipment Authorization",
      url: "https://apps.fcc.gov/oetcf/kdb/forms/FTSSearchResultPage.cfm?id=30744&switch=P",
      what: { ko: "무선·통신 장비의 FCC 장비 승인 관련 공식 자료", en: "FCC equipment authorization references for radiofrequency and communications devices." },
      when: { ko: "전자·무선·통신 기능이 있는 제품의 미국 시장 진입을 확인할 때", en: "Useful for electronic, wireless, or communications-capable products." },
      description: { ko: "FCC 장비 승인", en: "FCC equipment authorization." }
    },
    usda: {
      agency: "USDA APHIS",
      name: "Imports and Exports",
      url: "https://www.aphis.usda.gov/plant-imports",
      what: { ko: "동식물, 농산물 및 관련 품목의 검역·수입 절차", en: "Plant, animal, agricultural, and related import or quarantine references." },
      when: { ko: "농축산물, 식물성 자재, 동물성 품목 관련 확인이 필요할 때", en: "Useful for agricultural, plant, animal, or quarantine-sensitive goods." },
      description: { ko: "미국 농축산 검역", en: "U.S. animal and plant health import checks." }
    },
    nhtsa: {
      agency: "National Highway Traffic Safety Administration (NHTSA)",
      name: "Importing a Vehicle",
      url: "https://www.nhtsa.gov/importing-vehicle",
      what: { ko: "자동차 및 자동차 장비의 미국 수입 관련 안전 기준 자료", en: "Vehicle and motor-vehicle equipment import safety references." },
      when: { ko: "차량 또는 자동차 부품 관련 미국 규제 확인이 필요할 때", en: "Useful when vehicles or motor-vehicle equipment are involved." },
      description: { ko: "자동차 수입 안전 기준", en: "Vehicle import safety." }
    },
    taric: {
      agency: "European Commission Taxation and Customs Union",
      name: "TARIC",
      url: "https://taxation-customs.ec.europa.eu/online-services/online-services-and-databases-customs/eu-customs-tariff-taric_en",
      what: { ko: "EU commodity code 기준 관세 및 관련 무역조치·제한 확인", en: "EU commodity-code based tariffs, trade measures, and restrictions." },
      when: { ko: "CN/TARIC 코드 기준으로 EU 관세와 조치를 확인할 때", en: "Useful when checking EU measures by CN or TARIC commodity code." },
      description: { ko: "EU 통합관세 시스템", en: "EU integrated tariff system." }
    },
    a2m: {
      agency: "European Commission",
      name: "Access2Markets",
      url: "https://trade.ec.europa.eu/access-to-markets/en/home",
      what: { ko: "수출국·수입국·품목 기준 관세, 절차, 원산지, 수입요건 탐색", en: "Tariffs, procedures, origin, import requirements, and trade information by origin, destination, and product." },
      when: { ko: "특정 수출국에서 EU로 보내는 품목의 요건을 단계적으로 볼 때", en: "Useful when exploring a product shipment from a specific origin to an EU destination." },
      description: { ko: "EU 공식 무역 포털", en: "EU official trade portal." }
    },
    euProduct: {
      agency: "European Commission",
      name: "Product Safety",
      url: "https://commission.europa.eu/topics/business-and-industry/product-safety_en",
      what: { ko: "EU 제품 안전, Safety Gate, 사업자 의무 관련 자료", en: "EU product safety, Safety Gate, and business-obligation references." },
      when: { ko: "비식품 소비자 제품의 안전 요구사항과 리콜 정보를 확인할 때", en: "Useful when checking non-food consumer product safety and recall information." },
      description: { ko: "EU 제품 안전", en: "EU product safety." }
    },
    euRequirements: {
      agency: "Your Europe",
      name: "Identifying Product Requirements",
      url: "https://europa.eu/youreurope/business/product-rules-compliance/general-product-compliance/identifying-product-requirements/index_en.htm",
      what: { ko: "EU 제품 요구사항 확인 방법과 Access2Markets 활용 경로", en: "How to identify EU product requirements and use Access2Markets." },
      when: { ko: "CE, 라벨링, 일반 제품 요구사항의 출발점을 찾을 때", en: "Useful as a starting point for CE, labelling, and general product requirements." },
      description: { ko: "EU 제품 요구사항 안내", en: "EU product requirement guide." }
    },
    echaReach: {
      agency: "European Chemicals Agency (ECHA)",
      name: "Understanding REACH",
      url: "https://echa.europa.eu/en-GB/regulations/reach/understanding-reach",
      what: { ko: "REACH 등록, 평가, 허가, 제한 제도의 기본 구조", en: "REACH registration, evaluation, authorisation, and restriction framework." },
      when: { ko: "EU에 화학물질, 혼합물 또는 성분 포함 제품을 공급할 때", en: "Useful for substances, mixtures, or articles containing chemicals supplied to the EU." },
      description: { ko: "EU REACH 화학 규제", en: "EU REACH chemicals regulation." }
    },
    echaChem: {
      agency: "European Chemicals Agency (ECHA)",
      name: "ECHA CHEM / Search for Chemicals",
      url: "https://echa.europa.eu/en-US/information-on-chemicals",
      what: { ko: "화학물질 정보, REACH 등록자료, CLP 관련 데이터 탐색", en: "Chemical information, REACH registration data, and CLP-related data." },
      when: { ko: "CAS, EC 번호 또는 물질명으로 EU 화학 자료를 찾을 때", en: "Useful when searching EU chemical data by CAS, EC number, or substance name." },
      description: { ko: "ECHA 화학물질 검색", en: "ECHA chemical search." }
    },
    euDual: {
      agency: "European Commission",
      name: "Exporting Dual-Use Items",
      url: "https://policy.trade.ec.europa.eu/help-exporters-and-importers/exporting-dual-use-items_en",
      what: { ko: "EU 이중용도 품목 수출통제 체계, Regulation (EU) 2021/821, 관할기관 자료", en: "EU dual-use export-control framework, Regulation (EU) 2021/821, and competent-authority references." },
      when: { ko: "EU에서 이중용도 품목, 소프트웨어, 기술 수출을 검토할 때", en: "Useful when reviewing EU exports of dual-use goods, software, or technology." },
      description: { ko: "EU 이중용도 수출통제", en: "EU dual-use export controls." }
    },
    euSanctions: {
      agency: "European Commission DG FISMA",
      name: "EU Sanctions Resources",
      url: "https://finance.ec.europa.eu/eu-and-world/sanctions-restrictive-measures/overview-sanctions-and-related-resources_en",
      what: { ko: "EU 제재 개요, consolidated list, sanctions map 등 공식 자료", en: "EU sanctions overview, consolidated list, sanctions map, and related resources." },
      when: { ko: "EU 관련 거래 상대방, 목적지, 품목 제한을 확인할 때", en: "Useful when checking EU sanctions context for parties, destinations, or transaction restrictions." },
      description: { ko: "EU 제재 공식 자료", en: "EU sanctions resources." }
    },
    gacc: {
      agency: "General Administration of Customs of China (GACC)",
      name: "GACC English Portal",
      url: "http://english.customs.gov.cn/",
      what: { ko: "중국 세관 공지, 통관·검역 관련 공식 자료의 출발점", en: "China customs notices and official customs/quarantine reference entry point." },
      when: { ko: "중국 수입·수출 통관 관련 공식 세관 자료를 확인할 때", en: "Useful as an official customs starting point for China import or export checks." },
      description: { ko: "중국 해관총서 영문 포털", en: "China customs English portal." }
    },
    samrCcc: {
      agency: "State Administration for Market Regulation (SAMR)",
      name: "CCC Related Provisions and Rules",
      url: "https://english.samr.gov.cn/CooperationandExchanges/Organizations/art/2026/art_c2f7533f9c0046a1ae3e65a95259218a.html",
      what: { ko: "China Compulsory Certification(CCC) 관련 공식 영문 규정", en: "Official English provisions for China Compulsory Certification (CCC)." },
      when: { ko: "중국 시장 진입 전 CCC 제도와 인증 책임을 확인할 때", en: "Useful when checking whether CCC framework research is needed before China market entry." },
      description: { ko: "중국 CCC 공식 영문 자료", en: "Official CCC reference." }
    },
    mofcom: {
      agency: "Ministry of Commerce of China (MOFCOM)",
      name: "China Export Control Information",
      url: "https://exportcontrol.mofcom.gov.cn/",
      what: { ko: "중국 수출통제 정책법규, 공지, 이중용도 품목 관련 공식 자료", en: "Official China export-control laws, notices, and dual-use item resources." },
      when: { ko: "중국 수출통제 또는 제한 품목 관련 공식 원문 확인이 필요할 때", en: "Useful when checking official China export-control or restricted-goods materials." },
      description: { ko: "중국 수출통제 공식 자료", en: "China export-control official resource." }
    },
    unipassReq: {
      agency: "Korea Customs Service / UNI-PASS",
      name: "품목번호별 요건사항",
      url: "https://unipass.customs.go.kr/clip/hsinfosrch/openULS0201010Q.do",
      what: { ko: "품목번호별 세관장확인, 수출입공고, 통합공고 요건", en: "Korean item-code based customs confirmation, import/export notice, and integrated notice requirements." },
      when: { ko: "한국 수입·수출 요건을 HS/품목번호 기준으로 확인할 때", en: "Useful when checking Korea import/export requirements by HS or item code." },
      description: { ko: "한국 수출입 요건 조회", en: "Korea import/export requirement lookup." }
    },
    kcs: {
      agency: "Korea Customs Service",
      name: "UNI-PASS",
      url: "https://unipass.customs.go.kr/per/index.do",
      what: { ko: "전자통관, 수입·수출 신고, 통관정보, 품목분류 관련 공식 서비스", en: "Electronic customs clearance, declarations, customs information, and classification services." },
      when: { ko: "한국 통관 실무와 UNI-PASS 서비스를 확인할 때", en: "Useful when working through Korea customs and UNI-PASS processes." },
      description: { ko: "국가관세종합정보망", en: "Korea electronic customs system." }
    },
    yestrade: {
      agency: "YESTRADE / 무역안보관리원",
      name: "전략물자관리시스템",
      url: "https://www.yestrade.go.kr/",
      what: { ko: "전략물자 자가판정, 전문판정, 수출허가, 우려거래자 검색", en: "Strategic-goods self-classification, expert classification, export licenses, and parties of concern." },
      when: { ko: "한국 수출통제와 전략물자 확인이 필요할 때", en: "Useful when reviewing Korea strategic-goods export controls." },
      description: { ko: "한국 전략물자 공식 시스템", en: "Korea strategic-goods official system." }
    },
    safetyKorea: {
      agency: "Safety Korea / 국가기술표준원",
      name: "제품안전정보센터",
      url: "https://www.safetykorea.kr/policy/targetsSafetyCert",
      what: { ko: "전기용품, 생활용품, 어린이제품 안전관리제도 및 대상품목", en: "Product safety management systems and covered product categories for electrical, household, and children's products." },
      when: { ko: "KC 제품안전 인증·확인 대상 여부를 공식 자료에서 검토할 때", en: "Useful when reviewing Korean KC product-safety categories and procedures." },
      description: { ko: "KC 제품안전 확인", en: "Korea product safety checks." }
    },
    rra: {
      agency: "National Radio Research Agency (RRA)",
      name: "Broadcasting/Telecom Conformity Assessment",
      url: "https://www.rra.go.kr/ko/license/A_c_search.do",
      what: { ko: "방송통신기자재 적합성평가 및 인증 현황 확인", en: "Broadcasting and telecom equipment conformity-assessment references and certificate searches." },
      when: { ko: "무선·통신·전자기기 KC 전파 적합성 확인이 필요할 때", en: "Useful when radio, telecom, or electronic equipment conformity needs review." },
      description: { ko: "전파 적합성평가", en: "Radio conformity assessment." }
    },
    kreach: {
      agency: "Ministry of Environment / K-REACH Portal",
      name: "화학물질정보처리시스템",
      url: "https://kreach.me.go.kr/repwrt/portal/manualList.do",
      what: { ko: "화학물질 등록, 신고, 등록등면제 등 K-REACH 시스템 안내", en: "K-REACH registration, notification, exemption, and system manuals." },
      when: { ko: "한국 화학물질 등록·신고 관련 확인이 필요할 때", en: "Useful when Korean chemical registration or notification checks are needed." },
      description: { ko: "K-REACH 시스템", en: "K-REACH system." }
    },
    chemnavi: {
      agency: "Ministry of Environment",
      name: "화평법 안내서·실무가이드",
      url: "https://www.chemnavi.or.kr/chemnavi/spkreach/implementation.do",
      what: { ko: "화평법 안내서, 실무가이드, 시스템 매뉴얼", en: "K-REACH guides, practical manuals, and system guidance." },
      when: { ko: "화학물질 실무 절차와 안내서를 확인할 때", en: "Useful when reviewing Korean chemical-control implementation guides." },
      description: { ko: "화평법 공식 안내", en: "Korean chemical regulation guidance." }
    },
    mfds: {
      agency: "Ministry of Food and Drug Safety",
      name: "수입식품정보마루",
      url: "https://impfood.mfds.go.kr/",
      what: { ko: "수입식품 신고, 검사, 해외제조업소 등 식품 수입 관련 자료", en: "Imported food declaration, inspection, and foreign establishment references." },
      when: { ko: "식품, 건강기능식품, 식품용 기구·용기 관련 수입 확인이 필요할 때", en: "Useful for imported food, health functional food, or food-contact materials." },
      description: { ko: "한국 수입식품 확인", en: "Korea imported-food checks." }
    }
  };

  const guidance = {
    us: {
      import: ["cbp", "htsus", "fda", "usda"],
      export: ["bisEar", "bisCcl", "csl"],
      product: ["cpsc", "fcc", "fda", "nhtsa"],
      restricted: ["cbp", "fda", "usda", "epa"],
      chemical: ["epa", "fda"],
      sanctions: ["csl", "ofac"]
    },
    eu: {
      import: ["taric", "a2m"],
      export: ["euDual", "euSanctions"],
      product: ["euRequirements", "euProduct", "a2m"],
      restricted: ["taric", "a2m", "euSanctions"],
      chemical: ["echaReach", "echaChem"],
      sanctions: ["euSanctions"]
    },
    cn: {
      import: ["gacc", "samrCcc"],
      export: ["gacc", "mofcom"],
      product: ["samrCcc", "gacc"],
      restricted: ["gacc", "mofcom"],
      chemical: ["gacc"],
      sanctions: ["mofcom"]
    },
    kr: {
      import: ["unipassReq", "kcs", "mfds"],
      export: ["yestrade", "unipassReq"],
      product: ["safetyKorea", "rra"],
      restricted: ["unipassReq", "kcs", "yestrade"],
      chemical: ["kreach", "chemnavi", "unipassReq"],
      sanctions: ["yestrade"]
    }
  };

  const categoryIntro = {
    ko: "{market} {category}",
    en: "{market} {category}"
  };
  const guidanceCopy = {
    us: {
      product: { ko: "미국은 제품 종류에 따라 담당 규제기관과 적용 요건이 달라질 수 있습니다. 제품의 용도·성분·기술사양을 기준으로 관련 기관의 공식 요건을 확인하세요.", en: "In the United States, responsible agencies and requirements can vary by product type. Check official requirements using the product's use, composition, and technical specifications." },
      sanctions: { ko: "거래 상대방 검색은 법적 결론이 아닙니다. 잠재적 일치 결과는 공식 원문과 추가 due diligence로 확인해야 합니다.", en: "Restricted-party screening is not a legal conclusion. Potential matches must be checked against official records and additional due diligence." }
    },
    eu: {
      import: { ko: "TARIC은 EU 상품코드 기준 관세·무역조치를 보는 시스템이고, Access2Markets는 수출국·수입국·품목 기준으로 관세, 절차, 원산지, 수입요건을 탐색하는 포털입니다.", en: "TARIC is the EU commodity-code system for tariffs and trade measures. Access2Markets is a portal for exploring tariffs, procedures, origin, and import requirements by origin, destination, and product." }
    },
    cn: {
      default: { ko: "중국 자료는 공식 영문 페이지의 범위가 제한적일 수 있습니다. 영문 자료만으로 빈칸을 추정하지 말고 중국어 공식 원문, 수입자, 전문가 확인을 병행하세요.", en: "China coverage is partial because official English pages can be limited. Do not fill gaps from third-party summaries; verify with Chinese official sources, the importer, and qualified professionals." }
    },
    kr: {
      default: { ko: "한국은 품목번호 기준 수출입 요건과 제품별 개별 법령 확인이 함께 필요할 수 있습니다. UNI-PASS와 담당 기관 자료를 함께 확인하세요.", en: "Korea checks may require both item-code based import/export requirements and product-specific agency rules. Use UNI-PASS together with the responsible agency source." }
    }
  };

  const checklist = [
    { id: "product", title: { ko: "제품 정보", en: "Product" }, items: [["hs", "HS Code 확인", "Confirm HS Code", "../hscode.html", "../hscode-en.html"], ["use", "제품 용도 확인", "Confirm product use"], ["material", "주요 성분/재질 확인", "Confirm main ingredients/materials"], ["spec", "기술사양 확인", "Confirm technical specifications"]] },
    { id: "market", title: { ko: "수입국 요건", en: "Market Requirements" }, items: [["import", "일반 수입요건 확인", "Check general import requirements", "#reference-areas", "#reference-areas"], ["restricted", "금지·제한 품목 여부 확인", "Check prohibited/restricted goods sources", "#reference-areas", "#reference-areas"], ["cert", "제품 인증/등록 요건 확인", "Check product certification/registration sources", "#reference-areas", "#reference-areas"], ["label", "라벨링/마킹 요건 확인", "Check labelling/marking requirements"], ["chemical", "필요 시 화학·환경 규제 확인", "Check chemical/environmental rules if needed", "#reference-areas", "#reference-areas"]] },
    { id: "transaction", title: { ko: "거래 확인", en: "Transaction" }, items: [["export", "수출통제 관련 확인", "Check export-control sources", "#reference-areas", "#reference-areas"], ["enduse", "최종사용자/최종용도 확인", "Confirm end user/end use"], ["screening", "거래제한/제재 목록 확인", "Check sanctions/restricted-party sources", "https://www.trade.gov/consolidated-screening-list", "https://www.trade.gov/consolidated-screening-list"], ["license", "필요 시 수출허가 관련 확인", "Check export-license sources if needed", "#reference-areas", "#reference-areas"]] },
    { id: "documents", title: { ko: "서류", en: "Documents" }, items: [["invoice", "Commercial Invoice 확인", "Check Commercial Invoice", "posts/commercial-invoice-common-mistakes/", "posts/commercial-invoice-common-mistakes/"], ["packing", "Packing List 확인", "Check Packing List"], ["origin", "Certificate of Origin 필요 여부 확인", "Check whether Certificate of Origin is needed"], ["permit", "License / Permit / Certificate 필요 여부 확인", "Check whether a license, permit, or certificate is needed"]] }
  ];

  let selectedCategory = "";
  let selectedMarket = "";

  function local(value) {
    return Array.isArray(value) ? value[lang === "ko" ? 0 : 1] : value?.[lang] || value || "";
  }

  function updateUrl() {
    const url = new URL(location.href);
    selectedCategory ? url.searchParams.set("category", selectedCategory) : url.searchParams.delete("category");
    selectedMarket ? url.searchParams.set("market", selectedMarket) : url.searchParams.delete("market");
    history.replaceState(null, "", url);
  }

  function sourceCard(key) {
    const item = sourceText[key];
    if (!item) return "";
    return `<article class="compliance-source-card">
      <div class="compliance-source-head">
        <span class="status">${safeHtml(text.official)}</span>
        <strong>${safeHtml(item.agency)}</strong>
      </div>
      <h3>${safeHtml(item.name)}</h3>
      <dl>
        <div><dt>${safeHtml(text.what)}</dt><dd>${safeHtml(local(item.what))}</dd></div>
        <div><dt>${safeHtml(text.when)}</dt><dd>${safeHtml(local(item.when))}</dd></div>
      </dl>
      <a class="secondary-btn" href="${safeAttr(item.url)}" target="_blank" rel="noopener noreferrer"><i data-lucide="external-link"></i>${safeHtml(text.cta)}</a>
    </article>`;
  }

  function renderGuidance() {
    const target = page.querySelector("[data-compliance-guidance]");
    if (!target) return;
    if (!selectedCategory || !selectedMarket) {
      target.innerHTML = `<div class="data-empty compliance-empty">${safeHtml(text.guidanceEmpty)}</div>`;
      return;
    }
    const market = markets[selectedMarket];
    const categoryLabel = labels[selectedCategory][lang][0];
    const title = categoryIntro[lang].replace("{market}", market.name).replace("{category}", categoryLabel);
    const sourceKeys = guidance[selectedMarket]?.[selectedCategory] || [];
    const customCopy = guidanceCopy[selectedMarket]?.[selectedCategory] || guidanceCopy[selectedMarket]?.default;
    const status = market.partial ? `<span class="status soon">${safeHtml(text.additional)}</span>` : `<span class="status">${safeHtml(text.noDetermination)}</span>`;
    target.innerHTML = `<div class="compliance-guidance">
      <div class="compliance-guidance-intro">
        <div>${status}<h3>${safeHtml(title)}</h3><p>${safeHtml(local(customCopy) || labels[selectedCategory][lang][1])}</p></div>
      </div>
      <div class="compliance-source-grid">${sourceKeys.map(sourceCard).join("")}</div>
      ${market.partial ? `<p class="notice">${safeHtml(text.partial)}</p>` : ""}
    </div>`;
    if (window.refreshIcons) window.refreshIcons();
  }

  function renderWorkflow() {
    const target = page.querySelector("[data-compliance-workflow]");
    if (!target) return;
    target.innerHTML = `<div class="compliance-step">
      <h3>${safeHtml(text.categoryTitle)}</h3>
      <div class="compliance-choice-grid compliance-category-grid">
        ${categories.map((key) => `<button type="button" class="compliance-choice${key === selectedCategory ? " is-selected" : ""}" data-compliance-category="${key}" aria-pressed="${key === selectedCategory}">
          <span>${safeHtml(labels[key][lang][0])}</span>
          <small>${safeHtml(labels[key][lang][1])}</small>
          ${key === selectedCategory ? `<b>${safeHtml(text.selected)}</b>` : ""}
        </button>`).join("")}
      </div>
    </div>
    <div class="compliance-step">
      <h3>${safeHtml(text.marketTitle)}</h3>
      <div class="compliance-choice-grid compliance-market-grid">
        ${Object.entries(markets).map(([key, market]) => `<button type="button" class="compliance-choice compliance-market${key === selectedMarket ? " is-selected" : ""}" data-compliance-market="${key}" aria-pressed="${key === selectedMarket}">
          <span><i>${safeHtml(market.icon)}</i>${safeHtml(lang === "ko" ? market.labelKo : market.name)}</span>
          <small>${market.partial ? safeHtml(text.additional) : safeHtml(text.official)}</small>
          ${key === selectedMarket ? `<b>${safeHtml(text.selected)}</b>` : ""}
        </button>`).join("")}
      </div>
    </div>`;
  }

  function wireWorkflow() {
    page.addEventListener("click", (event) => {
      const category = event.target.closest("[data-compliance-category]");
      const market = event.target.closest("[data-compliance-market]");
      if (!category && !market) return;
      if (category) selectedCategory = category.dataset.complianceCategory || "";
      if (market) selectedMarket = market.dataset.complianceMarket || "";
      updateUrl();
      renderWorkflow();
      renderGuidance();
    });
  }

  function checklistHref(koHref, enHref) {
    return lang === "ko" ? koHref : enHref;
  }

  function renderChecklist() {
    const target = page.querySelector("[data-compliance-checklist]");
    if (!target) return;
    const storageKey = `logilee:compliance-checklist:${lang}`;
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(storageKey) || "{}"); } catch { saved = {}; }
    target.innerHTML = `<div class="compliance-checklist-grid">
      ${checklist.map((group) => `<fieldset class="compliance-checklist-group">
        <legend>${safeHtml(group.title[lang])}</legend>
        ${group.items.map(([id, koLabel, enLabel, koHref, enHref]) => {
          const itemId = `${group.id}-${id}`;
          const href = koHref ? checklistHref(koHref, enHref || koHref) : "";
          return `<label class="compliance-check-item" for="${safeAttr(itemId)}">
            <input id="${safeAttr(itemId)}" type="checkbox" data-compliance-check="${safeAttr(itemId)}" ${saved[itemId] ? "checked" : ""}>
            <span>${safeHtml(lang === "ko" ? koLabel : enLabel)}</span>
            ${href ? `<a href="${safeAttr(href)}" ${/^https?:/.test(href) ? 'target="_blank" rel="noopener noreferrer"' : ""}>${safeHtml(lang === "ko" ? "열기" : "Open")}</a>` : ""}
          </label>`;
        }).join("")}
      </fieldset>`).join("")}
    </div>
    <button class="secondary-btn compliance-reset" type="button" data-compliance-reset><i data-lucide="rotate-ccw"></i>${safeHtml(text.checklistReset)}</button>`;
    target.addEventListener("change", (event) => {
      const input = event.target.closest("[data-compliance-check]");
      if (!input) return;
      saved[input.dataset.complianceCheck] = input.checked;
      localStorage.setItem(storageKey, JSON.stringify(saved));
    });
    target.querySelector("[data-compliance-reset]")?.addEventListener("click", () => {
      localStorage.removeItem(storageKey);
      target.querySelectorAll("[data-compliance-check]").forEach((input) => { input.checked = false; });
    });
    if (window.refreshIcons) window.refreshIcons();
  }

  function renderRelated() {
    const target = page.querySelector("[data-compliance-related]");
    if (!target) return;
    const tools = lang === "ko"
      ? [["HS Code 확인", "../hscode.html", "barcode"], ["국가 무역 프로필", "country-trade-profile.html?country=US", "globe"], ["Global Trade Explorer", "global-trade-explorer.html", "chart-column"], ["Commercial Invoice guide", "posts/commercial-invoice-common-mistakes/", "file-text"]]
      : [["HS Code Lookup", "../hscode-en.html", "barcode"], ["Country Trade Profile", "country-trade-profile.html?country=US", "globe"], ["Global Trade Explorer", "global-trade-explorer.html", "chart-column"], ["Commercial Invoice guide", "posts/commercial-invoice-common-mistakes/", "file-text"]];
    target.innerHTML = `<p class="muted">${safeHtml(text.relatedIntro)}</p><div class="country-tool-grid compliance-tool-grid">${tools.map(([label, href, icon]) => `<a href="${safeAttr(href)}"><i data-lucide="${safeAttr(icon)}"></i><strong>${safeHtml(label)}</strong></a>`).join("")}</div>`;
    if (window.refreshIcons) window.refreshIcons();
  }

  function renderSources() {
    const target = page.querySelector("[data-compliance-sources]");
    if (!target) return;
    target.innerHTML = `<div class="compliance-sources-list">
      ${Object.entries(markets).map(([marketKey, market]) => {
        const keys = [...new Set(Object.values(guidance[marketKey]).flat())];
        return `<article class="panel compliance-market-source">
          <h3>${safeHtml(market.name)}</h3>
          ${market.partial ? `<span class="status soon">${safeHtml(text.additional)}</span>` : ""}
          <ul>${keys.map((key) => {
            const item = sourceText[key];
            return `<li><a href="${safeAttr(item.url)}" target="_blank" rel="noopener noreferrer">${safeHtml(item.agency)} - ${safeHtml(item.name)}</a><span>${safeHtml(local(item.description))}</span></li>`;
          }).join("")}</ul>
        </article>`;
      }).join("")}
    </div>
    <div class="panel compliance-limitations">
      <h3>${safeHtml(text.limitationTitle)}</h3>
      <p>${safeHtml(text.limitation)}</p>
    </div>`;
  }

  function readInitialState() {
    const params = new URLSearchParams(location.search);
    const market = (params.get("market") || "").toLowerCase();
    const category = (params.get("category") || "").toLowerCase();
    selectedMarket = markets[market] ? market : "";
    selectedCategory = categories.includes(category) ? category : "";
  }

  readInitialState();
  renderWorkflow();
  renderGuidance();
  renderChecklist();
  renderRelated();
  renderSources();
  wireWorkflow();
})();
