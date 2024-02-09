"use strict";
const addBtn = document.getElementById("addBtn");
const notes = document.getElementById("notes");

addBtn.addEventListener("click", function () {
  addText();
});

function addText() {
  const newEl = document.createElement("textarea");
  newEl.classList.add("notes__input");
  notes.appendChild(newEl);
}
