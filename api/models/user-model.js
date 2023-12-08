import mongoose from "mongoose";

var userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avator: {
      type: String,
      default: "https://source.unsplash.com/random/807x600",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
