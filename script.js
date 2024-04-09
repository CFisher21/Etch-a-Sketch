const grid = document.getElementById("grid")

function createGrid() {
   
    for(let i = 0; i < 256; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-tile")
        grid.appendChild(newDiv)
    }
}

createGrid();