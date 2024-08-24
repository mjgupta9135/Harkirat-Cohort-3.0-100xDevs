const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program
  .name("counter")
  .description("CLI to do file based tasks")
  .version("0.8.0");

program
  .command("count")
  .description("Count the number of words in a file")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let words = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i] === " ") {
            words++;
          }
        }

        console.log(`There are ${words + 1} lines in ${file}`);
      }
    });
  });
program.parse(process.argv);
