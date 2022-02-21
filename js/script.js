// Selectors

window.addEventListener('scroll', function() {
    letwindowPosition = window.scrollY > 0;
    header.classList.toggle('active', window.scrollY > 0)
})

let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
})

