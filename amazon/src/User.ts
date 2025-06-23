import { Cart } from "./Cart";
import { Order } from "./Order";

export class User {
    public cart: Cart;
    public orders: Map<string, Order>;

    constructor(public name: string, email: string) {
        this.cart = new Cart();
        this.orders = new Map();
    }

    addOrder(order: Order) {
        this.orders.set(order.id, order);
    }
}