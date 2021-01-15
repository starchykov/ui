import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import authorizationReducer from "./authReducer";
import appInitialized from "./appReducer";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    authorization: authorizationReducer,
    form: formReducer,
    app: appInitialized
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;
