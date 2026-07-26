const raceDate = new Date("September 20, 2026");

function countdown(){

const today = new Date();

const difference = raceDate - today;

const days = Math.ceil(
difference / (1000*60*60*24)
);

document.getElementById("countdown").innerHTML =
days + " days until race day";

}

countdown();