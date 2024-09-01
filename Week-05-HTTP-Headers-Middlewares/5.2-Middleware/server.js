const express = require("express");
const app = express();
let requestCount = 0;
function print(req, res, next) {
  console.log({
    url: req.hostname,
    method: req.method,
    currentTime: new Date(),
  });
  next();
}
function requestIncrease(res, req, next) {
  requestCount++;
  console.log(req);
  next();
}

app.get("/sum/:a/:b", requestIncrease, function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.json({
    ans: a + b,
  });
});
app.get("/multiply/:a/:b", requestIncrease, function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.json({
    ans: a * b,
  });
});

app.get("/admin", print, function (req, res) {
  res.json({
    message: "Total no of requests are:- " + requestCount,
  });
});
app.use(express.json()); //express.json is also a function and it returns also a function so thats why i have to call it.

app.post("/body", function (req, res) {
  const a = req.body.a;
  const b = req.body.b;
  res.json({
    sum: a + b,
  });
});

app.listen(3000, () => {
  console.log("App is listening on port no 3000");
});

/**
 * ! CROSS ORIGIN RESOURCE SHARING
 * * CORS (Cross-Origin Resource Sharing) ek security feature hai jo browsers mein hota hai.
 * * Iska kaam yeh hota hai ki jab koi web page dusre ORIGIN se kuch data ya resource mangta hai,
 * * Then browser check karta hai ki kya yeh allowed hai ya nahi. Yeh important hai, kyunki yeh web applications ko malicious requests se protect karta hai.
 *
 */
