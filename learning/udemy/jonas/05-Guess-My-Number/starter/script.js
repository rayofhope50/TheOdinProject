'use strict';

// /////////////////////// SELETS ELEMENT BUG
/* message selects that class .textContent just the content
of the <p> */

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number! ';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 15;
// document.querySelector('.guess').value = 15;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
/////////////////////////// HANDLING CLICK EVENTS BUG
// addEventListiner listens to action click after coma has to be
// the specified function to perform
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  ////first scenario to implement is to assume there is no
  //// value and work on that
  if (!guess) {
    // document.querySelector('.message').textContent = `Must be between 1 - 20`;
    displayMessage('Must be between 1 - 20');

    // when the player wins
  } else if (guess === secretNumber) {
    displayMessage(`Correct Number!!`);
    document.querySelector('.number').textContent = secretNumber;

    // BUG manipulating CSS SYTLE!!!!!!BUG this creates inline style
    // it's not changing CSS file

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when the guess is too high/ too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('`You lost the game!`');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});

// reload page on click BUG but reloads EVERYTHING

// const again = document.querySelector('.again');
// const refreshPage = () => {
//   location.reload();
// };
// again.addEventListener('click', refreshPage);

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);
