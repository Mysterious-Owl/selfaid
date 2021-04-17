function load_news(data) {
    var news1 = document.getElementById("news1");
    var news2 = document.getElementById("news2");
    var news3 = document.getElementById("news3");
    news1.innerHTML = `<img src=\"${data.news1.img_irl}\"> <a href=\"${data.news1.link}\">${data.news1.text}</a>`;
    news2.innerHTML = `<img src=\"${data.news2.img_irl}\"> <a href=\"${data.news2.link}\">${data.news2.text}</a>`;
    news3.innerHTML = `<img src=\"${data.news3.img_irl}\"> <a href=\"${data.news3.link}\">${data.news3.text}</a>`;
}
/*
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    load_news(data);
  }
};
xmlhttp.open("GET", "json_demo.txt", true);
xmlhttp.send();
*/
var txt = '{"news1":{"img_irl":"John", "link":30, "text":"New York"}}';
var obj = JSON.parse(txt);
load_news(obj);
