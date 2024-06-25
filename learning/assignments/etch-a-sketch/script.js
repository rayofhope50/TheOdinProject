"use strict";

const gridNum = document.querySelector("input");
let gridNumVal = 4;
const chageBtn = document.querySelector(".js-change-grid");
const pad = document.querySelector(".parent");
const checkedEl = document.querySelector(".grid__input");
const clearBtn = document.querySelector(".js-clearGrid");
const blackBtn = document.querySelector(".js-blackBtn");
const eraseBtn = document.querySelector(".js-eraser");
const rainbowBtn = document.querySelector(".js-rainbowBtn");
let sketches = document.querySelectorAll(".sketch");
const pickedClr = document.querySelector(".js-picked");

pickedClr.addEventListener("change", () => {
  newColor = pickedClr.value;
  attachSketchListeners();
});

let newColor = "black";
let mousedown = false;
let randomColorId = false;
let sketchId;
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
eraseBtn.addEventListener("click", () => {
  randomColorId = false;
  newColor = "white";
  attachSketchListeners();
});
//listener for black color
blackBtn.addEventListener("click", () => {
  randomColorId = false;
  newColor = "black";
  attachSketchListeners();
});

// listener for rainbow mode
rainbowBtn.addEventListener("click", () => {
  randomColorId = true;
  attachSketchListeners();
});

// Listener to grid tick that clears or adds grid lines
checkedEl.addEventListener("click", () => {
  gridLines();
});

// Main hover mouse clicked logic
function attachSketchListeners() {
  sketches.forEach((sketch) => {
    sketch.removeEventListener("mousemove", changeColor);
    sketch.removeEventListener("mouseenter", randomColorHandler);
    sketch.removeEventListener("click", randomColorHandler);

    if (!randomColorId) {
      sketch.addEventListener("mousemove", changeColor);
    } else {
      sketch.addEventListener("click", randomColorHandler);
      sketch.addEventListener("mouseenter", (event) => {
        if (mousedown) {
          randomColorHandler(event.currentTarget);
        }
      });
    }
  });
}

function randomColorHandler(sketch) {
  randomColor(sketch);
}

function gridLines() {
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
  gridNumVal = gridNum.value || 4;

  document.documentElement.style.setProperty("--grid-val", gridNumVal);
  const k = gridNumVal * gridNumVal;
  for (let i = 0; i < k; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = "sketch";
    newDiv.setAttribute("data-id", i); /*here */
    pad.appendChild(newDiv);
  }
  sketches = document.querySelectorAll(".sketch");
  gridLines();
  attachSketchListeners();
}

//change color function for black chosen color and rainbow mode
function changeColor() {
  if (sketchId !== this.getAttribute("data-id")) {
    if (mousedown) {
      this.style.backgroundColor = newColor;
    }
  }
}

function randomColor(sketch) {
  let hexCode = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * 16);
    color += hexCode[random];
  }
  sketch.style.backgroundColor = color;
}

// function to clear the grid
function clearGrid() {
  sketches.forEach((sketch) => {
    sketch.style.backgroundColor = "white";
  });
}
paintGrid();

// initial call to attach listeners
attachSketchListeners();
