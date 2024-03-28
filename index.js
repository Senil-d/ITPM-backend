import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://senil:17803@traverse-db.rxhiquh.mongodb.net/Traverse?retryWrites=true&w=majority&appName=traverse-db";

mongoose
  .connect(CONNECTION_URL, {
    connectTimeoutMS: 3000,
  })
  .catch((error) => {
    console.log(`Error connecting to MongoDB: ${error}`);
  });
mongoose.connection.on("connected", () => {
  console.log("Connected to database successfully");
});
mongoose.connection.on("error", (error) => {
  console.log(`Error connecting to database: ${error}`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
