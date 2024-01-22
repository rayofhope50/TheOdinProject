const buttons = document.querySelectorAll("button");
const scorePl = document.getElementById("player");
const scoreCo = document.getElementById("comp");
const result = document.getElementById("result");
const playerResult = document.getElementById("player");
const compResult = document.getElementById("comp");

let countPlayer = 0;
let countComp = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = compMove();
    const winner = gameAlgo(playerChoice, computerChoice);
    updateUI();
    winner == "You win"
      ? (result.innerText = `${winner} ${playerChoice} beats ${computerChoice}!`)
      : (result.innerText = `${winner} ${computerChoice} beats ${playerChoice}!`);
  });
});

const rules = {
  rock: { rock: "It's a tie", paper: "You lose", scissors: "You win" },
  paper: { rock: "You win", paper: "It's a tie", scissors: "You lose" },
  scissors: { rock: "You lose", paper: "You win", scissors: "It's a tie" },
};

function gameAlgo(player, comp) {
  let winner = rules[player][comp];

  if (winner == "You win") {
    countPlayer++;
    updateUI();
  } else if (winner == "You lose") {
    countComp++;
    updateUI();
  }
  return winner;
}

function compMove() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}
function updateUI() {
  playerResult.innerText = countPlayer;
  compResult.innerText = countComp;
}
