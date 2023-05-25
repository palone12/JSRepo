// Fucntion Currying is the advance technique of the conversting the functions of n arguments in n functions of one or more arguments

function eatMore(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

console.log(eatMore(3)(3)(3));
