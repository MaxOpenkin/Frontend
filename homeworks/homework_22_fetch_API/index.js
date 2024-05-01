// document.getElementById('getFact').addEventListener('click', function () {
//     const button = this;
//     button.disabled = true;
//     const factContainer = document.getElementById('fact');
//     factContainer.innerHTML = 'Loading...';
//     factContainer.className = '';

//     fetch('https://catfact.ninja/fact')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network error: ' + response.status);
//             }
//             return response.json();
//         })
//         .then(data => {
//             factContainer.innerHTML = data.fact;
//         })
//         .catch(error => {
//             factContainer.innerHTML = 'Error when receiving a fact: ' + error;
//             factContainer.className = 'error';
//         })
//         .finally(() => {
//             button.disabled = false;
//         });
// });







document.getElementById('getFact').addEventListener('click', function () {
    const button = this;
    button.disabled = true;
    const factContainer = document.getElementById('fact');
    factContainer.innerHTML = 'Loading...';
    factContainer.className = '';

    // Выполняем два запроса к API
    Promise.all([
        fetch('https://catfact.ninja/fact'),
        fetch('https://catfact.ninja/fact')
    ])
    .then(responses => {
        // Проверяем, что оба ответа в порядке
        responses.forEach(response => {
            if (!response.ok) {
                throw new Error('Network error: ' + response.status);
            }
        });
        // Преобразуем оба ответа в JSON
        return Promise.all(responses.map(response => response.json()));
    })
    .then(data => {
        // Обновляем содержимое контейнера фактами
        factContainer.innerHTML = data[0].fact + "<br><br>" + data[1].fact;
    })
    .catch(error => {
        // Обработка ошибок
        factContainer.innerHTML = 'Error when receiving a fact: ' + error;
        factContainer.className = 'error';
    })
    .finally(() => {
        // Восстанавливаем кнопку в исходное состояние
        button.disabled = false;
    });
});