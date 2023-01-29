const openPopUp = document.querySelector(".openPopUp");
const startGame = document.querySelector(".startGame");
const gameGround = document.querySelector(".gameGround");
const gameBox = document.querySelector(".gameBox");
let gameCurrentRound = document.querySelector(".gameCurrentRound");
let playerScore = document.querySelectorAll(".playerScore");
const compScore = document.querySelectorAll(".compScore");
const resetGame = document.querySelector(".resetGame");
const playerIconBox = document.querySelector(".playerIconBox");
const playerPick = playerIconBox.querySelector("img");
const rockChoice = playerIconBox.querySelector(".rock");
const paperChoice = playerIconBox.querySelector(".paper");
const scissorsChoice = playerIconBox.querySelector(".scissors");
const compIconBox = document.querySelector(".compIconBox");
const compPick = compIconBox.querySelector("img");
const rockCompChoice = compIconBox.querySelector(".rock");
const paperCompChoice = compIconBox.querySelector(".paper");
const scissorsCompChoice = compIconBox.querySelector(".scissors");
const playerSection = document.querySelector(".playerSelection");
const result = document.getElementById("result");
const playAgainButton = document.querySelector("#play-game-again");

const ROCK = "Rock";
const PAPER = "paper";
const SCISSORS = "Scissors";

result.style.display = "none";

// Opening game delay functionality
function delay() {
  window.onload = function () {
    setTimeout(function () {
      openPopUp.style.display = "none";
      startGame.style.display = "block";
    }, 2500);
  };
}

delay();

// Start game button
startGame.addEventListener("click", function (e) {
  e.preventDefault();
  startGame.style.display = "none";
  gameGround.style.display = "block";
});

// User RPS selelection
function rockPlayerSelection() {
  playerSelection("rock");
}

function paperPlayerSelection() {
  playerSelection("paper");
}

function scissorsPlayerSelection() {
  playerSelection("scissors");
}

rockChoice.addEventListener("click", rockPlayerSelection);
paperChoice.addEventListener("click", paperPlayerSelection);
scissorsChoice.addEventListener("click", scissorsPlayerSelection);

const CHOICE = "choice";

function resetGameRound() {
  rockChoice.removeEventListener("click", rockPlayerSelection);
  paperChoice.removeEventListener("click", paperPlayerSelection);
  scissorsChoice.removeEventListener("click", scissorsPlayerSelection);

  setTimeout(() => {
    rockChoice.addEventListener("click", rockPlayerSelection);
    paperChoice.addEventListener("click", paperPlayerSelection);
    scissorsChoice.addEventListener("click", scissorsPlayerSelection);

    rockChoice.style.visibility = "visible";
    paperChoice.style.visibility = "visible";
    scissorsChoice.style.visibility = "visible";

    playerCurentChoice.remove();

    rockCompChoice.style.visibility = "visible";
    paperCompChoice.style.visibility = "visible";
    scissorsCompChoice.style.visibility = "visible";

    compCurentChoice.remove();

    document.getElementById("game-result").remove();
  }, 3000);
}

// PlayerSelection function
function playerSelection(CHOICE) {
  if (CHOICE === "rock") {
    rock();
  } else if (CHOICE === "paper") {
    paper();
  } else {
    scissors();
  }
  const randomNumber = computerSelection();

  getWinner(CHOICE, randomNumber);
}

const playerCurentChoice = document.createElement("p");
playerCurentChoice.style.color = "white";
const compCurentChoice = document.createElement("p");
compCurentChoice.style.color = "white";

function rock() {
  paperChoice.style.visibility = "hidden";
  scissorsChoice.style.visibility = "hidden";
  playerCurentChoice.textContent = `Your Choice: ${ROCK}`;
  playerIconBox.insertAdjacentElement("beforeend", playerCurentChoice);
}

function paper() {
  rockChoice.style.visibility = "hidden";
  scissorsChoice.style.visibility = "hidden";
  playerCurentChoice.textContent = `Your Choice: ${PAPER}`;
  playerIconBox.insertAdjacentElement("beforeend", playerCurentChoice);
}

function scissors() {
  paperChoice.style.visibility = "hidden";
  rockChoice.style.visibility = "hidden";
  playerCurentChoice.textContent = `Your Choice: ${SCISSORS}`;
  playerIconBox.insertAdjacentElement("beforeend", playerCurentChoice);
}

// ComputerSelection function
function computerSelection() {
  let randomNumber = Math.random() * 0.5;

  if (randomNumber < 0.17) {
    compRock();
  } else if (randomNumber < 0.34) {
    compPaper();
  } else if (randomNumber > 0.34) {
    compScissors();
  }

  return randomNumber;
}
function compRock() {
  paperCompChoice.style.visibility = "hidden";
  scissorsCompChoice.style.visibility = "hidden";
  compCurentChoice.textContent = `Computer Choice: ${ROCK}`;
  compIconBox.insertAdjacentElement("beforeend", compCurentChoice);
}
function compPaper() {
  rockCompChoice.style.visibility = "hidden";
  scissorsCompChoice.style.visibility = "hidden";
  compCurentChoice.textContent = `Computer Choice: ${PAPER}`;
  compIconBox.insertAdjacentElement("beforeend", compCurentChoice);
}
function compScissors() {
  rockCompChoice.style.visibility = "hidden";
  paperCompChoice.style.visibility = "hidden";
  compCurentChoice.textContent = `Computer Choice: ${SCISSORS}`;
  compIconBox.insertAdjacentElement("beforeend", compCurentChoice);
}

let YOU_WIN = "You win! :)";
let YOU_DRAW = "It's a draw!";
let YOU_LOSE = "You lost! :(";

const round = localStorage.getItem("round");

localStorage.setItem("round", 0);
localStorage.setItem("scores", JSON.stringify({ player: 0, computer: 0 }));

// getWinner of the game function
const roundResult = document.createElement("p");
roundResult.style.color = "white";
function getWinner(CHOICE, randomNumber) {
  if (
    (CHOICE === "rock" && randomNumber > 0.34) ||
    (CHOICE === "paper" && randomNumber < 0.17) ||
    (CHOICE === "scissors" && randomNumber > 0.17 && randomNumber < 0.34)
  ) {
    win();
  } else if (
    (CHOICE === "rock" && randomNumber > 0.17 && randomNumber < 0.34) ||
    (CHOICE === "scissors" && randomNumber < 0.17) ||
    (CHOICE === "paper" && randomNumber > 0.34)
  ) {
    lost();
  } else if (
    (CHOICE === "rock" && randomNumber < 0.17) ||
    (CHOICE === "paper" && randomNumber < 0.34) ||
    (CHOICE === "scissors" && randomNumber > 0.34)
  ) {
    draw();
  }

  const round = parseInt(localStorage.getItem("round"));
  const scores = JSON.parse(localStorage.getItem("scores"));

  const nextRound = round + 1;

  if (nextRound < 6) {
    localStorage.setItem("round", nextRound);
    gameCurrentRound.textContent = nextRound;

    resetGameRound();
  } else {
    gameGround.style.display = "none";
    result.style.display = "block";

    playerScore[1].textContent = scores["player"];
    compScore[1].textContent = scores["computer"];
  }

  playerScore[0].textContent = scores["player"];
  compScore[0].textContent = scores["computer"];
}

playAgainButton.addEventListener("click", () => {
  location.reload();
});

function win() {
  const scores = JSON.parse(localStorage.getItem("scores"));

  scores["player"] += 1;

  localStorage.setItem("scores", JSON.stringify(scores));

  gameBox.insertAdjacentHTML(
    "afterend",
    "<p id='game-result' style='color:white;'>You Win! :)</p>"
  );
}
function draw() {
  gameBox.insertAdjacentHTML(
    "afterend",
    "<p id='game-result' style='color:white;'>A draw :|</p>"
  );
}
function lost() {
  const scores = JSON.parse(localStorage.getItem("scores"));

  scores["computer"] += 1;

  localStorage.setItem("scores", JSON.stringify(scores));

  gameBox.insertAdjacentHTML(
    "afterend",
    "<p id='game-result' style='color:white;'>You Lose! :(</p>"
  );
  console.log(roundResult.textContent);
}
