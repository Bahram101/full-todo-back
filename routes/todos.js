import { Router } from "express";
import {
  getAllTodos,
  createTodo,
  getTodoById,
  removeTodo,
} from "../controllers/TodoController.js";

const router = new Router();

router.get("/", getAllTodos);
router.post("/", createTodo);
router.get("/:id", getTodoById);
router.delete("/:id", removeTodo);

export default router;
