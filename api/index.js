import express from "express";
import connect from "./config/db-config.js";
import userRouter from "./routes/user-route.js";
import authRouter from "./routes/auth-route.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
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
