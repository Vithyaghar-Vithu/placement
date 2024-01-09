const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());

const CONNECT_STRING = "mongodb+srv://vithyaghar1506:Vithyaghar_15@cluster0.r4s9nvw.mongodb.net/?retryWrites=true&w=majority";
const DATABASE_NAME = "placement-app";

let database;

const client = new MongoClient(CONNECT_STRING);

app.listen(5030, async () => {
  try {
    await client.connect();
    database = client.db(DATABASE_NAME);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});

