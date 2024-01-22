const buttons = document.querySelectorAll("button");
const timerVal = document.getElementById("timer");
let temp = timerVal.innerText.split(":");
let hours = temp[0];
let minutes = temp[1];
let seconds = temp[2];
let timeoutId;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.id);
    if (button.id == "start") {
      startTimer();
    } else if (button.id == "reset") {
      clearTimeout(timeoutId);
      hours = 0;
      minutes = 0;
      seconds = 0;
      timerUi();
    } else if (button.id == "stop") {
      clearTimeout(timeoutId);
    }
    console.log(hours, minutes, seconds);
  });
});

function startTimer() {
  if (seconds == 59) {
    seconds = 0;
    minutes++;
  } else if (minutes == 59) {
    seconds = 0;
    minutes = 0;
    hours++;
  } else {
    seconds++;
  }
  timerUi();
  timeoutId = setTimeout(startTimer, 1000);
}

function timerUi() {
  timerVal.innerText = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  console.log(seconds);
}
