

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

  

    if (promptData === "rock" || promptData === "Rock") {
        return "Rock"
    } else if (promptData === "paper" || promptData === "Paper"){
        return "Paper"
    } else if (promptData === "scissors" || promptData === "Scissors") {
        return "Scissors";
    }
    
    // dataEvent = e.target.textContent = `${dataEvent}`;

    // return dataEvent

    /* console.log(test)

       if( e.target.textContent === rock.textContent){
            return "Rock";
       } else if(e.target.textContent === paper.textContent){
            return "Paper";
       } else if(e.target.textContent === scissors.textContent){
            return "Scissors"
       } */
      
}


const Scissorsz = "Scissors"


function playRound(playerSelection, aiSelection){
   

    if(playerSelection === "Rock" && aiSelection === "Scissors" ){
        return "playerWin"
    } else if(playerSelection === "Scissors" && aiSelection === "Rock"){
        return "aiWin"
    } else if(playerSelection === "Scissors" && aiSelection === "Paper"){
        return "playerWin"
    } else if(playerSelection === "Paper" && aiSelection === "Scissors"){
        return "aiWin"
    } else if(playerSelection === "Paper" && aiSelection === "Rock" ){
        return "playerWin"
    } else if(playerSelection === "Rock" && aiSelection === "Paper" ){
        return "aiWin"
    } else if (playerSelection ===   aiSelection){
        return "tie"
    }
    
    
      

}




function game(){
    let playerCount = 0;
    let aiCount = 0;

    for(let i = 0; i < 5;i++){
        console.log(i)
        player()
        computer()

     playRound(player(),computer())

     if (playRound(player(),computer()) === "playerWin"){

       playerCount = playerCount + 1;
    } else if (playRound(player(),computer()) === "aiWin"){
        aiCount = aiCount + 1;
    } else {
        return;
    }
    displayPlayer.innerHTML = playerCount;
    displayAi.innerHTML = aiCount
    }
}

game()

