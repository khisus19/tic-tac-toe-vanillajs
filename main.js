
const message = document.querySelector(".message");
const inTurnMessageEle = document.querySelector(".inTurnMessage");
const resetBtnEle = document.getElementById("resetBtn");
const cell = document.querySelectorAll(".cell");
const firstPlayerPointsEle = document.querySelector(".firstPlayerPoints");
const secondPlayerPointsEle = document.querySelector(".secondPlayerPoints");


const EX = "❌";
const CHECK = "✔️";
let isExTurn = true;
let exesPicks = [];
let checksPicks = [];
let firstPlayerPoints = 0;
let secondPlayerPoints = 0;
const WINS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];


const addCellListeners = () => {
  for (let i = 0; i < cell.length; i++) {
    const element = cell[i];
    element.addEventListener("click", pick)
  }
}

function pick() {
  message.innerText = "Continue"

  if (isExTurn) {
    inTurnMessageEle.innerHTML = CHECK;
    this.innerHTML = EX;
    exesPicks.push( parseInt(this.id) );
    checkWin(exesPicks);
  } else {
    inTurnMessageEle.innerHTML = EX;
    this.innerHTML = CHECK;
    checksPicks.push( parseInt(this.id) );
    checkWin(checksPicks);
  }
  isExTurn = !isExTurn;

  this.removeEventListener("click", pick)
}

function checkWin(arrayInTurn) {
  
  WINS.map(winPattern => {
    const containsAll = winPattern.every(element => {
      return arrayInTurn.includes(element);
    })

    if (containsAll) {
      message.innerHTML = `${isExTurn ? EX : CHECK} Wins`

      for (let i = 0; i < cell.length; i++) {
        const element = cell[i];
        element.removeEventListener("click", pick)
      }

      if (isExTurn) {
        firstPlayerPoints += 1;
        firstPlayerPointsEle.innerHTML = firstPlayerPoints;
      } else {
        secondPlayerPoints += 1;
        secondPlayerPointsEle.innerHTML = secondPlayerPoints;
      }
    }

  })
}

const resetGame = () => {
  for (let i = 0; i < cell.length; i++) {
    const element = cell[i];
    element.innerHTML = "";
  }
  exesPicks = [];
  checksPicks = [];
  addCellListeners();
  message.innerHTML = "Start to play"
}

addCellListeners();
resetBtnEle.addEventListener("click", resetGame);
