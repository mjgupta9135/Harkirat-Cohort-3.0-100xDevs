const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Enable CORS for all routes

app.post("/sum", function (req, res) {
  const a = parseInt(req.body.a); // Parse 'a' from request body
  const b = parseInt(req.body.b); // Parse 'b' from request body
  const ans = a + b; // Calculate sum

  res.json({
    answer: ans, // Respond with the sum as JSON
  });
});

app.listen(3000, () => {
  console.log("Server is lostening on port 3001");
});
