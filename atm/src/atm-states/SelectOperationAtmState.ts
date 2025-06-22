import { Operation } from "../Operation";
import { AtmState } from "./AtmState";
import { CheckBalanceAtmState } from "./CheckBalanceAtmState";
import { WithdrawCashAtmState } from "./WithdrawCashAtmState";

export class SelectOperationAtmState extends AtmState {
    selectOperation(operation: Operation): void {
        switch (operation) {
            case Operation.BALANCE_ENQUIRY:
                this.atm.setState(new CheckBalanceAtmState(this.atm));
                break;
            case Operation.CASH_WITHDRAWL:
                this.atm.setState(new WithdrawCashAtmState(this.atm));
                break;
            default:
                throw new Error('Invalid Operation!');
        }
    }
}