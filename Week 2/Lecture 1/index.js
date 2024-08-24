//* Normal Function in JS

// Function to sum of two number
function sum(a, b) {
  return a + b;
}
let ans = sum(4, 6);
console.log(ans);

//Function of sum from 1 to n
function sum2(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}
let res = sum2(5);
console.log(res);

/**
 * *  Synchronous Code ->Synchronous Code is executed line by line in order it's written.
 * *  Each operation waits for the previous one to complete before moving on to the next one.
 */

/**
 * ! I/0 heavy operations:-
 * *   I/O heavy operations are operations refers to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices.
 * * These operations usually require waiting for data to be read from or written to source like disks,networks,databases,or other external devices.
 * * which can be time consuming compared to in-memory computations.
 * todo: Examples of I/O Heavy operations:- Reading a file,starting a clock,HTTP Requests etc.
 * Lets see example of I/O operation i.e Reading a file
 */

const fs = require("fs");
const content = fs.readFileSync("a.txt", "utf-8");
console.log(content);

/**
 * * Lets analyze the above code
 * * Here we have to import fs library which is used to read external files from storage disks
 * * We  are using readFileSync() function which is synchronous function which takes two  parameters one is file name and second is encoding form of data.
 * * So this is a synchronous code  which waits for the previous operation to complete before moving on to the next one.
 * Lets try one another code
 */

const content1 = fs.readFileSync("a.txt", "utf-8");
console.log(content1);

const content2 = fs.readFileSync("b.txt", "utf-8");
console.log(content2);
