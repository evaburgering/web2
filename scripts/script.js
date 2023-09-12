// JavaScript Document
console.log("nijntje, piep klein konijntje.");

// Voeg een klikgebeurtenis toe aan de menuknop bron: Chat Gpt en W33 schools
document.querySelector('header button').addEventListener('click', function () {
    var menu = document.querySelector('header nav');
    menu.classList.toggle('active'); // Voeg of verwijder de "active" klasse
});
