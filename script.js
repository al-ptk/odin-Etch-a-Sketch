const body = document.querySelector("body");
const container = createGrid(body, 16);

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