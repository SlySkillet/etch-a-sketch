let color = "black";

const colorCell = function () {
  this.style.backgroundColor = color;
};

const changeColor = function (choice) {
  color = choice;
};

// const rainbowColor = function () {
//   let num = math.random();
//   console.log(num);
// };

const makeGrid = function (size) {
  let board = document.querySelector(".container");
  let cells = board.querySelectorAll("div");
  cells.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let gridCells = size * size;
  for (let i = 0; i < gridCells; i++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", colorCell);
    // cell.style.backgroundColor = "rgb(243, 92, 200)";
    board.insertAdjacentElement("beforeend", cell);
  }
};

const changeSize = function (input) {
  if (input >= 16 && input <= 100) {
    makeGrid(input);
  } else {
    console.log("broh num between 16 and 100 broh 🐳");
  }
};

makeGrid(16);
