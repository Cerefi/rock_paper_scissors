const RPS = ['rock', 'paper', 'scissors'];
const cScore = document.querySelector('#cScr');
const pScore = document.querySelector('#pScr');
const btnRock = document.querySelector('#btnRock');
const btnScissors = document.querySelector('#btnScissors');
const btnPaper = document.querySelector('#btnPaper')
const computerChoice = document.querySelector('#computerChoice');
const playerChoice = document.querySelector('#playerChoice');
const gameResult = document.querySelector('#divGameResult');
const result = document.querySelector('.declare');
const playAgain = document.querySelector('.play-again');
let computerRecord = 0;
let playerRecord = 0;
cScore.textContent = computerRecord;
pScore.textContent = playerRecord;

main();

function main(){

    btnRock.addEventListener('click', () => {
        cChoice = getComputerChoice();
        playRound('rock', cChoice);
        updateRecords();
        playerChoice.textContent = 'ROCK!'
        displayComputerChoice(cChoice);
        checkWinner();
    })

    btnPaper.addEventListener('click', () => {
        cChoice = getComputerChoice();
        playRound('paper', cChoice);
        updateRecords();
        playerChoice.textContent = 'PAPER!'
        displayComputerChoice(cChoice);
        checkWinner();
    })

    btnScissors.addEventListener('click', () => {
        cChoice = getComputerChoice();
        playRound('scissors', cChoice);
        updateRecords();
        playerChoice.textContent = 'SCISSORS!'
        displayComputerChoice(cChoice);
        checkWinner();
    })
}


function playRound(playerSelection, computerSelection)
{

    if (playerSelection === 'rock')
    {
        if (computerSelection === 'rock')
        {
            return 0;
        }
        else if (computerSelection === 'paper')
        {
            computerRecord++;
            return 0;
        }
        else 
        {
            playerRecord++;
            return 0;
        }
    }
    else if (playerSelection === 'paper')
    {
        if (computerSelection === 'rock')
        {
            playerRecord++;
            return 0;
        }
        else if (computerSelection === 'paper')
        {
            return 0;
        }
        else 
        {
            computerRecord++;
            return 0;
        }
    }
    else
    {
        if (computerSelection === 'rock')
        {
            computerRecord++;
            return 0;
        }
        else if (computerSelection === 'paper')
        {
            playerRecord++;
            return 0;
        }
        else 
        {
            return 0;
        }
    }
}


function getComputerChoice ()
{
    return RPS[Math.floor(Math.random() * 3)];   
}

function displayComputerChoice (choice){
    if (choice == 'rock'){
        computerChoice.textContent = 'ROCK!';
    }
    else if (choice == 'paper'){
        computerChoice.textContent = 'PAPER!';
    }
    else if (choice == 'scissors')
    {
        computerChoice.textContent = 'SCISSORS!'
    }
}

function updateRecords (){
    cScore.textContent = computerRecord;
    pScore.textContent = playerRecord;
}


function checkWinner(){
    if (playerRecord === 5 ){
        result.textContent = 'YOU WIN!';
        playAgain.removeAttribute('hidden');
    }
    else if (computerRecord === 5){
        result.textContent = 'YOU LOSE!';
        playAgain.removeAttribute('hidden');
    }
}