import React from 'react'
import s from './Login.module.css'
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {LoginMe} from "../../redux/authReducer";
import {required} from "../utils/Validators/Validators";
import {InputForm} from "../Common/Input/FormControl";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {

    if (props.isAuthorized) return <Redirect to={'/profile'}/>;

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {props.error && <span className={s.commonError}>{props.error}</span>}
            </div>

            <div className={s.inputContainer}>
                <span>Login</span>
                <Field component={InputForm}
                       name={'email'}
                       type='text'
                       placeholder={'Login'}
                       validate={[required]}
                       error={props.error}/>
            </div>


            <div className={s.inputContainer}>
                <span>Password</span>
                <Field component={InputForm}
                       name={'password'}
                       type='password'
                       placeholder={'Password'}
                       validate={[required]}
                       error={props.error}/>
            </div>


            <div className={s.inputContainer}>
                <Field className={s.checkBox}
                       component={InputForm}
                       name={'rememberMe'}
                       type={'checkbox'}/>
                <span>Remember me</span>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'LoginForm'})(LoginForm);

export const Login = (props) => {

    const onSubmit = (formData) => props.LoginMe(formData);

    return (
        <div className={s.loginBox}>

            <h1>Welcome back</h1>
            <LoginReduxForm onSubmit={onSubmit} {...props}/>
        </div>
    )
};

let mapStateToProps = (state) => ({
    isAuthorized: state.authorization.isAuthorized
});

export default connect(mapStateToProps, {LoginMe})(Login);