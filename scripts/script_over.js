// JavaScript Document
console.log("nijntje, piep klein konijntje.");

// Voeg een klikgebeurtenis toe aan de menuknop bron: Chat Gpt en W33 schools
document.querySelector('button').addEventListener('click', function () {
    var menu = document.querySelector('nav');
    var header = document.querySelector('header');
    menu.classList.toggle('active'); // Voeg of verwijder de "active" klasse
    header.classList.toggle('active');

    // Toggle de 'aria-expanded' attribuutwaarde van de knop
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

    // Pas de dark mode-status toe op het lichaam en de checkbox (indien aanwezig) // 
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



