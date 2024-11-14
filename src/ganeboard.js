import { Ship } from './ship'

export class Gameboard {
    occupiedPositions = new Map()
    constructor() {
        this.size = 10
    }
    placeShip(shipSize, x, y, orientation = 'horizontal') {
        const ship = new Ship(shipSize)
        const positions = []
        // Get coords based on orientation
        for (let i = 0; i < shipSize; i++) {
            const posX = orientation === 'horizontal' ? x + i : x
            const posY = orientation === 'vertical' ? y + i : y
            // Check if trying to place out of bounds
            if (posX > this.size || posY > this.size)
                throw new Error('Unable to place out of board bounds')
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
}
