const personOne = {
  firstName: "Pranay",
  lastName: "Alone",
  role: "Frontend Developer",
  printName: function () {
    console.log("Who is a devloper " + this.firstName);
  },
};
const printDetails = function (cle) {
  console.log(
    this.firstName + " " + this.lastName + " " + this.role + " " + cle
  );
};

const personTwo = {
  firstName: "Saurabh",
  lastName: "Singh",
  role: "React JS Developer",
};

personOne.printName.call(personTwo);

printDetails.call(personTwo, "Dhoni BOy");

// Call method is used for function browwing for an boject from another object

//First Argument in call is the reference and second one is the extra argument that we want to include

// Apply - Similar to the call method only diffrence is the if we want to pas argument we have to pass it in form of array list ;

printDetails.apply(personTwo, ["Sachin"]);

// Bind method is used to kepp the copy of the borrowed method and use it later.

let copiedMethod = printDetails.bind(personTwo, "Raja Mauli");
console.log(copiedMethod);
copiedMethod();

const date = new Date();
console.log(date);
