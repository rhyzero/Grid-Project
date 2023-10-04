let cellCounter = 0
let rowAmount = 0
let colAmount = 0
let newCell = document.createElement('div')
newCell.classList.add('cell')
let gridContainer = document.querySelector('.grid-container')

document.querySelector('.add-row-btn').addEventListener('click', function() {
    if (colAmount === 0) {
        colAmount = colAmount + 1
    }
    cellCounter = cellCounter + 1
    rowAmount = rowAmount + 1
    console.log("rowAmount = " + rowAmount);
    console.log('colAmount = ' + colAmount);
    console.log('cellCounter = ' + cellCounter);
    gridContainer.appendChild(newCell.cloneNode(true))
})

