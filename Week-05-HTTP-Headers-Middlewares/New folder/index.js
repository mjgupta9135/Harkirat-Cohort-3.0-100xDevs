/**
 * ! Headers
 * * HTTP headers are key-value pairs sent between a `client` (like a web browser) and a `server` in an HTTP request or response. 
 * * They convey metadata about the request or response, such as content type, auth information etc.
 * * Common headers *
    1. Authorization (Sends the user auth information)
    2. Content-Type - Type of information client is sending (json, binary etc)
    3. Referer - Which URL is this request coming from



 * ! Fetch API:-
 * * There are 2 high level ways a browser can send requests to an HTTP server: 
 * * 1. From the browser URL (Default GET request):
     ----> When you type a URL into the browser’s address bar and press Enter, the browser sends an HTTP GET request to the server.
     ----> This request is used to retrieve resources like HTML pages, images, or other content.
 * * 2. From an HTML form or JavaScript (Various request types):
     ----> HTML Forms:When a user submits a form on a webpage, the browser sends an HTTP request based on the form’s `method` attribute, 
           which can be `GET` or `POST`. Forms with `method="POST"` typically send data to the server for processing (e.g., form submissions).
     ----> JavaScript (Fetch API): JavaScript running in the browser can make HTTP requests to a server using APIs the `fetch` API.
           These requests can be of various types (`GET`, `POST`, `PUT`, `DELETE`, etc.) and are commonly used for asynchronous data retrieval and manipulation (e.g., AJAX requests).   
 */

async function f() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const res = await data.json();
  console.log(res);
  console.log("body= " + res.body);
}

// Here json() is also a async function . It performs some operation to convert fetched data into json data. so that we use await.
// fetch function is a function provided by browser is used to send a HTTP request to any specified server and that server will returns some data.

const express = require("express");
const app = express();
function add(m, n) {
  return m + n;
}
function multiply(m, n) {
  return m * n;
}
function divide(m, n) {
  return m / n;
}
function subtract(m, n) {
  return m - n;
}
app.get("/multiply/:a/:b", function (req, res) {
  const m = parseFloat(req.params.a);
  const n = parseFloat(req.params.b);
  const mul = multiply(m, n);
  res.json({
    answer: mul,
  });
});
app.get("/additon/:a/:b", function (req, res) {
  const m = parseFloat(req.params.a);
  const n = parseFloat(req.params.b);
  const ad = add(m, n);
  res.json({
    answer: ad,
  });
});
app.get("/divide/:a/:b", function (req, res) {
  const m = parseFloat(req.params.a);
  const n = parseFloat(req.params.b);
  const div = divide(m, n);
  res.json({
    answer: div,
  });
});
app.get("/subtract/:a/:b", function (req, res) {
  const m = parseFloat(req.params.a);
  const n = parseFloat(req.params.b);
  const sub = subtract(m, n);
  res.json({
    answer: sub,
  });
});
app.listen(3000);

//to give dynamic value in routes we use /: in routes as above said
