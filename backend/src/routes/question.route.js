import { Router } from "express";
import {
  getAllQuestion,
  getQuestionById,
  questionUpload,
  submitCode,
} from "../controllers/code.controller.js";

const router = Router();

router.post("/upload", questionUpload);

router.get("/", getAllQuestion);

router.get("/:id", getQuestionById);

router.post("/:id/submit", submitCode);

export default router;
