const data = [
  { name: "pranay", role: "SDE0" },
  { name: "pranay1", role: "SDE1" },
  { name: "pranay2", role: "SDE2" },
  { name: "pranay3", role: "SDE4" },
];

const getData = () => {
  data.map((ele) => {
    console.log(ele);
  });
};

const dataUpdate = () => {
  return new Promise((resolce, reject) => {
    setTimeout(() => {
      data.push({ name: "Rancho", role: "Friend" });
      let error = false;
      if (!error) {
        resolce();
      } else {
        reject("Cannot add the new data");
      }
    }, 3300);
  });
};

dataUpdate()
  .then(getData)
  .catch((error) => {
    console.log(error);
  });
