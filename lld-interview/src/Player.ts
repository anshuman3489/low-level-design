import { Card, Color, Value } from "./card/Card";

export class Player {
    constructor(public name: string, public id: string, public cards: Card[]) {}

    getCard(value: Value, color: Color) {
        let card: Card;
        for (let c of this.cards) {
            if (c.value === value && c.color === color) {
                card = c;
                break;
            }
        }

        if (!card) {
            throw new Error('Invalid');
        }

        this.cards = this.cards.filter(c => c !== card);
        return card;
    }
}