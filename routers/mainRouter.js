import express from "express";

const mainRouter = express.Router();

mainRouter.get("/", (req, res) => res.send("HOME"));
mainRouter.get("/login", (req, res) => res.send("LOGIN"));
mainRouter.get("/myProfile/:id", (req, res) => res.send("MY PROFILE"));
mainRouter.get("/market", (req, res) => res.send("MARKET"));
mainRouter.get("/sports", (req, res) => res.send("SPORTS"));
mainRouter.get("/sports/:id", (req, res) => res.send("SPORTS DETAIL"));

export default mainRouter;
