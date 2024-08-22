//containers
const timeContainer = document.getElementById('container');
const alertDiv = document.getElementById('alert');

//date declarations
let currentDate = new Date();
let twentyFive = new Date("January 1, 2025");

//date display algorithms
let dateEquation = Math.floor(((twentyFive - currentDate) / 1000) / 60);
let dateArray = dateEquation.toString().split('')
let minutesComma = dateArray.slice(0,3).join('') + "," + dateArray.slice(3,6).join('');

//display time
timeContainer.innerHTML = minutesComma;

//refresh after one minute
 setTimeout(() => {
     window.location.reload();
 }, 60000)

//hide alert after 5 seconds
 setTimeout(() => {
    alertDiv.style.visibility = "hidden";
 }, 5000)

 //the only website designed to make you bounce

  document.querySelectorAll('.seconds').forEach((second, index) => {
     setTimeout(() => {
         second.style.fill = "crimson";
     }, (index + 1) * 1000)
 })