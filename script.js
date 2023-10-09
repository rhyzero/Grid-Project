let cellCounter = 0
let rowAmount = 0
let colAmount = 0
const newCell = document.createElement('div')
newCell.setAttribute('style', 'background-color: white')
newCell.classList.add('cell')
const gridContainer = document.querySelector('.grid-container')
const colorMenu = document.querySelector('.color-menu')
const colorBtn = colorMenu.querySelector('.color-btn')
const colors = colorMenu.querySelectorAll('.color')
const btnText = colorMenu.querySelector('.btn-text')

//Pick color from color menu 
//Get color from dropdown menu innerText
colors.forEach(color => {
    color.addEventListener('click', function() {
        let selectedColor = color.querySelector('.color-text').innerText
        btnText.innerText = selectedColor
        colorMenu.classList.toggle('active')
    })
})


//Toggles active class on color dropdown menu to be visible when active 
colorBtn.addEventListener('click', function() {
    colorMenu.classList.toggle('active')
})


//Button adds a row to the grid
//Has a case for 0 columns, 1 column, and more than 1 column
//Appends the newCell div to the grid container when called and increases with column size
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


//Same as the add row button but cases are based on number of rows
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


//Creates an alert if there are no rows
//If there's only one row left, sets row count and column count to 0 and delete all nodes
//based on column size
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


//Same as remove row button
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


//Warning if no color is selected
//For every cell in the grid container, addes a style tag in the html with the selected
//color
document.querySelector('.change-all-color-btn').addEventListener('click', function() {
    if (colorBtn.innerText === 'Select your color') {
        alert('Pick a color!')
    }
    else {
        document.querySelectorAll('.cell').forEach(cell => {
            cell.style.backgroundColor = `${colorBtn.innerText}`.split(' ').join('')
            cell.classList.remove('selected')
        })
    }
})


//Same as the change all color button, but instead of every cell it only changes colors
//of the cells with the 'selected' class
document.querySelector('.change-color-btn').addEventListener('click', function() {
    if (colorBtn.innerText === 'Select your color') {
        alert('Pick a color!')
    }
    else {
        document.querySelectorAll('.selected').forEach(cell => {
            cell.style.backgroundColor = `${colorBtn.innerText}`.split(' ').join('')
            cell.classList.remove('selected')
        })
    }
})


//For every cell in the grid sets the background color style tag to white
document.querySelector('.reset-all-color-btn').addEventListener('click', function() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.style.backgroundColor = 'white'
        cell.classList.remove('selected')
    })
})


//For every cell with the white background color tag change their color to the selected
//color
document.querySelector('.change-remaining-btn').addEventListener('click', function() {
    gridContainer.querySelectorAll('[style="background-color: white"] , [style="background-color: white;"]').forEach(cell => {
        cell.style.backgroundColor = `${colorBtn.innerText}`.split(' ').join('')
        cell.classList.remove('selected')
    })
})


//For every cell in the grid container, adds an event listener that toggles the 'selected'
//tag when clicked 
gridContainer.addEventListener('click', function(e) {
    console.clear();
    const cell = e.target.closest('.cell')
    if (cell.className === e.target.className){
        console.log(cell.classList);
        cell.classList.toggle('selected')
    } 
})