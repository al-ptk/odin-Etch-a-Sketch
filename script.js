function createGrid (parent, cellNumber) {
    const container = document.createElement('div');
    container.classList.add('grid-container')
    for (let i = 0; i < cellNumber; i++) {
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
    console.log(elem);
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



const body = document.querySelector("body");
const container = createGrid(body, 16);
const clearBtn = createClearButton(body, container);