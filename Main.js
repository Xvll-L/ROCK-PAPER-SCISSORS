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
        return "rock"
    } else if (ai === 2){
        return "paper"
    } else if (ai === 3) {
        return "scissors";
    } else {
        return "failed";
    }


} 
aiSelection = computer();

console.log(aiSelection)

rock.addEventListener("click", player);
paper.addEventListener("click", player)
scissors.addEventListener("click", player)

function player(e){
    eventData = e.target.innerHTML
    console.log(eventData)

}
