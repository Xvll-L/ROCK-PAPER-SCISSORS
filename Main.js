

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
const rounds = document.querySelector(".round-count")

//display winner
const displayWinner = document.querySelector(".win");

let ai;

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






rock.addEventListener("click", function(){playRound("Rock")});
paper.addEventListener("click", function Paper(){playRound("Paper")})
scissors.addEventListener("click", function Scissors(){playRound("Scissors") })

let eventData;
function player(){
     
    if (condition) {
        
    }


    

}

let playerCount = 0;
let aiCount = 0;
let  roundCounts = 0;
function playRound(playerSelection){
   aiSelection = computer();
   
    
    if(playerSelection === "Rock" && aiSelection === "Scissors" ){
        results = "playerWin"
    } else if(playerSelection === "Scissors" && aiSelection === "Rock"){
        results = "aiWin"
    } else if(playerSelection === "Scissors" && aiSelection === "Paper"){
        results = "playerWin"
    } else if(playerSelection === "Paper" && aiSelection === "Scissors"){
        results = "aiWin"
    } else if(playerSelection === "Paper" && aiSelection === "Rock" ){
        results = "playerWin"
    } else if(playerSelection === "Rock" && aiSelection === "Paper" ){
        results = "aiWin"
    } else if (playerSelection ===   aiSelection){
        results = "tie"
    }
    
   
   
    console.log(results)
    console.log(aiSelection)
       
    
     

     if (results === "playerWin"){
        test100 = "Player"
       playerCount = playerCount + 1;
       roundCounts = roundCounts + 1 ;
    } else if (results === "aiWin"){
        test100 = "pc"
        aiCount = aiCount + 1;
        roundCounts = roundCounts + 1;
    } else if(results === "tie"){
        roundCounts = roundCounts + 1;
        test100 = "tie"
    }


    displayPlayer.textContent = playerCount;
    displayAi.textContent = aiCount
    rounds.textContent = roundCounts;

    if (playerCount === 5 ){
         
        playerCount = 0
        aiCount = 0
        roundCounts = 0
          alert("player wins")
    } else if(aiCount == 5){
      
      playerCount = 0
        aiCount = 0
        roundCounts = 0 
        alert("computer wins")
    }

   

}

console.log(rounds)

function game(){
   
}



