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

rock.addEventListener("click", player);
paper.addEventListener("click", player)
scissors.addEventListener("click", player)

function player(e){



       if( e.target.textContent === rock.textContent){
            return "Rock";
       } else if(e.target.textContent === paper.textContent){
            return "Paper";
       } else if(e.target.textContent === scissors.textContent){
            return "Scissors"
       }
      
}

playerSelection = this.player(Event)

console.log(playerSelection)

function playRound(playerSelection, aiSelection){
    let playerCount = 0;
    let aiCount = 0;

    if(playerSelection == "rock" && aiSelection == "Scissors" ){
        playerCount++
    } else if(playerSelection == "Scissors" && aiSelection == "rock"){
        aiCount++
    } else if(playerSelection == "Scissors" && aiSelection == "Paper"){
        playerCount++
    } else if(playerSelection == "Paper" && aiSelection == "Scissors"){
        aiCount++
    } else if(playerSelection == "Paper" && aiSelection == "rock" ){
        playerCount++
    } else{
        aiCount++
    }

    displayPlayer.innerHTML = playerCount;
    displayAi.innerHTML = aiCount
    
        

}

console.log(player === "Rock")