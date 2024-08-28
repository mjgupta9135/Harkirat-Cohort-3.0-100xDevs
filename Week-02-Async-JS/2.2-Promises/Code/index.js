/**
 * ! Classes in JS
 * * In Js classes are a way to define blueprints for creating  object(These objects are different from the objects defined in the last section).
 * ! Key Concepts
 * * 1. Class Declaration:- We declare a class using class keyword.
 *      Inside a class we define the properties(variables) and methods(functions that will belong to the objects created from this class)
 * * 2. Constructor:- It is a function that is used to intialized the object during object creation time.Intantiate the object during object creation.
 * * 3. Methods:- Functions that are defined inside the class and can be used by all instances of class.
 * * 4. Inheritance:- Classes can inherit properties and methods from other classes allowing you to create a new classes based on an exisiting one.
 * * 5. Static Methods:- Methods that are belong to class itself, not to instances of the class. You can call them directly inside class.
 * * 6. Getters and Setters:-Special Methods that allow you to define how properties are accessed and modified .
 */

class rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  area() {
    const area = this.width * this.height;
    console.log(area);
  }
  paint() {
    console.log("Painting with color " + this.color);
  }
}
const rect = new rectangle(2, 4, "red");
rect.area();
rect.paint();

/**
 *  Inbuilt classes in JS
 *  1. Date class
 *  2. Map Class  --> use to create key value pairs
 */
const date = new Date();
console.log(date.getMinutes());
console.log(date.getFullYear());

const map = new Map();
map.set("name", "Mrityunjay");
map.set("Age", 21);
const firstname = map.get("name");
console.log(firstname);

/**
 * ! Promoise Class in JS:-
 * * Promise class gives you a promise,that i will return you something in future.
 * * Promise in JS is an object that represents the eventual completion(or failure) of an asynchronous operation and its resulting value.
 * * It uses to handle async operations more effectively than callback functions,providing a cleaner and more mangable way to deal with code that executes async, such as api calls,file i/0 etc.
 */

//Lets assume now that setTimeoutPromisified is global function like setTimeout function.
function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms)); //In this line an object of promise class in initiated.
  return p; //Promise return the object of promise class.
}
function callback() {
  console.log("3 seconds have passed");
}
setTimeoutPromisified(3000).then(callback);

//Promise is a syntactically better version of callback functions. and it resolve the problem of callback hell.

// Promise class say that i will take one function as input i.e resolve and whatever the first argument of function.
// whenever that first argument function will be called then the function under .then function will be called.
function demo(resolve) {
  setTimeout(resolve, 3000);
}
let p = new Promise(demo);
function callback() {
  console.log("Promise succeded");
}
p.then(callback);

/** t
 * todo: Here will see the explanation of above code
 * * In  line no 71 a new object of promise is created which take demo function as input. Demo function take resolve function as input and resolve itself a function.
 * * In promise object it return a signal of eventually completion so that after .then(callback) is executed.
 * * so after demo function called a setTimeout async operations will be executed. After 3 seconds resolve function will be called
 * * and we know that when resolve function will be invoked then .then(callback) will be executed that means resolve sending signal that event is completed.
 */

//promisified version of readfile function
const fs = require("fs");
function readTheFile(readFinalFile) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    readFinalFile(data);
  });
}
function readFileman() {
  return new Promise(readTheFile);
}
const res = readFileman();
function callback(data) {
  console.log(data);
}
res.then(callback);

/**
 * Whenever you create a new promise it tells that give me function which perform async operations. When the async operations will be done then
 * call the first argument of that async function and pass the data to that function that you will get from async operations.
 * That data will automatically reach the callback function written in .then().
 */

console.log("Top of the file");

function asyncFunc(resolve) {
  console.log("Async Function Entered");
  setTimeout(function () {
    console.log("Inside set Timeout Function");
    resolve();
  }, 3000);
}

function setTimeoutPromisified() {
  console.log("Inside setTimeoutPromisified");
  return new Promise(asyncFunc);
}

const temp = setTimeoutPromisified();

function callback() {
  console.log("Timer is done");
}
temp.then(callback);
console.log("End of file");

/**
 * * In First step "top of file "is logged
 * * In second it will create a new promise object and set proxy value to temp
 * * In Third It will go "inside setTimepromisified" function to execute promise code
 * * In Fourth it will invoked the asyncFunc
 * * In fifth it will logged "inside asyncfunc"
 * * In sixth it will start execute setTimeout and go to last line i.e "end of file"
 * * In seventh when it enter inside setTimeout it waits for 3s and  logged  "inside set timeout" and then call resolve function()
 * * In Eighth when resolve() is called then control goes to .then and it will invoke the callback function which will logged time is "done in last"
 */

//Lets see an example of fetching api
const url = "https://api.github.com/users/mj9135";
const user = new Promise(async (resolve) => {
  const startTime = new Date();
  const user = await fetch(url);
  const res = await user.json();
  const endTime = new Date();
  console.log(
    "Time taken to fetch api details is " + (endTime - startTime) + " ms"
  );
  resolve(res);
});
function callback(res) {
  console.log(res.name);
  console.log(res.bio);
  console.log(res.location);
}
user.then(callback);
