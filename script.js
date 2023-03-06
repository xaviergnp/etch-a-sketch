"use strict";
function colorOnHover() {
    let mouseHold = false;
    gridSquares.forEach(square=> {
        gridContainer.addEventListener("mouseup", () =>  {
            mouseHold = false;
            
        });
        gridContainer.addEventListener("mousedown", () =>  {
            mouseHold = true;
            
        });

        square.addEventListener("mouseover", e => {
            if(!controlSwitch || (controlSwitch && mouseHold)) {
                e.target.style.backgroundColor = "red";
            }
        });
    });
}

function clearGrid() {
    gridClear.addEventListener("click", e=> {
        gridSquares.forEach(square=> {
            square.style.backgroundColor = "initial";
        });
    });
}

function switchMouseControl() {
    mouseHoverSwitch.addEventListener("click", e => {
        controlSwitch = controlSwitch == false ? true : false;
        if(controlSwitch) e.target.style.backgroundColor = "rgb(55, 151, 206)";
        else e.target.style.backgroundColor = "azure";
    });
}

function createGrid() {
    gridSubHeading.textContent = `${gridRowSize} x ${gridColSize} Grid`;
    for(let x=0; x<gridRowSize; x++) {
        const gridRowContainer = document.createElement("div");
        gridRowContainer.classList.add("grid-row");
        gridRowContainer.style.cssText = `display: flex;`;
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
    gridSquares = document.querySelectorAll(".grid-column-square");
    colorOnHover();

}

function newGrid() {
    gridNew.addEventListener("click", e=> {
        let gridValue = prompt("Enter Row Size and Column size separated by space (e.g. 16 16).").split(" ");
        gridRowSize=gridValue[0];
        gridColSize=gridValue[1];
        gridContainer.replaceChildren();
        createGrid();
    });
}

let gridRowSize = 16;
let gridColSize = 16;
let controlSwitch = false;
let mouseOnHold = false;
let gridSquares; 

const gridNew = document.getElementById("new-grid");
const gridClear = document.getElementById("clear-grid");
const mouseHoverSwitch = document.getElementById("switch-hover");
const gridSubHeading = document.querySelector(".grid-display-size");
const gridContainer = document.querySelector(".grid-container");

createGrid();

newGrid();

switchMouseControl();

clearGrid();
