var converter = new showdown.Converter();

document.addEventListener(
  "DOMContentLoaded",
  () => {
    fetchPage("index.md");
    setLinks();
  },
  false
);

function setLinks() {
  var links = document.getElementById("links");
  links.innerHTML = "";
  for (const link of documents) {
    links.innerHTML += `<button onclick="fetchPage('markdowns/${link}')">${link}</button>`;
  }
  links.innerHTML += `<button onclick="fetchPage('index.md')">Home</button>`;
}

function fetchPage(pageMd) {
  fetch(pageMd).then((res) => {
    res.text().then((text) => {
      var html = converter.makeHtml(text);
      var div = document.getElementById("body");
      div.innerHTML = html;
    });
  });
}
