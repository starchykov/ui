import React from 'react'
import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://starchykov.herokuapp.com/',
    withCredentials: true,
    headers: {}
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