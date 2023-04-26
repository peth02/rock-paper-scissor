
function getComputerChoice(){
    const choice = ["rock", "paper", "scissor"];
    return choice[Math.floor(Math.random()*3)];
}

function playRound(player, computer) {
    player = player.toLowerCase();
    const choice = ["rock", "paper", "scissor"];
    const winChoice = ["scissor", "rock", "paper"];
    let i = 0;
    for(i; i < 3; i++){
        if(player === choice[i]){
            break;
        }
    };
    if(winChoice[i] === computer){
        return "win";
    }else if(player === computer){
        return "draw";
    }else{
        return "lose";
    }
}

function showScore(round){
    if(round !== 0){
        score.innerText = `player = ${scorePlayer} com = ${scoreCom}`;
    }else{
        score.innerText = ``;
    }
}

function showPlayerChoice(choice){
    let playerSelection = choice.innerText;
    if(round !== 0){
        player.innerText = `player choose ${playerSelection.toLowerCase()}`;
    }else{
        player.innerText = ``;
    }
}

function showComChoice(){
    let computerSelection = getComputerChoice();
    if(round !== 0){
        com.innerText = `com choose ${computerSelection.toLowerCase()}`;
    }else{
        com.innerText = ``;
    }
}

function gameResult(choice){
    let playerSelection = choice.innerText;
    let computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);

    if(result === "win"){
        scorePlayer += 1;
    }else if(result === "lose"){
        scoreCom += 1;
    }
}

function endRound(choice){
    if(scorePlayer === 5 || scoreCom === 5){
        const choices = document.querySelectorAll(".choice");
        choices.forEach(choice => {choice.classList.toggle("hidden");});

        if(scorePlayer === 5){
            player.innerText = "You Win!!!";
            com.innerText = ``;
        }else{
            player.innerText = "Loser";
            com.innerText = ``;         
        }
        restart(choice); 
    }
}

function restart(choice){
    const container = document.querySelector("div");
    const button = document.createElement("button");
    button.innerText = "restart?";
    container.appendChild(button);
    button.addEventListener("click", () => {
        round = 0;
        scorePlayer = 0;
        scoreCom = 0;
        const choices = document.querySelectorAll(".choice");
        choices.forEach(choice => {choice.classList.toggle("hidden");});
        container.removeChild(button);
        showPlayerChoice(choice);
        showComChoice();
        showScore(round);
    });
}

let scorePlayer = 0;
let scoreCom = 0;
let round = 0;

const choices = document.querySelectorAll(".choice");
const player = document.querySelector(".player");
const com = document.querySelector(".com");
const score = document.querySelector(".score");


choices.forEach(choice => {
    choice.addEventListener("click", () => {
        round += 1;
        showPlayerChoice(choice);
        showComChoice();
        gameResult(choice);
        showScore(round);
        endRound(choice);
    });
});

