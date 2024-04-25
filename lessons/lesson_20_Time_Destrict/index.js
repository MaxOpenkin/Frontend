
// Отложенный вызов стрелочной функции:
setTimeout(() => {
    console.log('test');
    console.log('-----------------------------------------------------------');
}, 500);   // функция будет вызвана не раньше 3 сек, все зависит от загруженности процессора

//-----------------------------------------------

const foo = () => {
    console.log('hello timeout');
    console.log('-----------------------------------------------------------');
};
setTimeout(foo, 800);

//-----------------------------------------------

const foo1 = (text, text1) => {
    console.log('hello timeout ' + text + text1);
    console.log('-----------------------------------------------------------');
};

setTimeout(() => {
    foo1('вызов функции с аргументом вариант 1', ' и вариант 2');
}, 900);

setTimeout(foo1, 1000, 'вызов функции с аргументом вариант 1', ' и вариант 2');

//-----------------------------------------------

// setInterval(()=>{
//     console.log('hello interval');
// }, 1050);    // вызывает каждые 5 сек

//-----------------------------------------------

// let counter = 0;
// const intervalId = setInterval(() => {
//     counter += 1;
//     console.log(counter);
//     if (counter >= 3) {
//         clearInterval(intervalId);
//     }
// }, 1200);

//-----------------------------------------------

console.log('before foo2');

const foo2 = () => {
    console.log('before interval');

    let counter = 5;
    const intervalId = setInterval(() => {
        if (counter === 5) {            // Вывести что-то перед счетчиком первым один раз когда счетчик = 5;
            console.log('foo2');
        }
        counter += 1;
        console.log(counter);
        if (counter >= 10) {
            clearInterval(intervalId);
        }
    }, 1300);

    console.log('after interval');
};
foo2();

console.log('after foo2');

//-----------------------------------------------



