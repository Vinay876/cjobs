import axios from 'axios';

const URL = 'http://localhost:8000';


export const employerRegister = async (data) => {
  try {
    const response = await axios.post(`${URL}/signup-employer`, data)
    return response.data
  } catch (error) {
    console.log('Error while calling employer' + error);
  }
}

export const employerLogin = async (data) => {
  try {
    const response = await axios.post(`${URL}/login-employer`, data)
    return response.data
  } catch (error) {
    console.log('Error while calling employer' + error);
  }
}
