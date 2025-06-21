import { Product } from "../Product";
import { ReadyState } from "./ReadyState";
import { VendingMachineState } from "./VendingMachineState";

export class IdleState extends VendingMachineState {
    selectProduct(product: Product): void {
        const isAvailable = this.vendingMachine.inventory.isAvailable(product);
        if (!isAvailable) {
            console.log(`${product.name} is out of stock!`);
            return;
        }

        this.vendingMachine.selectedProduct = product;
        this.vendingMachine.setState(new ReadyState(this.vendingMachine));
    }
}