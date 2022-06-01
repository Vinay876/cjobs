import axios from 'axios';

const URL = 'http://localhost:8000';


export const jobPosting = async (data) => {
    try {
        const response = await axios.post(`${URL}/post-job`, data)
        return response.data
    } catch (error) {
        // console.log('Error while calling employer' + error);
    }
}
export const internshipPosting = async (data) => {
    try {
        const response = await axios.post(`${URL}/post-internship`, data)
        return response.data
    } catch (error) {
        // console.log('Error while calling employer' + error);
    }
}