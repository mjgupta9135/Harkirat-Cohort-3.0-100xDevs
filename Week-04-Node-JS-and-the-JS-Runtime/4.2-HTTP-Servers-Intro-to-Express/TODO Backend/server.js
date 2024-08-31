const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const pathFile = path.join(__dirname, "todos.json");

// Add a new to-do item
app.get("/add/:todo", function (req, res) {
  let todos = [];
  const uniq = "id" + new Date().getTime(); // Create a unique ID for the new to-do
  const str = req.params.todo; // Get the to-do text from the URL

  // Read the existing to-do items from the file
  fs.readFile(pathFile, "utf-8", function (err, data) {
    if (err) {
      console.log("File doesn't read successfully");
      res.status(500).send("Error reading file");
      return;
    }

    // If there are existing to-dos, parse them
    if (data) {
      todos = JSON.parse(data);
    }

    // Add the new to-do item to the list
    todos.push({
      title: str, // The text of the to-do
      key: uniq, // The unique ID of the to-do
    });

    // Save the updated to-do list back to the file
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

// List all to-do items
app.get("/list", function (req, res) {
  let todos = [];
  // Read the to-do items from the file
  fs.readFile(pathFile, "utf-8", function (err, data) {
    if (err) {
      console.log("File doesn't read successfully");
      res.status(500).send("Error reading file");
      return;
    } else {
      todos = JSON.parse(data); // Parse the to-do items
      res.json(todos); // Send the to-do items as a JSON response
    }
  });
});

// Delete a to-do item by key
app.delete("/delete/:key", function (req, res) {
  let todos = [];
  const key = req.params.key; // Get the key of the to-do to delete

  // Read the to-do items from the file
  fs.readFile(pathFile, "utf-8", function (err, data) {
    if (err) {
      res.send("File Read failed");
    } else {
      todos = JSON.parse(data); // Parse the to-do items
    }

    // Find and remove the to-do item with the matching key
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].key == key) {
        todos.splice(i, 1); // Remove the item from the list
        break;
      }
    }

    // Save the updated list back to the file
    fs.writeFile(pathFile, JSON.stringify(todos, null, 2), function (err) {
      if (err) {
        console.log("File doesn't write successfully");
      } else {
        res.send("Item deleted");
      }
    });
  });
});

// Update a to-do item by key
app.put("/update/:key/:todo", function (req, res) {
  let todos = [];
  const key = req.params.key; // Get the key of the to-do to update
  const todo = req.params.todo; // Get the new text for the to-do

  // Read the to-do items from the file
  fs.readFile(pathFile, "utf-8", function (err, data) {
    if (err) {
      res.send("File Read failed");
    } else {
      todos = JSON.parse(data); // Parse the to-do items
    }

    // Find and update the to-do item with the matching key
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].key == key) {
        todos[i].title = todo; // Update the to-do text
        break;
      }
    }

    // Save the updated list back to the file
    fs.writeFile(pathFile, JSON.stringify(todos, null, 2), function (err) {
      if (err) {
        console.log("File doesn't write successfully");
      } else {
        res.send("Item Updated");
      }
    });
  });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Listening on port no 3000");
});
