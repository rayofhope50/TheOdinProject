"use strict";
let computerChoice = "";
let winsPlayer = 0;
let winsComputer = 0;
let ties = 0;

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

function game(num) {
  for (let i = 1; i <= num; i++) {
    let computerSelection = getComputerChoice();
    const playerSelection = prompt(
      `What's your pick beterrn rock, paper and scissors?`
    );
    playRound(computerSelection, playerSelection);
    console.log(`Current game: ${i}`);
    console.log(
      `Current score: ${ties} ties ${winsComputer} computer wins ${winsPlayer} player wins`
    );
  }
}
game(5);
// const computerSelection = getComputerChoice();
// const playerSelection = prompt(`What's your pick?`);
