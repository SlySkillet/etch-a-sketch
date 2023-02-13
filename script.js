const slider = document.getElementById("myRange");
const output = document.getElementById("demo");

let gridSize = 16;

output.innerHTML = `${slider.value} x ${slider.value}`;

slider.oninput = function () {
  output.innerHTML = `${this.value} x ${this.value}`; //rewrites grid-size display
  gridSize = this.value; //sets grid-size variable
};

const makeGrid = function () {};

makeGrid();
