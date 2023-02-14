const sliderSize = document.getElementById("sizeRange");
const output = document.getElementById("grid-size");
let gridSize = sliderSize.value;

//INIT
output.innerHTML = `${gridSize} x ${gridSize}`;
console.log(gridSize);

//slider function - takes number for rows/columns and stores it in gridSize variable and displays it, returns gridSize
sliderSize.oninput = function () {
  output.innerHTML = `${this.value} x ${this.value}`; //rewrites grid-size display
  gridSize = this.value; //sets grid-size variable
  //   console.log(gridSize);
  makeGrid(gridSize);
};

//function to create grid takes in gridSize as a parameter, makes gridSize**2 div elements inside of the container
const makeGrid = function (gridSize) {
  let gridArea = gridSize ** 2;
  for (let i = 0; i < gridArea; i++) {
    let gridItem = document.createElement("div");
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.insertAdjacentElement("beforeend", gridItem);
  }
};

// makeGrid(gridSize);
