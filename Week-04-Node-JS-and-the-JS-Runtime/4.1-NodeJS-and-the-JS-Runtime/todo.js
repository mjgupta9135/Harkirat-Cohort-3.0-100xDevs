const fs = require("fs");
const { Command } = require("commander");
const path = require("path");
const program = new Command();

program
  .name("Todo json")
  .description("Commands to manage todo using CLI")
  .version("1.0.0");

program
  .command("add")
  .description("Add a todo")
  .argument("<Time>", "Enter the finish time")
  .argument("<Todo>", "Enter the todo")
  .action((Time, Todo) => {
    const obj = {
      Deadline: Time,
      Title: Todo,
    };

    const today = new Date();
    let date = today.toISOString().slice(0, 10);
    const fileName = `${date}.json`;
    const filePath = path.join(__dirname, fileName);

    fs.readFile(filePath, "utf-8", (err, data) => {
      let jsonData = [];
      if (err) {
        if (err.code === "ENOENT") {
          jsonData = [obj];
        } else {
          console.log(err);
          return;
        }
      } else {
        if (data) {
          jsonData = JSON.parse(data);
        }
        jsonData.push(obj);
      }

      fs.writeFile(
        filePath,
        JSON.stringify(jsonData, null, 2),
        "utf-8",
        (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Success");
          }
        }
      );
    });
  });

program.parse(process.argv);
