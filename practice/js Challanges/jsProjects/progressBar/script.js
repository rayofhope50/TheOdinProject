"use strict";
const steps = document.querySelectorAll(".step");
const btns = document.querySelectorAll(".btn");
const btnWrapp = document.querySelector(".cont__btn__wrap");
const progressTop = document.getElementById("progressTop");
const ins = document.querySelectorAll(".fas");
let i = 1;
let smallEls = [];

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.id == "next") {
      forward();
    } else {
      back();
    }
  });
});
function forward() {
  if (i == 4) {
    btns[1].classList.add("checked__Btn");
    console.log("End");
  }
  if (i < steps.length) {
    steps[i].classList.add("checked");
    createEl();
    ins[i].classList.remove("fa-times");
    ins[i].classList.add("fa-check");
    steps[i];
    i++;
    btns[0].classList.remove("checked__Btn");
    console.log(i);
    progress();

    return;
  }
}

function back() {
  if (i == 2) {
    btns[0].classList.add("checked__Btn");
    console.log("END");
  }
  if (i > 1) {
    i--;
    steps[i].classList.remove("checked");
    btns[1].classList.remove("checked__Btn");
    ins[i].classList.remove("fa-check");
    ins[i].classList.add("fa-times");
    deleteEl();
    console.log(i);
    deProgress();
    return;
  }
}

function createEl() {
  const smallEl = document.createElement("small");
  if (i < 4) {
    smallEl.innerText = `Step ${i}`;
  } else {
    smallEl.innerText = `Final`;
  }
  smallEls.push(smallEl);
  steps[i].appendChild(smallEl);
}

function deleteEl() {
  if (smallEls.length > 0) {
    const removedEl = smallEls.pop();
    removedEl.remove();
  }
}

function progress() {
  if (i == 2) {
    progressTop.style.width = "25%";
  } else if (i == 3) {
    progressTop.style.width = "50%";
  } else if (i == 4) {
    progressTop.style.width = "75%";
  } else if (i == 5) {
    progressTop.style.width = "100%";
  }
}

function deProgress() {
  if (i < 2) {
    progressTop.style.width = "0%";
  } else if (i == 2) {
    progressTop.style.width = "25%";
  } else if (i == 3) {
    progressTop.style.width = "50%";
  } else if (i == 4) {
    progressTop.style.width = "75%";
  }
}
