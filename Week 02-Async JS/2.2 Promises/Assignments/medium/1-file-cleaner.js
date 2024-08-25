const fs = require("fs");
function removeExtraSpace() {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    if (err) {
      console.log(err);
    } else {
      const ans = data.split(/\s+/).join(" ").trim();
      fs.writeFile("a.txt", ans, function (err) {
        if (err) console.log(err);
        else console.log("File Written successfully");
        console.log(ans);
      });
    }
  });
}

removeExtraSpace();
