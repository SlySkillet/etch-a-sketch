let color = 'black';
let click = true;

document.querySelector('.container').addEventListener('click', () => {
  click = !click;
  if (click) {
    document.querySelector('.mode').textContent =
      '🎨DRAWING MODE🎨 move cursor to draw ~~ click to lift your paint brush 🐋';
  } else {
    document.querySelector('.mode').textContent =
      'DRAWING MODE OFF ~~ click to draw';
  }
});

const changeColor = function (choice) {
  color = choice;
};

const colorCell = function () {
  if (click) {
    if (color === 'rainbow') {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (color === 'grey') {
      color = `rgba(0,0,0, 0.2)`;
      this.style.backgroundColor = color;
    } else {
      this.style.backgroundColor = color;
    }
  }
};

const makeGrid = function (size) {
  let board = document.querySelector('.container');
  let cells = board.querySelectorAll('div');
  cells.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let gridCells = size * size;
  for (let i = 0; i < gridCells; i++) {
    let cell = document.createElement('div');
    cell.addEventListener('mouseover', colorCell);
    // cell.style.backgroundColor = "rgb(243, 92, 200)";
    board.insertAdjacentElement('beforeend', cell);
  }
};

const changeSize = function (input) {
  if (input >= 16 && input <= 100) {
    makeGrid(input);
  } else {
    console.log('broh num between 16 and 100 broh 🐳');
  }
};

makeGrid(16);

const resetBoard = function () {
  let board = document.querySelector('.container');
  let cells = board.querySelectorAll('div');
  cells.forEach((div) => (div.style.backgroundColor = 'whitesmoke'));
};
