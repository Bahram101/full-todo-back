import express from "express";
import mongoose from "mongoose";
import { getAll, create } from './controllers/TodoController.js'

const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://bahram:qwerty123456@cluster0.swapwpn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB ok");
  })
  .catch((err) => {
    console.log("DB error", err);
  });

  app.get('/', (req,res)=>{
    res.send('Hello')
  })

app.get('/todos', getAll)
app.post('/todo', create)

app.listen(4444, (err) => {

  if (err) {
    return console.log("err", err);
  }
  console.log("Server is running...");
});
