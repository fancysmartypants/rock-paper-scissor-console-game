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
    const choices=["Rock","Paper","Scissor"];
    //console.log(choices[0]);
    const int= Math.round(Math.random()*3);
    //console.log(int);
    return answer=choices[int];
}


