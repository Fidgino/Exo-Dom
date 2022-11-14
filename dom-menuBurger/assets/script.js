let button = document.querySelector('.squareMenu');
let barOne = document.querySelector('.barOne');
let barTwo = document.querySelector('.barTwo');
let barThree = document.querySelector('.barThree');
let orange = document.querySelector('.orange');

button.addEventListener('click', function() {
    orange.classList.toggle('open');
    button.classList.toggle('openButton');
    barThree.classList.toggle('firstAnimation');
    barTwo.classList.toggle('vanish');
    barOne.classList.toggle('vanish');
});
console.log(button);