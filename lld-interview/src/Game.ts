import { Card, Color, Value } from "./card/Card";
import { Deck } from "./Deck";
import { DeckStrategy } from "./deck/DeckStrategy";
import { Player } from "./Player";


enum Direction {
    CLOCKWISE = 1,
    ANTI_CLOCKWISE = -1,
}

export class Game {
    players: Player[];
    playedCards: Card[];
    deck: Deck;
    currentPlayerIndex: number;
    direction: Direction;

    constructor(players: Player[], deck: Deck) {
        this.players = players;
        this.deck = deck;
        this.playedCards = this.deck.getCards(1);
        this.currentPlayerIndex = 0;
        this.direction = Direction.CLOCKWISE;
    }

    play() {
        while (true) {
            const player = this.players[this.currentPlayerIndex];
            const topCard = this.playedCards[-1];

            // pick 
            const cardsToPick = 
            

            // take user input for the card they want to play
            const card = player.getCard(Value.ONE, Color.RED);
            this.validateCard(card);


        }
    }
}