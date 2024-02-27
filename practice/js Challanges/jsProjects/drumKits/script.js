"use strict";
const kits = ["crash", "kick", "snare", "tom"];
const parent = document.querySelector(".container");

const el = document.createElement("button");
el.classList.add("btn");
parent.appendChild(el);
el.innerText = `${kits[0][0].toUpperCase() + kits[0].slice(1)}`;
el.style.backgroundImage = `url(./pictures/${kits[0]}.png)`;
