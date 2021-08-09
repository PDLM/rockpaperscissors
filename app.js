function computerPlay(){
    let randomChoice = Math.floor(Math.random() * 3);
    switch(randomChoice){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playerPlay(){
    let choice = prompt("Rock Paper Scissors").toLowerCase();
    return choice;
}

function playRound(playerSelection, computerSelection){
    let human = playerSelection();
    let robot = computerSelection();
    if(human == robot){
        console.log("It's a draw!");
    } else if(human == "scissors" && robot == "paper"){
        console.log("You win. Scissors beats paper");
        return 1;
    } else if(human == "rock" && robot == "scissors"){
        console.log("You win. Rock beats scissors");
        return 1;
    } else if(human == "paper" && robot == "rock"){
        console.log("You win. Paper beats rock.");
        return 1;
    } else if(robot == "scissors" && human == "paper"){
        console.log("You lose. Scissors beats paper");
        return 0;
    } else if(robot == "rock" && human == "scissors"){
        console.log("You lose. Rock beats scissors");
        return 0;
    } else if(robot == "paper" && human == "rock"){
        console.log("You lose. Paper beats rock.");
        return 0;
    }
}

function game(){
    let humanScore = 0;
    let robotScore = 0;
    let gameOver = false;
    while(!gameOver){
       let result =  playRound(playerPlay, computerPlay);
       if(result === 1){
           humanScore++;
       } else if(result === 0){
           robotScore++;
       }
       if(humanScore == 5){
        console.log("Humans win!")
        gameOver = true;
    } else if(robotScore == 5){
        console.log("Robots win");
        gameOver = true;
    }
    }
}

game();



