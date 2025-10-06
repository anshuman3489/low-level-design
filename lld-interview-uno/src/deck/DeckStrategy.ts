import { Card } from "../card/Card";

export interface DeckStrategy {
    getCards(count: number): Card[];
}