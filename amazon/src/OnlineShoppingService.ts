import { randomUUID } from "node:crypto";
import { Order } from "./Order";
import { PaymentStrategy } from "./payment/PaymentStrategy";
import { Product } from "./Product";
import { ProductManager } from "./ProductManager";
import { User } from "./User";
import { UserManager } from "./UserManager";

export class OnlineShoppingService {
    private static instance: OnlineShoppingService;
    private userManager: UserManager;
    private productManager: ProductManager;

    private constructor() {
        this.userManager = UserManager.getInstance();
        this.productManager = ProductManager.getInstance();
    }

    static getInstance() {
        if (!OnlineShoppingService.instance) {
            OnlineShoppingService.instance = new OnlineShoppingService();
        }
        return OnlineShoppingService.instance;
    }

    addUser(name: string, email: string) {
        return this.userManager.addUser(name, email);
    }

    addProductStock(id: string, name: string, price: number, quantity: number) {
        const product = this.productManager.addProduct(id, name, price);
        this.productManager.addStock(product, quantity);
        return product;
    }

    searchProduct(keyword: string): Product[] {
        keyword = keyword.toLowerCase().trim();
        const matchingProducts: Product[] = [];
        for (const product of this.productManager.products.values()) {
            // Product might be out of stock
            if (product.name.toLowerCase().includes(keyword)) {
                matchingProducts.push(product);
            }
        }
        return matchingProducts;
    }

    addToCart(product: Product, user: User, quantity: number) {
        // validations on user, product and quantity
        if (!this.productManager.isAvailable(product, quantity)) {
            throw new Error('Insufficient product stock!');
        }

        user.cart.addProduct(product, quantity);
    }

    removeFromCart(product: Product, user: User, quantity: number) {
        user.cart.removeProduct(product, quantity);
    }

    clearCart(user: User) {
        user.cart.clear();
    }

    placeOrder(user: User, payment: PaymentStrategy): Order {
        const cart = user.cart;

        for (const [product, quantity] of cart.products) {
            if (!this.productManager.isAvailable(product, quantity)) {
                console.warn(`Product ${product.name} went out of stock!`);
                return;
            }
        }

        const orderId = randomUUID();
        const order = new Order(orderId);
        user.addOrder(order);
        for (const [product, quantity] of cart.products) {
            order.addProduct(product, quantity);
            this.productManager.removeStock(product, quantity);
        }

        const orderAmount = order.getTotalValue();
        const isPaymentSuccessful = payment.makePayment(orderAmount);

        if (isPaymentSuccessful) {
            order.confirm();
        } else {
            this.cancelOrder(order);
        }

        return order;
    }

    private cancelOrder(order: Order) {
        order.cancel();
        for (const [product, quantity] of order.products) {
            this.productManager.addStock(product, quantity);
        }
    }

    cancelUserOrder(id: string, user: User) {
        const order = user.orders.get(id);
        if (!order) {
            throw new Error('Order not found!');
        }

        this.cancelOrder(order);
    }

    listInventory() {
        for (const [product, quantity] of this.productManager.stock) {
            console.log(`${quantity} items of ${product.name} worth ${product.price} rupees is in stock!`);
        }
    }
}