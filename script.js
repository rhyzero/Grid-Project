let cellCounter = 0
let rowAmount = 0
let colAmount = 0
let newCell = document.createElement('div')
newCell.classList.add('cell')
let gridContainer = document.querySelector('.grid-container')

document.querySelector('.add-row-btn').addEventListener('click', function() {
    if (colAmount == 0) {
        colAmount = colAmount + 1
        cellCounter = cellCounter + 1
        rowAmount = rowAmount + 1
        gridContainer.appendChild(newCell.cloneNode(true))
    }
    else if (colAmount == 1) {
        cellCounter = cellCounter + 1
        rowAmount = rowAmount + 1
        gridContainer.appendChild(newCell.cloneNode(true))
    }
    else if (colAmount >= 2) {
        rowAmount = rowAmount + 1
        cellCounter = cellCounter + colAmount
        for (let i = 0; i < colAmount; i++){
            gridContainer.appendChild(newCell.cloneNode(true))
        }
    }
})

document.querySelector('.add-col-btn').addEventListener('click', function() {
    if (rowAmount == 0) {
        rowAmount = rowAmount + 1
        cellCounter = cellCounter + 1
        colAmount = colAmount + 1
        gridContainer.style.gridTemplateColumns = `repeat(${colAmount}, 1fr)`
        gridContainer.appendChild(newCell.cloneNode(true))
    }
    else if (rowAmount == 1) {
        cellCounter = cellCounter + 1
        colAmount = colAmount + 1
        gridContainer.style.gridTemplateColumns = `repeat(${colAmount}, 1fr)`
        gridContainer.appendChild(newCell.cloneNode(true))
    }
    else {
        colAmount = colAmount + 1
        cellCounter = cellCounter + rowAmount
        gridContainer.style.gridTemplateColumns = `repeat(${colAmount}, 1fr)`
        for (let i = 0; i < rowAmount; i++){
            gridContainer.appendChild(newCell.cloneNode(true))
        }
    }
})