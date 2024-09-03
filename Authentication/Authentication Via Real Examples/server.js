const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

//decode verify and generate
const value = {
  name: "Mrityunjay",
  accountNumber: "234243",
};

//generate jwt tokens
const token = jwt.sign(value, "secret"); //this long string token is act as checkbook everyone can decode it without secret code.
console.log(token);

//If any person decode our jwt tokens and make a jwt tokens for same data but at the time of verify it will not be verify by server bcz both secret code is different.
//Anyone can see the content of jwt but only the server can verify it.

//this secret has only bank this token is generated using this secret and hence this token can only be verified using this secret
// app.listen(3000, () => console.log("App is listening on port 3000"));

/**
 * when we hit signin in chatgpt we give our credentials and it goes to the backend then backend convert that credentials into jwt tokens
 * and backend sends that jwt token to us then when we will hit any prompt then jwt tokens will goes along with prompt in header file
 * Backend first verify our tokens and if it will success then it runs the model and return some value or response.
 * Three things to done in jwt
 *      1. Generating JWT    --> Converting our credentials in a random strings which is known as jwt tokens.
 *      2. Decoding the JWT  --> Other people can decode our jwt and try to get real tokens.
 *      3. Verifying the JWT --> This verify the jwt tokens that it is original or not.
 */
