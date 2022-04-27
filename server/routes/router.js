import express from "express";
import { employerContact, seekerContact } from "../controller/contact-controller.js";
import { employerFindAll, employerLogin, employerRegister, employerUpdate, employerView } from "../controller/employer-controller.js";
import { internshipPosting, jobPosting } from "../controller/employerPosting.js";
import { otpSend } from "../controller/otpSend.js";
import { internshipFinding, internshipFindingAll, internshipOtherFinding, internshipSingleFinding, jobFinding, jobFindingAll, jobOtherFinding, jobSingleFinding } from "../controller/postDetailsProvider.js";
import { seekerLogin, seekerRegister, seekerUpdate } from "../controller/seeker-controller.js";


const router = express.Router()


router.post('/signup-employer', employerRegister)
router.post('/login-employer', employerLogin)
router.post('/update-employer', employerUpdate)

router.post('/signup-seeker', seekerRegister)
router.post('/login-seeker', seekerLogin)
router.post('/update-seeker', seekerUpdate)

router.post('/send-otp', otpSend)

router.post('/find-job', jobFinding)
router.post('/find-internship', internshipFinding)


router.post('/find-job-other', jobOtherFinding)
router.post('/find-internship-other', internshipOtherFinding)
router.post('/find-employer', employerFindAll)

router.post('/view-employer', employerView)


router.post('/find-job-all', jobFindingAll)
router.post('/find-internship-all', internshipFindingAll)

router.post('/find-job-single', jobSingleFinding)
router.post('/find-internship-single', internshipSingleFinding)

router.post('/post-job', jobPosting)
router.post('/post-internship', internshipPosting)

router.post('/contact-employer', employerContact)
router.post('/contact-seeker', seekerContact)


export default router;