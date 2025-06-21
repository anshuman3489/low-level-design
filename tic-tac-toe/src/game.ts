import { Board } from "./board";
import { GameStatus } from "./game-status";
import { Player } from "./player";

export class Game {
    status: GameStatus;
    currentPlayerIndex: number;

    constructor(public board: Board, public players: Player[]) {
        this.status = GameStatus.IN_PROGRESS;
        this.currentPlayerIndex = 0;
    }

    playMove(row: number, col: number) {
        if (this.status != GameStatus.IN_PROGRESS) {
            throw new Error('Game already finished!');
        }

        if (!this.board.isValidMove(row, col)) {
            console.log('Invalid move, please try again!');
            return;
        }

        const player = this.players[this.currentPlayerIndex];
        this.board.setPiece(row, col, player.piece);

        const hasPlayerWon = this.board.hasWon(player.piece);
        if (hasPlayerWon) {
            this.status = GameStatus.WIN;
            console.log(`Player ${player.name} with piece ${player.piece} won!`);
            return;
        }

        const isDraw = this.board.isFull();
        if (isDraw) {
            this.status = GameStatus.DRAW;
            console.log('Game ends in a draw!');
            return;
        }

        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }

    reset() {
        this.board.reset();
        this.currentPlayerIndex = 0;
        this.status = GameStatus.IN_PROGRESS;
    }

    printBoard() {
        this.board.print();
    }
}