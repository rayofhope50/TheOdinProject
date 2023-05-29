let playerPick = "";
document.querySelector(".rock").addEventListener("click", function () {
  gameAlgo("rock");
});
document.querySelector(".paper").addEventListener("click", function () {
  gameAlgo("paper");
});
document.querySelector(".scissors").addEventListener("click", function () {
  gameAlgo("scissors");
});
document.querySelector(".resetScore").addEventListener("click", function () {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateScoreElement();
});
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
document
  .querySelector(".auto-play-button")
  .addEventListener("click", function () {
    autoPlay();
    console.log("clicked");
  });
updateScoreElement();
let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      gameAlgo(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

const gameAlgo = function (playerPick) {
  // complete game algo
  console.log(`You've picked ${playerPick}`);
  const computerMove = pickComputerMove();
  console.log(`Computer picked ${computerMove}`);
  const result = gameLogic(playerPick, computerMove);
  updateScoreElement();
  document.querySelector(".js-result").innerHTML = `${result}`;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img class="move-icon" src="images/${playerPick}-emoji.png" /><img
  class="move-icon"
  src="images/${computerMove}-emoji.png"
/> Computer`;
};

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}
const pickComputerMove = function () {
  // number picking / computer move picker

  let computerMove = "";
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
};

const gameLogic = function (parameter1, parameter2) {
  // game logic
  let result = "";
  if (parameter2 === parameter1) {
    result = "Tie!";
    score.ties += 1;
  } else if (
    (parameter1 === "rock" && parameter2 === "paper") ||
    (parameter1 === "paper" && parameter2 === "scissors") ||
    (parameter1 === "scissors" && parameter2 === "rock")
  ) {
    result = "You lose!";
    score.losses += 1;
  } else {
    result = "You Win!";
    score.wins += 1;
  }
  console.log(score);
  localStorage.setItem("score", JSON.stringify(score));
  return result;
};
