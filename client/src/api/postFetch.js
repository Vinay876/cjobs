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

export const jobOtherFetching = async (data) => {
    try {
        const response = await axios.post(`${URL}/find-job-other`, data)
        return response.data
    } catch (error) {
        console.log('Error while calling employer' + error);
    }
}

export const jobSingleFetching = async (data) => {
    try {
        const response = await axios.post(`${URL}/find-job-single`, data)
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

export const internshipOtherFetching = async (data) => {
    try {
        const response = await axios.post(`${URL}/find-internship-other`, data)
        return response.data
    } catch (error) {
        console.log('Error while calling employer' + error);
    }
}

export const internshipSingleFetching = async (data) => {
    try {
        const response = await axios.post(`${URL}/find-internship-single`, data)
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

export const employerFetching = async (data) => {
    try {
        const response = await axios.post(`${URL}/find-employer`, data)
        return response.data
    } catch (error) {
        console.log('Error while calling employer' + error);
    }
}

export const postApplication = async (data) => {
    try {
        const response = await axios.post(`${URL}/application-post`, data)
        return response.data
    } catch (error) {
        console.log('Error while calling employer' + error);
    }
}

export const findApplication = async (data) => {
    try {
        const response = await axios.post(`${URL}/find-application`, data)
        return response.data
    } catch (error) {
        console.log('Error while calling employer' + error);
    }
}