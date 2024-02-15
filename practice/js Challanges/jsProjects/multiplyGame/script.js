"use strict";
const score = document.getElementById("score");
const num1 = document.getElementById("firstNum");
const num2 = document.getElementById("secondNum");
const btn = document.querySelector(".game__btn");
const input = document.getElementById("input");
let result = randomNum();
let playerScore = 0;

btn.addEventListener("click", () => {
  checkAlgo();
  result = randomNum();
});

function randomNum() {
  const first = Math.floor(Math.random() * 10) + 1;
  const second = Math.floor(Math.random() * 10) + 1;
  num1.innerText = first;
  num2.innerText = second;
  const result = first * second;
  return result;
}

function checkAlgo() {
  if (parseInt(input.value) == result) {
    playerScore++;
    score.innerText = `${playerScore}`;
  } else {
    playerScore--;
    score.innerText = `${playerScore}`;
  }
  input.value = "";
}
