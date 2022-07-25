// Declare possible options as array
let options = ["Rock", "Paper", "Scissors"];
// Declare scores
let playerScore = 0;
let computerScore = 0;
// Create a function for computers pick, that is random
function getComputerChoice(){
let computerSelection = options[Math.floor(Math.random() * options.length )].toLowerCase();
return computerSelection;
}

// Create variables for player and computer selections
let playerSelection = "rock"
let computerSelection = getComputerChoice();
// Create logic for the game = Rock beats scissors, Paper beats Rock, Scissors beat paper, ties are ties

// Single round of RSP in the console
function singleGame (playerSelection, computerSelection) {
   
    console.log(computerSelection)
     if (playerSelection === "rock" && computerSelection === "paper") {
       // console.log("Paper beats Rock");
        computerScore += 1;
        console.log(computerScore)
        return "Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      //  console.log("Scissors beat Rock");
        computerScore += 1;
        return "Scissors beat Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      //  console.log("Scissors beat Paper");
        computerScore += 1;
        return "Scissors beat Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
     //   console.log("Paper beat Rock");
        playerScore += 1;
        return "Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      //  console.log("Scissors beat Paper");
        playerScore += 1;
        return "Scissors beat Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
     //   console.log("Rock beats Scissors");
        computerScore += 1;
        return "Rock beats Scissors";
    } else if (playerSelection === computerSelection) {
     //   console.log("It's a tie!");
        return "It's a tie";
        // If player doesn't choose between the correct options, show this message
    } else if (playerSelection != options) {
       // console.log("Please choose between Rock, Paper or Scissors");
        return "Please choose between Rock, Paper or Scissors"
    } 
   
} 

// Create new function that loops 5 times and keeps score

function game () {

    playerSelection = prompt("Select your weapon").toLowerCase()
    computerSelection = getComputerChoice();
    
    for (let i = 0; i < 5; i++) {
        singleGame(playerSelection, computerSelection);
        console.log(playerScore)
        console.log(computerScore)
        computerSelection = getComputerChoice();
        playerSelection = prompt("Select your weapon").toLowerCase()
    }

    if (playerScore > computerScore) {
        console.log("You won, amazing stuff man!")
    } else if (playerScore < computerScore) {
        console.log ("You lost dude")
    } else {
        console.log("It's a tie, good shit!")
    }
    console.log(`You received a score of: ${playerScore} and the computer received a score of: ${computerScore}`)
}


game();

