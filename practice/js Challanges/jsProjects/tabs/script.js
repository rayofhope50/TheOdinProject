"use strict";
const buttons = document.querySelectorAll(".button");
const tabs = document.querySelector(".tabs");
const articles = document.querySelectorAll(".content");

// Clever trick it check ID by target which data- id put on a button
// and associated with article which actually has that ID targets it
// and modifies
tabs.addEventListener("click", function (element) {
  const id = element.target.dataset.id;
  console.log(id);
  if (id) {
    buttons.forEach((btn) => {
      btn.classList.remove("live");
    });
    element.target.classList.add("live");

    articles.forEach(function (article) {
      article.classList.remove("live");
    });
    const e = document.getElementById(id);
    e.classList.add("live");
  }
});

// const tabs = document.querySelector(".tabs");
// const btns = document.querySelectorAll(".button");
// const articles = document.querySelectorAll(".content");
// tabs.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;
//   if (id) {
//     // remove selected from other buttons
//     btns.forEach(function (btn) {
//       btn.classList.remove("live");
//     });
//     e.target.classList.add("live");
//     // hide other articles
//     articles.forEach(function (article) {
//       article.classList.remove("live");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("live");
//   }
// });
