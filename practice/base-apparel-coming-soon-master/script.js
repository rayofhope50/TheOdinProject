"use strict";
const email = document.getElementsByClassName("email");
const errorButton = document.getElementsByClassName("danger-button");
const errorMessage = document.getElementsByClassName("error__message");
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("works");
  if (email[0].validity.typeMismatch) {
    errorButton[0].classList.remove("nodisplay");
    errorMessage[0].classList.remove("nodisplay");
    email[0].style.border = "3px solid red";
  } else {
    errorButton[0].classList.add("nodisplay");
    errorMessage[0].classList.add("nodisplay");
    email[0].style.border = "1px solid var(--clr-primary-red)";
  }
});
