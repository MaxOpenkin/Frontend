const menuBtn = document.querySelector('.menu_btn1');
const menu = document.querySelector('.menu1');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-active1');
});