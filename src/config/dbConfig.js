import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

export default async function connectDB() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Database connected");
  } catch (error) {
    console.log("Something Went Wrong");
    console.log(error);  
  }
}