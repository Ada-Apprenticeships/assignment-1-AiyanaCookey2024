import Product from './Product.js';
import Clothing from './Clothing.js';
import Electronics from './Electronics.js';

// Creating a Factory Design patter to create different types of products
class  ProductFactory {
    createProduct(type, id, name, price, quantity, ...args) {
      if (type === "clothing") {
          return new Clothing(id, name, price, quantity, ...args);
      }else if (type === "electronics") {
          return new Electronics(id, name, price, quantity, ...args);
      } else {
          return new Product(id, name, price, quantity, ...args);
      }
    }
  }
  
  const factory = new ProductFactory();
  const newClothing= factory.createProduct("clothing","E101", "Shirt", 29.99, 10, "L", "Polyester");
  const newElectronics = factory.createProduct("electronics", "F202", "Tablet", 399.99, 5, "Samsung", "2 years");
  
export default ProductFactory;
  
  