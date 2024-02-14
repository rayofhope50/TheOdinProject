"use strict";
const score = document.getElementById("score");
const num1 = document.getElementById("firstNum");
const num2 = document.getElementById("secondNum");
const btn = document.querySelector(".game__btn");
const input = document.getElementById("input");
const result = randomNum();

btn.addEventListener("click", () => {
  checkAlgo();
});

function randomNum() {
  const first = Math.floor(Math.random() * 10) + 1;
  const second = Math.floor(Math.random() * 10) + 1;
  num1.innerText = first;
  num2.innerText = second;
  const result = first + second;
  return result;
}

function checkAlgo() {
  if (parseInt(input.value) == result) {
    score.innerText = +1;
  } else {
    score.innerText = -1;
  }
}
