

const EXES = "❌";
const OES = "⭕";
const CHECK = "✔️";
let isExTurn = true;


const cell = document.querySelectorAll(".cell");

console.log(cell);
for (let i = 0; i < cell.length; i++) {
  const element = cell[i];
  element.addEventListener("click", pick)
}

function pick() {
  let currentCell = event.target;
  currentCell.innerHTML = isExTurn ? OES : CHECK;
  isExTurn = !isExTurn;


  // console.log(event.target);
}