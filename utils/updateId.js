const fs = require("fs");
const updateId = (taskInput, tasks, filePath, command) => {
  if (!taskInput) {
    console.log("Please provide task id");
  } else {
    const taskInputId = Number(taskInput);
    let found = false;

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === taskInputId) {
        found = true;

        tasks[i].status = command === "mark-done" ? "done" : "in-progress";

        tasks[i].updatedAt = new Date().toISOString();
        break;
      }
    }

    if (!found) {
      console.log("Task not found");
    } else {
      fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
      console.log("Task updated successfully");
    }
  }
};

module.exports = updateId;
