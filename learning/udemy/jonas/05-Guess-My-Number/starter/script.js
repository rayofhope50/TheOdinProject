'use strict';

// /////////////////////// SELETS ELEMENT BUG
/* message selects that class .textContent just the content
of the <p> */

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number! ';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 15;
// document.querySelector('.guess').value = 15;

/////////////////////////// HANDLING CLICK EVENTS BUG
// addEventListiner listens to action click after coma has to be
// the specified function to perform
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  ////first scenario to implement is to assume there is no
  //// value and work on that
  if (!guess) {
    document.querySelector('.message').textContent = `No Number!`;
  }
});
