import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({
    User_id: {
        type: String,
        required: true
    },
    Organization_Name: {
        type: String,
        required: true
    },
    Organization_Email: {
        type: String,
        required: true
    },
    Organization_Address: {
        type: String,
        required: true
    },
    Organization_Website: {
        type: String,
        required: true
    },
    Organization_Details: {
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
    Job_id: {
        type: String,
        required: true
    },
    Job_Post_Date: {
        type: String,
        required: true
    },
    Job_Type: {
        type: String,
        required: true
    },
    Job_Location: {
        type: String,
        required: true
    },
    Start_Date: {
        type: String,
        required: true
    },
    Salary: {
        type: String,
        required: true
    },
    Apply_By: {
        type: String,
        required: true
    },
    Job_Tags: {
        type: Array,
        required: true
    },
    Skills_Required: {
        type: Array,
        required: true
    },
    Short_Description: {
        type: String,
        required: true
    },
    Detailed_Description: {
        type: String,
        required: true
    },
    Who_can_apply: {
        type: String,
        required: true
    },
    Number_of_openings: {
        type: String,
        required: true
    },
});



const internshipSchema = new mongoose.Schema({
    User_id: {
        type: String,
        required: true
    },
    Organization_Name: {
        type: String,
        required: true
    },
    Organization_Email: {
        type: String,
        required: true
    },
    Organization_Address: {
        type: String,
        required: true
    },
    Organization_Website: {
        type: String,
        required: true
    },
    Organization_Details: {
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
    Internship_id: {
        type: String,
        required: true
    },
    Internship_Post_Date: {
        type: String,
        required: true
    },
    Internship_Type: {
        type: String,
        required: true
    },
    Internship_Location: {
        type: String,
        required: true
    },
    Start_Date: {
        type: String,
        required: true
    },
    Internship_Duration: {
        type: String,
    },
    Stipend: {
        type: String,
        required: true
    },
    Apply_By: {
        type: String,
        required: true
    },
    Internship_Tags: {
        type: Array,
        required: true
    },
    Skills_Required: {
        type: Array,
        required: true
    },
    Short_Description: {
        type: String,
        required: true
    },
    Detailed_Description: {
        type: String,
        required: true
    },
    Who_can_apply: {
        type: String,
        required: true
    },
    Number_of_openings: {
        type: String,
        required: true
    },
    Perks_Provided: {
        type: Array,
    }
});



const applicationSchema = new mongoose.Schema({
    User_id: {
        type: String,
        required: true
    },
    Post_id: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    Answer1: {
        type: String,
        required: true
    },
    Answer2: {
        type: String,
        required: true
    },
    Application_Post_Date:{
        type: String,
        required: true
    },
});


export const Job = mongoose.model('jobs', jobSchema);
export const Internship = mongoose.model('internships', internshipSchema);
export const Application = mongoose.model('applications', applicationSchema);