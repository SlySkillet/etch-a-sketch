const makeGrid = function (size) {
  let board = document.querySelector(".container");
  let cells = board.querySelectorAll("div");
  cells.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let gridCells = size * size;
  for (let i = 0; i < gridCells; i++) {
    let cell = document.createElement("div");
    cell.addEventListener(
      "mouseover",
      () => (cell.style.backgroundColor = "black")
    );
    cell.style.backgroundColor = "rgb(243, 92, 200)";
    board.insertAdjacentElement("beforeend", cell);
  }
};

makeGrid(16);

const changeSize = function (input) {
  if (input >= 16 && input <= 100) {
    makeGrid(input);
  } else {
    console.log("broh number between 16 and 100 broh 🐳");
  }
};
