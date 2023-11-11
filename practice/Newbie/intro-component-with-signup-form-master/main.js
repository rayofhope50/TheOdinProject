"use strict";

const submitBtn = document.getElementById("submitBtn");
const excl1 = document.getElementsByClassName("excl1");
const excl2 = document.getElementsByClassName("excl2");
const excl3 = document.getElementsByClassName("excl3");
const excl4 = document.getElementsByClassName("excl4");
const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementsByClassName("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (name.value === "" || name.value == null) {
    error[0].classList.toggle("nodisplay");
    excl1[0].classList.toggle("nodisplay");
  }
  if (lastName.value === "" || lastName.value == null) {
    error[1].classList.toggle("nodisplay");
    excl2[0].classList.toggle("nodisplay");
  }
  if (email.value === "" || email.value == null) {
    error[2].classList.toggle("nodisplay");
    excl3[0].classList.toggle("nodisplay");
  }
  if (password.value === "" || password.value == null) {
    error[3].classList.toggle("nodisplay");
    excl4[0].classList.toggle("nodisplay");
  }
});
