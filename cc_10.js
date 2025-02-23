//Initial Commit

//Task 1
class Product {
    constructor(name,id,price,stock) //creates a class with 4 parameters
    {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }
    getDetails() //creates a method to get the details of the product
    {
        return `Product: ${this.name}, ID: ${this.id}, Price: ${this.price}, Stock: ${this.stock}`;
    }
    updateStock(quantity) //creates a method to update the stock of the product
    {
        this.stock += quantity; //updates the stock of the product
        return `Updated Quantity: ${this.stock}`; //returns the updated stock
    }
}
const prod1 = new Product('Laptop',101,1200,10); //creates a new object of the class Product
const prod2 = new Product('Phone',102,800,20); //creates a new object of the class Product
console.log(prod1.getDetails()); //prints the details of the product
console.log(prod1.updateStock(5)); //updates the stock of the product and prints the updated stock

//Task 2
class Order {
    constructor(orderId, product, quantity) //creates a class with 3 parameters
    {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        if (this.product.stock >= this.quantity) {
            this.product.stock -= this.quantity; //updates the stock of the product when an order is placed (when an object is created in the product class)
        } else {
            throw new Error('Insufficient stock to place the order');
        }
    }
        getOrderDetails() //creates a method to get the details of the order
    {
            return `Ordered Product: ${this.product.name}, Ordered Quantity: ${this.quantity}, Order ID: ${this.orderId}`; //returns the details of the order
    }
}
const order1 = new Order(501, prod1, 2); //creates a new object of the class Order
console.log(order1.getOrderDetails()); //prints the details of the order
console.log(prod1.getDetails()); //prints the updated stock of the product

//Task 3
class Inventory {
    constructor() //creates a class
    {
        this.products = []; //creates an array to store the products
    }
    addProduct(product) //creates a method to add a product to the inventory
    {
        this.products.push(product); //adds the product to the array
        return `Product added to the inventory: ${product.name}`; //returns the name of the product added to the inventory
    }
    listProducts() //creates a method to get the inventory
    {
        this.products.forEach(product => {
            console.log(product.getDetails()); //logs the details of each product
        });
    }
}
const inventory = new Inventory(); //creates a new object of the class Inventory
console.log(inventory.addProduct(prod1)); //adds the product to the inventory
console.log(inventory.addProduct(prod2)); //adds the product to the inventory
inventory.listProducts(); //logs the inventory

//Task 4
inventory.orders = []; //creates an array to store the orders

inventory.placeOrder = function(orderId, product, quantity) {
    if (product.stock >= quantity) {
        const order = new Order(orderId, product, quantity); //creates a new order
        this.orders.push(order); //adds the order to the array
        return `Order added to the inventory: ${order.orderId}`; //returns the order ID of the order added to the inventory
    } else {
        throw new Error('Insufficient stock to place the order');
    }
}

inventory.listOrders = function() {
    this.orders.forEach(order => {
        console.log(order.getOrderDetails()); //logs the details of each order
    });
}

console.log(inventory.placeOrder(601, prod1, 2)); //adds the order to the inventory
inventory.listOrders(); //logs the orders
console.log(prod1.getDetails()); //prints the updated stock of the product

//Task 5
inventory.restockProduct = function(id, quantity) {
    const product = this.products.find(product => product.id === id); //finds the product by ID inputed
    if (product) { //checks if the product exists
        product.stock += quantity; //restocks the product by the quanity inputed
        return console.log(`Restocked Product: ${product.name}`,`Restocked Quantity: ${product.stock}`); //returns the restocked quantity
    } else {
        console.error('Product not found'); //prints the error message to the console
    }
}
inventory.restockProduct(101, 5); //restocks the product
console.log(prod1.getDetails()); //prints the updated stock of the product
