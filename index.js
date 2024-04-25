import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import todoRoutes from "./routes/todos.js";
import { getAllTodos, createTodo } from "./controllers/TodoController.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

// Constants
const PORT = process.env.PORT || 5555;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

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

//Routes
app.use("/api/todos", todoRoutes);

app.listen(PORT, (err) => {
  if (err) {
    return console.log("err", err);
  }
  console.log("Server is running...");
});
