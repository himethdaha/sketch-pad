let valid = true;
let squares;
while (valid) {
  squares = parseInt(
    prompt(`Enter the number of sqaures for the grid`, `Max is 100`)
  );
  if (isNaN(squares)) {
    alert("Value must be a number");
    valid = true;
  } else if (squares > 100 || squares <= 0) {
    alert("Value must be between 0 and 100");
    valid = true;
  } else {
    valid = false;
  }
}

const container = document.querySelector(".container");
let div;
for (let i = 1; i <= squares * squares; i++) {
  container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
  div = document.createElement("div");
  div.classList.add(`cell`);
  div.classList.add(`cell-${i}`);
  div.setAttribute(
    "style",
    "background-color:white;border:1px solid black; display:inline;"
  );
  container.appendChild(div);
}
