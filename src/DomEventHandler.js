import { renderBoard } from './renderBoard'
// Handles player's turn
export const playerTurn = (enemyPlayer, enemyBoardElement) => {
    // Use promise to only remove eventhandler after the player is done with their turn
    const handleAttack = (e) => {
        return new Promise((resolve) => {
            if (e.target.classList.contains('grid-cell')) {
                const [x, y] = e.target.dataset.coord.split(',').map(Number)
                try {
                    const attackResult = enemyPlayer.gameboard.receiveAttack(x, y)
                    renderBoard(enemyPlayer.gameboard, enemyBoardElement)
                    if (!attackResult) {
                        resolve()
                    }
                } catch (error) {
                    // TODO add a non-alert notification
                    console.error('Error: Cant attack same spot twice')
                }
            }
        })
    }
    const handleClick = async (e) => {
        await handleAttack(e)
        enemyBoardElement.removeEventListener('click', handleClick)
    }
    enemyBoardElement.addEventListener('click', handleClick)
}
