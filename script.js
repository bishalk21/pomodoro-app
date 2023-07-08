const workBtn = document.getElementById("work");
const breakBtn = document.getElementById("break");
const playBtn = document.getElementById("play");
const resetBtn = document.getElementById("reset");
const minElement = document.getElementById("minutes");
const secElement = document.getElementById("seconds");

let minutes = 25;
let seconds = 0;
let isRunning = false;
let interval;

resetBtn.style.display = "none";

function updateTimer() {
  seconds--;
  if (seconds < 0) {
    if (minutes === 0) {
      stopTimer();
      return;
    }
    seconds = 59;
    minutes--;
  }
  update();
}

function update() {
  minElement.textContent = minutes <= 9 ? "0" + minutes : minutes;
  secElement.textContent = seconds <= 9 ? "0" + seconds : seconds;
}

function stopTimer() {
  clearInterval(interval);
  isRunning = false;
}

playBtn.addEventListener("click", (e) => {
  if (!isRunning) {
    interval = setInterval(updateTimer, 1000);
    isRunning = true;
    e.target.className = "pause";
    resetBtn.style.display = "block";
  } else {
    stopTimer();
    e.target.className = "play";
  }
});

resetBtn.addEventListener("click", () => {
  stopTimer();
  minutes = 25;
  seconds = 0;
  update();
  resetBtn.style.display = "none";
});

workBtn.addEventListener("click", () => {
  playBtn.className = "play";
  stopTimer();
  minutes = 25;
  seconds = 0;
  update();
});

breakBtn.addEventListener("click", () => {
  playBtn.className = "play";
  stopTimer();
  minutes = 5;
  seconds = 0;
  update();
});
