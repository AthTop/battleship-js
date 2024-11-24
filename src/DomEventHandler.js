import { renderBoard } from './renderBoard'
import { Player } from './player'
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
    enemyBoardElement,
    currentPlayerBoardElement
) => {
    if (currentPlayer.computer) {
        switchActiveBoard(enemyBoardElement, currentPlayerBoardElement)
        let continueTurn = currentPlayer.makeMove(enemyPlayer)
        renderBoard(enemyPlayer.gameboard, enemyBoardElement)
        if (!continueTurn)
            await new Promise((resolve) => setTimeout(resolve, 1000))
        while (continueTurn) {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            continueTurn = currentPlayer.makeMove(enemyPlayer)
            renderBoard(enemyPlayer.gameboard, enemyBoardElement)
        }
        switchActiveBoard(enemyBoardElement, currentPlayerBoardElement)
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

const switchActiveBoard = (board1, board2) => {
    board1.parentElement.classList.toggle('active')
    board2.parentElement.classList.toggle('active')
}

export const gameloop = async (
    player1,
    player2,
    player1Board,
    player2Board
) => {
    player2Board.parentElement.classList.toggle('active')
    while (
        !player1.gameboard.areShipsSunk() &&
        !player2.gameboard.areShipsSunk()
    ) {
        await playerTurn(player1, player2, player2Board, player1Board)
        if (!player2.gameboard.areShipsSunk()) {
            await playerTurn(player2, player1, player1Board, player2Board)
        }
    }
}

export const initGame = () => {
    const initBtn = document.getElementById('init-btn')
    const player1Board = document.getElementById('board1')
    const player2Board = document.getElementById('board2')

    async function handleInitGameClick() {
        initBtn.disabled = true
        initBtn.textContent = 'Start Game'

        const players = computerToggleHandler()
        renderBoard(players[0].gameboard, player1Board)
        renderBoard(players[1].gameboard, player2Board)

        await Promise.all(
            players.map(async (player, i) => {
                const board = document.getElementById(`board${i + 1}`)
                if (!player.computer) {
                    await addShipHandler(player, board)
                } else {
                    await generateComputerShips(player)
                }
            })
        )
        initBtn.disabled = false

        // Re-attach the second click handler
        initBtn.removeEventListener('click', handleInitGameClick)
        initBtn.addEventListener('click', () => {
            initBtn.remove()
            const form = document.getElementById('player-form')
            form.classList.add('hidden')
            gameloop(players[0], players[1], player1Board, player2Board)
        })
    }

    // Attach the handler
    initBtn.addEventListener('click', handleInitGameClick)
}

const handlePlayerCreation = (isHuman) => {
    if (isHuman) {
        return new Player()
    }
    return new Player(false)
}
const computerToggleHandler = () => {
    const players = []
    const checkBoxes = document.querySelectorAll('.computer-toggle')
    checkBoxes.forEach((checkBox) => {
        if (!checkBox.checked) {
            checkBox.parentElement.nextElementSibling.classList.remove('hidden')
            players.push(handlePlayerCreation(true))
        } else {
            players.push(handlePlayerCreation(false))
        }
    })
    return players
}

const addShipHandler = (player, board) => {
    return new Promise((resolve) => {
        let shipSize = 1
        const addShipBtns = document.querySelectorAll('.add-ship-btn')
        addShipBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const parent = e.target.parentElement
                const xInput = parent.querySelector(
                    'input[name="ship-x"]'
                ).value
                const yInput = parent.querySelector(
                    'input[name="ship-y"]'
                ).value
                const orientation = parent.querySelector(
                    'select[name="orientation"]'
                ).value
                const shipData = {
                    x: Number(xInput) - 1,
                    y: Number(yInput) - 1,
                    orientation: orientation,
                }
                const shipSizeLabel = parent.querySelector('label')
                if (
                    player.gameboard.placeShip(
                        shipSize,
                        shipData.x,
                        shipData.y,
                        shipData.orientation
                    )
                ) {
                    renderBoard(player.gameboard, board)
                    shipSizeLabel.textContent = `Ship size: ${++shipSize}`
                    if (shipSize > 5) {
                        btn.disabled = true
                        resolve()
                    }
                } else {
                    alert('Invalid ship placement')
                }
            })
        })
    })
}

const generateComputerShips = (player) => {
    return new Promise((resolve) => {
        const maxShips = 5
        let shipSize = 1

        while (shipSize <= maxShips) {
            const x = Math.floor(Math.random() * 10)
            const y = Math.floor(Math.random() * 10)
            const orientation = Math.random() > 0.5 ? 'horizontal' : 'vertical'
            let validPlacement = true

            if (orientation === 'horizontal') {
                if (x + shipSize > 10) {
                    validPlacement = false
                }
            } else if (y + shipSize > 10) {
                validPlacement = false
            }

            if (
                validPlacement &&
                player.gameboard.placeShip(shipSize, x, y, orientation)
            ) {
                shipSize++
            }
        }
        resolve()
    })
}
