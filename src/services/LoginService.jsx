import axios from "axios";
const ApiBaseUrl = process.env.REACT_APP_APIURL;

const loginApi = async (data) => {
    try {
      const response = await axios.post(`https://localhost:7006/login`, data);
      return response.data; // Return the response data
    } catch (error) {
      throw error; // Throw the error to be handled in the async thunk
    }
  };

export default { loginApi };
