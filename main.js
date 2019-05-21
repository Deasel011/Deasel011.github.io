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
    loadText(lang);
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


