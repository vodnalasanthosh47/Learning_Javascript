const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");

const player_choice = document.getElementById("playerChoice");
const computer_choice = document.getElementById("computerChoice");

const declaration = document.getElementById("declaration");
const rounds = document.getElementById("rounds");
const player_score = document.getElementById("playerScore");
const computer_score = document.getElementById("computerScore");

let num_rounds = 0;
let playerScore = 0;
let computerScore = 0;

function getRandomChoice() {
    const choices = ["🪨", "🗞️", "✂️"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice) {
    let computerChoice = getRandomChoice();
    num_rounds++;
    if (playerChoice === computerChoice) {
        result = "DRAW";
    }
    else {
        switch (playerChoice) {
            case "🪨":
                result = computerChoice === "🗞️" ? "YOU LOSE" : "YOU WIN";
                break;
            case "🗞️":
                result = computerChoice === "✂️" ? "YOU LOSE" : "YOU WIN";
                break;
            case "✂️":
                result = computerChoice === "🪨" ? "YOU LOSE" : "YOU WIN";
                break;
        }

        if (result === "YOU WIN") {
            playerScore++;
        }
        else if (result === "YOU LOSE") {
            computerScore++;
        }
    }
    updateDisplay(result, playerChoice, computerChoice);
}

function updateDisplay(result, playerChoice, computerChoice) {
    player_choice.textContent = playerChoice;
    computer_choice.textContent = computerChoice;
    rounds.textContent = num_rounds;
    player_score.textContent = playerScore;
    computer_score.textContent = computerScore;
    declaration.textContent = result;
}
