import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Mongodb Connected Successfully !!!!");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connect;