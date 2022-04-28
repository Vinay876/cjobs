import Seeker from "../model/seekerSchema.js";

export const seekerRegister = async (req, res) => {
    try {
        const exist = await Seeker.findOne({
            User_Name: req.body.User_Name,
            User_Email: req.body.User_Email,
            User_Name: req.body.User_Name,
            User_Number: req.body.User_Number,
        });
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


export const seekerLogin = async (req, res) => {
    try {
        const user = await Seeker.findOne({
            User_Name: req.body.User_Name,
            User_Email: req.body.User_Email,
            User_Number: req.body.User_Number,
        }, { "User_id": 1, "User_Name": 1, "User_Address": 1, "User_Email": 1, "User_Number": 1, "Skills": 1 });
        if (user) {
            return res.send(user)
        }
        else {
            return res.status(500).json('failed');
        }

    } catch (error) {
        console.log('error in catch', error);

    }
}

export const seekerUpdate = async (req, res) => {
    try {

        const user = await Seeker.replaceOne({
            User_Number: req.body.User_Number,
            User_id: req.body.User_id
        }, req.body);
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

export const seekerFind = async (req, res) => {
    try {

        const user = await Seeker.findOne({
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