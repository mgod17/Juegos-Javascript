const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice
let computerChoice 
let result

possibleChoices.forEach(possibleChoices => possibleChoices. addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 ;

    if(randomNumber === 1) {
        computerChoice = 'paper'
    }
    else if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    else {
        computerChoice = 'rock'
    }

    computerChoiceDisplay.innerHTML = computerChoice;

}

function getResult() {
    if (computerChoice===userChoice) {
        result = 'it´s a tie'
    }
     else if(computerChoice=== 'rock' && userChoice === 'scissors') {
        result = 'you lost'
    }else if(computerChoice=== 'rock' && userChoice ==='paper') {
        result = 'you win'
    }
    else if(computerChoice=== 'paper' && userChoice === 'scissors') {
        result = 'you win'
    }else if(computerChoice=== 'paper' && userChoice ==='rock') {
        result = 'you lost'
    }
    else if(computerChoice=== 'scissors' && userChoice === 'rock') {
        result = 'you win'
    }else if(computerChoice=== 'scissors' && userChoice ==='papel') {
        result = 'you lost'
    }
    resultDisplay.innerHTML = result;
}
