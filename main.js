let fig = document.querySelector(".figure-num");
let word = document.querySelector(".unit")

const leaveDate = new Date("2024-06-14");
const today = new Date();

const difMilliSeconds = leaveDate - today;
const difSeconds = difMilliSeconds / 1000;
const difMinutes = difSeconds / 60;
const difHours = difMinutes / 60;
const difDays = difHours / 24;

console.log(difMilliSeconds + " Milliseconds")
console.log(difSeconds + " Seconds")
console.log(difMinutes + " Minutes")
console.log(difHours + " Hours")
console.log(difDays + " Days")

fig.textContent = Math.round(difMilliSeconds).toString()

const btnLeft = document.querySelector(".btnLeft")
const btnRight = document.querySelector(".btnRight")


const units = [difSeconds, difMinutes, difHours, difDays];
const words = ["Seconds", "Minutes", "Hours", "Days"];
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
    fig.textContent = Math.round(units[currentUnit]).toString()
    word.textContent =  words[currentUnit]
}






