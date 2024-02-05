"use strict";
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copy");
const passField = document.getElementById("input");
const popUp = document.getElementById("popUp");

generateBtn.addEventListener("click", () => {
  console.log(`Button pressed`);
  randomPass();
});
copyBtn.addEventListener("click", () => {
  const copied = passField.value;
  popUp.innerText = `${copied} copied!`;
  popUp.classList.remove("active");
  navigator.clipboard.writeText(passField.value);
});

function randomPass() {
  let newPass = "";
  const char =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const maxPass = 14;
  for (let i = 0; i < maxPass; i++) {
    const temp = char[Math.floor(Math.random() * 79)];
    newPass += temp;
  }
  passField.value = `${newPass}`;
}
