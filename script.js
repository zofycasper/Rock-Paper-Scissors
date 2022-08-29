function game() {
    let playerWin = 0;
    let computerWin = 0;
    for (let i = 0; i < 5; i++) {
        // Print current game round number
        console.log("Round: " + (i + 1));
        // Ask user to enter the choice
        let playerSelection = prompt("Enter your choice: ");
        //  Randomly generate three numbers to later assign to three different choices of computer
        let randomNumber = Math.floor(Math.random() * 3);

        const computerSelection = getComputerChoice();
        let win =
            "Congrats! " +
            playerSelection +
            " beats " +
            computerSelection +
            "!";
        let lose =
            "You lose! " +
            computerSelection +
            " beats " +
            playerSelection +
            "!";
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
                    return win;
                } else if (computerSelection === "Paper") {
                    return tie;
                } else return lose;
            }
            if (playerSelection.toLowerCase() === "rock") {
                if (computerSelection === "Scissors") {
                    return win;
                } else if (computerSelection === "Rock") {
                    return tie;
                } else return lose;
            }
            if (playerSelection.toLowerCase() === "scissors") {
                if (computerSelection === "Paper") return win;
                else if (computerSelection === "Scissors") {
                    return tie;
                } else return lose;
            }
        }

        console.log(playRound(playerSelection, computerSelection));

        let result = playRound(playerSelection, computerSelection);
        if (result == win) {
            playerWin++;
        } else if (result == lose) {
            computerWin++;
        } else i--;

        console.log("Player win: " + playerWin);
        console.log("Computer win: " + computerWin);
        if (playerWin == 3) {
            console.log("Player win the game!");
            break;
        } else if (computerWin == 3) {
            console.log("Computer win the game!");
            break;
        }
    }
}

game();
