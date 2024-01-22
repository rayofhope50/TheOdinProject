const buttons = document.querySelectorAll("button");
const scorePl = document.getElementById("player");
const scoreCo = document.getElementById("comp");
const result = document.getElementById("result");

let countPlayer = 0;
let countComp = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = compMove();
    const winner = gameAlgo(playerChoice, computerChoice);
    updateUI();
    result.innerText = winner;
  });
});

function gameAlgo(player, comp) {
  if (comp == player) {
    return "It's a tie!";
  }
  if (
    (comp == "rock" && player == "scissors") ||
    (comp == "paper" && player == "rock") ||
    (comp == "scissors" && player == "paper")
  ) {
    countComp++;
    return `You lose ${comp} beats ${player} `;
  }
  if (
    (comp == "rock" && player == "paper") ||
    (comp == "paper" && player == "scissors") ||
    (comp == "scissors" && player == "rock")
  ) {
    countPlayer++;
    return `You win ${player} beats ${comp}`;
  }
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
