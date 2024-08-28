// Promisified version of setTimeout

function setTimeoutPromisified(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

let temp = setTimeoutPromisified(10000);
function callback() {
  console.log("Timer is done");
}
temp.then(callback);

//Print hi after 1 sec,print hello 3 sec after step 1,print hello there 5 second after step 2

setTimeout(function () {
  console.log("Hi");
  setTimeout(function () {
    console.log("Hello");
    setTimeout(function () {
      console.log("Hello There");
    }, 5000);
  }, 3000);
}, 1000);

/**
 * ! What is callback hell?
 * * "Callback hell" is a term used in programming, particularly in JavaScript,
 * * to describe a situation where callbacks (functions passed as arguments to other functions) are nested within other callbacks multiple levels deep.
 * * This results in code that is difficult to read and maintain, often resembling a pyramid shape, with increasing indentation at each level.
 * * Here above code is example of  callback hell.
 */
setTimeoutPromisified(1000).then(function () {
  console.log("hi");

  setTimeoutPromisified(3000).then(function () {
    console.log("Hello");

    setTimeoutPromisified(5000).then(function () {
      console.log("Hello There");
    });
  });
});

//Promise Chaining:-Promise chaining is a technique in JavaScript where multiple asynchronous operations are performed in sequence,
// with each operation waiting for the previous one to complete before proceeding.
setTimeoutPromisified(1000)
  .then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("Hello");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("Hello There");
  });

//when you know after a promise statement there are another promise in line to execute then we do a promise chaining
//By promise chaning syntax will looks more readable.

/**
 * !Async await syntax:-
 * * The async and await syntax in JS provides a way to write asynchronous code that looks and behaves like synchronous code,making it easier to read and maintain.
 * * It builds on top of promises and allow you to avoid promise chaining .then() and .catch() methods while still working with async operations
 */

//syntactic sugar
async function solve() {
  await setTimeoutPromisified(1000);
  console.log("Hi");
  await setTimeoutPromisified(3000);
  console.log("Hello");
  await setTimeoutPromisified(5000);
  console.log("Hello There");
}
solve();
console.log("After solve call");

//async await function looks like synchronous syntax but it is asynchronous function

/**
 * todo: So far, we have primarily used the `resolve` argument in a Promise.However, there is also a second argument called `reject`.
 * * `reject` is used for error handling.If an error occurs during the execution of a Promise, `reject` should be called to reject the asynchronous operation and pass an error.
 * Lets see how reject is used.
 */

const fs = require("fs");
function readFile() {
  return new Promise(function (resolve, reject) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      if (err) {
        reject("File is not found");
      } else {
        resolve(data);
      }
    });
  });
}

readFile()
  .then(function (x) {
    console.log("File has been read " + x);
  })
  .catch(function (e) {
    console.log(e);
  });

//If we not use the reject then user always gets the succed message if there will be error .
