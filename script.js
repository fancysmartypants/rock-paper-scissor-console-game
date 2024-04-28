console.log("Hello World");

//First, we make a function to get the computer generated answer

//DECLARE A FUNCTION getComputerChoice
//INIT ANS which stores a random choice from "Rock,Paper,Scissor"
/**
 * We have Math.random() method that returns a floating point pseudo-random number x>=0 amd x<1, which approximate a uniform distribution over 0 and 1. 
 * We want to generate a random choice among three options, Rock, Paper, Scissors.
 * We can use an array of [0,1,2] to model the three choices because we can get a random integer among 0,1,2 with Math.random()
 */
//RETURNS ANS 
function getComputerChoice(){
    const choices=["rock","paper","scissor"];
    //console.log(choices[0]);
    const int= Math.round(Math.random()*3);
    //console.log(int);
    return answer=choices[int];
}


//DECLARE A FUNCTION getHumanChoice
/**
 * getHumanChoice will prompt user input and store it in string datatype ANS
 * if user input neither of it, prompt them to do it again.
 */
//RETURN answer
function getHumanChoice(){
    let answer;
    answer = prompt("What is your choice among: rock, paper, scissor? Enter one of the three,",undefined);
    //console.log(answer);
    while ( !(answer == "rock" || answer=="paper" || answer=="scissor")) {
        return answer = prompt("Try again. Enter one among the three: rock, paper, scissor.",undefined);
    }
   // console.log(answer);
    return answer;
}

