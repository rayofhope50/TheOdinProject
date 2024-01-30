"use strict";
const navBar = document.querySelector(".nav__bar");
const burgerBtn = document.querySelector(".fa-bars");
const xBtn = document.querySelector(".fa-times");

burgerBtn.addEventListener("click", () => {
  if (!navBar.classList.contains("checked")) {
    navBar.classList.add("checked");
  } else {
    navBar.classList.remove("checked");
  }
});
