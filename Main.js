

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
aiSelection = computer();



//rock.addEventListener("click", player);
//paper.addEventListener("click", player)
//scissors.addEventListener("click", player)

/*function player(){

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

   console.log(test)

       if( e.target.textContent === rock.textContent){
            return "Rock";
       } else if(e.target.textContent === paper.textContent){
            return "Paper";
       } else if(e.target.textContent === scissors.textContent){
            return "Scissors"
       } 
      
}*/





function playRound(playerSelection, aiSelection){
   
    console.log(aiSelection)
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



let i = 0;
function game(){
    let playerCount = 0;
    let aiCount = 0;

    while(true){
        console.log(i = i + 1)
       
    let promptData = prompt("Input rock paper or scissors");

    if (promptData === "rock" || promptData === "Rock") {
        promptData = "Rock";
    } else if (promptData === "paper" || promptData === "Paper"){
        promptData = "Paper";
    } else if (promptData === "scissors" || promptData === "Scissors") {
        promptData = "Scissors";
    }

     let results = playRound(promptData,computer())

     if (results === "playerWin"){

       playerCount = playerCount + 1;
    } else if (results === "aiWin"){
        aiCount = aiCount + 1;
    } 


    displayPlayer.innerHTML = playerCount;
    displayAi.innerHTML = aiCount

    if (playerCount == 5 || aiCount == 5){
        break
    }
    }
}


game()

