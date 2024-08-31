const fs = require("fs");
const { Command } = require("commander");
const path = require("path");
const program = new Command();

const filePath = path.join(__dirname, "todos.json");

program
  .name("TODO JSON")
  .description("Commands to manage todo using CLI")
  .version("1.0.0");

program
  .command("add")
  .description("Add a note")
  .argument("<Todo>", "Enter the todo")
  .action((Todo) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      let jsonData = [];
      let nextKey = 0;

      if (err) {
        if (err.code === "ENOENT") {
          jsonData = [];
        } else {
          console.error("Error reading file:", err.message);
          return;
        }
      } else {
        if (data) {
          jsonData = JSON.parse(data);
          nextKey = jsonData.length;
        }
      }

      const obj = {
        Key: nextKey,
        Title: Todo,
        Done: false,
      };

      jsonData.push(obj);

      fs.writeFile(
        filePath,
        JSON.stringify(jsonData, null, 2),
        "utf-8",
        (err) => {
          if (err) {
            console.error("Error writing file:", err.message);
          } else {
            console.log("Todo added successfully");
          }
        }
      );
    });
  });

program
  .command("remove")
  .description("Remove a Todo")
  .argument("<Key>", "The key of the todo to delete")
  .action((Key) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        if (err.code === "ENOENT") {
          console.log("File does not exist");
          return;
        } else {
          console.error(err);
          return;
        }
      } else {
        let jsonData = JSON.parse(data);
        const keyToDelete = parseInt(Key, 10); // Convert the Key argument to a number

        const initialLength = jsonData.length;
        jsonData = jsonData.filter((obj) => obj.Key !== keyToDelete);

        if (jsonData.length === initialLength) {
          console.log("Todo with the specified key not found.");
          return;
        }

        const updated = JSON.stringify(jsonData, null, 2);

        fs.writeFile(filePath, updated, "utf-8", (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("Todo deleted successfully");
          }
        });
      }
    });
  });

program
  .command("mark")
  .description("Mark a Todo as done")
  .argument("<Key>", "The key of the todo to mark")
  .action((Key) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        if (err.code === "ENOENT") {
          console.log("File does not exist");
          return;
        } else {
          console.error(err);
          return;
        }
      } else {
        let jsonData = JSON.parse(data);
        const keyToMark = parseInt(Key, 10); // Convert the Key argument to a number

        let todoFound = false;
        jsonData.forEach((obj) => {
          if (obj.Key === keyToMark) {
            obj.Done = true;
            todoFound = true;
          }
        });

        if (!todoFound) {
          console.log("Todo with the specified key not found.");
          return;
        }

        const updated = JSON.stringify(jsonData, null, 2);

        fs.writeFile(filePath, updated, "utf-8", (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log("Todo marked as done. Well done!");
          }
        });
      }
    });
  });

program
  .command("list")
  .description("Print all todos")
  .action(() => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        if (err.code === "ENOENT") {
          console.log("No todos found.");
          return;
        } else {
          console.error("Error reading file:", err.message);
          return;
        }
      } else {
        const jsonData = JSON.parse(data);
        if (jsonData.length === 0) {
          console.log("No todos available.");
        } else {
          console.log("Todos:");
          jsonData.forEach((obj) => {
            console.log(
              `Key: ${obj.Key}, Title: ${obj.Title}, Done: ${
                obj.Done ? "Yes" : "No"
              }`
            );
          });
        }
      }
    });
  });

program.parse();
