const express = require("express");

const app = express();

app.use(express.json());

const PORT = 5000;

let usersData = [];

app.get("/", (req, res) => {
  res.send(usersData);
  console.log(usersData);
});

// Create
app.post("/createUser", (req, res) => {
  let body = req.body;
  usersData.push(body);
  res.send("User Created Successfully....!");
});

//Delete User
app.delete("/deleteUser/:id", (req, res) => {
  let deleteId = req.params.id;
  let deleteUser = usersData.filter((elem) => elem.id !== deleteId);
  usersData = deleteUser;
  res.send("User Deleted Successfully....");
});

//Update
app.put("/updateUser/:id", (req, res) => {
  console.log(req, "reqqqq");
  let updateId = req.params.id;
  let name = req.body.name;
  let age = req.body.age;

  let updated = usersData.map((elem) =>
    elem.id === updateId ? { ...elem, name, age } : elem,
  );

  usersData = updated;

  res.send("User Update Successfully....!");
});

//Server
app.listen(PORT, () => {
  console.log(`Server Is Running On This Port ${PORT}`);
});
