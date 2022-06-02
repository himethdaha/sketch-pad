const create = document.getElementById("create");
const clear = document.getElementById("clear");
const color = document.getElementById("color");
const colorBtn = document.querySelector(".options__color");
const container = document.querySelector(".container");
const allDivs = document.getElementsByClassName("cell");

let valid = true;
let squares;
let div;

create.addEventListener("click", function () {
  if (container.firstChild) {
    window.location.reload();
  }
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
});

clear.addEventListener("click", function () {
  window.location.reload();
});

color.addEventListener("click", function () {
  //When the color button is clicked after erasing a color
  let btnLetters = "0123456789ABCDEF";
  let btnColor = "#";

  //Get the the number of cells
  let lngth = allDivs.length;

  //Change border color of the color button
  for (let i = 0; i < 6; i++) {
    btnColor += btnLetters[Math.floor(Math.random() * 16)];
  }
  //If no cells have been generated, don't color the border
  if (lngth === 0) {
    return;
  } else {
    colorBtn.setAttribute("style", `border:4px solid ${btnColor}`);
  }

  //Give each cell an index
  for (let i = 0; i < lngth; i++) {
    allDivs[i].dataset.index = i;
  }

  //Add a mouseover event listener to each div cell
  Array.from(allDivs).forEach((el) => {
    el.addEventListener("mouseover", function () {
      let letters = "0123456789ABCDEF";
      let color = "#";

      //If cell is black return
      if (el.style.backgroundColor === "black" && el.style.opacity === 1.0) {
        return;
      }

      if (
        el.classList.contains("activated") &&
        !el.classList.contains("completed")
      ) {
        console.log(`Setting the bg for the shades`);
        console.log(el);

        let opaque = window.getComputedStyle(el).getPropertyValue("opacity");
        if (opaque === String(1)) {
          el.style.backgroundColor = "black";
          el.style.opacity = 0.1;
        } else if (opaque === String(0.1)) {
          // el.style.backgroundColor = "black";
          el.style.opacity = 0.2;
        } else if (opaque === String(0.2)) {
          // el.style.backgroundColor = "black";
          el.style.opacity = 0.3;
        } else if (opaque === String(0.3)) {
          // el.style.backgroundColor = "black";
          el.style.opacity = 0.4;
        } else if (opaque === String(0.4)) {
          // el.style.backgroundColor = "black";
          el.style.opacity = 0.5;
        } else if (opaque === String(0.5)) {
          // el.style.backgroundColor = "black";
          el.style.opacity = 0.6;
        } else if (opaque === String(0.6)) {
          // el.style.backgroundColor = "black";
          el.style.opacity = 0.7;
        } else if (opaque === String(0.7)) {
          // el.style.backgroundColor = "black";
          el.style.opacity = 0.8;
        } else if (opaque === String(0.8)) {
          // el.style.backgroundColor = "black";
          el.style.opacity = 0.9;
        } else if (opaque === String(0.9)) {
          // el.style.backgroundColor = "black";
          el.style.opacity = 1;
          el.classList.add("completed");
        }
      }
      //If the cell is colored for the first time or is being colored after erasing
      if (!el.classList.contains("activated")) {
        //Add the color to the cell
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        //Set bg color
        el.style.backgroundColor = `${color}`;
        el.style.opacity = 1.0;
        console.log(`Setting the bg for the first time`);
        console.log(el);
        el.classList.add("activated");
      }
    });
  });
});
