export const renderBoard = (board, boardElement) => {
    const fragment = document.createDocumentFragment()
    for (let row = 0; row < board.size; row++) {
        for (let col = 0; col < board.size; col++) {
            const div = document.createElement('div')
            div.className = 'grid-cell'
            div.dataset.coord = `${col}, ${row}`
            if (board.boardPositions.has(div.dataset.coord)) {
                const entry = board.boardPositions.get(div.dataset.coord)
                if (entry.ship !== null) {
                    div.classList.add('ship')
                }
                if (entry.event === 'hit') {
                    div.classList.add('hit-spot')
                }
                if (entry.event === 'miss') {
                    div.classList.add('missed-spot')
                }
            }
            fragment.appendChild(div)
        }
    }
    boardElement.innerHTML = ''
    setGridSize(boardElement, board.size)
    boardElement.appendChild(fragment)
}

const setGridSize = (boardElement, size) => {
    boardElement.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    boardElement.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}