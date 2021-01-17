import React from 'react'
import * as axios from "axios";
import qs from 'qs';

const instance = axios.create({
    baseURL: 'http://starchykov.herokuapp.com/',
    //baseURL: 'http://localhost:8002/',
    withCredentials: true,
    headers: {
        appID: 8,
        version: "1.1.0",
        empID: localStorage.getItem('empID'),
        token: localStorage.getItem('token')
    }
});


export const LoginApi = {
    Login: async (data) => {
        debugger
        return await instance.post('user/login', {...data}).then(response => response).catch((err) => {
            console.log(err.status);
            return err
        })
    },
    Logout: (data) => {
        return instance.delete('user/login')
            .then(response => response.data);
    },
};

export const AuthApi = {
    authMe: () => {
        return instance.get('auth/me')
            .then(response => response.data);
    }
};
