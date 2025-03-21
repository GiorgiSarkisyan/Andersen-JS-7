let stopwatchStartTime = 0,
  elapsedTime = 0,
  stopwatchRunning = false;
let timerTime = 0,
  timerRunning = false;

function formatTime(ms) {
  let mins = Math.floor(ms / 60000);
  let secs = Math.floor((ms % 60000) / 1000);
  let millis = Math.floor((ms % 1000) / 10);
  return `${mins < 10 ? "0" + mins : mins}:${secs < 10 ? "0" + secs : secs}:${
    millis < 10 ? "0" + millis : millis
  }`;
}

function updateStopwatch() {
  let currentTime = stopwatchRunning
    ? Date.now() - stopwatchStartTime + elapsedTime
    : elapsedTime;
  document.getElementById("stopwatchDisplay").textContent =
    formatTime(currentTime);
}

function startStopwatch() {
  if (!stopwatchRunning) {
    stopwatchRunning = true;
    stopwatchStartTime = Date.now();
    setInterval(updateStopwatch, 10);
  }
}

function pauseStopwatch() {
  if (stopwatchRunning) {
    elapsedTime += Date.now() - stopwatchStartTime;
    stopwatchRunning = false;
  }
}

function resetStopwatch() {
  elapsedTime = 0;
  stopwatchRunning = false;
  updateStopwatch();
}

function setTimer() {
  let input = document.getElementById("timerInput").value.split(":");
  let mins = parseInt(input[0] || "0");
  let secs = parseInt(input[1] || "0");
  timerTime = (mins * 60 + secs) * 1000;
  updateTimer();
}

function updateTimer() {
  let currentTime = timerRunning
    ? timerTime - (Date.now() - timerStartTime)
    : timerTime;
  if (currentTime <= 0) {
    document.getElementById("timerDisplay").textContent = "00:00:00";
    timerRunning = false;
  } else {
    document.getElementById("timerDisplay").textContent =
      formatTime(currentTime);
  }
}

function startTimer() {
  if (!timerRunning && timerTime > 0) {
    timerRunning = true;
    timerStartTime = Date.now();
    setInterval(updateTimer, 10);
  }
}

function pauseTimer() {
  if (timerRunning) {
    timerTime -= Date.now() - timerStartTime;
    timerRunning = false;
  }
}

function resetTimer() {
  timerTime = 0;
  timerRunning = false;
  updateTimer();
}
