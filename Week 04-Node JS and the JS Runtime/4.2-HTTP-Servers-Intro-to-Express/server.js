const express = require("express");
const app = express();

//route Handlers
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/mj", function (req, res) {
  res.send("Hello World  mj");
});

app.get("/js", function (req, res) {
  res.json({
    name: "Mrityunjay",
    age: 21,
  });
});

app.listen(3000);
