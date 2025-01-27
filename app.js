const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerscoreDisplay = document.getElementById('playerscoreDisplay');
const computerscoreDisplay = document.getElementById('computerscoreDisplay');
const resetBtn = document.getElementById('resetBtn')

const choiceSound = new Audio('sounds/choice.wav');
const winSound = new Audio('sounds/win.wav');
const loseSound = new Audio('sounds/lose.wav');
const drawSound = new Audio('sounds/draw.wav');

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = `IT'S A TIE!`;
    } else {
        switch (playerChoice) {
            case 'rock':
                result = computerChoice === 'scissors' ? 'YOU WIN!' : 'YOU LOSE!';
                break;
            case 'paper':
                result = computerChoice === 'rock' ? 'YOU WIN!' : 'YOU LOSE!';
                break;
            case 'scissors':
                result = computerChoice === 'paper' ? 'YOU WIN!' : 'YOU LOSE!';
                break;
        }
    }


    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    
    resultDisplay.classList.remove('greentext', 'redtext');
    if (result === 'YOU WIN!') {
        resultDisplay.classList.add('greentext');
        playerScore++;
        playerscoreDisplay.textContent = playerScore;
        playSound('win'); 
    } else if (result === 'YOU LOSE!') {
        resultDisplay.classList.add('redtext');
        computerScore++;
        computerscoreDisplay.textContent = computerScore;
        playSound('lose'); 
    } else {
        playSound('draw'); 
    }

    choiceSound.play();
}

function playSound(result) {
    if (result === 'win') winSound.play();
    else if (result === 'lose') loseSound.play();
    else if (result === 'draw') drawSound.play();
}

function resetGame(){
    playerDisplay.textContent = '';
    computerDisplay.textContent = '';
    resultDisplay.textContent = '';
    playerScore=0;
    computerScore=0;
    playerscoreDisplay.textContent = playerScore;
    computerscoreDisplay.textContent =computerScore;

}