import { Router } from "express";
import {
  createListing,
  deleteListing,
  updateListing,
  getListing,
  getListings,
} from "../controllers/listing-controller.js";
import { varifyToken } from "../utils/verify-user.js";
const router = Router();
router.post("/create", varifyToken, createListing);
router.delete("/delete/:id", varifyToken, deleteListing);
router.post("/update/:id", varifyToken, updateListing);
router.get("/get/:id", getListing);
router.get("/get", getListings);
export default router;
