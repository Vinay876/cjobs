import { Application } from "../model/postingSchema.js";

export const applicationPost = async (req, res) => {
    try {
        const exist = await Application.findOne({
            User_id: req.body.User_id,
            Post_id: req.body.Post_id,
            Type: req.body.Type,
        });
        if (exist) {
            console.log('Application Already existed');
            return res.send('Application Already existed');
        }
        const application = req.body;
        const newApplication = new Application(application);
        await newApplication.save();
        return res.status(200).json('success');
    } catch (error) {
        console.log('Error: from controller ', error.message);
        return res.status(500).json('failed');
    }
}


export const ApplicationFinding = async (req, res) => {
    try {
        const user = await Application.find({
            User_id: req.body.User_id
        }, {});
        if (user) {
            return res.send(user.filter(data => data.Type.toLowerCase().includes(req.body.type)))
        }
        else {
            return res.status(500).json('failed');
        }

    } catch (error) {
        console.log('error in catch', error);
        return res.status(500).json('failed');
    }
}


export const getApplication = async (req, res) => {
    try {
        const user = await Application.find({
            Employer_id: req.body.Employer_id,
            Type: req.body.Type,
        });
        if (user) {
            return res.send(user)
        } else {
            console.log('error');
            return res.status(500).json('failed');
        }
        return res.status(200).json('success');
    } catch (error) {
        console.log('Error: from controller ', error.message);
        return res.status(500).json('failed');
    }
}

export const getSingleApplication = async (req, res) => {
    try {
        const user = await Application.find({
            Employer_id: req.body.Employer_id,
            Post_id: req.body.Post_id,
            User_id: req.body.User_id,
            Type: req.body.Type,
        });
        if (user) {
            return res.send(user)
        } else {
            console.log('error');
            return res.status(500).json('failed');
        }
        return res.status(200).json('success');
    } catch (error) {
        console.log('Error: from controller ', error.message);
        return res.status(500).json('failed');
    }
}
