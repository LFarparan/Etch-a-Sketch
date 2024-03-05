const borderBox = document.querySelector('.border');
let containerBox = document.querySelector('.container');
let allCell = document.querySelectorAll('.cell');
const newCon = document.createElement('div');
newCon.setAttribute('class', 'container')
let size = 0;
let cellSize = 0;
let row = 1;
let color = "rgb(160, 160, 160)";

generateGrid(20);

// Creates grids
function generateGrid(size){
    for (let x = 1; x <= size; x++) {
        const rowCell = document.createElement('div');
        rowCell.setAttribute("class", "row");
        for (let i = 1; i <= size; i++) {
            const cell = document.createElement('div');
            cell.setAttribute("class", 'cell');
            cellSize = calculateCellSize();
            cell.style.cssText = "width:" + cellSize + "px; height:" + cellSize + "px";
            cell.setAttribute('id', x + 'x' + i); 
            rowCell.appendChild(cell);
        }
        containerBox.appendChild(rowCell);
    }
    
    function calculateCellSize(){
        cellSize = 600 / size;
        return cellSize
    }
    //hover change color hover
    allCell = document.querySelectorAll('.cell');
    allCell.forEach( cell => {
    cell.addEventListener('mouseover', () => {
        // cell.style.cssText = "background-color: red";
        cell.style.backgroundColor = color;
    })
});
}


//Panel functions
const resetButton = document.querySelector('#reset');
let changeColor = document.querySelector('#color');

console.log(changeColor);


changeColor.addEventListener("change", () => {
    color = document.querySelector('#color').value;
    console.log(color);
    allCell.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            
            // cell.style.cssText = "background-color: red";
            
            cell.style.backgroundColor = color;
        })
    });
}); 


//Reset + Change Grid
resetButton.addEventListener('click', () => {
    const gridSize = document.querySelector('#grid').value;
    console.log("Grid Size: " + gridSize);
    if (gridSize > 0 && gridSize < 51){
        allCell.forEach(cell => {
            cell.remove();
        });
        generateGrid(gridSize);
    }
    else {
        alert('Invalid Grid (1-50 only)');
    }
})






