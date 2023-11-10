import axios from 'axios';

const api = axios.create({
    baseURL: 'https://newintranetapi.wiut.uz/api/DMS/',
});

// // Add an Axios request interceptor to include the Bearer token
// api.interceptors.request.use(async (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   });

export default api;
