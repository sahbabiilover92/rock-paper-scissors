// Function that randomly returns "rock","paper", or "scissors"
function getComputerChoice(){
    //Variable that holds random number between 0 and 3.
    randomNumber = Math.random()*3;

    //Conditional statement assigning rock, paper, and scissors to 3 outputs to randomNumber
    if (randomNumber < 1){
        x= "it's rock"
    } else if (randomNumber < 2){
        x= "it's paper"
    } else {
        x= "it's scissors"
    }
    return x
}

console.log(getComputerChoice())