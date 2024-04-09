const menuBtn = document.querySelector('.menu_btn');
const menuClose = document.querySelector('.menu_close');
const menuList = document.querySelector('.menu_list');

menuBtn.addEventListener('click', ()=>{
    menuList.classList.add('menu_list-open');
});

menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu_list-open');
});