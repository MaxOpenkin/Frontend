document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('showUniversities').addEventListener('click', fetchUniversities);
});

// async function fetchUniversities() {
//     const country = document.getElementById('countrySelect').value;
//     const url = `http://universities.hipolabs.com/search?country=${country}`;
//     const container = document.getElementById('universitiesContainer');
//     try {
//         container.innerHTML = `<p>${translations.loadingMessage}</p>`; // Используем перевод для сообщения о загрузке
//         const response = await fetch(url);
//         const data = await response.json();
//         container.innerHTML = '';
//         data.forEach(university => {
//             const div = document.createElement('div');
//             div.textContent = `${university.name} - ${university.web_pages.join(', ')}`;
//             container.appendChild(div);
//         });
//     } catch (error) {
//         console.error('Error while retrieving data: ', error);
//         container.innerHTML = `<p>${translations.errorMessage}: ${error.message}</p>`; // Используем перевод для сообщения об ошибке
//     }
// };


// Функция для получения данных от API:
// Отвечает за отправку запроса к API и возвращает полученные данные или ошибку.

async function fetchUniversityData(country) {
    const url = `http://universities.hipolabs.com/search?country=${country}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
};


// Функция для отображения университетов:
// Принимает данные об университетах и отображает их в заданном контейнере.

function displayUniversities(data, container) {
    container.innerHTML = ''; // Очищаем контейнер
    data.forEach(university => {
        const div = document.createElement('div');
        div.textContent = `${university.name} - ${university.web_pages.join(', ')}`;
        container.appendChild(div);
    });
};


// Функция для обработки ошибок:
// Показывает сообщение об ошибке в заданном контейнере.

function showError(error, container) {
    console.error('Error while retrieving data: ', error);
    container.innerHTML = `<p>${translations.errorMessage}: ${error.message}</p>`;
};


async function fetchUniversities() {
    const country = document.getElementById('countrySelect').value;
    const container = document.getElementById('universitiesContainer');
    container.innerHTML = `<p>${translations.loadingMessage}</p>`; // Показываем сообщение о загрузке

    try {
        const data = await fetchUniversityData(country);
        displayUniversities(data, container);
    } catch (error) {
        showError(error, container);
    }
};









let translations = {};

function loadLocale(lang) {
    fetch(`locales/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            translations = data; // Сохраняем загруженные переводы в глобальной переменной
            updateTexts();
        })
        .catch(error => console.error('Error loading the locale:', error));
};

function updateTexts() {
    document.title = translations.title;
    document.getElementById('pageTitle').textContent = translations.title;
    document.getElementById('description').textContent = translations.description;
    document.getElementById('showUniversities').textContent = translations.showUniversities;
    // Другие текстовые элементы аналогично

    const countrySelect = document.getElementById('countrySelect');
    const countries = translations.countries;
    for (let i = 0; i < countrySelect.options.length; i++) {
        const opt = countrySelect.options[i];
        opt.textContent = countries[opt.value];
    }
};

document.getElementById('languageSelect').addEventListener('change', function () {
    loadLocale(this.value);
});

document.addEventListener('DOMContentLoaded', function () {
    const savedLang = localStorage.getItem('preferredLanguage') || 'ru'; // Загрузка сохраненного языка
    document.getElementById('languageSelect').value = savedLang;
    loadLocale(savedLang);
});