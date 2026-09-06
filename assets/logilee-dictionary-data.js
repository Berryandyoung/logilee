(() => {
  const reviewedAt = "2026-09-06";
  const C = {
    trade: "Trade",
    ocean: "Ocean",
    air: "Air",
    customs: "Customs & Compliance",
    operations: "Shipping Operations",
    charges: "Charges",
    cargo: "Cargo Handling & Securing"
  };
  const sourceMap = {
    ICC: { title: "Incoterms® 2020 Rules", organization: "International Chamber of Commerce", url: "https://library.iccwbo.org/clp/clp-incoterms-qa-2020.htm" },
    WCO_HS: { title: "Harmonized System FAQ", organization: "World Customs Organization", url: "https://www.wcoomd.org/en/faq/harmonized_system_faq.aspx" },
    WCO_ORIGIN: { title: "Rules of Origin FAQ", organization: "World Customs Organization", url: "https://www.wcoomd.org/en/topics/origin/overview/faq-origin.aspx" },
    WCO_VALUATION: { title: "Valuation for Customs Purposes", organization: "World Customs Organization", url: "https://www.wcotradetools.org/en/valuation/article-24-secretariat" },
    WCO_STANDARDS: { title: "About Customs Rules and Standards", organization: "World Customs Organization", url: "https://www.wcotradetools.org/en/about-customs-rules-and-standards" },
    WTO_TFA: { title: "Trade Facilitation Agreement", organization: "World Trade Organization", url: "https://www.wto.org/english/tratop_e/tradfa_e/tradfa_e.htm" },
    IMO_VGM: { title: "Verification of the Gross Mass of a Packed Container", organization: "International Maritime Organization", url: "https://www.imo.org/en/OurWork/Safety/Pages/Verification-of-the-gross-mass.aspx" },
    IMO_FAL: { title: "IMO Compendium on Facilitation and Electronic Business", organization: "International Maritime Organization", url: "https://imocompendium.imo.org/" },
    IATA_AIR: { title: "Air Cargo Tariffs and Rules", organization: "International Air Transport Association", url: "https://www.iata.org/en/publications/newsletters/iata-knowledge-hub/air-cargo-tariffs-and-rules-what-you-need-to-know/" },
    IATA_DGR: { title: "Dangerous Goods Regulations", organization: "International Air Transport Association", url: "https://www.iata.org/en/programs/cargo/dgr/" },
    ICAO_TI: { title: "Dangerous Goods Technical Instructions", organization: "International Civil Aviation Organization", url: "https://www.icao.int/safety/DangerousGoods/Pages/technical-instructions.aspx" },
    CBP_IMPORT: { title: "Basic Importing and Exporting", organization: "U.S. Customs and Border Protection", url: "https://www.cbp.gov/trade/basic-import-export" },
    CBP_ORIGIN: { title: "Rules of Origin", organization: "U.S. Customs and Border Protection", url: "https://www.cbp.gov/document/publications/rules-origin" },
    EU_TAXUD: { title: "Customs", organization: "European Commission Taxation and Customs Union", url: "https://taxation-customs.ec.europa.eu/customs_en" },
    FMC_DD: { title: "Detention and Demurrage", organization: "Federal Maritime Commission", url: "https://www.fmc.gov/detention-and-demurrage/" },
    FMC_BILLING: { title: "Detention and Demurrage Billing Practices", organization: "Federal Maritime Commission", url: "https://www.fmc.gov/articles/fmc-publishes-final-rule-on-detention-and-demurrage-billing-practices/" },
    UNECE: { title: "UN/EDIFACT Trade Facilitation Recommendations", organization: "UNECE", url: "https://unece.org/trade/uncefact" },
    FIATA: { title: "Freight Forwarding Documents and Practice", organization: "FIATA", url: "https://fiata.org/" },
    LOGILEE: { title: "LOGILEE Practical Trade Tools", organization: "LOGILEE", url: "https://www.logilee.com/" }
  };
  const toolMap = {
    templates: { ko: "Templates에서 문서 작성", en: "Create in Templates", url: "templates.html" },
    commercialInvoice: { ko: "Commercial Invoice 작성", en: "Create Commercial Invoice", url: "templates.html?template=commercial-invoice" },
    packingList: { ko: "Packing List 작성", en: "Create Packing List", url: "templates.html?template=packing-list" },
    proForma: { ko: "Pro Forma 작성", en: "Create Pro Forma", url: "templates.html?template=pro-forma-invoice" },
    shippingInstruction: { ko: "Shipping Instruction 작성", en: "Create Shipping Instruction", url: "templates.html?template=shipping-instruction" },
    checklist: { ko: "Shipment Checklist 작성", en: "Create Shipment Checklist", url: "templates.html?template=shipment-checklist" },
    hs: { ko: "HS Code 검색", en: "HS Code Lookup", url: "../hscode.html", enUrl: "../hscode-en.html" },
    cbm: { ko: "CBM 계산기", en: "CBM Calculator", url: "cbm.html" },
    tracking: { ko: "화물 추적", en: "Shipment Tracking", url: "track.html" },
    ports: { ko: "항만 검색", en: "Port Search", url: "ports.html" },
    airports: { ko: "공항 검색", en: "Airport Search", url: "airports.html" },
    freightMarket: { ko: "Freight Market", en: "Freight Market", url: "freight-market.html" },
    currency: { ko: "환율 계산기", en: "Currency Converter", url: "currency-converter.html" },
    businessDay: { ko: "영업일 계산기", en: "Business Day", url: "business-day.html" },
    compliance: { ko: "무역 규제 허브", en: "Compliance Hub", url: "compliance.html" },
    globalTrade: { ko: "Global Trade Explorer", en: "Global Trade Explorer", url: "global-trade-explorer.html" },
    learn: { ko: "Learning Hub", en: "Learning Hub", url: "learn.html" }
  };
  const categoryCopy = {
    trade: {
      ko: ["거래 조건, 무역서류 또는 결제 조건에서 쓰는 용어입니다.", "견적, 계약, Invoice 작성 단계에서 의미와 책임 범위를 확인할 때 자주 봅니다."],
      en: ["A trade term used in sales terms, trade documents, or payment discussions.", "You usually see it while checking quotations, contracts, invoices, or buyer-seller responsibility."]
    },
    ocean: {
      ko: ["해상운송, 컨테이너, 선하증권 또는 선박 운항에서 쓰는 용어입니다.", "Booking, 선적서류, 선사 스케줄, 도착·반출 업무에서 의미를 확인합니다."],
      en: ["An ocean freight term used for containers, bills of lading, vessels, or shipping schedules.", "You usually see it in bookings, shipping documents, carrier schedules, or cargo release work."]
    },
    air: {
      ko: ["항공화물 운송장, 중량 산정, 항공 스케줄 또는 위험물 업무에서 쓰는 용어입니다.", "AWB, 항공 견적, 창고 반입, 항공사 cargo portal 확인 시 자주 봅니다."],
      en: ["An air cargo term used for airway bills, weight rating, flight routing, or regulated cargo.", "You usually see it on AWBs, air quotations, warehouse handover, or airline cargo portals."]
    },
    customs: {
      ko: ["통관, 관세, 원산지, 허가 또는 무역 규제 검토에서 쓰는 용어입니다.", "HS 분류, 신고서, 관세율, FTA, 수출입 제한 확인 단계에서 검토합니다."],
      en: ["A customs or compliance term used for classification, duty, origin, licenses, or trade controls.", "You usually see it during HS review, declaration, duty calculation, FTA, or import/export control checks."]
    },
    operations: {
      ko: ["선적 진행, 일정 관리, 창고·터미널 작업 또는 운송 추적에서 쓰는 용어입니다.", "Booking 이후 cut-off, 반입, 출항, 도착, 배송 조율 과정에서 확인합니다."],
      en: ["An operations term used for shipment progress, schedules, warehouse work, terminals, or tracking.", "You usually see it after booking while managing cut-offs, handover, departure, arrival, and delivery."]
    },
    charges: {
      ko: ["운임, 부대비, surcharge 또는 정산 단계에서 쓰는 비용 용어입니다.", "견적 비교, carrier tariff, terminal 조건, invoice 검토 시 적용 기준을 확인합니다."],
      en: ["A charge term used for freight, local charges, surcharges, or settlement.", "You usually see it when comparing quotes, carrier tariffs, terminal terms, or freight invoices."]
    },
    cargo: {
      ko: ["화물 적입, 지지, 고정, 하역, 포장 또는 인양 작업에서 쓰는 물리적 작업 용어입니다.", "컨테이너 적입, 특수화물 포장, 라싱 계획, 현장 작업 지시서, 손상 예방 검토에서 자주 확인합니다."],
      en: ["A physical cargo handling term used for packing, support, securing, lifting, loading, or unloading work.", "You usually see it in container stuffing, special cargo packing, lashing plans, work instructions, and damage-prevention checks."]
    }
  };
  sourceMap.CTU_CODE = { title: "IMO/ILO/UNECE Code of Practice for Packing of Cargo Transport Units", organization: "UNECE / IMO / ILO", url: "https://unece.org/transport/intermodal-transport/imoilounece-code-practice-packing-cargo-transport-units-ctu-code" };
  sourceMap.IPPC_ISPM15 = { title: "ISPM 15 Implementation: Wood Packaging Material", organization: "International Plant Protection Convention", url: "https://www.ippc.int/en/archive-old-pages/phytosanitary-system/ispm-15-implementation/" };
  sourceMap.IMO_IMDG = { title: "International Maritime Dangerous Goods Code", organization: "International Maritime Organization", url: "https://www.imo.org/en/ourwork/safety/pages/dangerousgoods-default.aspx" };
  const categorySources = { trade: ["ICC", "LOGILEE"], ocean: ["IMO_FAL", "FIATA"], air: ["IATA_AIR"], customs: ["WCO_STANDARDS", "WTO_TFA"], operations: ["IMO_FAL", "FIATA"], charges: ["FMC_DD", "FIATA"], cargo: ["CTU_CODE"] };
  const stageLabels = {
    quotation: { ko: "견적", en: "Quotation" },
    contract: { ko: "계약", en: "Contract" },
    booking: { ko: "Booking", en: "Booking" },
    preshipment: { ko: "선적 전", en: "Pre-shipment" },
    transit: { ko: "운송 중", en: "In Transit" },
    customs: { ko: "통관", en: "Customs" },
    arrival: { ko: "도착·반출", en: "Arrival & Delivery" },
    settlement: { ko: "정산", en: "Settlement" }
  };
  const incotermMeta = {
    incoterms: ["International Commercial Terms", "인코텀즈", "ICC가 발간하는 11개 국제무역조건 규칙입니다.", "ICC rules describing buyer and seller obligations for delivery, risk, costs, and transport-related tasks."],
    exw: ["Ex Works", "공장인도", "매도인이 지정 장소에서 물품을 매수인 처분에 두는 조건입니다.", "A rule where the seller makes goods available at the named place, with the buyer arranging most onward tasks."],
    fca: ["Free Carrier", "운송인인도", "매도인이 지정 장소에서 운송인에게 물품을 인도하는 조건입니다.", "A rule where the seller delivers goods to the carrier or another nominated person at the named place."],
    cpt: ["Carriage Paid To", "운송비지급인도", "매도인이 지정 목적지까지 운송계약을 체결하지만 위험은 인도 시점에 이전됩니다.", "A rule where the seller contracts carriage to the named destination while risk transfers when goods are delivered to the carrier."],
    cip: ["Carriage and Insurance Paid To", "운송비·보험료지급인도", "CPT와 유사하나 매도인이 지정 수준의 화물보험도 마련합니다.", "A rule like CPT, with the seller also arranging cargo insurance to the required level."],
    dap: ["Delivered at Place", "도착장소인도", "매도인이 지정 목적지에서 양하 준비된 상태로 물품을 인도합니다.", "A rule where the seller delivers when goods are placed at the buyer's disposal ready for unloading at destination."],
    dpu: ["Delivered at Place Unloaded", "도착지양하인도", "매도인이 지정 목적지에서 물품을 양하한 뒤 인도합니다.", "A rule where the seller delivers after unloading goods at the named destination."],
    ddp: ["Delivered Duty Paid", "관세지급인도", "매도인이 수입 통관과 관세 부담까지 포함해 지정 목적지까지 인도합니다.", "A rule where the seller delivers to destination and bears import clearance and duty/tax responsibility."],
    fas: ["Free Alongside Ship", "선측인도", "매도인이 지정 선적항에서 선측에 물품을 놓아 인도하는 해상 조건입니다.", "A sea/inland-waterway rule where the seller delivers goods alongside the vessel at the named port."],
    fob: ["Free On Board", "본선인도", "매도인이 지정 선적항에서 물품을 본선에 적재해 인도하는 해상 조건입니다.", "A sea/inland-waterway rule where the seller delivers goods on board the vessel at the named port."],
    cfr: ["Cost and Freight", "운임포함인도", "매도인이 목적항까지 운임을 부담하지만 위험은 선적항 본선 적재 시 이전됩니다.", "A sea/inland-waterway rule where the seller pays freight to destination, while risk transfers on board at shipment."],
    cif: ["Cost, Insurance and Freight", "운임·보험료포함인도", "CFR과 유사하나 매도인이 해상보험도 마련합니다.", "A sea/inland-waterway rule like CFR, with the seller also arranging marine insurance."]
  };
  const rows = [];
  const add = (id, term, fullName, koName, cat, aliases = [], rel = [], tools = [], stages = [], depth = "standard", sourceKeys = null, extra = {}) => {
    const copy = categoryCopy[cat] || categoryCopy.trade;
    rows.push({
      id, slug: id, term, fullName, koName, aliases, primaryCategory: C[cat], categoryKey: cat,
      secondaryCategories: extra.secondaryCategories || [], workflowStages: stages, relatedTerms: rel,
      relatedTools: tools, sources: (sourceKeys || categorySources[cat] || ["LOGILEE"]).map((key) => ({ ...sourceMap[key], reviewedAt })),
      reviewedAt, depth,
      en: {
        shortDefinition: extra.enDef || copy.en[0],
        practicalContext: extra.enContext || copy.en[1],
        practicalChecks: extra.enChecks || [],
        example: extra.enExample || `${term}: used as a practical reference in shipment documentation or communication.`,
        comparisonNotes: extra.enCompare || []
      },
      ko: {
        shortDefinition: extra.koDef || copy.ko[0],
        practicalContext: extra.koContext || copy.ko[1],
        practicalChecks: extra.koChecks || [],
        example: extra.koExample || `${term}: 선적 서류나 업무 메일에서 확인하는 실무 참고 용어입니다.`,
        comparisonNotes: extra.koCompare || []
      }
    });
  };
  Object.entries(incotermMeta).forEach(([id, value]) => add(id, id === "incoterms" ? "Incoterms®" : id.toUpperCase(), value[0], value[1], "trade", [value[0], value[1], `${id.toUpperCase()} Incoterms 2020`], ["incoterms", "fca", "fob", "cif"].filter((x) => x !== id).slice(0, 3), ["learn", "commercialInvoice"], ["quotation", "contract"], "deep", ["ICC"], { koDef: value[2], enDef: value[3], koChecks: ["정확한 named place/port", "Incoterms® version", "운송 mode 적합성", "위험 이전과 비용 부담을 별도로 확인"], enChecks: ["Exact named place/port", "Incoterms® version", "Transport mode fit", "Risk transfer and cost allocation separately"], koExample: `${id === "incoterms" ? "Incoterms® 2020" : id.toUpperCase() + " Busan, Incoterms® 2020"}`, enExample: `${id === "incoterms" ? "Incoterms® 2020" : id.toUpperCase() + " Busan, Incoterms® 2020"}` }));
  [
    ["po","PO","Purchase Order","구매주문서",["Purchase Order","구매주문"],["commercial-invoice","sales-contract"],["templates"],["contract"]],
    ["pro-forma-invoice","Pro Forma Invoice","Pro Forma Invoice","견적송장",["PI","Proforma Invoice","견적송장"],["commercial-invoice","quotation"],["proForma"],["quotation"]],
    ["commercial-invoice","Commercial Invoice","Commercial Invoice","상업송장",["CI","Invoice","상업송장"],["packing-list","hs-code","incoterms"],["commercialInvoice"],["customs","settlement"],"deep"],
    ["packing-list","Packing List","Packing List","포장명세서",["PL","패킹리스트","포장명세서"],["commercial-invoice","gross-weight","shipping-instruction"],["packingList","cbm"],["preshipment"],"deep"],
    ["certificate-of-origin","Certificate of Origin","Certificate of Origin","원산지증명서",["CO","COO","원산지증명서"],["country-of-origin","rules-of-origin"],["compliance"],["customs"],"deep",["WCO_ORIGIN","CBP_ORIGIN"]],
    ["coo","COO","Certificate of Origin / Country of Origin","원산지 또는 원산지증명서",["Certificate of Origin","Country of Origin","원산지"],["certificate-of-origin","country-of-origin"],["compliance"],["customs"],"deep",["WCO_ORIGIN"]],
    ["lc","L/C","Letter of Credit","신용장",["Letter of Credit","신용장"],["bank-draft","commercial-invoice"],["templates"],["contract","settlement"],"deep"],
    ["tt","T/T","Telegraphic Transfer","전신환 송금",["Telegraphic Transfer","wire transfer","송금"],["open-account","lc"],["currency"],["settlement"]],
    ["dp","D/P","Documents against Payment","지급인도조건",["Documents against Payment"],["da","lc"],["templates"],["settlement"]],
    ["da","D/A","Documents against Acceptance","인수인도조건",["Documents against Acceptance"],["dp","lc"],["templates"],["settlement"]],
    ["open-account","Open Account","Open Account","사후송금 거래",["오픈어카운트"],["tt","lc"],["currency"],["settlement"]],
    ["consignee","Consignee","Consignee","수하인",["수입자","수취인"],["shipper","notify-party"],["shippingInstruction"],["booking"]],
    ["shipper","Shipper","Shipper","송하인",["수출자","화주"],["consignee","exporter"],["shippingInstruction"],["booking"]],
    ["exporter","Exporter","Exporter","수출자",["수출자"],["shipper","seller"],["compliance"],["customs"]],
    ["importer","Importer","Importer","수입자",["수입자"],["consignee","buyer"],["compliance"],["customs"]],
    ["notify-party","Notify Party","Notify Party","착하통지처",["통지처"],["consignee","bl"],["shippingInstruction"],["arrival"]],
    ["sales-contract","Sales Contract","Sales Contract","매매계약서",["contract","계약서"],["incoterms","po"],["learn"],["contract"]],
    ["quotation","Quotation","Quotation","견적서",["quote","견적"],["rfq","pro-forma-invoice"],["currency"],["quotation"]],
    ["rfq","RFQ","Request for Quotation","견적요청",["Request for Quotation"],["quotation"],["freightMarket"],["quotation"]],
    ["buyer","Buyer","Buyer","매수인",["매입자"],["seller","consignee"],["templates"],["contract"]],
    ["seller","Seller","Seller","매도인",["판매자"],["buyer","shipper"],["templates"],["contract"]],
    ["invoice-value","Invoice Value","Invoice Value","송장금액",["invoice amount"],["commercial-invoice","customs-value"],["commercialInvoice","currency"],["customs"]],
    ["unit-price","Unit Price","Unit Price","단가",["단위가격"],["invoice-value","commercial-invoice"],["commercialInvoice"],["settlement"]],
    ["payment-terms","Payment Terms","Payment Terms","결제조건",["terms of payment"],["tt","lc"],["currency"],["contract"]],
    ["trade-document","Trade Document","Trade Document","무역서류",["shipping documents"],["commercial-invoice","packing-list"],["templates"],["preshipment"]],
    ["shipping-document","Shipping Document","Shipping Document","선적서류",["선적 서류"],["bl","awb","commercial-invoice"],["templates"],["preshipment"]],
    ["documentary-collection","Documentary Collection","Documentary Collection","추심결제",["collection"],["dp","da"],["templates"],["settlement"]],
    ["bank-draft","Bank Draft","Bank Draft","환어음",["draft"],["lc","dp"],["currency"],["settlement"]],
    ["inspection-certificate","Inspection Certificate","Inspection Certificate","검사증명서",["검사 증명"],["certificate-of-origin"],["templates"],["preshipment"]],
    ["insurance-certificate","Insurance Certificate","Insurance Certificate","보험증권",["insurance policy"],["cif","cip"],["templates"],["preshipment"]],
    ["discount","Discount","Discount","할인",["rebate"],["invoice-value"],["commercialInvoice"],["settlement"]]
  ].forEach((r) => add(r[0], r[1], r[2], r[3], "trade", r[4], r[5], r[6], r[7], r[8] || "standard", r[9]));
  [
    ["bl","B/L","Bill of Lading","선하증권",["BL","Bill of Lading"],["mbl","hbl","sea-waybill"],["tracking"],["preshipment","arrival"],"deep"],
    ["mbl","MBL","Master Bill of Lading","마스터 선하증권",["Master B/L"],["hbl","bl"],["tracking"],["preshipment"],"deep"],
    ["hbl","HBL","House Bill of Lading","하우스 선하증권",["House B/L"],["mbl","bl"],["tracking"],["preshipment"],"deep"],
    ["original-bl","Original B/L","Original Bill of Lading","원본 선하증권",["OBL"],["telex-release","surrendered-bl"],["tracking"],["arrival"],"deep"],
    ["sea-waybill","Sea Waybill","Sea Waybill","해상화물운송장",["SWB"],["bl","telex-release"],["tracking"],["arrival"],"deep"],
    ["telex-release","Telex Release","Telex Release","텔렉스 릴리즈",["TLX Release"],["surrendered-bl","original-bl"],["tracking"],["arrival"],"deep"],
    ["surrendered-bl","Surrendered B/L","Surrendered Bill of Lading","서렌더 선하증권",["Surrender B/L"],["telex-release","original-bl"],["tracking"],["arrival"]],
    ["straight-bl","Straight B/L","Straight Bill of Lading","기명식 선하증권",["Straight Bill"],["order-bl","bl"],["tracking"],["arrival"]],
    ["order-bl","Order B/L","Order Bill of Lading","지시식 선하증권",["To Order B/L"],["straight-bl","bl"],["tracking"],["arrival"]],
    ["fcl","FCL","Full Container Load","컨테이너 단위 화물",["Full Container Load"],["lcl","container"],["freightMarket"],["quotation","booking"],"deep"],
    ["lcl","LCL","Less than Container Load","혼재화물",["Less than Container Load"],["fcl","cfs"],["freightMarket","cbm"],["quotation","booking"],"deep"],
    ["cy","CY","Container Yard","컨테이너 야드",["Container Yard"],["cfs","gate-in"],["ports"],["preshipment","arrival"],"deep"],
    ["cfs","CFS","Container Freight Station","컨테이너 화물집화소",["Container Freight Station"],["cy","lcl"],["ports"],["preshipment","arrival"],"deep"],
    ["teu","TEU","Twenty-foot Equivalent Unit","20피트 환산 단위",["Twenty foot equivalent"],["feu","container"],["freightMarket"],["quotation"]],
    ["feu","FEU","Forty-foot Equivalent Unit","40피트 환산 단위",["Forty foot equivalent"],["teu","container"],["freightMarket"],["quotation"]],
    ["soc","SOC","Shipper-owned Container","화주소유 컨테이너",["Shipper Owned Container"],["coc","container"],["freightMarket"],["booking"]],
    ["coc","COC","Carrier-owned Container","선사소유 컨테이너",["Carrier Owned Container"],["soc","container"],["freightMarket"],["booking"]],
    ["vgm","VGM","Verified Gross Mass","컨테이너 총중량 검증정보",["Verified Gross Mass"],["solas","container"],["shippingInstruction"],["preshipment"],"deep",["IMO_VGM","IMO_FAL"]],
    ["solas","SOLAS","Safety of Life at Sea Convention","해상인명안전협약",["Safety of Life at Sea"],["vgm","container"],["shippingInstruction"],["preshipment"],"deep",["IMO_VGM"]],
    ["pol","POL","Port of Loading","선적항",["Port of Loading"],["pod-port","place-of-receipt"],["ports"],["booking"]],
    ["pod-port","POD","Port of Discharge","양하항",["Port of Discharge"],["pol","place-of-delivery"],["ports"],["arrival"],"deep"],
    ["place-of-receipt","Place of Receipt","Place of Receipt","수령지",["POR"],["pol","place-of-delivery"],["ports"],["booking"]],
    ["place-of-delivery","Place of Delivery","Place of Delivery","인도지",["final delivery place"],["pod-port","delivery"],["ports"],["arrival"]],
    ["vessel","Vessel","Vessel","선박",["ship"],["voyage","mother-vessel"],["tracking"],["transit"]],
    ["voyage","Voyage","Voyage","항차",["voyage number"],["vessel","transshipment"],["tracking"],["transit"]],
    ["transshipment","Transshipment","Transshipment","환적",["T/S","transhipment"],["direct-service","feeder"],["tracking"],["transit"],"deep"],
    ["direct-service","Direct Service","Direct Service","직항 서비스",["direct sailing"],["transshipment","vessel"],["freightMarket"],["quotation"]],
    ["blank-sailing","Blank Sailing","Blank Sailing","결항",["void sailing"],["rollover","vessel"],["freightMarket"],["transit"],"deep"],
    ["rollover","Rollover","Rollover","선적 이월",["rolled cargo"],["booking","blank-sailing"],["tracking"],["preshipment"],"deep"],
    ["feeder","Feeder","Feeder Vessel","피더선",["feeder vessel"],["mother-vessel","transshipment"],["ports"],["transit"]],
    ["mother-vessel","Mother Vessel","Mother Vessel","모선",["mainline vessel"],["feeder","vessel"],["ports"],["transit"]],
    ["slot","Slot","Vessel Slot","선복",["space allocation"],["space","booking"],["freightMarket"],["booking"]],
    ["space","Space","Cargo Space","선복 공간",["shipping space"],["slot","booking"],["freightMarket"],["booking"]],
    ["container","Container","Container","컨테이너",["shipping container"],["dry-container","reefer"],["tracking"],["booking"]],
    ["dry-container","Dry Container","Dry Container","드라이 컨테이너",["dry van"],["reefer","container"],["cbm"],["booking"]],
    ["reefer","Reefer","Refrigerated Container","냉동·냉장 컨테이너",["refrigerated container"],["dry-container","temperature-controlled"],["freightMarket"],["booking"]],
    ["open-top","Open Top","Open Top Container","오픈탑 컨테이너",["OT container"],["flat-rack","oog"],["freightMarket"],["booking"]],
    ["flat-rack","Flat Rack","Flat Rack Container","플랫랙 컨테이너",["FR container"],["open-top","oog"],["freightMarket"],["booking"]],
    ["oog","OOG","Out of Gauge","규격초과화물",["Out of Gauge"],["flat-rack","open-top"],["freightMarket"],["booking"],"deep"],
    ["fcl-fcl","FCL/FCL","FCL to FCL","컨테이너 단위 인도",["CY/CY"],["fcl","cy"],["freightMarket"],["booking"]],
    ["lcl-lcl","LCL/LCL","LCL to LCL","혼재화물 인도",["CFS/CFS"],["lcl","cfs"],["freightMarket"],["booking"]],
    ["carrier","Carrier","Ocean Carrier","운송인",["shipping line"],["vessel","bl"],["tracking"],["booking"]],
    ["nvocc","NVOCC","Non-vessel Operating Common Carrier","무선박운송인",["Non Vessel Operating Common Carrier"],["carrier","hbl"],["tracking"],["booking"]],
    ["liner","Liner Service","Liner Service","정기선 서비스",["liner"],["vessel","voyage"],["freightMarket"],["quotation"]],
    ["charter","Charter","Charter","용선",["charter party"],["vessel","bulk-cargo"],["freightMarket"],["contract"]],
    ["bulk-cargo","Bulk Cargo","Bulk Cargo","벌크화물",["break bulk"],["charter","vessel"],["ports"],["booking"]],
    ["breakbulk","Breakbulk","Breakbulk Cargo","재래화물",["break bulk cargo"],["bulk-cargo","oog"],["ports"],["booking"]],
    ["stowage","Stowage","Stowage","적부",["vessel stowage"],["vgm","container"],["ports"],["preshipment"]],
    ["lashings","lashings","Cargo Lashing","고박",["securing"],["stowage","oog"],["ports"],["preshipment"]],
    ["seal","Seal","Container Seal","컨테이너 봉인",["seal number"],["container","shipping-instruction"],["shippingInstruction"],["preshipment"]],
    ["tare-weight","Tare Weight","Container Tare Weight","컨테이너 자체중량",["tare"],["vgm","container"],["shippingInstruction"],["preshipment"]],
    ["payload","Payload","Payload","적재가능중량",["max payload"],["gross-weight","container"],["cbm"],["preshipment"]],
    ["iso-container","ISO Container","ISO Container","ISO 컨테이너",["ISO 6346"],["container","container-number"],["tracking"],["booking"]],
    ["container-number","Container Number","Container Number","컨테이너 번호",["container ID"],["iso-container","tracking"],["tracking"],["transit"]]
  ].forEach((r) => add(r[0], r[1], r[2], r[3], "ocean", r[4], r[5], r[6], r[7], r[8] || "standard", r[9]));
  [
    ["awb","AWB","Air Waybill","항공화물운송장",["Air Waybill"],["mawb","hawb"],["tracking"],["preshipment","arrival"],"deep"],
    ["mawb","MAWB","Master Air Waybill","마스터 항공화물운송장",["Master AWB"],["hawb","awb"],["tracking"],["preshipment"],"deep"],
    ["hawb","HAWB","House Air Waybill","하우스 항공화물운송장",["House AWB"],["mawb","awb"],["tracking"],["preshipment"],"deep"],
    ["uld","ULD","Unit Load Device","항공화물 탑재용기",["Unit Load Device"],["air-cargo","chargeable-weight"],["airports"],["preshipment"],"deep"],
    ["chargeable-weight","Chargeable Weight","Chargeable Weight","운임중량",["C/W","chargeable wt"],["actual-weight","volumetric-weight"],["cbm"],["quotation"],"deep",["IATA_AIR"]],
    ["actual-weight","Actual Weight","Actual Weight","실중량",["gross actual weight"],["chargeable-weight","gross-weight"],["cbm"],["quotation"],"deep",["IATA_AIR"]],
    ["gross-weight","Gross Weight","Gross Weight","총중량",["G/W","GW"],["net-weight","actual-weight"],["cbm"],["preshipment"]],
    ["net-weight","Net Weight","Net Weight","순중량",["N/W","NW"],["gross-weight","packing-list"],["packingList"],["preshipment"]],
    ["volumetric-weight","Volumetric Weight","Volumetric Weight","부피중량",["dimensional weight","volume weight"],["chargeable-weight","actual-weight"],["cbm"],["quotation"],"deep",["IATA_AIR"]],
    ["dimensional-weight","Dimensional Weight","Dimensional Weight","부피중량",["DIM weight"],["volumetric-weight","chargeable-weight"],["cbm"],["quotation"]],
    ["air-consolidation","Consolidation","Air Cargo Consolidation","항공 혼재",["consol"],["hawb","mawb"],["airports"],["booking"]],
    ["direct-shipment","Direct Shipment","Direct Shipment","직송",["direct air shipment"],["transshipment","air-routing"],["tracking"],["transit"]],
    ["iata","IATA","International Air Transport Association","국제항공운송협회",["International Air Transport Association"],["awb","chargeable-weight"],["airports"],["quotation"]],
    ["icao","ICAO","International Civil Aviation Organization","국제민간항공기구",["International Civil Aviation Organization"],["dangerous-goods","iata"],["airports"],["preshipment"],"standard",["ICAO_TI"]],
    ["aod","AOD","Airport of Departure","출발공항",["Airport of Departure"],["aodestination","airport"],["airports"],["booking"]],
    ["aodestination","AOD","Airport of Destination","도착공항",["Airport of Destination","A/D"],["aod","airport"],["airports"],["arrival"]],
    ["flight","Flight","Flight","항공편",["flight number"],["air-routing","eta"],["tracking"],["transit"]],
    ["air-routing","Routing","Air Routing","항공 경로",["route"],["flight","transshipment"],["tracking"],["booking"]],
    ["air-cutoff","Cut-off","Air Cargo Cut-off","항공화물 마감",["air cut off"],["cargo-ready-date","awb"],["airports"],["preshipment"],"deep"],
    ["cargo-manifest","Cargo Manifest","Cargo Manifest","화물 적하목록",["manifest"],["awb","customs-declaration"],["compliance"],["customs"],"deep",["IMO_FAL"]],
    ["air-cargo","Air Cargo","Air Cargo","항공화물",["air freight cargo"],["awb","chargeable-weight"],["airports"],["booking"]],
    ["airport","Airport","Airport","공항",["IATA code"],["aod","aodestination"],["airports"],["booking"]],
    ["airline-prefix","Airline Prefix","Air Waybill Prefix","항공사 Prefix",["AWB prefix"],["awb","mawb"],["tracking"],["booking"]],
    ["iata-code","IATA Code","IATA Location Code","IATA 코드",["airport code"],["airport","icao-code"],["airports"],["booking"]],
    ["icao-code","ICAO Code","ICAO Location Code","ICAO 코드",["airport code"],["iata-code","airport"],["airports"],["booking"]],
    ["dangerous-goods","Dangerous Goods","Dangerous Goods","위험물",["DG","hazmat"],["iata-dgr","icao"],["compliance"],["preshipment"],"deep",["IATA_DGR","ICAO_TI"]],
    ["iata-dgr","IATA DGR","IATA Dangerous Goods Regulations","IATA 위험물 규정",["DGR"],["dangerous-goods"],["compliance"],["preshipment"],"deep",["IATA_DGR"]],
    ["perishable-cargo","Perishable Cargo","Perishable Cargo","부패성 화물",["PER"],["temperature-controlled","reefer"],["airports"],["booking"]],
    ["temperature-controlled","Temperature Controlled","Temperature Controlled Cargo","온도관리 화물",["temp controlled"],["reefer","perishable-cargo"],["airports"],["booking"]],
    ["screening","Screening","Cargo Screening","화물 보안검색",["security screening"],["security-fee","dangerous-goods"],["compliance"],["preshipment"]],
    ["air-export-declaration","Air Export Declaration","Air Export Declaration","항공 수출신고",["export declaration"],["export-declaration","awb"],["compliance"],["customs"]],
    ["air-import-release","Air Import Release","Air Import Release","항공 수입화물 반출",["cargo release"],["awb","delivery-order"],["tracking"],["arrival"]],
    ["pivot-weight","Pivot Weight","Pivot Weight","피벗 중량",["pivot"],["chargeable-weight","uld"],["freightMarket"],["quotation"]],
    ["minimum-charge","Minimum Charge","Minimum Charge","최저운임",["minimum freight"],["air-freight","chargeable-weight"],["freightMarket"],["quotation"]],
    ["airport-terminal","Airport Cargo Terminal","Airport Cargo Terminal","공항 화물터미널",["cargo terminal"],["air-import-release","storage"],["airports"],["arrival"]]
  ].forEach((r) => add(r[0], r[1], r[2], r[3], "air", r[4], r[5], r[6], r[7], r[8] || "standard", r[9]));
  [
    ["hs-code","HS Code","Harmonized System Code","품목분류번호",["HS","Harmonized System","품목분류"],["tariff-classification","tariff"],["hs"],["customs"],"deep",["WCO_HS"]],
    ["harmonized-system","Harmonized System","Harmonized Commodity Description and Coding System","통일상품명 및 부호체계",["HS Convention"],["hs-code","tariff-classification"],["hs"],["customs"],"deep",["WCO_HS"]],
    ["tariff","Tariff","Tariff","관세율표",["customs tariff"],["duty-rate","hs-code"],["hs"],["customs"],"deep",["WCO_HS"]],
    ["customs-duty","Customs Duty","Customs Duty","관세",["duty"],["duty-rate","customs-value"],["compliance"],["customs"],"deep",["WCO_VALUATION"]],
    ["duty-rate","Duty Rate","Duty Rate","관세율",["tariff rate"],["tariff","customs-duty"],["hs"],["customs"]],
    ["customs-value","Customs Value","Customs Value","과세가격",["customs valuation"],["invoice-value","customs-valuation"],["currency","compliance"],["customs"],"deep",["WCO_VALUATION"]],
    ["customs-valuation","Customs Valuation","Customs Valuation","관세평가",["valuation"],["customs-value"],["compliance"],["customs"],"deep",["WCO_VALUATION"]],
    ["country-of-origin","Country of Origin","Country of Origin","원산지",["Origin"],["rules-of-origin","certificate-of-origin"],["compliance"],["customs"],"deep",["WCO_ORIGIN"]],
    ["origin","Origin","Origin","원산지",["country of origin"],["country-of-origin","preferential-origin"],["compliance"],["customs"],"deep",["WCO_ORIGIN"]],
    ["preferential-origin","Preferential Origin","Preferential Origin","특혜원산지",["FTA origin"],["non-preferential-origin","fta"],["compliance"],["customs"],"deep",["WCO_ORIGIN"]],
    ["non-preferential-origin","Non-preferential Origin","Non-preferential Origin","비특혜원산지",["non preferential origin"],["preferential-origin","rules-of-origin"],["compliance"],["customs"],"deep",["WCO_ORIGIN"]],
    ["fta","FTA","Free Trade Agreement","자유무역협정",["Free Trade Agreement"],["rules-of-origin","preferential-origin"],["compliance"],["customs"],"deep",["WCO_ORIGIN"]],
    ["rules-of-origin","Rules of Origin","Rules of Origin","원산지 결정기준",["ROO"],["country-of-origin","fta"],["compliance"],["customs"],"deep",["WCO_ORIGIN","CBP_ORIGIN"]],
    ["tariff-classification","Tariff Classification","Tariff Classification","품목분류",["classification"],["hs-code","binding-ruling"],["hs"],["customs"],"deep",["WCO_HS"]],
    ["binding-ruling","Binding Ruling","Binding Ruling","사전심사",["advance ruling"],["tariff-classification","customs-value"],["compliance"],["customs"],"deep",["WTO_TFA","CBP_IMPORT"]],
    ["customs-declaration","Customs Declaration","Customs Declaration","세관신고",["declaration"],["import-declaration","export-declaration"],["compliance"],["customs"],"deep",["EU_TAXUD","WTO_TFA"]],
    ["import-declaration","Import Declaration","Import Declaration","수입신고",["entry declaration"],["customs-declaration","importer"],["compliance"],["customs"]],
    ["export-declaration","Export Declaration","Export Declaration","수출신고",["export entry"],["customs-declaration","exporter"],["compliance"],["customs"]],
    ["customs-broker","Customs Broker","Customs Broker","관세사",["customs agent"],["customs-declaration","importer"],["compliance"],["customs"]],
    ["bonded-warehouse","Bonded Warehouse","Bonded Warehouse","보세창고",["bonded storage"],["free-trade-zone","customs-declaration"],["ports"],["arrival"],"deep"],
    ["free-trade-zone","Free Trade Zone","Free Trade Zone","자유무역지역",["FTZ"],["bonded-warehouse","customs-duty"],["compliance"],["customs"]],
    ["duty-drawback","Duty Drawback","Duty Drawback","관세환급",["drawback"],["customs-duty","export-declaration"],["compliance"],["settlement"],"deep",["CBP_IMPORT"]],
    ["import-license","Import License","Import License","수입허가",["import permit"],["restricted-goods","prohibited-goods"],["compliance"],["customs"],"deep"],
    ["export-license","Export License","Export License","수출허가",["export permit"],["export-controls","restricted-goods"],["compliance"],["customs"],"deep"],
    ["anti-dumping-duty","Anti-dumping Duty","Anti-dumping Duty","반덤핑관세",["ADD"],["countervailing-duty","safeguard"],["compliance"],["customs"],"deep"],
    ["countervailing-duty","Countervailing Duty","Countervailing Duty","상계관세",["CVD"],["anti-dumping-duty","safeguard"],["compliance"],["customs"]],
    ["safeguard","Safeguard","Safeguard Measure","세이프가드",["safeguard duty"],["anti-dumping-duty","countervailing-duty"],["compliance"],["customs"]],
    ["de-minimis","De Minimis","De Minimis","소액면세 기준",["low value threshold"],["customs-duty","import-declaration"],["compliance"],["customs"],"deep"],
    ["restricted-goods","Restricted Goods","Restricted Goods","제한물품",["controlled goods"],["prohibited-goods","import-license"],["compliance"],["customs"],"deep"],
    ["prohibited-goods","Prohibited Goods","Prohibited Goods","금지물품",["banned goods"],["restricted-goods","import-license"],["compliance"],["customs"],"deep"],
    ["eori","EORI","Economic Operators Registration and Identification","EU 사업자 식별번호",["Economic Operators Registration and Identification"],["importer","customs-declaration"],["compliance"],["customs"],"standard",["EU_TAXUD"]],
    ["aes","AES","Automated Export System","미국 자동수출신고 시스템",["Automated Export System"],["export-declaration","export-license"],["compliance"],["customs"],"standard",["CBP_IMPORT"]],
    ["entry-summary","Entry Summary","Entry Summary","수입신고 요약",["customs entry"],["import-declaration","customs-duty"],["compliance"],["customs"],"standard",["CBP_IMPORT"]],
    ["importer-of-record","Importer of Record","Importer of Record","수입자 책임주체",["IOR"],["importer","customs-broker"],["compliance"],["customs"],"deep",["CBP_IMPORT"]],
    ["exporter-of-record","Exporter of Record","Exporter of Record","수출자 책임주체",["EOR"],["exporter","export-declaration"],["compliance"],["customs"]],
    ["sanctions","Sanctions","Sanctions","제재",["trade sanctions"],["restricted-goods","export-license"],["compliance"],["customs"],"deep"],
    ["export-controls","Export Controls","Export Controls","수출통제",["strategic goods control"],["export-license","restricted-goods"],["compliance"],["customs"],"deep"],
    ["dual-use-goods","Dual-use Goods","Dual-use Goods","이중용도 물품",["dual use"],["export-controls","export-license"],["compliance"],["customs"],"deep"],
    ["valuation-adjustment","Valuation Adjustment","Valuation Adjustment","과세가격 가산·공제",["customs adjustment"],["customs-value","customs-valuation"],["compliance"],["customs"],"standard",["WCO_VALUATION"]],
    ["assists","Assists","Assists","생산지원",["buyer supplied assists"],["customs-value","valuation-adjustment"],["compliance"],["customs"],"standard",["WCO_VALUATION"]],
    ["royalty-license-fee","Royalty / License Fee","Royalty or License Fee","로열티·라이선스료",["royalties"],["customs-value","valuation-adjustment"],["compliance"],["customs"],"standard",["WCO_VALUATION"]],
    ["quota","Quota","Import Quota","수입쿼터",["tariff quota"],["import-license","restricted-goods"],["compliance"],["customs"]],
    ["certificate-compliance","Certificate of Compliance","Certificate of Compliance","적합성 증명서",["CoC compliance"],["restricted-goods","product-safety"],["compliance"],["customs"]],
    ["product-safety","Product Safety","Product Safety","제품안전",["safety compliance"],["certificate-compliance","restricted-goods"],["compliance"],["customs"]]
  ].forEach((r) => add(r[0], r[1], r[2], r[3], "customs", r[4], r[5], r[6], r[7], r[8] || "standard", r[9]));
  [
    ["eta","ETA","Estimated Time of Arrival","도착예정시간",["Estimated Arrival"],["etd","ata"],["tracking"],["transit"],"deep"],
    ["etd","ETD","Estimated Time of Departure","출발예정시간",["Estimated Departure"],["eta","atd"],["tracking"],["preshipment"],"deep"],
    ["ata","ATA","Actual Time of Arrival","실제도착시간",["Actual Arrival"],["eta","atd"],["tracking"],["arrival"],"deep"],
    ["atd","ATD","Actual Time of Departure","실제출발시간",["Actual Departure"],["etd","ata"],["tracking"],["transit"],"deep"],
    ["booking","Booking","Booking","선복 예약",["shipment booking"],["booking-confirmation","booking-number"],["freightMarket"],["booking"],"deep"],
    ["booking-confirmation","Booking Confirmation","Booking Confirmation","부킹확인서",["booking note"],["booking","booking-number"],["shippingInstruction"],["booking"]],
    ["booking-number","Booking Number","Booking Number","부킹번호",["booking reference"],["booking","container-number"],["tracking"],["booking"]],
    ["cut-off","Cut-off","Cut-off Time","마감시간",["cutoff"],["cy-cutoff","si-cutoff"],["businessDay"],["preshipment"],"deep"],
    ["cy-cutoff","CY Cut-off","Container Yard Cut-off","CY 반입 마감",["CY cutoff"],["cut-off","gate-in"],["ports"],["preshipment"]],
    ["si-cutoff","SI Cut-off","Shipping Instruction Cut-off","SI 제출 마감",["SI cutoff"],["shipping-instruction","cut-off"],["shippingInstruction"],["preshipment"]],
    ["vgm-cutoff","VGM Cut-off","VGM Cut-off","VGM 제출 마감",["VGM cutoff"],["vgm","cut-off"],["shippingInstruction"],["preshipment"]],
    ["shipping-instruction","Shipping Instruction","Shipping Instruction","선적요청서",["SI","선적지시서"],["si-cutoff","booking"],["shippingInstruction"],["preshipment"],"deep"],
    ["pre-alert","Pre-alert","Pre-alert","사전 도착 안내",["pre alert"],["arrival-notice","eta"],["tracking"],["arrival"]],
    ["manifest","Manifest","Cargo Manifest","적하목록",["cargo manifest"],["customs-declaration","shipping-instruction"],["compliance"],["customs"],"deep"],
    ["cargo-ready-date","Cargo Ready Date","Cargo Ready Date","화물 준비일",["CRD"],["cut-off","pickup"],["businessDay"],["preshipment"]],
    ["pickup","Pickup","Pickup","픽업",["collection"],["delivery","cargo-ready-date"],["tracking"],["preshipment"]],
    ["delivery","Delivery","Delivery","배송·인도",["final delivery"],["pickup","pod-proof"],["tracking"],["arrival"]],
    ["stuffing","Stuffing","Container Stuffing","컨테이너 적입",["loading container"],["devanning","container"],["cbm"],["preshipment"],"deep"],
    ["devanning","Devanning","Container Devanning","컨테이너 적출",["unstuffing"],["stuffing","stripping"],["ports"],["arrival"]],
    ["stripping","Stripping","Container Stripping","컨테이너 적출",["devanning"],["devanning","stuffing"],["ports"],["arrival"]],
    ["gate-in","Gate-in","Gate-in","터미널 반입",["gate in"],["cy-cutoff","container"],["ports"],["preshipment"]],
    ["gate-out","Gate-out","Gate-out","터미널 반출",["gate out"],["delivery","pod-proof"],["ports"],["arrival"]],
    ["free-time","Free Time","Free Time","무료 기간",["free days"],["demurrage","detention"],["freightMarket"],["arrival"],"deep",["FMC_DD"]],
    ["transit-time","Transit Time","Transit Time","운송기간",["TT transit"],["lead-time","eta"],["freightMarket"],["transit"],"deep"],
    ["lead-time","Lead Time","Lead Time","소요기간",["processing time"],["transit-time","cargo-ready-date"],["businessDay"],["quotation"]],
    ["tracking","Tracking","Shipment Tracking","화물 추적",["track and trace"],["eta","booking-number"],["tracking"],["transit"]],
    ["pod-proof","POD","Proof of Delivery","배송완료증명",["Proof of Delivery"],["delivery","gate-out"],["tracking"],["arrival"],"deep"],
    ["arrival-notice","Arrival Notice","Arrival Notice","도착통지서",["A/N"],["eta","delivery-order"],["tracking"],["arrival"]],
    ["delivery-order","D/O","Delivery Order","화물인도지시서",["Delivery Order"],["arrival-notice","pod-proof"],["tracking"],["arrival"],"deep"],
    ["cargo-release","Cargo Release","Cargo Release","화물 반출 승인",["release"],["delivery-order","customs-declaration"],["tracking"],["arrival"]],
    ["empty-return","Empty Return","Empty Container Return","공컨테이너 반납",["empty container return"],["detention","free-time"],["freightMarket"],["arrival"]],
    ["appointment","Appointment","Terminal Appointment","터미널 예약",["truck appointment"],["gate-in","gate-out"],["ports"],["preshipment"]],
    ["drayage","Drayage","Drayage","컨테이너 내륙운송",["inland trucking"],["pickup","delivery"],["freightMarket"],["arrival"]],
    ["last-mile","Last Mile","Last-mile Delivery","최종 배송",["final mile"],["delivery","pod-proof"],["tracking"],["arrival"]],
    ["milestone","Milestone","Shipment Milestone","운송 이벤트",["event"],["tracking","eta"],["tracking"],["transit"]],
    ["exception","Exception","Shipment Exception","운송 예외",["delay event"],["tracking","rollover"],["tracking"],["transit"]],
    ["hold","Hold","Cargo Hold","화물 보류",["customs hold"],["customs-declaration","cargo-release"],["compliance"],["customs"]],
    ["release-status","Release Status","Release Status","반출 상태",["cargo status"],["cargo-release","delivery-order"],["tracking"],["arrival"]]
  ].forEach((r) => add(r[0], r[1], r[2], r[3], "operations", r[4], r[5], r[6], r[7], r[8] || "standard", r[9]));
  [
    ["freight","Freight","Freight Charge","운임",["freight charge"],["ocean-freight","air-freight"],["freightMarket"],["quotation","settlement"],"deep"],
    ["ocean-freight","Ocean Freight","Ocean Freight","해상운임",["sea freight"],["freight","fcl"],["freightMarket"],["quotation"],"deep"],
    ["air-freight","Air Freight","Air Freight","항공운임",["air cargo freight"],["freight","chargeable-weight"],["freightMarket"],["quotation"],"deep"],
    ["demurrage","Demurrage","Demurrage","체선료",["DEM","체선료"],["detention","storage","free-time"],["freightMarket"],["arrival","settlement"],"deep",["FMC_DD","FMC_BILLING"]],
    ["detention","Detention","Detention","지체료",["DET","지체료"],["demurrage","storage","empty-return"],["freightMarket"],["arrival","settlement"],"deep",["FMC_DD","FMC_BILLING"]],
    ["storage","Storage","Storage Charge","보관료",["terminal storage"],["demurrage","detention"],["freightMarket"],["arrival","settlement"],"deep",["FMC_DD"]],
    ["dd-charges","D&D","Demurrage and Detention","Demurrage & Detention",["DND","D and D"],["demurrage","detention","free-time"],["freightMarket"],["arrival","settlement"],"deep",["FMC_DD"]],
    ["thc","THC","Terminal Handling Charge","터미널 처리비",["Terminal Handling Charge"],["origin-charge","destination-charge"],["freightMarket"],["settlement"],"deep"],
    ["terminal-handling-charge","Terminal Handling Charge","Terminal Handling Charge","터미널 처리비",["THC"],["thc","handling-fee"],["freightMarket"],["settlement"]],
    ["do-fee","D/O Fee","Delivery Order Fee","화물인도지시서 발급비",["Delivery Order Fee"],["delivery-order","documentation-fee"],["freightMarket"],["settlement"]],
    ["documentation-fee","Documentation Fee","Documentation Fee","서류비",["doc fee"],["do-fee","handling-fee"],["freightMarket"],["settlement"]],
    ["handling-fee","Handling Fee","Handling Fee","취급수수료",["handling charge"],["thc","documentation-fee"],["freightMarket"],["settlement"]],
    ["origin-charge","Origin Charge","Origin Local Charge","출발지 비용",["origin local"],["destination-charge","thc"],["freightMarket"],["settlement"]],
    ["destination-charge","Destination Charge","Destination Local Charge","도착지 비용",["destination local"],["origin-charge","thc"],["freightMarket"],["settlement"]],
    ["surcharge","Surcharge","Surcharge","할증료",["additional charge"],["fuel-surcharge","pss"],["freightMarket"],["settlement"],"deep"],
    ["fuel-surcharge","Fuel Surcharge","Fuel Surcharge","유류할증료",["fuel adjustment"],["baf","air-freight"],["freightMarket"],["settlement"],"deep"],
    ["baf","BAF","Bunker Adjustment Factor","유류할증료",["Bunker Adjustment Factor"],["fuel-surcharge","caf"],["freightMarket"],["settlement"],"deep"],
    ["caf","CAF","Currency Adjustment Factor","통화조정료",["Currency Adjustment Factor"],["baf","surcharge"],["currency","freightMarket"],["settlement"],"deep"],
    ["pss","PSS","Peak Season Surcharge","성수기 할증료",["Peak Season Surcharge"],["surcharge","gri"],["freightMarket"],["settlement"],"deep"],
    ["gri","GRI","General Rate Increase","운임 일괄 인상",["General Rate Increase"],["pss","surcharge"],["freightMarket"],["quotation"],"deep"],
    ["congestion-surcharge","Congestion Surcharge","Congestion Surcharge","혼잡 할증료",["port congestion surcharge"],["surcharge","storage"],["freightMarket"],["settlement"]],
    ["security-fee","Security Fee","Security Fee","보안료",["security surcharge"],["screening","surcharge"],["freightMarket"],["settlement"]],
    ["ams-fee","AMS Fee","Automated Manifest System Fee","AMS 비용",["AMS"],["manifest","customs-declaration"],["freightMarket"],["settlement"],"standard",["CBP_IMPORT"]],
    ["isf-fee","ISF Fee","Importer Security Filing Fee","ISF 비용",["ISF"],["manifest","importer-of-record"],["compliance"],["customs"],"standard",["CBP_IMPORT"]],
    ["customs-clearance-fee","Customs Clearance Fee","Customs Clearance Fee","통관수수료",["clearance fee"],["customs-broker","customs-declaration"],["compliance"],["settlement"]],
    ["brokerage-fee","Brokerage Fee","Brokerage Fee","중개수수료",["customs brokerage"],["customs-broker","customs-clearance-fee"],["compliance"],["settlement"]],
    ["warehousing-fee","Warehousing Fee","Warehousing Fee","창고료",["warehouse charge"],["storage","bonded-warehouse"],["freightMarket"],["settlement"]],
    ["pickup-charge","Pickup Charge","Pickup Charge","픽업비",["collection charge"],["pickup","origin-charge"],["freightMarket"],["quotation"]],
    ["delivery-charge","Delivery Charge","Delivery Charge","배송비",["delivery fee"],["delivery","destination-charge"],["freightMarket"],["settlement"]],
    ["drayage-charge","Drayage Charge","Drayage Charge","내륙운송비",["trucking charge"],["drayage","delivery-charge"],["freightMarket"],["settlement"]],
    ["fuel-adjustment-factor","FAF","Fuel Adjustment Factor","유류조정계수",["fuel adjustment factor"],["fuel-surcharge","baf"],["freightMarket"],["settlement"]],
    ["low-sulphur-surcharge","LSS","Low Sulphur Surcharge","저유황유 할증료",["low sulfur surcharge"],["baf","surcharge"],["freightMarket"],["settlement"]],
    ["emergency-bunker-surcharge","EBS","Emergency Bunker Surcharge","긴급 유류할증료",["emergency bunker"],["baf","fuel-surcharge"],["freightMarket"],["settlement"]],
    ["war-risk-surcharge","War Risk Surcharge","War Risk Surcharge","전쟁위험 할증료",["WRS"],["surcharge","security-fee"],["freightMarket"],["settlement"]],
    ["documentation-cutoff-fee","Late SI Fee","Late Shipping Instruction Fee","SI 지연 수수료",["late documentation fee"],["si-cutoff","documentation-fee"],["shippingInstruction"],["settlement"]],
    ["container-cleaning-fee","Container Cleaning Fee","Container Cleaning Fee","컨테이너 청소비",["cleaning charge"],["detention","empty-return"],["freightMarket"],["settlement"]]
  ].forEach((r) => add(r[0], r[1], r[2], r[3], "charges", r[4], r[5], r[6], r[7], r[8] || "standard", r[9]));

  [
    ["dunnage","Dunnage","Dunnage","던니지·받침재",["받침목","목재 받침","화물 받침","컨테이너 안 목재","void fill","packing material"],["blocking","shoring","bracing"],["cbm"],["preshipment"],"deep",["CTU_CODE","IPPC_ISPM15"],{koDef:"화물을 보호·지지·분리하거나 빈 공간을 메우기 위해 사용하는 목재, 매트, bag 등 다양한 받침·완충 재료를 말합니다.",enDef:"Material used to protect, support, separate, or fill voids around cargo, including timber, mats, bags, and other suitable materials.",koExample:"Dunnage to be placed under machinery base before lashing.",enExample:"Dunnage to be placed under machinery base before lashing."}],
    ["shoring","Shoring","Shoring","쇼링",["쇼링","버팀","화물 버팀","container shoring"],["blocking","bracing","dunnage"],["cbm"],["preshipment"],"deep",["CTU_CODE"],{koDef:"화물과 CTU 구조 사이에 버팀재를 배치해 하중과 움직임을 지지하는 securing 방식입니다.",enDef:"A securing method using supporting members between cargo and the CTU structure to resist load or movement.",koExample:"Side shoring required between cargo and container wall.",enExample:"Side shoring required between cargo and container wall."}],
    ["blocking","Blocking","Blocking","블로킹·막음",["블로킹","화물 고정 나무","받침목","stop block"],["bracing","shoring","chocking"],["cbm"],["preshipment"],"deep",["CTU_CODE"],{koDef:"화물 이동을 막기 위해 화물과 벽체·다른 화물 사이의 공간에 재료를 채워 지지하는 방식입니다.",enDef:"A method of restraining cargo movement by filling gaps between cargo, boundaries, or other packages with suitable material.",koExample:"Install timber blocking at the door end.",enExample:"Install timber blocking at the door end."}],
    ["bracing","Bracing","Bracing","브레이싱·버팀 고정",["브레이싱","brace","cross brace"],["blocking","shoring","lashings"],["cbm"],["preshipment"],"deep",["CTU_CODE"],{koDef:"화물 움직임을 억제하기 위해 대각 또는 횡방향 버팀 구조를 사용하는 securing 방식입니다.",enDef:"A securing method using diagonal or transverse braces to resist cargo movement.",koExample:"Use cross bracing where side clearance remains.",enExample:"Use cross bracing where side clearance remains."}],
    ["blocking-bracing","Blocking & Bracing","Blocking and Bracing","블로킹·브레이싱",["blocking and bracing","B&B","화물 고정 작업"],["blocking","bracing","shoring"],["cbm"],["preshipment"],"deep",["CTU_CODE"]],
    ["securing","Securing","Cargo Securing","화물 고정",["cargo securing","load securing","고박","고정"],["lashings","blocking","dunnage"],["cbm"],["preshipment"],"deep",["CTU_CODE"]],
    ["chocking","Chocking","Chocking","초킹·쐐기 고정",["쐐기","컨테이너 쐐기","wheel chock","wooden wedge"],["wedge","blocking","cribbing"],["cbm"],["preshipment"],"deep",["CTU_CODE"],{koDef:"원형·바퀴형 또는 굴러갈 수 있는 화물이 움직이지 않도록 쐐기나 받침을 대는 방식입니다.",enDef:"A method using wedges or chocks to restrain round, wheeled, or rolling cargo."}],
    ["cribbing","Cribbing","Cribbing","크리빙·받침 구조",["목재 받침 구조","crib blocks","stacked timber"],["dunnage","shoring","blocking"],["cbm"],["preshipment"],"deep",["CTU_CODE"]],
    ["wedge","Wedge","Wedge","쐐기",["wooden wedge","나무 쐐기","컨테이너 쐐기"],["chocking","blocking"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["dunnage-bag","Dunnage Bag","Dunnage Bag","던니지백",["air bag","inflatable dunnage","에어백","화물 에어백"],["dunnage","blocking"],["cbm"],["preshipment"],"deep",["CTU_CODE"]],
    ["strapping","Strapping","Strapping","스트래핑",["banding","밴딩","포장 밴드"],["banding","lashings"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["banding","Banding","Banding","밴딩",["strapping","steel band","plastic band"],["strapping","securing"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["ratchet-strap","Ratchet Strap","Ratchet Strap","라쳇 스트랩",["ratchet lashing","화물 벨트","라싱 벨트","화물 묶는 벨트"],["web-lashing","tie-down"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["web-lashing","Web Lashing","Web Lashing","웹 라싱",["webbing lashing","belt lashing","라싱벨트","화물 묶는 벨트"],["ratchet-strap","lashings"],["cbm"],["preshipment"],"deep",["CTU_CODE"]],
    ["chain-lashing","Chain Lashing","Chain Lashing","체인 라싱",["chain securing","체인 고정"],["lashings","turnbuckle"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["wire-rope","Wire Rope","Wire Rope","와이어 로프",["steel wire rope","와이어"],["turnbuckle","lashings"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["turnbuckle","Turnbuckle","Turnbuckle","턴버클",["tensioner","장력 조절기"],["wire-rope","chain-lashing"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["lashing-bar","Lashing Bar","Lashing Bar","라싱 바",["lashing rod","라싱 로드"],["lashing-point","container"],["ports"],["preshipment"],"standard",["CTU_CODE"]],
    ["lashing-rod","Lashing Rod","Lashing Rod","라싱 로드",["lashing bar"],["lashing-bar","lashing-point"],["ports"],["preshipment"],"standard",["CTU_CODE"]],
    ["lashing-point","Lashing Point","Lashing Point","라싱 포인트",["anchor point","고정점","결박점"],["anchor-point","lashings"],["cbm"],["preshipment"],"deep",["CTU_CODE"]],
    ["anchor-point","Anchor Point","Anchor Point","앵커 포인트",["lashing point","tie down point"],["lashing-point","tie-down"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["tie-down","Tie-down","Tie-down","타이다운",["tie down","direct lashing","friction lashing"],["direct-lashing","friction-lashing"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["direct-lashing","Direct Lashing","Direct Lashing","직접 라싱",["direct tie-down"],["friction-lashing","lashings"],["cbm"],["preshipment"],"deep",["CTU_CODE"]],
    ["friction-lashing","Friction Lashing","Friction Lashing","마찰 라싱",["over-the-top lashing"],["direct-lashing","anti-slip-mat"],["cbm"],["preshipment"],"deep",["CTU_CODE"]],
    ["anti-slip-mat","Anti-slip Mat","Anti-slip Mat","미끄럼 방지 매트",["friction mat","anti skid mat"],["friction-lashing","dunnage"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["timber","Timber","Timber","목재",["wood timber","목재 받침"],["dunnage","timber-blocking"],["cbm"],["preshipment"],"standard",["CTU_CODE","IPPC_ISPM15"]],
    ["timber-blocking","Timber Blocking","Timber Blocking","목재 블로킹",["wood blocking","목재 받침목"],["blocking","timber"],["cbm"],["preshipment"],"standard",["CTU_CODE","IPPC_ISPM15"]],
    ["sling","Sling","Lifting Sling","슬링",["lifting sling","벨트 슬링"],["rigging","spreader-beam"],["ports"],["preshipment"],"standard",["CTU_CODE"]],
    ["rigging","Rigging","Rigging","리깅",["인양 준비","lifting gear"],["sling","lift-point"],["ports"],["preshipment"],"deep",["CTU_CODE"]],
    ["spreader","Spreader","Spreader","스프레더",["container spreader"],["spreader-beam","twist-lock"],["ports"],["preshipment"],"standard",["CTU_CODE"]],
    ["spreader-beam","Spreader Beam","Spreader Beam","스프레더 빔",["lifting beam"],["lifting-beam","sling"],["ports"],["preshipment"],"deep",["CTU_CODE"]],
    ["lifting-beam","Lifting Beam","Lifting Beam","리프팅 빔",["spreader beam"],["spreader-beam","rigging"],["ports"],["preshipment"],"standard",["CTU_CODE"]],
    ["lift-point","Lift Point","Lift Point","인양 지점",["lifting point","lifting lug"],["lifting-lug","center-of-gravity"],["ports"],["preshipment"],"deep",["CTU_CODE"]],
    ["lifting-lug","Lifting Lug","Lifting Lug","리프팅 러그",["lifting eye","pad eye"],["lift-point","rigging"],["ports"],["preshipment"],"standard",["CTU_CODE"]],
    ["center-of-gravity","Center of Gravity","Center of Gravity","무게중심",["COG","무게 중심","중심 위치"],["lift-point","heavy-lift"],["cbm"],["preshipment"],"deep",["CTU_CODE"]],
    ["swl","SWL","Safe Working Load","안전사용하중",["Safe Working Load"],["wll","rigging"],["ports"],["preshipment"],"deep",["CTU_CODE"]],
    ["wll","WLL","Working Load Limit","사용하중한계",["Working Load Limit"],["swl","rigging"],["ports"],["preshipment"],"deep",["CTU_CODE"]],
    ["vanning","Vanning","Container Vanning","컨테이너 적입",["stuffing","컨테이너 적재"],["stuffing","devanning"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["unstuffing","Unstuffing","Container Unstuffing","컨테이너 적출",["devanning","stripping"],["devanning","stripping"],["ports"],["arrival"],"standard",["CTU_CODE"]],
    ["stowage-plan","Stowage Plan","Stowage Plan","적부 계획",["stow plan","적재 계획"],["stowage","bay-plan"],["ports"],["preshipment"],"deep",["CTU_CODE","IMO_FAL"]],
    ["bay","Bay","Container Bay","베이",["ship bay","container bay"],["row","tier"],["ports"],["transit"],"deep",["IMO_FAL"]],
    ["row","Row","Container Row","로우",["ship row"],["bay","tier"],["ports"],["transit"],"deep",["IMO_FAL"]],
    ["tier","Tier","Container Tier","티어",["container tier"],["bay","row"],["ports"],["transit"],"deep",["IMO_FAL"]],
    ["bay-plan","Bay Plan","Bay Plan","베이 플랜",["stowage plan","container plan"],["bay","stowage-plan"],["ports"],["transit"],"deep",["IMO_FAL"]],
    ["twist-lock","Twist Lock","Twist Lock","트위스트 락",["container lock","컨테이너 자물쇠"],["corner-casting","container"],["ports"],["preshipment"],"deep",["CTU_CODE"]],
    ["corner-casting","Corner Casting","Corner Casting","코너 캐스팅",["corner fitting","컨테이너 모서리 구멍"],["twist-lock","container"],["ports"],["preshipment"],"deep",["CTU_CODE"]],
    ["csc-plate","CSC Plate","CSC Safety Approval Plate","CSC 안전승인판",["safety approval plate"],["container","maximum-gross-mass"],["tracking"],["preshipment"],"deep",["CTU_CODE"]],
    ["maximum-gross-mass","Maximum Gross Mass","Maximum Gross Mass","최대 총중량",["max gross mass","maximum gross weight"],["gross-mass","payload","tare-weight"],["cbm"],["preshipment"],"deep",["CTU_CODE"]],
    ["gross-mass","Gross Mass","Gross Mass","총질량",["gross weight"],["maximum-gross-mass","vgm"],["cbm"],["preshipment"],"standard",["CTU_CODE","IMO_VGM"]],
    ["container-floor","Container Floor","Container Floor","컨테이너 바닥",["floor load","floor strength"],["dunnage","payload"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["container-door","Container Door","Container Door","컨테이너 문",["door end","container doors"],["door-end","blocking"],["tracking"],["preshipment"],"standard",["CTU_CODE"]],
    ["door-end","Door End","Door End","문쪽 끝",["door side"],["container-door","front-end"],["tracking"],["preshipment"],"standard",["CTU_CODE"]],
    ["front-end","Front End","Front End","전면부",["front wall"],["door-end","container"],["tracking"],["preshipment"],"standard",["CTU_CODE"]],
    ["high-cube","High Cube","High Cube Container","하이큐브 컨테이너",["HC container","HQ container"],["dry-container","container"],["cbm"],["booking"],"standard",["CTU_CODE"]],
    ["platform-container","Platform Container","Platform Container","플랫폼 컨테이너",["platform flat"],["flat-rack","oog"],["freightMarket"],["booking"],"standard",["CTU_CODE"]],
    ["tank-container","Tank Container","Tank Container","탱크 컨테이너",["ISO tank"],["dangerous-goods","special-cargo"],["freightMarket"],["booking"],"standard",["CTU_CODE"]],
    ["container-inspection","Container Inspection","Container Inspection","컨테이너 검사",["container check"],["container-condition","container-damage"],["tracking"],["preshipment"],"standard",["CTU_CODE"]],
    ["container-damage","Container Damage","Container Damage","컨테이너 손상",["damaged container"],["container-condition","container-inspection"],["tracking"],["preshipment"],"standard",["CTU_CODE"]],
    ["container-condition","Container Condition","Container Condition","컨테이너 상태",["equipment condition"],["container-inspection","container-damage"],["tracking"],["preshipment"],"standard",["CTU_CODE"]],
    ["pti","PTI","Pre-trip Inspection","운송 전 점검",["Pre Trip Inspection","reefer PTI"],["reefer","set-point"],["tracking"],["preshipment"],"deep",["CTU_CODE"]],
    ["reefer-plug","Reefer Plug","Reefer Plug","냉동컨테이너 전원 연결",["reefer power plug"],["reefer","pti"],["ports"],["preshipment"],"standard",["CTU_CODE"]],
    ["set-point","Set Point","Temperature Set Point","설정 온도",["temperature setting"],["reefer","ventilation","humidity-setting"],["freightMarket"],["booking"],"deep",["CTU_CODE"]],
    ["ventilation","Ventilation","Ventilation Setting","환기 설정",["vent setting"],["set-point","humidity-setting"],["freightMarket"],["booking"],"standard",["CTU_CODE"]],
    ["humidity-setting","Humidity Setting","Humidity Setting","습도 설정",["humidity control"],["set-point","ventilation"],["freightMarket"],["booking"],"standard",["CTU_CODE"]],
    ["project-cargo","Project Cargo","Project Cargo","프로젝트 화물",["plant cargo","industrial cargo"],["heavy-lift","oog"],["freightMarket"],["quotation"],"deep",["CTU_CODE"]],
    ["heavy-lift","Heavy Lift","Heavy Lift Cargo","중량물",["heavy cargo"],["project-cargo","center-of-gravity"],["freightMarket"],["quotation"],"deep",["CTU_CODE"]],
    ["roro","RoRo","Roll-on/Roll-off","로로 운송",["roll on roll off"],["lolo","mafi"],["ports"],["booking"],"deep",["IMO_FAL"]],
    ["lolo","LoLo","Lift-on/Lift-off","로로 대비 인양식 운송",["lift on lift off"],["roro","heavy-lift"],["ports"],["booking"],"deep",["IMO_FAL"]],
    ["mafi","Mafi","Mafi Trailer","마피 트레일러",["roll trailer"],["roll-trailer","roro"],["ports"],["booking"],"standard",["IMO_FAL"]],
    ["roll-trailer","Roll Trailer","Roll Trailer","롤 트레일러",["mafi trailer"],["mafi","roro"],["ports"],["booking"],"standard",["IMO_FAL"]],
    ["lifting-plan","Lifting Plan","Lifting Plan","인양 계획",["lift plan"],["rigging-plan","method-statement"],["ports"],["preshipment"],"deep",["CTU_CODE"]],
    ["rigging-plan","Rigging Plan","Rigging Plan","리깅 계획",["lifting plan"],["lifting-plan","rigging"],["ports"],["preshipment"],"deep",["CTU_CODE"]],
    ["method-statement","Method Statement","Method Statement","작업 방법서",["work method statement"],["lifting-plan","rigging-plan"],["ports"],["preshipment"],"standard",["CTU_CODE"]],
    ["overheight","Overheight","Overheight Cargo","높이 초과 화물",["OH cargo"],["oog","overwidth"],["freightMarket"],["booking"],"standard",["CTU_CODE"]],
    ["overwidth","Overwidth","Overwidth Cargo","폭 초과 화물",["OW cargo"],["oog","overheight"],["freightMarket"],["booking"],"standard",["CTU_CODE"]],
    ["overlength","Overlength","Overlength Cargo","길이 초과 화물",["OL cargo"],["oog","overheight"],["freightMarket"],["booking"],"standard",["CTU_CODE"]],
    ["deck-cargo","Deck Cargo","Deck Cargo","갑판적 화물",["on deck cargo"],["underdeck-cargo","breakbulk"],["ports"],["booking"],"standard",["IMO_FAL"]],
    ["underdeck-cargo","Underdeck Cargo","Underdeck Cargo","선창적 화물",["under deck cargo"],["deck-cargo","breakbulk"],["ports"],["booking"],"standard",["IMO_FAL"]],
    ["uld-build-up","ULD Build-up","ULD Build-up","ULD 조립",["build-up","항공 팔레트 작업"],["uld","uld-break-down"],["airports"],["preshipment"],"deep",["IATA_AIR"]],
    ["uld-break-down","ULD Break-down","ULD Break-down","ULD 해체",["break-down","deconsolidation"],["uld-build-up","deconsolidation"],["airports"],["arrival"],"deep",["IATA_AIR"]],
    ["aircraft-pallet","Aircraft Pallet","Aircraft Pallet","항공기 팔레트",["air pallet","항공 팔레트","PMC"],["uld","pmc"],["airports"],["booking"],"deep",["IATA_AIR"]],
    ["air-cargo-container","Air Cargo Container","Air Cargo Container","항공화물 컨테이너",["AKE","AKH"],["uld","ake","akh"],["airports"],["booking"],"deep",["IATA_AIR"]],
    ["pmc","PMC","PMC Aircraft Pallet","PMC 항공 팔레트",["PMC pallet"],["aircraft-pallet","uld"],["airports"],["booking"],"deep",["IATA_AIR"]],
    ["ake","AKE","AKE ULD","AKE 항공 컨테이너",["LD3","AKE container"],["air-cargo-container","uld"],["airports"],["booking"],"deep",["IATA_AIR"]],
    ["akh","AKH","AKH ULD","AKH 항공 컨테이너",["AKH container"],["air-cargo-container","uld"],["airports"],["booking"],"standard",["IATA_AIR"]],
    ["uld-contour","ULD Contour","ULD Contour","ULD 외곽 형상",["contour","aircraft contour"],["uld","aircraft-pallet"],["airports"],["booking"],"standard",["IATA_AIR"]],
    ["deconsolidation","Deconsolidation","Deconsolidation","혼재 해체",["deconsol"],["air-consolidation","uld-break-down"],["airports"],["arrival"],"standard",["IATA_AIR"]],
    ["allotment","Allotment","Air Cargo Allotment","항공화물 할당 공간",["space allotment"],["bsa","air-freight"],["freightMarket"],["quotation"],"standard",["IATA_AIR"]],
    ["bsa","BSA","Block Space Agreement","블록 스페이스 계약",["Block Space Agreement"],["allotment","air-freight"],["freightMarket"],["contract"],"standard",["IATA_AIR"]],
    ["freighter","Freighter","Cargo Aircraft","화물기",["cargo aircraft"],["belly-cargo","air-cargo"],["airports"],["booking"],"standard",["IATA_AIR"]],
    ["belly-cargo","Belly Cargo","Passenger Aircraft Belly Cargo","여객기 하부 화물",["passenger aircraft cargo"],["freighter","air-cargo"],["airports"],["booking"],"standard",["IATA_AIR"]],
    ["rfs","RFS","Road Feeder Service","항공화물 육상 피더",["Road Feeder Service"],["air-routing","airport"],["airports"],["transit"],"standard",["IATA_AIR"]],
    ["airside","Airside","Airside","에어사이드",["air-side"],["landside","airport-terminal"],["airports"],["preshipment"],"standard",["IATA_AIR"]],
    ["landside","Landside","Landside","랜드사이드",["land-side"],["airside","airport-terminal"],["airports"],["preshipment"],"standard",["IATA_AIR"]],
    ["cargo-acceptance","Cargo Acceptance","Cargo Acceptance","화물 접수",["acceptance"],["screening","air-cutoff"],["airports"],["preshipment"],"standard",["IATA_AIR"]],
    ["customs-clearance","Customs Clearance","Customs Clearance","통관",["clearance","수출입 통관"],["customs-declaration","customs-release"],["compliance"],["customs"],"deep",["WCO_STANDARDS","WTO_TFA"]],
    ["customs-release","Customs Release","Customs Release","통관 반출 승인",["release","clearance release"],["customs-clearance","cargo-release"],["compliance"],["customs"],"deep",["WCO_STANDARDS"]],
    ["clearance-home-use","Clearance for Home Use","Clearance for Home Use","국내 소비용 통관",["home use"],["import-declaration","customs-release"],["compliance"],["customs"],"standard",["WCO_STANDARDS"]],
    ["customs-transit","Customs Transit","Customs Transit","보세운송·세관 transit",["transit procedure","보세 운송"],["customs-clearance","bonded-goods"],["compliance"],["customs"],"deep",["WTO_TFA","WCO_STANDARDS"]],
    ["inward-processing","Inward Processing","Inward Processing","역내가공",["processing relief"],["outward-processing","temporary-admission"],["compliance"],["customs"],"deep",["WCO_STANDARDS","EU_TAXUD"]],
    ["outward-processing","Outward Processing","Outward Processing","역외가공",["outward processing relief"],["inward-processing","re-importation"],["compliance"],["customs"],"deep",["WCO_STANDARDS","EU_TAXUD"]],
    ["temporary-admission","Temporary Admission","Temporary Admission","일시수입",["temporary importation","임시수입"],["re-exportation","customs-duty"],["compliance"],["customs"],"deep",["WCO_STANDARDS"]],
    ["re-exportation","Re-exportation","Re-exportation","재수출",["re-export"],["temporary-admission","export-declaration"],["compliance"],["customs"],"standard",["WCO_STANDARDS"]],
    ["re-importation","Re-importation","Re-importation","재수입",["re-import"],["outward-processing","import-declaration"],["compliance"],["customs"],"standard",["WCO_STANDARDS"]],
    ["bonded-goods","Bonded Goods","Bonded Goods","보세화물",["bonded cargo"],["bonded-warehouse","customs-transit"],["compliance"],["customs"],"standard",["WCO_STANDARDS"]],
    ["customs-guarantee","Customs Guarantee","Customs Guarantee","세관 담보",["customs bond"],["customs-transit","customs-duty"],["compliance"],["customs"],"standard",["WCO_STANDARDS"]],
    ["declarant","Declarant","Declarant","신고인",["customs declarant"],["customs-declaration","customs-broker"],["compliance"],["customs"],"standard",["WCO_STANDARDS"]],
    ["goods-declaration","Goods Declaration","Goods Declaration","물품신고",["customs declaration"],["customs-declaration","declarant"],["compliance"],["customs"],"standard",["WCO_STANDARDS"]],
    ["aeo","AEO","Authorized Economic Operator","수출입안전관리 우수업체",["Authorized Economic Operator"],["customs-risk-management","single-window"],["compliance"],["customs"],"standard",["WCO_STANDARDS"]],
    ["single-window","Single Window","Single Window","싱글윈도우",["trade single window"],["customs-declaration","edi"],["compliance"],["customs"],"standard",["WTO_TFA","UNECE"]],
    ["customs-risk-management","Risk Management","Customs Risk Management","세관 위험관리",["risk management"],["inspection","documentary-check"],["compliance"],["customs"],"standard",["WCO_STANDARDS"]],
    ["inspection","Inspection","Customs Inspection","검사",["physical inspection"],["physical-inspection","documentary-check"],["compliance"],["customs"],"standard",["WCO_STANDARDS"]],
    ["physical-inspection","Physical Inspection","Physical Inspection","현품검사",["cargo inspection"],["inspection","documentary-check"],["compliance"],["customs"],"standard",["WCO_STANDARDS"]],
    ["documentary-check","Documentary Check","Documentary Check","서류심사",["document check"],["inspection","customs-declaration"],["compliance"],["customs"],"standard",["WCO_STANDARDS"]],
    ["post-clearance-audit","Post-clearance Audit","Post-clearance Audit","사후심사",["PCA"],["customs-clearance","customs-value"],["compliance"],["customs"],"standard",["WCO_STANDARDS"]],
    ["transaction-value","Transaction Value","Transaction Value","거래가격",["transaction value method"],["customs-value","related-parties"],["compliance"],["customs"],"deep",["WCO_VALUATION"]],
    ["related-parties","Related Parties","Related Parties","특수관계자",["related party"],["transaction-value","customs-value"],["compliance"],["customs"],"standard",["WCO_VALUATION"]],
    ["duty-suspension","Duty Suspension","Duty Suspension","관세 유예",["suspension"],["temporary-admission","customs-duty"],["compliance"],["customs"],"standard",["WCO_STANDARDS"]],
    ["duty-exemption","Duty Exemption","Duty Exemption","관세 면제",["exemption"],["customs-duty","de-minimis"],["compliance"],["customs"],"standard",["WCO_STANDARDS"]],
    ["wholly-obtained","Wholly Obtained","Wholly Obtained","완전생산",["WO","완전 획득"],["rules-of-origin","rvc"],["compliance"],["customs"],"deep",["WCO_ORIGIN"]],
    ["substantial-transformation","Substantial Transformation","Substantial Transformation","실질적 변형",["substantial change"],["rules-of-origin","ctc"],["compliance"],["customs"],"deep",["WCO_ORIGIN"]],
    ["rvc","RVC","Regional Value Content","역내부가가치",["Regional Value Content"],["cth","ctsh","rules-of-origin"],["compliance"],["customs"],"deep",["WCO_ORIGIN"]],
    ["ctc","CTC","Change in Tariff Classification","세번변경기준",["Change in Tariff Classification"],["cth","ctsh","rvc"],["compliance"],["customs"],"deep",["WCO_ORIGIN"]],
    ["cth","CTH","Change in Tariff Heading","호 변경기준",["Change in Tariff Heading"],["ctc","ctsh"],["compliance"],["customs"],"deep",["WCO_ORIGIN"]],
    ["ctsh","CTSH","Change in Tariff Subheading","소호 변경기준",["Change in Tariff Subheading"],["ctc","cth"],["compliance"],["customs"],"deep",["WCO_ORIGIN"]],
    ["specific-processing-rule","Specific Processing Rule","Specific Processing Rule","특정공정기준",["specific process"],["rules-of-origin","rvc"],["compliance"],["customs"],"standard",["WCO_ORIGIN"]],
    ["cumulation","Cumulation","Cumulation","누적기준",["origin cumulation"],["bilateral-cumulation","diagonal-cumulation"],["compliance"],["customs"],"deep",["WCO_ORIGIN"]],
    ["bilateral-cumulation","Bilateral Cumulation","Bilateral Cumulation","양자누적",["bilateral accumulation"],["cumulation","diagonal-cumulation"],["compliance"],["customs"],"standard",["WCO_ORIGIN"]],
    ["diagonal-cumulation","Diagonal Cumulation","Diagonal Cumulation","대각누적",["diagonal accumulation"],["cumulation","full-cumulation"],["compliance"],["customs"],"standard",["WCO_ORIGIN"]],
    ["full-cumulation","Full Cumulation","Full Cumulation","완전누적",["full accumulation"],["cumulation","bilateral-cumulation"],["compliance"],["customs"],"standard",["WCO_ORIGIN"]],
    ["direct-transport","Direct Transport","Direct Transport","직접운송",["direct consignment"],["non-alteration","rules-of-origin"],["compliance"],["customs"],"standard",["WCO_ORIGIN"]],
    ["non-alteration","Non-alteration","Non-alteration","비변경 원칙",["non manipulation"],["direct-transport","rules-of-origin"],["compliance"],["customs"],"standard",["WCO_ORIGIN"]],
    ["origin-declaration","Origin Declaration","Origin Declaration","원산지 신고문안",["statement on origin"],["statement-on-origin","approved-exporter"],["compliance"],["customs"],"standard",["WCO_ORIGIN"]],
    ["statement-on-origin","Statement on Origin","Statement on Origin","원산지 문안",["origin statement"],["origin-declaration","rex"],["compliance"],["customs"],"standard",["WCO_ORIGIN"]],
    ["supplier-declaration","Supplier Declaration","Supplier Declaration","공급자 원산지 확인서",["supplier origin declaration"],["origin-declaration","rules-of-origin"],["compliance"],["customs"],"standard",["WCO_ORIGIN"]],
    ["approved-exporter","Approved Exporter","Approved Exporter","인증수출자",["authorized exporter"],["origin-declaration","rex"],["compliance"],["customs"],"standard",["WCO_ORIGIN"]],
    ["rex","REX","Registered Exporter System","등록수출자 제도",["Registered Exporter"],["statement-on-origin","approved-exporter"],["compliance"],["customs"],"standard",["EU_TAXUD"]],
    ["freight-forwarder","Freight Forwarder","Freight Forwarder","포워더",["forwarder","freight forwarding"],["nvocc","consolidator"],["tracking"],["booking"],"standard",["FIATA"]],
    ["vocc","VOCC","Vessel-operating Common Carrier","선박운항공동운송인",["Vessel Operating Common Carrier"],["nvocc","carrier"],["tracking"],["booking"],"standard",["FIATA"]],
    ["consolidator","Consolidator","Consolidator","혼재업자",["consol operator"],["co-loader","lcl"],["freightMarket"],["booking"],"standard",["FIATA"]],
    ["co-loader","Co-loader","Co-loader","코로더",["coloader"],["consolidator","lcl"],["freightMarket"],["booking"],"standard",["FIATA"]],
    ["consignor","Consignor","Consignor","송하인",["shipper"],["shipper","consignee"],["shippingInstruction"],["booking"],"standard",["FIATA"]],
    ["cargo-receipt","Cargo Receipt","Cargo Receipt","화물수취증",["receipt for cargo"],["fcr","shipping-instruction"],["templates"],["preshipment"],"standard",["FIATA"]],
    ["fcr","FCR","Forwarder's Cargo Receipt","포워더 화물수취증",["Forwarders Cargo Receipt"],["cargo-receipt","freight-forwarder"],["templates"],["preshipment"],"standard",["FIATA"]],
    ["freight-manifest","Freight Manifest","Freight Manifest","운임 적하목록",["manifest"],["manifest","cargo-manifest"],["compliance"],["customs"],"standard",["IMO_FAL"]],
    ["edi","EDI","Electronic Data Interchange","전자문서교환",["EDIFACT","전자 데이터 교환"],["edifact","single-window"],["compliance"],["customs"],"standard",["UNECE"]],
    ["edifact","EDIFACT","UN/EDIFACT","UN 전자문서 표준",["UN EDIFACT"],["edi","single-window"],["compliance"],["customs"],"standard",["UNECE"]],
    ["imdg-code","IMDG Code","International Maritime Dangerous Goods Code","국제해상위험물규칙",["IMDG"],["dangerous-goods","un-number"],["compliance"],["preshipment"],"deep",["IMO_IMDG"]],
    ["un-number","UN Number","UN Number","UN 번호",["UN No.","UN번호"],["proper-shipping-name","hazard-class"],["compliance"],["preshipment"],"deep",["IMO_IMDG","IATA_DGR"]],
    ["proper-shipping-name","Proper Shipping Name","Proper Shipping Name","정식운송품명",["PSN"],["un-number","hazard-class"],["compliance"],["preshipment"],"deep",["IMO_IMDG","IATA_DGR"]],
    ["hazard-class","Hazard Class","Hazard Class","위험물 등급",["class division"],["division","packing-group"],["compliance"],["preshipment"],"standard",["IMO_IMDG","IATA_DGR"]],
    ["division","Division","Dangerous Goods Division","위험물 세부분류",["DG division"],["hazard-class","packing-group"],["compliance"],["preshipment"],"standard",["IMO_IMDG","IATA_DGR"]],
    ["packing-group","Packing Group","Packing Group","포장등급",["PG"],["proper-shipping-name","hazard-class"],["compliance"],["preshipment"],"deep",["IMO_IMDG","IATA_DGR"]],
    ["marine-pollutant","Marine Pollutant","Marine Pollutant","해양오염물질",["MP"],["imdg-code","dangerous-goods"],["compliance"],["preshipment"],"standard",["IMO_IMDG"]],
    ["limited-quantity","Limited Quantity","Limited Quantity","소량위험물",["LQ"],["excepted-quantity","dangerous-goods"],["compliance"],["preshipment"],"standard",["IMO_IMDG","IATA_DGR"]],
    ["excepted-quantity","Excepted Quantity","Excepted Quantity","극소량위험물",["EQ"],["limited-quantity","dangerous-goods"],["compliance"],["preshipment"],"standard",["IMO_IMDG","IATA_DGR"]],
    ["sds","SDS","Safety Data Sheet","안전보건자료",["MSDS","Safety Data Sheet"],["dangerous-goods-declaration","proper-shipping-name"],["compliance"],["preshipment"],"standard",["IATA_DGR"]],
    ["dangerous-goods-declaration","Dangerous Goods Declaration","Dangerous Goods Declaration","위험물 신고서",["Shipper's Declaration for Dangerous Goods","DGD"],["dangerous-goods","un-number"],["templates"],["preshipment"],"deep",["IATA_DGR","IMO_IMDG"]],
    ["segregation","Segregation","Dangerous Goods Segregation","위험물 격리",["compatibility"],["compatibility","dangerous-goods"],["compliance"],["preshipment"],"standard",["IMO_IMDG"]],
    ["compatibility","Compatibility","Dangerous Goods Compatibility","위험물 혼재 적합성",["compatibility group"],["segregation","hazard-class"],["compliance"],["preshipment"],"standard",["IMO_IMDG"]],
    ["flash-point","Flash Point","Flash Point","인화점",["flashpoint"],["dangerous-goods","hazard-class"],["compliance"],["preshipment"],"standard",["IMO_IMDG"]],
    ["lithium-battery","Lithium Battery","Lithium Battery","리튬배터리",["Li battery"],["dangerous-goods","iata-dgr"],["compliance"],["preshipment"],"standard",["IATA_DGR"]],
    ["dry-ice","Dry Ice","Dry Ice","드라이아이스",["carbon dioxide solid"],["dangerous-goods","perishable-cargo"],["compliance"],["preshipment"],"standard",["IATA_DGR"]],
    ["pharmaceutical-cargo","Pharmaceutical Cargo","Pharmaceutical Cargo","의약품 화물",["pharma cargo"],["temperature-controlled","reefer"],["airports"],["booking"],"standard",["IATA_AIR"]],
    ["live-animals","Live Animals","Live Animals","생동물",["AVI cargo"],["special-cargo","air-cargo"],["airports"],["booking"],"standard",["IATA_AIR"]],
    ["special-cargo","Special Cargo","Special Cargo","특수화물",["special handling cargo"],["dangerous-goods","temperature-controlled"],["airports"],["booking"],"standard",["IATA_AIR"]],
    ["packaging","Packaging","Packaging","포장",["package design"],["packing","palletizing"],["templates"],["preshipment"],"standard",["CTU_CODE"]],
    ["packing","Packing","Packing","포장 작업",["export packing"],["packaging","packing-list"],["packingList"],["preshipment"],"standard",["CTU_CODE"]],
    ["pallet","Pallet","Pallet","팔레트",["파렛트"],["palletizing","unitization"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["palletizing","Palletizing","Palletizing","팔레타이징",["palletization"],["pallet","unitization"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["unitization","Unitization","Unitization","단위화",["unit load"],["palletizing","strapping"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["crate","Crate","Crate","크레이트",["wooden crate"],["crating","export-packing"],["cbm"],["preshipment"],"standard",["CTU_CODE","IPPC_ISPM15"]],
    ["crating","Crating","Crating","목상자 포장",["wood crating"],["crate","ispm-15"],["cbm"],["preshipment"],"standard",["CTU_CODE","IPPC_ISPM15"]],
    ["case","Case","Case","케이스 포장",["wooden case"],["crate","carton"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["carton","Carton","Carton","카톤",["box"],["case","packing-list"],["packingList"],["preshipment"],"standard",["CTU_CODE"]],
    ["drum","Drum","Drum","드럼",["barrel"],["dangerous-goods","packing-group"],["packingList"],["preshipment"],"standard",["CTU_CODE","IMO_IMDG"]],
    ["skid","Skid","Skid","스키드",["skid base"],["pallet","dunnage"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["shrink-wrap","Shrink Wrap","Shrink Wrap","슈링크랩",["shrink film"],["stretch-wrap","palletizing"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["stretch-wrap","Stretch Wrap","Stretch Wrap","스트레치랩",["stretch film"],["shrink-wrap","palletizing"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["void-fill","Void Fill","Void Fill","빈 공간 충전재",["void filler","완충재"],["dunnage","dunnage-bag"],["cbm"],["preshipment"],"standard",["CTU_CODE"]],
    ["moisture-barrier","Moisture Barrier","Moisture Barrier","방습 포장",["barrier bag"],["desiccant","vci"],["templates"],["preshipment"],"standard",["CTU_CODE"]],
    ["desiccant","Desiccant","Desiccant","건조제",["silica gel"],["moisture-barrier","vci"],["templates"],["preshipment"],"standard",["CTU_CODE"]],
    ["vci","VCI","Vapor Corrosion Inhibitor","기화성 방청제",["VCI film","방청 포장"],["moisture-barrier","desiccant"],["templates"],["preshipment"],"standard",["CTU_CODE"]],
    ["export-packing","Export Packing","Export Packing","수출포장",["seaworthy packing"],["seaworthy-packing","crate"],["templates"],["preshipment"],"standard",["CTU_CODE","IPPC_ISPM15"]],
    ["seaworthy-packing","Seaworthy Packing","Seaworthy Packing","해상운송 적합 포장",["sea-worthy packing"],["export-packing","dunnage"],["templates"],["preshipment"],"deep",["CTU_CODE"]],
    ["ispm-15","ISPM 15","International Standard for Phytosanitary Measures No. 15","ISPM 15 목재포장 규정",["WPM","wood packaging material","HT mark","열처리 마크"],["wood-packaging-material","heat-treatment"],["compliance"],["preshipment"],"deep",["IPPC_ISPM15"]],
    ["wood-packaging-material","Wood Packaging Material","Wood Packaging Material","목재포장재",["WPM","wood packing material"],["ispm-15","dunnage"],["compliance"],["preshipment"],"deep",["IPPC_ISPM15"]],
    ["heat-treatment","Heat Treatment","Heat Treatment","열처리",["HT mark","HT"],["ispm-15","wood-packaging-material"],["compliance"],["preshipment"],"standard",["IPPC_ISPM15"]],
    ["ht-mark","HT Mark","Heat Treatment Mark","열처리 마크",["ISPM mark"],["ispm-15","heat-treatment"],["compliance"],["preshipment"],"standard",["IPPC_ISPM15"]]
  ].forEach((r) => add(r[0], r[1], r[2], r[3], r[0].match(/customs|clearance|transit|processing|admission|origin|cumulation|declarant|aeo|window|inspection|value|duty|rex|ispm|wood-packaging|heat-treatment|ht-mark/) ? "customs" : r[0].match(/uld|aircraft|ake|akh|pmc|freighter|belly|rfs|airside|landside|cargo-acceptance|allotment|bsa|deconsolidation/) ? "air" : r[0].match(/freight-forwarder|vocc|consolidator|co-loader|consignor|cargo-receipt|fcr|manifest|edi|edifact|imdg|un-number|proper-shipping|hazard|division|packing-group|marine-pollutant|limited|excepted|sds|dangerous|segregation|compatibility|flash|lithium|dry-ice|pharmaceutical|live-animals|special/) ? "customs" : "cargo", r[4], r[5], r[6], r[7], r[8] || "standard", r[9], r[10]));

  const deepById = {
    demurrage: { ko: ["적용 free time", "import/export 구분", "calendar day 또는 working day 기준", "시작·종료 기준", "carrier/terminal tariff", "D&D 통합 청구 여부"], en: ["Applicable free time", "Import/export context", "Calendar day or working day basis", "Start/end trigger", "Carrier/terminal tariff", "Whether D&D is combined"] },
    detention: { ko: ["공컨테이너 반납 기한", "터미널 밖 장비 사용 기간", "수입/수출 free time", "운송사별 산정 방식"], en: ["Empty return deadline", "Equipment time outside terminal", "Import/export free time", "Carrier-specific calculation"] },
    storage: { ko: ["터미널 또는 창고 보관 주체", "Demurrage와 별도 청구 여부", "반출 가능일과 free time"], en: ["Terminal or warehouse billing party", "Whether charged separately from demurrage", "Availability date and free time"] },
    "chargeable-weight": { ko: ["실중량", "부피중량 산식", "운송사·서비스별 divisor", "최저운임 여부"], en: ["Actual weight", "Volumetric weight formula", "Carrier/service divisor", "Minimum charge"] },
    "customs-value": { ko: ["거래가격", "운임·보험료 포함 여부", "가산요소", "객관적이고 수량화 가능한 자료"], en: ["Transaction value", "Freight/insurance treatment", "Additions", "Objective and quantifiable data"] },
    "hs-code": { ko: ["6자리 HS와 국가별 세분류 구분", "재질·용도·기능", "수입국 tariff schedule", "필요 시 사전심사"], en: ["6-digit HS vs national extensions", "Material/use/function", "Import-country tariff schedule", "Advance ruling where needed"] },
    fob: { ko: ["해상·내수로 운송 적합성", "named port", "컨테이너 화물에는 FCA 검토", "위험 이전과 운임 계약 주체"], en: ["Sea/inland waterway fit", "Named port", "Consider FCA for containerized cargo", "Risk transfer and freight contracting party"] },
    fca: { ko: ["지정 장소가 seller premises인지 carrier terminal인지", "수출 통관 주체", "운송인 인도 증빙", "컨테이너/항공 적합성"], en: ["Whether named place is seller premises or carrier terminal", "Export clearance party", "Evidence of delivery to carrier", "Container/air freight fit"] },
    cif: { ko: ["해상·내수로 운송 적합성", "보험 최소 조건과 보상 범위", "위험 이전은 선적항", "목적항 비용 범위"], en: ["Sea/inland waterway fit", "Insurance level and coverage", "Risk transfers at shipment port", "Destination cost scope"] },
    cip: { ko: ["보험 수준", "운송 mode", "인도 지점과 목적지 구분", "통관 책임"], en: ["Insurance level", "Transport mode", "Delivery point vs named destination", "Clearance responsibility"] },
    "rules-of-origin": { ko: ["특혜/비특혜 구분", "FTA별 기준", "직접운송·증빙", "원산지증명서 필요 여부"], en: ["Preferential/non-preferential context", "FTA-specific rule", "Direct transport and evidence", "Certificate requirement"] },
    vgm: { ko: ["Method 1/2", "제출 마감", "shipper 책임", "선사·터미널 제출 경로"], en: ["Method 1/2", "Submission cut-off", "Shipper responsibility", "Carrier/terminal submission route"] },
    bl: { ko: ["Original/Sea Waybill/Telex 구분", "consignee/notify", "화물 인도 조건", "문서상 수량·품명 일치"], en: ["Original/Sea Waybill/Telex distinction", "Consignee/notify", "Cargo release requirement", "Quantity/description consistency"] },
    awb: { ko: ["MAWB/HAWB 구분", "항공사 prefix", "chargeable weight", "routing/ETA"], en: ["MAWB/HAWB distinction", "Airline prefix", "Chargeable weight", "Routing/ETA"] },
    "free-time": { ko: ["free time 일수", "calendar/working day", "demurrage/detention 별도 여부", "시작 기준"], en: ["Number of free days", "Calendar/working day", "Demurrage/detention split", "Start trigger"] },
    dunnage: { ko: ["화물 하중과 접촉면", "빈 공간과 이동 방향", "목재포장재 ISPM 15 적용 여부", "라싱·블로킹과 함께 필요한지"], en: ["Cargo load and contact surface", "Void space and movement direction", "Whether wood packaging rules such as ISPM 15 apply", "Whether lashing or blocking is also required"] },
    shoring: { ko: ["CTU 벽체·바닥 허용하중", "버팀재 방향과 접점", "화물 무게중심", "하역 중 제거 순서"], en: ["CTU wall and floor load limits", "Direction and contact points of supports", "Cargo center of gravity", "Removal sequence during unloading"] },
    blocking: { ko: ["앞뒤·좌우 이동 방향", "문쪽 door end 공간", "목재·쐐기 고정 상태", "하역 전 해체 가능성"], en: ["Forward/backward and side movement", "Door-end clearance", "Timber or wedge condition", "Safe removal before unloading"] },
    bracing: { ko: ["대각·횡방향 버팀 구조", "화물과 벽체 사이 간격", "못·볼트·띠장 고정 방식", "운송 중 진동 영향"], en: ["Diagonal or transverse brace structure", "Gap between cargo and boundary", "Nailing, bolting, or batten method", "Vibration impact during transport"] },
    chocking: { ko: ["굴림 가능 화물 여부", "쐐기 각도와 재질", "바퀴·원통 양방향 고정", "추가 라싱 필요 여부"], en: ["Whether cargo can roll", "Chock angle and material", "Two-way restraint for wheels or cylinders", "Need for additional lashings"] },
    cribbing: { ko: ["층별 받침 안정성", "하중 분산 면적", "목재 상태", "인양·하역 중 붕괴 위험"], en: ["Layer stability", "Load-spreading area", "Timber condition", "Collapse risk during lifting or unloading"] },
    swl: { ko: ["장비·슬링 표시값", "검사 유효성", "각도에 따른 하중 변화", "WLL과 문서상 표현 차이"], en: ["Marked value on equipment or sling", "Inspection validity", "Load change by angle", "Difference from WLL wording"] },
    wll: { ko: ["제조사 표시 한계", "슬링·체인·샤클별 한계", "인양 각도", "SWL과 혼용 여부"], en: ["Manufacturer-marked limit", "Limit by sling, chain, or shackle", "Lifting angle", "Whether confused with SWL"] },
    "twist-lock": { ko: ["corner casting 체결 위치", "잠금 표시 상태", "선박·차량·야드 장비별 사용 위치", "손상·이물질 여부"], en: ["Corner casting engagement point", "Locked indicator state", "Use on vessel, road equipment, or yard equipment", "Damage or obstruction"] },
    "corner-casting": { ko: ["상·하부 corner fitting 위치", "twist lock 결합부 손상", "컨테이너 구조 검사", "CSC plate 정보와 함께 확인"], en: ["Top and bottom corner fitting position", "Damage at twist-lock engagement point", "Container structural inspection", "Review with CSC plate information"] },
    "customs-transit": { ko: ["보세 상태 유지", "출발·도착 세관", "담보 또는 transit 보증", "최종 수입통관과 구분"], en: ["Maintaining customs-controlled status", "Departure and destination customs offices", "Guarantee or transit bond", "Distinction from final import clearance"] },
    "temporary-admission": { ko: ["재수출 예정 여부", "허용 기간", "관세·세금 담보", "판매·소비 금지 조건"], en: ["Intended re-export", "Allowed period", "Duty or tax guarantee", "Restrictions on sale or consumption"] },
    "inward-processing": { ko: ["가공 목적 수입", "관세 유예·감면 요건", "가공 후 재수출 또는 내수전환", "국가별 승인 절차"], en: ["Import for processing", "Duty suspension or relief requirements", "Re-export or release after processing", "Country-specific authorization"] },
    "outward-processing": { ko: ["국외 가공 목적 수출", "재수입 시 과세 기준", "동일성 확인 자료", "수리·가공 계약 증빙"], en: ["Export for processing abroad", "Taxation basis on re-import", "Evidence of identity", "Repair or processing contract evidence"] },
    rvc: { ko: ["FTA별 산식", "역내가치 포함 항목", "비원산지 재료 가치", "증빙 보관 기간"], en: ["FTA-specific formula", "Regional value components", "Value of non-originating materials", "Record-retention period"] },
    ctc: { ko: ["비원산지 재료 HS 변화", "CTH·CTSH 수준", "제외 조건", "품목별 원산지 기준"], en: ["HS change of non-originating materials", "CTH or CTSH level", "Exclusions", "Product-specific origin rule"] },
    "un-number": { ko: ["UN 번호와 PSN 일치", "hazard class", "packing group", "해상·항공 규정별 문서 표기"], en: ["UN number and PSN match", "Hazard class", "Packing group", "Document wording by sea or air rules"] },
    "proper-shipping-name": { ko: ["규정상 정식 명칭", "UN 번호와 병기", "기술명 추가 필요 여부", "SDS·DGD와 일치"], en: ["Regulatory proper name", "Use with UN number", "Need for technical name", "Consistency with SDS and DGD"] },
    "ispm-15": { ko: ["목재포장재 해당 여부", "열처리 또는 승인 처리", "HT mark 표시", "수입국 검역 요건"], en: ["Whether wood packaging material is involved", "Heat treatment or approved treatment", "HT mark presence", "Import-country phytosanitary requirements"] }
  };
  const deepIds = new Set([
    "incoterms","exw","fca","cip","ddp","fob","cif",
    "commercial-invoice","packing-list","certificate-of-origin","lc",
    "bl","mbl","hbl","sea-waybill","telex-release","fcl","lcl","vgm","transshipment","oog",
    "awb","mawb","hawb","chargeable-weight","volumetric-weight","air-cutoff","dangerous-goods",
    "hs-code","customs-duty","customs-value","country-of-origin","preferential-origin","rules-of-origin","tariff-classification","customs-declaration","importer-of-record","export-controls",
    "eta","etd","ata","atd","booking","cut-off","shipping-instruction","manifest","free-time","pod-proof","delivery-order",
    "demurrage","detention","storage","dd-charges","thc","surcharge","baf","caf","pss","gri",
    "dunnage","shoring","blocking","bracing","blocking-bracing","securing","chocking","cribbing","dunnage-bag",
    "web-lashing","direct-lashing","friction-lashing","lashing-point","rigging","spreader-beam","lift-point","center-of-gravity","swl","wll",
    "stowage-plan","bay","row","tier","bay-plan","twist-lock","corner-casting","csc-plate","maximum-gross-mass","pti","set-point",
    "project-cargo","heavy-lift","roro","lolo","lifting-plan","rigging-plan",
    "uld-build-up","uld-break-down","aircraft-pallet","air-cargo-container","pmc","ake",
    "customs-clearance","customs-release","customs-transit","inward-processing","outward-processing","temporary-admission","transaction-value",
    "wholly-obtained","substantial-transformation","rvc","ctc","cth","ctsh","cumulation",
    "imdg-code","un-number","proper-shipping-name","packing-group","dangerous-goods-declaration","seaworthy-packing","ispm-15","wood-packaging-material"
  ]);
  rows.forEach((item) => {
    item.depth = deepIds.has(item.id) ? "deep" : "standard";
    const checks = deepById[item.id];
    if (checks) {
      item.ko.practicalChecks = checks.ko;
      item.en.practicalChecks = checks.en;
    }
    if (item.depth === "deep" && !item.ko.practicalChecks.length) {
      item.ko.practicalChecks = ["문서상 표기", "계약·견적 조건", "운송사 또는 세관 기준", "관련 비용·마감 영향"];
      item.en.practicalChecks = ["Document wording", "Contract or quotation terms", "Carrier or customs basis", "Cost and cut-off impact"];
    }
    if (["demurrage","detention","storage","dd-charges"].includes(item.id)) {
      item.ko.comparisonNotes = ["Demurrage는 일반적으로 터미널 내 컨테이너 체류, Detention은 터미널 밖 장비 사용, Storage는 터미널·창고 보관료와 연결됩니다. 실제 명칭과 청구 기준은 carrier, terminal, jurisdiction, contract에 따라 달라질 수 있습니다."];
      item.en.comparisonNotes = ["Demurrage often relates to container time at a terminal, detention to equipment time outside the terminal, and storage to terminal or warehouse storage. Naming and billing rules vary by carrier, terminal, jurisdiction, and contract."];
    }
    if (["pod-port","pod-proof"].includes(item.id)) {
      item.ko.comparisonNotes = ["POD는 Port of Discharge 또는 Proof of Delivery로 쓰일 수 있습니다. 해상 스케줄 문맥인지 배송완료 문맥인지 먼저 확인하세요."];
      item.en.comparisonNotes = ["POD can mean Port of Discharge or Proof of Delivery. Check whether the context is an ocean route or a delivery completion record."];
    }
    if (["mbl","hbl","mawb","hawb"].includes(item.id)) {
      item.ko.comparisonNotes = ["Master 문서는 carrier 또는 airline 기준, House 문서는 forwarder/consolidator 기준에서 사용되는 경우가 많습니다."];
      item.en.comparisonNotes = ["Master documents usually sit at carrier or airline level, while House documents often sit at forwarder or consolidator level."];
    }
    if (["eta","ata","etd","atd"].includes(item.id)) {
      item.ko.comparisonNotes = ["E는 estimated, A는 actual입니다. ETA/ETD는 계획·예정, ATA/ATD는 실제 이벤트 확인에 사용합니다."];
      item.en.comparisonNotes = ["E means estimated and A means actual. ETA/ETD are planning estimates, while ATA/ATD are actual event timestamps."];
    }
    if (["dunnage","blocking","bracing","shoring","chocking","cribbing"].includes(item.id)) {
      item.ko.comparisonNotes = ["Dunnage는 받침·완충·빈 공간 보강 재료의 넓은 개념이고, Blocking/Bracing/Shoring/Chocking은 화물 이동을 막기 위한 구체적인 고정 방식입니다."];
      item.en.comparisonNotes = ["Dunnage is a broad support, cushioning, or void-fill material concept, while blocking, bracing, shoring, and chocking are specific restraint methods."];
    }
    if (["swl","wll"].includes(item.id)) {
      item.ko.comparisonNotes = ["SWL과 WLL은 모두 하중 한계 검토에 쓰이지만 장비 표시, 규격, 검사 문서에서 쓰는 표현이 다를 수 있으므로 제조사·검사 기준을 우선 확인합니다."];
      item.en.comparisonNotes = ["SWL and WLL both relate to load limits, but wording may vary by equipment marking, standard, and inspection document. Check manufacturer and inspection basis first."];
    }
    if (["bay","row","tier"].includes(item.id)) {
      item.ko.comparisonNotes = ["Bay는 선박 길이 방향 위치, Row는 좌우 열, Tier는 위아래 단을 나타내며 함께 조합되어 컨테이너 적재 위치를 읽습니다."];
      item.en.comparisonNotes = ["Bay indicates the longitudinal position, row the athwartship slot, and tier the vertical level. Together they identify a container stowage position."];
    }
    if (["uld","aircraft-pallet","air-cargo-container","pmc","ake"].includes(item.id)) {
      item.ko.comparisonNotes = ["ULD는 항공기 탑재 단위의 포괄 용어입니다. PMC는 pallet 계열, AKE/AKH는 container 계열로 이해하면 실무 구분이 쉽습니다."];
      item.en.comparisonNotes = ["ULD is the umbrella term for aircraft load units. PMC is commonly a pallet type, while AKE/AKH are container types."];
    }
    if (["customs-transit","customs-clearance","customs-release","temporary-admission","inward-processing","outward-processing"].includes(item.id)) {
      item.ko.comparisonNotes = ["Transit은 보세 상태의 이동, Clearance/Release는 수입·수출 신고와 반출 허가, Temporary Admission/Processing은 특정 목적과 조건이 붙은 절차입니다."];
      item.en.comparisonNotes = ["Transit is movement under customs control, clearance/release is declaration and permission to move goods, and temporary admission or processing procedures depend on specific purposes and conditions."];
    }
    if (["rvc","ctc","cth","ctsh"].includes(item.id)) {
      item.ko.comparisonNotes = ["RVC는 역내가치 비율 기준이고, CTC/CTH/CTSH는 HS 변화 기준입니다. 실제 적용은 FTA별 품목별 원산지 기준을 확인해야 합니다."];
      item.en.comparisonNotes = ["RVC is a regional value content rule, while CTC/CTH/CTSH are tariff-shift rules. Apply the product-specific rule in the relevant FTA."];
    }
    if (["un-number","proper-shipping-name","packing-group"].includes(item.id)) {
      item.ko.comparisonNotes = ["UN Number는 위험물 식별 번호, Proper Shipping Name은 규정상 운송품명, Packing Group은 위험도에 따른 포장 수준과 연결됩니다."];
      item.en.comparisonNotes = ["UN Number identifies the dangerous goods entry, Proper Shipping Name is the regulated transport name, and Packing Group relates to danger level and packaging requirements."];
    }
  });
  const visualGroups = [
    [["dunnage","shoring","blocking","bracing","blocking-bracing","securing","chocking","cribbing","wedge","dunnage-bag","direct-lashing","friction-lashing","web-lashing","lashing-point","center-of-gravity"], "cargo-securing-methods.svg", "컨테이너 내부에서 Dunnage, Blocking, Bracing, Lashing의 위치 관계를 보여주는 도식", "Diagram showing dunnage, blocking, bracing, and lashing positions inside a container.", "화물 고정 개념 설명용 도식입니다. 실제 작업은 화물 특성과 장비 기준을 별도로 확인해야 합니다.", "Conceptual cargo-securing diagram. Actual work depends on cargo, equipment, and applicable instructions."],
    [["twist-lock","corner-casting","csc-plate","container-floor","container-door","door-end","front-end","container-inspection","container-condition"], "container-corner-twist-lock.svg", "컨테이너 corner casting과 twist lock 결합 위치를 보여주는 도식", "Diagram showing how a twist lock engages a container corner casting.", "컨테이너 구조·고정 장치 이해를 위한 LOGILEE 도식입니다.", "LOGILEE diagram for understanding container structure and locking hardware."],
    [["bay","row","tier","bay-plan","stowage-plan"], "bay-row-tier.svg", "컨테이너선 적재 위치에서 Bay, Row, Tier의 차이를 보여주는 도식", "Diagram showing bay, row, and tier in a container stowage position.", "Bay plan에서 위치를 읽는 개념 설명용 도식입니다.", "Conceptual diagram for reading positions in a bay plan."],
    [["uld","uld-build-up","uld-break-down","aircraft-pallet","air-cargo-container","pmc","ake","akh","uld-contour"], "air-uld-types.svg", "항공화물 ULD에서 aircraft pallet와 air cargo container의 차이를 보여주는 도식", "Diagram comparing an aircraft pallet and an air cargo container as ULD examples.", "항공 ULD 형태를 이해하기 위한 단순화 도식입니다.", "Simplified diagram for understanding air cargo ULD forms."],
    [["maximum-gross-mass","gross-mass","tare-weight","payload","chargeable-weight","actual-weight","volumetric-weight","dimensional-weight"], "weight-concepts.svg", "Tare, Payload, Maximum Gross Mass와 운임중량 개념을 비교하는 도식", "Diagram comparing tare, payload, maximum gross mass, and chargeable weight concepts.", "중량 개념 비교용 도식이며 실제 산식과 한도는 운송사·장비 기준을 확인해야 합니다.", "Conceptual weight diagram. Confirm actual formulas and limits with carrier and equipment data."],
    [["customs-transit","temporary-admission","inward-processing","outward-processing","customs-release","customs-clearance","re-exportation","re-importation"], "customs-transit-workflow.svg", "출발 세관, transit 이동, 도착 세관과 release 흐름을 보여주는 도식", "Diagram showing departure customs, transit movement, destination customs, and release flow.", "통관 절차 개념을 단순화한 도식입니다. 국가·제도별 요건은 공식 기준을 확인해야 합니다.", "Simplified customs workflow diagram. Check official requirements for each country or procedure."]
  ];
  const byId = new Map(rows.map((item) => [item.id, item]));
  visualGroups.forEach(([ids, file, altKo, altEn, captionKo, captionEn]) => {
    ids.forEach((id) => {
      const item = byId.get(id);
      if (!item) return;
      item.visual = { type: "diagram", src: `../assets/dictionary/visuals/${file}`, altKo, altEn, captionKo, captionEn, credit: "LOGILEE", sourceUrl: null, license: null };
    });
  });
  window.LOGILEE_DICTIONARY = { reviewedAt, categories: C, stageLabels, sources: sourceMap, tools: toolMap, terms: rows };
})();
