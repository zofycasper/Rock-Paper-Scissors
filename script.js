//  Randomly generate three numbers to later assign to three different choices of computer
let randomNumber = Math.floor(Math.random() * 3);
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
let win = "Congrats! " + playerSelection + " beats " + computerSelection + "!";
let lose = "You lose! " + computerSelection + " beats " + playerSelection + "!";
let tie = "Tie!";
console.log(randomNumber);

// Assign three randomly selected numbers to three different choices
function getComputerChoice() {
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else return "Scissors";
}

console.log(getComputerChoice());

// Let computer play with player's choice

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "Rock") {
            // playerWin = playerWin++;
            return win;
        } else if (computerSelection === "Paper") {
            return tie;
        } // computerWin = computerWin++;
        else return lose;
    }
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "Scissors") {
            // playerWin = playerWin++;
            return win;
        } else if (computerSelection === "Rock") {
            return tie;
        } //computerWin = computerWin++;
        else return lose;
    }
    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "Paper") return win;
        else if (computerSelection === "Scissors") {
            return tie;
        } else return lose;
    }
}

console.log(playRound(playerSelection, computerSelection));
// console.log(playerWin);
// console.log(computerWin);

function game() {
    let playerWin = 0;
    let computerWin = 0;
    for (let i = 0; i < 5; i++) {
        if (playRound(playerSelection, computerSelection) == win) {
            return playerWin++;
        } else if (playRound(playerSelection, computerSelection) == lose) {
            return computerWin++;
        }
    }
}
