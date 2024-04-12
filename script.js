const grid = document.getElementById("grid");
var gridTile = document.getElementById("grid-tile")

function createGrid(totalcube) {

    // var newTileSize = 
    var totalCubes = totalcube * totalcube


    for(let i = 0; i < totalCubes; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-tile")
        newDiv.setAttribute("id", "grid-tile")
        grid.appendChild(newDiv)
    }
}


// 16 = 32px
// 32 = 16px
// 64 = 8px
// 128 = 4px

createGrid(128);

document.addEventListener("DOMContentLoaded", function() {
    
    const refreshButton = document.getElementById("refresh-button");
    const sizeButton = document.getElementById("size-button");
    var slider = document.getElementById("setting-slider");
    var sliderValue = document.getElementById("sliderValue");
    const popUp = document.getElementById("pop-up-window");
    let confirmBtn = document.getElementById("confirm-settings");

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
    
})






