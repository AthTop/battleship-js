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
    it('Gameboard can place ships in it', () => {
        expect(gameboard.placeShip(2, 0, 0)).toBeTruthy()
    })
    it('Gameboard checks for existing ship in position', () => {
        expect(gameboard.placeShip(3, 0, 0)).toBeTruthy()
        expect(gameboard.placeShip(3, 2, 0)).toBeFalsy()
    })
    it('Gameboard checks for ship orientation when placing', () => {
        expect(gameboard.placeShip(3, 0, 0, 'horizontal')).toBeTruthy()
        expect(gameboard.placeShip(3, 2, 0, 'horizontal')).toBeFalsy()
        expect(gameboard.placeShip(3, 0, 1, 'vertical')).toBeTruthy()
        expect(gameboard.placeShip(3, 0, 3, 'vertical')).toBeFalsy()
    })
})
