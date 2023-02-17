let color = 'black';

const changeColor = function (choice) {
  color = choice;
};

const colorCell = function () {
  if (color === 'rainbow') {
    console.log('suh');
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
};

// const rainbowColor = function () {
//   let num = Math.floor(Math.random() * 8);
//   if (num === 0) {
//     changeColor('maroon');
//   } else if (num === 1) {
//     changeColor('red');
//   } else if (num === 2) {
//     changeColor('orange');
//   } else if (num === 3) {
//     changeColor('yellow');
//   } else if (num === 4) {
//     changeColor('green');
//   } else if (num === 5) {
//     changeColor('blue');
//   } else if (num === 6) {
//     changeColor('indigo');
//   } else {
//     changeColor('violet');
//   }
// };

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
