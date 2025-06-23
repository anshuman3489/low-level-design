import { OnlineShoppingService } from "./OnlineShoppingService";
import { CardPaymentStrategy } from "./payment/CardPaymentStrategy";
import { WalletPaymentStrategy } from "./payment/WalletPaymentStrategy";

export class Demo {
    run() {
        const amazon = OnlineShoppingService.getInstance();

        const user1 = amazon.addUser('John Doe', 'john.doe@example.com');
        const user2 = amazon.addUser('Jane Doe', 'jane@abs.com');

        const book1 = amazon.addProductStock('P123', 'Harry Potter', 200, 10);
        const book2 = amazon.addProductStock('P142', 'Mistborn', 500, 1);

        const mobile = amazon.addProductStock('M421', 'iPhone 17', 60000, 2);

        amazon.addToCart(book1, user1, 2);
        amazon.addToCart(book2, user1, 1);
        
        amazon.addToCart(book2, user2, 1);

        const order1 = amazon.placeOrder(user1, new CardPaymentStrategy()); // successful order
        const order2 = amazon.placeOrder(user2, new WalletPaymentStrategy()); // unsuccessful order

        order1.ship();
        order1.deliver();

        // List Inventory
        amazon.listInventory();
    }
}

new Demo().run();