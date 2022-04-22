import Employer from "../model/employerSchema.js";

export const employerRegister = async (req, res) => {
    try {
        const exist = await Employer.findOne({ User_Number: req.body.User_Number,User_Email:req.body.User_Email,User_Name:req.body.User_Name });
        if (exist) {
            console.log('Employer Already existed');
            return res.send(400 + 'AlreadyExisted');
        }
        const employer = req.body;
        const newEmployer = new Employer(employer);
        await newEmployer.save();
        return res.status(200).json('success');
    } catch (error) {
        console.log('Error: from controller ', error.message);
        return res.status(500).json('failed');
    }
}
