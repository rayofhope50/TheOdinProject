"use strict";
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const imgs = document.querySelectorAll("img");
const container = document.querySelector(".img__container");
let idx = 1;
let timeout;
const interval = 3000;

prev.addEventListener("click", () => {
  console.log(`${idx} finish`);
  idx--;
  clearTimeout(timeout);
  updateI();
});
next.addEventListener("click", () => {
  idx++;
  clearTimeout(timeout);
  updateI();
});
updateI();

function updateI() {
  console.log(idx);
  if (idx > imgs.length) {
    idx = 1;
  } else if (idx < 0) {
    idx = imgs.length;
  }
  container.style.transform = `translateX(${-((idx - 1) * 500)}px)`;
  timeout = setTimeout(() => {
    idx++;
    updateI();
  }, interval);
}
