function calculate(a, b) {
  let result = a * b;
  return result;
}

console.log(calculate(187, 54));

// Closures in Javascript

function add(a, b) {
  function addChild() {
    console.log(a + 5656);
  }
  addChild();
}

add(343);
