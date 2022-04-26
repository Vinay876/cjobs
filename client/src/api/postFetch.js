import axios from 'axios';

const URL = 'http://localhost:8000';


export const jobFetching = async (data) => {
    try {
        const response = await axios.post(`${URL}/find-job`, data)
        return response.data
    } catch (error) {
        console.log('Error while calling employer' + error);
    }
}

export const jobFetchingAll = async (data) => {
    try {
        const response = await axios.post(`${URL}/find-job-all`, data)
        return response.data
    } catch (error) {
        console.log('Error while calling employer' + error);
    }
}

export const internshipFetching = async (data) => {
    try {
        const response = await axios.post(`${URL}/find-internship`, data)
        return response.data
    } catch (error) {
        console.log('Error while calling employer' + error);
    }
}

export const internshipFetchingAll = async (data) => {
    try {
        const response = await axios.post(`${URL}/find-internship-all`, data)
        return response.data
    } catch (error) {
        console.log('Error while calling employer' + error);
    }
}