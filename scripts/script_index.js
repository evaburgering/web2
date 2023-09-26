// JavaScript Document
console.log("nijntje, piep klein konijntje.");

// Voeg een klikgebeurtenis toe aan de menuknop bron: Chat Gpt en W33 schools
document.querySelector('button').addEventListener('click', function () {
    var menu = document.querySelector('nav');
    var header = document.querySelector('header');
    menu.classList.toggle('active'); // Voeg of verwijder de "active" klasse
    header.classList.toggle('active');

    var first_header = document.querySelector('.eersteheader');
    first_header.classList.toggle('hide');
});

document.addEventListener('scroll', function () {               //selecteert het element wat de eerste headerclass heeft of v
    var first_header = document.querySelector('.eersteheader'); //var aangemaakt die via doc.query de .eersteheader er uit haalt. 

    if (document.scrollingElement.scrollTop > 300) { //scrollTop geeft alleen eenheden in px
        first_header.classList.remove('hide'); // haalt de verzamelde classes die Hide heten weg als deze meer dan 300 is.
    } else {
        first_header.classList.add('hide') // voegt de verzamelde classes die Hide heten weer toe
    }
});