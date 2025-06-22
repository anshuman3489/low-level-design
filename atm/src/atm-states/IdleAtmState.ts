import { Card } from "../Card";
import { AtmState } from "./AtmState";
import { CardInsertedAtmState } from "./CardInsertedAtmState";

export class IdleAtmState extends AtmState {
    insertCard(card: Card): void {
        this.atm.card = card;
        this.atm.setState(new CardInsertedAtmState(this.atm));
    }
}