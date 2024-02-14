"use strict";
const nav = document.querySelector("nav");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (nav.classList.contains("disabled")) {
    nav.classList.remove("disabled");
  } else {
    nav.classList.add("disabled");
  }
});
