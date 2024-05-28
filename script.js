console.log("JavaScript successfully loaded");

function updateGameStatus(status) {
    const gameStatusImage = document.getElementById("game-status-image");

    if (status === 'start') {
        gameStatusImage.src = "img/pixel-robot/robot-run.gif";
    } else if (status === 'PC-win') {
        gameStatusImage.src = "img/pixel-robot/robot-idle.gif";
    } else if (status === 'Player-win') {
        gameStatusImage.src = "img/pixel-robot/robot-preview.png";
    } 

    gameStatusImage.alt = status;
}


function checkScreenSize() {
    const warningMessage = document.getElementById('warning-message');
    if (window.innerWidth < 1003 || window.innerHeight < 531) {
        warningMessage.style.display = 'flex';
    } else {
        warningMessage.style.display = 'none';
    }
}

window.addEventListener('resize', checkScreenSize);
window.addEventListener('load', checkScreenSize);





let winner=""; //stores winner of the round.
let player_score=0;
let pc_score=0;

//First, we make a function to get the computer generated answer
function getComputerChoice(){
    const choices=["rock","paper","scissor"];

    let int;

    //generate an interval from -0.5 to 2.5
    const randomVar = Math.random();
    console.log(`randomVar is ${randomVar}`);
    console.log(`randomVar*3-0.5 is ${randomVar*3-0.5}`);

    //from 0 to 2.5 round down
    if (randomVar*3-0.5 >0){
        int= Math.floor(randomVar*3-0.5);
    }else {//from -0.5 to 0 round up
        int= Math.round(randomVar*3-0.5);
    };



    console.log(`int is ${int}`)
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
        console.log(" Uh-o, it's a match! Try again.");
        alertdiv.appendChild(liMatch);
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

const resetTxt = `Click any button to start the game again.`;
const rock=document.getElementById('button-r');
const paper=document.getElementById('button-p');
const scissor=document.getElementById('button-s');

let pcChoice='';

const dashboard = document.getElementById('display');

let playerChoice="";

const alertdiv = document.getElementById('alert-container');

// All of the console output

let playerChoiceTxt;

let pcChoiceTxt;

let roundResult;

let PCScore;

let playerScore;

const matchTxt = "Uh-o, it's a match. Try again.";

//  create references to li element

let liPlayerChoice = document.createElement("li");

let liPCChoice = document.createElement("li");

let liPlayerScore = document.createElement("li");

let liPCScore = document.createElement("li");

let liRoundResult = document.createElement("li");

let liFinalResult = document.createElement("li");

let liMatch = document.createElement("li");

let liReset = document.createElement("li");

let finalResult;


function showReset(){

    alertdiv.appendChild(liReset);
    liReset.textContent=resetTxt;

}



function showFinalResult(){

    alertdiv.appendChild(liFinalResult);
    liFinalResult.textContent = finalResult;
    //make the final result text very large
    liFinalResult.style.fontSize= "25px";
    liFinalResult.style.color= "yellow";

    // also alert click any button to restart

    showReset();

}

// when either pc or player reaches a score of 5, the game is over:

function displayFinalResult (){

    //if pc_score or player_score is 5,
    //final winner is announced 

    if ((pc_score==5)||(player_score==5)) {


        if (pc_score==5){

            final_winner = "PC";
            finalResult=`${final_winner} is the final winner!`;

            console.log(alertdiv);

            showFinalResult();



        }else {
            final_winner = "Player";
            finalResult=`${final_winner} is the final winner!`;

            console.log(alertdiv);
            showFinalResult();

        };

};



function resetGame(){
    //when resetGame is called, 

    //remove all messages
    liFinalResult.remove();
    liPlayerScore.remove();
    liPCScore.remove();
    liPlayerChoice.remove();
    liPCChoice.remove();
    liRoundResult.remove();


    //set round_num to 0
    //set player score, pc score to 0
    round_num=0;
    player_score=0;
    pc_score=0;

    //display reset message
    showReset();


}


// all buttons need to have a function 

//that removes all messages if a final winner is declared.

// use custom event



}


// add event listener to rock button
rock.addEventListener('click', (e)=>{
    updateGameStatus('start');

    liMatch.remove();
    liReset.remove();

    playerChoice = "rock";
    playerChoiceTxt = `You picked ${playerChoice}.`;

    showPlayerChoice();

    playGame(playerChoice);
    
    console.log(`winner is ${winner}`);
    updateGameStatus( `${winner}-win`);

    console.log(`------ROUND ${round_num} RESULT:-------`);
    console.log("player score is:"+player_score);
    console.log("pc score is:"+pc_score);
    console.log(`This round's winner is ${winner}`)
    console.log(`------END OF ROUND ${round_num}-------`);


});

// add event listener to paper button
paper.addEventListener('click', (e)=>{
    updateGameStatus('start');

    liMatch.remove();
    liReset.remove();

    playerChoice = "paper";
    playerChoiceTxt = `You picked ${playerChoice}.`;

    showPlayerChoice();

    playGame(playerChoice);
    
    console.log(`winner is ${winner}`);
    updateGameStatus( `${winner}-win`);

    console.log(`------ROUND ${round_num} RESULT:-------`);
    console.log("player score is:"+player_score);
    console.log("pc score is:"+pc_score);
    console.log(`This round's winner is ${winner}`)
    console.log(`------END OF ROUND ${round_num}-------`);


});


// add event listener to scissor button
scissor.addEventListener('click', (e)=>{
    updateGameStatus('start');

    liMatch.remove();

    playerChoice = "scissor";
    playerChoiceTxt = `You picked ${playerChoice}.`;

    showPlayerChoice();

    playGame(playerChoice);
    
    console.log(`winner is ${winner}`);
    updateGameStatus( `${winner}-win`);

    console.log(`------ROUND ${round_num} RESULT:-------`);
    console.log("player score is:"+player_score);
    console.log("pc score is:"+pc_score);
    console.log(`This round's winner is ${winner}`)
    console.log(`------END OF ROUND ${round_num}-------`);



});


function displayResult(){

    roundResult = `Round ${round_num} Result: 
    Winner is ${winner}.`;

    //update round in the round section 
    updateRound();

    PCScore = `PC score is ${pc_score}.`;
    playerScore = `Player score is ${player_score}.`;

    //SHOW SCORES on score board
    updateScore();
}




function showPlayerChoice(){
    alertdiv.textContent = '';

    alertdiv.appendChild(liPlayerChoice);
    liPlayerChoice.textContent = playerChoiceTxt;
}




function updateScore(){
    const scoreSection = document.getElementById("score-section");
    scoreSection.textContent=`Scores: Player ${player_score} - PC ${pc_score}`;
}





function showPCChoice(){

    const pcChoiceImage = document.getElementById('pc-choice-image');
    
    if (pcChoice=='rock'){
        pcChoiceImage.src=("img/rock.png");

    }else if (pcChoice=='paper'){
        pcChoiceImage.src=("img/paper.png");


    }else if (pcChoice == 'scissor'){
        pcChoiceImage.src=("img/scissor.png");

    }
    pcChoiceImage.alt = pcChoice;

    const imagesSection=document.getElementById('images-section');
    imagesSection.textContent = ''; // Clear previous image
    pcChoiceImage.alt = pcChoice;
    pcChoiceImage.style.width = '70px';  // Example width
    pcChoiceImage.style.height = '70px'; // Example height

    imagesSection.appendChild(pcChoiceImage);


}





function updateRound(){
    const roundSection = document.getElementById('round-section');
    roundSection.textContent = `Round: ${round_num}`;

}



function playGame(playerChoice){
    pcChoice = getComputerChoice();
    console.log(`pc choice is ${pcChoice} within the playerChoice function`);
    //SHOW CHOICES

    //use pcChoice to set imageUrl
    
    pcChoiceTxt = `PC picked ${pcChoice}.` ;
    
    showPCChoice();

    playRound(pcChoice,playerChoice);



    displayResult();
    displayFinalResult ();
}

