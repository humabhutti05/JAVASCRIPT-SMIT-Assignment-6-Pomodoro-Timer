let timer;
let minutes = 25;
let seconds = 0;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        alert("Pomodoro completed!");
    } else {
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        displayTime();
    }
}

function restartTimer() {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    displayTime();
}

function openSettings() {
    document.getElementById('settings-container').style.display = 'flex';
}

function adjustTime(action) {
    if (action === 'increase') {
        minutes++;
    } else if (action === 'decrease' && minutes > 0) {
        minutes--;
    }
    displayTime();
}

function displayTime() {
    document.getElementById('timer').innerText = `${padZero(minutes)}:${padZero(seconds)}`;
    document.getElementById('time').innerText = `${padZero(minutes)}:00`;
}

function padZero(value) {
    return value < 10 ? `0${value}` : value;
}