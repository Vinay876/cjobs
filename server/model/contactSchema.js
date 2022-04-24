import mongoose from 'mongoose'

const contactEmployerSchema = new mongoose.Schema({
    Organization_Name: {
        type: String,
        required: true
    },
    Organization_Email: {
        type: String,
        required: true
    },
    User_Name: {
        type: String,
        required: true
    },
    User_Designation: {
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
    Query: {
        type: String,
        required: true
    },
});



const contactSeekerSchema = new mongoose.Schema({
    User_Name: {
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
    Query: {
        type: String,
        required: true
    },
});

export const ContactSeeker = mongoose.model('contact_seekers', contactSeekerSchema);
export const ContactEmployer = mongoose.model('contact_employers', contactEmployerSchema);
