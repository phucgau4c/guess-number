'use strict';

const scoreDefault = 20;
let highScore = 0;

const randomNumber = Math.floor(Math.random() * 20);

const guestInput = document.querySelector('.guess');

const score = (document.querySelector('.score').textContent = scoreDefault);

const number = document.querySelector('.number');

const background = document.body.style;

let message = document.querySelector('.message');

document.querySelector('.highscore').textContent = highScore;

console.log('random: ' + randomNumber);

document.querySelector('.check').addEventListener('click', () => {
  if (guestInput.value < randomNumber) {
    console.log('too low');
    message.textContent = '⬇️ Too Low';
    console.log('score: ' + score);
  } else if (guestInput.value > randomNumber) {
    console.log('too hight');
    message.textContent = '⬆️ Too High';

    console.log('score: ' + score);
  } else {
    message.textContent = '🎊 Congratulation';
    number.textContent = randomNumber;
    background.backgroundColor = '#04AA6D';
    console.log('score: ' + score);
  }
});
