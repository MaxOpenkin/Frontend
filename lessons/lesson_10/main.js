
let a = 0;
while (a < 10) {
    console.log(a);
    a++;

    if (a === 5) {
        break;
    }
}


// пропустить одну итерацию цикла (цифру 5)
while (a < 10) {
    if (a === 5) {
        a++;
        continue;
    }
    console.log(a);
    a++;
}


console.log('\n Работа со строками: ');

let str1 = 'hello world';
console.log(str1.length);

console.log('---');

for(let i =0; i<str1.length; i++){
    console.log(str1[i]);
}

console.log('---');

let firsLetter = str1[0];
console.log(firsLetter);

console.log('---');

const str2 = 'hello world 2';
const res = str2.toUpperCase() + ' xxx';
console.log(res);

console.log('---');

const str3 = 'hello world 3';
const res3 = str3.substring(0,4);
console.log(res3);

console.log('---');

const str4 = 'hello world 4';
const res4 = str4.indexOf('world');
console.log(res4);

console.log('\n Заполнить строку в начале значением, если длина строки меньше 20: ');

const str5 = 'hello world 5';
const res5 = str5.padStart(20,'x'); // .padEnd
console.log(res5);

console.log('\n Массив из строки с разделителем: ');

const str6 = 'hello world 6';
const res6 = str6.split(' ');
console.log(res6);

console.log('\n Шаблоны строк: ');

const personName = 'Robert';
const age = 30;

const message = `Сотруднику с именем ${personName} сейчас ${age} лет`; // Обратные ковычки
const messageOld = 'Сотруднику с именем ' + personName + ' сейчас ' + age + ' лет'; // Старый способ
console.log(message);
console.log(messageOld);

console.log('\n С обратными ковычками можно переносить на новую строку через ентер: ');

const str7 = `hello 
world 7`;
console.log(str7);

