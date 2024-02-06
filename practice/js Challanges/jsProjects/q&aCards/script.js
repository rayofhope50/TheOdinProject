"use strict";
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const i = question.querySelector("i");
  const text = question.querySelector(".question__text");
  question.addEventListener("click", function () {
    removePlus(i, text);
  });
});

function removePlus(i, text) {
  i.classList.toggle("fa-minus-square");
  i.classList.toggle("fa-plus-square");
  text.classList.toggle("hidden");
}
