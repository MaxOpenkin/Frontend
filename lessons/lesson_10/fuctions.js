
console.log('\n Создание функций: ');

function myFunc1() {
    console.log('hello func');
}

myFunc1();


// Создание анонимной функции:

const myFunc2 = function () {
    console.log('hello anonim func');
}

myFunc2();


// Создание стрелочной функции:

const myFunc3 = () => {
    console.log('hello arrow func');
}

myFunc3();

const myFunc4 = () => console.log('hello arrow func 2');

myFunc4();


console.log('\n Функции с параметрами: ');

function myFunc5(a) {
    console.log(a);
}

myFunc5('hello');
myFunc5(111);
myFunc5([1, 2, 3, 4, 5]);


console.log('\n Функции с 2 параметрами: ');

function sum(a, b) {
    console.log(a + b);
}

sum(1, 2);
sum('hello', 'world');


console.log('\n ---');

function calculate(a, b) {
    const res = a + b;
    return res;
}

const resultCalc = calculate(3, 5);
console.log(resultCalc);


console.log('\n ---');

function foo() {
    return 1;
    return 2;
}

console.log(foo());


console.log('\n ---');

function myFunc6(a) {
    if (a > 6) {
        return '>6';
    } else {
        return '<6';
    }
}

console.log(myFunc6(1));


console.log('\n Вызов функции внутри другой функции: ');

function summa(a, b) {
    return a + b;
}

function main() {
    const res1 = summa(1, 2);
    console.log(res1);
}

main();


console.log('\n ---');

function wrapperFunc1() { // Как класс wrapperFunc1 со своими функциями внутри (имитация класса)
    function innerFunc1() {
        console.log('inner func');
    }
    return innerFunc1;
}

const func111 = wrapperFunc1();
func111();

wrapperFunc1()();