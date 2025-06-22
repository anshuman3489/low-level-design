import { AtmState } from "./AtmState";

export class WithdrawCashAtmState extends AtmState {
    private isValidAmount(amount: number) {
        if (amount <= 0) return false;
        if (amount % 100 !== 0) return false;
        return true;
    }

    withdrawCash(amount: number): void {
        if (!this.isValidAmount(amount)) {
            console.log('Entered amount must be positive and a multiple of 100!');
            return this.exit();
        }

        const accountBalance = this.atm.card.account.balance;
        if (accountBalance < amount) {
            console.log('Insufficient funds in your account!');
            return this.exit();
        }

        const atmBalance = this.atm.getAtmBalance();
        if (atmBalance < amount) {
            console.log('Insufficient funds in ATM!');
            return this.exit();
        }

        if (!this.atm.cashDispenser.isPossible(amount)) {
            console.log('Insufficient funds in ATM!');
            return this.exit();
        }

        this.atm.card.account.withdrawMoney(amount);
        this.atm.cashDispenser.dispense(amount);
        this.exit();
    }
}