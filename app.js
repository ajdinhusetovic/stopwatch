
// elements
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const ten = document.querySelector('#tens');

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

let a = 0;

let seconds = 00;
let hours = 00;
let interval;

// functions

const as = () => {
    a++;
    second.textContent = a;
}


// event listeners
startButton.addEventListener('click', () => {
    interval = setInterval(as, 1000);
    startButton.disabled = true;
});

stopButton.addEventListener('click', () => {
    clearInterval(interval);
    startButton.disabled = false;
})