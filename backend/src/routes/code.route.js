import { Router } from "express";
import { compaileCode } from "../controllers/code.controller.js";

const router = Router();

router.post("/", compaileCode);

export default router;
