"use strict";
const nav = document.querySelector(".navbar");
const para = document.querySelector(".paragraphs");

console.log(nav.offsetHeight);
console.log(para.offsetTop);

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > para.offsetTop - nav.offsetHeight - 58) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});
