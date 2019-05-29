var language;
language = window.navigator.language.substring(0,2) || "en";


var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

var getHtml = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'text';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

function setLanguageButton(lang){
    currentLang = lang;
    document.getElementById("language-button").innerText = lang;
}

function useLanguage(lang){
    if(window.location.pathname.match("index")) {
        loadText(lang);
    }
    if(window.location.pathname.match("content")) {
        loadContent(lang);
    }
    setLanguageButton(lang);
}

function swapLanguage() {
    switch (currentLang) {
        case "en":
            useLanguage("fr");
            break;
        case "fr":
            useLanguage("en");
            break;
        default:
            break;
    }
}

function setContentLanguage(lang){
    contentLabel = document.querySelector(".content-label");
    getJSON("string.json",function(status,data){
        contentLabel.innerText = data.content.label[lang];
    });
}

function setAPropos(lang){
    apropos = document.querySelector(".propos");
    getJSON("string.json",function(status,data){

        while (apropos.firstChild) {
            apropos.removeChild(apropos.firstChild);
        }

        h = document.createElement("h1");
        h.innerText = data.about.label[lang];
        apropos.appendChild(h);

        for(var paragraph in data.about.text[lang]){
            p = document.createElement("p");
            p.innerText = data.about.text[lang][paragraph];
            apropos.appendChild(p);
        }
    });
}

function loadText(lang) {
    setAPropos(lang)
}

function loadContent(lang){
    setContentLanguage(lang);
}

function displayAvailableContent(){
    getHtml("availableContent.html",function(status,html){
        document.querySelector(".content-picker").innerHTML = html;
    });
}

function hideAvailableContent(){
    document.querySelector(".content-label").classList.add("hidden");
    document.querySelector(".content-picker").classList.add("hidden");
}

function getMarkdown(data,callback){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "https://api.github.com/markdown/raw", true);
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send(data);
}

function choseContent(path){
    getHtml(path,function(status,html){
            params = new URLSearchParams(window.location.search);
            if(params.has("page")) {
                params.delete("page");
            }
            params.append("page",path);
            window.location.search = params;
            hideAvailableContent();
    });
}

function formatContent(path){
    getHtml(path,function(status,html){
        document.querySelector(".content").innerHTML = html;
        hideAvailableContent();
    });
}

function checkForContent(){
    params = new URLSearchParams(window.location.search);
    if(params.has("page")){
        formatContent(params.get("page"));
    }
}

function loadMenu(callback) {
    getHtml("menu.html",function(status,html){
        document.getElementById("nav-container").innerHTML = html;
        callback();
    })
}

document.addEventListener("DOMContentLoaded", function () {
    loadMenu(
        function(){useLanguage(language)});

});

function toggleResponses(){
    if(document.getElementById("responses").classList.contains("hidden")){
        document.getElementById("responses").classList.remove("hidden");
    }else{
        document.getElementById("responses").classList.add("hidden");
    }
}


