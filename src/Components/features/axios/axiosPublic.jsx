import axios from 'axios';
// console.log('API URL:', process.env.REACT_APP_API_URL); 
// vite app => import.meta.env.REACT_APP_API_URL
const axiosPublic = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosPublic;