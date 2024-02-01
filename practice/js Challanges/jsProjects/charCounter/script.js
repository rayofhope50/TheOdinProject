"use strict";
const input = document.querySelector(".char__text");
const charTotal = document.getElementById("charTotal");
const charRemain = document.getElementById("charRemain");
let chars;

input.addEventListener("input", () => {
  chars = input.value;
  updateUi();
  console.log(input.value.length);
});

function updateUi() {
  charTotal.innerText = chars.length;
  charRemain.innerText = 50 - chars.length;
}
