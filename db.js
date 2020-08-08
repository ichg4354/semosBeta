import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/semosBeta", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error);
db.once("open", () => {
  console.log("✅  connected to Db");
});

export default db
