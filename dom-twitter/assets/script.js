let box = document.querySelector('#tweetContent');
let compteur = document.querySelector('#counterBlock');
let i = 140

box.addEventListener('input', function() {
    compteur.textContent = 140 - box.value.length
    if(box.value.length < 140){
        compteur.style.color = 'green';
    }
    else if(box.value.length >= 140){
        compteur.style.color = 'red';
    }
});