import express from "express";
import connect from "./config/db-config.js";

import router from "./routes/index.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", router);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    message,
    success: false,
    statusCode,
    data: {},
  });
});
app.listen(3000, () => {
  connect();
  console.log("Server start running on portNumber 3000 !!!");
});
