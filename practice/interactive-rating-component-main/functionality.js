"use strict";
document.querySelector(".buttonSub").addEventListener("click", function () {
  submitAction();
});
function submitAction() {
  document.querySelector(".content").classList.add("nodisplay");
  document.querySelector(".end__content").classList.remove("nodisplay");
}
const scoreBtn = document.querySelectorAll(".score");

function handleBtnClick(button) {
  scoreBtn.forEach((btn) => {
    btn.classList.remove("selected");
    localStorage.clear();
  });
  button.classList.add("selected");
  let number = document.getElementsByClassName("selected")[0].innerHTML;
  localStorage.setItem("scores", number);
  //   console.log("scores");
  console.log(localStorage.getItem("scores"));
}

scoreBtn.forEach((button) => {
  button.addEventListener("click", () => handleBtnClick(button));
});
