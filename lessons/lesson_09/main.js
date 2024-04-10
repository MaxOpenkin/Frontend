let array = [1, 2, 3, 4];
array.push(5); // добавить элемент в массив
console.log(array);


const arrayConst = [];
arrayConst.push(1, 2, 3);
console.log(arrayConst);
// два пульта от одного и того же телевизора, две разные ссылки на одно и тоже содержимое (один массив)
const arrayConst1 = arrayConst;
arrayConst1.push(4, 5);
console.log(arrayConst);
console.log(arrayConst1);


console.log('--------------');

let arrayLet = [1, 2, 3, 4];
console.log(arrayLet);

arrayLet.push(555);  // добавить элемент
console.log(arrayLet);

arrayLet.pop(); //удалить последний элемент массива
console.log(arrayLet);


console.log('--------------');

const arrayConst2 = [1, 2, 3, 4];
console.log(arrayConst2);
arrayConst2[0];
console.log(arrayConst2[0]);
console.log(arrayConst2[1]);
console.log(arrayConst2[2]);
console.log(arrayConst2[3]);

arrayConst2.shift(); // удалить первый элемент массива
console.log(arrayConst2);

let res = arrayConst2.slice(1) // в новый массив вырезать из старого (1) или с 1 по 3 индексы (1,3) не изменяя исходный
console.log(arrayConst2);
console.log(res);

const arrayConst3 = [1, 2, 3, 4];
console.log(arrayConst3);
const res1 = arrayConst3.splice(0, 2); // удали с нулевого индекса по 2 и перезапиши в новый массив, исходный меняется (удаляется индексы с 0 по 2)
console.log(arrayConst3);
console.log(res1);


console.log('--------------');

const arrayConst4 = [1, 2, 3, 4];
console.log(arrayConst4);
const res2 = arrayConst4.join('|'); // преврати массив в строку и разделитель |
console.log(res2);
const res3 = arrayConst4.join('| \n');
console.log(res3);


console.log('--------------');

const arrayConst5 = [1, 2, 3, 4];
console.log(arrayConst5);
arrayConst5[1] = 555; // перезаписать элемент индекс 1 на значение 555
console.log(arrayConst5);


console.log('--------------');

let dlina = arrayConst5.length;
console.log(dlina);


console.log('--------------');

Set
Map
WeakMap
WeakSet

// по сути это хэшмап как в джаве
let t = {
    name: 'Bob',
    age: 22,
}


// Циклы:
console.log('--------------'); // Циклы:

let b = 1;
b++; // или b+=1; или b=b+1; инкремент увеличивает на 1 переменную
console.log(b);

console.log('--------------');

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('--------------');

const constArray = [1, 2, 3, 4, 5];
for (let i = 0; i < constArray.length; i++) {
    console.log(constArray[i]);
}

console.log('--------------');

for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        break;
    }
}

console.log('--------------');

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;    //пропустить одну итерацию цикла
    }
    console.log(i);
}

console.log('--------------');

// for(; ;){
//     console.log('hello');
// }                                бесконечный цикл