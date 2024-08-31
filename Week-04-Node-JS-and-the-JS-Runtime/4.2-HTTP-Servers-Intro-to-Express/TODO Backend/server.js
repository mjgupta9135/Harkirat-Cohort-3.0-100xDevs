const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const pathFile = path.join(__dirname, "todos.json");
app.get("/add/:todo", function (req, res) {
  let todos = [];
  const uniq = "id" + new Date().getTime();
  const str = req.params.todo;

  fs.readFile(pathFile, "utf-8", function (err, data) {
    if (err) {
      console.log("File doesn't read successfully");
      res.status(500).send("Error reading file");
      return;
    }

    // Parse the existing JSON data
    if (data) {
      todos = JSON.parse(data);
    }

    // Add the new to-do item
    todos.push({
      title: str,
      key: uniq,
    });

    // Write the updated data back to the file
    fs.writeFile(pathFile, JSON.stringify(todos, null, 2), function (err) {
      if (err) {
        console.log("File doesn't write successfully");
        res.status(500).send("Error writing file");
        return;
      }
      res.send("To-do item added successfully");
    });
  });
});

//Print all todos
app.get("/list", function (req, res) {
  let todos = [];
  fs.readFile(pathFile, "utf-8", function (err, data) {
    if (err) {
      console.log("File doesn't read successfully");
      res.status(500).send("Error reading file");
      return;
    } else {
      todos = JSON.parse(data);
      res.json(todos);
    }
  });
});
app.delete("/delete/:key", function (req, res) {
  let todos = [];
  const key = req.params.key;
  fs.readFile(pathFile, "utf-8", function (err, data) {
    if (err) {
      res.send("File Read failed");
    } else {
      todos = JSON.parse(data);
    }
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].key == key) {
        todos.splice(i, 1);
        break;
      }
    }
    fs.writeFile(pathFile, JSON.stringify(todos, null, 2), function (err) {
      if (err) {
        console.log("File dosen't write successfully");
      } else {
        res.send("Item deleted");
      }
    });
  });
});
app.put("/update/:key/:todo", function (req, res) {
  let todos = [];
  const key = req.params.key;
  const todo = req.params.todo;
  fs.readFile(pathFile, "utf-8", function (err, data) {
    if (err) {
      res.send("File Read failed");
    } else {
      todos = JSON.parse(data);
    }
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].key == key) {
        todos[i].title = todo;
        break;
      }
    }
    fs.writeFile(pathFile, JSON.stringify(todos, null, 2), function (err) {
      if (err) {
        console.log("File dosen't write successfully");
      } else {
        res.send("Item Updated");
      }
    });
  });
});
app.listen(3000, () => {
  console.log("Listening on port no 3000");
});
