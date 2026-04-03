import { readTasks, addTask, deleteTask } from "../models/taskModel.js";

// GET /tasks → list tasks
export const getTasks = (req, res) => {
  const tasks = readTasks();
  res.status(200).json(tasks);
};

// POST /tasks → add task
export const createTask = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Task title is required" });
  }

  const newTask = addTask(title);
  res.status(201).json(newTask);
};

// DELETE /tasks/:id → delete task
export const removeTask = (req, res) => {
  const id = Number(req.params.id);
  deleteTask(id);
  res.status(200).json({ message: "Task deleted successfully" });
};
