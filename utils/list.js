const list = (taskInput,tasks) => {
  if (tasks.length === 0) {
    console.log("No tasks found");
  } else {
    const result = taskInput
      ? tasks.filter((t) => t.status === taskInput)
      : tasks;
    if (result.length === 0) {
      console.log("No tasks found for this filter");
    } else {
      for (let i = 0; i < result.length; i++) {
        console.log(
          i + 1 + ". " + result[i].description + "[" + result[i].status + "]",
        );
      }
    }
  }
};

module.exports = list;