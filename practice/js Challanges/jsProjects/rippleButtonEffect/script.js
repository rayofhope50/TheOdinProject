"use strict";
const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", function (e) {
  let xPos = e.pageX - btn.offsetLeft;
  let yPos = e.pageY - btn.offsetTop;
  btn.style.setProperty("--xPos", xPos + "px");
  btn.style.setProperty("--yPos", yPos + "px");
  console.log(xPos, yPos);
});
