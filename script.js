const grid = document.getElementById("grid");
const gridTile = document.getElementById("grid-tile");
const refreshButton = document.getElementById("refresh-button")

function createGrid() {
    //var gridsize = gridsize


    for(let i = 0; i < 256; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-tile")
        grid.appendChild(newDiv)
    }
}

createGrid();

grid.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("grid-tile")) {
        event.target.style.backgroundColor = "black";
    }
});

refreshButton.addEventListener("click", () => {
    location.reload();
})



