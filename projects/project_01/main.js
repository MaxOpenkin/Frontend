const menuBtn = document.querySelector('.menu_btn');
const menuClose = document.querySelector('.menu_close');
const menuList = document.querySelector('.menu_list');
const menuShadow = document.querySelector('.menu-close');

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu_list-open');
    menuShadow.classList.toggle('menu-open');
});

menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu_list-open');
    menuShadow.classList.remove('menu-open');
});