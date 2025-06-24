import { Product } from "./Product";

export class ProductManager {
    private static instance: ProductManager;
    products: Map<string, Product>;
    stock: Map<Product, number>;

    private constructor() {
        this.products = new Map();
        this.stock = new Map();
    }

    static getInstance() {
        if (!ProductManager.instance) {
            ProductManager.instance = new ProductManager();
        }
        return ProductManager.instance;
    }

    addProduct(id: string, name: string, price: number) {
        let product = this.products.get(id);
        if (product) {
            console.log('Product already present');
            return product;
        }

        product = new Product(name, id, price);
        this.products.set(id, product);
        this.stock.set(product, 0);
        return product;
    }

    addStock(product: Product, quantity: number) {
        if (quantity <= 0) {
            throw new Error('Invalid quantity');
        }

        const currentQuantity = this.stock.get(product) || 0;
        this.stock.set(product, currentQuantity + quantity);
    }

    removeStock(product: Product, quantity: number) {
        if (quantity <= 0) {
            throw new Error('Invalid quantity');
        }

        const currentQuantity = this.stock.get(product) || 0;
        if (quantity > currentQuantity) {
            throw new Error('Insufficient product stock!');
        }

        this.stock.set(product, currentQuantity - quantity);
    }

    isAvailable(product: Product, quantity: number) {
        const currentQuantity = this.stock.get(product) || 0;
        return quantity <= currentQuantity;
    }
    
}