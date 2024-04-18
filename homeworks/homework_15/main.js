// Задание 1
// Есть массив чисел - нужно выбрать 
// все числа больше 5 (использовать функцию высшего порядка)

// const array = [1, 3, 5, 8, 13, 2, 4, 7, 9, 1, 4];
// const res = array.filter(number => number > 5);
// console.log(res);

// Задание 2
// Есть массив продуктов: каждый продукт - 
// это объект с полями: имя, цена, производитель 
// значения можно задать на свое усмотрение написать 
// функцию фильтрации продуктов цена выше 5000

// const products = [
//     { name: "Laptop", price: 55000, manufacturer: "Dell" },
//     { name: "Smartphone", price: 30000, manufacturer: "Samsung" },
//     { name: "Tablet", price: 45000, manufacturer: "Apple" }
// ];
// const expensiveProducts = products.filter(product => product.price > 50000);
// console.log(expensiveProducts);

// Задание 3
// Сверстать страничку с продуктами из предыдущей задачи продукты отображаются один за другим - 
// верстка на ваше усмотрение добавить инпут куда пользователь может ввести цену - 
// после ввода продукты фильтруются по цене меньше или равно указанной пользователем

// DOMContentLoaded: Это событие срабатывает, когда весь HTML был полностью загружен,
// не дожидаясь окончания загрузки таблиц стилей, изображений и фреймов.
// Это идеальное место для инициализации JavaScript-кода.

// Функция init: Эта функция вызывается при загрузке страницы. 
// Она отвечает за начальное отображение продуктов и настройку обработчиков событий.

document.addEventListener('DOMContentLoaded', init);

function init() {
    const products = [
        { name: "Laptop", price: 1500, manufacturer: "Dell" },
        { name: "Laptop", price: 2500, manufacturer: "Dell" },
        { name: "Smartphone", price: 700, manufacturer: "Samsung" },
        { name: "Smartphone", price: 900, manufacturer: "Apple" },
        { name: "Smartphone", price: 1100, manufacturer: "Apple" },
        { name: "Tablet", price: 1000, manufacturer: "Apple" },
        { name: "Tablet", price: 700, manufacturer: "Samsung" }
    ];

    displayProducts(products);
    setUpEventListeners(products);
}

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Очищаем список продуктов
    if (products.length === 0) {
        productList.innerHTML = '<p>No products match the specified criteria.</p>';
    } else {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `<strong>${product.name}</strong> - ${product.price} $ (${product.manufacturer})`;
            productList.appendChild(productElement);
        });
    }
}

function filterProducts(products) {
    const maxPrice = parseInt(document.getElementById('priceFilter').value);
    if (!isNaN(maxPrice) && maxPrice >= 0) {
        const filteredProducts = products.filter(product => product.price <= maxPrice);
        displayProducts(filteredProducts);
    } else {
        displayProducts(products);
    }
}

function setUpEventListeners(products) {
    const priceInput = document.getElementById('priceFilter');
    priceInput.addEventListener('input', () => filterProducts(products));
    document.getElementById('filterButton').addEventListener('click', () => filterProducts(products));
    document.getElementById('resetButton').addEventListener('click', () => displayProducts(products));
}