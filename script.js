const sliderSize = document.getElementById("sizeRange");
const gridSizeDisplay = document.getElementById("grid-size");

let gridSize = sliderSize.value;

const gridItemColor = function () {
  $(this).classList.toggle("--black-cell");
};

//function to create grid takes in gridSize as a parameter, makes gridSize**2 div elements inside of the container
const makeGrid = function (gridSize) {
  let gridArea = gridSize ** 2;
  for (let i = 0; i < gridArea; i++) {
    let gridItem = document.createElement("div");
    // gridItem.classList.add("grid-item"); // allows us to selct and toggle grid divs in hover function
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.insertAdjacentElement("beforeend", gridItem);
  }
  const gridCells = container.querySelectorAll("div");
  gridCells.forEach((gridCells) =>
    gridCells.addEventListener("mouseover", console.log("suh¿?"))
  );
};

//slider function - takes number for rows/columns and stores it in gridSize variable and displays it, returns gridSize
sliderSize.oninput = function () {
  gridSizeDisplay.textContent = `${this.value} x ${this.value}`; //rewrites grid-size display
  gridSize = this.value; //sets grid-size variable
  //   console.log(gridSize);
  makeGrid(gridSize);
};

//hover function - when cursor hovers over div for a specified amount of time, change background color of div to black (use class selector and css so that mode functionality works later)
// how to write hover function??
// how to add class selector to div using DOM manipulation?

//

//INIT
gridSizeDisplay.textContent = `${gridSize} x ${gridSize}`;
makeGrid(gridSize);
