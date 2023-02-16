const makeGrid = function (size) {
  let board = document.querySelector(".container");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < 256; i++) {
    let cell = document.createElement("div");
    cell.style.backgroundColor = "rgb(243, 92, 200)";
    board.insertAdjacentElement("beforeend", cell);
  }
};

makeGrid(16);
