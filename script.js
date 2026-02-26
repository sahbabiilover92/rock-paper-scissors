// Function that randomly returns "rock","paper", or "scissors"

function getComputerChoice(){
    
    //Variable that holds random number between 0 and 3.
    
    randomNumber = Math.random()*3;
    let x;

    //Conditional statement assigning rock, paper, and scissors to 3 outputs to randomNumber
    if (randomNumber < 1){
        x= "rock"
        return x 
    } else if (randomNumber < 2){
        x= "paper"
        return x 
    } else {
        x= "scissors"
        return x 
    }
    
}

//Function that takes human input of rock paper or scissors. Stores input

function getHumanChoice() {
   
    //input prompt
    let userInput = prompt("Rock, paper, or scissors?");
    return userInput
    
    
}



//Function that plays 5 rounds, displays score, and declares winner at end of game

function playGame(){

    //Create variables that store human and computer scores        
   
    let humanScore=0;
    let computerScore=0;

    /* Function that takes two arguments, one from the user and one from the computer. 
    It should convert the user string into one of the 3 strings stored in the computer responses (ie Rock becomes rock)
    Function compares the two values presented by computer and user so that rock paper scissors logic is followed (ie rock beats scissors, paper beats rock, etc.)
    After comparison, the console returns a statement with that rounds winner
    Each round win contributes to the winners score (ie if computer wins computer score goes up 1)*/

    function playRound(humanChoice, computerChoice){
        let humanCase= humanChoice.toLowerCase();

        switch (true){
            case (humanCase=="rock" && computerChoice=="scissors"):
                console.log('You win! Rock beats Scissors!');
                humanScore += 1;
                break;
            case (humanCase=="rock" && computerChoice=="paper"):
                console.log("You lose! Paper beats Rock.");
                computerScore += 1;
                break;
            case (humanCase=="rock" && computerChoice=="rock"):
                console.log("It's a tie. Try again.");
                break;
            case (humanCase=="paper" && computerChoice=="scissors"):
                console.log("You lose! Scissors beats Paper");
                computerScore += 1;
                break;
            case (humanCase=="paper" && computerChoice=="rock"):
                console.log("You win! Paper beats Rock!");
                humanScore +=1;
                break;
            case (humanCase=="paper" && computerChoice=="paper"):
                console.log("It's a tie. Try again.");
                break;
            case (humanCase=="scissors" && computerChoice=="scissors"):
                console.log("It's a tneRound();ie. Try again.");humanScore=0;
                computerScore=0;
                break;
            case (humanCase=="scissors" && computerChoice=="paper"):
                console.log("You win! Scissors beats Paper!");
                humanScore +=1;
                break;
            case (humanCase=="scissors" && computerChoice=="rock"):
                console.log("You lose! Rock beats Scissors.");
                computerScore += 1;
                break;
        }
            //Scoreboard.
            
            console.log("YOU:",humanScore,"COM:",computerScore);

            //Conditional statement used to determine winner.

            if (humanScore>=3){
                console.log("Winner winner chicken dinner!")
            } else if (computerScore>=3){
                console.log("The computer won. Better luck next time.")
            } else {
                playRound(getHumanChoice(), getComputerChoice());
                
            } 
}
            
        //initiate playRound function
        playRound(getHumanChoice(), getComputerChoice())   
        
}

playGame();