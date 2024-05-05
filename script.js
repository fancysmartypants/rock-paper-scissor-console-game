console.log("JavaScript successfully loaded");

let winner=""; //stores winner of the round.
let player_score=0;
let pc_score=0;

//First, we make a function to get the computer generated answer
function getComputerChoice(){
    const choices=["rock","paper","scissor"];

    const int= Math.round(Math.random()*3);

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
        playGame();
    }else if ((pc == "rock" || player=="rock") && (pc =="scissor") || (player=="scissor")){
        round_num+=1;
        console.log("incremented round_num="+round_num);
        if (pc=="rock"){
            pc_score+=1;
            return winner="pc";
        }else{
            player_score+=1;
            return winner="player";
        }
   
    }else if ((pc == "scissor" || player=="scissor") && (pc =="paper") || (player=="paper")) {
        round_num+=1;
        console.log("incremented round_num="+round_num);
        if (pc=="scissor"){
            pc_score+=1;
            return winner="pc";
        }else{
            player_score+=1;
            return winner="player";
        }
    }else if ((pc == "rock" || player=="rock") && (pc =="paper") || (player=="paper")){
        round_num+=1;
        console.log("incremented round_num="+round_num);
        if (pc=="paper"){
            pc_score+=1;
            return winner="pc";
        }else{
            player_score+=1;
            return winner="player";
        }
    }       
}



function playGame(){

    console.log(`----Starting round ${round_num}----`);

// use while look to playRound five times. 
// In the end, show score and declare the winner

    while (round_num!=5) {
        const pcChoice= getComputerChoice();
        const playerChoice= getHumanChoice();  
        if (playerChoice == null) break;
        playRound(pcChoice,playerChoice);

        console.log(`------ROUND ${round_num} RESULT:-------`);
        console.log("player score is:"+player_score);
        console.log("pc score is:"+pc_score);
        console.log(`This round's winner is ${winner}`)
        console.log(`------END OF ROUND ${round_num}-------`);
    }
    console.log(`------GAME OVER-------`);
    declareResult();

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

