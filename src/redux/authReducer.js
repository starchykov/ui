import {AuthApi, LoginApi} from "./api";
import {stopSubmit} from "redux-form";


const AUTHORIZE_ME = 'AUTHORIZE-ME';
const SET_USER_INFO = 'SET-USER-INFO';
const DEL_USER_INFO = 'DEL-USER-INFO';

const initialState = {
    authData: {
        id: null,
        login: null,
        email: null,
    },

    isAuthorized: false,

    currentUser: {
        "aboutMe": null,
        "fullName": null,
        "userId": null,
        "photos": {
            "small": null,
            "large": null
        }
    },
};

const authorizationReducer = (state = initialState, action) => {

    switch (action.type) {

        case AUTHORIZE_ME:
            return {
                ...state,
                authData: {...action.authData},
                isAuthorized: action.isAuthorized
            };

        case SET_USER_INFO:
            return {
                ...state,
                currentUser: action.currentUserData
            };

        case DEL_USER_INFO:
            return {
                ...state,
                authData: {...initialState.authData},
                isAuthorized: action.isAuthorized
            };

        default:
            return state
    }
};

export const setAuthorizeData = (authData, isAuthorized) => {
    return {
        type: AUTHORIZE_ME,
        authData: authData.data,
        isAuthorized
    }
};

export let setCurrentUser = (currentUserData) => {
    return {
        type: SET_USER_INFO,
        currentUserData: currentUserData
    }
};

export let delCurrentUser = (isAuthorized) => {
    return {
        type: DEL_USER_INFO,
        isAuthorized
    }
};

export const authorize = (props) => (dispatch) => {
    return AuthApi.authMe().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthorizeData(data, true));
            //ProfileApi.getProfile(data.data.id).then(response => dispatch(setCurrentUser(response)));
            //dispatch(setProfileInfo(data.data.id));
        }
    })
};

export const LoginMe = (data) => (dispatch) => {
    LoginApi.Login(data).then(response => {
        if (response.status === 200) dispatch(authorize());
        else {
            let responseMessage = response.data.message.length > 0 ? response.message : 'Some error has occurred';
            dispatch(stopSubmit('LoginForm', {_error: responseMessage}))
        }
    })
};

export const LogOutMe = () => (dispatch) => {
    LoginApi.Logout().then(response => {
        if (response.resultCode === 0) dispatch(delCurrentUser(false))
    })
};

export default authorizationReducer;