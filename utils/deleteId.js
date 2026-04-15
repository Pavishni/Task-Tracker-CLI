const fs = require("fs");
const deleteId = (taskInput,tasks,filePath) => {
  if (!taskInput) {
    console.log("Please provide task id");
  } else {
    const taskInputId = Number(taskInput);

    const index = tasks.findIndex((t) => t.id === taskInputId);

    if (index === -1) {
      console.log("Task not found");
    } else {
      tasks.splice(index, 1);

      fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
      console.log("Task deleted successfully");
    }
  }
};
module.exports = deleteId;