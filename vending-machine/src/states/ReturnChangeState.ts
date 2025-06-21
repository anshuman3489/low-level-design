import { IdleState } from "./IdleState";
import { VendingMachineState } from "./VendingMachineState";

export class ReturnChangeState extends VendingMachineState {
    returnChange() {
        const change = this.vendingMachine.payment - this.vendingMachine.selectedProduct.price;
        if (change > 0) {
            console.log(`Collect your change: ${change} rupees!`);
        }
        
        this.vendingMachine.payment = 0;
        this.vendingMachine.selectedProduct = null;
        this.vendingMachine.setState(new IdleState(this.vendingMachine));
    }
}