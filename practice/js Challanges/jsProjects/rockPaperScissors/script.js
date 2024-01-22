const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const scorePl = document.getElementById("player");
const scoreCo = document.getElementById("comp");
const result = document.getElementById("result");
const playerResult = document.getElementById("player");
const compResult = document.getElementById("comp");
let player;
let comp;
let countPlayer = 0;
let countComp = 0;

rock.addEventListener("click", () => {
  player = "rock";
  compMove();
  gameAlgo(player, comp);
});
paper.addEventListener("click", () => {
  player = "paper";
  compMove();
  gameAlgo(player, comp);
});
scissors.addEventListener("click", () => {
  player = "scissors";
  compMove();
  gameAlgo(player, comp);
});

function gameAlgo(player, comp) {
  if (comp == player) {
    result.innerText = "It's a tie!";
  }
  if (
    (comp == "rock" && player == "scissors") ||
    (comp == "paper" && player == "rock") ||
    (comp == "scissors" && player == "paper")
  ) {
    result.innerText = `You lose ${comp} beats ${player} `;
    countComp++;
    counter(countComp, countPlayer);
  }
  if (
    (comp == "rock" && player == "paper") ||
    (comp == "paper" && player == "scissors") ||
    (comp == "scissors" && player == "rock")
  ) {
    result.innerText = `You win ${player} beats ${comp}`;
    countPlayer++;
    counter(countComp, countPlayer);
  }
}

function compMove() {
  let temp = Math.floor(Math.random() * 10) + 1;
  if (temp <= 3) {
    comp = "paper";
  } else if (temp <= 7) {
    comp = "scissors";
  } else {
    comp = "rock";
  }
}
function counter(countComp, countPlayer) {
  playerResult.innerText = countPlayer;
  compResult.innerText = countComp;
}
