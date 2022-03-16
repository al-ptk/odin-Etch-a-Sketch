function createGrid (parent, gridEdgeSize) {
    // This function returns a new grid-container reference
    const container = document.createElement('div');
    container.classList.add('grid-container')
    for (let i = 0; i < gridEdgeSize ** 2; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
    container.childNodes.forEach(
        div => div.addEventListener('mouseover', setHoveredState)
    );
    //Sets :root property
    document.documentElement.style.setProperty('--edgeSize', gridEdgeSize);
    //appendChild returns the reference to child
    return parent.appendChild(container); 
}

function setHoveredState (e) {
    const elem = e.target;
    elem.style.background = 'black';
}

function createResetButton (parent, ownGrid) {
    const btn = document.createElement('button');
    btn.textContent = 'Reset';
    btn.addEventListener('click', (e) => resetGrid(ownGrid));
    return parent.appendChild(btn);
}

function resetGrid (grid) {
    grid.childNodes.forEach(div => div.style.backgroundColor = 'lightgray')
}

function createNewGrid (oldGrid) {
    const parent = oldGrid.parentNode
    const gridEdge = +prompt('What is the row size?');
    if (gridEdge == NaN) alert('Invalid number!');
    parent.removeChild(oldGrid);
    oldGrid = parent.appendChild(createGrid(parent, gridEdge));
    parent.replaceChild(oldGrid, parent.firstChild);
}

const gridEdgeSize = 100;
const body = document.querySelector("body");
const container = createGrid(body, gridEdgeSize);
const resetBtn = createResetButton(body, container);