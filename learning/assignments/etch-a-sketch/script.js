"use strict";

const gridNum = document.querySelector("input");
let gridNumVal = 4;
const chageBtn = document.querySelector(".js-change-grid");
const pad = document.querySelector(".parent");
const checkedEl = document.querySelector(".grid__input");
const clearBtn = document.querySelector(".js-clearGrid");
const blackBtn = document.querySelector(".js-blackBtn");
const eraseBtn = document.querySelector(".js-eraser");
let sketches = document.querySelectorAll(".sketch");

let newColor = "";
let mousedown = false;

document.addEventListener("mousedown", () => {
  mousedown = true;
});

document.addEventListener("mouseup", () => {
  mousedown = false;
});

chageBtn.addEventListener("click", () => {
  if (gridNum.value > 100) {
    document.querySelector(".error").innerText = "Value over 100";
  } else {
    paintGrid();
  }
});

//listener for clearing the grid
clearBtn.addEventListener("click", clearGrid);
//listener for erasing the cell
eraseBtn.addEventListener("click", eraseColor);

// Listener to grid tick that clears or adds grid lines
checkedEl.addEventListener("click", () => {
  gridLines();
});

attachSketchListeners();
// Main hover mouse clicked logic
function attachSketchListeners() {
  // const sketches = document.querySelectorAll(".sketch");
  sketches.forEach((sketch) => {
    console.log("mose over");
    sketch.addEventListener("mousemove", blackColor);
  });
}
function gridLines() {
  // const sketches = document.querySelectorAll(".sketch");

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
  sketches = document.querySelectorAll(".sketch");

  gridLines();
  attachSketchListeners();
}

//change color function for black chosen color and rainbow mode
function blackColor() {
  newColor = "black";
  if (mousedown) {
    this.style.backgroundColor = newColor;
  }
}
//change color for eraser
function eraseColor() {
  console.log("erase initiated");
  newColor = "white";
  if (mousedown) {
    console.log("erase in if statement");

    this.style.backgroundColor = newColor;
  }
}

// function to clear the grid
function clearGrid() {
  console.log("clear grid initiated");
  sketches.forEach((sketch) => {
    console.log("clear grid  changing color to white?");

    sketch.style.backgroundColor = "white";
  });
}
