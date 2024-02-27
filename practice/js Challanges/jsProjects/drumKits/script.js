"use strict";
const stars = document.querySelectorAll(".fa-star");
const faces = document.querySelectorAll(".far");

stars.forEach((star, index) => {
  star.addEventListener("click", function () {
    console.log(index, `index from clicking`);

    updateRating(index);
  });
});

function updateRating(index) {
  stars.forEach((star, idx) => {
    console.log(idx, `idx from check`);
    if (idx < index + 1) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
  faces.forEach((face) => {
    face.style.transform = `translateX(${-(index * 48)}px)`;
  });
}
