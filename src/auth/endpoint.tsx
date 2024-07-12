import axios, { AxiosInstance } from "axios";

// Function to get the token from localStorage
const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  return user ? `Bearer ${user.token}` : "";
};

// Create an Axios instance
const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: { Authorization: getToken() },
});

// Interceptor to ensure the token is included in each request
instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = getToken();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor to handle responses
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
