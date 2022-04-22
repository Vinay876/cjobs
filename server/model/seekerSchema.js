import mongoose from 'mongoose'

const seekerSchema = new mongoose.Schema({
    User_Name: {
        type: String,
        required: true
    },
    User_Address: {
        type: String,
        required: true
    },
    User_Email: {
        type: String,
        required: true
    },
    User_Number: {
        type: String,
        required: true
    },
    Skills: {
        type: Array,
        required: true
    }
});

const Seeker = mongoose.model('seekers', seekerSchema);

export default Seeker;