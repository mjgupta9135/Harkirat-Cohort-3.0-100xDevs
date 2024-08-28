const fs = require("fs");

function write() {
  let data = "Duniya Hila Denge Hum";
  fs.writeFile("a.txt", data, function (err) {
    if (err) {
      console.log("Not written");
    } else console.log("File Written successfully");
  });
}
write();
