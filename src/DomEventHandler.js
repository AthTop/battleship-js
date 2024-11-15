import { Player } from './player'
import { renderBoard } from './renderBoard'

let player1 = new Player('Player 1')
let player2 = new Player('Player 2')
const player1Board = document.getElementById('board1')
const player2Board = document.getElementById('board2')

player1.gameboard.placeShip(5, 0, 0)
player1.gameboard.placeShip(4, 0, 2, 'vertical')
player2.gameboard.placeShip(5, 0, 0, 'vertical')
player2.gameboard.placeShip(4, 2, 0)

renderBoard(player1.board, player1Board)
renderBoard(player2.board, player2Board)
