"use strict";
const images = document.querySelectorAll(".arrow");

images.forEach(function (image) {
  image.addEventListener("click", function () {
    this.classList.toggle("rotate180");
  });
});
