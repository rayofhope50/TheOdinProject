"use strict";
const texts = document.querySelectorAll(".stats__text");
texts.forEach((text) => {
  counter(text);
});
function counter(text) {
  let i = 1;
  const count = parseInt(text.innerText, 10);
  let increment = Math.ceil(count / 15);
  // hello

  function incrementCounter() {
    if (i < count) {
      text.innerText = `${i}`;
      i += increment;
      setTimeout(incrementCounter, 50);
    } else {
      text.innerText = `${count}`;
    }
  }
  incrementCounter();
}
