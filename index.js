const User = require("./db/userList");
require("./db/config");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.post("/", async (req, resp) => {
  let user = await User(req.body);
  let data = await user.save();
  resp.send(data);
});

app.get("/", async (req, resp) => {
  let user = await User.find();
  if (user.length > 0) {
    resp.send(user);
  } else {
    resp.send({ result: "NO BOOKING !!!" });
  }
});

app.delete("/:id", async (req, resp) => {
  const result = await User.deleteOne({ _id: req.params.id });
  resp.send(result);
});
app.listen(3400);
