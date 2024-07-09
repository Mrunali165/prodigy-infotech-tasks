let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cells = document.querySelectorAll(".cell");
const statusDisplay = document.getElementById("status");

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick);
});

function handleClick(e) {
  const cellIndex = parseInt(e.target.id.slice(4)); // get cell index from id like 'cell0', 'cell1', etc.

  if (board[cellIndex] === "" && gameActive) {
    board[cellIndex] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (checkWin()) {
      statusDisplay.innerText = `Player ${currentPlayer} wins!`;
      gameActive = false;
      return;
    }

    if (checkDraw()) {
      statusDisplay.innerText = "It's a draw!";
      gameActive = false;
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerText = `Player ${currentPlayer}'s turn`;
  }
}

function checkWin() {
  for (let condition of winningConditions) {
    let [a, b, c] = condition;
    if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return board.every((cell) => cell !== "");
}

function resetGame() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  statusDisplay.innerText = `Player ${currentPlayer}'s turn`;
  cells.forEach((cell) => {
    cell.innerText = "";
  });
}
