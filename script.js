
let options = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let playerScoreBoard = document.getElementById('player-score');
let computerScoreBoard = document.getElementById('computer-score');
const resetBtn = document.getElementById('reset');
const roundResult = document.getElementById('score-para');


resetBtn.addEventListener('click', init);
// Create variables for player and computer selections
const buttons = document.getElementsByTagName("button");
playerSelection = '';
let computerSelection = getComputerChoice();
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

// Create a function for computers pick, that is random
function getComputerChoice(){
let computerSelection = options[Math.floor(Math.random() * options.length )].toLowerCase();
return computerSelection;
}

// Function to reset the game

function init() {
    playerScore = 0;
    computerScore = 0;
    playerScoreBoard.textContent = '0';
    computerScoreBoard.textContent = '0';
    roundResult.textContent = ''
}

rock.addEventListener('click',function(){
    playerSelection = 'rock'
    computerSelection = getComputerChoice();
    singleGame(playerSelection,computerSelection)
})
paper.addEventListener('click',function(){
    playerSelection = 'paper'
    computerSelection = getComputerChoice();
    singleGame(playerSelection,computerSelection)
})
scissors.addEventListener('click',function(){
    playerSelection = 'scissors'
    computerSelection = getComputerChoice();
    singleGame(playerSelection,computerSelection)
})


// Game logic
function singleGame (playerSelection, computerSelection) {
    let result = "";
    let  winner = "";
    
    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore == 5 && playerScore > computerScore) {
            console.log("Player Won")
            winner = "Player";
            result = alert(`Game over! The winner is ${winner} by  ${playerScore - computerScore} points!`);
            result;
            init();
        } else if (computerScore == 5 && computerScore > playerScore){
            console.log("Computer Won")
            winner = "Computer";
            result = alert(`Game over! The winner is ${winner} by ${computerScore -playerScore} points!`);
            result;
            init();
        }
        
//comment
    }
     else if (playerSelection === "rock" && computerSelection === "paper") {
       // console.log("Paper beats Rock");
        computerScore += 1;
        computerScoreBoard.textContent = computerScore;
        
        roundResult.textContent = 'You Lose!'
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      //  console.log("Scissors beat Rock");
        playerScore += 1;
        playerScoreBoard.textContent = playerScore;
        roundResult.textContent = 'You Win!'
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      //  console.log("Scissors beat Paper");
        computerScore += 1;
        computerScoreBoard.textContent = computerScore;
        roundResult.textContent = 'You Lose!'
    } else if (playerSelection === "paper" && computerSelection === "rock") {
     //   console.log("Paper beat Rock");
        playerScore += 1;
        playerScoreBoard.textContent = playerScore;
        roundResult.textContent = 'You Win!'
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      //  console.log("Scissors beat Paper");
        playerScore += 1;
        playerScoreBoard.textContent = playerScore;
        roundResult.textContent = 'You Win!'
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
     //   console.log("Rock beats Scissors");
        computerScore += 1;
        computerScoreBoard.textContent = computerScore;
        roundResult.textContent = 'You Lose!'
    } else if (playerSelection === computerSelection) {
     //   console.log("It's a tie!");
     roundResult.textContent = "It's a Tie!"
        // If player doesn't choose between the correct options, show this message
    }

    
 
   

} 

