const listMobile = document.getElementById('list-mobile');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');

listMobile.addEventListener('click',() => {
    menu.classList.add('show-menu');
});
menu.addEventListener('click',() => {
    menu.classList.remove('show-menu');
});
overlay.addEventListener('click',() => {
    menu.classList.remove('show-menu');
});