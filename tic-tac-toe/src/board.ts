import { Cell } from "./cell";
import { Piece } from "./piece";

export class Board {
    size: number;
    private board: Cell[][];

    constructor(size: number) {
        if (!Number.isInteger(size)) {
            throw new Error('Size must be an integer');
        }
        this.size = size;
        this.board = this.initializeBoard();
    }

    private initializeBoard() {
        const board = []

        for (let r = 0; r < this.size; r++) {
            const row = [];
            for (let c = 0; c < this.size; c++) {
                row.push(new Cell());
            }
            board.push(row);
        }

        return board;
    }

    reset() {
        this.board = this.initializeBoard();
    }

    isValidMove(row: number, col: number) {
        if (row < 0 || col < 0 || row >= this.size || col >= this.size) {
            return false;
        }
        const cell = this.board[row][col];
        return cell.isEmpty();
    }

    setPiece(row: number, col: number, piece: Piece) {
        const cell = this.board[row][col];
        cell.setPiece(piece);
    }

    private hasWonRow(piece: Piece, row: number) {
        for (let c = 0; c < this.size; c++) {
            const cell = this.board[row][c];
            if (cell.piece !== piece) return false;
        }
        return true;
    }

    private hasWonColumn(piece: Piece, col: number) {
        for (let r = 0; r < this.size; r++) {
            const cell = this.board[r][col];
            if (cell.piece !== piece) return false;
        }
        return true;
    }

    private hasWonDiagonal(piece: Piece) {
        let hasWonMainDiagonal = true;
        for (let i = 0; i < this.size; i++) {
            const cell = this.board[i][i];
            hasWonMainDiagonal = hasWonMainDiagonal && (cell.piece === piece);
        }

        let hasWonCrossDiagonal = true;
        for (let r = 0; r < this.size; r++) {
            const c = this.size - r - 1;
            const cell = this.board[r][c];
            hasWonCrossDiagonal = hasWonCrossDiagonal && (cell.piece === piece);
        }

        return hasWonMainDiagonal || hasWonCrossDiagonal;
    }

    hasWon(piece: Piece) {
        let hasWonRow = false;
        for (let r = 0; r < this.size; r++) {
            hasWonRow = hasWonRow || this.hasWonRow(piece, r);
        }

        let hasWonColumn = false;
        for (let c = 0; c < this.size; c++) {
            hasWonColumn = hasWonColumn || this.hasWonColumn(piece, c);
        }

        const hasWonDiagonal = this.hasWonDiagonal(piece);
        
        return hasWonRow || hasWonColumn || hasWonDiagonal;
    }

    isFull() {
        for (let r = 0; r < this.size; r++) {
            for (let c = 0; c < this.size; c++) {
                const cell = this.board[r][c];
                if (cell.isEmpty()) return false;
            }
        }
        return true;
    }

    private printRow(r: number) {
        const row = this.board[r];
        const printString = row.join(' ');
        console.log(printString);
    }

    print() {
        for (let r = 0; r < this.size; r++) {
            this.printRow(r);
        }
        console.log();
    }
}