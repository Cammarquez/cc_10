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
console.log(prod1.getDetails()); //prints the details of the product
console.log(prod1.updateStock(5)); //updates the stock of the product and prints the updated stock