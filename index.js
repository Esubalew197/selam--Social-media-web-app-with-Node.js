const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

async function connectToDatabase() {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }
  
  connectToDatabase();

  //middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.get("/", (req,res)=>{
  res.send("Welcome to homepage")
})

app.get("/users", (req,res)=>{
  res.send("Welcome to users page")
})


app.listen(8800, () => {
    console.log("BE Server is running!");
  });