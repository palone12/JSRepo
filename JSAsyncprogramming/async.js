const data = [
  { name: "pranay", role: "SDE0" },
  { name: "pranay1", role: "SDE1" },
  { name: "pranay2", role: "SDE2" },
  { name: "pranay3", role: "SDE4" },
];

const printData = () => {
  setTimeout(() => {
    data.forEach((ele, index) => {
      console.log(index, ele.name, ele.role);
    });
  }, 3000);
};

// printData();

const newData = { name: "Raja Ram Mohan", role: "Saint" };
const updateData = (newData, callBack) => {
  setTimeout(() => {
    data.push(newData);
    callBack();
  }, 2000);
};

updateData(newData, printData);
console.log(data);
// printData();
