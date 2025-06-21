import { Board } from "./board";
import { Game } from "./game";
import { Piece } from "./piece";
import { Player } from "./player";

class TicTacToeDemo {
    run() {
        const player1 = new Player('Player1', Piece.X);
        const player2 = new Player('Player2', Piece.O);
        const board = new Board(3);
        const game = new Game(board, [player1, player2]);

        // Win Scenario
        game.playMove(1, 0);
        game.printBoard();

        game.playMove(1, 1);
        game.printBoard();

        game.playMove(2, 0);
        game.printBoard();

        game.playMove(0, 0);
        game.printBoard;

        game.playMove(1, 2);
        game.printBoard();

        game.playMove(2, 2);
        game.printBoard();

        game.reset();

        // Draw Scenario
        game.playMove(0, 0);
        game.playMove(1, 0);
        game.playMove(0, 1);
        game.playMove(0, 2);
        game.playMove(0, 0); // invalid move by Player 1
        game.playMove(2, 0);
        game.playMove(2, 1);
        game.playMove(2, 2);
        game.playMove(1, 1);
        game.playMove(1, 2);
        game.printBoard();
    }
}

new TicTacToeDemo().run();
