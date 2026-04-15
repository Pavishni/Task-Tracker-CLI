#!/usr/bin/env node

const fs = require("fs");
const add = require("./utils/add");
const list = require("./utils/list");
const updateId = require("./utils/updateId");
const deleteId = require("./utils/deleteId");

const command = process.argv[2];
const taskInput = process.argv.slice(3).join(" ");
const filePath = "tasks.json";

if (!command) {
  console.log("No command provided");
  process.exit();
}

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]));
}

const data = fs.readFileSync(filePath, "utf-8");
const tasks = JSON.parse(data);

const commands = {
  add: () => add(taskInput, tasks, filePath),

  list: () => list(taskInput, tasks),

  "mark-done": () =>
    updateId(taskInput, tasks, filePath, "mark-done"),

  "mark-in-progress": () =>
    updateId(taskInput, tasks, filePath, "mark-in-progress"),

  delete: () => deleteId(taskInput, tasks, filePath),
};

if (!commands[command]) {
  console.log("invalid command");
} else {
  commands[command]();
}