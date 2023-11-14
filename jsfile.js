const getComputerChoice = function() { 
    let computerSelection = 0; 
    computerSelection += Math.random(); 
    if (computerSelection <=.32) { 
        return 'rock';  
    } else if (computerSelection <=.65 && computerSelection >.32) { 
        return 'paper';  
    } else if (computerSelection <= .99 && computerSelection >.65) { 
        return 'scissors';  
    } 
    }; 

const getPlayerChoice = function() { 
    let playerChoice = prompt("Enter your choice").toLowerCase(); {
        return playerChoice;  
    }
};

const letsPlay = function(playerChoice, computerSelection) { 
    let playerScore = 0; 
    let computerScore = 0; 

    if (playerChoice === 'rock' && computerSelection === 'rock') { 
        return "Draw"; 
    } else if (playerChoice === 'rock' && computerSelection === 'paper') { 
        return "You lose";
    } else if (playerChoice === 'rock' && computerSelection === 'scissors') {
        return "You win";
    } else if (playerChoice === 'paper' && computerSelection === 'rock') { 
        return "You win"; 
    } else if (playerChoice === 'paper' && computerSelection === 'paper') { 
        return "Draw"; 
    } else if (playerChoice === 'paper' && computerSelection === 'scissors') { 
        return "You lose" 
    } else if (playerChoice === 'scissors' && computerSelection === 'rock') { 
        return "You lose"  
    } else if (playerChoice === 'scissors' && computerSelection === 'paper') { 
        return "You win" 
    } else if (playerChoice === 'scissors' && computerSelection === 'scissors') { 
        return "Draw"; 
    }
}; 

const fullGame = function (playerChoice, computerSelection) { 
    for (let i = 0; i < 5; i++) { 
        console.log(letsPlay(getPlayerChoice(), getComputerChoice()));
    } 
}; 

 
