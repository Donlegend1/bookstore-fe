import axios from "axios";

export const fetchCsrfToken = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/csrf-token`);
  return response.data.csrf_token;
};
