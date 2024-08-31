const express = require("express");
const app = express();
var users = [
  {
    name: "Mrityunjay",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
      {
        healthy: true,
      },
      {
        healthy: true,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/check", function (req, res) {
  let healthyKidney = 0;
  let unhealthyKidney = 0;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy === false) {
      unhealthyKidney++;
    } else {
      healthyKidney++;
    }
  }
  res.json({
    healthyKidney: healthyKidney,
    unhealthyKidney: unhealthyKidney,
  });
});

app.post("/add/:param", function (req, res) {
  const param = req.params.param === "true";
  console.log(param);
  users[0].kidneys.push({ healthy: param });
  res.send("New Kidney Added successfully");
  console.log(users[0].kidneys);
});

app.put("/update", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy == false) {
      users[0].kidneys[i].healthy = true;
      break;
    }
  }
  res.send("Kidney Updated successfully");
  console.log(users[0].kidneys);
});

app.delete("/delete", function (req, res) {
  if (users[0].kidneys.length === 0) {
    res.send("No Kidneys Left");
  } else {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys.splice(i, 1);
      kidneyRemoved = true;
      break;
    }
    res.send("One kidney removed successfully");
    console.log(users[0].kidneys);
  }
});
app.listen(3000, () => {
  console.log("Listening on Port No 3000");
});
