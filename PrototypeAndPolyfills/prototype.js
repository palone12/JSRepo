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
