// Tests for Ship class

import { Ship } from '../src/ship'
import { Gameboard } from '../src/ganeboard'

describe('Ship Tests', () => {
    let ship
    beforeEach(() => {
        ship = new Ship()
    })
    it('Ship exists', () => {
        expect(ship).toBeDefined()
    })
    it('Ship has length', () => {
        expect(ship.length()).toBeGreaterThanOrEqual(1)
    })
    it('Ship is hit', () => {
        ship.hit()
        expect(ship.hits).toBeGreaterThanOrEqual(1)
    })
    it('Ship is sunk', () => {
        ship = new Ship(1)
        ship.hit()
        expect(ship.isSunk()).toBeTruthy()
    })
    it('Ship is not sunk', () => {
        expect(ship.isSunk()).toBeFalsy()
    })
})

describe('Gameboard tests', () => {
    let gameboard
    beforeEach(() => {
        gameboard = new Gameboard()
    })
    it('Gameboard exists', () => {
        expect(gameboard).toBeDefined()
    })
})
