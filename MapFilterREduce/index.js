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

const dataArr = [4, 6, 7, 3, 2, 22, 33];
//map revision
const resultedArray = dataArr.map((ele) => {
  return ele * ele;
});

console.log(resultedArray, "Squared Elements");

//filter revision

const unfilteredArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filteredArray = unfilteredArr.filter((ele) => {
  return ele % 2 === 0;
});

console.log(filteredArray);

// reduce - return a single accumlated value

const nums = [1, 2, 3, 4, 5];

const result = nums.reduce((acc, ele) => {
  return acc + ele;
}, 0);

// if intial value is not provided then it takes first value as intail value
console.log(result);

// Creating polyfill

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

function cb(ele) {
  return ele * ele;
}

console.log(nums.myMap(cb), "Custom map");

// Creating Custom Filter function

Array.prototype.filterCustom = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      temp.push(this[i]);
    }
  }
  return temp;
};

function callBack(ele) {
  return ele % 2 === 0;
}

console.log(nums.filterCustom(callBack), "Custom Filter");
