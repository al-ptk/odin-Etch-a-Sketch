function createGrid (parent, gridEdge) {
    const container = document.createElement('div');
    container.classList.add('grid-container')
    for (let i = 0; i < gridEdge ** 2; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
    container.childNodes.forEach(
        div => div.addEventListener('mouseover', setHoveredState)
    );
    //appendChild returns the reference to child
    return parent.appendChild(container); 
}

function setHoveredState (e) {
    const elem = e.target;
    elem.style.background = 'black';
}

function createClearButton (parent, ownGrid) {
    const btn = document.createElement('button');
    btn.textContent = 'Clear';
    btn.addEventListener('click', (e) => clearGrid(ownGrid));
    return parent.appendChild(btn);
}

function clearGrid (grid) {
    grid.childNodes.forEach(div => div.style.backgroundColor = 'lightgray')
}

function createNewGrid (parent, oldGrid) {
    const gridEdge = +prompt('What is the row size?');
    if (gridEdge == NaN) alert('Invalid number!');
    parent.removeChild(oldGrid);
    const newGrid = parent.appendChild(createGrid(parent, gridEdge));
    parent.replaceChild(newGrid, parent.firstChild);
}

const gridEdgeSize = 100;
const body = document.querySelector("body");
const container = createGrid(body, gridEdgeSize);
const clearBtn = createClearButton(body, container);
const root = document.documentElement;
root.style.setProperty('--edgeSize', gridEdgeSize);