"use strict";
const front = document.querySelector(".front");
const back = document.querySelector(".back");
const container = document.querySelector(".container");
const body = document.querySelector("body");

container.addEventListener("click", () => {
  front.classList.toggle("active");
  back.classList.toggle("active");
  body.classList.toggle("active");
});
