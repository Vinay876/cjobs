import { Application } from "../model/postingSchema.js";

export const applicationPost = async (req, res) => {
    try {
        const exist = await Application.findOne({
            User_id: req.body.User_id,
            Post_id: req.body.Post_id,
            Type:req.body.Type,
        });
        if (exist) {
            console.log('Application Already existed');
            return res.send(400 + 'AlreadyExisted');
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
