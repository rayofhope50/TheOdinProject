"use strict";
const numbers = document.querySelector(".load__p");
const bar = document.querySelector(".load__top");

reload();
function reload() {
  let counter = 0;
  const interval = setInterval(() => {
    counter++;
    bar.style.width = `${counter}%`;
    numbers.innerText = `${counter}%`;
    if (counter >= 100) {
      clearInterval(interval);
    }
  }, 20);
}
