import { CashDispenser } from "./CashDispenser";

export class OneHundredNoteDispenser extends CashDispenser {
    isPossible(amount: number) {
        if (amount <= this.atm.oneHundredNotes * 100) {
            return true;
        }
        const remainingAmount = amount - this.atm.oneHundredNotes * 100;
        return super.isPossible(remainingAmount);
    }

    dispense(amount: number) {
        const notesUsed = Math.floor(amount / 100);
        console.log(`Dispensing ${notesUsed} one-hundred rupee notes!`);
        this.atm.oneHundredNotes -= notesUsed;
        const remainingAmount = amount - notesUsed * 100;
        super.dispense(remainingAmount);
    }
}