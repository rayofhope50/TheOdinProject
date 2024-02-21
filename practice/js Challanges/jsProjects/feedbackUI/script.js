"use strict";
const btn = document.getElementById("btn");
const icons = document.querySelectorAll(".fe__icon");

icons.forEach((icon, idx, k) => {
  icon.addEventListener("click", function () {
    console.log(`hllo ${idx} ${k}`);
  });
});
