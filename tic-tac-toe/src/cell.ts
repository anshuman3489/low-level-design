import { Piece } from "./piece";

export class Cell {
    piece: Piece;

    constructor() {
        this.piece = Piece.EMPTY;
    }

    setPiece(piece: Piece) {
        this.piece = piece;
    }

    isEmpty() {
        return this.piece === Piece.EMPTY;
    }

    toString() {
        return this.piece;
    }
}