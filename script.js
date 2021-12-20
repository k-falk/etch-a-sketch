
function loadSketchBox(){

const sketchBox = document.querySelector(".sketch-box");

const area = 16;

for(let i = 0; i < area; i++){
    const row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < area; j++){
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            row.appendChild(pixel);
            
        }
        sketchBox.appendChild(row);
    }
}
loadSketchBox();