import { ContactEmployer, ContactSeeker } from "../model/contactSchema.js";

export const employerContact = async (req, res) => {
    try {
        const exist = await ContactEmployer.findOne({ 
            Organization_Name: req.body.Organization_Name,
            Organization_Email: req.body.Organization_Email,
            User_Name: req.body.User_Name,
            User_Designation: req.body.User_Designation,
            User_Email: req.body.User_Email,
            User_Number: req.body.User_Number,
            Query:req.body.Query
         });
        if (exist) {
            console.log('Query Already existed');
            return res.send(400 + 'AlreadyExisted');
        }
        const employer = req.body;
        const newEmployer = new ContactEmployer(employer);
        await newEmployer.save();
        return res.status(200).json('success');
    } catch (error) {
        console.log('Error: from controller ', error.message);
        return res.status(500).json('failed');
    }
}

export const seekerContact = async (req, res) => {
    try {
        const exist = await ContactSeeker.findOne({ 
            User_Name: req.body.User_Name,
            User_Email: req.body.User_Email,
            User_Number: req.body.User_Number,
            Query:req.body.Query
         });
        if (exist) {
            console.log('Query Already existed');
            return res.send(400 + 'AlreadyExisted');
        }
        const seeker = req.body;
        const newSeeker = new ContactSeeker(seeker);
        await newSeeker.save();
        return res.status(200).json('success');
    } catch (error) {
        console.log('Error: from controller ', error.message);
        return res.status(500).json('failed');
    }
}

