import { Coin } from "./Coin";
import { Inventory } from "./Inventory";
import { Product } from "./Product";
import { IdleState } from "./states/IdleState";
import { VendingMachineState } from "./states/VendingMachineState";

export class VendingMachine {
    private static instance: VendingMachine;
    private state: VendingMachineState;
    inventory: Inventory;
    selectedProduct: Product;
    payment: number;

    private constructor() {
        this.payment = 0;
        this.state = new IdleState(this);
        this.inventory = new Inventory();
    }

    static getInstance() {
        if (!VendingMachine.instance) {
            VendingMachine.instance = new VendingMachine();
        }
        return VendingMachine.instance;
    }

    setState(newState: VendingMachineState) {
        this.state = newState;
    }

    addCoin(coin: Coin) {
        this.payment += coin;
    }

    addProduct(name: string, price: number, quantity: number) {
        const product = new Product(name, price);
        this.inventory.addProduct(product, quantity);
        return product;
    }

    selectProduct(product: Product) {
        this.state.selectProduct(product);
    }

    insertCoin(coin: Coin) {
        this.state.insertCoin(coin);
    }

    dispenseProduct() {
        this.state.dispenseProduct();
    }

    cancelTransaction() {
        this.state.cancelTransaction();
    }

    returnChange() {
        this.state.returnChange();
    }
}