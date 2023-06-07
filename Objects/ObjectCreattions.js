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

car.power = "1000HP";
car["EngineCylinder"] = "20Cylinder";

console.log(car);

for (const x in car) {
  console.log(`${x}: ${car[x]}`);
}

const user = {
  name: "John Doe",

  email: "john.doe@example.com",

  age: 25,

  dob: "08/02/1989",

  active: true,
};

// iterate over the user object

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

// name: John Doe

// email: john.doe@example.com

// age: 25

// dob: 08/02/1989

// active: true

const data = Object.keys(car);
console.log(data);
const data2 = Object.values(car);
console.log(data2);

// Pass by refernence

let person1 = {
  name: "John",

  age: 30,
};

let person2 = person1;

person2.name = "Jane";

console.log(person1);
