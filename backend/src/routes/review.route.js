import { Router } from "express";
import { reviewCodeHandler } from "../controllers/review.controller.js";


const router = Router();

router.post("/", reviewCodeHandler);

export default router;
