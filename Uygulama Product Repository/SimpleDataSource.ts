import { Product } from "./Product";

export class SimpleDataSource {
    private products: Product[];

    constructor(){
        this.products = new Array<Product> (
            new Product(1, 'Tel 1', 'Telefon', 1000),
            new Product(2, 'Tel 2', 'Telefon', 2000),
            new Product(3, 'Tel 3', 'Telefon', 3000),
            new Product(4, 'Tel 4', 'Telefon', 4000)
        )
    }

    getProducts() : Product[] {
        return this.products;
    }
}