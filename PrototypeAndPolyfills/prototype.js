// Protopye is used tio add new functionalities or custom functionalities as per  our requirements

Array.prototype.square = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i]));
  }

  return newArr;
};

function squareEle(x) {
  return x * x;
}

console.log([1, 2, 35, 5].square(squareEle));

Array.prototype.reduceCustom = function (value, cb) {
  let result = value;
  for (let i = 0; i < this.length; i++) {
    result = value + cb(this[i]);
  }
};

function customCallback(x) {
  console.log(x);
  return x * x;
}

const myArr = [2, 3, 4, 5, 5, 6];
console.log(myArr.reduceCustom(0, customCallback));

let ans = myArr.reduce(customCallback, 10);
console.log(ans);

(function () {
  console.log("Hello IIFE");
})();
