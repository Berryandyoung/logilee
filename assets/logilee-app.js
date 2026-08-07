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
    { type: "Tool", title: "HS Code Lookup", summary: "품목분류와 HS Code 검색 페이지로 이동합니다.", url: "../hscode.html", keywords: "hs code hscode 품목분류 관세" },
    { type: "Guide", title: "Incoterms 2020", summary: "무역 조건별 비용과 위험 이전 기준을 확인합니다.", url: "../incoterms-2020.html", keywords: "incoterms fob cif fca 인코텀즈" },
    { type: "Dictionary", title: "FOB · Free On Board", summary: "수출자가 본선 적재까지 책임지는 해상 운송 조건입니다.", url: "dictionary.html#fob", keywords: "fob free on board" },
    { type: "Port", title: "Port of Busan", summary: "부산항 정보 페이지로 이동합니다.", url: "ports.html", keywords: "busan port krpus 부산항 항만" },
    { type: "Country", title: "Country Guides", summary: "국가별 무역과 물류 정보 페이지로 이동합니다.", url: "countries.html", keywords: "country guide vietnam 국가 베트남 수출" },
    { type: "Document", title: "Commercial Invoice", summary: "무역 문서 허브로 이동합니다.", url: "documents.html", keywords: "invoice commercial document" },
    { type: "News", title: "Latest News", summary: "LOGILEE 뉴스 페이지로 이동합니다.", url: "news.html", keywords: "news rss market logistics trade 뉴스" }
  ],
  en: [
    { type: "Tracking", title: "Container Tracking", summary: "Start a carrier or official lookup by container number.", url: "track.html", keywords: "container tracking container number" },
    { type: "Tracking", title: "B/L Tracking", summary: "Start a shipment lookup by Bill of Lading number.", url: "track.html", keywords: "bl bill of lading tracking" },
    { type: "Tracking", title: "Air Waybill Tracking", summary: "Open the air cargo tracking workflow.", url: "track.html", keywords: "awb air waybill air cargo tracking" },
    { type: "Tool", title: "CBM Calculator", summary: "Calculate cargo volume from dimensions, quantity, and weight.", url: "cbm.html", keywords: "cbm calculator carton volume" },
    { type: "Tool", title: "HS Code Lookup", summary: "Find HS codes and tariff classifications.", url: "../hscode-en.html", keywords: "hs code hscode tariff classification" },
    { type: "Guide", title: "Incoterms 2020", summary: "Compare cost and risk transfer by trade term.", url: "../incoterms-2020-en.html", keywords: "incoterms fob cif fca trade terms" },
    { type: "Dictionary", title: "FOB · Free On Board", summary: "A sea freight term where the seller is responsible until goods are loaded on board.", url: "dictionary.html#fob", keywords: "fob free on board" },
    { type: "Tool", title: "Shipment Tracking", summary: "Open official carrier tracking pages for courier, B/L, container, and air cargo.", url: "track.html", keywords: "tracking bl container dhl fedex ups" },
    { type: "Port", title: "Port of Busan", summary: "Open the port information page.", url: "ports.html", keywords: "busan port krpus korea" },
    { type: "Country", title: "Country Guides", summary: "Open country trade and logistics information.", url: "countries.html", keywords: "country guide vietnam export import" },
    { type: "Document", title: "Commercial Invoice", summary: "Open the document hub for trade paperwork.", url: "documents.html", keywords: "invoice commercial document" },
    { type: "News", title: "Latest News", summary: "Open LOGILEE news and insights.", url: "news.html", keywords: "news rss market logistics trade" }
  ]
};
const terms = {
  ko: [
    { id: "fob", term: "FOB", name: "Free On Board", category: "Trade", definition: "해상 운송에서 수출자가 화물을 본선에 적재할 때까지의 비용과 위험을 부담하는 조건입니다.", example: "부산항에서 FOB 조건으로 계약했다면 매수인은 본선 적재 이후의 해상 운임과 보험을 검토합니다.", related: ["FCA", "CFR", "CIF"] },
    { id: "bl", term: "B/L", name: "Bill of Lading", category: "Documentation", definition: "운송인이 화물 수령 또는 선적을 증명하기 위해 발행하는 운송 문서입니다.", example: "수입 통관과 화물 인도 과정에서 B/L 번호가 자주 필요합니다.", related: ["Sea Waybill", "Arrival Notice"] },
    { id: "chargeable-weight", term: "Chargeable Weight", name: "운임중량", category: "Air", definition: "실중량과 부피중량 중 운임 산정에 적용하는 중량입니다.", example: "항공화물은 가볍지만 부피가 크면 운임중량이 실제 중량보다 클 수 있습니다.", related: ["Dimensional Weight", "CBM"] },
    { id: "hs-code", term: "HS Code", name: "품목분류번호", category: "Customs", definition: "국제 무역 상품 분류에 사용하는 코드로 관세와 규제 확인의 출발점입니다.", example: "같은 제품도 재질과 용도에 따라 HS Code가 달라질 수 있습니다.", related: ["Customs Clearance", "Duty"] }
  ],
  en: [
    { id: "fob", term: "FOB", name: "Free On Board", category: "Trade", definition: "A sea freight term where the seller covers cost and risk until goods are loaded on board.", example: "Under FOB Busan, the buyer usually reviews ocean freight and insurance after loading.", related: ["FCA", "CFR", "CIF"] },
    { id: "bl", term: "B/L", name: "Bill of Lading", category: "Documentation", definition: "A transport document issued by a carrier to evidence cargo receipt or shipment.", example: "The B/L number is often used during customs clearance and cargo release.", related: ["Sea Waybill", "Arrival Notice"] },
    { id: "chargeable-weight", term: "Chargeable Weight", name: "Chargeable Weight", category: "Air", definition: "The weight used to rate freight, usually the greater of actual and dimensional weight.", example: "Light but bulky air cargo can be charged by dimensional weight.", related: ["Dimensional Weight", "CBM"] },
    { id: "hs-code", term: "HS Code", name: "Harmonized System Code", category: "Customs", definition: "A product classification code used as a starting point for customs duty and compliance checks.", example: "Material and use can change the HS classification for similar products.", related: ["Customs Clearance", "Duty"] }
  ]
};
function currentLang() {
  return document.documentElement.lang && document.documentElement.lang.startsWith("ko") ? "ko" : "en";
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
  const upgrade = rail.querySelector(".upgrade-card");

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

  const footer = document.createElement("div");
  footer.className = "sidebar-footer";
  footer.innerHTML = `
    <div class="sidebar-version">
      <strong>LOGILEE v1.0.0</strong>
      <span>짤 2025 BerryYoung Co., Ltd.</span>
    </div>
  `;
  rail.appendChild(footer);

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

function resultMarkup(item) {
  return `
    <a class="header-result-item" href="${item.url}">
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
        ? matches.map(resultMarkup).join("")
        : `<div class="header-result-empty">${lang === "ko" ? "No results found." : "No results found."}</div>`;
      form.classList.add("has-results");
    };

    input.addEventListener("input", render);
    input.addEventListener("focus", render);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const q = input.value.trim();
      if (q) location.href = `search.html?q=${encodeURIComponent(q)}`;
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

async function loadHomeMarket() {
  const snapshot = document.querySelector("[data-market-snapshot]");
  if (!snapshot) return;
  const status = document.querySelector("[data-market-status]");
  const updated = document.querySelector("[data-market-updated]");
  const unavailable = "Market data unavailable";

  try {
    const response = await fetch("https://api.frankfurter.app/latest?from=USD&to=KRW,EUR,JPY,CNY", { cache: "no-store" });
    if (!response.ok) throw new Error(`FX API ${response.status}`);
    const data = await response.json();
    const rates = data.rates || {};
    const rows = [
      ["USD/KRW", rates.KRW, 2],
      ["USD/CNY", rates.CNY, 4],
      ["USD/JPY", rates.JPY, 2],
      ["EUR/USD", Number.isFinite(rates.EUR) && rates.EUR > 0 ? 1 / rates.EUR : null, 4]
    ].filter((row) => Number.isFinite(row[1]));

    if (!rows.length) throw new Error("No FX rates returned");
    snapshot.innerHTML = `
      <div class="market-section-label">FX Market</div>
      ${rows.map(([label, value, digits]) => `
        <div>
          <strong>${label}</strong>
          <span>${formatRate(value, digits)}</span>
        </div>
      `).join("")}
    `;
    status?.classList.remove("soon");
    if (status) status.textContent = "FX Market";
    if (updated) updated.textContent = `Last updated · ${formatKstTime(new Date())} KST`;
  } catch (error) {
    console.warn("Market Snapshot unavailable:", error);
    snapshot.innerHTML = `<div class="market-section-label">FX Market</div><div><strong>Exchange Rate</strong><span>${unavailable}</span></div>`;
    status?.classList.add("soon");
    if (status) status.textContent = "Unavailable";
    if (updated) updated.textContent = unavailable;
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
    const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=${lang === "ko" ? "ko" : "en"}&gl=${lang === "ko" ? "KR" : "US"}&ceid=${lang === "ko" ? "KR:ko" : "US:en"}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
    try {
      const response = await fetch(apiUrl, { cache: "no-store" });
      if (!response.ok) throw new Error(`News API ${response.status}`);
      const data = await response.json();
      const items = Array.isArray(data.items) ? data.items.slice(0, 6) : [];
      target.innerHTML = items.length ? items.map((item) => {
        const parsed = splitNewsTitle(item.title);
        const time = formatNewsTime(item.pubDate, lang);
        return `
          <a class="news-item compact-news-item" href="${item.link}" target="_blank" rel="noopener">
            <div>
              <strong>${parsed.headline}</strong>
              <small>${[parsed.source, time].filter(Boolean).join(" · ")}</small>
            </div>
          </a>
        `;
      }).join("") : `<div class="data-empty">${labels.noItems}</div>`;
    } catch (error) {
      console.warn("Homepage news unavailable:", error);
      target.innerHTML = `<div class="data-empty">${labels.loadingFailed}</div>`;
    }
  }
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
      <p class="muted">${lang === "ko" ? "Updated" : "Updated"}: 2026-07-26 · ${lang === "ko" ? "참고 정보입니다. 계약 확정 전 공식 기준을 확인하세요." : "For reference only. Confirm official standards before finalizing contracts."}</p>
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
  enhanceSidebar();
  refreshIcons();
  wireMenu();
  wireSidebarCollapse();
  setupLanguageChoice();
  setupLanguageMenu();
  wireHeaderSearch();
  wireSearch();
  loadHomeMarket();
  loadHomeNews();
  wireCbm();
  wireTracking();
  wireDictionary();
});
