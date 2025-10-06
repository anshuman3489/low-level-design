import { Card } from "./card/Card";

export class Player {
    constructor(public name: string, public id: string, public cards: Card[]) {}

    playCard(card: Card) {
        if (!this.cards.includes(card)) {
            throw new Error('Invalid Card');
        }

        const index = this.cards.indexOf(card);
        this.cards = this.cards.splice(index, 1);
    }
}