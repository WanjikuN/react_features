import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: "https://snap-safari-backend.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosPublic;