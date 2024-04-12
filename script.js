const grid = document.getElementById("grid");

function clearGrid() {
    grid.innerHTML = "";
}


function createGrid(totalcube, pixels) {

    clearGrid();

    // var newTileSize = 
    var totalCubes = totalcube * totalcube


    for(let i = 0; i < totalCubes; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-tile")
        newDiv.setAttribute("id", "grid-tile")
        grid.appendChild(newDiv)
    }

    // Select all elements with the class "grid-tile"
    const gridTiles = document.querySelectorAll(".grid-tile");
    gridTiles.forEach(function(element) {
        element.style.width = pixels;
        element.style.height = pixels;
    });    
}

createGrid(16, 32);



const refreshButton = document.getElementById("refresh-button");
const sizeButton = document.getElementById("size-button");
var slider = document.getElementById("setting-slider");
var sliderValue = document.getElementById("sliderValue");
const popUp = document.getElementById("pop-up-window");
let confirmBtn = document.getElementById("confirm-settings");
const button16 = document.getElementById("size-button-16");
const button32 = document.getElementById("size-button-32");
const button64 = document.getElementById("size-button-64");
const button128 = document.getElementById("size-button-128");
const gridTile = document.getElementsByClassName("grid-tile")

button16.addEventListener("click", function(){
    createGrid(16, "32px");
});

button32.addEventListener("click", function(){
    createGrid(32, "16px");
})

button64.addEventListener("click", function(){
    createGrid(64, "8px");
})

button128.addEventListener("click", function(){
    createGrid(128, "4px");
})

grid.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("grid-tile")) {
        event.target.style.backgroundColor = "black";
    }
});

refreshButton.addEventListener("click", () => {
    location.reload();
})

sizeButton.addEventListener("click", () => {
    popUp.style.display = "flex"
})

confirmBtn.addEventListener("click", () => {
    popUp.style.display = "none"
})



// Adjust the value of the pop up slider
slider.addEventListener("input", function() {
    sliderValue.textContent = slider.value;
});






