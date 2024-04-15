const myBtn1 = document.getElementById('myBtn');

myBtn1.addEventListener('click', function(){
    console.log('click event 1');
});

myBtn1.addEventListener('click', () => {
    console.log('click event 2');
});

//------------------

const func1 = ()=>{
    console.log('click event 3');
};

myBtn1.addEventListener('click', func1);

//------------------ otpiska ot sobytiya 'click event 3' :

myBtn1.removeEventListener('click', func1);
// udalaetsya cherez function

//------------------


myBtn1.addEventListener('click', (e) => {
    // debugger; // otladchik koda, ne zabyt udalit
    // e.target.innerText = 'TEST';
    console.log('click event 4 (event object)');
});

//------------------ focus sobytiye

const input1 = document.getElementById('myInput');
input1.addEventListener('focus', ()=>{
console.log('focus event');
});

//------------------ blur - ubiraet focus s objecta

const input2 = document.getElementById('myInput');
input1.addEventListener('blur', ()=>{
console.log('blur event');
});

//------------------ mouseover - naezd myshkoi na object
//------------------ mouseleave - uhod myshkoi s objecta

const input3 = document.getElementById('myInput');
input1.addEventListener('mouseover', ()=>{
console.log('mouseover event');
});

const input4 = document.getElementById('myInput');
input1.addEventListener('mouseleave', ()=>{
console.log('mouseleave event');
// alert('no leave - ne uhodi');
});