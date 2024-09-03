//try catch block
//It is used to handle and throw error
// let a;
// console.log(a.length)

//It will throws an error and stop the execution at that time.and the code below will not be executed.
//But we might want the program to still continue executing. That is where we can use try catche.
//When we know that this portion of code may throw an error or exception then we will use try catch

try {
  let a;
  console.log("Before Error Throws");
  console.log(a.length);
  console.log("Inside try block");
} catch (e) {
  console.log("There is some error");
}
console.log("In Golbal space");

/**
 * * try Block Execution:--> The code inside the try block is executed line by line. If an error occurs at any point,
 * *                         the remaining code inside the try block is skipped, and control is immediately passed to the catch block.
 * * catch Block Execution:--> The code inside the catch block is executed to handle the error. After the catch block finishes executing,
 * *                           the control does not return to the try block.
 * * Continuation After try-catch:--> Once the catch block is done, the control moves to the next line of code after the entire try-catch block.
 */
