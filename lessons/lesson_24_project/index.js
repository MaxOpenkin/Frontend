
document.getElementById('fetch-weather-btn').addEventListener('click', async () => {
    const city = document.getElementById('city-input').value;
    const units = document.getElementById('units-select').value;
    const apiKey = 'ce77dfeb9822a56d03a0cfd3157c9af0';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=ru`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        updateWeatherData(data, city, units);
    } catch (error) {
        alert('Ошибка запроса: ' + error.message);
    }
});

function updateWeatherData(data, city, units) {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dateTimeFormat = new Intl.DateTimeFormat('ru-RU', options);

    document.getElementById('location-name').textContent = `Погода в ${city}`;
    document.getElementById('current-time').innerHTML = `Текущие дата и время:<br>${dateTimeFormat.format(now)}`;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.getElementById('temperature').innerHTML = formatTemperature(data.main.temp, units);
    document.getElementById('description').innerHTML = `${data.weather[0].description}, ощущается как ${formatTemperature(data.main.feels_like, units)}`;
    document.getElementById('wind').textContent = `Ветер: ${formatWind(data.wind.speed, units)}`;
    document.getElementById('humidity').textContent = `Влажность: ${data.main.humidity}%`;
    document.getElementById('pressure').textContent = `Давление: ${data.main.pressure} мм рт. ст.`;
    document.getElementById('weather-result').style.display = 'block';
};

function formatTemperature(temp, units) {
    let unitSymbol = '°C';
    if (units === 'imperial') {
        unitSymbol = '°F';
    } else if (units === 'standard') {
        unitSymbol = 'K';
    }

    const sign = temp > 0 ? '+' : '';
    const color = temp > 0 ? '#ff8c00' : '#00f'; // Оранжевый для положительной, синий для отрицательной

    return `<span style="color:${color};">${sign}${Math.round(temp)}${unitSymbol}</span>`;
};

function formatWind(speed, units) {
    return units === 'imperial' ? `${Math.round(speed)} мили/ч` : `${Math.round(speed)} м/с`;
};