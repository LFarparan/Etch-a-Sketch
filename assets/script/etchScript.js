const containerBox = document.querySelector('.container');
let size = 20;
let cellSize = 0;
let row = 1;



// Creates grids
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



//Panel functions
const allCell = document.querySelectorAll('.cell');
const resetButton = document.querySelector('reset');




//hover change color hover
allCell.forEach( cell => {
    cell.addEventListener('mouseover', () => {
        // cell.style.cssText = "background-color: red";
        cell.style.backgroundColor = "gray";
    })
});

