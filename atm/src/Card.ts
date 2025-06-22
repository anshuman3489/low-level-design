import { Account } from "./Account";

export class Card {
    constructor(public cardNumber: string, private pin: string, public account: Account) {}

    authenticate(enteredPin: string) {
        return enteredPin === this.pin;
    }
}