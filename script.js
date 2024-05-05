console.log("JavaScript successfully loaded");

let winner=""; //stores winner of the round.
let player_score=0;
let pc_score=0;

//First, we make a function to get the computer generated answer
function getComputerChoice(){
    const choices=["rock","paper","scissor"];

    const int= Math.floor(Math.random()*3+0.5);
    console.log(`const is ${int}`)
    return answer=choices[int];
}



function getHumanChoice(){
    let answer;
    answer = prompt("What is your choice: rock, paper, scissor? Enter one of the three.");
//convert answer to all lower case before evaluating
    if (answer!=null) answer=answer.toLowerCase();
    while ( !(answer == "rock" || answer=="paper" || answer=="scissor"||answer== null)) {
        answer = prompt("Try again. Enter one among the three: rock, paper, scissor.");
    }

    return answer;
}


function playRound(pc,player){
    
    if (pc===player){
        console.log("Uh-o, it's a match. Try again.");
        dashboard.appendChild(liMatch);
        liMatch.textContent = matchTxt;

    }else if ((pc == "rock" || player=="rock") && (pc =="scissor") || (player=="scissor")){
        round_num+=1;
        console.log("incremented round_num="+round_num);
        if (pc=="rock"){
            pc_score+=1;
            return winner="PC";
        }else{
            player_score+=1;
            return winner="Player";
        }
   
    }else if ((pc == "scissor" || player=="scissor") && (pc =="paper") || (player=="paper")) {
        round_num+=1;
        console.log("incremented round_num="+round_num);
        if (pc=="scissor"){
            pc_score+=1;
            return winner="PC";
        }else{
            player_score+=1;
            return winner="Player";
        }
    }else if ((pc == "rock" || player=="rock") && (pc =="paper") || (player=="paper")){
        round_num+=1;
        console.log("incremented round_num="+round_num);
        if (pc=="paper"){
            pc_score+=1;
            return winner="PC";
        }else{
            player_score+=1;
            return winner="Player";
        }
    }       
}


let round_num=0;
let final_winner="";

function finalWinner(player_score,pc_score){
    if (player_score>pc_score){
        return final_winner="player";
    }else{
        return final_winner="PC";
    }
}

function declareResult(){
    console.log(`Your score is: ${player_score}`);
    console.log(`PC score is: ${pc_score}`);
    finalWinner(player_score,pc_score);
    console.log(`Final winner is: ${final_winner} `)
}


const rock=document.getElementById('r');
const paper=document.getElementById('p');
const scissor=document.getElementById('s');

let pcChoice='';

const dashboard = document.getElementById('dashboard');

let playerChoice="";


// All of the console output

let playerChoiceTxt;

let pcChoiceTxt;

let roundResult;

let PCScore;

let playerScore;

const matchTxt = "Uh-o, it's a match. Try again.";

//  create references to li element
const liPlayerChoice = document.createElement("li");

const liPCChoice = document.createElement("li");

const liPlayerScore = document.createElement("li");

const liPCScore = document.createElement("li");

const liRoundResult = document.createElement("li");

const liFinalResult = document.createElement("li");

const liMatch = document.createElement("li");





// add event listener to rock button
rock.addEventListener('click', (e)=>{
    alert('clicked');
    playerChoice = "rock";
    playerChoiceTxt = `You picked ${playerChoice}.`;

    showPlayerChoice();

    playGame(playerChoice);
    
    console.log(`winner is ${winner}`);
    console.log(`------ROUND ${round_num} RESULT:-------`);
    console.log("player score is:"+player_score);
    console.log("pc score is:"+pc_score);
    console.log(`This round's winner is ${winner}`)
    console.log(`------END OF ROUND ${round_num}-------`);

});

// add event listener to paper button
paper.addEventListener('click', (e)=>{

    playGame("paper");
    console.log(`winner is ${winner}`);

});


// add event listener to scissor button
scissor.addEventListener('click', (e)=>{

    playGame("scissor");
    console.log(`winner is ${winner}`);
});


function displayResult(){

    roundResult = `Round ${round_num} Result: 
    Winner is ${winner}.`;

    //SHOW RESULTS
    showResult();

    PCScore = `PC score is ${pc_score}.`;
    playerScore = `Player score is ${player_score}.`;

    //SHOW SCORES
    showPlayerScore();
    showPCScore();
}




function showPlayerChoice(){
    dashboard.appendChild(liPlayerChoice);
    liPlayerChoice.textContent = playerChoiceTxt;
}




function showPlayerScore(){
    dashboard.appendChild(liPlayerScore);
    liPlayerScore.textContent = playerScore;
}




function showPCScore(){
    dashboard.appendChild(liPCScore);
    liPCScore.textContent=PCScore;
}

function showPCChoice(){
    dashboard.appendChild(liPCChoice);
    liPCChoice.textContent=pcChoiceTxt;

}





function showResult(){
    dashboard.appendChild(liRoundResult);
    liRoundResult.textContent=roundResult;
}



function playGame(playerChoice){
    pcChoice = getComputerChoice();
    console.log(`pc choice is ${pcChoice} within the playerChoice function`);
    //SHOW CHOICES
    pcChoiceTxt = `PC picked ${pcChoice}.` ;
    
    showPCChoice();

    playRound(pcChoice,playerChoice);



    displayResult();
}

