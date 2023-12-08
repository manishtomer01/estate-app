import express from "express";
import { test, updateUserInfo } from "../controllers/user-controller.js";
import { varifyToken } from "../utils/verify-user.js";
const router = express.Router();
router.get("/test", test);
router.post("/update/:id", varifyToken, updateUserInfo);
export default router;
