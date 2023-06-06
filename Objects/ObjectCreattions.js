// To Create a object we can create in follwoing ways

// 1 . Object Literals

const car = {
  Model: "LC800",
  Color: "Black",
  HP: "1000",
};

console.log(car);

// Using in built obejct constructor

const person = new Object();
person.name = "Pranay";
person.role = "SDE";

console.log(person);

// Using ES6 classes to create objects using class

class tractor {
  constructor(brand, capacity) {
    this.brand = brand;
    this.capacity = capacity;
  }
}

const product = new tractor("Mahindra", "100TON");
const product2 = new tractor("Mahindra", "100TON");

console.log(product);

//Comparing Two object can be done with JSON.strignify

console.log(JSON.stringify(product) === JSON.stringify(product2));
