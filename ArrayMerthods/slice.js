const arr = ["Mango", "Apple", "Pineapple", "Papaya"];
const arr2 = arr.slice(0, 3);
console.log(arr2);

// In array.slice() method we need to provide start and stop index and ans end index is exclusive and slice method return the new array;

const shifted = arr.shift();
// Shift method removes the first element and return it and makes changes to original array.
console.log(shifted);

// Splice method - It is used to add or remove elements in array at acertain postion

arr.splice(2, 3, "jalebu", "fafda", "rasmalai");

console.log(arr);
