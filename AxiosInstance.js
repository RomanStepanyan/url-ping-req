import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3030/api/db-url_ping",
});
// axiosInstance.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   config.headers.Authorization = token ? `Bearer ${token}` : '';
//   return config;
// });
export default axiosInstance;
