// JavaScript Document
console.log("nijntje, piep klein konijntje.");

// Voeg een klikgebeurtenis toe aan de menuknop bron: Chat Gpt en W33 schools
document.querySelector('button').addEventListener('click', function () {
    var menu = document.querySelector('nav');
    var header = document.querySelector('header');
    menu.classList.toggle('active'); // Voeg of verwijder de "active" klasse
    header.classList.toggle('active');
});