import mongoose from 'mongoose'

const employerSchema = new mongoose.Schema({
    User_id:{
        type: String,
        required: true
    },
    Organization_Name: {
        type: String,
        required: true
    },
    Organization_Address: {
        type: String,
        required: true
    },
    Organization_Email: {
        type: String,
        required: true
    },
    Organization_Telephone: {
        type: String,
    },
    Organization_Details:{
        type: String,
    },
    Organization_Website:{
        type: String,
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
});

const Employer = mongoose.model('employers', employerSchema);

export default Employer;