"use strict";
const nav = document.querySelector(".navbar");
const para = document.querySelector(".paragraphs");

console.log(nav.offsetHeight);
console.log(para.offsetTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > para.offsetTop - nav.offsetHeight - 58) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});
