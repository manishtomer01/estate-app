import userRouter from "./user-route.js";
import authRouter from "./auth-route.js";
import listingRouter from "./listing-route.js";
import { Router } from "express";
const router = Router();
router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/listing",listingRouter)
export default router;
