import { CashDispenser } from "./CashDispenser";

export class TwoThousandNoteDispenser extends CashDispenser {
    private getUsedNotes(amount: number) {
        const twoThousandNotesAvailable = this.atm.twoThousandNotes;
        const twoThousandNotesRequired = Math.floor(amount / 2000);
        return Math.min(twoThousandNotesAvailable, twoThousandNotesRequired);
    }

    isPossible(amount: number) {
        const notesUsed = this.getUsedNotes(amount);
        const remainingAmount = amount - notesUsed * 2000;
        return super.isPossible(remainingAmount);
    }

    dispense(amount: number) {
        const notesUsed = this.getUsedNotes(amount);
        console.log(`Dispensing ${notesUsed} two-thousand rupee notes!`);
        this.atm.twoThousandNotes -= notesUsed;
        const remainingAmount = amount - notesUsed * 2000;
        super.dispense(remainingAmount);
    }
}