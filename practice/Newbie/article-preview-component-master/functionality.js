"use strict";
const shareBtn = document.getElementById("flex2");
const socialActive = document.getElementById("social");
const BtnVisible = document.getElementById("flex2");
const SvgVisible = document.getElementsByClassName("share");

shareBtn.addEventListener("click", () => {
  socialActive.classList.toggle("active");
  BtnVisible.classList.toggle("active");
  SvgVisible[0].classList.toggle("active");
});
