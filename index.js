const allowedCommands = ["add", "delete"];
const command = process.argv[2];
const fs = require("fs");
const task = process.argv.slice(3).join(" ");

const taskFile = fs.readFile("tasks.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("file read succesfully", data);
});

if (!command) {
  console.log("No command provided");
} else if (allowedCommands.includes(command)) {
  console.log("valid command...");
  task ? console.log(task) : console.log("Please provide task");
} else {
  console.log("invalid command");
}
