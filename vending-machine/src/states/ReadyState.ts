import { Coin } from "../Coin";
import { DispenseState } from "./DispenseState";
import { IdleState } from "./IdleState";
import { VendingMachineState } from "./VendingMachineState";

export class ReadyState extends VendingMachineState {
    insertCoin(coin: Coin): void {
        this.vendingMachine.addCoin(coin);
        this.checkPaymentStatus();
    }

    private checkPaymentStatus() {
        if (this.vendingMachine.payment >= this.vendingMachine.selectedProduct.price) {
            this.vendingMachine.setState(new DispenseState(this.vendingMachine));
        }
    }

    cancelTransaction(): void {
        const payment = this.vendingMachine.payment;
        console.log(`Refunding ${payment} rupees!`);

        this.vendingMachine.selectProduct = null;
        this.vendingMachine.payment = 0;
        this.vendingMachine.setState(new IdleState(this.vendingMachine));
    }

    dispenseProduct(): void {
        console.log('Insufficient funds!');
    }
}