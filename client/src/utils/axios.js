import axios from 'axios';

import store from '../app/store';

const Client = axios.create({
    baseURL: "http://localhost:8000/api",
    // baseURL: "https://bookzon.herokuapp.com/api",
    // baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
});


Client.interceptors.request.use(config => {
    const token = store.getState().auth.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
 }, err => {
     console.log(err);
    });


Client.interceptors.response.use(response => response, error => {
    if (error.response.status === 401) {
        store.dispatch({
            type: 'LOGOUT',
        });
    }
    return Promise.reject(error);
}
);

export default Client;