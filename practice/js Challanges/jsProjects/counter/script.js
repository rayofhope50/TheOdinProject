"use strict";
const counter = document.querySelector(".number");
const btns = document.querySelectorAll(".btn");

let num = 0;

btns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    if (idx == 0) {
      num--;
    } else if (idx == `1`) {
      num = 0;
    } else {
      num++;
    }
    counter.innerText = `${num}`;
    colorChange();
  });
});

function colorChange() {
  if (num < 0) {
    counter.style.color = `red`;
  } else if (num > 0) {
    counter.style.color = `green`;
  } else {
    counter.style.color = `black`;
  }
}
