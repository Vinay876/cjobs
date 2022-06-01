import axios from 'axios';

const URL = 'http://localhost:8000';


export const seekerRegister = async (data) => {
  try {
    const response = await axios.post(`${URL}/signup-seeker`, data)
    return response.data
  } catch (error) {
    // console.log('Error while calling seeker' + error);
  }
}



export const seekerLogin = async (data) => {
  try {
    const response = await axios.post(`${URL}/login-seeker`, data)
    return response.data
  } catch (error) {
    // console.log('Error while calling seeker' + error);
  }
}

export const seekerUpdate = async (data) => {
  try {
    const response = await axios.post(`${URL}/update-seeker`, data)
    return response.data
  } catch (error) {
    // console.log('Error while calling employer' + error);
  }
}


export const seekerFind = async (data) => {
  try {
    const response = await axios.post(`${URL}/find-seeker`, data)
    return response.data
  } catch (error) {
    // console.log('Error while calling employer' + error);
  }
}
