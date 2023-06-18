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

function playRound(computerSelection, playerSelection) {
  console.log(`Computer ${computerSelection}, player ${playerSelection}`);
  if (computerSelection.toUpperCase() === playerSelection.toUpperCase()) {
    ties++;
    return console.log("This is a tie");
  } else if (
    (computerSelection === "Scissors" &&
      playerSelection.toUpperCase() === "PAPER") ||
    (computerSelection === "Rock" &&
      playerSelection.toUpperCase() === "SCISSORS") ||
    (computerSelection === "Paper" && playerSelection.toUpperCase() === "ROCK")
  ) {
    winsComputer++;

    return console.log(
      `You loose ${computerSelection} beats ${playerSelection}`
    );
  } else {
    winsPlayer++;
    return console.log(`You Win ${playerSelection} beats ${computerSelection}`);
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
  console.log(`Current game: ${1}`);
  console.log(
    `Current score: ${ties} ties ${winsComputer} computer wins ${winsPlayer} player wins`
  );
}

// const computerSelection = getComputerChoice();
// const playerSelection = prompt(`What's your pick?`);
