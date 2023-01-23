const openPopUp = document.querySelector(".openPopUp");
const startGame = document.querySelector(".startGame");
const gameGround = document.querySelector(".gameGround");
const gameCurrentRound = document.querySelector(".gameCurrentRound");
const playerScore = document.querySelector(".playerScore");
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


const ROCK = "Your choice: Rock";
const PAPER = "Your choice: paper";
const SCISSORS = "Your choice: Scissors";

const COMPROCK ="Computer choice: Rock";
const COMPPAPER ="Computer choice: Paper";
const COMPSCISSORS = "Computer choice: Scissors";

function delay() {
  window.onload = function () {
    setTimeout(function () {
      openPopUp.style.display = "none";
      startGame.style.display = "block";
    }, 2500);
  };
}

delay();

startGame.addEventListener("click", function (e) {
  e.preventDefault();
  startGame.style.display = "none";
  gameGround.style.display = "block";
});


rockChoice.addEventListener("click", () => playerSelection("rock"));
paperChoice.addEventListener("click", () => playerSelection("paper"));
scissorsChoice.addEventListener("click", () => playerSelection("scissors"));

function playerSelection(choice) {
  if(choice === "rock") {
    rock();
  } 
  else if (choice === "paper"){
    paper();
  }
  else{
    scissors();
  }
  computerSelection();
  getWinner();
}
const playerCurentChoice = document.createElement("p")
playerCurentChoice.style.color = "white"
const compCurentChoice = document.createElement("p")
compCurentChoice.style.color = "white"

function rock(){
  paperChoice.style.visibility = "hidden"
  scissorsChoice.style.visibility = "hidden"
  playerCurentChoice.textContent = ROCK
  playerIconBox.insertAdjacentElement("beforeend", playerCurentChoice)
}

function paper(){
  rockChoice.style.visibility = "hidden"
  scissorsChoice.style.visibility = "hidden"
  playerCurentChoice.textContent = PAPER
  playerIconBox.insertAdjacentElement("beforeend", playerCurentChoice)
}

function scissors(){
  paperChoice.style.visibility = "hidden"
  rockChoice.style.visibility = "hidden"
  playerCurentChoice.textContent = SCISSORS
  playerIconBox.insertAdjacentElement("beforeend", playerCurentChoice)
}
function compRock(){
  paperCompChoice.style.visibility = "hidden"
  scissorsCompChoice.style.visibility = "hidden"
  compCurentChoice.textContent = COMPROCK
  compIconBox.insertAdjacentElement("beforeend", compCurentChoice)
}
function compPaper(){
  rockCompChoice.style.visibility = "hidden"
  scissorsCompChoice.style.visibility = "hidden"
  compCurentChoice.textContent = COMPPAPER
  compIconBox.insertAdjacentElement("beforeend", compCurentChoice)
}
function compScissors(){
  rockCompChoice.style.visibility = "hidden"
  paperCompChoice.style.visibility = "hidden"
  compCurentChoice.textContent = COMPSCISSORS
  compIconBox.insertAdjacentElement("beforeend", compCurentChoice)
}
function computerSelection(){
  const randomNumber = Math.random() * 0.5
  console.log(randomNumber)
  if(randomNumber < 0.17){
    compRock();
  }
  else if(randomNumber < 0.34){
    compPaper();
  }
  else{
    compScissors();
  }
}

const roundResult = document.createElement("h3")
roundResult.style.color = "white"
function getWinner(){
  if(playerCurentChoice === ROCK && compCurentChoice === COMPSCISSORS ||
     playerCurentChoice === SCISSORS && compCurentChoice === COMPPAPER ||
     playerCurentChoice === PAPER && compCurentChoice === COMPROCK 
    )
    {
      roundResult.textContent = "You win! :)";
      playerSection.insertAdjacentHTML("afterend",roundResult)
    }
    else if(
      playerCurentChoice === PAPER && compCurentChoice === COMPSCISSORS ||
      playerCurentChoice === ROCK && compCurentChoice === COMPPAPER ||
      playerCurentChoice === SCISSORS && compCurentChoice === COMPROCK 
    )
    {
      roundResult.textContent = "You lost! :("
      playerSection.insertAdjacentHTML("afterend",roundResult)
    }
    else{
      roundResult.textContent = "It's a draw!"
      playerSection.insertAdjacentHTML("afterend",roundResult)
    }
}

