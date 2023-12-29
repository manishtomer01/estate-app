import express from "express";
import connect from "./config/db-config.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import path from "path";
const app = express();
const __dirname = path.resolve();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", router);

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
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
