class Product {
    #id;
    #name;
    #price;
    #quantity;
  
    constructor(id, name, price, quantity) {
      //To prevent instantiation of the abstract class
      if (new.target === Product) {
        throw new Error("Cannot instantiate abstract class.");
      }
      
      this.#id = id;
      this.#name = name;
      this.#price = price;
      this.#quantity = quantity;
    }

    get id() {
      return this.#id;
    }
    get name() {
      return this.#name;
    }
    get price() {
      return this.#price;
    }
  
    get quantity() {
      return this.#quantity;
    }
    
    set quantity(newQuantity) {{
      if(newQuantity < 0) {
        throw new Error("Quantity cannot be negative.");
      }
    }
      this.#quantity = newQuantity;
    }
  
    getProductDetails() {
      throw new Error("Method 'getProductDetails()' must be implemented in subclasses");
    }
  }

  export default Product;
