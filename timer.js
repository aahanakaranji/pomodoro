// Get minutes from localStorage
let minutes = parseInt(localStorage.getItem("selectedTime") || "0");
let seconds = 0;

document.querySelector(".duration-label").textContent = `${minutes} minutes`;

function updateDisplay() {
  const minBox = document.getElementById("minutes");
  const secBox = document.getElementById("seconds");

  minBox.textContent = minutes.toString().padStart(2, "0");
  secBox.textContent = seconds.toString().padStart(2, "0");
}

function tick() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    // play sound here
    document.querySelector(".message").textContent = "⏰ Time’s up!";
    return;
  }

  if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  updateDisplay();
}

updateDisplay();
const timer = setInterval(tick, 1000);
