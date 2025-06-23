import { Product } from "./Product";

export class Cart {
    products: Map<Product, number>;

    constructor() {
        this.products = new Map();
    }

    addProduct(product: Product, quantity: number) {
        const currentQuantity = this.products.get(product) || 0;
        this.products.set(product, currentQuantity + quantity);
    }

    removeProduct(product: Product, quantity: number) {
        const currentQuantity = this.products.get(product) || 0;
        if (quantity > currentQuantity) {
            throw new Error('Invalid product quantity');
        }
        this.products.set(product, currentQuantity - quantity);
    }

    clear() {
        this.products = new Map();
    }
}