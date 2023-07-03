let user = {
  userName: "Pranay Alone",
  regularFunction: function () {
    console.log("Name " + this.userName);
  },
  arrowFunction: () => {
    console.log("Name " + this.userName);
  },
};

user.regularFunction();
user.arrowFunction();
