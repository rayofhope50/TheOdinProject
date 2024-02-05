"use strict";
const parent = document.getElementById("colours");
let i = 0;

function createColours() {
  do {
    const div = document.createElement("div");
    parent.appendChild(div);
    div.className = "colours";
    div.innerText = `I've been born as ${i}`;
    const randomised = random();
    div.style.backgroundColor = `#${randomised}`;
    div.innerText = `#${randomised}`;
    i++;
  } while (i < 30);
}
function random() {
  const chars = "0123456789abcdef";
  let newColour = "";
  for (let i = 0; i < 6; i++) {
    let temp = Math.floor(Math.random() * 16);
    newColour +=
      temp == 10
        ? "a"
        : temp == 11
        ? "b"
        : temp == 12
        ? "c"
        : temp == 13
        ? "d"
        : temp == 14
        ? "e"
        : temp == 15
        ? "f"
        : temp;
  }
  return newColour;
}
createColours();
// random();
