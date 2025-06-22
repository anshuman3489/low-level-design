import { AtmState } from "./AtmState";
import { SelectOperationAtmState } from "./SelectOperationAtmState";

export class CardInsertedAtmState extends AtmState {
    authenticatePin(pin: string): void {
        if (this.atm.card.authenticate(pin)) {
            this.atm.setState(new SelectOperationAtmState(this.atm));
        } else {
            console.log('Incorrect Pin!');
            this.exit();
        }
    }
}