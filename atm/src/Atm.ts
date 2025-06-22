import { AtmState } from "./atm-states/AtmState";
import { IdleAtmState } from "./atm-states/IdleAtmState";
import { Card } from "./Card";
import { CashDispenser } from "./cash-dispenser/CashDispenser";
import { FiveHundredNoteDispenser } from "./cash-dispenser/FiveHundredNoteDispenser";
import { OneHundredNoteDispenser } from "./cash-dispenser/OneHundredNoteDispenser";
import { TwoThousandNoteDispenser } from "./cash-dispenser/TwoThousandNoteDispenser";
import { Operation } from "./Operation";

export class Atm {
    private state: AtmState;
    private static instance: Atm;
    card: Card;
    oneHundredNotes: number;
    fiveHundredNotes: number;
    twoThousandNotes: number;
    cashDispenser: CashDispenser;

    private constructor() {
        this.state = new IdleAtmState(this);
        this.oneHundredNotes = 0;
        this.fiveHundredNotes = 0;
        this.twoThousandNotes = 0;
        this.initializeNoteDispenser();
    }

    static getInstance() {
        if (!Atm.instance) {
            Atm.instance = new Atm();
        }
        return Atm.instance;
    }

    private initializeNoteDispenser() {
        const oneHundredNoteDispenser = new OneHundredNoteDispenser(this);
        const fiveHundredNoteDispenser = new FiveHundredNoteDispenser(this);
        const twoThousandNoteDispenser = new TwoThousandNoteDispenser(this);
        twoThousandNoteDispenser.setNextDispenser(fiveHundredNoteDispenser);
        fiveHundredNoteDispenser.setNextDispenser(oneHundredNoteDispenser);
        this.cashDispenser = twoThousandNoteDispenser;
    }

    depositMoney(oneHundredNotes: number, fiveHundredNotes: number, twoThousandNotes: number) {
        this.oneHundredNotes += oneHundredNotes;
        this.fiveHundredNotes += fiveHundredNotes;
        this.twoThousandNotes += twoThousandNotes;
    }

    getAtmBalance() {
        return this.oneHundredNotes * 100 + this.fiveHundredNotes * 500 + this.twoThousandNotes * 2000;
    }

    setState(newState: AtmState) {
        this.state = newState;
    }

    insertCard(card: Card) {
        this.state.insertCard(card);
    }

    authenticatePin(pin: string) {
        this.state.authenticatePin(pin);
    }

    selectOperation(operation: Operation) {
        this.state.selectOperation(operation);
    }

    withdrawCash(amount: number) {
        this.state.withdrawCash(amount);
    }

    checkBalance() {
        this.state.checkBalance();
    }

    exit() {
        this.state.exit();
    }

    returnCard() {
        console.log('Please collect your card!');
        this.card = null;
    }
}