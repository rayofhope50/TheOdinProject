const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const scorePl = document.getElementById("player");
const scoreCo = document.getElementById("comp");
let player;
let comp;

rock.addEventListener("click", () => {
  player = "rock";
  compMove();
  console.log(`Clicked ${player} comp: ${comp}`);
});
paper.addEventListener("click", () => {
  player = "paper";
  compMove();
  gameAlgo(player, comp);
  console.log(`Clicked ${player} comp: ${comp}`);
});
scissors.addEventListener("click", () => {
  player = "scissors";
  compMove();
  console.log(`Clicked ${player} comp: ${comp}`);
});

function gameAlgo(player, comp) {
  if (comp == player) {
    console.log(`TIE`);
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
