// Create an empty array to store tasks
let tasks = [];
let taskId = 1;

// Create add tasks function
function addTask(description) {
  const task = {
    id: taskId++, // Unique incremental ID
    description, // Task description
    completed: false, // Default completed status
  };
  tasks.push(task);
  console.log(`Task added: "${description}"`);
}
addTask("swt")
addTask("games")


// define view tasks function
function viewTasks() {
  if (tasks.length === 0) {
    console.log("\nNo tasks available.");
    return;
  }
  console.log("\nTasks:");
  tasks.forEach((task) => {
    console.log(
      `ID: ${task.id}, Description: "${task.description}", Completed: ${
        task.completed ? "Yes" : "No"
      }`
    );
  });
}
viewTasks()


// define mark task as complete function
function markTaskComplete(id) {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.completed = true;
    console.log(`Task ID ${id} marked as completed.`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}
markTaskComplete(1)

// define remove tasks function
function removeTask(id) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    const removedTask = tasks.splice(index, 1)[0];
    console.log(`Task ID ${id} removed: "${removedTask.description}"`);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}
// call function to remove tasks
// removeTask(1)

// define function to filter tasks
function filterTasks(status) {
  const filteredTasks = tasks.filter(
    (task) => task.completed === (status === "completed")
  );
  if (filteredTasks.length === 0) {
    console.log(`\nNo ${status} tasks found.`);
    return;
  }
  console.log(`\n${status === "completed" ? "Completed" : "Incomplete"} Tasks:`);
  filteredTasks.forEach((task) => {
    console.log(`ID: ${task.id}, Description: "${task.description}"`);
  });
}

// View completed tasks
filterTasks("completed");

// View incomplete tasks
filterTasks("incomplete"); 
