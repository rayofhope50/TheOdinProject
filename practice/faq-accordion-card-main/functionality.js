"use strict";
const headers = document.querySelectorAll(".faq__header");

headers.forEach((header) => {
  header.addEventListener("click", function () {
    const activeHeader = document.querySelector(".faq__header.active");
    if (activeHeader && activeHeader !== header) {
      activeHeader.classList.toggle("active");
      activeHeader.nextElementSibling.style.maxHeight = 0;
    }
    header.classList.toggle("active");
    const faqBody = header.nextElementSibling;
    if (header.classList.contains("active")) {
      faqBody.style.maxHeight = faqBody.scrollHeight + "px";
    } else {
      faqBody.style.maxHeight = 0;
    }
  });
});
