import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import express from "express";
import mainRouter from "./routers/mainRouter.js"
const app = express();

app.use('/',mainRouter)


export default app;
