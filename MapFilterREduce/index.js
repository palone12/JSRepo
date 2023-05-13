// map , filter , reduce
// Higher order functions - a function that takes functions as operations and does the operations
// MAP

let myArr = [1, 2, 3, 4, 5];
let neWarr = myArr.map(function (x) {
  return x * 2;
});

console.log(myArr, neWarr);

// filter

let filteredAlement = myArr.filter((x) => {
  return x % 2 === 0;
});
console.log(filteredAlement);

// reduce

let sum = myArr.reduce((accumulater, x) => {
  console.log(accumulater, x);
  return accumulater + x;
}, 0);

console.log(sum);
