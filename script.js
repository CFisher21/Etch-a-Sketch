function createGrid(gridsize) {
    var gridSize = gridsize * gridsize

    for(let i = 0; i < gridSize; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-tile")
        grid.appendChild(newDiv)
    }
}

createGrid(16);

document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById("grid");
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






