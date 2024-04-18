const object = {
    name: 'Bob',
    age: 22,
};

object.salary = 200000;
console.log(object);

const object2 = new Object();
object2.name = 'Martin';
object2.age = 35;
object2.hello = 'hello';
console.log(object2);

console.log('------------------');

const object3 = {
    name: 'John',
    age: 19,
};

const personName = object3.name;
console.log(personName);

console.log('------------------');

const object4 = {
    lastName: 'Miller',
    'person-name': 'Bob', // iz html css berem class s defisom
};

object4['person-name'] = 'Bobby';
console.log(object4);

console.log('------------------');

const object5 = {
    name: 'Johny',
    age: 19,
};

console.log(object5);

delete object5.name; // udalenie - ne ispolzovat luchsche object5.name = undefined ili null;
object5.name = undefined; // ili null; // - luchsche sdelat pustym kluch

const foo = (obj) => {
    console.log(obj);
};

foo(object5);

console.log('------------------');

const object6 = {
    name: 'Slava',
    age: 19,
};

// Object.freeze(object6); // Zamorozit object i nichego v nem potom ne pomenyat
// object6.name = 'test';

console.log(object6);

const keys = Object.keys(object6); // poluchit vse kluchi objecta v vide massiva
console.log(keys);

console.log('-------- for of ----------');

for (let k of keys) { // zikl for of perebiraet srazu znachenia
    console.log(k);
};

console.log('-------- for of ----------');

for (let k of keys) {  // poluchaem znacheniya cherez kluchi v zikle
    const val = object6[k];
    console.log(val);
};

console.log('------------------');

const kkk = 'name'; // poluch znacheniya object cherez [] i peremennyu
const res1 = object6[kkk];
console.log(res1);

console.log('------------------');

const values = Object.values(object6); // poluchit vse znacheniya v vide massiva
console.log(values);

console.log('-------- massiv object ----------');

const entries = Object.entries(object6); // 2 massiva: massiv kluchei i massiv znachenyi
console.log(entries);

const res = entries[0][0]; // vyvesti 0 massiv po index i 0 znachenie v massive po index
console.log(res);

console.log('------------------');

const object7 = {
    lasrName: 'Sidorov',
    documents: [
        'passport', 'id', 'moneys'
    ],
    car: {
        carName: 'BMW',
        carburator: {
            mabufacturer: 'china'
        }
    }
};

console.log(object7);
console.log(object7.documents);

for (let i = 0; i < object7.documents.length; i++) {
    console.log(object7.documents[i]);
};

const carb = object7.car.carburator.mabufacturer;
console.log(carb);

console.log('------- massiv objectov -----------');

const object8 = { lastName: 'ivanov1', age: 22 };
const object9 = { lastName: 'ivanov2', age: 23 };
const object10 = { lastName: 'ivanov3', age: 24 };

const array = [object8, object9, object10];
console.log(array);

const person = {
    lastName: 'petrov',
    cars: [
        { carName: 'bmw' },
        { carName: 'audi' },
        { carName: 'porshe' },
    ],
    friends: array
};

console.log(person);

console.log('------------------');

const object11 = {
    lastName: 'vaskov',
    age: 33
};

const test1 = 'lastName' in object11; // poisk proverka klucha v object
console.log(object11);
console.log(test1); // true - false

console.log('-------- for in ----------');

for (let k in object11) { // zikl kot perebiraet kluchi for in
    console.log(k);
};

console.log('-------- rasschet znacheniya v objecte ----------');

const object12 = {
    test: 1 + 2,
};
console.log(object12);

console.log('------------------');

const a = 10;
const b = 15;
const object13 = {
    res: a + b,
};
console.log(object13);

console.log('------------------');

const func1 = (a,b) => {
    return a + b;
};
const object14 = {
    res2: func1(5, 8),
    res3: func1(3, 2)
};
console.log(object14);

// const div = document.getElementById('xxx');
// div.innerText = object14('xxx');




















console.log('------------------');

function runObjectExample() {
    const object = {
        name: 'Bob',
        age: 22,
    };
    object.salary = 200000;
    const output = JSON.stringify(object, null, 2);
    document.getElementById('outputObject').textContent = output;
}

function runObject2Example() {
    const object2 = new Object();
    object2.name = 'Martin';
    object2.age = 35;
    object2.hello = 'hello';
    const output = JSON.stringify(object2, null, 2);
    document.getElementById('outputObject2').textContent = output;
}

function runObject3Example() {
    const object3 = {
        name: 'John',
        age: 19
    };
    const personName = object3.name;
    document.getElementById('outputObject3').textContent = personName;
}

function runObject4Example() {
    const object4 = {
        lastName: 'Miller',
        'person-name': 'Bobby'
    };
    const output = JSON.stringify(object4, null, 2);
    document.getElementById('outputObject4').textContent = output;
}

function runObject5Example() {
    const object5 = {
        name: undefined,
        age: 19
    };
    delete object5.name;
    const output = JSON.stringify(object5, null, 2);
    document.getElementById('outputObject5').textContent = output;
}

function runObject6Example() {
    const object6 = {
        name: 'Slava',
        age: 19
    };
    const keys = Object.keys(object6);
    const values = Object.values(object6);
    const entries = Object.entries(object6);
    const output = `Keys: ${keys.join(', ')}\nValues: ${values.join(', ')}\nEntries: ${JSON.stringify(entries)}`;
    document.getElementById('outputObject6').textContent = output;
}