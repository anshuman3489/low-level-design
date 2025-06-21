import { Coin } from "../Coin";
import { Product } from "../Product";
import { VendingMachine } from "../VendingMachine";

export abstract class VendingMachineState {
    constructor(public vendingMachine: VendingMachine) {}
    insertCoin(coin: Coin) {}
    selectProduct(product: Product) {}
    dispenseProduct() {}
    returnChange() {}
    cancelTransaction() {}
}