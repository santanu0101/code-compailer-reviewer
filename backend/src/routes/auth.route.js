import express from 'express';
import { sendOTP, userLogout, verifyOTP } from '../controllers/auth.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP);
router.post('/logout', verifyJWT, userLogout);

export default router;
