const express = require("express");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://mrityunjaywebdev:JokoxIDq2U89CLRx@cluster0.nh76z.mongodb.net/"
);
const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});
const app = express();
app.use(express.json());
app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const existingUser = await User.findOne({ name: username });
    if (existingUser) {
      return res.status(409).json({
        msg: "User already exists",
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Server error",
    });
  }

  const user = new User({
    name: username,
    email: email,
    password: password,
  });
  user.save();
  res.json({
    user,
  });
});
app.listen(3000);
