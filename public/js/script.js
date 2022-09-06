"use strict";
const score = document.querySelectorAll(".score");
const player = document.querySelectorAll(".player");
const current = document.querySelectorAll(".current-score");

const rollDic = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const dicImage = document.querySelector(".dice");
const newGame = document.querySelector(".btn--new");

let activePlayer, currentScore, sumScore, playing;
resetPage();

rollDic.addEventListener("click", () => {
  if (playing === true) {
    let dicNubmer = Math.floor(Math.random() * 6 + 1);
    console.log(dicNubmer);
    dicImage.src = "./img/dice-" + dicNubmer + ".png";
    dicImage.classList.remove("hidden");

    if (dicNubmer !== 1) {
      console.log(dicNubmer);
      currentScore += dicNubmer;
      current[activePlayer].textContent = currentScore;
    } else {
      playerSwitch();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (playing === true) {
    sumScore[activePlayer] += currentScore;
    score[activePlayer].textContent = sumScore[activePlayer];

    if (sumScore[activePlayer] >= 10) {
      playing = false;
      dicImage.classList.add("hidden");

      player[activePlayer].classList.remove("player--active");
      player[activePlayer].classList.add("player--winner");
    } else {
      playerSwitch();
    }
  }
});
newGame.addEventListener("click", () => {
  resetPage();
});

function playerSwitch() {
  currentScore = 0;
  current[activePlayer].textContent = 0;
  player[activePlayer].classList.remove("player--active");
  activePlayer = activePlayer === 1 ? 0 : 1;
  player[activePlayer].classList.add("player--active");
}

function resetPage() {
  for (let i = 0; i <= 1; i++) {
    player[i].classList.remove("player--winner");
    player[i].classList.remove("player--active");
    score[i].textContent = "0";
    current[i].textContent = "0";
  }
  player[0].classList.add("player--active");
  sumScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  dicImage.classList.add("hidden");
}
