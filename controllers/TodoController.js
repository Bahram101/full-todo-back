import TodoModel from "../models/Todo.js"

export const getAllTodos = async (req,res) =>{
    try {
        const todos = await TodoModel.find();
        res.json(todos)
    } catch (error) {
        res.status(500).json('Не удалось получить список задачи')
    }
}

export const createTodo = async (req, res) => {
    try {
      const doc = new TodoModel({
        title: req.body.title,
        completed: req.body.completed,
      });
  
      const post = await doc.save();
  
      res.json(post);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Не удалось создать статью',
      });
    }
  };