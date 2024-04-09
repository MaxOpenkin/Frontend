console.log('Hello world!');

// модальные окна:
// alert('hello user');
// promt('введите данные');
// confirm('вы уверены');

let s = 'hello';
s = 1;

const myConst = 111;

console.log(s, myConst);
console.log(s);
console.log(myConst);

let c = true;

// Копирование значения:
let first = 2;
let second = first;
first = 3;

console.log(first);
console.log(second);


let a1 = null;
console.log(a1);

let a2;
console.log(a2);

// if(истина){
//     //если истина сделай это
// }else{
//     //если нет, то другое
// }

let a3 = 10;

if (a3 == 10) {
    console.log('a3 = 10')
} else {
    console.log('не равно');
}

let a4 = '10';

if (a4 === 10) {
    console.log('a4 = 10')
} else {
    console.log('не равно');
}

let b1 = 1;
let b2 = 2;

console.log(b1 + b2);

let sum = b1 - b2;

console.log(sum);

// превращается в строку ()
let sum2 = 'hello' + 5;
console.log(sum2);

let sum3 = '10' + 5;
console.log(sum3);


let day = 'monday';
switch (day) {
    case 'monday':
        console.log('понедельник');
        break;
    case 'tuesday':
        console.log('вторник');
        break;
    default:
        console.log('неизвестный день недели');
        break;
}

// Равносильно:

if(day === 'monday'){
    console.log('понедельник');
}else if (day === 'tuesday'){
    console.log('вторник');
}else{
    console.log('неизвестный день недели');
}