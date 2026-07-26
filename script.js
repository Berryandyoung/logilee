
let currentQuery = "물류";
let currentIndex = 0;

function loadNews(reset = true) {
    const newsList = document.getElementById("news-list");
    const rssBase = "https://news.google.com/rss/search";
    const query = encodeURIComponent(currentQuery);
    const rssUrl = `${rssBase}?q=${query}&hl=ko&gl=KR&ceid=KR:ko`;
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
            console.error("뉴스 로딩 실패:", err);
            newsList.innerHTML = "<li>뉴스를 불러오는 데 실패했습니다.</li>";
        });
}

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("news-search");
    const searchButton = document.getElementById("search-button");

    if (searchInput && searchButton) {
        searchButton.addEventListener("click", () => {
            currentQuery = searchInput.value || "물류";
            loadNews();
        });

        searchInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                currentQuery = searchInput.value || "물류";
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

    loadNews(); // 초기 로드
});
