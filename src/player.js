import { Gameboard } from './ganeboard'

// Creates human players by default unless specified otherwise
export class Player {
    constructor(human = true, size) {
        this.computer = !human
        this.gameboard = new Gameboard(size)
        this.attackedCoords = new Map()
    }
    makeMove(enemyPlayer) {
        return this.#computerTurn(enemyPlayer)
    }
    #computerTurn(enemyPlayer) {
        const [x, y] = this.#getRandomizedCoordinates()
        const key = `${x}, ${y}`
        if(!this.attackedCoords.has(key)){
            const attackResult = enemyPlayer.gameboard.receiveAttack(x, y)
            this.attackedCoords.set(key, true)
            return attackResult
        }
        return true
    }
    #getRandomizedCoordinates() {
        return [
            getRandomInt(this.gameboard.size),
            getRandomInt(this.gameboard.size),
        ]
    }
}

const getRandomInt = (max) => Math.floor(Math.random() * max)
