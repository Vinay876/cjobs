import axios from 'axios';

const URL = 'http://localhost:8000';


export const seekerRegister = async (data) => {
  try {
    const response = await axios.post(`${URL}/signup-seeker`, data)
    return response.data
  } catch (error) {
    console.log('Error while calling seeker' + error);
  }
}
