import express from "express";
const app = express();

app.get("/", (req, res) => res.send("HII"));



export default app

