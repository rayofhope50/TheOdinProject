"use strict";
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
const stepsEls = document.querySelectorAll(".step");
const progressBar = document.getElementById("progressTop");
let currentStep = 1;

nextEl.addEventListener("click", () => {
  currentStep++;
  if (currentStep > stepsEls.length) {
    currentStep = stepsEls.length;
    console.log(`End reached`);
  }
  updateStepProgress();
});

prevEl.addEventListener("click", () => {
  currentStep--;
  if (currentStep < 1) {
    currentStep = 1;
    console.log(`Start reached`);
  }
  updateStepProgress();
});

function updateStepProgress() {
  stepsEls.forEach((stepEl, idx) => {
    if (idx < currentStep) {
      stepEl.classList.add("checked");
      stepEl.innerHTML = `
      <i class= "fas fa-check"></i><small>
      ${
        idx == 0
          ? "Start"
          : idx === stepsEls.length - 1
          ? "Final"
          : "Step " + idx
      }</small>
      `;
    } else {
      stepEl.classList.remove("checked");
      stepEl.innerHTML = `<i class="fas fa-times"></i>`;
    }
  });
  const checkedNumber = document.querySelectorAll(".checked");

  progressBar.style.width =
    ((checkedNumber.length - 1) / (stepsEls.length - 1)) * 100 + "%";
  console.log(checkedNumber.length - 1);
  console.log(stepsEls.length - 1);

  if (currentStep === 1) {
    prevEl.disabled = true;
  } else if (currentStep === stepsEls.length) {
    nextEl.disabled = true;
  } else {
    prevEl.disabled = false;
    nextEl.disabled = false;
    //all works
  }
}

// progressBar.style.width = checkedNumber.length - 1;
// console.log(checkedNumber);
// console.log(stepsEls.length - 1);
// const steps = document.querySelectorAll(".step");
// const btns = document.querySelectorAll(".btn");
// const progressTop = document.getElementById("progressTop");
// const ins = document.querySelectorAll(".fas");
// let i = 1;
// let smallEls = [];

// btns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     if (btn.id == "next") {
//       forward();
//     } else {
//       back();
//     }
//   });
// });
// function forward() {
//   if (i == 4) {
//     btns[1].classList.add("checked__Btn");
//     console.log("End");
//   }
//   if (i < steps.length) {
//     steps[i].classList.add("checked");
//     createEl();
//     ins[i].classList.remove("fa-times");
//     ins[i].classList.add("fa-check");
//     steps[i];
//     i++;
//     btns[0].classList.remove("checked__Btn");
//     console.log(i);
//     progress();

//     return;
//   }
// }

// function back() {
//   if (i == 2) {
//     btns[0].classList.add("checked__Btn");
//     console.log("END");
//   }
//   if (i > 1) {
//     i--;
//     steps[i].classList.remove("checked");
//     btns[1].classList.remove("checked__Btn");
//     ins[i].classList.remove("fa-check");
//     ins[i].classList.add("fa-times");
//     deleteEl();
//     console.log(i);
//     deProgress();
//     return;
//   }
// }

// function createEl() {
//   const smallEl = document.createElement("small");
//   if (i < 4) {
//     smallEl.innerText = `Step ${i}`;
//   } else {
//     smallEl.innerText = `Final`;
//   }
//   smallEls.push(smallEl);
//   steps[i].appendChild(smallEl);
// }

// function deleteEl() {
//   if (smallEls.length > 0) {
//     const removedEl = smallEls.pop();
//     removedEl.remove();
//   }
// }

// function progress() {
//   if (i == 2) {
//     progressTop.style.width = "25%";
//   } else if (i == 3) {
//     progressTop.style.width = "50%";
//   } else if (i == 4) {
//     progressTop.style.width = "75%";
//   } else if (i == 5) {
//     progressTop.style.width = "100%";
//   }
// }

// function deProgress() {
//   if (i < 2) {
//     progressTop.style.width = "0%";
//   } else if (i == 2) {
//     progressTop.style.width = "25%";
//   } else if (i == 3) {
//     progressTop.style.width = "50%";
//   } else if (i == 4) {
//     progressTop.style.width = "75%";
//   }
// }
