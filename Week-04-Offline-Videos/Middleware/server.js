/**
 * todo: An express app is essentially a series of middleware calls.
 * !  Middleware:-
 * *  Middleware functions are functions that have access to the request object (req),
 * *  the response object and the next middleware function in the application's request-response cycle.
 * *  The next function is commonly denoted by a variable called next.
 *
 * *  Middleware function can perform the following tasks
 * *  -->  Execute any code
 * *  -->  Make changes to the request and the response objects.
 * *  -->  End the request-response cycle.
 * *  -->  Call the next middleware function in stack.
 *
 *
 * ! Why can't all middleware written in one function?
 * * Bcz middleware can be re-used.
 */

const express = require("express");
const app = express();

//function that return boolean if the age>14 return true otherwise false
function ticketChecker(age) {
  if (age > 14) {
    return true;
  } else {
    return false;
  }
}

//middleware version of ticketChecker Function

function ticketCheckerMiddleware(req, res, next) {
  const age = req.params.age;
  console.log(age);
  if (age > 14) {
    next();
  } else {
    res.status(411).json({
      msg: "You are not allowed to take ride",
    });
  }
}

//usage of middleware

//if any middleware used by all routes then it will called in gloabal space
//todo: app.use(ticketCheckerMiddleware);  
//* app.use it will check the validation of routes that are written below to this .

//Here as we know express is a series of middleware so first it will go to ticketChekerMiddleware and if middlware called next then it will  called next function
app.get("/ride1/:age", ticketCheckerMiddleware, function (req, res) {
  res.json({
    msg: "You have successfully riden the ride 1",
  });
});

app.get("/ride2/:age", function (req, res) {
  const age = req.params.age;
  let flag = ticketChecker(age);
  if (flag) {
    res.json({
      msg: "You have successfully riden the ride 2",
    });
  } else {
    res.status(411).json({
      msg: "You are not allowed to take ride",
    });
  }
});
app.listen(3000, () => {
  console.log("App is Listening on 3000");
});
