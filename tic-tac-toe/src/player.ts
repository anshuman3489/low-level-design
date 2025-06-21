import { Piece } from "./piece";

export class Player {
    constructor(public name: string, public piece: Piece) {
        if (this.piece === Piece.EMPTY) {
            throw new Error('Invalid Piece!');
        }
    }
}