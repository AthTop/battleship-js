import { renderBoard } from './renderBoard'

// Handles attack when a click happens, returns a promise when attack is concluded
const handleAttack = (e, enemyPlayer, enemyBoardElement) => {
    return new Promise((resolve) => {
        if (e.target.classList.contains('grid-cell')) {
            const [x, y] = e.target.dataset.coord.split(',').map(Number)
            try {
                const attackResult = enemyPlayer.gameboard.receiveAttack(x, y)
                renderBoard(enemyPlayer.gameboard, enemyBoardElement)
                // Resolve promise if attack isn't a hit
                if (!attackResult) {
                    resolve()
                }
                // Don't resolve if player hits previously attacked cell or any other kind of error
            } catch (error) {
                // TODO add a non-alert notification
                console.error('Error: Cant attack same spot twice')
            }
        }
    })
}

// Handles player's turn
export const playerTurn = (enemyPlayer, enemyBoardElement) => {
    const handleClick = async (e) => {
        await handleAttack(e, enemyPlayer, enemyBoardElement)
        enemyBoardElement.removeEventListener('click', handleClick)
    }
    enemyBoardElement.addEventListener('click', handleClick)
}
