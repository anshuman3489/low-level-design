import { Game } from "../Game";

export enum Color {
    BLUE,
    GREEN,
    YELLOW,
    RED,
}

export enum Value {
    ONE,
    TWO,
    THREE,
    SKIP,
    DRAW_TWO,
    REVERSE,
}

export class Card {
    constructor(public value: Value, public color: Color) {}

    isSpecial()

    getCountOfCard() {
        retr
    }
}