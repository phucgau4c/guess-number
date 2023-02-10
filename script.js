'use strict';

let scoreDefault = 20;

const highScore = 0;

const random = () => {
  return Math.floor(Math.random() * 20);
};

let randomNumber = random();

const guestInput = document.querySelector('.guess');

const score = document.querySelector('.score');
score.textContent = scoreDefault;

const number = document.querySelector('.number');

const background = document.body.style;

const message = document.querySelector('.message');

const handleScore = () => {
  scoreDefault--;
  score.textContent = scoreDefault;
  if (scoreDefault === 0) {
    message.textContent = '💥 Game over';
  } else if (scoreDefault < 0) {
    reset();
  }
};

console.log('random: ' + randomNumber);

const check = () => {
  if (guestInput.value < randomNumber) {
    message.textContent = '⬇️ Too Low';
    handleScore();
  } else if (guestInput.value > randomNumber) {
    message.textContent = '⬆️ Too High';
    handleScore();
  } else {
    if (highScore < scoreDefault) {
      document.querySelector('.highscore').textContent = scoreDefault;
    }

    message.textContent = '🎊 Congratulation';
    number.textContent = randomNumber;
    background.backgroundColor = '#04AA6D';
  }
};

const reset = () => {
  number.textContent = '?';
  background.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  guestInput.value = '';
  scoreDefault = 20;
  score.textContent = scoreDefault;
  randomNumber = random();
};

document.querySelector('.check').addEventListener('click', check);

document.querySelector('.again').addEventListener('click', reset);
