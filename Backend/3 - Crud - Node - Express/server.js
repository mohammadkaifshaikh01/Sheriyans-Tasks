const express = require("express");
const app = express();
let port = 3000;

app.use(express.json());

let usersData = [];

//R -> Read Get
app.get("/", (req, res) => {
  res.send(usersData);
  //   res.send("You Are Reached Here....");
});

// app.get("/create", (req, res) => {
//   res.send(usersData);
// });

// C -> Create
app.post("/create", (req, res) => {
  // console.log("Post Data" ,req.body)
  let user = req.body;

  usersData.push(user);
  res.send("User Saved Successfully...");
});

// D -> Delete
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  let deleteUser = usersData.filter((elem) => elem.id !== id);
  usersData = deleteUser;
  console.log("User Deleted Successfully...", usersData);
  res.send("User Deleted Successfully...");
});

// U -> Update

app.put("/update/:id", (req, res) => {
  //   let id = req.params.id;
  let { id } = req.params;
  //   let body= req.body.name
  let { name } = req.body;

  //   console.log(body)
  //   console.log(id)

  let udpated = usersData.map((elem) =>
    elem.id === id ? { ...elem, name } : elem,
  );

  usersData = udpated;
  res.send("User Update Successfully...");
});

app.listen(port, () => {
  console.log(`Server Is Running On this Port ${port}`);
});
