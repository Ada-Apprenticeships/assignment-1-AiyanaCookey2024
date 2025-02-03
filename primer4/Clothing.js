import Product from './Product.js';

export class Clothing extends Product {
    #size;
    #material;
  
    constructor(id, name, price, quantity, size, material) {
    super(id, name, price, quantity); // Call the parent class constructor
      this.#size = size;
      this.#material = material;
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

  export default Clothing;
    