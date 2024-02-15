"use strict";
const xPos = document.getElementById("xPos");
const yPos = document.getElementById("yPos");

document.addEventListener("mousemove", (e) => {
  let mouseX = e.clientX;
  let mouseY = e.clientY;
  xPos.innerText = mouseX;
  yPos.innerText = mouseY;
});
