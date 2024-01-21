const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");
let stp = false;
let isFunctionRunning = false;
let res = false;

reset.addEventListener("click", () => {
  res = true;
  timer.innerText = "25:00";
  console.log(`${res} from reset`);
});

stop.addEventListener("click", () => {
  stp = true;

  console.log(`${stp} from stop`);
});

start.addEventListener("click", () => {
  stp = false;
  res = false;
  if (isFunctionRunning == true) {
    return;
  } else {
    pomodoro();
  }
});

function pomodoro() {
  isFunctionRunning = true;
  if (res == false) {
    if (stp == false) {
      let time = timer.innerHTML.split(":");
      let minutes = parseInt(time[0]);
      let seconds = parseInt(time[1]);
      console.log(minutes, seconds);
      if (minutes > 0 || seconds > 0) {
        if (seconds === 0) {
          minutes--;
          seconds = 59;
        } else {
          seconds--;
        }
        let updatedTime =
          `${minutes.toString().padStart(2, "0")}` +
          String.fromCharCode(58) +
          `${seconds.toString().padStart(2, "0")}`;
        timer.innerText = updatedTime;
        console.log(`${stp} from function`);
      }
      setTimeout(pomodoro, 1000);
    } else {
      isFunctionRunning = false;
      return;
    }
  } else {
    isFunctionRunning = false;
    return;
  }
}
