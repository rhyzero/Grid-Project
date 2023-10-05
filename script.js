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
    else {
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

document.querySelector('.remove-row-btn').addEventListener('click', function() {
    if (rowAmount == 0) {
        alert('There are no more rows!')
    }
    else if (rowAmount == 1) {
        cellCounter = cellCounter - colAmount
        rowAmount = rowAmount - 1
        for (let i = 0; i < colAmount; i++) {
            gridContainer.removeChild(gridContainer.lastElementChild)
        }
        colAmount = 0
        gridContainer.style.gridTemplateColumns = null
    }
    else {
        cellCounter = cellCounter - colAmount
        rowAmount = rowAmount - 1
        for (let i = 0; i < colAmount; i++) {
            gridContainer.removeChild(gridContainer.lastElementChild)
        }
    }
})

document.querySelector('.remove-col-btn').addEventListener('click', function() {
    if (colAmount == 0) {
        alert('There are no more columns!')
    }
    else if (colAmount == 1) {
        cellCounter = cellCounter - rowAmount
        colAmount = colAmount - 1
        for (let i = 0; i < rowAmount; i++) {
            gridContainer.removeChild(gridContainer.lastElementChild)
        }
        rowAmount = 0
        gridContainer.style.gridTemplateColumns = `repeat(${colAmount}, 1fr)`
    }
    else {
        cellCounter = cellCounter - rowAmount
        colAmount = colAmount - 1
        for (let i = 0; i < rowAmount; i++) {
            gridContainer.removeChild(gridContainer.lastElementChild)
        }
        gridContainer.style.gridTemplateColumns = `repeat(${colAmount}, 1fr)`
    }
})