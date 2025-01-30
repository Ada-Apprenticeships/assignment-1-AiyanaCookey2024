class Product {
    #id;
    #name;
    #price;
    #quantity;
  
    constructor(id, name, price, quantity) {
      if (typeof id !== "string" || id === "") {
        throw new Error("ID must be a non-empty string.");
      }
      // if (this.constructor === Product) {
      //   throw new Error("Abstract class 'Product' cannot be instantiated.");
      // }
      
      this.#id = id;
      this.#name = name;
      this.#price = price;
      this.#quantity = quantity;
    }

    get id() {
      if (typeof this.#id !== "string" || this.#id === "") {
        throw new Error("ID must be a non-empty string.");
      }
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
      return {
        id: this.#id,
        name: this.#name,
        price: this.#price,
        quantity: this.#quantity
      }
  }
}
  export default Product;
