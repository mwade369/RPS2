var computerChoice = ['rock', 'paper', 'scissors'];
var actualChoice = Math.floor(Math.random() * 3);
var playerScore = 0;
var computerScore = 0;

//function for automatic computer choice
function computerPlay(){
//     var computerChoice = ['rock', 'paper', 'scissors'];
//    var actualChoice = Math.floor(Math.random() * 3);
    return computerChoice[actualChoice];
}
console.log(computerPlay())
// console.log(computerPlay())

// what the fuck i have to do 

function playRound(playerSelection, computerSelection){
 
     //get player to choose in any case
 var playerChoice = prompt('please choose rock, paper, or scissors');
 //make sure the string is lower case to match the computer
 var playerSelection = playerChoice.toLowerCase();
    //use computerPlay to make computerSelection dont know why the extra step yet
    var computerSelection = computerPlay();
    //compare player selection with comp selection maybe use switch statement eventually
    if( playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore++
        return 'player wins';
    } else if(playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore++
        return 'computer wins';
    } else if (playerSelection == 'rock' && computerSelection == 'rock'){
        return 'it\'s a tie'
    } else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        computerScore++
        return 'computer wins'
    } else if(playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore ++
        return 'player wins'
    } else if (playerSelection == 'paper' && computerSelection == 'paper'){
        return ' it\'s a trap, i mean tie'
    }else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
        return 'it\'s a tie'
    }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore ++
        return 'player wins'
    }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        computerScore++
        return 'computer wins'
    }

    //return winner with string
}

function playFiveTimes(){
    for(var i = 0; i<5; i++){
         
         console.log(playRound())
    }
}
console.log(playFiveTimes())

//testing the function