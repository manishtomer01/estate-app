import { errorHandler } from "../utils/error.js";
import bcrptyjs from "bcryptjs";
import User from "../models/user-model.js";
import Listing from "../models/listing-model.js";

export async function updateUser(req, res, next) {
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
    const data = await User.findByIdAndDelete(req.params.id);
    res.clearCookie("access_token");
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

export async function getUserListings(req, res, next) {
  if (res.user.id === req.params.id) {
    try {
      const listings = await Listing.find({ userRef: req.params.id });
      res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  } else {
    return next(errorHandler(403, "You cannot view other user's listings"));
  }
}

export async function getUser(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return next(errorHandler(404, "User Not Found"));
    const { password: pass, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
}
