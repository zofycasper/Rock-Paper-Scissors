let playerWin = 0;
let computerWin = 0;
let n = 0;

const round = document.createElement("h1");
const btnContainer = document.createElement("div");

const myBtn = document.querySelector("#myBtn");
const container = document.querySelector(".container");
const playArea = document.createElement("div");
const computerChoice = document.createElement("h2");
const yourChoice = document.createElement("h2");
const restart = document.createElement("button");
const resultPrint = document.createElement("h3");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

playArea.classList.add("playArea");
btnContainer.classList.add("btnContainer");
restart.classList.add("restart");
restart.textContent = "Try Again";

function reset() {
    playerWin = 0;
    computerWin = 0;
    n = 0;

    playArea.textContent = "";
    btnContainer.textContent = "";
}

function createPlayArea() {
    const header = document.createElement("h1");
    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorsBtn = document.createElement("button");

    rockBtn.classList.add("button");
    paperBtn.classList.add("button");
    scissorsBtn.classList.add("button");

    header.textContent = "Make your choice: ";
    rockBtn.textContent = "Rock";
    paperBtn.textContent = "Paper";
    scissorsBtn.textContent = "Scissors";

    container.appendChild(playArea);

    playArea.appendChild(header);
    playArea.appendChild(btnContainer);
    btnContainer.appendChild(rockBtn);
    btnContainer.appendChild(paperBtn);
    btnContainer.appendChild(scissorsBtn);
}

function restartGame() {
    const restartBtn = document.querySelector(".restart");
    restartBtn.addEventListener("click", () => {
        container.removeChild(restart);
        gameStart();
    });
}

function gameStart() {
    reset();
    playerScore.textContent = playerWin;
    computerScore.textContent = computerWin;
    createPlayArea();
    let computerSelection;
    let buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            n++;
            console.log("Round " + n + ": ");
            let playerSelection = button.innerText;
            console.log("Your Choice: " + playerSelection);

            yourChoice.textContent = "Player: " + playerSelection;
            playArea.appendChild(yourChoice);

            computerSelection = getComputerChoice();
            console.log("Computer's Choice: " + computerSelection);

            computerChoice.textContent = "Computer: " + computerSelection;
            playArea.appendChild(computerChoice);

            let result = playRound(playerSelection, computerSelection);
            console.log(result);
            console.log("Player score: " + playerWin);
            console.log("Computer score: " + computerWin);

            playerScore.textContent = playerWin;
            computerScore.textContent = computerWin;

            resultPrint.textContent = result;
            playArea.appendChild(resultPrint);

            if (playerWin == 5) {
                reset();
                container.removeChild(playArea);
                container.appendChild(restart);
                restartGame();
                alert("You won the game!");
            } else if (computerWin == 5) {
                reset();
                container.removeChild(playArea);
                container.appendChild(restart);

                restartGame();
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

myBtn.addEventListener("click", () => {
    // const header = document.createElement("h1");
    // const rockBtn = document.createElement("button");
    // const paperBtn = document.createElement("button");
    // const scissorsBtn = document.createElement("button");

    // rockBtn.classList.add("button");
    // paperBtn.classList.add("button");
    // scissorsBtn.classList.add("button");

    // header.textContent = "Make your choice: ";
    // rockBtn.textContent = "Rock";
    // paperBtn.textContent = "Paper";
    // scissorsBtn.textContent = "Scissors";

    // container.appendChild(playArea);
    // playArea.appendChild(header);
    // playArea.appendChild(rockBtn);
    // playArea.appendChild(paperBtn);
    // playArea.appendChild(scissorsBtn);

    gameStart();

    container.removeChild(myBtn);
});
