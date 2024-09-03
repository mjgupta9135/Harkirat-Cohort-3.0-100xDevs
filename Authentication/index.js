/**
 * ! Authentication
 *  * Hashing:    --> Hashing secures passwords by converting them into a fixed-length string that can't be reversed.
 *  *             --> During login, the system hashes the entered password and compares it with the stored hash. If they match, authentication succeeds.
 *  *             --> Hashing is a one-way process, meaning you can’t reverse the hash back to the original password.
 *  * Encryption: --> Encryption is a two-way process that transforms data into an unreadable format using a key,
 *  *             --> and can be reversed to its original form with the correct key.
 *
 *  * JSON Web Tokens:--> JSON Web Tokens (JWTs) are a compact, URL-safe means of representing claims between two parties.
 *  *                     They are commonly used for authentication and information exchange.
 *  * A JWT typically consists of three parts:
 *  *   Header:    Contains metadata about the token, such as the type of token and the signing algorithm used.
 *  *   Payload:   Contains the claims or the data being transmitted, such as user information or permissions.
 *  *   Signature: Ensures the integrity of the token by using a secret key (in symmetric algorithms) or a private key (in asymmetric algorithms) to sign the token.
 *  *              This allows the recipient to verify that the token has not been tampered with.
 *  * JWTs are used in authentication systems to verify the identity of users and in information exchange to securely transmit data between partie s.
 *  * In JWT everyone can decode the converted string from json but it will only verify by actual owner and to verify we have to provide password.
 *
 *
 *  * Local Storage:-Local storage in JavaScript is a web storage feature that allows you to store key-value pairs in a web browser.
 *  *                Data stored in local storage persists even after the browser is closed, making it useful for saving user preferences, session data, or any information that should remain accessible across sessions.
 *
 * *
 * *  --> User log in with id and password and send a request to backend
 * *  --> First backend hash the id and password then checks from database that details if correct then it returns a JWT.
 * *  --> when client gets the jwt it stores the jwt into local storage untill the user log out
 * *  --> Then when client sends any request to backend then that jwt will be automatically goes to backend to identify itself.
 *
 */

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const app = express();

app.use(express.json());
const ALL_USERS = [
  {
    username: "mjguptacse@gmail.com",
    password: "12345244",
    name: "Mrityunjay Gupta",
  },
  {
    username: "ayushpallw@gmail.com",
    password: "1234543",
    name: "Ayush pallaw",
  },
  {
    username: "anshul343@gmail.com",
    password: "1234523",
    name: "Anshul Singh",
  },
  {
    username: "gagan@gmail.com",
    password: "12345342",
    name: "Gagandeep Prasad",
  },
];

function userExists(username, password) {
  return ALL_USERS.some(function (data) {
    return data.username === username && data.password === password;
  });
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our memory",
    });
  }
  let token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});
app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.json({
      users: ALL_USERS.filter((value) => {
        return value.username !== username;
      }),
    });
  } catch (err) {
    return res.status(403).json({
      msg: "invalid token",
    });
  }
});

app.listen(3000, () => console.log("App is listening on port no 3000"));
