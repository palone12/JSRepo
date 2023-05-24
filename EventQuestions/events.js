var div = document.querySelector("div");
var button = document.querySelector("button");
var a = document.querySelector("a");
console.log(a);

// Event bubbling - it the phenomenon when the event is triggred on chlid but it is impacts the element upto the parent level---> Child to parent

// div.addEventListener("click", () => {
//   console.log("Button Hitted but div got impacted");
// });

// Event Caputring - It is from Parent to Child

// button.addEventListener("click", (event) => {
//   // to stop event bubbling from child to parent we event.stopPropagation();
//   event.stopPropagation();
//   console.log("Button hot only ");
// });

// Prevent Default -- is used  for stop an element to perform its default behjaviour
a.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Stop Default Behaviour");
});
