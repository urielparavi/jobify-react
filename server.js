import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";

// middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

const app = express();

// Now it's will be looking for dotenv file in the root
dotenv.config();

app.get("/", (req, res, next) => {
  res.send("Welcome!");
});

// app.use() => for all the http methods - post/patch/get and so on
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
