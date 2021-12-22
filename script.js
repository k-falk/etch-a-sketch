
function loadSketchBox(inputArea){

const sketchBox = document.querySelector(".sketch-box");

const area = inputArea;

for(let i = 0; i < area; i++){
    const row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < area; j++){
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            row.appendChild(pixel);
            
        }
        sketchBox.appendChild(row);
        listenToPixels();
    }
}
loadSketchBox(16);

function listenToPixels(){

    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach((pixel) => {

        pixel.addEventListener("mouseover", function( event ) {
            // highlight the mouseover target
            event.target.style.backgroundColor = "black";

        }, false);
    });
}

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", function( event ) {
    // highlight the mouseover target
        const pixels = document.querySelectorAll(".pixel");
        pixels.forEach((pixel) => { pixel.style.backgroundColor = "white";

    }, false)
}); 

const sizeButton = document.querySelector(".size-button");

sizeButton.addEventListener("click", function( event ) {
    // highlight the mouseover target
    let newSize = Number(prompt("Please enter new size", "32"));
    deleteNodeContents(document.querySelector(".sketch-box"));
    loadSketchBox(newSize);

    }, false); 


function deleteNodeContents(node){
    var range = document.createRange();
    range.selectNodeContents(node);
    range.deleteContents();
}