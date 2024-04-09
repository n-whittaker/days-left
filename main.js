let fig = document.querySelector(".figure");

const leaveDate = new Date("2024-06-13");
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

fig.textContent = Math.round(difDays).toString()





