const RPS = ['rock', 'paper', 'scissors'];
const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors')
const divRoundResult = document.querySelector('#divResult');
const divGameResult = document.querySelector('#divGameResult');
const divPlayerRecord = document.querySelector('#divPlayerRecord');
const divComputerRecord = document.querySelector('#divComputerRecord');
const displayPlayerChoice = document.querySelector('#playerChoice');
const displayComputerChoice = document.querySelector('#computerChoice');

let computerChoice = '';
let playerRecord = 0;
let computerRecord = 0;
let resultRound = '';

game ();

function game()
{

    resultRound = btnRock.addEventListener('click', playRound('rock', getComputerChoice()));
    resultRound = btnPaper.addEventListener('click', playRound('paper', getComputerChoice()));
    resultRound = btnScissors.addEventListener('click', playRound('scissors', getComputerChoice()));
    divRoundResult.textContent = resultRound;
    divPlayerRecord.textContent = playerRecord;
    divComputerRecord.textContent = computerRecord;

    if (playerRecord === 5){
        divGameResult = 'YOU WIN!';
    }
    else if (computerRecord === 5){
        divGameResult === 'YOU LOSE! COMPUTER WINS!';
    }
}


function playRound(playerSelection, computerSelection)
{
    if (playerSelection === 'rock')
    {
        if (computerChoice === 'rock')
        {
            return ('Draw');
        }
        else if (computerSelection === 'paper')
        {
            computerRecord++;
            return ('You Lose! Paper beats Rock');
        }
        else 
        {
            playerRecord++;
            return ('You Win! Rock beats Scissors');
        }
    }
    else if (playerSelection === 'paper')
    {
        if (computerSelection === 'rock')
        {
            playerRecord++;
            return ('You Win! Paper beats Rock');
        }
        else if (computerSelection === 'paper')
        {
            return ('Draw');
        }
        else 
        {
            computerRecord++;
            return ('You Lose! Scissors beats Paper');
        }
    }
    else
    {
        if (computerSelection === 'rock')
        {
            computerRecord++;
            return ('You Lose! Rock beats Scissors');
        }
        else if (computerSelection === 'paper')
        {
            playerRecord++;
            return ('You Win! Scissors beats Paper');
        }
        else 
        {
            return ('Draw');
        }
    }
}


function getComputerChoice ()
{
    return Math.floor(Math.random() * 3);   
}
