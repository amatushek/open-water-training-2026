function showWeek(week) {

    const container = document.getElementById("workoutContainer");

    if (workouts[week]) {
        container.innerHTML = workouts[week];
    } else {
        container.innerHTML = "<h2>Workout not found</h2>";
    }

}


const raceDate = new Date("September 20, 2026");


function updateCountdown() {

    const today = new Date();

    const difference = raceDate - today;

    const days = Math.ceil(
        difference / (1000 * 60 * 60 * 24)
    );

    document.getElementById("countdown").innerHTML =
        "<h2>" + days + " Days Until Race Day</h2>";

}


updateCountdown();

showWeek(1);