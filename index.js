import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import todoRoutes from "./routes/todos.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

// constants
const PORT = process.env.PORT || 5555;

app.get("/", (req, res) => {
  res.send("Hello world");
});

//routes
app.use("/api/todos", todoRoutes);

const start = () => {
  app.listen(PORT, (err) => {
    if (err) {
      return console.log("err", err);
    }
    console.log("Server is running...");
    mongoose
      .connect(process.env.DB_URL)
      .then(() => {
        console.log("DB ok");
      })
      .catch((err) => {
        console.log("DB error", err);
      });
  });
};
start();
