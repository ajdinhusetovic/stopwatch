
// elements
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const ten = document.querySelector('#tens');

const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');



let seconds = 00;
let minutes = 00;
let hours = 00;
let interval;

// functions

const start = () => {
    seconds++;
    if (seconds < 10) {
        second.textContent = `0${seconds}`;
    }
    if (seconds > 9) {
        second.textContent = seconds;
    }
    if (seconds > 59) {
        minutes++;
        seconds = 00;
        minute.textContent = `0${minutes}`;
        second.textContent = `0${seconds}`;
    }
    if (minutes < 10) {
        minute.textContent = `0${minutes}`; 
    }
    if (minutes > 9) {
        minute.textContent = minutes;
    }
    if (minutes > 59) {
        hours++;
        minutes = 00;
        hour.textContent = `0${hours}`;
        minute.textContent = `0${minutes}`;
    }
    if (hours < 10) {
        hour.textContent = `0${hours}`;
    }
    if (hours > 9) {
        hour.textContent = hours;
    }

}

const reset = () => {
    seconds = 00;
    minutes = 00;
    hours = 00;

    second.textContent = `0${seconds}`;
    minute.textContent = `0${minutes} :`;
    hour.textContent = `0${hours} :`;

    clearInterval(interval);
    startButton.disabled = false;
}


// event listeners
startButton.addEventListener('click', () => {
    interval = setInterval(start, 1000);
    startButton.disabled = true;
});

pauseButton.addEventListener('click', () => {
    clearInterval(interval);
    startButton.disabled = false;
});

resetButton.addEventListener('click', reset);