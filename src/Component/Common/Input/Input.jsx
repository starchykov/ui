import s from "./Input.module.css";
import React from "react";
import {Field} from "redux-form";
import {TextareaForm} from "./FormControl";

let maxLength10 = maxLengthCreator(50);

const Input = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.inputBlock}>


                <Field component={TextareaForm}
                       name={props.name}
                       type="text"
                       validate={[required, maxLength10]}
                       autoComplete={'off'}/>

                <button>Send</button>
            </div>
        </form>
    )
};

export default Input;