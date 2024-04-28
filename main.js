let fig = document.querySelector(".figure-num");
let word = document.querySelector(".unit")

const leaveDate = new Date("2024-06-14T16:30:00");
let now = new Date();

let difMilliSeconds = leaveDate - now;
let difSeconds = difMilliSeconds / 1000;
let difMinutes = difSeconds / 60;
let difHours = difMinutes / 60;
let difDays = difHours / 24;
let difWeeks = difDays / 7;
let difMonths = difWeeks / 4;
let difYears = difDays / 365 * 100;
let totalShifts = getShifts(now);

let tab1 = document.querySelector('.tab1');
let tab2 = document.querySelector('.tab2');
let tab3 = document.querySelector('.tab3');
let tab4 = document.querySelector('.tab4');
let tab5 = document.querySelector('.tab5');
let tab6 = document.querySelector('.tab6');
let tab7 = document.querySelector('.tab7');
let tab8 = document.querySelector('.tab8');
let tab9 = document.querySelector('.tab9');




fig.textContent = Math.round(difMilliSeconds).toString()

const btnLeft = document.querySelector(".btnLeft")
const btnRight = document.querySelector(".btnRight")


const units = [difMilliSeconds, difSeconds, difMinutes, difHours, difDays, difWeeks, difMonths, difYears, totalShifts];
const words = ["Milliseconds", "Seconds", "Minutes", "Hours", "Days", "Weeks", "Months", "Years", "Shifts"];
const tabs = [tab1, tab2, tab3, tab4, tab5, tab6, tab7, tab8, tab9]
let currentUnit = 0;

tab1.style.backgroundColor = '#F4CE14'

btnLeft.addEventListener('click', () => {
    // Iterate through the array of units

    if (currentUnit !== 0) {
        currentUnit -= 1;
    } else {
        currentUnit = units.length - 1;
    }

    updateTime();
    updateText()
    updateCurrentTab()

})

btnRight.addEventListener('click', () => {
    // Iterate through the array of units

    if (currentUnit !== units.length - 1) {
        currentUnit += 1;
    } else {
        currentUnit = 0 ;
    }

    updateTime();
    updateText();
    updateCurrentTab();
    getShifts();
})


function updateTime() {
    now = new Date(); // Get the current time each time the function is called
    // Re calculate variables
    difMilliSeconds = leaveDate - now
    difSeconds = difMilliSeconds / 1000;
    difMinutes = difSeconds / 60;
    difHours = difMinutes / 60;
    difDays = difHours / 24;
    difWeeks = difDays / 7;
    difMonths = difWeeks / 4.345;
    difYears = difDays / 365;

    // Updating the array
    units[0] = difMilliSeconds;
    units[1] = difSeconds;
    units[2] = difMinutes;
    units[3] = difHours;
    units[4] = difDays;
    units[5] = difWeeks;
    units[6] = difMonths;
    units[7] = difYears;
}


function updateText() {
    if (currentUnit >= 5) {
        fig.textContent = parseFloat(units[currentUnit].toFixed(2).toString())
    } else {
        fig.textContent = Math.round(units[currentUnit]).toString()
    }

    word.textContent =  words[currentUnit]
}

function updateCurrentTab() {
    for (let tab of tabs) {
        tab.style.backgroundColor = '#cecece';
    }

    tabs[currentUnit].style.backgroundColor = '#F4CE14';
}

function getShifts(now) {
    let shifts = 0;
    let currentDate = now;

    while (now <= leaveDate) {
        const day = now.getDay();

        if (day !== 0 && day !== 6) {
            shifts ++;
        }

        currentDate.setDate(currentDate.getDate() + 1);
    }
    return shifts
}
// Below line makes the code update live.
// setInterval(updateUnits, 100);


