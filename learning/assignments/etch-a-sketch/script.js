"use strict";

const gridNum = document.querySelector("input");
let gridNumVal = 4;
const chageBtn = document.querySelector(".js-change-grid");
const pad = document.querySelector(".parent");
const checkedEl = document.querySelector(".grid__input");
const clearBtn = document.querySelector(".js-clearGrid");
const blackBtn = document.querySelector(".js-blackBtn");
const sketches = document.querySelectorAll(".sketch");
let newColor = "black";
let mousedown = false;

document.addEventListener("mousedown", () => {
  mousedown = true;
});

document.addEventListener("mouseup", () => {
  mousedown = false;
});

// Main hover mouse clicked logic
sketches.forEach((sketch) => {
  console.log("mose over");
  sketch.addEventListener("mousemove", changeColor);
});

chageBtn.addEventListener("click", () => {
  if (gridNum.value > 100) {
    document.querySelector(".error").innerText = "Value over 100";
  } else {
    paintGrid();
  }
});

// Listener to grid tick that clears or adds grid lines
checkedEl.addEventListener("click", () => {
  gridLines();
});

function gridLines() {
  console.log("grid lines innitiated");
  console.log(checkedEl.checked);
  if (!checkedEl.checked) {
    sketches.forEach((sketch) => {
      sketch.style.border = "none";
    });
  } else {
    sketches.forEach((sketch) => {
      sketch.style.border = "0.5px solid black";
    });
  }
}
function paintGrid() {
  pad.innerHTML = "";
  gridNumVal = gridNum.value;

  document.documentElement.style.setProperty("--grid-val", gridNumVal);
  const k = gridNumVal * gridNumVal;
  for (let i = 0; i < k; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "sketch";
    pad.appendChild(newDiv);
  }
  gridLines();
}

function changeColor() {
  if (mousedown) {
    this.style.backgroundColor = newColor;
  }
}
