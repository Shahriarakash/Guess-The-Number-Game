//'use strict';

let highScoreData = Number(localStorage.getItem('highcore'));
let guess = Math.round(Math.random() * 20);

let score = document.querySelector('.score');
score.innerHTML = 20;
let checkButton = document.querySelector('.check');
let againButton = document.querySelector('.again');
let messsage = document.querySelector('.message');
let highScore = document.querySelector('.highscore');

highScore.innerHTML = highScoreData;
let input;
let count = 19;

checkButton.addEventListener('click', e => {
  input = Number(document.querySelector('.guess').value);
  if (input === guess) {
    messsage.innerHTML = `🎉Correct number!`;
    console.log(highScoreData);
    if (guess > highScoreData) {
      highScore.innerHTML = `${guess}`;
      localStorage.setItem('highcore', guess);
    }
    rightSelect();
  } else if (null || input <= guess) {
    messsage.innerHTML = `Too Low!`;
    wrongSelect();
  } else if (null || input >= guess) {
    messsage.innerHTML = `Too High!`;
    wrongSelect();
  }
  if (input !== guess) {
    lifeScoreCount(e);
  }

  document.querySelector('.guess').value = '';
});

// let akash=20;
// localStorage.setItem('mess', akash)
// let storage = Number(localStorage.getItem('mess'))
// console.log(typeof storage);

againButton.addEventListener('click', () => {
  score.innerHTML = 20;
  messsage.innerHTML = `Start guessing...`;
  guess = Math.round(Math.random() * 20);
  console.log(guess, guess);
});

function wrongSelect() {
  document.body.style.background = 'red';
  setTimeout(() => {
    document.body.style.background = '#222222';
  }, 2000);
}

function rightSelect() {
  document.body.style.background = 'green';
  setTimeout(() => {
    document.body.style.background = '#222222';
  }, 2000);
}
console.log(guess);

function lifeScoreCount(e) {
  if (e && count >= 0) {
    score.innerHTML = `${count--}`;
  } else if (count === 0) {
    score.innerHTML = `Sorry! Life = 0`;
  }
}
