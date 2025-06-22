import { Atm } from "../Atm";
import { Card } from "../Card";
import { Operation } from "../Operation";
import { IdleAtmState } from "./IdleAtmState";

export abstract class AtmState {
    constructor(public atm: Atm) {}

    insertCard(card: Card) {}
    authenticatePin(pin: string) {}
    selectOperation(operation: Operation) {}
    withdrawCash(amount: number) {}
    checkBalance() {}
    
    exit() {
        this.atm.returnCard();
        this.atm.setState(new IdleAtmState(this.atm));
    }
}