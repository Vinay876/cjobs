import express from "express";
import { employerRegister } from "../controller/employer-controller.js";
import { otpSend } from "../controller/otpSend.js";
import { seekerRegister } from "../controller/seeker-controller.js";


const router = express.Router()


router.post('/signup-employer', employerRegister)
router.post('/signup-seeker', seekerRegister)
router.post('/send-otp',otpSend)



export default router;