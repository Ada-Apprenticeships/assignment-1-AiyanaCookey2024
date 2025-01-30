import Product from "./Product.js";
import Inventory from "./Inventory.js";
import Electronics from "./Electronics.js";
import Clothing from "./Clothing.js";


// Sample usage
const inventory = new Inventory();
const product1 = new Product("A123", "T-shirt", 19.99, 100);//can only instantiate Clothing or Electronics
const product2 = new Product("B456", "Jeans", 49.99, 50);
const clothing1 = new Clothing("C789", "Dress", 89.99, 20, "M", "Cotton");
const electronics1 = new Electronics("D101", "Smartphone", 699.99, 15, "Apple", "`1 year");

//Add products to the inventory
inventory.addProduct(product1);
inventory.addProduct(product2);
console.log(product1.getProductDetails());

inventory.addProduct(clothing1);
inventory.addProduct(electronics1);


// Update the quantity of a product
inventory.updateQuantity("A123", 50);

// Retrieve a product from the inventory
const retrievedProduct = inventory.getProduct("B456");
console.log(retrievedProduct);

// Check if a piece of clothing exists in the inventory
const clothingExists = inventory.getProduct("C789");
console.log(clothingExists);

//Check if an electronic item exists in the inventory
const electronicsExists = inventory.getProduct("D101");
console.log(electronicsExists);

//Remove a product from the inventory
inventory.removeProduct("A123");

//Try to get a removed product
try{
  inventory.getProduct("A123");
} catch (error) {
  console.error("An error occurred:", error.message);
}


// console.log("New Product: ", product1.getProductDetails());

//getProductDetails() method is overrideen in teh subclasses to include the unique attributes
//add additional tests to primer.test.js to verify the functiona;ity of your extended inventory management system


