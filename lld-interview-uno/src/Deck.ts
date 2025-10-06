import { Card } from "./card/Card";
import { DeckStrategy } from "./deck/DeckStrategy";

export class Deck {
    cards: Card[];
    strategy: DeckStrategy;
    maxSize: number;

    constructor(size: number, strategy: DeckStrategy) {
        this.maxSize = size;
        this.strategy = strategy;
        this.cards = this.strategy.getCards(size);
    }

    getCards(count: number) {
        if (this.cards.length < count) {
            this.cards = this.strategy.getCards(size);
        }
    }
}