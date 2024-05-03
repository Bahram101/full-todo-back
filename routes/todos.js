import { Router } from "express";
import {
  getAllTodos,
  createTodo,
  getTodoById,
  removeTodo,
  checkTodo,
  updateTodo,
} from "../controllers/TodoController.js";

const router = new Router();

router.get("/", getAllTodos);
router.post("/", createTodo);
router.get("/:id", getTodoById);
router.delete("/:id", removeTodo);
router.put("/:id", checkTodo);
router.put("/update/:id", updateTodo);

export default router;
