import { Internship, Job } from "../model/postingSchema.js";

export const jobPosting = async (req, res) => {
    try {
        const job = req.body;
        const newJob = new Job(job);
        await newJob.save();
        return res.status(200).json('success');
    } catch (error) {
        console.log('Error: from controller ', error.message);
        return res.status(500).json('failed');
    }
}

export const internshipPosting = async (req, res) => {
    try {
        const internship = req.body;
        const newInternship = new Internship(internship);
        await newInternship.save();
        return res.status(200).json('success');
    } catch (error) {
        console.log('Error: from controller ', error.message);
        return res.status(500).json('failed');
    }
}

