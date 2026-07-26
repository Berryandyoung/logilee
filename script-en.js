let currentQuery = "logistics";
let currentIndex = 0;

function loadNews(reset = true) {
    const newsList = document.getElementById("news-list");
    const rssBase = "https://news.google.com/rss/search";
    const query = encodeURIComponent(currentQuery);
    const rssUrl = `${rssBase}?q=${query}&hl=en&gl=US&ceid=US:en`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            if (reset) {
                newsList.innerHTML = "";
                currentIndex = 0;
            }

            const itemsToShow = 5;
            const nextItems = data.items.slice(currentIndex, currentIndex + itemsToShow);

            nextItems.forEach(article => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = article.link;
                a.textContent = article.title;
                a.target = "_blank";

                const dateSpan = document.createElement("span");
                const pubDate = new Date(article.pubDate);
                const formattedDate = pubDate.toISOString().split('T')[0];
                dateSpan.textContent = ` (${formattedDate})`;
                dateSpan.style.color = "gray";
                dateSpan.style.fontSize = "0.9rem";
                dateSpan.style.marginLeft = "0.5rem";

                li.appendChild(a);
                li.appendChild(dateSpan);
                newsList.appendChild(li);
            });

            currentIndex += itemsToShow;

            const loadMoreBtn = document.getElementById("load-more");
            if (currentIndex >= data.items.length) {
                loadMoreBtn.style.display = "none";
            } else {
                loadMoreBtn.style.display = "block";
            }
        })
        .catch(err => {
            console.error("Failed to load news:", err);
            newsList.innerHTML = "<li>Failed to load news articles.</li>";
        });
}

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("news-search");
    const searchButton = document.getElementById("search-button");

    if (searchInput && searchButton) {
        searchButton.addEventListener("click", () => {
            currentQuery = searchInput.value || "logistics";
            loadNews();
        });

        searchInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                currentQuery = searchInput.value || "logistics";
                loadNews();
            }
        });
    }

    const loadMoreButton = document.getElementById("load-more");
    if (loadMoreButton) {
        loadMoreButton.addEventListener("click", () => {
            loadNews(false);
        });
    }

    loadNews();

    // ✅ Weather & FX Widget Toggle
    const toggleBtn = document.getElementById("toggle-widget");
    const widget = document.getElementById("weather-exchange-widget");

    if (toggleBtn && widget) {
        toggleBtn.addEventListener("click", () => {
            const isHidden = widget.style.display === "none" || widget.style.display === "";
            widget.style.display = isHidden ? "block" : "none";
        });
    }

});



const weatherCities = ["New York", "Los Angeles", "Chicago", "Dallas", "Miami"];

function fetchWeather() {
    const content = document.getElementById("weather-content");
    if (!content) return;
    content.innerHTML = weatherCities.map(city => `
        <div style="margin: 8px 0;">
            <strong>${city}</strong><br>
            Weather API not configured
        </div>
    `).join("");
}


function fetchExchangeRates() {
    const exchangeDiv = document.getElementById("exchange-rates");
    if (!exchangeDiv) return;
    exchangeDiv.innerHTML = `
        <div class="rate-item"><strong>USD → KRW</strong><span>API not configured</span></div>
        <div class="rate-item"><strong>USD → EUR</strong><span>API not configured</span></div>
        <div class="rate-item"><strong>USD → JPY</strong><span>API not configured</span></div>
    `;
}






fetchWeather();
fetchExchangeRates();
setInterval(fetchWeather, 60 * 60 * 1000);  // Weather 업데이트 (1시간)
setInterval(fetchExchangeRates, 60 * 60 * 1000);  // 환율 업데이트 (1시간)
