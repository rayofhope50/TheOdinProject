"use strict";
const steps = document.querySelectorAll(".step");
const btns = document.querySelectorAll(".btn");
const btnWrapp = document.querySelector(".cont__btn__wrap");
const progressTop = document.getElementById("progressTop");
const ins = document.querySelectorAll(".fas");
let i = 1;

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.id == "next") {
      forward();
    } else {
      back();
    }
  });
});
function forward() {
  if (i == 4) {
    btns[1].classList.add("checked__Btn");
    console.log("End");
  }
  if (i < steps.length) {
    steps[i].classList.add("checked");
    ins[i].classList.remove("fa-times");
    ins[i].classList.add("fa-check");
    steps[i];
    i++;
    btns[0].classList.remove("checked__Btn");
    console.log(i);
    return;
  }
}

function back() {
  if (i == 2) {
    btns[0].classList.add("checked__Btn");
    console.log("END");
  }
  if (i > 1) {
    i--;
    steps[i].classList.remove("checked");
    btns[1].classList.remove("checked__Btn");
    ins[i].classList.remove("fa-check");
    ins[i].classList.add("fa-times");
    console.log(i);
    return;
  }
}
