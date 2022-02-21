// Selectors

window.addEventListener('scroll', function() {
    letwindowPosition = window.scrollY > 5;
    header.classList.toggle('active', window.scrollY > 0)
})

let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
})


// Object Destructuring




const {name, weapon, room} = {
    name: "Rusty",
    room: "Kitchen",
    weapon: "candlestick"
}

console.log(weapon, room);

