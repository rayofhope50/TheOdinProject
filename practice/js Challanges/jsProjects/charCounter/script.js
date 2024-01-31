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
  charTotal.innerText = chars.length > 0 ? chars.length : 0;
  charRemain.innerText = chars.length > 0 ? 50 - chars.length : 50;
}
