(() => {
  const reviewedAt = "2026-09-06";
  const C = {
    trade: "Trade",
    ocean: "Ocean",
    air: "Air",
    customs: "Customs & Compliance",
    operations: "Shipping Operations",
    charges: "Charges"
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
    }
  };
  const categorySources = { trade: ["ICC", "LOGILEE"], ocean: ["IMO_FAL", "FIATA"], air: ["IATA_AIR"], customs: ["WCO_STANDARDS", "WTO_TFA"], operations: ["IMO_FAL", "FIATA"], charges: ["FMC_DD", "FIATA"] };
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
    ["lashings","Lashing","Cargo Lashing","고박",["securing"],["stowage","oog"],["ports"],["preshipment"]],
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
    "free-time": { ko: ["free time 일수", "calendar/working day", "demurrage/detention 별도 여부", "시작 기준"], en: ["Number of free days", "Calendar/working day", "Demurrage/detention split", "Start trigger"] }
  };
  const deepIds = new Set([
    "incoterms","exw","fca","cip","ddp","fob","cif",
    "commercial-invoice","packing-list","certificate-of-origin","lc",
    "bl","mbl","hbl","sea-waybill","telex-release","fcl","lcl","vgm","transshipment","oog",
    "awb","mawb","hawb","chargeable-weight","volumetric-weight","air-cutoff","dangerous-goods",
    "hs-code","customs-duty","customs-value","country-of-origin","preferential-origin","rules-of-origin","tariff-classification","customs-declaration","importer-of-record","export-controls",
    "eta","etd","ata","atd","booking","cut-off","shipping-instruction","manifest","free-time","pod-proof","delivery-order",
    "demurrage","detention","storage","dd-charges","thc","surcharge","baf","caf","pss","gri"
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
  });
  window.LOGILEE_DICTIONARY = { reviewedAt, categories: C, stageLabels, sources: sourceMap, tools: toolMap, terms: rows };
})();
