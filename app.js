const openPopUp = document.querySelector(".openPopUp");
const startGame = document.querySelector(".startGame");
const gameGround = document.querySelector(".gameGround");
const gameBox = document.querySelector(".gameBox");
let  gameCurrentRound = document.querySelector(".gameCurrentRound").value;
let playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".compScore");
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

const ROCK = "Rock";
const PAPER = "paper";
const SCISSORS = "Scissors";



// Opening game delay functiona
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
rockChoice.addEventListener("click", () => playerSelection("rock"));
paperChoice.addEventListener("click", () => playerSelection("paper"));
scissorsChoice.addEventListener("click", () => playerSelection("scissors"));
const CHOICE = "choice";



// PlayerSelection function 
function playerSelection(CHOICE) {
  if (CHOICE === "rock") {
    rock();
  } else if (CHOICE === "paper") {
    paper();
  } else {
    scissors();
  }
  computerSelection(randomNumber);
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
const randomNumber = Math.random() * 0.5;
function computerSelection(randomNumber) {
  console.log(randomNumber);
  if (randomNumber < 0.17) {
    compRock();
  } else if (randomNumber < 0.34) {
    compPaper();
  } else if (randomNumber > 0.34) {
    compScissors();
  }
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




// const round = localStorage("round") || 1;

// if (round <= 20) {
//   localStorage.setItem("round", round + 1);
//   localStorage.setItem("scores", JSON.stringify({ player: 0, computer: 0 }));
//   // Reload Page
// } else {
//   const scores = JSON.parse(localStorage.getItem("scores"));
//   const player = scores["player"];
//   // Show Score
//   localStorage.setItem("round", 1);
// }


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
}

function win() {
  gameBox.insertAdjacentHTML(
    "afterend",
    "<p style='color:white;'>You Win! :)</p>"
  );
}
function draw() {
  gameBox.insertAdjacentHTML(
    "afterend",
    "<p style='color:white;'>A draw :|</p>"
  );
}
function lost() {
  gameBox.insertAdjacentHTML(
    "afterend",
    "<p style='color:white;'>You Lose! :(</p>"
  );
  console.log(roundResult.textContent);
}

