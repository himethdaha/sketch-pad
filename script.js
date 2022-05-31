const create = document.getElementById("create");
const clear = document.getElementById("clear");
const color = document.getElementById("color");
const colorBtn = document.querySelector(".options__color");
const erase = document.getElementById("erase");
const container = document.querySelector(".container");
const allDivs = document.getElementsByClassName("cell");

let valid = true;
let squares;
let div;

create.addEventListener("click", function () {
  // if (container.firstChild) {
  //   window.location.reload();
  // }
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
  //Get the the number of cells
  let lngth = allDivs.length;

  //Give each cell an index
  for (let i = 0; i < lngth; i++) {
    allDivs[i].dataset.index = i;
  }

  //Change border color of the color button
  let btnLetters = "0123456789ABCDEF";
  let btnColor = "#";
  for (let i = 0; i < 6; i++) {
    btnColor += btnLetters[Math.floor(Math.random() * 16)];
  }
  colorBtn.setAttribute("style", `border:4px solid ${btnColor}`);
  //Add a mouseover event listener to each div cell
  Array.from(allDivs).forEach((el) => {
    el.addEventListener("mouseover", function () {
      let letters = "0123456789ABCDEF";
      let color = "#";

      //If cell is black return
      if (el.style.backgroundColor === "black" && el.style.opacity === 1.0) {
        return;
      }

      //Once a cell is colored, start adding shades of black
      if (
        el.classList.contains("active") ||
        (el.classList.contains("activated") &&
          !el.classList.contains("completed"))
      ) {
        console.log(el);
        let col = window
          .getComputedStyle(el)
          .getPropertyValue("background-color");

        let opaque = window.getComputedStyle(el).getPropertyValue("opacity");
        console.log(opaque, typeof opaque, col);
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
        el.classList.add("activated");
        el.classList.remove("activate");
      }

      //When the cell is colored add the 'active' class to the specific cell
      if (el.classList.contains("activated")) {
        el.classList.remove("active");
      } else {
        el.classList.add("active");
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        //Set bg color
        el.style.backgroundColor = `${color}`;
        el.style.opacity = 1.0;
      }
    });
  });
});
