import { Product } from "./Product";

export class Inventory {
    products: Map<Product, number>;

    constructor() {
        this.products = new Map();
    }

    addProduct(product: Product, quantity: number) {
        const currentQuantity = this.products.get(product) || 0;
        this.products.set(product, currentQuantity + quantity);
    }

    dispenseProduct(product: Product) {
        const quantity = this.products.get(product);
        if (quantity) {
            this.products.set(product, quantity - 1);
            return true;
        }
        return false;
    }

    isAvailable(product: Product) {
        const quantity = this.products.get(product);
        return Boolean(quantity);
    }
}