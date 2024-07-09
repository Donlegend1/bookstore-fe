import axios, { AxiosInstance } from "axios";
import { Context } from "./Context";
import { useContext } from "react";

interface User {
  token: string;
  [key: string]: any;
}

let user: User | null = JSON.parse(localStorage.getItem("user") || "null");
let token = "";

// If there is a user in localStorage, get the token
if (user) {
  token = user.token;
}

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: { Authorization: `${token}` },
});

instance.interceptors.response.use((response) => {
  return response;
});

export default instance;
