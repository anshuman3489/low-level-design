import { Card, Color, Value } from "../card/Card";
import { DeckStrategy } from "./DeckStrategy";

export class RandomDeckStrategy implements DeckStrategy {
    getCards(count: number): Card[] {
        const allCards = [new Card(Value.ONE, Color.RED), new Card(Value.DRAW_TWO, Color.GREEN)];
        const randomIndex = Math.random() 
        return [allCards[randomIndex]];
    }
}