export class Ship {
    constructor(length) {
        this.shipLength = length || 1
        this.hits = 0
        this.sunk = false
    }
    length() {
        return this.shipLength
    }
    hit() {
        this.hits++
    }
    isSunk() {
        if (this.hits === this.shipLength) return true
        return false
    }
}
