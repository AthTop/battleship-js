import { Ship } from './ship'

export class Gameboard {
    occupiedPositions = new Map()
    attackedPositions = new Map()
    constructor() {
        this.size = 10
    }
    // Places ship object on occupied positions based on orientation
    placeShip(shipSize, x, y, orientation = 'horizontal') {
        const ship = new Ship(shipSize)
        const positions = []
        // Get coords based on orientation
        for (let i = 0; i < shipSize; i++) {
            const posX = orientation === 'horizontal' ? x + i : x
            const posY = orientation === 'vertical' ? y + i : y
            // Check if trying to place out of bounds
            this.#checkBounds(posX, posY)
            const key = `${posX}, ${posY}`
            // If there's a ship on the path, return false
            if (this.occupiedPositions.has(key)) {
                return false
            }
            positions.push(key)
        }
        // Set the positions the ship occupies
        positions.forEach((position) => {
            this.occupiedPositions.set(position, ship)
        })
        return true
    }
    // Checks if hit, record position and return true or record miss and return false
    receiveAttack(x, y) {
        this.#checkBounds(x, y)
        const key = `${x}, ${y}`
        if (this.occupiedPositions.has(key)) {
            const ship = this.occupiedPositions.get(key)
            ship.hit()
            this.attackedPositions.set(key, 'hit')
            return true
        }
        this.attackedPositions.set(key, 'miss')
        return false
    }
    #checkBounds(x, y) {
        if (x >= this.size || y >= this.size)
            throw new Error('Unable to place out of board bounds')
    }
}
