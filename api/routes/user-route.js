import express from "express";
import {
  updateUser,
  deleteUser,
  getUserListings,
  getUser,
} from "../controllers/user-controller.js";
import { varifyToken } from "../utils/verify-user.js";
const router = express.Router();
router.post("/update/:id", varifyToken, updateUser);
router.delete("/delete/:id", varifyToken, deleteUser);
router.get("/listings/:id", varifyToken, getUserListings);
router.get("/:id", varifyToken, getUser);
export default router;
