const array1 = [1, 2, 3, 4, 5];
const res1 = array1.filter(x => x > 2);  // const func = x => x > 2;
console.log(res1); // [ 3, 4, 5 ]


console.log('-------------------------------------------------------');


const array2 = [1, 2, 3, 4, 5];
const res2 = array1.filter(function (x) {
    return x > 2;
});
console.log(res2); // [ 3, 4, 5 ]


console.log('-------------------------------------------------------');


const func1 = (x, y) => x > y;
const res = func1(7, 5);
console.log(res);


console.log('-------------------------------------------------------');


const array3 = [1, 2, 3, 4, 5];
const res3 = array3.filter(item => {
    return item > 2;
});
console.log(res3);


console.log('-------------------------------------------------------');


const array4 = [1, 2, 3, 4, 5];
const res4 = array4.filter((item, i, arr) => {
    if (i === 0) {
        return true;  // что бы 0 индекс все равно попал в выборку, даже если он < 3
    }
    return item >= 3;
});
console.log(res4);


console.log('-------------------------------------------------------');


const persons1 = [
    { name: 'Bob1', age: 22 },
    { name: 'Bob2', age: 33 },
    { name: 'Bob2', age: 15 },
    { name: 'Bob3', age: 44 },
    { name: 'Bob4', age: 55 },
];
const personsRes1 = persons1.filter(pers => pers.age > 33);
console.log(personsRes1);

const personsRes2 = persons1.filter(pers => {
    if (pers.name === 'Bob2') {  // Bob2 polubomu popadet v vyborku
        return true;
    }
    return pers.age > 33;
});
console.log(personsRes2);

const personsRes3 = persons1.filter(pers => {
    if (pers.name === 'Bob2' || pers.age > 33) {  // toje samoe
        return true;
    }
    // return pers.age > 33;
});
console.table(personsRes3);


console.log('-------------------------------------------------------');


const persons2 = [
    { name: 'Bob1', age: 22 },
    { name: 'Bob2', age: 33 },
    { name: 'Bob2', age: 15 },
    { name: 'Bob3', age: 44 },
    { name: 'Bob4', age: 55 },
];
const resPersons2 = persons2.find(item => item.name[item.name.length - 1] === '2');
console.log(resPersons2);


console.log('-------------------------------------------------------');


const array5 = [1, 2, 3, 4, 5];
const res5 = array5.map(item => item + 1);
console.log(res5);


console.log('-------------------------------------------------------');

const array6 = [1, 2, 3, 4, 5];
const res6 = array5.map(item => item > 3);
console.log(res6);


console.log('-------------------------------------------------------');


const persons3 = [
    { name: 'Bob1', age: 22 },
    { name: 'Bob2', age: 33 },
    { name: 'Bob2', age: 15 },
    { name: 'Bob3', age: 44 },
    { name: 'Bob4', age: 55 },
];
const resPersons3 = persons3.map(item => {
    return {...item, salary: 1000000, test: item.name + item.age}
});
console.log(resPersons3); // { name: 'Bob4', age: 55, salary: 1000000, test: 'Bob455' }


console.log('------------------- forEach ----------------------------');


const array7 = [1, 2, 3, 4, 5];
array7.forEach(item => {
    console.log(item);
});


console.log('------------------- reduce ---------------------------');


const array8 = [1, 2, 3, 4, 5];
const res8 = array8.reduce((acc, current) => {
    acc += current;
    return acc;
}, 0);  // esli 100 to otvet 115, moschem sdelat i object i massiv: [0]);  - }, {0}); 

console.log(res8); // 15 otvet

