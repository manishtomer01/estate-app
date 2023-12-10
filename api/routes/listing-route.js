import { Router } from "express";
import { createListing } from "../controllers/listing-controller.js";
import { varifyToken } from "../utils/verify-user.js";
const router = Router();
router.post("/create", varifyToken, createListing);
export default router;
