export class Account {
    constructor(public accountNumber: string, public balance: number) {}

    addMoney(amount: number) {
        if (amount <= 0) {
            throw new Error('Invalid amount!');
        }
        this.balance += amount;
    }

    withdrawMoney(amount: number) {
        if (amount <= 0) {
            throw new Error('Invalid amount!');
        }

        if (amount > this.balance) {
            throw new Error('Insufficient funds!');
        }

        this.balance -= amount;
    }
}