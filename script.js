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
                if(randomColorSwitch && e.target.style.backgroundColor != "red") {
                    e.target.style.backgroundColor = `hsl(${e.target.dataset.hue},${e.target.dataset.saturation}%,${e.target.dataset.lightness}%)`;
                    if ( e.target.dataset.lightness >10) e.target.dataset.lightness -=10;
                } 
                else if (!randomColorSwitch && e.target.style.backgroundColor == "") {
                    e.target.style.backgroundColor = "red";
                }
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

function randomColor() {
    gridRandomColor.addEventListener("click", e => {
        randomColorSwitch = randomColorSwitch == false? true: false;
        if(randomColorSwitch) e.target.style.backgroundColor = "rgb(55, 151, 206)";
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
            gridColSquare.dataset.hue = parseInt(Math.random()*360);
            gridColSquare.dataset.saturation = parseInt(Math.random()*100);
            gridColSquare.dataset.lightness = 90;
            gridColSquare.style.cssText = `
                flex: auto;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 2px solid green;
                margin: 2px;
                width: 100%;
            `;
            gridColSquare.textContent = `${y+1}`;
            gridRowContainer.appendChild(gridColSquare);
        }
    }
    gridSquares = document.querySelectorAll(".grid-column-square");
    randomColor();
    colorOnHover();

}

function newGrid() {
    gridNew.addEventListener("click", e=> {
        let gridValue = prompt("Enter Row Size and Column size separated by space (e.g. 16 16).").split(" ");

        while(!(gridValue[0]>0 && gridValue[0]<=70 && gridValue[1]>0 && gridValue[1]<=70)) {
            alert("Input values must be between 1 to 70");
            gridValue = prompt("Enter Row Size and Column size separated by space (e.g. 16 16).").split(" ");
        }

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
let randomColorSwitch = false;

const gridNew = document.getElementById("new-grid");
const gridClear = document.getElementById("clear-grid");
const mouseHoverSwitch = document.getElementById("switch-hover");
const gridSubHeading = document.querySelector(".grid-display-size");
const gridContainer = document.querySelector(".grid-container");
const gridRandomColor = document.getElementById("random-color");

createGrid();

newGrid();

switchMouseControl();

clearGrid();
