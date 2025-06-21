import { Product } from "../Product";
import { ReturnChangeState } from "./ReturnChangeState";
import { VendingMachineState } from "./VendingMachineState";

export class DispenseState extends VendingMachineState {
    dispenseProduct(): void {
        const product = this.vendingMachine.selectedProduct;
        this.vendingMachine.inventory.dispenseProduct(product);
        console.log(`Collect your ${product.name}`);
        this.vendingMachine.setState(new ReturnChangeState(this.vendingMachine));
    }
}