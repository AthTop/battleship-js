// Tests for Ship class

import { Ship } from '../src/ship'
import { Gameboard } from '../src/ganeboard'
import { Player } from '../src/player'

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
    it('Gameboard checks if trying to place ship out of bounds', () => {
        expect(() => {
            gameboard.placeShip(3, 9, 0, 'horizontal')
        }).toThrow(/bounds/)
        expect(() => {
            gameboard.placeShip(3, 1, 9, 'vertical')
        }).toThrow(/bounds/)
    })
    it('Gameboard handles attack that hits', () => {
        gameboard.placeShip(3, 0, 0)
        expect(gameboard.receiveAttack(1, 0)).toBeTruthy()
    })
    it('Gameboard handles attack that misses', () => {
        gameboard.placeShip(3, 0, 0)
        expect(gameboard.receiveAttack(5, 5)).toBeFalsy()
    })
    it('Gameboard checks if trying to attack out of bounds', () => {
        expect(() => {
            gameboard.receiveAttack(10, 0)
        }).toThrow(/bounds/)
        expect(() => {
            gameboard.receiveAttack(0, 11)
        }).toThrow(/bounds/)
    })
    it('Gameboard checks if same spot has been attacked before', () => {
        gameboard.receiveAttack(0, 0)
        expect(() => {
            gameboard.receiveAttack(0, 0)
        }).toThrow(/attack/)
    })
    it('Gameboard reports all ships sunk', () => {
        gameboard.placeShip(1, 0, 0)
        gameboard.receiveAttack(0, 0)
        expect(gameboard.areShipsSunk()).toBeTruthy()
    })
    it('Gameboard reports ships not sunk', () => {
        gameboard.placeShip(1, 0, 0)
        expect(gameboard.areShipsSunk()).toBeFalsy()
    })
})

describe('Player tests', () => {
    let player
    beforeEach(() => {
        player = new Player('Name')
    })
    it('Player exists', () => {
        expect(player).toBeDefined()
    })
    it('Player has gameboard', () => {
        expect(player.gameboard).toBeDefined()
    })
    it('Player handles human players', () => {
        expect(player.computer).toBeFalsy()
    })
    it('Player handles computer players', () => {
        player = new Player('Name', false)
        expect(player.computer).toBeTruthy()
    })
})