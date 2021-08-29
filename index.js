var converter = new showdown.Converter();
fetch("index.md").then((res) => {
  res.text().then((text) => {
    var html = converter.makeHtml(text);
    var div = document.getElementById("body");
    div.innerHTML = html;
  });
});
