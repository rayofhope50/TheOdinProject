"use strict";
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const i = question.querySelector("i");
  const text = question.querySelector(".question__text");
  question.addEventListener("click", function () {
    if (i.classList.contains("fa-plus-square")) {
      removePlus(i, text);
    } else {
      removeMinus(i, text);
    }
  });
});

function removePlus(i, text) {
  i.classList.add("fa-minus-square");
  i.classList.remove("fa-plus-square");
  text.classList.remove("hidden");
}
function removeMinus(i, text) {
  i.classList.remove("fa-minus-square");
  i.classList.add("fa-plus-square");
  text.classList.add("hidden");
}
