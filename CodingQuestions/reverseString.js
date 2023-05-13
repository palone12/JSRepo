var string = "Welcome to this Javascript Guide!";

// Simple reverse
var reversed = "";
for (let i = string.length; i >= 0; i--) {
  reversed += string.charAt(i);
}

console.log(reversed);

// 2nd Way

function reverseBySeperator(string, seperator) {
  return string.split(seperator).reverse().join(seperator);
}

console.log(reverseBySeperator(string, " "));
