import { Internship, Job } from "../model/postingSchema.js";

export const jobFinding = async (req, res) => {
    try {
        const user = await Job.find({
            Organization_Name: req.body.Organization_Name,
            Organization_Email: req.body.Organization_Email,
            User_Name: req.body.User_Name,
            User_Email: req.body.User_Email,
            User_Number: req.body.User_Number,
            User_id: req.body.User_id
        }, {});
        if (user) {
            return res.send(user)
        }
        else {
            return res.status(500).json('failed');
        }

    } catch (error) {
        console.log('error in catch', error);
        return res.status(500).json('failed');
    }
}


export const jobFindingAll = async (req, res) => {
    try {
        const user = await Job.find({}, {});
        if (user) {
            return res.send(user)
        }
        else {
            return res.status(500).json('failed');
        }

    } catch (error) {
        console.log('error in catch', error);
        return res.status(500).json('failed');
    }
}


export const internshipFinding = async (req, res) => {
    try {
        const user = await Internship.find({
            Organization_Name: req.body.Organization_Name,
            Organization_Email: req.body.Organization_Email,
            User_Name: req.body.User_Name,
            User_Email: req.body.User_Email,
            User_Number: req.body.User_Number,
            User_id: req.body.User_id
        }, {});
        if (user) {
            return res.send(user)
        }
        else {
            return res.status(500).json('failed');
        }

    } catch (error) {
        console.log('error in catch', error);
        return res.status(500).json('failed');
    }
}

export const internshipFindingAll = async (req, res) => {
    try {
        const user = await Internship.find({}, {});
        if (user) {
            return res.send(user)
        }
        else {
            return res.status(500).json('failed');
        }

    } catch (error) {
        console.log('error in catch', error);
        return res.status(500).json('failed');
    }
}
