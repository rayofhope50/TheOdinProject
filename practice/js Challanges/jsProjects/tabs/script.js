"use strict";
const buttons = document.querySelectorAll("button");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btn = button.dataset.id;
    console.log(btn);
    console.log(document.getElementById(btn));
  });
});
