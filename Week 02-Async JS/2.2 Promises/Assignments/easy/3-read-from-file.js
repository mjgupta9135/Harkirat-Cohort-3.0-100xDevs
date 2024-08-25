const fs = require("fs");

function read() {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
  });
}

let sum = 0;
for (let i = 0; i < 100000000; i++) {
  sum = sum + i;
}
console.log(sum);
