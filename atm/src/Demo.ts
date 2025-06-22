import { Account } from "./Account";
import { Atm } from "./Atm";
import { Card } from "./Card";
import { Operation } from "./Operation";

class AtmDemo {
    run() {
        const atm = Atm.getInstance();

        const account = new Account('123', 4500);
        const card = new Card('99', '1423', account);

        this.checkInvalidPinScenario(atm, card);
        this.checkInsufficientFundsInAtm(atm, card); // no balance in atm
        this.checkAccountBalance(atm, card);

        atm.depositMoney(10, 2, 1);

        this.checkValidAmountWithdrawal(atm, card, 1300);
        this.checkValidAmountWithdrawal(atm, card, 1000); // required notes not present in ATM
        this.checkValidAmountWithdrawal(atm, card, 2700);
        this.checkValidAmountWithdrawal(atm, card, 800); // no balance in account
    }

    checkInvalidPinScenario(atm: Atm, card: Card) {
        atm.insertCard(card);
        atm.authenticatePin('1111');
    }

    checkInsufficientFundsInAtm(atm: Atm, card: Card) {
        atm.insertCard(card);
        atm.authenticatePin('1423');
        atm.selectOperation(Operation.CASH_WITHDRAWL);
        atm.withdrawCash(1000);
    }

    checkAccountBalance(atm: Atm, card: Card) {
        atm.insertCard(card);
        atm.authenticatePin('1423');
        atm.selectOperation(Operation.BALANCE_ENQUIRY);
        atm.checkBalance();
    }

    checkValidAmountWithdrawal(atm: Atm, card: Card, amount: number) {
        atm.insertCard(card);
        atm.authenticatePin('1423');
        atm.selectOperation(Operation.CASH_WITHDRAWL);
        atm.withdrawCash(amount);
        this.checkAccountBalance(atm, card);
    }
}

new AtmDemo().run();