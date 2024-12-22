import axios from "axios";

// Created an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosInstance;
