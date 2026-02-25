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
    let userInput = prompt("Rock, paper, or scissors?", "");
    return userInput
    

}

console.log(getHumanChoice())