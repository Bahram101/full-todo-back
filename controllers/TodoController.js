import Todo from "../models/Todo.js";

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Не удалось получить список задачи." });
  }
};

export const createTodo = async (req, res) => {
  try {
    const doc = new Todo({
      title: req.body.title,
      completed: req.body.completed,
    });
    const post = await doc.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({
      message: "Не удалось создать статью.",
    });
  }
};

export const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
  } catch (error) {
    res.status(500).json({ messages: "Что-то пошло не так." });
  }
};

export const removeTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const deletedTodo = await Todo.findByIdAndDelete(todoId);
    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ message: "Todo deleted successfully!" });
  } catch (err) {
    res.status(500).json({message:'Failed to delete todo'})
  }
};
