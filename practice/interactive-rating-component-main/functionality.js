"use strict";
document.querySelector(".button").addEventListener("click", function () {
  document.querySelector(".content").classList.add("nodisplay");
  document.querySelector(".end__content").classList.remove("nodisplay");
});
