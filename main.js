let fig = document.querySelector(".figure-num");
let word = document.querySelector(".unit")

const leaveDate = new Date("2024-06-14");
let now = new Date();

let difMilliSeconds = leaveDate - now;
let difSeconds = difMilliSeconds / 1000;
let difMinutes = difSeconds / 60;
let difHours = difMinutes / 60;
let difDays = difHours / 24;


fig.textContent = Math.round(difMilliSeconds).toString()

const btnLeft = document.querySelector(".btnLeft")
const btnRight = document.querySelector(".btnRight")


const units = [difMilliSeconds, difSeconds, difMinutes, difHours, difDays];
const words = ["Milliseconds", "Seconds", "Minutes", "Hours", "Days"];
let currentUnit = 0;


btnLeft.addEventListener('click', () => {
    if (currentUnit !== 0) {
        currentUnit -= 1;
    } else {
        currentUnit = units.length - 1;
    }

    updateUnits();
})

btnRight.addEventListener('click', () => {
    if (currentUnit !== units.length - 1) {
        currentUnit += 1;
    } else {
        currentUnit = 0 ;
    }

    updateUnits();
})


function updateUnits() {
    now = new Date(); // Get the current time each time the function is called
    difMilliSeconds = leaveDate - now;
    difSeconds = difMilliSeconds / 1000;
    difMinutes = difSeconds / 60;
    difHours = difMinutes / 60;
    difDays = difHours / 24;

    units[0] = difMilliSeconds;
    units[1] = difSeconds;
    units[2] = difMinutes;
    units[3] = difHours;
    units[4] = difDays;

    fig.textContent = Math.round(units[currentUnit]).toString()
    word.textContent =  words[currentUnit]
}



setInterval(updateUnits, 100);


