
let rainbowMode = false;

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
    }
    listenToPixels();
}
loadSketchBox(16);

function get_random_color() 
{
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}


const RGB_Linear_Shade=(p,c)=>{
    var i=parseInt,r=Math.round,[a,b,c,d]=c.split(","),P=p<0,t=P?0:255*p,P=P?1+p:1-p;
    return"rgb"+(d?"a(":"(")+r(i(a[3]=="a"?a.slice(5):a.slice(4))*P+t)+","+r(i(b)*P+t)+","+r(i(c)*P+t)+(d?","+d:")");
}


function listenToPixels(){

    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", function( event ) {
            
            // highlight the mouseover target
            if(rainbowMode == true){
                if(event.target.style.backgroundColor === ""){
                    console.log("Changing color to random color")
                    let color = get_random_color();
                    event.target.style.backgroundColor = color;
                    return false;
                }else{
                    console.log("Making current color darker")
                    let darkerColor = RGB_Linear_Shade(-.20, event.target.style.backgroundColor);
                    event.target.style.backgroundColor = darkerColor;
                    return false;
                    }
                }else{
                        event.target.style.backgroundColor = "black";
                        return false;
                    }
            return false;
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


const rainbowButton = document.querySelector(".rainbow-mode");

rainbowButton.addEventListener("click", function( event ) {
    if(rainbowMode == false)
        rainbowMode = true;
    else 
        rainbowMode = false;



}, false);


function deleteNodeContents(node){
    var range = document.createRange();
    range.selectNodeContents(node);
    range.deleteContents();
}