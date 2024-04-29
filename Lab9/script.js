var page = 1;

// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

async function getNews() {
  let url = `https://newsapi.org/v2/everything?q=pakistan&from=2024-03-29&sortBy=publishedAt&pageSize=20&page=${page}&apiKey=1f4a1aa5f426435fb2243e2e334a6e5d`;
  let response = await fetch(url);
  let data = await response.json();
  data.articles.forEach((article) => {
    let newsObj = document.createElement("div");
    newsObj.className = "w3-container w3-card w3-white w3-round w3-margin";
    newsObj.style.width = "100%";
    newsObj.innerHTML = `
      <h4>${article.title}</h4>
      <img src="${article.urlToImage}" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
      <span class="w3-right w3-opacity">${article.publishedAt}</span>
      <hr class="w3-clear">
      <p>${article.description}</p>
      <a href="${article.url}" target="_blank" class="w3-button w3-theme-d1 w3-margin-bottom">Read more</a>
    `;
    document.getElementById("news").appendChild(newsObj);
  });
  console.log(data);
}

getNews();
