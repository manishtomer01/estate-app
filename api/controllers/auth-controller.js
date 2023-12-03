import User from "../models/user-model.js";
import bcryptjs from "bcryptjs";
export const signUp = async (req, res) => {
  try {
    const hashPassword = bcryptjs.hashSync(req.body.password, 10);
    const response = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });
    return res.status(200).json({
      success: true,
      message: "Successfully created a new User",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong in controller layer of Auth",
      data: {},
      err: error,
    });
  }
};
