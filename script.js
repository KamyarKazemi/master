const news = [
    { id: 1, imgSrc: "https://s6.uupload.ir/files/download_(2)_zjg2.png", title: "News 1", caption: "Caption 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi, nam illum illo, cupiditate ab accusantium ut suscipit earum neque voluptas laborum dolor amet molestias odio iure, optio id autem provident! Reprehenderit praesentium non neque incidunt magnam corrupti provident, inventore debitis. Totam velit, cumque illum exercitationem at soluta iste dolore ipsa consequatur aliquid, asperiores culpa assumenda iusto praesentium sit earum." },
    { id: 2, imgSrc: "https://s6.uupload.ir/files/download_(2)_zjg2.png", title: "News 2", caption: "Caption 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi, nam illum illo, cupiditate ab accusantium ut suscipit earum neque voluptas laborum dolor amet molestias odio iure, optio id autem provident! Reprehenderit praesentium non neque incidunt magnam corrupti provident, inventore debitis. Totam velit, cumque illum exercitationem at soluta iste dolore ipsa consequatur aliquid, asperiores culpa assumenda iusto praesentium sit earum." },
    { id: 3, imgSrc: "https://s6.uupload.ir/files/download_(2)_zjg2.png", title: "News 3", caption: "Caption 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi, nam illum illo, cupiditate ab accusantium ut suscipit earum neque voluptas laborum dolor amet molestias odio iure, optio id autem provident! Reprehenderit praesentium non neque incidunt magnam corrupti provident, inventore debitis. Totam velit, cumque illum exercitationem at soluta iste dolore ipsa consequatur aliquid, asperiores culpa assumenda iusto praesentium sit earum." },
];

function renderNewsItems() {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
        mainContent.innerHTML = "";

        news.forEach((item) => {
            const newsItem = document.createElement("div");
            newsItem.innerHTML = `
                <div class="MainContainer">
                    <img src="${item.imgSrc}" alt="k" />
                    <h3>${item.title}</h3>
                    <h4>${item.caption}</h4>
                </div>
            `;
            mainContent.appendChild(newsItem);
        });
    }
}

function renderItem() {
    const itemContent = document.getElementById("item-content");
    if (itemContent) {
        const urlParams = new URLSearchParams(window.location.search);
        const itemId = urlParams.get('id');
        const item = news.find(newsItem => newsItem.id === parseInt(itemId));

        if (item) {
            itemContent.innerHTML = `
                <div class="item-container">
                    <img src="${item.imgSrc}" alt="${item.title}" />
                    <h2>${item.title}</h2>
                    <h3>${item.caption}</h3>
                    <p>${item.description}</p>
                </div>
            `;
        } else {
            itemContent.innerHTML = `<p>Item not found.</p>`;
        }
    }
}

if (window.location.pathname.includes("item.html")) {
    renderItem();
} else {
    renderNewsItems();
}

function setDarkMode() {
    if (document.body.className === "light") {
        document.body.className = "dark";
    } else {
        document.body.className = "light";
    }
}