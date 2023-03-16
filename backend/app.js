import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "./config/config.js";
import { router } from "./routes/index.js";

// Constatnt
const app = express();
const port = process.env.PORT || 5000;
const MONGO_URI = config.mongoUrl;

// Middleware
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", (req, res) => res.send("Get Route"));
app.use("/api/carcomet", router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});


// Connect to MongoDb and start the server;
mongoose
  .connect(MONGO_URI, {})
  .then(() => {
    console.log("MongoDb Connected Successfully!");
    //  Start the srver
    app.listen(port, () => {
      console.log(`Server listen on port ${port}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
