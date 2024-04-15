const btn = document.getElementById('btn');
btn.addEventListener('click', (e)=>{
    console.log('btn click');
    // e.preventDefault();
    // e.stopPropagation(); // otkl. vsplytie sobytiya
    // e.stopImmediatePropagation();
});

const wrapper = document.getElementById('wrapper');
wrapper.addEventListener('click', (e)=>{
console.log('div click');
e.stopPropagation();
});

