import Employer from "../model/employerSchema.js";

export const employerRegister = async (req, res) => {
    try {
        const exist = await Employer.findOne({ 
            Organization_Name: req.body.Organization_Name,
            Organization_Email: req.body.Organization_Email,
            User_Name: req.body.User_Name,
            User_Email: req.body.User_Email,
            User_Number: req.body.User_Number,
         });
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


export const employerLogin = async (req, res) => {
    try {
        const user = await Employer.findOne({ 
            Organization_Name: req.body.Organization_Name,
            Organization_Email: req.body.Organization_Email,
            User_Name: req.body.User_Name,
            User_Email: req.body.User_Email,
            User_Number: req.body.User_Number,
         }, { _id: 0, "Organization_Name": 1, "Organization_Address": 1, "Organization_Email": 1 ,"Organization_Telephone": 1,"User_Name": 1,"User_Designation": 1,"User_Email": 1,"User_Number": 1});
        if (user) {
            return res.send(user)
        }
        else {
            return res.status(500).json('failed');
        }

    } catch (error) {
        console.log('error in catch',error);
        return res.status(500).json('failed');
    }
}
