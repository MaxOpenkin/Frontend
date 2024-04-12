// window.document.writeln('hello world!');
// document.writeln('hello world!');

// sozdaem element div
const div1 = document.createElement('div');
div1.innerText = 'div1'; // text v elemente
document.body.appendChild(div1); // dobavlyaem sozdanyi element na stranitcu

const h1 = document.createElement('h1');
h1.innerText = 'Zagolovok 1 level';
document.body.appendChild(h1);

// -------------------

const div2 = document.createElement('div');
const h2 = document.createElement('h2');
h2.innerText = 'Zagolovok 2 level';

document.body.appendChild(div2);
div2.appendChild(h2);

// -------------------

const myDivId = document.getElementById('my-div-id');
const myDivList1 = document.getElementsByClassName('my-div-class');
const myDivList2 = document.getElementsByClassName('div');

// -------------------

const div3 = document.getElementById('my-div-id');
div3.className = 'test'; // dobavit class k elementu (peretret drugie classy)
console.log(div3);
div3.classList.add('test'); // dabavit class 
// div3.id = 'xxx'; // perezapis id

const div4 = document.querySelector('.my-div-class');
const div5 = document.querySelectorAll('.my-div-class');

const div6 = document.getElementById('my-div-id');
div6.innerHTML = ul1;

// udalenie elementa
const deleteElement = () => {
    const divForDelete = document.getElementById('my-div-id');
    divForDelete.remove();
}


document.addEventListener('DOMContentLoaded', function () {
    const deleteElement = () => {
        const divForDelete = document.getElementById('my-div-id');
        if (divForDelete) {
            divForDelete.remove();
        } else {
            console.error('Element not found!');
        }
    };

    const button = document.querySelector('button');
    if (button) {
        button.onclick = deleteElement;
    } else {
        console.error('Button not found!');
    }
});

// Этот подход убедится, что ваши элементы и функции будут полностью доступны перед тем,
// как присваивать события или выполнять действия.


