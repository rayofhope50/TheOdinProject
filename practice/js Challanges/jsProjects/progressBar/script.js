"use strict";
const steps = document.querySelectorAll(".step");
const btns = document.querySelectorAll(".btn");
const btnWrapp = document.querySelector(".cont__btn__wrap");
const progressTop = document.getElementById("progressTop");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.id == "next") {
      forward();
    } else {
      back();
    }
    console.log(btn.id);
  });
});
function forward() {
  // steps.forEach(step => {
  //   if (step.classList.contains("checked")) {
  //     step.classList
  //   }
  // })
  console.log(`${steps[2].inner}`);
}

function back() {
  console.log(`buttons should move back`);
}
