import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { getAllTodos, createTodo } from "./controllers/TodoController.js";

const app = express();
app.use(express.json());
dotenv.config() 

// constants
const PORT = process.env.PORT || 5555
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

console.log(PORT)
console.log(DB_USER)

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.swapwpn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("DB ok");
  })
  .catch((err) => {
    console.log("DB error", err);
  });

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/todos", getAllTodos);
app.post("/todo", createTodo);

app.listen(PORT, (err) => {
  if (err) {
    return console.log("err", err);
  }
  console.log("Server is running...");
});
