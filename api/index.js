import express from "express";
import connect from "./config/db-config.js";
import userRouter from "./routes/user-routes.js";

const app = express();

app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log("Server start running on portNumber 3000 !!!");
  connect();
});
