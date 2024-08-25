//* Normal Function in JS

// Function to sum of two number
function sum(a, b) {
  return a + b;
}
let ans = sum(4, 6);
console.log(ans);

//Function of sum from 1 to n
function sum2(num) {
  let ans = 0;
  for (let i = 1; i <= num; i++) {
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
 * *  I/O heavy operations are operations refers to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices.
 * *  These operations usually require waiting for data to be read from or written to source like disks,networks,databases,or other external devices.
 * *  which can be time consuming compared to in-memory computations.
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
 * * Here UTF -8 is used as encoding form of data.

 * Lets try one another code
 */

const c1 = fs.readFileSync("a.txt", "utf-8");
console.log(c1);

const c2 = fs.readFileSync("b.txt", "utf-8");
console.log(c2);
/**
 * * Above code is also synchronous code as  it waits for the previous operation to complete before moving on to the next one.
 */

/**
 * !    I/O Bound Tasks:
 * *--> I/O Bound Tasks are operations that are limited by system by the system's input/output capabilities,such as disks I/O,Network I/O or any other form of data
 * *--> These Tasks spend their most of their time waiting for I/O  operations to complete.
 * !   CPU Bound Tasks:-
 * *--> CPU Bound tasks are operations that are limited by the speed and power of cpu.
 * *--> These tasks require significant computatins and processing power,nmeaning that the performance bottleneck is the cpu itself.
 * todo:Real  world examples of I/O  Bound tasks:-
 * -> Boil some water
 * -> Do Some laundry
 * -> Send a package via mail
 * * SO here what will you these
 * 1. One by one
 * 2. Context switching between them(Concurrently).
 */
// First approach

const content1 = fs.readFileSync("a.txt", "utf-8");
console.log(content1);

const content2 = fs.readFileSync("b.txt", "utf-8");
console.log(content2);

// one by one tasks will be performed in above code
// Now asynchronous code

function print(err, data) {
  console.log(data);
}
fs.readFile("a.txt", "utf-8", print);

fs.readFile("b.txt", "utf-8", print);

fs.readFile("b.txt", "utf-8", print);

console.log("Done all things");
/**
 * * Above code will  perform asynchronously
 * * Here we use the callback functions print in above code
 * * Callback functions  are functions that are passed as an argument to another function.
 * * And they are executed after the function has completed its execution automatically.
 * * So here after reading  file then print function is automatically called
 * * Here all  the tasks are performed asynchronously. Whenever the I/O completes  the callback function is called and data will be printed.
 * * Here before reading the file Done all things is printed why? bcz of callback hells.
 * * Here signature of print function depends upon the syntax of readFile function.
 */

/**
 * ! How does JS Run asynchronous code?
 */

function timeout() {
  console.log(" Hi Guys how are you");
}
console.log("hi");
setTimeout(timeout, 4000);
console.log("Duniya Khatam");
/**
 ** Execution of above code
    The first line that gets executed is console.log("hi"). This will print "hi" to the console immediately.
    Next, setTimeout(timeout, 4000); is executed.
    setTimeout schedules the timeout function to run after 4000 milliseconds (4 seconds). However, it does not block the execution of the next line of code.
    Instead, it schedules the timeout function and immediately moves on to the next line.
    This line is executed right after scheduling the timeout function. It will immediately print "Duniya Khatam" to the console.
    After 4000 milliseconds (4 seconds), the timeout function is executed. The timeout function prints "Hi Guys, how are you" to the console.
 */

/**
 * ! Execution of async js code
 * * When js encounters any async code  it will not wait for the completion of that code. It parallely  executes the next line of code.
 * * and when the async code executed then it will pushed to the callback queue.
 * * After all CPU  bound tasks are completed then the callback queue will be executed.
 * * Thats why in above code "hi" and "Duniya khatam" is printed before  "Hi Guys, how are you".
 */
