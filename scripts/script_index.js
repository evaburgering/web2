// JavaScript Document
console.log("nijntje, piep klein konijntje.");




// Voeg een klikgebeurtenis toe aan de menuknop bron: Chat Gpt en W33 schools en Jordy
document.querySelector('button').addEventListener('click', function () { //zoekt de eerste <button>-element in het document
    var menu = document.querySelector('nav'); //Dit selecteert het eerste <nav>-element in het document en wijst het toe aan de variabele menu.
    var header = document.querySelector('header');
    menu.classList.toggle('active'); //  Hier wordt de classList van het menu-element gewijzigd.
    header.classList.toggle('active');
    var first_header = document.querySelector('.eersteheader');
    first_header.classList.toggle('hide');

    // Toggle de 'aria-expanded' attribuutwaarde van de knop
    var button = document.querySelector('button');
    button.setAttribute('aria-expanded', menu.classList.contains('active'));
});

document.addEventListener('scroll', function () {               //selecteert het element wat de eerste headerclass heeft of v
    var first_header = document.querySelector('.eersteheader'); //var aangemaakt die via doc.query de .eersteheader er uit haalt. 

    if (document.scrollingElement.scrollTop > 300) { //scrollTop geeft alleen eenheden in px
        first_header.classList.remove('hide'); // haalt de verzamelde classes die Hide heten weg als deze meer dan 300 is.
    } else {
        first_header.classList.add('hide') // voegt de verzamelde classes die Hide heten weer toe
    }
});

// Voeg een eventlistener toe aan het menu om de aria-hidden attribuutwaarde bij te werken wanneer het menu wordt geopend of gesloten
var menu = document.querySelector('nav');
menu.addEventListener('transitionend', function () {
    var button = document.querySelector('button');
    button.setAttribute('aria-expanded', menu.classList.contains('active'));
});







// Darkmode met hulp van bron: Jordy mijn zwager en student grogrammeur
const toggle = document.getElementById('dark-mode-toggle'); //toggle word aangemaakt en gelinkt aan t element dark-mode-toggle
const body = document.body; 

// Functie om dark mode in- of uit te schakelen
function toggleDarkMode() {   // hier word de functie toggleDarkMode gedefinieerd.Deze functie wordt later aangeroepen wanneer de checkbox voor dark mode wordt aangevinkt.
    if (toggle.checked) {     // deze fuctie controleerd of checkbox met id 'dark-mode-toggle' is ingeschakeld (aangevinkt).
        body.classList.add('dark-mode');  //als dit zo is word de dark mode toegevoegd
    } else {
        body.classList.remove('dark-mode'); //zo niet word deze weg gehaald.
    }
}

// Voegt een eventlistener toe aan de checkbox om dark mode te beheren. of er iets verandrd en hij wat moet doen of niet
toggle.addEventListener('change', toggleDarkMode);





//de code hier onder zorgd er voor dat de darkmode word opgeslagen wanneer je binnen de website van pagina wisselt
function onload() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Controleer of de dark mode-status is opgeslagen in localStorage bij het laden van de pagina
    const savedDarkModeStatus = localStorage.getItem('darkmode') === 'true';

    // Pas de dark mode-status toe op het lichaam en de checkbox (indien aanwezig)
    body.classList.toggle('dark-mode', savedDarkModeStatus);
    if (darkModeToggle) {
        darkModeToggle.checked = savedDarkModeStatus;
        darkModeToggle.addEventListener('change', function() {
            const darkModeEnabled = darkModeToggle.checked;
            localStorage.setItem('darkmode', darkModeEnabled);
            body.classList.toggle('dark-mode', darkModeEnabled);
        });
    }
}

// Roep onload aan wanneer de pagina is geladen
window.addEventListener('load', onload);