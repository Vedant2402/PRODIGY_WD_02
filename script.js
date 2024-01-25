const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const secondsSpan = document.getElementById('seconds');
const millisecondsSpan = document.getElementById('milliseconds');
const lapList = document.getElementById('lap-list');

let startTime = null;
let elapsedTime = 0;
let isRunning = false;

startButton.addEventListener('click', () => {
  if (!isRunning) {
    startTime = Date.now();
    isRunning = true;
    startTimer();
  }
});

stopButton.addEventListener('click', () => {
  if (isRunning) {
    isRunning = false;
    pauseTimer();
  }
});

resetButton.addEventListener('click', () => {
  startTime = null;
  elapsedTime = 0;
  isRunning = false;
  secondsSpan.textContent = '00';
  millisecondsSpan.textContent = '000';
  lapList.innerHTML = '';
});

function startTimer() {
  const now = Date.now();
  elapsedTime += (now - startTime);
  startTime = now;
  const totalSeconds = Math.floor(elapsedTime / 1000);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor(elapsedTime / 10) % 100;

  secondsSpan.textContent = String(seconds).padStart(2, '0');
  millisecondsSpan.textContent = String(milliseconds).padStart(3, '0');

  if (isRunning) {
    requestAnimationFrame(startTimer);
  }
}

function pauseTimer() {
  // Add functionality to record lap times here
  // for example, create a new li element with the current time and append it to lapList
}
