let timer = null;

document.querySelectorAll('.time-btn').forEach(button => {
    button.addEventListener('click', event => {
        const unit = event.target.getAttribute('data-unit');
        const change = parseInt(event.target.getAttribute('data-change'), 10);
        changeTime(unit, change);
    });
});

document.getElementById('start').addEventListener('click', () => {
    if (timer === null) {
        startTimer();
    }
});

document.getElementById('pause').addEventListener('click', () => {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    resetTimer();
});

function changeTime(unit, change) {
    let unitSpan = {
        'hours': document.getElementById('hours'),
        'minutes': document.getElementById('minutes'),
        'seconds': document.getElementById('seconds')
    }[unit];
    let newValue = parseInt(unitSpan.textContent) + change;
    if (newValue < 0) newValue = 59;
    if (newValue > 59) newValue = 0;
    unitSpan.textContent = newValue.toString().padStart(2, '0');
}

function startTimer() {
    timer = setInterval(() => {
        decrementTime();
    }, 1000);
}

function decrementTime() {
    let hours = parseInt(document.getElementById('hours').textContent);
    let minutes = parseInt(document.getElementById('minutes').textContent);
    let seconds = parseInt(document.getElementById('seconds').textContent);
    
    seconds--;

    if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
                hours = 0;
                minutes = 0;
                seconds = 0;
                clearInterval(timer);
                timer = null;
                alert("Время вышло!");
                updateDisplay(hours, minutes, seconds);
                return;
            }
        }
    }

    updateDisplay(hours, minutes, seconds);
}

function updateDisplay(hours, minutes, seconds) {
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

function resetTimer() {
    updateDisplay(0, 0, 0);
}