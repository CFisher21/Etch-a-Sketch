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

// Function to generate a random color
function getRandomColor() {
    // Generate random values for red, green, and blue components
    var red = Math.floor(Math.random() * 75) + 75; // Random integer between 100 and 255
    var green = Math.floor(Math.random() * 75) + 75; // Random integer between 100 and 255
    var blue = Math.floor(Math.random() * 75) + 75; // Random integer between 100 and 255
    // Construct the color string in the format "rgb(red, green, blue)"
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";
    
    return color;
}

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
const gridTile = document.getElementsByClassName("grid-tile");
const checkbox = document.getElementById("random-colors");

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
    if (event.target.classList.contains("grid-tile") && checkbox.checked) {
        randomColor = getRandomColor();
        event.target.style.backgroundColor = randomColor;
        event.target.style.filter = "contrast(250%) brightness(150%)";
    } else {
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






