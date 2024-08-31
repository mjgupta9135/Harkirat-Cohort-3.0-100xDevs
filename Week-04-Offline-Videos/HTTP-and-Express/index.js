const express = require("express");
const app = express();
function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }
  return ans;
}
app.get("/", function (req, res) {
  const n = req.query.n;
  const s = sum(n);
  res.send("you ans is " + s);
});
app.listen(3000);
