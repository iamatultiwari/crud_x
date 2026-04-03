import express from "express";
import { getTasks, createTask, removeTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.delete("/:id", removeTask);

export default router;
