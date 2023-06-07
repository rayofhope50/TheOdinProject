"use strict";

let computerChoice = "";
function playRound(computerSelection, playerSelection) {
  console.log(computerSelection, playerSelection);
  if (computerSelection.toUpperCase() === playerSelection.toUpperCase()) {
    return console.log("This is a tie");
  } else if (
    computerSelection === "Scissors" &&
    playerSelection.toUpperCase() === "PAPER"
  ) {
    return console.log("You loose Scissors beats paper");
  } else {
    return console.log("You Win Scissors beats paper");
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
const playerSelection = "paper";
playRound(computerSelection, playerSelection);
