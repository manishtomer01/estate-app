import mongoose from "mongoose";

var userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avator: {
      type: String,
      default:
        "https://srcwap.com/wp-content/uploads/2022/08/abstract-user-flat-4.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
