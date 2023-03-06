"use strict";
function colorOnHover() {
    const gridSquares = document.querySelectorAll(".grid-column-square");
    gridSquares.forEach(square=> {
        square.addEventListener("mouseover", e => {
            e.target.style.cssText += `background-color: red;`;
        });
    });
}

let gridRowSize = 16;
let gridColSize = 16; 
const gridSubHeading = document.querySelector(".grid-display-size");
gridSubHeading.textContent = `${gridRowSize} x ${gridColSize} Grid`;
 
const gridContainer = document.querySelector(".grid-container");
for(let x=0; x<gridRowSize; x++) {
    const gridRowContainer = document.createElement("div");
    gridRowContainer.classList.add("grid-row");
    // gridRowContainer.textContent = `${x+1}`;
    gridRowContainer.style.cssText = `
        display: flex;
    `;
    gridContainer.appendChild(gridRowContainer);

    for(let y=0; y<gridColSize; y++) {
        const gridColSquare = document.createElement("div");
        gridColSquare.classList.add("grid-column-square");
        gridColSquare.style.cssText = `
            flex: 1 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid green;
            margin: 2px;
            aspect-ratio: 1 / 1 ;
        `;
        gridColSquare.textContent = `${y+1}`;
        gridRowContainer.appendChild(gridColSquare);
    }
}

colorOnHover();

