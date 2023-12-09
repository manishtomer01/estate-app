import express from "express";
import { updateUser, deleteUser } from "../controllers/user-controller.js";
import { varifyToken } from "../utils/verify-user.js";
const router = express.Router();
router.post("/update/:id", varifyToken, updateUser);
router.delete("/delete/:id", varifyToken, deleteUser);
export default router;
