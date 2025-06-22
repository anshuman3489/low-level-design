import { Atm } from "../Atm";

export abstract class CashDispenser {
    nextCashDispenser: CashDispenser;

    constructor(public atm: Atm) {}

    setNextDispenser(nextDispenser: CashDispenser) {
        this.nextCashDispenser = nextDispenser;
    }

    isPossible(amount: number) {
        if (amount === 0) return true;
        if (!this.nextCashDispenser) return false;
        return this.nextCashDispenser.isPossible(amount);
    }

    dispense(amount: number) {
        if (amount === 0) return;

        if (!this.nextCashDispenser) {
            throw new Error('Invalid amount');
        }

        this.nextCashDispenser.dispense(amount);
    }
}