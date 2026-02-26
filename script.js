// Function that randomly returns "rock","paper", or "scissors"
function getComputerChoice(){
    //Variable that holds random number between 0 and 3.
    randomNumber = Math.random()*3;
    let x;

    //Conditional statement assigning rock, paper, and scissors to 3 outputs to randomNumber
    if (randomNumber < 1){
        x= "rock"
    } else if (randomNumber < 2){
        x= "paper"
    } else {
        x= "scissors"
    }
    
    return x
}

console.log(getComputerChoice())

//Function that takes human input of rock paper or scissors. Stores input
function getHumanChoice() {
   //input prompt
    let userInput = prompt("Rock, paper, or scissors?");
    return userInput
    
}


//Create variables that store human and computer scores

humanScore=0;
computerScore=0;

console.log(humanScore,computerScore);

/* Function that takes two arguments, one from the user and one from the computer. 
It should convert the user string into one of the 3 strings stored in the computer responses (ie Rock becomes rock)
Function compares the two values presented by computer and user so that rock paper scissors logic is followed (ie rock beats scissors, paper beats rock, etc.)
After comparison, the console returns a statement with that rounds winner
Each round win contributes to the winners score (ie if computer wins computer score goes up 1)*/

userChoice = getHumanChoice();

function playRound(humanChoice, computerChoice){
    let humanCase= humanChoice.toLowerCase();
    return humanCase

}

console.log(playRound(userChoice))