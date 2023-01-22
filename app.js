const openPopUp = document.querySelector('.openPopUp');
const startGame = document.querySelector('.startGame');
const gameGround = document.querySelector('.gameGround');
const gameCurrentRound = document.querySelector('.gameCurrentRound');
const playerCurentChoice = document.querySelector('.playerCurentChoice');
const roundResult = document.querySelector('.roundResult');
const compCurrentChoice = document.querySelector('.compCurrentChoice');
const playerScore = document.querySelector('.playerScore');
const compScore = document.querySelector('.compScore');
const resetGame = document.querySelector('.resetGame');

const playerIconBox = document.querySelector('.playerIconBox');



const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'scissors';

function delay() {
    window.onload = function() {
      setTimeout(function() {
        openPopUp.style.display = 'none';
        startGame.style.display = 'block';
      }, 2500);
    }
  }
  
 delay();


 startGame.addEventListener('click', function(e){
    e.preventDefault();
    startGame.style.display = 'none';
    gameGround.style.display = 'block';
 })
 const rockChoice = document.querySelector('.rock');
const paperChoice = document.querySelector('.paper');
const scissorsChoice = document.querySelector('.scissors');
// const playerPick = playerIconBox.querySelector('img')

 rockChoice.addEventListener('click', playerChoice)
 paperChoice.addEventListener('click', playerChoice)
 scissorsChoice.addEventListener('click', playerChoice)

 playerPick = Math.random * 1
 console.log(playerChoice)
 function playerChoice(){
  if(playerPick < 0.34){
    playerPick === rockChoice
    alert('rock')
  }
  else if(playerPick > 0.67){
    playerPick === paperChoice
    alert('paper')
  }
  else{
    playerPick === scissorsChoice
    alert('scissors')
  }
  
 }
// function playerSelection(){
//   if(playerPick[0] === rockChoice){
    
//   }else if(playerPick[1] === paperChoice){
    
//   }else{
   
//   }
// }
 




