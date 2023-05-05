//  Normal Function

function example() {
  console.log("I am a lexample");
}

example();

// Function Expression

const boomerang = function () {
  console.log("I am Boomerang");
};

boomerang();

// Anonymous Fucntion - A function without Name

let anonymous = function () {
  console.log("I am function with a name");
};
anonymous();

// IIFE - Immmediately Invoked Function Expression

(function printName() {
  console.log("Hi I am Pranay");
})();

// Arrow Functions

let arrow = () => {
  console.log("Mera nam Arrow hai");
};

arrow();
