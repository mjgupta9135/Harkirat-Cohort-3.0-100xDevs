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
    const user = new User({
      name: username,
      email: email,
      password: password,
    });
    user.save();
    res.json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Server error",
    });
  }
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res.status(409).json({
        msg: "User dosen't exits please signup first",
      });
    }
    const userDetails = await User.find({ email: email, password: password });
    res.json({
      userDetails,
    });
  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
});

app.post("/update", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const updatedName = req.body.updatedName;
  try {
    const existingUser = await User.findOne({
      email: email,
      password: password,
    });
    if (!existingUser) {
      return res.status(409).json({
        msg: "User dosen't exits please signup first",
      });
    }
    if (existingUser.name === updatedName) {
      return res.json({
        msg: "Given name is similar as Existed",
      });
    }
    existingUser.name = updatedName;
    await existingUser.save();
    res.json({
      msg: "Details Updated",
      existingUser,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Server error",
    });
  }
});
app.listen(3000);
