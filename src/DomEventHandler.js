import { renderBoard } from './renderBoard'

// Handles attack when a click happens, returns a promise when attack is concluded
const handleAttack = (e, enemyPlayer, enemyBoardElement) => {
    return new Promise((resolve, reject) => {
        if (e.target.classList.contains('grid-cell')) {
            const [x, y] = e.target.dataset.coord.split(',').map(Number)
            try {
                const attackResult = enemyPlayer.gameboard.receiveAttack(x, y)
                renderBoard(enemyPlayer.gameboard, enemyBoardElement)
                if (!attackResult) {
                    resolve() // Resolve for a miss
                }
            } catch (error) {
                console.error('Error: You cannot attack the same spot twice')
                reject()
            }
        } else {
            reject()
        }
    })
}

// Handles player's turn
export const playerTurn = async (
    currentPlayer,
    enemyPlayer,
    enemyBoardElement
) => {
    if (currentPlayer.computer) {
        let continueTurn = currentPlayer.makeMove(enemyPlayer)
        renderBoard(enemyPlayer.gameboard, enemyBoardElement)
        while (continueTurn) {
            await new Promise((resolve) => setTimeout(resolve, 500))
            continueTurn = currentPlayer.makeMove(enemyPlayer)
            renderBoard(enemyPlayer.gameboard, enemyBoardElement)
        }
        return
    } else {
        return new Promise((resolve) => {
            const handleClick = async (e) => {
                try {
                    await handleAttack(e, enemyPlayer, enemyBoardElement)
                    enemyBoardElement.removeEventListener('click', handleClick)
                    resolve()
                } catch {
                    console.log('Invalid move, waiting for next human action')
                }
            }
            enemyBoardElement.addEventListener('click', handleClick)
        })
    }
}

export const gameloop = async (
    player1,
    player2,
    player1Board,
    player2Board
) => {
    while (
        !player1.gameboard.areShipsSunk() &&
        !player2.gameboard.areShipsSunk()
    ) {
        await playerTurn(player1, player2, player2Board)
        if (!player2.gameboard.areShipsSunk()) {
            await playerTurn(player2, player1, player1Board)
        }
    }
}
