import { Ship } from './ship'

export class Gameboard {
    boardPositions = new Map()
    ships = new Set()
    constructor() {
        this.size = 10
    }
    // Places ship object on occupied positions based on orientation
    placeShip(shipSize, x, y, orientation = 'horizontal') {
        const ship = new Ship(shipSize)
        this.ships.add(ship)
        const positions = []
        // Get coords based on orientation
        for (let i = 0; i < shipSize; i++) {
            const posX = orientation === 'horizontal' ? x + i : x
            const posY = orientation === 'vertical' ? y + i : y
            // Check if trying to place out of bounds
            this.#checkBounds(posX, posY)
            const key = `${posX}, ${posY}`
            // If there's a ship on the path, return false
            if (this.boardPositions.has(key)) {
                return false
            }
            positions.push(key)
        }
        // Set the positions the ship occupies
        positions.forEach((position) => {
            this.#addCoordinatesData(position, ship)
        })
        return true
    }
    // Checks if hit, record position and return true or record miss and return false
    receiveAttack(x, y) {
        this.#checkBounds(x, y)
        const key = `${x}, ${y}`
        if (this.boardPositions.has(key)) {
            const entry = this.boardPositions.get(key)
            if (entry.event !== null) {
                throw new Error('You have already attacked here.')
            }
            if (entry.ship !== null) {
                entry.ship.hit()
                if (entry.ship.isSunk()) {
                    this.ships.delete(entry.ship)
                }
                entry.event = 'hit'
                return true
            }
        }
        this.#addCoordinatesData(key, null, 'miss')
        return false
    }
    areShipsSunk() {
        if (this.ships.size === 0) return true
        return false
    }
    // Helper function to check boundary
    #checkBounds(x, y) {
        if (x >= this.size || y >= this.size)
            throw new Error('Unable to place out of board bounds')
    }
    // Helper method to set coordinate data for ships/attacks
    #addCoordinatesData(key, obj = null, event = null) {
        this.boardPositions.set(key, { ship: obj, event: event })
    }
}
