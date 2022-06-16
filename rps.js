const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

let userScore = 0;
let compScore = 0;
const winningScore = 3;

// player wins round
function userRoundWin() {
  userScore += 1;
  console.log('User wins this round!');
}

// comp wins round
function compRoundWin() {
  compScore += 1;
  console.log('Computer wins this round!');
}

// tally score
function addScore(choice, computerChoice) {
  prompt(`You chose ${choice}. | Computer chose ${computerChoice}.`);

  if (
    (choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')
  ) {
    userRoundWin();
  } else if (
    (choice === 'rock' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'rock')
  ) {
    compRoundWin();
  } else {
    prompt("It's a tie!");
  }
}

function displayWinner() {
  if (userScore === winningScore) {
    prompt(`User wins! Score: ${userScore}:${compScore}`);
  } else if (compScore === winningScore) {
    prompt(`Computer wins! Score: ${compScore}:${userScore}`);
  }
}

let counter = 0;
while (true) {
  counter += 1;
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);

  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`Choose one: ${VALID_CHOICES.join(', ')}.`);

  let choice = readline.question().toLocaleLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    prompt('Invalid answer. Please input rock, paper or scissors.');
    choice = readline.question();
  }

  addScore(choice, computerChoice);
  console.log(
    `Round: ${counter} \nUser Score: ${userScore} | Comp Score: ${compScore}`
  );

  displayWinner();

  if (userScore === winningScore || compScore === winningScore) {
    prompt('Do you want to play again (y/n)?');
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }
    if (answer[0] === 'y') {
      userScore = 0;
      compScore = 0;
      counter = 0;
    } else break;
  }
}

// console.log(VALID_CHOICES, VALID_CHOICES.join(', '));
// // [ 'rock', 'paper', 'scissors' ] rock, paper, scissors
