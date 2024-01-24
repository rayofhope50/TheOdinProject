"use strict";
const btn = document.getElementById("btn");
const closeBtn = document.querySelector(".fav");
const popUp = document.querySelector(".pop__up");
const videoEl = document.getElementById("video");

btn.addEventListener("click", () => {
  popUp.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  popUp.classList.add("hidden");
  //   videoEl.pause();
  //   videoEl.currentTime = 0;
});
