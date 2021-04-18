function load_news(data) {
    var news1 = document.getElementById("news1");
    var news2 = document.getElementById("news2");
    var news3 = document.getElementById("news3");
    news1.innerHTML = `<img src=\"${data.news1.img_irl}\" class=\"card-img-top\"><div class=\"card-body\"><a href=\"${data.news1.link}\">${data.news1.text}</a></div>`;
    news2.innerHTML = `<img src=\"${data.news2.img_irl}\" class=\"card-img-top\"><div class=\"card-body\"><a href=\"${data.news2.link}\">${data.news2.text}</a></div>`;
    news3.innerHTML = `<img src=\"${data.news3.img_irl}\" class=\"card-img-top\"><div class=\"card-body\"><a href=\"${data.news3.link}\">${data.news3.text}</a></div>`;
}
function load_thought(data) {
    document.getElementById("thought").innerHTML = data.contents.quotes[0].quote;
}
function load_task(data) {
    var task1 = document.getElementById("task1");
    var task2 = document.getElementById("task2");
    var task3 = document.getElementById("task3");
    task1.innerHTML = `<h5 class=\"card-title\">${data.task1.head}</h5><p class=\"card-text\">${data.task1.text}</p>`;
    task2.innerHTML = `<h5 class=\"card-title\">${data.task2.head}</h5><p class=\"card-text\">${data.task2.text}</p>`;
    task3.innerHTML = `<h5 class=\"card-title\">${data.task3.head}</h5><p class=\"card-text\">${data.task3.text}</p>`;
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

var txt_news = '{"news1":{"img_irl":"https://www.goodnewsnetwork.org/wp-content/uploads/2021/04/meteor-shower-pexels-raman-deep-public-domain-324x160.jpg", "link":"https://www.goodnewsnetwork.org/lyrid-meteor-shower-april-2021-tips/", "text":"It’s Time to Watch the Biggest Meteor Shower of the Spring, Known for its Fireballs"}, "news2":{"img_irl":"https://www.goodnewsnetwork.org/wp-content/uploads/2021/04/meteor-shower-pexels-raman-deep-public-domain-324x160.jpg", "link":"https://www.goodnewsnetwork.org/lyrid-meteor-shower-april-2021-tips/", "text":"It’s Time to Watch the Biggest Meteor Shower of the Spring, Known for its Fireballs"}, "news3":{"img_irl":"https://www.goodnewsnetwork.org/wp-content/uploads/2021/04/meteor-shower-pexels-raman-deep-public-domain-324x160.jpg", "link":"https://www.goodnewsnetwork.org/lyrid-meteor-shower-april-2021-tips/", "text":"It’s Time to Watch the Biggest Meteor Shower of the Spring, Known for its Fireballs"}}';
var obj_news = JSON.parse(txt_news);
load_news(obj_news);

var txt_task = '{"task1":{"head":"Task #1", "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum tincidunt mi, vel scelerisque sem posuere ac. Donec vitae pharetra lectus, ut suscipit elit. Vestibulum euismod bibendum urna, a blandit lectus ultricies ut. Mauris ac velit"}, "task2":{"head":"Task #2", "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum tincidunt mi, vel scelerisque sem posuere ac. Donec vitae pharetra lectus, ut suscipit elit. Vestibulum euismod bibendum urna, a blandit lectus ultricies ut. Mauris ac velit"}, "task3":{"head":"Task #3", "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dictum tincidunt mi, vel scelerisque sem posuere ac. Donec vitae pharetra lectus, ut suscipit elit. Vestibulum euismod bibendum urna, a blandit lectus ultricies ut. Mauris ac velit"}}';
var obj_task = JSON.parse(txt_task);
load_task(obj_task);
