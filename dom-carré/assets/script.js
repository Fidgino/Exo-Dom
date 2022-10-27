let square = document.querySelector('.square');
let button = document.getElementById('button');

square.addEventListener('mouseover', function() {
    square.classList.remove("colorGreen")
    square.style.backgroundColor = '#ff1040';
});
square.addEventListener('mouseout', function() {
    square.style.backgroundColor = '#10b0ff';
});
square.addEventListener('dblclick', function() {
    square.style.backgroundColor = '';
    square.classList.toggle('colorGreen');
});
button.addEventListener('click', function() {
    square.classList.toggle('vanish');
});



