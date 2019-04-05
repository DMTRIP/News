
var data = 0;
var indexNews;

{
    // Finance group
    var fPostThumbA = '.finance .post-thumb a',
        fPostThumbImg = '.finance .post-thumb img',
        fPostCategory = '.finance .post-catagory',
        fPostCategoryValue = 'Фінанси',
        fPostTitleA = '.finance .post-title',
        fPostTitleh6 = '.finance .post-title h6',
        fPostAuthor = '.finance .post-author a',
        fPostExcerp = '.finance .post-excerp',
        fPostMeta = '.finance .post-meta',
        fPostDate = '.finance .post-date';
    // entertainment

    var ePostThumbA = '.entertainment .post-thumb a',
        ePostThumbImg = '.entertainment .post-thumb img',
        ePostCategory = '.entertainment .post-catagory',
        ePostCategoryValue = 'Розваги',
        ePostTitleA = '.entertainment .post-title',
        ePostTitleh6 = '.entertainment .post-title h6',
        ePostAuthor = '.entertainment .post-author a',
        ePostExcerp = '.entertainment .post-excerp',
        ePostMeta = '.entertainment .post-meta',
        ePostDate = '.entertainment .post-date';
}

function RequestBisnes() {
    var xhr = new XMLHttpRequest();

    var url = "https://newsapi.org/v2/top-headlines?country=ua&category=business&apiKey=05cd1448332a4f11bff5033b8815ae15";
    xhr.open("GET", url, true,);
    //xhr.setRequestHeader("Content-Type", "application/json");

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
            innerNews(data,fPostThumbA,fPostThumbImg,fPostCategory,fPostCategoryValue,fPostTitleA,fPostTitleh6,fPostAuthor,fPostExcerp,fPostMeta,fPostDate);
        }
    };
}

function entertainmentRequest(){
    var xhr = new XMLHttpRequest();

    var url = "https://newsapi.org/v2/top-headlines?country=ua&category=entertainment&apiKey=05cd1448332a4f11bff5033b8815ae15";
    xhr.open("GET", url, true,);
    //xhr.setRequestHeader("Content-Type", "application/json");

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
            innerNews(data,ePostThumbA,ePostThumbImg,ePostCategory,ePostCategoryValue,ePostTitleA,ePostTitleh6,ePostAuthor,ePostExcerp,ePostMeta,ePostDate);
        }
    };
}

function TopNewsRequest(data){
    var xhr = new XMLHttpRequest();

    var url = "https://newsapi.org/v2/top-headlines?country=ua&apiKey=05cd1448332a4f11bff5033b8815ae15";
    xhr.open("GET", url, true,);
    //xhr.setRequestHeader("Content-Type", "application/json");

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
        }
    };
}





function innerNews(data,imgLink,image, postCategory, postCategoryValue,postTitle,postTitleH6,postAuthor,postExcerp, fPostMeta,postDate) {
    var vImgLink = document.querySelectorAll(imgLink);
    var vImage = document.querySelectorAll(image);
    var vPostCategory = document.querySelectorAll(postCategory);
    var vPostTitle = document.querySelectorAll(postTitle);
    var vPostTitleH6 = document.querySelectorAll(postTitleH6);
    var vPostAuthor = document.querySelectorAll(postAuthor);
    var vPostExcerp = document.querySelectorAll(postExcerp);
    var  vFPostMeta = document.querySelectorAll(fPostMeta);
    var vPostDate = document.querySelectorAll(postDate);
    console.log(data);
    for(var j = 6, i = 0; i < vImgLink.length; i++, j++) {

        vImgLink[i].setAttribute('href',data.articles[i].url);
        vImage[i].setAttribute('src', data.articles[i].urlToImage);
        vPostCategory[i].innerHTML = postCategoryValue;
        vPostTitle[i].setAttribute('href',data.articles[i].url);
        vPostTitleH6[i].innerHTML = data.articles[i].title;

       if(vFPostMeta[i].childElementCount >= 3) {
           vPostAuthor[i].innerHTML = data.articles[i].author;
       }
       if(vFPostMeta[i].childElementCount >= 3) {
           vPostAuthor[i].setAttribute('href',data.articles[j].url);
       }
       if(vFPostMeta[i].childElementCount >= 3) {
           vPostExcerp[i].innerHTML = data.articles[i].description;
       }
       if(vFPostMeta[i].childElementCount === 2) {
           //vPostDate[i].
       }
    }
}


TopNewsRequest();
RequestBisnes();
entertainmentRequest();



