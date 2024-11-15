import { Gameboard } from "./ganeboard";

// Creates human players by default unless specified otherwise
export class Player {
    constructor(name, human = true, size){
        this.name = name;
        this.computer = human ? false : true
        this.gameboard = new Gameboard(size)
    }
}