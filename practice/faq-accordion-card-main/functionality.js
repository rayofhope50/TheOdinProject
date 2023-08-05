"use strict";
const headers = document.querySelectorAll(".flex");

headers.forEach(function (header) {
  header.addEventListener("click", function () {
    header.classList.toggle("active");
    const faqBody = header.nextElementSibling;
    if (header.classList.contains("active")) {
      faqBody.style.maxHeight = faqBody.scrollHeight + "px";
    } else {
      faqBody.style.maxHeight = 0;
    }
  });
});
