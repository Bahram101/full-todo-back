import { Router } from "express";
import {
  getAllTodos,
  createTodo,
  getTodoById,
} from "../controllers/TodoController.js";

const router = new Router();

router.get("/", getAllTodos);
router.post("/", createTodo);
router.get("/:id", getTodoById);

export default router;
