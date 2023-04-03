
const message = document.querySelector(".message");

const EX = "❌";
const OES = "⭕";
const CHECK = "✔️";
let isExTurn = true;
let exesPicks = [];
let checksPicks = [];
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


const cell = document.querySelectorAll(".cell");

for (let i = 0; i < cell.length; i++) {
  const element = cell[i];
  element.addEventListener("click", pick)
}

function pick() {

  if (isExTurn) {
    this.innerHTML = EX;
    exesPicks.push( parseInt(this.id) );
    checkWin(exesPicks);
  } else {
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
      message.innerHTML = "You win!"

      for (let i = 0; i < cell.length; i++) {
        const element = cell[i];
        element.removeEventListener("click", pick)
      }
    }

  })
}

