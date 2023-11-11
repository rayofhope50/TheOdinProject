"use strict";
const submitBtn = document.getElementById("submitBtn");
const excl1 = document.getElementsByClassName("excl1");
const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementsByClassName("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (name.value === "" || name.value == null) {
    error[0].classList.remove("nodisplay");
    excl1[0].classList.remove("nodisplay");
  } else {
    error[0].classList.add("nodisplay");
    excl1[0].classList.add("nodisplay");
  }
  if (lastName.value === "" || lastName.value == null) {
    error[1].classList.remove("nodisplay");
    excl1[1].classList.remove("nodisplay");
  } else {
    error[1].classList.add("nodisplay");
    excl1[1].classList.add("nodisplay");
  }
  if (email.value === "" || email.value == null) {
    error[2].classList.remove("nodisplay");
    excl1[2].classList.remove("nodisplay");
  } else {
    error[2].classList.add("nodisplay");
    excl1[2].classList.add("nodisplay");
  }
  if (password.value === "" || password.value == null) {
    error[3].classList.remove("nodisplay");
    excl1[3].classList.remove("nodisplay");
  } else {
    error[3].classList.add("nodisplay");
    excl1[3].classList.add("nodisplay");
  }
});
