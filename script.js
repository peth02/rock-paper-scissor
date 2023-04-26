
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

// function game(){
//     let scorePlayer = 0;
//     let scoreCom = 0;
//     while(scorePlayer !== 5 && scoreCom !== 5){

//         let playerSelection = prompt("choose your weapon");
//         let computerSelection = getComputerChoice();
//         let result = playRound(playerSelection, computerSelection);
//         console.log(result);
//         if(result === "win"){
//             scorePlayer += 1;
//         }else if(result === "lose"){
//             scoreCom += 1;
//         }
//     };
//     return "player = "+scorePlayer + " CPU = "+scoreCom;
// }

let scorePlayer = 0;
let scoreCom = 0;
let round = 0;

const choices = document.querySelectorAll(".choice");
const player = document.querySelector(".player");
const com = document.querySelector(".com");
const score = document.querySelector(".score");

function game(choice){

    round += 1;
    let playerSelection = choice.innerText;
    player.innerText = `player choose ${playerSelection.toLowerCase()}`;

    let computerSelection = getComputerChoice();
    com.innerText = `com choose ${computerSelection.toLowerCase()}`;

    let result = playRound(playerSelection, computerSelection);
    // console.log(result);

    if(result === "win"){
        scorePlayer += 1;
    }else if(result === "lose"){
        scoreCom += 1;
    }

    if(round !== 0){
        score.innerText = `player = ${scorePlayer} com = ${scoreCom}`
    }
    // console.log(`player choose ${scorePlayer} com choose ${scoreCom}`);
    // if score = 5 end game and restart button
    if(scorePlayer >= 5 || scoreCom >= 5){
        // alert("end");
        choice.removeEventListener("click");
    }

}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        round += 1;
        let playerSelection = choice.innerText;
        player.innerText = `player choose ${playerSelection.toLowerCase()}`;

        let computerSelection = getComputerChoice();
        com.innerText = `com choose ${computerSelection.toLowerCase()}`;

        let result = playRound(playerSelection, computerSelection);
        // console.log(result);

        if(result === "win"){
            scorePlayer += 1;
        }else if(result === "lose"){
            scoreCom += 1;
        }

        if(round !== 0){
            score.innerText = `player = ${scorePlayer} com = ${scoreCom}`
        }
        // console.log(`player choose ${scorePlayer} com choose ${scoreCom}`);
        // if score = 5 end game and restart button
        if(scorePlayer >= 5 || scoreCom >= 5){
            // alert("end");
            choice.removeEventListener("click");
        }
    });
});

