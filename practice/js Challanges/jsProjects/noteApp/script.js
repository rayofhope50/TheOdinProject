"use strict";
const addBtn = document.getElementById("addBtn");
const notes = document.getElementById("notes");
const note = document.querySelectorAll(".notes__input");

addBtn.addEventListener("click", function () {
  addText();
});

function addText() {
  const newEl = document.createElement("textarea");
  newEl.classList.add("notes__input");
  notes.appendChild(newEl);

  newEl.addEventListener("dblclick", function () {
    remove(this);
  });
}

function remove(element) {
  const info = confirm("Are you sure you want to remove it?");
  if (info) {
    element.remove();
  }
}
