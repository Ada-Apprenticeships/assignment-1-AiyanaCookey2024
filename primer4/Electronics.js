import Product from './Product.js';

export class Electronics extends Product {
    #brand;
    #warrantly;
  
    constructor(id, name, price, quantity, brand, warranty) {
    super(id, name, price, quantity); // Call the parent class constructor
      this.#brand = brand;
      this.#m = material;
    }
        
    getSize() {
        return this.#size;
      }
  
    getMaterial() {
        return this.#material;
      }

    getProductDetails() {
        const productDetails = super.getProductDetails();
        return { ...productDetails, size: this.#size, material: this.#material };// returning the product details
      }
    }

   
    
    
  export default Inventory;
    