document.getElementById('password-form').addEventListener('submit', (event)=> {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const passwordRepeat = document.getElementById('password-repeat').value;
    const message = document.getElementById('message');

    if (password === passwordRepeat) {
        message.textContent = 'Данные отправлены';
        message.className = 'success';
        this.reset(); // Очищаем форму
    } else {
        message.textContent = 'Пароли не совпадают';
        message.className = 'error';
    }
});



document.getElementById('quadratic-form').addEventListener('submit', (event)=> {
    event.preventDefault();
    const a = parseFloat(document.getElementById('a').value);
    if (a === 0) { alert('Коэффициент a не может быть 0'); return; }
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const D = b*b - 4*a*c;

    let message = `Дискриминант (D) = ${D}. `;
    if (D > 0) {
        const x1 = (-b + Math.sqrt(D)) / (2*a);
        const x2 = (-b - Math.sqrt(D)) / (2*a);
        message += `Корни уравнения: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
    } else if (D === 0) {
        const x1 = -b / (2*a);
        message += `Уравнение имеет один корень: x = ${x1.toFixed(2)}`;
    } else {
        const realPart = (-b / (2*a)).toFixed(2);
        const imaginaryPart = (Math.sqrt(-D) / (2*a)).toFixed(2);
        message += `Комплексные корни: x1 = ${realPart} + ${imaginaryPart}i, x2 = ${realPart} - ${imaginaryPart}i`;
    }

    document.getElementById('result').innerHTML = message;
});