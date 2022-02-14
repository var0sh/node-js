import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();
let p = new Product;
let result;

result = _productService.getProducts();
result = _productService.getById(2);

p.id = 2
p.name = 'Tel 5';
p.price = 5000;
p.category = 'Telefon';

_productService.saveProduct(p);
// _productService.deleteProduct(result);
result = _productService.getProducts();

console.log(result);