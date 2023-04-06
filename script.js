
function getComputerChoice(){
    const choice = ["rock", "paper", "scissor"];
    return choice[Math.floor(Math.random()*3)];
}

function playRound(player, computer) {
    player = player.toLowerCase();
    const choice = ["rock", "paper", "scissor"];
    const winP = ["scissor", "rock", "paper"];
    let i = 0;
    for(i = 0; i < 3; i++){
        if(player === choice[i]){
            break;
        }
    };
    if(winP[i] === computer){
        return "win";
    }else if(player === computer){
        return "draw";
    }else{
        return "lose";
    }
}

function game(){
    let scoreP = 0;
    let scoreC = 0;
    while(scoreP != 5 && scoreC != 5){

        let playerSelection = prompt("choose your weapon");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result === "win"){
            scoreP += 1;
        }else if(result === "lose"){
            scoreC += 1;
        }
    };
    return "player = "+scoreP + " CPU = "+scoreC;
}

console.log(game());