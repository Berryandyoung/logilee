import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const site = "https://www.logilee.com";

const posts = [
  {
    slug: "lcl-vs-fcl",
    date: "2026-08-14",
    publishedAt: "2026-08-14T07:28:22.554Z",
    category: "guides",
    readingTimeKo: "5분 읽기",
    readingTimeEn: "5 min read",
    image: "https://firebasestorage.googleapis.com/v0/b/logilee-cms.firebasestorage.app/o/media%2F2026%2Fmedia_871871bb-1a1a-4190-b340-829322f30f24-ChatGPT%20Image%202026%EB%85%84%208%EC%9B%94%2014%EC%9D%BC%20%EC%98%A4%ED%9B%84%2004_30_45.png?alt=media&token=1db5c262-68fd-46d5-a2ba-3279ceb6cc04",
    koTitle: "LCL과 FCL, 어느 시점부터 FCL이 유리할까?",
    enTitle: "LCL vs FCL: When Does a Full Container Start to Make Sense?",
    enDescription: "A practical comparison of LCL and FCL by CBM, ocean freight, destination charges, cargo characteristics, lead time, and total logistics cost.",
    enAlt: "Container freight image comparing LCL and FCL ocean shipping",
    enBody: `
<h2>Should you decide between LCL and FCL by CBM alone?</h2>
<p>As import volume gradually increases, many teams eventually ask the same question: would it be better to book a whole container?</p>
<p>That question often appears when an LCL quote feels higher than expected or when the cargo volume starts moving beyond about 10 CBM. But there is no single CBM number where FCL automatically becomes cheaper.</p>
<p>The break-even point changes by origin, destination, container type, ocean freight, CFS charges, local costs, cargo weight, and cargo volume. In practice, it is more accurate to compare the total cost to destination than to decide from CBM alone.</p>
<hr>
<h2>Start with the difference between LCL and FCL</h2>
<p><strong>LCL, or Less than Container Load,</strong> means several shippers share one container. It is commonly used when one shipper does not have enough cargo to fill a container.</p>
<p><strong>FCL, or Full Container Load,</strong> usually means one shipper uses one container under a container-level booking. FCL does not mean the container must be filled completely. Even if space remains inside, the shipment can still move as a full-container booking.</p>
<p>That is why some shipments switch from LCL to FCL before the container is physically full.</p>
<hr>
<h2>Why LCL works well for small shipments</h2>
<p>The main advantage of LCL is that the shipper pays for the space or chargeable weight needed, not for an entire container. For example, a 3 CBM shipment does not need to absorb the full cost of a 20-foot container.</p>
<p>That structure can be efficient for small cargo. However, it is risky to compare only the ocean freight line and conclude that LCL is cheaper. LCL requires consolidation at origin and deconsolidation at destination, so CFS handling and other local charges can become meaningful.</p>
<p>As cargo volume grows, the total LCL cost can rise faster than expected.</p>
<hr>
<h2>So from what CBM does FCL become better?</h2>
<p>This is the practical question, but the answer depends on the trade lane and timing. A 12 CBM shipment may still be cheaper as LCL on one route, while another route may make a 20-foot FCL quote more attractive.</p>
<p>Ocean freight changes by market timing, and LCL local cost structures vary by forwarder and location. When the cargo volume reaches an uncertain range, the most practical method is to request both LCL and FCL quotes for the same shipment and compare them on the same cost basis.</p>
<hr>
<h2>Example comparison structure</h2>
<p>Assume a 14 CBM shipment moving from China to Korea. The following is not an actual quotation, but a structure for comparison.</p>
<div class="article-table-wrap"><table>
  <thead><tr><th>Item</th><th>LCL</th><th>FCL 20FT</th></tr></thead>
  <tbody>
    <tr><td>Ocean freight</td><td>Based on CBM or W/M</td><td>Based on container</td></tr>
    <tr><td>Origin charges</td><td>Check consolidation and CFS charges</td><td>Check container-related charges</td></tr>
    <tr><td>Destination charges</td><td>Check deconsolidation and handling charges</td><td>Check container release and delivery-related charges</td></tr>
    <tr><td>Shipping form</td><td>Shared container space</td><td>Container-level booking</td></tr>
  </tbody>
</table></div>
<p>An LCL unit rate may look low, but when it is applied to the full 14 CBM and local charges are added, the gap can shrink. Conversely, if FCL freight is high at that moment, LCL may still be the economical option.</p>
<p>For that reason, compare the same scope, such as door-to-door or at least port-to-port plus the same post-arrival cost items, rather than looking only at ocean freight.</p>
<hr>
<h2>Check weight as well as CBM</h2>
<p>LCL pricing may use <strong>W/M, or Weight or Measurement</strong>. A cargo item with small volume but high weight can produce a different cost from what a CBM-only estimate suggests.</p>
<p>Products such as metal goods, minerals, and machinery parts can be much heavier than their volume implies. When asking for a quote, provide package count, dimensions, total CBM, gross weight, origin and destination, and cargo type.</p>
<hr>
<h2>Why consider FCL when prices are similar?</h2>
<p>If the total price difference is small, cost alone may not be enough. LCL adds cargo handling steps because different shippers' cargo must be consolidated and separated. For cargo sensitive to damage, contamination, or moisture, that difference can matter.</p>
<p>On the other hand, if the shipment is small and regular, waiting to build an FCL volume may create inventory or delivery disadvantages. The better decision is based on total logistics cost, including inventory and delivery timing.</p>
<hr>
<h2>Compare lead time too</h2>
<p>LCL may include time for cargo receiving, consolidation, and destination deconsolidation in addition to vessel sailing time. Do not compare only ETD and ETA. Check cargo cut-off and the point at which the cargo can actually be delivered after arrival.</p>
<p>For raw materials needed for production or cargo with a strict delivery promise, a few days can matter more than a small freight difference.</p>
<hr>
<h2>A practical checklist</h2>
<p><strong>1. Cargo volume</strong><br>Total CBM and gross weight.</p>
<p><strong>2. Actual logistics cost</strong><br>Ocean freight plus origin and destination charges.</p>
<p><strong>3. Cargo characteristics</strong><br>Sensitivity to damage, contamination, moisture, or mixed loading.</p>
<p><strong>4. Lead time</strong><br>Warehouse release timing and actual delivery availability.</p>
<p><strong>5. Inventory operation</strong><br>Whether waiting for FCL volume creates a larger cost.</p>
<hr>
<h2>When volume grows, request both quotes</h2>
<p>There is no absolute CBM rule for switching from LCL to FCL. FCL tends to become more attractive as volume grows, but the break-even point changes by route and freight market.</p>
<p>When the volume is in the gray zone, ask the forwarder for both LCL and FCL quotes for the same cargo, and compare the final cost scope consistently.</p>
<p>The important question is not how full the container is, but how much it costs to move this cargo safely by the required time.</p>
<hr>
<h2>Check together in LOGILEE</h2>
<p>If you know package dimensions, start with the LOGILEE <strong>CBM Calculator</strong>. For ocean freight and market movement, review <strong>Freight Market</strong>. If LCL, FCL, or container terms are unfamiliar, use the <strong>Dictionary</strong> as a reference.</p>
<p>After shipment, use <strong>Shipment Tracking</strong> and carrier tracking tools to follow the actual movement.</p>
<hr>
<h3>Reference and note</h3>
<p>LCL and FCL rates and charges can change by route, carrier, forwarder, cargo characteristics, shipping date, and local conditions. Confirm the latest quote and applicable terms before shipment.</p>
<p>This content is general trade and logistics information, not a freight quote, transport contract, or customs advice.</p>`
  },
  {
    slug: "rhine-low-water-logistics-impact",
    date: "2026-08-14",
    publishedAt: "2026-08-14T07:45:13.610Z",
    category: "market",
    readingTimeKo: "5분 읽기",
    readingTimeEn: "5 min read",
    image: "https://firebasestorage.googleapis.com/v0/b/logilee-cms.firebasestorage.app/o/media%2F2026%2Fmedia_a7a45aa1-96ed-492e-8c46-2c03d6347023-ChatGPT%20Image%202026%EB%85%84%208%EC%9B%94%2014%EC%9D%BC%20%EC%98%A4%ED%9B%84%2004_42_32.png?alt=media&token=d5517725-39ee-4897-8793-208c89c0d656",
    koTitle: "라인강 수위가 낮아지면 왜 유럽 물류비가 오를까?",
    enTitle: "Why Rhine Low Water Can Raise European Logistics Costs",
    enDescription: "A practical importer-focused explanation of how record-low Rhine water levels affect loading capacity, freight rates, rail and truck alternatives, and European supply chains.",
    enAlt: "Inland cargo vessel operating on the Rhine River during low water conditions",
    enBody: `
<h2>If a river level falls, why do logistics costs rise?</h2>
<p>When news reports say the Rhine River has reached very low water levels, the issue can look distant from day-to-day importing. But for European logistics, river conditions can directly affect freight capacity, inland transport cost, and lead time.</p>
<p>The Rhine is one of Europe's important inland transport routes. If water levels fall, vessels may not be able to load as much cargo as usual. That means more trips or alternative transport may be needed for the same volume.</p>
<hr>
<h2>Why the Rhine matters in European logistics</h2>
<p>The Rhine connects industrial areas, inland terminals, and major European gateways. Cargo that arrives at a seaport may continue inland by barge, rail, or truck, and the Rhine is part of that inland network.</p>
<p>For importers, the issue is not only whether a vessel can sail. It is whether the planned inland movement can happen at the expected capacity, cost, and schedule.</p>
<hr>
<h2>Why lower water means less cargo can be loaded</h2>
<p>When the water is shallow, a barge may need to reduce its draft by loading less cargo. The vessel still moves, but the amount carried per trip can fall.</p>
<p>If a barge normally moves a larger quantity and suddenly can carry only a reduced load, transport capacity tightens. That can increase the cost per ton or per shipment and make available space harder to secure.</p>
<hr>
<h2>The problem is not only barge freight</h2>
<p>When barge capacity becomes constrained, cargo may shift to rail or truck. Those alternatives are useful, but they also have limited capacity and different booking conditions.</p>
<p>If many shippers try to switch at the same time, rail and truck rates can rise as well. Lead time can also stretch because inland terminals, warehouses, and carriers need to rearrange their schedules.</p>
<hr>
<h2>Does this matter to Korean importers?</h2>
<p>It can matter if the shipment is connected to a European inland destination, supplier, warehouse, or distribution plan. A problem on the Rhine may not change the ocean vessel's arrival date, but it can affect what happens after arrival in Europe.</p>
<p>For example, delivery to an inland location may need a different mode, a changed routing, or additional waiting time. That can affect production schedules, sales commitments, or inventory planning.</p>
<hr>
<h2>What to check under FOB terms</h2>
<p>In an FOB transaction, the seller's responsibility normally ends at shipment according to the agreed term, but the buyer still needs to manage arrival-side logistics and total landed cost.</p>
<p>If inland transport in Europe is affected, confirm which part of the movement is included in your forwarder's quote and which cost changes may be passed through later.</p>
<hr>
<h2>Five things to check when this news appears</h2>
<p><strong>1. Arrival port and inland destination</strong><br>Check whether the cargo depends on a Rhine-connected inland route.</p>
<p><strong>2. Planned inland mode</strong><br>Confirm whether barge, rail, truck, or a combination is planned.</p>
<p><strong>3. Capacity and surcharge notices</strong><br>Ask whether low-water surcharges, reduced loading, or schedule changes apply.</p>
<p><strong>4. Lead time impact</strong><br>Check whether the delivery date after port arrival is still realistic.</p>
<p><strong>5. Alternative routing</strong><br>Compare the cost and timing of rail or truck if barge capacity is limited.</p>
<hr>
<h2>Sometimes lead time matters before freight cost</h2>
<p>A rate increase is visible in a quotation, but schedule instability can create a larger operational issue. If materials are needed for production or if customer delivery is fixed, a few days of inland delay may matter more than the freight difference.</p>
<p>In that case, the practical question is which route gives a more reliable delivery window, not only which route is cheapest.</p>
<hr>
<h2>Climate issues are now logistics variables</h2>
<p>Low water, heat waves, storms, and other weather-related issues can affect transport networks. They do not always stop logistics completely, but they can reduce capacity and create cost pressure.</p>
<p>For importers, this means market news should be connected back to actual shipment routes, delivery promises, and quote assumptions.</p>
<hr>
<h2>Practical point from the Rhine news</h2>
<p>When Rhine low-water news appears, do not stop at the headline. Check whether your shipment uses the affected route, which inland mode is planned, whether surcharges apply, and whether the delivery date still holds.</p>
<hr>
<h2>Check together in LOGILEE</h2>
<p>Use LOGILEE's port, country, freight market, currency, and trade data pages together when reviewing European logistics exposure. Keeping route context and market context together makes it easier to ask the right questions before booking or delivery.</p>
<hr>
<h3>Reference and note</h3>
<p><a href="https://www.newsis.com/view/NISX20260813_0003747551" rel="noopener noreferrer">Newsis - Rhine low-water report, Aug. 13, 2026</a></p>
<p>This content is general trade and logistics information. Actual cost, routing, surcharge, and lead time should be confirmed with the carrier, forwarder, or logistics provider handling the shipment.</p>`
  },
  {
    slug: "china-typhoon-port-delay-shipment-impact",
    date: "2026-08-14",
    publishedAt: "2026-08-14T07:51:20.040Z",
    category: "market",
    readingTimeKo: "7분 읽기",
    readingTimeEn: "7 min read",
    image: "https://firebasestorage.googleapis.com/v0/b/logilee-cms.firebasestorage.app/o/media%2F2026%2Fmedia_34da3b8f-7d59-4526-8381-7ac3e0298577-ChatGPT%20Image%202026%EB%85%84%208%EC%9B%94%2014%EC%9D%BC%20%EC%98%A4%ED%9B%84%2004_50_55.png?alt=media&token=31ad7c7c-ba4b-42f2-a3b0-3e11ba56f202",
    koTitle: "중국 항만이 태풍으로 멈추면 내 화물에는 어떤 일이 생길까?",
    enTitle: "What Happens to My Cargo When a Chinese Port Stops for a Typhoon?",
    enDescription: "A practical guide to how typhoon-related port closures in China can lead to vessel waiting, port omission, rollover, schedule changes, and ETA impact.",
    enAlt: "Chinese container port and cargo vessel affected by typhoon and severe weather",
    enBody: `
<h2>The port reopened. Why is my cargo still not moving?</h2>
<p>When a typhoon approaches a Chinese port, the first visible news is usually that terminal operations or vessel movements have stopped. But even after the port reopens, cargo may not immediately move as planned.</p>
<p>The reason is that vessel queues, terminal backlog, cargo cut-off changes, and sailing schedule changes do not disappear the moment the weather improves.</p>
<hr>
<h2>1. When a typhoon approaches, vessel and terminal work stop first</h2>
<p>Ports may suspend berth operations, yard work, gate operations, or vessel movements depending on weather and safety conditions. A vessel may wait outside the port, delay berthing, or adjust speed before arrival.</p>
<p>For importers and exporters, this can affect cargo receiving deadlines, planned loading, and the first ETD shown in tracking or schedule systems.</p>
<hr>
<h2>2. When the port reopens, waiting vessels are still there</h2>
<p>Reopening does not mean every delayed vessel can berth immediately. Vessels that waited during the closure need to be handled in sequence, and terminal operations may need time to return to normal.</p>
<p>This can create additional waiting even after the official port status changes back to open.</p>
<hr>
<h2>3. Vessel schedules do not end at one port</h2>
<p>A container vessel usually calls multiple ports. If one port is delayed, the vessel may need to adjust later port calls, berth windows, and sailing speed.</p>
<p>A small delay at one port can therefore affect the next port, transshipment connection, or final ETA.</p>
<hr>
<h2>4. Port omission can happen</h2>
<p>In some cases, a carrier may skip a port call to recover schedule reliability. This is often called <strong>port omission</strong>.</p>
<p>If port omission occurs, cargo may be rolled to another vessel, routed through another port, or wait for the next available sailing. The exact handling depends on the carrier and the shipment status.</p>
<hr>
<h2>5. A container already at the port is not always loaded</h2>
<p>Even if the container is physically at the terminal, it may miss the intended vessel if cut-off, yard status, terminal operation, or vessel plan changes. In that case, the shipment may be rolled to a later sailing.</p>
<p>This is why actual loading confirmation is more important than only checking whether the container entered the port.</p>
<hr>
<h2>6. If ETD changes, can you just add one day to ETA?</h2>
<p>Not always. A changed ETD can affect berth windows, sailing speed, transshipment connections, and later port calls. ETA may move by the same number of days, or it may change more depending on the service network.</p>
<p>When schedule disruption occurs, verify the updated ETA from the carrier or forwarder instead of estimating it from the first ETD change.</p>
<hr>
<h2>7. Short China-Korea routes can feel the impact strongly</h2>
<p>On short routes, a one- or two-day port disruption can be a large share of the total transit time. Importers may feel the impact quickly because there is less sailing time to absorb the delay.</p>
<p>That makes cut-off, actual loading, departure, and arrival updates especially important for short-haul cargo.</p>
<hr>
<h2>What to check when typhoon news appears</h2>
<p><strong>1. Port status</strong><br>Is the port or terminal open, restricted, or suspended?</p>
<p><strong>2. Cargo cut-off</strong><br>Has the receiving or document deadline changed?</p>
<p><strong>3. Vessel schedule</strong><br>Has the vessel's berthing, ETD, or voyage plan changed?</p>
<p><strong>4. Actual loading</strong><br>Was the container actually loaded on the intended vessel?</p>
<p><strong>5. Actual departure</strong><br>Has the vessel departed, not just completed loading?</p>
<p><strong>6. Port omission or vessel change</strong><br>Is the cargo still on the original plan?</p>
<p><strong>7. Updated ETA</strong><br>What arrival date is now confirmed by the carrier or forwarder?</p>
<hr>
<h2>Do not rely on a single number in tracking</h2>
<p>Tracking pages are useful, but one status line may not explain the full situation. During weather disruption, check the sequence: port status, cut-off, loading, vessel departure, and updated ETA.</p>
<p>If these points are not aligned, the shipment may still be at risk even when one screen looks normal.</p>
<hr>
<h2>If the shipment is already delayed</h2>
<p>First, confirm whether the container was loaded. Then check the revised ETD and ETA, whether transshipment is involved, and whether delivery commitments need to be updated.</p>
<p>For time-sensitive cargo, ask the forwarder or carrier about alternative sailings or routing options, but compare the cost and actual availability before changing the plan.</p>
<hr>
<h2>An open port does not mean the issue is over</h2>
<p>The practical endpoint is not the reopening notice. It is when your cargo has actually loaded, the vessel has departed, and the updated ETA is reliable enough for downstream planning.</p>
<hr>
<h2>Practical point from China typhoon news</h2>
<p>Typhoon disruption can affect more than the port closure period itself. It can create vessel waiting, rollover, port omission, changed cut-off, and revised ETA. Importers should check the operational chain rather than only the weather headline.</p>
<hr>
<h2>Check together in LOGILEE</h2>
<p>Use LOGILEE shipment tracking, port information, freight market references, and logistics dictionary pages together when reviewing a disrupted shipment. Moving from news to shipment-specific checkpoints makes the delay easier to manage.</p>
<hr>
<h3>Reference and note</h3>
<p>This content is general logistics information. Actual port status, vessel plan, loading result, and ETA should be confirmed with the carrier, terminal, or forwarder handling the shipment.</p>
<h3>Sources</h3>
<p>Carrier schedules, terminal notices, and logistics provider updates should be checked for the specific shipment and port.</p>`
  },
  {
    slug: "cbm-calculation",
    date: "2025-05-11",
    publishedAt: "2025-05-11T00:00:00.000Z",
    category: "Logistics",
    readingTimeKo: "2분 읽기",
    readingTimeEn: "2 min read",
    koTitle: "CBM 계산법 완전 정리",
    enTitle: "Complete Guide to CBM Calculation",
    koDescription: "물류에서 부피를 산정하는 기본 방식과 CBM 계산 예시를 정리한 기존 포스트입니다.",
    enDescription: "A legacy LOGILEE post explaining the basic logistics formula for calculating cargo volume in CBM.",
    koBody: `<h2>CBM 계산법 완전 정리</h2><p>CBM 계산은 물류에서 부피를 측정하는 중요한 기준입니다. CBM은 (가로 * 세로 * 높이) / 1,000,000 으로 계산합니다.</p><p>예시: 120cm x 80cm x 100cm = 0.96 CBM</p>`,
    enBody: `<h2>Complete Guide to CBM Calculation</h2><p>CBM calculation is an important way to measure cargo volume in logistics. CBM is calculated as (length * width * height) / 1,000,000 when the dimensions are measured in centimeters.</p><p>Example: 120cm x 80cm x 100cm = 0.96 CBM.</p>`
  },
  {
    slug: "hs-code-search",
    date: "2025-05-09",
    publishedAt: "2025-05-09T00:00:00.000Z",
    category: "Customs",
    readingTimeKo: "2분 읽기",
    readingTimeEn: "2 min read",
    koTitle: "HS CODE 쉽게 찾는 방법",
    enTitle: "How to Find an HS Code More Easily",
    koDescription: "상품 분류와 HS Code 검색을 위한 기본 확인 경로를 소개하는 기존 포스트입니다.",
    enDescription: "A legacy LOGILEE post introducing basic reference paths for product classification and HS Code search.",
    koBody: `<h2>HS CODE 쉽게 찾는 방법</h2><p>HS CODE는 물품 분류를 위한 국제 표준 코드입니다. 한국무역협회 또는 관세청 유니패스를 통해 검색할 수 있습니다.</p>`,
    enBody: `<h2>How to Find an HS Code More Easily</h2><p>HS Code is an international standard code for product classification. It can be searched through resources such as the Korea International Trade Association or Korea Customs Service UNI-PASS.</p>`
  },
  {
    slug: "trade-terms",
    date: "2025-05-08",
    publishedAt: "2025-05-08T00:00:00.000Z",
    category: "Trade",
    readingTimeKo: "2분 읽기",
    readingTimeEn: "2 min read",
    koTitle: "무역 실무자가 꼭 알아야 할 용어",
    enTitle: "Trade Terms Every Practitioner Should Know",
    koDescription: "FOB, CIF, EXW 등 무역 실무에서 자주 쓰이는 조건을 정리한 기존 포스트입니다.",
    enDescription: "A legacy LOGILEE post summarizing common trade terms such as FOB, CIF, and EXW.",
    koBody: `<h2>무역 실무자가 꼭 알아야 할 용어</h2><p>무역에서 자주 사용하는 용어로는 FOB, CIF, EXW 등이 있습니다. 인코텀즈 2020 기준으로 잘 정리해 두는 것이 좋습니다.</p>`,
    enBody: `<h2>Trade Terms Every Practitioner Should Know</h2><p>Common terms used in trade include FOB, CIF, and EXW. It is useful to organize and understand them based on Incoterms 2020.</p>`
  }
];

function ensureDir(file) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function imageOf(post) {
  return post.image || "assets/trade-hero-port.jpg";
}

function postPageImageSrc(image) {
  if (/^(?:https?:)?\/\//i.test(image) || image.startsWith("/")) return image;
  return `../../../${image}`;
}

function html(post, lang) {
  const isKo = lang === "ko";
  const title = isKo ? post.koTitle : post.enTitle;
  const description = isKo ? (post.koDescription || "") : post.enDescription;
  const body = isKo ? post.koBody : post.enBody;
  const readingTime = isKo ? post.readingTimeKo : post.readingTimeEn;
  const opposite = isKo ? "en" : "ko";
  const image = imageOf(post);
  const imageAlt = isKo ? (post.koAlt || `${title} thumbnail`) : (post.enAlt || `${title} thumbnail`);
  const imageSrc = postPageImageSrc(image);
  const currentUrl = `${site}/${lang}/posts/${post.slug}/`;
  const koUrl = `${site}/ko/posts/${post.slug}/`;
  const enUrl = `${site}/en/posts/${post.slug}/`;
  const home = isKo ? "../../" : "../../";
  const oppositeLabel = isKo ? "English" : "Korean";
  const activeLabel = isKo ? "Korean" : "English";
  const latest = isKo ? "최신 포스트" : "Latest Posts";
  const related = isKo ? "Related Resources" : "Related Resources";
  return `<!doctype html>
<html lang="${lang}">
  <head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8548711851361478" crossorigin="anonymous"></script>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)} | LOGILEE</title>
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="logilee:status" content="published">
    <meta name="logilee:published-at" content="${post.publishedAt}">
    <meta name="logilee:category" content="${escapeHtml(post.category)}">
    <meta name="logilee:reading-time" content="${escapeHtml(readingTime)}">
    <link rel="canonical" href="${currentUrl}">
    <link rel="alternate" hreflang="ko" href="${koUrl}">
    <link rel="alternate" hreflang="en" href="${enUrl}">
    <meta property="og:type" content="article">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${currentUrl}">
    <meta property="og:image" content="${escapeHtml(image)}">
    <meta property="article:published_time" content="${post.publishedAt}">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="stylesheet" href="../../../assets/logilee.css">
    <script defer src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
    <script defer src="../../../assets/posts-data.js"></script>
    <script defer src="../../../assets/logilee-app.js"></script>
    <script type="application/ld+json">
${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: lang,
    author: { "@type": "Organization", name: "LOGILEE" },
    publisher: { "@type": "Organization", name: "LOGILEE" },
    mainEntityOfPage: currentUrl,
    image
  }, null, 2)}
    </script>
  </head>
  <body data-page="post-detail" data-lang="${lang}">
    <div class="shell workspace-shell article-workspace-shell">
      <aside class="rail workspace-rail" aria-label="LOGILEE workspace menu">
        <a class="brand compact-brand" href="${home}"><strong>LOGILEE</strong><span>Global Trade Workspace</span></a>
        <nav class="workspace-nav">
          <a class="nav-home" href="${home}"><i data-lucide="home"></i> Home</a>
          <section><h2>Resources</h2><a href="../../dictionary.html"><i data-lucide="languages"></i>Dictionary</a><a href="../../learn.html"><i data-lucide="graduation-cap"></i>Learn</a><a class="is-active" href="../"><i data-lucide="newspaper"></i>${latest}</a></section>
        </nav>
      </aside>
      <main class="main">
        <header class="topbar workspace-topbar">
          <a class="mobile-logo" href="${home}">LOGILEE</a>
          <form class="header-search" action="../../search.html" method="get" role="search">
            <i data-lucide="search"></i><input name="q" autocomplete="off" placeholder="Search LOGILEE..." aria-label="Search LOGILEE"><button type="submit" aria-label="Search"><i data-lucide="arrow-right"></i></button>
          </form>
          <div class="top-actions"><div class="language-menu" data-language-menu><button class="icon-btn language-button" type="button" aria-expanded="false"><i data-lucide="globe-2"></i> Language <i data-lucide="chevron-down"></i></button><div class="language-dropdown"><span>Language</span><a class="${isKo ? "is-active" : ""}" href="${isKo ? "./" : `../../../ko/posts/${post.slug}/`}" data-lang-choice="ko">Korean</a><a class="${isKo ? "" : "is-active"}" href="${isKo ? `../../../en/posts/${post.slug}/` : "./"}" data-lang-choice="en">English</a></div></div><button class="menu-btn" data-menu-toggle aria-expanded="false" aria-label="Open menu"><i data-lucide="menu"></i></button></div>
        </header>
        <div class="page workspace-page article-page">
          <nav class="article-breadcrumb" aria-label="Breadcrumb"><a href="${home}">Home</a><span>/</span><a href="../">${latest}</a></nav>
          <div class="article-layout">
            <article class="article-detail">
              <header class="article-header">
                <p class="eyebrow">${escapeHtml(post.category)}</p>
                <h1>${escapeHtml(title)}</h1>
                <p class="article-summary">${escapeHtml(description)}</p>
                <div class="article-meta"><span>${post.date}</span><span>${escapeHtml(readingTime)}</span><a href="${currentUrl}">Share</a></div>
                <figure class="article-hero-figure"><img class="article-hero" src="${escapeHtml(imageSrc)}" alt="${escapeHtml(imageAlt)}" loading="eager"></figure>
              </header>
              <article class="post-content article-body">
${body}
              </article>
            </article>
            <aside class="article-aside" aria-label="Article resources">
              <section class="article-aside-card"><h2>${related}</h2><div class="article-resource-list"><a href="../../ports.html"><i data-lucide="anchor"></i><span>Ports &amp; Airports</span></a><a href="../../track.html"><i data-lucide="radar"></i><span>Shipment Tracking</span></a><a href="../../../hscode.html"><i data-lucide="barcode"></i><span>HS Code</span></a><a href="../../dictionary.html"><i data-lucide="languages"></i><span>Dictionary</span></a><a href="../../cbm.html"><i data-lucide="calculator"></i><span>CBM Calculator</span></a></div></section>
              <section class="article-aside-card"><h2>Language</h2><div class="article-resource-list"><a href="../../../${opposite}/posts/${post.slug}/"><i data-lucide="globe-2"></i><span>${oppositeLabel}</span></a><a href="./"><i data-lucide="check"></i><span>${activeLabel}</span></a></div></section>
              <div class="ad-slot ad-slot--rectangle article-ad"><span>Advertisement</span><small>Reserved ad placement</small></div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  </body>
</html>
`;
}

for (const post of posts) {
  for (const lang of ["ko", "en"]) {
    if (lang === "ko" && !post.koBody) continue;
    if (lang === "en" && !post.enBody) continue;
    const file = path.join(root, lang, "posts", post.slug, "index.html");
    if (fs.existsSync(file) && lang === "en" && ["commercial-invoice-common-mistakes", "fob-vs-cif"].includes(post.slug)) continue;
    ensureDir(file);
    fs.writeFileSync(file, html(post, lang), "utf8");
  }
}

for (const post of posts) {
  const koFile = path.join(root, "ko", "posts", post.slug, "index.html");
  const enFile = path.join(root, "en", "posts", post.slug, "index.html");
  for (const [file, lang] of [[koFile, "ko"], [enFile, "en"]]) {
    if (!fs.existsSync(file)) continue;
    let source = fs.readFileSync(file, "utf8");
    const koHref = `${site}/ko/posts/${post.slug}/`;
    const enHref = `${site}/en/posts/${post.slug}/`;
    if (!source.includes(`hreflang="en" href="${enHref}"`)) {
      source = source.replace(
        /<link rel="alternate" hreflang="ko" href="[^"]+">\s*/i,
        `<link rel="alternate" hreflang="ko" href="${koHref}">\n    <link rel="alternate" hreflang="en" href="${enHref}">\n    `
      );
    }
    source = source.replace(/href="\.\.\/\.\.\/\.\.\/en\/"\s+data-lang-choice="en"/g, `href="../../../en/posts/${post.slug}/" data-lang-choice="en"`);
    source = source.replace(/href="\.\.\/\.\.\/\.\.\/ko\/"\s+data-lang-choice="ko"/g, `href="../../../ko/posts/${post.slug}/" data-lang-choice="ko"`);
    fs.writeFileSync(file, source, "utf8");
  }
}

execFileSync("node", ["tools/sync-posts-data.mjs"], { stdio: "inherit" });

let data = fs.readFileSync(path.join(root, "assets", "posts-data.js"), "utf8");
const parsed = JSON.parse(data.replace(/^\s*window\.LOGILEE_POSTS\s*=\s*/, "").replace(/;\s*$/, ""));
const filtered = parsed.filter((post) => {
  if (post.slug === "global-sales") return false;
  return !String(post.path || "").startsWith("Blog - extra/");
}).map((post) => ({
  ...post,
  title: String(post.title || "").replace(/\s*\|\s*LOGILEE\s*$/i, "")
}));

const metadataOverrides = {
  "ko:china-typhoon-port-delay-shipment-impact": {
    title: "중국 항만이 태풍으로 멈추면 내 화물에는 어떤 일이 생길까?",
    imageAlt: "태풍과 악천후의 영향을 받는 중국 컨테이너 항만과 화물선"
  },
  "ko:rhine-low-water-logistics-impact": {
    title: "라인강 수위가 낮아지면 왜 유럽 물류비가 오를까?",
    imageAlt: "저수위로 수면이 낮아진 라인강을 운항하는 내륙 화물선"
  },
  "ko:lcl-vs-fcl": {
    title: "LCL과 FCL, 어느 시점부터 FCL이 유리할까?",
    imageAlt: "LCL과 FCL 해상운송 방식을 비교하는 컨테이너 화물 이미지"
  },
  "ko:commercial-invoice-common-mistakes": {
    title: "Commercial Invoice 작성 시 자주 발생하는 7가지 오류",
    imageAlt: "Commercial Invoice 작성 시 자주 발생하는 7가지 오류 thumbnail"
  },
  "ko:fob-vs-cif": {
    title: "FOB vs CIF, 수입자에게 어떤 조건이 더 유리할까?",
    imageAlt: "FOB와 CIF 수입 조건 비교를 설명하는 컨테이너선과 국제 무역항"
  }
};

for (const post of filtered) {
  const override = metadataOverrides[`${post.language}:${post.slug}`];
  if (override) Object.assign(post, override);
  const source = posts.find((item) => item.slug === post.slug);
  if (source && post.language === "en" && source.enAlt) post.imageAlt = source.enAlt;
}
fs.writeFileSync(path.join(root, "assets", "posts-data.js"), `window.LOGILEE_POSTS = ${JSON.stringify(filtered, null, 2)};\n`, "utf8");

const sitemapPath = path.join(root, "sitemap.xml");
let sitemap = fs.readFileSync(sitemapPath, "utf8").replace(/^\uFEFF/, "");
sitemap = sitemap.replace(/\s*<url><loc>https:\/\/www\.logilee\.com\/(?:ko|en)\/posts\/[^<]+<\/loc><lastmod>[^<]+<\/lastmod><\/url>/g, "");
const allPosts = filtered
  .filter((post) => post.path && /^(ko|en)\/posts\//.test(post.path))
  .sort((a, b) => a.path.localeCompare(b.path));
const postUrls = allPosts.map((post) => `  <url><loc>${site}/${post.path}</loc><lastmod>${post.date}</lastmod></url>`).join("\n");
sitemap = sitemap.replace(/\s*<\/urlset>\s*$/, `\n${postUrls}\n</urlset>\n`);
fs.writeFileSync(sitemapPath, sitemap, "utf8");
