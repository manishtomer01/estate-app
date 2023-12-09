import { errorHandler } from "../utils/error.js";
import bcrptyjs from "bcryptjs";
import User from "../models/user-model.js";
export function test(req, res) {
  res.json({
    message: "User Controller",
  });
}

export async function updateUser(req, res, next) {
  // console.log("req.user:>> ", res.user);
  if (res.user.id !== req.params.id)
    return next(errorHandler(401, "you can only updatr your own account !!!"));
  try {
    if (req.body.password) {
      req.body.password = bcrptyjs.hashSync(req.body.password, 10);
    }
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avator: req.body.avator,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updateUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
}

export async function deleteUser(req, res, next) {
  if (res.user.id !== req.params.id)
    return next(errorHandler(401, "you can only delete your account only"));
  try {
    await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json("User Deleted !!!");
  } catch (error) {
    next(error);
  }
}
