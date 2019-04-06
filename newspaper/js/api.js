
var data = 0;
var indexNews;
function Request(url,category) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true,);

    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            var errStatus = xhr.status;
            var errText = xhr.statusText;
            console.log(errStatus + ": " + errText);
        } else {
            data = JSON.parse(xhr.responseText);
            indexNews = xhr.responseText;
            innerNews(data,category);
        }
    };
}


function innerNews(data,categori) {
    var imgLink,
        image,
        postCategory,
        postTitle,
        postTitleH6,
        postAuthor,
        postExcerp,
        postMeta,
        postDate,
        postCategoryValue;

    if(categori === 'business') {
            imgLink = document.querySelectorAll('.business .post-thumb a'),
            image = document.querySelectorAll('.business .post-thumb img'),
            postCategory = document.querySelectorAll('.business .post-catagory'),
            postTitle = document.querySelectorAll('.business .post-title'),
            postTitleH6 = document.querySelectorAll('.business .post-title h6'),
            postAuthor = document.querySelectorAll('.business .post-author a'),
            postExcerp = document.querySelectorAll('.business .post-excerp'),
            postMeta = document.querySelectorAll('.business .post-meta'),
            postDateFirst = document.querySelectorAll('.business .post-date span:first-child');
            postDateLast = document.querySelectorAll('.business .post-date span:last-child');
            postCategoryValue = 'Світ';
    }
    else if(categori === 'entertainment') {
            imgLink = document.querySelectorAll('.entertainment .post-thumb a'),
            image = document.querySelectorAll('.entertainment .post-thumb img'),
            postCategory = document.querySelectorAll('.entertainment .post-catagory'),
            postTitle = document.querySelectorAll('.entertainment .post-title'),
            postTitleH6 = document.querySelectorAll('.entertainment .post-title h6'),
            postAuthor = document.querySelectorAll('.entertainment .post-author a'),
            postExcerp = document.querySelectorAll('.entertainment .post-excerp'),
            postMeta = document.querySelectorAll('.entertainment .post-meta'),
            postDateFirst = document.querySelectorAll('.entertainment .post-date span:first-child');
            postDateLast = document.querySelectorAll('.entertainment .post-date span:last-child');
            postCategoryValue = 'Шоу-бізнес';
    }
    else if(categori === 'health'){
            imgLink = document.querySelectorAll('.health .post-thumb a'),
            image = document.querySelectorAll('.health .post-thumb img'),
            postCategory = document.querySelectorAll('.health .post-catagory'),
            postTitle = document.querySelectorAll('.health .post-title'),
            postTitleH6 = document.querySelectorAll('.health .post-title h6'),
            postAuthor = document.querySelectorAll('.health .post-author a'),
            postExcerp = document.querySelectorAll('.health .post-excerp'),
            postMeta = document.querySelectorAll('.health .post-meta'),
            postDateFirst = document.querySelectorAll('.health .post-meta .post-date span:first-child');
            postDateLast = document.querySelectorAll('.health .post-meta .post-date span:last-child');
            postCategoryValue = 'Здоровя';
    }
    else if(categori === 'science'){
            imgLink = document.querySelectorAll('.science .post-thumb a'),
            image = document.querySelectorAll('.science .post-thumb img'),
            postCategory = document.querySelectorAll('.science .post-catagory'),
            postTitle = document.querySelectorAll('.science .post-title'),
            postTitleH6 = document.querySelectorAll('.science .post-title h6'),
            postAuthor = document.querySelectorAll('.science .post-author a'),
            postExcerp = document.querySelectorAll('.science .post-excerp'),
            postMeta = document.querySelectorAll('.science .post-meta'),
            postDateFirst = document.querySelectorAll('.science .post-date span:first-child');
            postDateLast = document.querySelectorAll('.science .post-date span:last-child');
            postCategoryValue = 'Наука';
    }
    else if(categori === 'sports'){
            imgLink = document.querySelectorAll('.sports .post-thumb a'),
            image = document.querySelectorAll('.sports .post-thumb img'),
            postCategory = document.querySelectorAll('.sports .post-catagory'),
            postTitle = document.querySelectorAll('.sports .post-title'),
            postTitleH6 = document.querySelectorAll('.sports .post-title h6'),
            postAuthor = document.querySelectorAll('.sports .post-author a'),
            postExcerp = document.querySelectorAll('.sports .post-excerp'),
            postMeta = document.querySelectorAll('.sports .post-meta'),
            postDateFirst = document.querySelectorAll('.sports .post-date span:first-child');
            postDateLast = document.querySelectorAll('.sports .post-date span:last-child');
            postCategoryValue = 'Спорт';
    }
    else if(categori === 'technology'){
            imgLink = document.querySelectorAll('.technology .post-thumb a'),
            image = document.querySelectorAll('.technology .post-thumb img'),
            postCategory = document.querySelectorAll('.technology .post-catagory'),
            postTitle = document.querySelectorAll('.technology .post-title'),
            postTitleH6 = document.querySelectorAll('.technology .post-title h6'),
            postAuthor = document.querySelectorAll('.technology .post-author a'),
            postExcerp = document.querySelectorAll('.technology .post-excerp'),
            postMeta = document.querySelectorAll('.technology .post-meta'),
            postDateFirst = document.querySelectorAll('.technology .post-date span:first-child');
            postDateLast = document.querySelectorAll('.technology .post-date span:last-child');
            postCategoryValue = 'ІТ';
    }

    for(var j = 6, i = 0; i < imgLink.length; i++, j++) {
        imgLink[i].setAttribute('href',data.articles[i].url);
        image[i].setAttribute('src', data.articles[i].urlToImage);
        postCategory[i].innerHTML = postCategoryValue;
        postTitle[i].setAttribute('href',data.articles[i].url);
        postTitleH6[i].innerHTML = data.articles[i].title;
         var postDateCheck = postMeta[i].children;
       if(postMeta[i].childElementCount >= 3) {
           postAuthor[i].innerHTML = data.articles[i].author;
       }
       if(postMeta[i].childElementCount >= 3) {
           postAuthor[i].setAttribute('href',data.articles[j].url);
       }
       if(postMeta[i].childElementCount >= 3) {
           postExcerp[i].innerHTML = data.articles[i].description;
       }
       if(postDateCheck[1].classList.contains('post-date') || postDateCheck[0].classList.contains('post-date')) {
          postDateFirst[i].innerHTML = data.articles[i].publishedAt.slice(11,16);
           var monthNumber = parseInt(data.articles[i].publishedAt.slice(6,7));
           var month = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
           var day = data.articles[i].publishedAt.slice(8,10);
                if(day[0] === '0'){
                    day = data.articles[i].publishedAt.slice(9,10);
                }
           postDateLast[i].innerHTML = month[monthNumber - 1] + ' ' + day;
       }
    }
}
// news category api url
var business = 'https://newsapi.org/v2/top-headlines?country=ua&category=business&apiKey=05cd1448332a4f11bff5033b8815ae15',
    entertainment = 'https://newsapi.org/v2/top-headlines?country=ua&category=entertainment&apiKey=05cd1448332a4f11bff5033b8815ae15',
    health = 'https://newsapi.org/v2/top-headlines?country=ua&category=health&apiKey=05cd1448332a4f11bff5033b8815ae15',
    science = 'https://newsapi.org/v2/top-headlines?country=ua&category=science&apiKey=05cd1448332a4f11bff5033b8815ae15',
    sports = 'https://newsapi.org/v2/top-headlines?country=ua&category=sports&apiKey=05cd1448332a4f11bff5033b8815ae15',
    technology = 'https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=05cd1448332a4f11bff5033b8815ae15',
    topNews = 'https://newsapi.org/v2/top-headlines?country=ua&apiKey=05cd1448332a4f11bff5033b8815ae15';

Request(business,'business');
Request(health,'health');
Request(science,'science');
Request(sports,'sports');
Request(technology,'technology');
Request(entertainment,'entertainment');

function RequestTopOfUkraine(url) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true,);

    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            var errStatus = xhr.status;
            var errText = xhr.statusText;
            console.log(errStatus + ": " + errText);
        } else {
            data = JSON.parse(xhr.responseText);
            indexNews = xhr.responseText;
            innerLineNews(data);
            innerNewsToday(data);
            aditorsPick(data);
        }
    };
}

function innerLineNews(data) {
    var News = document.querySelectorAll('.top-news li a');
    for(var i = 0, j = 7; i < News.length; i++, j++){
        News[i].setAttribute('href',data.articles[j].url);
        News[i].innerHTML = data.articles[j].title;
    }
}

function innerNewsToday(data) {
 var link = document.querySelectorAll('.news-today a');
 var linkH6 = document.querySelectorAll('.news-today a h6 > b');
 var date = document.querySelectorAll('.news-today div p');
    for(var i = 0; i < link.length; i++) {
     link[i].setAttribute('href',data.articles[i].url);
     linkH6[i].innerHTML = data.articles[i].title;
        var monthNumber = parseInt(data.articles[i].publishedAt.slice(6,7));
        var year = data.articles[i].publishedAt.slice(0,4);
        var month = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
        var day = data.articles[i].publishedAt.slice(8,10);
        if(day[0] === '0'){
            day = data.articles[i].publishedAt.slice(9,10);
        }
        date[i].innerHTML = month[monthNumber - 1] + ' ' + day + ',   ' + year;
 }
}

function aditorsPick(data) {
    var imageLink = document.querySelectorAll('.editors-pick .post-thumb a');
    var image = document.querySelectorAll('.editors-pick .post-thumb a img');
    var titleLink = document.querySelectorAll('.editors-pick .post-title');
    var title = document.querySelectorAll('.editors-pick .post-title > h6');
    var date = document.querySelectorAll('.editors-pick .post-date a');
    console.log(data);
    for(var i = 0, j = 5; i < image.length; i++, j++) {
        imageLink[i].setAttribute('href',data.articles[j].url);
        image[i].setAttribute('src',data.articles[j].urlToImage);
        titleLink[i].setAttribute('href',data.articles[j].url);
        title[i].innerHTML = data.articles[j].title;
        var monthNumber = parseInt(data.articles[j].publishedAt.slice(6,7));
        var year = data.articles[j].publishedAt.slice(0,4);
        var month = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
        var day = data.articles[j].publishedAt.slice(8,10);
        if(day[0] === '0'){
            day = data.articles[j].publishedAt.slice(9,10);
        }
        date[i].innerHTML = month[monthNumber - 1] + ' ' + day + ',   ' + year;
    }
}

RequestTopOfUkraine(topNews);
