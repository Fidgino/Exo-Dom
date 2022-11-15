let buttons = document.querySelectorAll('ul > li > a')
let texts = document.querySelector('.capital');
let city = [
    ['Paris', 'La capital de la France est Paris.'],
    ['Londre','La capital de l’Angleterre est Londre.'],
    ['Berlin', 'La capital de l’Allemagne est Berlin.'],
    ['Orgrimmar', 'Tro marran'],
];

for(let i = 0; i < buttons.length; i++){
    let button = buttons[i];
    button.addEventListener('click', function() {
        texts.querySelector("h1").textContent = city[i][0];
        texts.querySelector("p").textContent = city[i][1];
        setTimeout(() => {
            texts.querySelector("h1").textContent = "";
            texts.querySelector("p").textContent = "";
          }, 2500);
    });
};