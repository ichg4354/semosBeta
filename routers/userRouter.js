import express from "express";
import { postRegisterUser } from "../controllers/userControllers.js";
const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("REGISTER"));
userRouter.get("/user", (req, res) => res.render("registerUser"));
userRouter.post("/user", postRegisterUser);
userRouter.get("/center", (req, res) => res.send("REGISTER as center"));
userRouter.get("/trainer", (req, res) => res.send("REGISTER as trainer"));

export default userRouter;
