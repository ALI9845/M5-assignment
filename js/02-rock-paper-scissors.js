function rockPaperScissorsGame() {
    let userChoice  = prompt('chooes rock , paper , or scissor :')  

const validChoices = ['rock', 'paper', 'scissors']
    if (!validChoices.includes(userChoice)) {
        alert('Invalid choice! Please choose either rock, paper, or scissors.')
            return
    }
}
const randomNumber = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
let computerChoice;

if (randomNumber === 0) {
    computerChoice = 'rock'
} else if (randomNumber === 1) {
    computerChoice = 'paper'
} else {
    computerChoice = 'scissors';
}
if (userChoice === computerChoice) {
    alert(`It's a tie! Both chose ${userChoice}.`);
} else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
) {
    alert(`You win! ${userChoice} beats ${computerChoice}.`);
} else {
    alert(`You lose! ${computerChoice} beats ${userChoice}.`);
}

rockPaperScissorsGame();