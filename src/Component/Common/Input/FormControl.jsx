import React from "react";
import s from "./FormControl.module.css";

export const FormControl = ({input, meta, child, ...props}) => {
    let hasError = meta.touched && meta.error;
    return (
        <>
            {hasError && <span className={meta.form === 'LoginForm' ? s.LoginForm : s.AddPostForm}>{meta.error}</span>}
            {props.children}
        </>
    )

};

export const TextareaForm = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea className={meta.touched && meta.error && s.error} {...input} {...restProps}/>
        </FormControl>
    )
};

export const InputForm = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl
            {...props}> <input className={meta.touched && meta.error && s.error} {...input} {...restProps}/>
        </FormControl>
    )
};
