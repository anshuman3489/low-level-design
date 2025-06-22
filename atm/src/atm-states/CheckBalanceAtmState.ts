import { AtmState } from "./AtmState";

export class CheckBalanceAtmState extends AtmState {
    checkBalance(): void {
        const card = this.atm.card;
        const balance = card.account.balance;
        console.log(`Your account balance is ${balance} rupees!`);
        this.exit();
    }
}