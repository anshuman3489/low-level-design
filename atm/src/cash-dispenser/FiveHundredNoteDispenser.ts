import { CashDispenser } from "./CashDispenser";

export class FiveHundredNoteDispenser extends CashDispenser {
    private getUsedNotes(amount: number) {
        const fiveHundredNotesAvailable = this.atm.fiveHundredNotes;
        const fiveHundredNotesRequired = Math.floor(amount / 500);
        return Math.min(fiveHundredNotesAvailable, fiveHundredNotesRequired);
    }
    
    isPossible(amount: number) {
        const notesUsed = this.getUsedNotes(amount);
        const remainingAmount = amount - notesUsed * 500;
        return super.isPossible(remainingAmount);
    }

    dispense(amount: number) {
        const notesUsed = this.getUsedNotes(amount);
        console.log(`Dispensing ${notesUsed} five-hundred rupee notes!`);
        this.atm.fiveHundredNotes -= notesUsed;
        const remainingAmount = amount - notesUsed * 500;
        super.dispense(remainingAmount);
    }
}