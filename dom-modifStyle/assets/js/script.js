let button = document.querySelector('#bouton');
let text = document.querySelector('#paragraphe');

button.addEventListener('click', function() {
    text.classList.toggle('modif');
});