import axios from 'axios';

const URL = 'http://localhost:8000';


export const sendOTP = async (num) => {
  try {
    const response = await axios.post(`${URL}/send-otp`, num)
    return response.data
  } catch (error) {
    // console.log('Error while calling Payment' + error);
  }
}
