// Var - It is a global scope / functional scope variable
console.log(Name);
var Name = "Pranay";

function printNmyName() {
  console.log(Name);
}

printNmyName();

// Let - Blocked Scape varaible that cannot be used before intialisation like var
// Reassignment Possible
let Car = "Ferrari";
Car = "Huracam";

console.log(Car);

function carFunc() {
  let carName = "Rolles Royce"; // BLock scope  carNAme cannor be accessed out of the function
  console.log(carName);
}

carFunc();

const arr = [1, 2, 3, 34, 4];
arr = [1, 2, 3, 34, 7, 7, 7, 7];
console.log(arr);
