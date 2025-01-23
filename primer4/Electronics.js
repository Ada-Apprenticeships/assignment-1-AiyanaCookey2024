import Product from './Product.js';

export class Electronics extends Product {
    #brand;
    #warranty;
  
    constructor(id, name, price, quantity, brand, warranty) {
    super(id, name, price, quantity); // Call the parent class constructor
      this.#brand = brand;
      this.#warranty = warranty;
    }
        
    getBrand() {
        return this.#brand;
      }
  
    getWarranty() {
        return this.#warranty;
      }

    getProductDetails() {
        const productDetails = super.getProductDetails();
        return { ...productDetails, brand: this.#brand, warranty: this.#warranty };// returning the product details
      }
    }

   
    
    
  export default Inventory;
    