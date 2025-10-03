
"use strict";

const start = document
  .getElementById("start")
  .addEventListener("click", startTimer);
const stop = document
  .getElementById("stop")
  .addEventListener("click", stopTimer);
const reset = document
  .getElementById("reset")
  .addEventListener("click", resetTimer);
const timerDisplay = document.getElementById("timer");
let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let buttonClicked = null;

/**
 * Updates the timer display on the frontend.
 * Pads hours, minutes, and seconds with leading zeros.
 * Miliseconds are padded to 3 digits.
**/
function updateDisplay() {
  timerDisplay.textContent = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(
    miliseconds
  ).padStart(3, "0")}`;
  return timerDisplay;
}

/**
 * Starts the stopwatch timer.
 * Prevents multiple intervals from being set.
 * Increments miliseconds, seconds, minutes, and hours accordingly.
**/
function startTimer() {
  if (buttonClicked) return;
  buttonClicked = setInterval(() => {
    miliseconds++;
    if (miliseconds === 1000) {
      miliseconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1); // Add interval time in microseconds (1 microsecond for milliseconds)
}

/**
 * Stops the stopwatch timer.
 * Clears the interval if running.
**/
function stopTimer() {
  clearInterval(buttonClicked);
  buttonClicked = null;
}

/**
 * Resets the stopwatch timer to zero.
 * Updates the display to show all zeros.
**/
function resetTimer() {
  miliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}
