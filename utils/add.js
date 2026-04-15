const fs = require("fs");

const add = (taskInput,tasks,filePath) => {
  if (!taskInput) {
    console.log("Please provide task");
  } else {
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      description: taskInput,
      status: "todo",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    tasks.push(newTask);
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
    console.log("Task added successfully");
  }
};
module.exports = add;