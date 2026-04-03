import fs from "fs";
import path from "path";

const filePath = path.resolve("data/tasks.json");

// Read all tasks
export const readTasks = () => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

// Add a new task
export const addTask = (title) => {
  const tasks = readTasks();
  const now = new Date().toISOString();

  const newTask = {
    id: tasks.length + 1,
    title,
    createdAt: now,
    updatedAt: now
  };

  tasks.push(newTask);
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));

  return newTask;
};

// Delete a task
export const deleteTask = (id) => {
  const tasks = readTasks();
  const updatedTasks = tasks.filter(task => task.id !== id);

  fs.writeFileSync(filePath, JSON.stringify(updatedTasks, null, 2));
};
