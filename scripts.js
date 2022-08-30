let playerWin = 0;
let computerWin = 0;
let n = 0;
let buttons = document.querySelectorAll(".button");

function gameStart() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            n++;
            console.log("Round " + n + ": ");
            let playerSelection = button.innerText;
            console.log("Your Choice: " + playerSelection);

            const computerSelection = getComputerChoice();
            console.log("Computer's Choice: " + computerSelection);

            let result = playRound(playerSelection, computerSelection);
            console.log(result);
            console.log("Player score: " + playerWin);
            console.log("Computer score: " + computerWin);

            if (playerWin == 5) {
                alert("You won the game!");
            } else if (computerWin == 5) {
                alert("Computer won the game!");
            }
        });
    });
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    let win =
        "Congrats! " + playerSelection + " beats " + computerSelection + "!";
    let lose =
        "You lose! " + computerSelection + " beats " + playerSelection + "!";
    let tie = "Tie!";
    if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            playerWin++;
            return win;
        } else if (computerSelection === "Paper") {
            return tie;
        } else {
            computerWin++;
            return lose;
        }
    }
    if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            playerWin++;
            return win;
        } else if (computerSelection === "Rock") {
            return tie;
        } else {
            computerWin++;
            return lose;
        }
    }
    if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            playerWin++;
            return win;
        } else if (computerSelection === "Scissors") {
            return tie;
        } else {
            computerWin++;
            return lose;
        }
    }
}

gameStart();
