/*
function load_news(data) {
    var news1 = document.getElementById("news1");
    var news2 = document.getElementById("news2");
//    var news3 = document.getElementById("news3");
    news1.innerHTML = `<img src=\"${data.news1.img_irl}\" class=\"card-img-top\"><div class=\"card-body\"><a href=\"${data.news1.link}\">${data.news1.text}</a></div>`;
    news2.innerHTML = `<img src=\"${data.news2.img_irl}\" class=\"card-img-top\"><div class=\"card-body\"><a href=\"${data.news2.link}\">${data.news2.text}</a></div>`;
//    news3.innerHTML = `<img src=\"${data.news3.img_irl}\" class=\"card-img-top\"><div class=\"card-body\"><a href=\"${data.news3.link}\">${data.news3.text}</a></div>`;
}
*/
function load_thought(data) {
    document.getElementById("thought").innerHTML = data.contents.quotes[0].quote;
}
function load_task(data) {
    var task1 = document.getElementById("task1");
    var task2 = document.getElementById("task2");
    var task3 = document.getElementById("task3");
    task1.innerHTML = `<h5 class=\"card-title\"><strong>${data.task1.head}</strong></h5><p class=\"card-text\">${data.task1.text}</p>`;
    task2.innerHTML = `<h5 class=\"card-title\"><strong>${data.task2.head}</strong></h5><p class=\"card-text\">${data.task2.text}</p>`;
    task3.innerHTML = `<h5 class=\"card-title\"><strong>${data.task3.head}</strong></h5><p class=\"card-text\">${data.task3.text}</p>`;
}
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    load_thought(data);
  }
};
xmlhttp.open("GET", "https://quotes.rest/qod?category=inspire&language=en", true);
xmlhttp.send();

/*
var txt_news = '{"news1":{"img_irl":"https://www.goodnewsnetwork.org/wp-content/uploads/2021/04/meteor-shower-pexels-raman-deep-public-domain-324x160.jpg", "link":"https://www.goodnewsnetwork.org/lyrid-meteor-shower-april-2021-tips/", "text":"It’s Time to Watch the Biggest Meteor Shower of the Spring, Known for its Fireballs"}, "news2":{"img_irl":"https://www.goodnewsnetwork.org/wp-content/uploads/2021/04/meteor-shower-pexels-raman-deep-public-domain-324x160.jpg", "link":"https://www.goodnewsnetwork.org/lyrid-meteor-shower-april-2021-tips/", "text":"It’s Time to Watch the Biggest Meteor Shower of the Spring, Known for its Fireballs"}}';
// "news3":{"img_irl":"https://www.goodnewsnetwork.org/wp-content/uploads/2021/04/meteor-shower-pexels-raman-deep-public-domain-324x160.jpg", "link":"https://www.goodnewsnetwork.org/lyrid-meteor-shower-april-2021-tips/", "text":"It’s Time to Watch the Biggest Meteor Shower of the Spring, Known for its Fireballs"}}';
var obj_news = JSON.parse(txt_news);
load_news(obj_news);
*/

var txt_task = '{"task1":{"head":"Fight with Acute Stress", "text":"1. Take a deep breath and slowly release it, perform this for 10 min.<br>2. Style yourself different than other days.<br>3. Take a quick, 5 min meditation.<br>3. Frame your day early in the morning.<br>4. Do simple exercises while sitting."}, "task2":{"head":"Fight with Episodic Acute Stress", "text":"1. Let music aid you.<br>Indulge yourself in your favourite hobby.<br>2. Try to write down the ideal lifestyle, It will motivate you to live like that.<br>3. Build your supportive relationship with family, friends or employer.<br>4. Follow Task 1 "}, "task3":{"head":"Fight with Chronic Stress", "text":"1. Make exercises your best friend.<br>2. Cultivate supportive Relationship.<br>3. Fuel your body with a healthy diet.<br>4. Take some time off from daily life.<br>Follow Task 2 and 1."}}';
var obj_task = JSON.parse(txt_task);
load_task(obj_task);
