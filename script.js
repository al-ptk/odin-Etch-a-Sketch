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

function resetGrid () {
    const gridEdge = +prompt('What is the row size?');
    if (gridEdge == NaN || gridEdge > 100 || gridEdge < 1) {
        alert('Invalid number!');
        return;
    }
    cParent = container.parentNode;
    cParent.removeChild(container);
    container = createGrid(body, gridEdge);
    cParent.replaceChild(container, cParent.firstChild);
}

const gridEdgeSize = 100;
const body = document.querySelector("body");
var container = createGrid(body, gridEdgeSize);
const resetBtn = createResetButton(body, container);