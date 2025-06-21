import { Coin } from "./Coin";
import { VendingMachine } from "./VendingMachine";

class VendingMachineDemo {
    run() {
        const vendingMachine = VendingMachine.getInstance();

        const coke = vendingMachine.addProduct('Coke', 10, 3);
        const chips = vendingMachine.addProduct('Chips', 5, 1);

        vendingMachine.selectProduct(coke);
        vendingMachine.insertCoin(Coin.FIVE);
        vendingMachine.insertCoin(Coin.TEN);
        vendingMachine.dispenseProduct();
        vendingMachine.returnChange();

        vendingMachine.selectProduct(chips);
        vendingMachine.insertCoin(Coin.TWO);
        vendingMachine.dispenseProduct(); // Insufficient funds
        vendingMachine.insertCoin(Coin.TWO);
        vendingMachine.insertCoin(Coin.ONE);
        vendingMachine.dispenseProduct();
        vendingMachine.returnChange();

        vendingMachine.selectProduct(chips); // Not available
        vendingMachine.selectProduct(coke);
        vendingMachine.insertCoin(Coin.TWO);
        vendingMachine.cancelTransaction();
    }
}

new VendingMachineDemo().run();