import { Product } from "./Product";

export enum OrderStatus {
    PENDING,
    CONFIRMED,
    SHIPPED,
    DELIVERED,
    CANCELED,
}

export class Order {
    products: Map<Product, number>;
    private status: OrderStatus;
    
    constructor(public id: string) {
        this.products = new Map();
        this.status = OrderStatus.PENDING;
    }

    addProduct(product: Product, quantity: number) {
        const currentQuantity = this.products.get(product) || 0;
        this.products.set(product, currentQuantity + quantity);
    }

    getTotalValue() {
        let totalValue = 0;
        for (const [product, quantity] of this.products) {
            totalValue += (product.price * quantity);
        }
        return totalValue;
    }

    getStatus() {
        return this.status;
    }

    confirm() {
        if (this.status !== OrderStatus.PENDING) {
            throw new Error('Invalid status!');
        }
        console.log(`Order ${this.id} confirmed!`);
        this.status = OrderStatus.CONFIRMED;
    }

    cancel() {
        if (this.status > OrderStatus.SHIPPED) {
            throw new Error('Cancellation not allowed!');
        }
        this.status = OrderStatus.CANCELED;
    }

    ship() {
        if (this.status !== OrderStatus.CONFIRMED) {
            throw new Error('Invalid order to ship!');
        }
        console.log(`Order ${this.id} shipped!`);
        this.status = OrderStatus.SHIPPED;
    }

    deliver() {
        if (this.status !== OrderStatus.SHIPPED) {
            throw new Error('Invalid order to deliver!');
        }
        console.log(`Order ${this.id} delivered!`);
        this.status = OrderStatus.DELIVERED;
    }
}