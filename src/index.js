import './style.css'

import { Player } from './player'
import { renderBoard } from './renderBoard'
import { initGame } from './DomEventHandler'

// let player1 = new Player('Player 1')
// let player2 = new Player('Player 2', false)
// const player1Board = document.getElementById('board1')
// const player2Board = document.getElementById('board2')
// const player1Name = document.getElementById('player1-name')
// const player2Name = document.getElementById('player2-name')
// player1Name.textContent = player1.name
// player2Name.textContent = player2.name

// player1.gameboard.placeShip(5, 0, 0)
// player1.gameboard.placeShip(4, 0, 2, 'vertical')
// player2.gameboard.placeShip(5, 0, 0, 'vertical')
// player2.gameboard.placeShip(4, 2, 0)
// player1.gameboard.receiveAttack(0, 0)
// player1.gameboard.receiveAttack(0, 1)
// player2.gameboard.receiveAttack(0, 0)
// player2.gameboard.receiveAttack(0, 7)
// renderBoard(player1.gameboard, player1Board)
// renderBoard(player2.gameboard, player2Board)


initGame()