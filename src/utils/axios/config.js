import axios from "axios";

// Created an Axios instance
const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/",
  timeout: 5000, // Optional: Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Add JWT token to headers if available
    const token = config.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors (e.g., 401 Unauthorized)
    if (error.response) {
      if (error.response.status === 401) {
        console.error("Unauthorized! Redirecting to login...");
        // Redirect to login or handle token expiration
        window.location.href = "/login";
      }
    } else if (error.message === "Network Error") {
      console.error("Network Error! Check your connection.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
