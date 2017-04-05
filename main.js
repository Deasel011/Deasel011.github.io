window.onload(loadText("fr"));

strings = {
    "bio": {
        "text": {
            "fr": "Je suis étudiant au BAC en informatique à l'Université du Québec à Montréal. Je possède un certificat en Études Videoludiques de l'Université de Montréal et je n'ai jamais terminer une majeure en Histoire dans ce même établissement... Je suis un passionné de jeux vidéos, mais n'aspire pas à en créer... je préfere utiliser et développer des méthodes de triches et d'automatisation dans ces-derniers! :)",
            "en": "I am currently studying Computer Science at Université du Québec à Montréal. I have a certificate in Video Game Studies from University of Montreal and still have History major pending (probably dead by now)... I love video games but would never aspire to create one... I prefer to use and develop methods of cheating such as automaton! :)"
        }
    }
};

function loadText(lang) {
    if (lang === "fr") {
        propos = document.querySelector(".propos p");
        propos.innerText = strings.bio.text.fr;
    }
}