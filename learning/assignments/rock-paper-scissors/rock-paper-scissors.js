"use strict";
let computerChoice = "";
let winsPlayer = 0;
let winsComputer = 0;
let ties = 0;
document.querySelector(".rock").addEventListener("click", function () {
  game("Rock");
});
document.querySelector(".paper").addEventListener("click", function () {
  game("Paper");
});
document.querySelector(".scissors").addEventListener("click", function () {
  game("Scissors");
});
const score = document.querySelector(".score");
const result = document.querySelector(".result");

function playRound(computerSelection, playerSelection) {
  console.log(`Computer ${computerSelection}, player ${playerSelection}`);
  if (computerSelection.toUpperCase() === playerSelection.toUpperCase()) {
    ties++;
    return (score.innerHTML = "LADIES AND GENTS A TIE");
  } else if (
    (computerSelection === "Scissors" &&
      playerSelection.toUpperCase() === "PAPER") ||
    (computerSelection === "Rock" &&
      playerSelection.toUpperCase() === "SCISSORS") ||
    (computerSelection === "Paper" && playerSelection.toUpperCase() === "ROCK")
  ) {
    winsComputer++;

    return (score.innerHTML = "LOSER COMOUTER SCORES");
  } else {
    winsPlayer++;
    return (score.innerHTML = "BOOM SCORE FOR THE PLAYER");
  }
}

function getComputerChoice() {
  let random = Math.floor(Math.random() * 10);
  if (random <= 3) {
    return (computerChoice = "Rock");
  } else if (random > 3 && random <= 6) {
    return (computerChoice = "Paper");
  } else {
    return (computerChoice = "Scissors");
  }
}

function game(selection) {
  let computerSelection = getComputerChoice();
  const playerSelection = selection;
  playRound(computerSelection, playerSelection);
  result.innerHTML = `Current score: ${ties} ties ${winsComputer} computer wins ${winsPlayer} player wins`;
  if (winsPlayer == 5 || winsComputer == 5) {
    result.innerHTML = `We have a winner ${
      winsPlayer == 5 ? `Player wins` : `Computer wins!`
    }`;
  }
}

// const computerSelection = getComputerChoice();
// const playerSelection = prompt(`What's your pick?`);
