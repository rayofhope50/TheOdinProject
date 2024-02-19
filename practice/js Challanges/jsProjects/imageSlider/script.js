"use strict";
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const imgs = document.querySelectorAll("img");
let idx = 1;
const interval = 3000;
setInterval(updateI, interval);
function updateI() {
  if (idx == 0) {
    idx++;
    setInterval(updateI, interval);
  }
  imgs[idx].style.transform = `translateX(0%)`;
  imgs[idx - 1].style.transform = `translateX(-100%)`;
  idx++;
  setInterval(updateI, interval);
}
