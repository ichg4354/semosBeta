import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import express from "express";
import mainRouter from "./routers/mainRouter.js";

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/css", express.static("css"));
app.use("/image", express.static("image"));
app.use("/js", express.static("js"));
app.set("view engine", "pug");
app.use("/", mainRouter);

export default app;
