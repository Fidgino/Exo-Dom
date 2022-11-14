let button = document.querySelector('.squareMenu');
let barOne = document.querySelector('.barOne');
let barTwo = document.querySelector('.barTwo');
let barThree = document.querySelector('.barThree');
let orange = document.querySelector('.orange');

button.addEventListener('click', function() {
    orange.classList.toggle('open');
    button.classList.toggle('openButton');
    barOne.classList.toggle('barOneA');
    barThree.classList.toggle('barThreeA');
    setTimeout(() => {
        barOne.classList.toggle('vanish');
        barTwo.classList.toggle('rotateBarTwo');
        barThree.classList.toggle('rotateBarThree')
      }, 500)
});