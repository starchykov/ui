import {AuthApi} from "./api";
import {authorize} from "./authReducer";

const APP_INITIALIZED = 'APP-INITIALIZED';

const initialState = {
    isInitialized: false
};

const appInitialized = (state = initialState, action) => {
    switch (action.type) {

        case APP_INITIALIZED:
            return {
                ...state,
                isInitialized: action.isInitialized
            };

        default:
            return state
    }
};

const initializeSuccess = (isInitialized) => {
    return {
        type: APP_INITIALIZED,
        isInitialized
    }

};

export const initialization = () => (dispatch) => {
    let promise = dispatch(authorize());

    promise.then(() => dispatch(initializeSuccess(true)))
};

export default appInitialized
