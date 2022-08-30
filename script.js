function playGame() {
    document.getElementById("myBtn").addEventListener("click", game);
}

// let buttons = document.querySelectorAll(".button");
// console.log(buttons);

// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         let playerSelection = button.innerText;
//         console.log(playerSelection);
//     });
// });

// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         playerSelection = button.innerText;})

// Assign three randomly selected numbers to three different choices

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

function game() {
    let playerWin = 0;
    let computerWin = 0;
    let n = 0;

    for (let i = 0; i < 5; i++) {
        // Print current game round number

        console.log("Round: " + (n + 1));
        n++;
        // Ask user to enter the choice
        let buttons = document.querySelectorAll(".button");
        console.log(buttons);
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                let playerSelection = button.innerText;
                console.log(playerSelection);
            });
        });

        // playerChoice(choice);

        // let playerSelection = playerChoice;
        //  Randomly generate three numbers to later assign to three different choices of computer

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
        getComputerChoice();

        console.log(getComputerChoice());

        // Let computer play with player's choice

        playRound(playerSelection, computerSelection);

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

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else return "Scissors";
}

playGame();
