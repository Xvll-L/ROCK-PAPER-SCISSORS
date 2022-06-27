/*
First store the value for user inputs,score, round and display who is the winner
gen a randon number for the player-ai
add event listenrs when the buttons rock, paper scissors are click and store the data
create a function to for score, loop and adder
game function to keep score

for ai try to get a random number and user if else stament for rock paper or scissors and return them ot function
*/

//players
let playerSelection;
let aiSelection

//buttons
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

//players scores display
const displayPlayer = document.querySelector(".player-score");
const displayAi = document.querySelector(".ai-score");

//number of rounds
const rounds = document.querySelector("round-count")

//display winner
const displayWinner = document.querySelector(".win");

function computer(){
   let ai = Math.floor(Math.random() * 3) + 1;
    
    if (ai === 1) {
        return "Rock"
    } else if (ai === 2){
        return "Paper"
    } else if (ai === 3) {
        return "Scissors";
    } else {
        return "Failed";
    }


} 
aiSelection = computer();

console.log(aiSelection)

//rock.addEventListener("click", player);
//paper.addEventListener("click", player)
//scissors.addEventListener("click", player)

function player(){

    let promptData = prompt("Input rock paper or scissors");

    console.log(promptData, "data") 

    /*if (promptData === "rock" || promptData === "Rock") {
        return "Rock"
    } else if (promptData === "paper" || promptData === "Paper"){
        return "Paper"
    } else if (promptData === "scissors" || promptData === "Scissors") {
        return "Scissors";
    }*'/
    
    // dataEvent = e.target.textContent = `${dataEvent}`;

    // return dataEvent

    /*console.log(test)

       if( e.target.textContent === rock.textContent){
            return "Rock";
       } else if(e.target.textContent === paper.textContent){
            return "Paper";
       } else if(e.target.textContent === scissors.textContent){
            return "Scissors"
       }*/
      
}



function playRound(playerSelection, aiSelection){
   

    if(playerSelection == "Rock" && aiSelection == "Scissors" ){
        return "playerWin"
    } else if(playerSelection == "Scissors" && aiSelection == "rock"){
        return "aiWin"
    } else if(playerSelection == "Scissors" && aiSelection == "Paper"){
        return "playerWin"
    } else if(playerSelection == "Paper" && aiSelection == "Scissors"){
        return "aiWin"
    } else if(playerSelection == "Paper" && aiSelection == "Rock" ){
        return "playerWin"
    } else if(playerSelection == "Rock" && aiSelection == "Paper" ){
        return "aiWin"
    }

    
    
      

}



function game(){
    let playerCount = 0;
    let aiCount = 0;

    for(let i = 0; i < 5;i++){
        console.log(player())

     playRound(player(),aiSelection)

     if (playRound(player(),aiSelection) === "playerWin"){

       playerCount = playerCount + 1;
    } else{
        aiCount = aiCount + 1;
    }
    displayPlayer.innerHTML = playerCount;
    displayAi.innerHTML = aiCount
    }
}



