"use strict";
const arrow = document.querySelector(".fas");
const list = document.querySelector(".media__list");

arrow.addEventListener("click", () => {
  arrow.classList.add("rotate");
  list.classList.remove("hide");
});
