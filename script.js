"use strict";
function colorOnHover() {
    gridSquares.forEach(square=> {
        square.addEventListener("mouseover", e => {
            if(mouseSwitchHold && mouseColorHold) {
                e.target.style.backgroundColor = "red";
            }
            else if (!mouseSwitchHold)  { 
                e.target.style.backgroundColor = "red";
            }
        });
    });
}

function clearGrid() {
    gridClear.addEventListener("click", e=> {
        gridSquares.forEach(square=> {
            square.style.backgroundColor = "transparent";
        });
    });
}

function getMouseDown() {
    gridContainer.addEventListener("mousedown", ms => { 
        mouseColorHold = true;
        
    });

    gridContainer.addEventListener("mouseup", ms => { 
        mouseColorHold = false;
    });

}

function switchMouseControl() {
    mouseHoverSwitch.addEventListener("click", e => {
        if(mouseSwitchHold == false) mouseSwitchHold = true;
        else mouseSwitchHold = false;
    });
}

let gridRowSize = 16;
let gridColSize = 16; 
const gridNew = document.getElementById("new-grid");
const gridClear = document.getElementById("clear-grid");
const mouseHoverSwitch = document.getElementById("switch-hover");


let mouseSwitchHold = false;

let mouseColorHold = false;

const gridSubHeading = document.querySelector(".grid-display-size");
gridSubHeading.textContent = `${gridRowSize} x ${gridColSize} Grid`;
 
const gridContainer = document.querySelector(".grid-container");

for(let x=0; x<gridRowSize; x++) {
    const gridRowContainer = document.createElement("div");
    gridRowContainer.classList.add("grid-row");
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

const gridSquares = document.querySelectorAll(".grid-column-square");

switchMouseControl();
getMouseDown();

colorOnHover();
clearGrid();
