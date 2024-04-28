# rock-paper-scissor-console-game

This is a rock paper scissor game project played on a javascript console. The purpose of this document is to explain how does the logic of the program work, and through explaining this document, I worked out how to code it in JavaScript language. But the logic itself can be implemented in any programming languages.


# Guide on How to Create this Game

Before writing any code, the first thing to do is to write down in plain English what the program is trying to solve. In our case, we are trying to write a game, playable on the browser's developer tool console, that generates a random option from three options, rock, paper, scissors, and also takes user input through prompts on the web browser through text input among the same three options. The computer's option is compared against the human input. It follows the rules of the traditional rock-paper-scissors that Rock beats scissor. Scissor beats paper. Paper beats rock. So now that we know what the game is trying to accomplish, next, we could write the pseudocode.


# Pseudocode

What are pseudocodes? It is the algorithm or steps taken by the computer to solve the problem. It is a plain english account of what the program does to accomplish its goal through the logics that can be taken by the computer. If there is no computer available, the account of the steps taken by different human agents playing the different computer logical constructs should still be able to achieve the same goals. 



Here is the pseudocode I wrote as a first attempt:

A string datatype called input is used to store user input.
A string datatype called computer is used to store computer generated value.
A number datatype called score is used to store the score.
The program asks for user input.
The program generates its random option. 
The program compares input with computer.
The program calculates the score.
The program shows the player's score. 
The game runs for five rounds. 
After five rounds, a winner is declared. 

I didn't realize that I made a logical mistake on the third line. Two data of the number datatype is needed rather than a single. A single winner in the datatype of string may replace the need of creating two pieces of data of datatype of number to store the values of each player's score. Most of what I described are major functions or steps that have to be taken by the computer or the program to achieve a certain goal.

Here is a pseudocode closer to how I would implement it:

Create a counter variable called "round" and set it to 1.
WHILE round is less than 5
    playGame
ENDWHILE
IF round is 5
    SHOW playerScore
    SHOW winner
    PROMPT restartGame
    IF retartGame is true
        SET round to 1
        playGame
    ENDIF
ENDIF

This would be the overarching structure of the game. The game is composed of five rounds. In the same round of the game, players draw their option. The round happens five times. After the final round, the result is shown. The player gets an option of whether they would like to continue the same process another time.

Here is a pseudocode of playGame, how the game runs:

The game runs can be a function called playGame.
When playGame is called, here is what happens:

Prompt user input and store it in userChoice.

Generate random option and store it in
Compare the two to update score of each.

These three steps can be written as functions:

prompt user input can become getHumanChoice
generate random option can become getComputerChoice
compare the two to update the score of each player can become a function called playRound

So how will the playRound function work? Here is the pseudocode for playRound:

if getHumanChoice is the same as getComputerChoice
    No one gets a point.
    This round doesn't count. Round number subtract 1. 
    You call playGame again.
if either or is rock and either or is scissor
    The one with rock gets one point
if either or is scissor and either or is paper
    The one with paper gets one point
if either or is rock and either or is paper
    The one with paper gets one point

So now, here is a third version of the pseudocode, of how I will implement writing the code of the game:

Create a function getComputerChoice

Create a function getHumanChoice

Create a function playRound that takes computer choice and human choice and returns a result.

Create a function playGame:
    Call getcomputerchoice
    Call getHumanchoice
    call playRound

Lastly, use the while loop to iterate playGame five times. At the end of the game, show player score and show winner score. These two can be functions of their own as well. 


So here it is, the pseudocode of the entire program. 

# Going from pseudocode to code

I will make GitHub commits every time I have completed an important feature. The code will be there to explain the implementation comments to the computer. 


# Important concepts encountered during implementation

Uniform distribution: Uniform distribution is a probability distribution where every possible outcome has an equal likelihood of occurring over a specified range. 

An idealized random number generator is one that generates a random variable that has the same likelihood as all the other random variables on a specified range. Such a variable may take on any real value within a specified range, and this is called a continuous uniform distribution.

Discrete uniform distribution is when the possible outcomes are equal likely within a finite number of values. Such as outcomes of rolling a six sided die. Or the outcome of a player choosing between rock, paper and scissor. 

We could model the discrete uniform distribution of an outcome chosen among three possible choices with a uniform distribution on the interval of 1-0.5 to 3+0.5. Each number fall on the continuous space from 0.5 to 3,5 will have an equal likelihood of being chosen. Any floating point number will be rounded to the closest integer with equal likelihood, hence the possible value that could be taken on becomes 1 and 2 and 3, with each value having equal odds of being picked.

