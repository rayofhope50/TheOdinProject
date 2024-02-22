"use strict";
const btn = document.getElementById("btn");
const icons = document.querySelectorAll(".fe__icon");
const wrap = document.querySelector(".wrap");
let rating = "";
icons.forEach((icon, idx, k) => {
  icon.addEventListener("click", function (e) {
    removeActive();
    rating = e.target.innerText;
    icons[idx].classList.add("active");
  });
});

function removeActive() {
  icons.forEach((icon) => {
    icon.classList.remove("active");
  });
}

btn.addEventListener("click", function () {
  wrap.innerHTML = `
  <h2 class="fe__h1">Thank you!</h2>
  <br>

  <h2 class="fe__h1">Feedback: ${rating} </h2>
  <br>
  <br>
  <p class="fe__icon_p2">We'll use your feedback to improve our customer support.</p>  
  `;
});
