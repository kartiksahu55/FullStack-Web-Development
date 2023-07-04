import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "../routers/userRouter.js";

const app = express();
dotenv.config();

//Middleware Insertion
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

app.use("/user", userRouter); // Mount the userRouter middleware for routes starting with "/"

// Export app to get used
export default app;
