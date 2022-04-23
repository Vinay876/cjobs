import express from "express";
import { employerLogin, employerRegister } from "../controller/employer-controller.js";
import { otpSend } from "../controller/otpSend.js";
import { seekerLogin, seekerRegister } from "../controller/seeker-controller.js";


const router = express.Router()


router.post('/signup-employer', employerRegister)
router.post('/login-employer', employerLogin)
router.post('/signup-seeker', seekerRegister)
router.post('/login-seeker', seekerLogin)
router.post('/send-otp', otpSend)



export default router;