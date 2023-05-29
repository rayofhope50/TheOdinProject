"use strict";

function runTwice(fun) {
  let count = 1;
  while (count <= 2) {
    fun();
    count++;
  }
}
const add = function () {
  console.log(2 + 3);
};
runTwice(add);
runTwice(function () {
  console.log("12b");
});
const button = document.querySelector(".js-button");
button.addEventListener("click", function () {
  button.innerHTML = "Loading...";
  setTimeout(updateButton, 1000);
});
function updateButton() {
  if (button.innerHTML != "Finished!") {
    button.innerHTML = "Finished!";
  } else {
    button.innerHTML = "Start";
  }
}
const 