"use strict";
const kits = ["crash", "kick", "snare", "tom"];
const parent = document.querySelector(".container");

kits.forEach((kit, idx) => {
  const btnEl = ceateBtn(idx);
  createSound(btnEl, kit, idx);
});

function ceateBtn(idx) {
  const el = document.createElement("button");
  el.classList.add("btn");
  parent.appendChild(el);
  el.innerText = `${kits[idx][0].toUpperCase() + kits[idx].slice(1)}`;
  el.style.backgroundImage = `url(./pictures/${kits[idx]}.png)`;
  return el;
}

function createSound(btnEl, kit, idx) {
  const audio = document.createElement("audio");
  audio.src = `./sounds/${kits[idx]}.mp3`;
  window.addEventListener("keydown", function (e) {
    if (e.key === kit.slice(0, 1)) {
      console.log(`audio start`);
      if (audio.paused) {
        console.log(`audio pause`);
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
      audio.play();

      btnEl.style.transform = "scale(.9)";
      setTimeout(() => {
        btnEl.style.transform = "scale(1)";
      }, 100);
    }
  });
  parent.appendChild(audio);
}
