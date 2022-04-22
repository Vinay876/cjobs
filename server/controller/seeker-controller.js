import Seeker from "../model/seekerSchema.js";

export const seekerRegister = async (req, res) => {
    try {
        const exist = await Seeker.findOne({ User_Number: req.body.User_Number,User_Email:req.body.User_Email,User_Name:req.body.User_Name });
        if (exist) {
            console.log('Seeker Already existed');
            return res.send(400 + 'AlreadyExisted');
        }
        const seeker = req.body;
        const newSeeker = new Seeker(seeker);
        await newSeeker.save();
        return res.status(200).json('success');
    } catch (error) {
        console.log('Error: from controller ', error.message);
        return res.status(500).json('failed');
    }
}
