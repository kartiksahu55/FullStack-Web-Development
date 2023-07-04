import express from "express";
import userController from "../controllers/userController.js";

const userRouter = express.Router();

// Register route
userRouter.post("/register", userController.registerUser);

// Login route
userRouter.post("/login", userController.loginUser);

export default userRouter;