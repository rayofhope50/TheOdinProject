"use strict";

let computerChoice = "";
function playRound(computerSelection, playerSelection) {
  console.log(`Computer ${computerSelection}, player ${playerSelection}`);
  if (computerSelection.toUpperCase() === playerSelection.toUpperCase()) {
    return console.log("This is a tie");
  } else if (
    (computerSelection === "Scissors" &&
      playerSelection.toUpperCase() === "PAPER") ||
    (computerSelection === "Rock" &&
      playerSelection.toUpperCase() === "SCISSORS") ||
    (computerSelection === "Paper" && playerSelection.toUpperCase() === "ROCK")
  ) {
    return console.log(
      `You loose ${computerSelection} beats ${playerSelection}`
    );
  } else {
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
const computerSelection = getComputerChoice();
const playerSelection = prompt(`What's your pick?`);
playRound(computerSelection, playerSelection);
