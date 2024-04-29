// Задание:
// Создайте функцию delay, которая принимает число (value) и возвращает промис. 
// Промис должен разрешиться через 5 секунд и вернуть удвоенное значение аргумента value (в resolve). 
// Если аргумент не является числом, 
// промис должен быть отклонен с текстом ошибки "The argument is not a number" (в reject)


function delay(value) {
    return new Promise((resolve, reject) => {
        if (typeof value !== 'number') {
            reject('The argument is not a number');
            return;
        }

        setTimeout(() => {
            resolve(value * 2);
        }, 5000);
    });
}

delay(10)
    .then(result => {
        console.log('Result:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });

delay('test')
    .then(result => {
        console.log('Result:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });



// Равносильно с использованием Async/Await:
// Строка 1: Определение асинхронной функции delay с параметрами value (значение для обработки) 
// и delayTime (время задержки в миллисекундах, по умолчанию 5000).
// Строка 3-5: Проверка типа переменной value. 
// Если переменная не является числом, функция генерирует исключение TypeError, 
// которое затем может быть перехвачено и обработано в блоке catch.
// Строка 7: Создание и возвращение нового промиса. Внутри промиса используется функция setTimeout, 
// которая позволяет отложить выполнение кода на указанное в delayTime время.
// Строка 7, вложенная: Функция setTimeout вызывает переданную ей функцию, 
// которая умножает входное значение value на 2 и передает результат функции resolve, тем самым завершая промис успешно.


async function delay(value, delayTime = 5000) {
    if (typeof value !== 'number') {
        throw new TypeError('The argument is not a number');
    }

    return new Promise(resolve => setTimeout(() => resolve(value * 2), delayTime));
};

async function runDelayOperations() {
    try {
        const result = await delay(10);
        console.log('Result:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }

    try {
        const result = await delay('test');
        console.log('Result:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

runDelayOperations();

// Объяснение основной функции runDelayOperations:
// Строка 1: Определение асинхронной функции runDelayOperations, которая не принимает параметров.
// Строка 2-6: Блок try/catch для асинхронного вызова функции delay с числовым аргументом.
// Использование await позволяет "ожидать" решение промиса, и после получения результата выводить его в консоль.
// Строка 7-11: Аналогичный блок try/catch для демонстрации обработки ошибки, если в функцию delay передан не числовой аргумент.
// Этот подход позволяет легко управлять асинхронными операциями и делает код более читаемым и поддерживаемым.