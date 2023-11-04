let RPS = ['rock', 'paper', 'scissors'];
let playerChoice = '';
let computerChoice;
let playerRecord = 0;
let computerRecord = 0;

game ();


function game()
{    
    while (playerRecord !== 5 && computerRecord !== 5)
    {
        while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors')
        {
            playerChoice = prompt('Rock, Paper or Scissors? ');
            playerChoice = playerChoice.toLowerCase();
        }
        computerChoice = RPS[getComputerChoice()];
        alert(round(playerChoice, computerChoice));
        playerChoice = '';
        console.log('Player: ' + playerRecord + ' Computer: ' + computerRecord);
    }

    if (playerRecord > computerRecord)
    {
        alert('Game Done! YOU WIN!');
    }
    else
    {
        alert('Game Done! COMPUTER WIN!');
    }
}


function round(playerSelection, computerSelection)
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
