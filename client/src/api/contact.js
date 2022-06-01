import axios from 'axios';

const URL = 'http://localhost:8000';


export const employerContact = async (data) => {
  try {
    const response = await axios.post(`${URL}/contact-employer`, data)
    return response.data
  } catch (error) {
    // console.log('Error while calling employer' + error);
  }
}

export const seekerContact = async (data) => {
  try {
    const response = await axios.post(`${URL}/contact-seeker`, data)
    return response.data
  } catch (error) {
    // console.log('Error while calling employer' + error);
  }
}
