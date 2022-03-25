const menu = document.querySelector('#menuBurger');
const listMenu= document.querySelector('.menu__list');

menu.addEventListener('click', ()=> {
    listMenu.classList.toggle('close-menu');
    listMenu.classList.toggle('open-menu');
    
})