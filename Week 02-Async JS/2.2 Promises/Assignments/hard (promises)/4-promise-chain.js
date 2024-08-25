/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, t);
  });
}

function wait2(t) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, t);
  });
}

function wait3(t) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, t);
  });
}
function setTimeoutPromisified(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
function calculateTime(t1, t2, t3) {
  const start = Date.now();
  return setTimeoutPromisified(t1 * 1000)
    .then(function () {
      return setTimeoutPromisified(t2 * 1000);
    })
    .then(function () {
      return setTimeoutPromisified(t3 * 10000);
    })
    .then(function () {
      const end = Date.now();
      const duration = end - start;
      return duration;
    });
}

module.exports = calculateTime;
