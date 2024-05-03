document.addEventListener('DOMContentLoaded', function() {
    fetchProducts();
    document.getElementById('searchInput').addEventListener('input', searchProducts);
    document.getElementById('sortPrice').addEventListener('change', applySort);
    document.getElementById('showAll').addEventListener('click', fetchProducts);
});

function fetchProducts() {
    fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        displayProducts(data.products);
        populateCategories(data.products);
        applySort();
    });
};

function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach(product => {
        productList.innerHTML += createProductCard(product);
    });
};

function populateCategories(products) {
    const categories = new Set();
    products.forEach(product => categories.add(product.category));
    const categoryList = document.getElementById('categoryList');
    categoryList.innerHTML = '';

    // Добавление категорий
    categories.forEach(category => {
        const categoryItem = document.createElement('li');
        categoryItem.textContent = category;
        categoryItem.addEventListener('click', () => filterByCategory(category));
        categoryList.appendChild(categoryItem);
    });
};

function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.thumbnail}" alt="${product.title}" style="width:100%;">
            <h4>${product.title}</h4>
            <p>${product.description}</p>
            <p>Цена: ${product.price} ₽</p>
        </div>
    `;
};

function filterByCategory(category) {
    fetch(`https://dummyjson.com/products/category/${category}`)
    .then(response => response.json())
    .then(data => displayProducts(data.products));
};

function searchProducts() {
    const query = document.getElementById('searchInput').value;
    fetch(`https://dummyjson.com/products/search?q=${query}`)
    .then(response => response.json())
    .then(data => displayProducts(data.products));
};

function applySort() {
    const sortValue = document.getElementById('sortPrice').value;
    let products = Array.from(document.getElementById('productList').children);
    products = products.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('p:last-of-type').textContent.replace('Цена: ', '').replace(' ₽', ''));
        const priceB = parseFloat(b.querySelector('p:last-of-type').textContent.replace('Цена: ', '').replace(' ₽', ''));
        return sortValue === 'asc' ? priceA - priceB : priceB - priceA;
    });
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    products.forEach(product => productList.appendChild(product));
};