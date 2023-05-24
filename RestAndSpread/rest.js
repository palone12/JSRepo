const add = (a, b, ...c) => {
  return a + b;
};

console.log(add(3, 4, 5, 6, 7));

const obj = {
  name: "Pranay",
  role: "frontend Dev",
  age: "21",
};

const { name } = obj;

const namesArray = ["Pranay", "Raju", "Faran", "Rancho"];

console.log(...namesArray);

const obj2 = {
  ...obj,
  age: "29",
};

console.log(obj2);
