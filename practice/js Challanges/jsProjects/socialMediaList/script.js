"use strict";
const arrow = document.querySelector(".media__header");
const fas = document.querySelector(".fas");
const list = document.querySelector(".media__list");
const header = document.querySelector(".media__header_p");
const listEls = document.querySelectorAll(".media__liEl");

arrow.addEventListener("click", () => {
  if (!fas.classList.contains("rotate")) {
    fas.classList.add("rotate");
    list.classList.remove("hide");
  } else {
    fas.classList.remove("rotate");
    list.classList.add("hide");
  }
});
listEls.forEach((listEl) => {
  listEl.addEventListener("click", function () {
    console.log(`${this.innerHTML} hellou`);
    header.innerHTML = this.innerHTML;
    fas.classList.remove("rotate");
    list.classList.add("hide");
  });
});
