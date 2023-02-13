const slider = document.getElementById("myRange");
const output = document.getElementById("demo");

output.innerHTML = `${slider.value} x ${slider.value}`;

slider.oninput = function () {
  output.innerHTML = `${this.value} x ${this.value}`;
};

// const init = function {
//     //read output from slide bar - store in variable for 'number of boxes'
//     //create divs nested in container div
// }
