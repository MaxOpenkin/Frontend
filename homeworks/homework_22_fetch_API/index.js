document.getElementById('getFact').addEventListener('click', function () {
    const button = this;
    button.disabled = true;
    const factContainer = document.getElementById('fact');
    factContainer.innerHTML = 'Загрузка...';
    factContainer.className = '';

    fetch('https://catfact.ninja/fact')
        .then(response => {
            if (!response.ok) {
                throw new Error('Сетевая ошибка: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            factContainer.innerHTML = data.fact;
        })
        .catch(error => {
            factContainer.innerHTML = 'Ошибка при получении факта: ' + error;
            factContainer.className = 'error';
        })
        .finally(() => {
            button.disabled = false;
        });
});