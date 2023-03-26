// variables to store time
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;
let timerInterval;

// function to start the timer
function startTimer() {
  timerInterval = () => {
    // increasing the seconds timer
    seconds++;

    // incrementing minutes, hours, days
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    if (hours === 24) {
      hours = 0;
      days++;
    }

    // display the timer
    document.getElementById("timer").textContent = `${days
      .toString()
      .padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  setInterval(timerInterval, 1000);
}

// calling startTimer function
startTimer();

// function to clear the timer on button click
function clearTimer() {
  // stop running the function every 1000ms
  clearInterval(timerInterval);

  // reset all variables to 0
  seconds = 0;
  minutes = 0;
  hours = 0;
  days = 0;

  // update the timer div to show 0000
  document.getElementById("timer").textContent = "00:00:00:00";

  //restart the timer
  startTimer();
}

// add event listener on button to clear timer onClick
document.getElementById("reset-btn").addEventListener("click", clearTimer);
