function showWeek(week){

document.getElementById("workoutContainer").innerHTML =
workouts[week];

}

const raceDate = new Date("September 20, 2026");

function updateCountdown(){

const today = new Date();

const diff = raceDate - today;

const days = Math.ceil(diff/(1000*60*60*24));

document.getElementById("countdown").innerHTML =
"<h2>"+days+" Days Until Race</h2>";

}

updateCountdown();

showWeek(1);