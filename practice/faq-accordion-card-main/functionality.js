"use strict";
const image = document.getElementsByClassName("arrow");

image.addEventListener("click", () => {
  image[0].classList.toggle("rotate180");
});
