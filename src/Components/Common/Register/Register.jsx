import React from 'react';
import classes from './Register.module.css';
import { useForm } from "react-hook-form";
import { Button, TextField } from '@material-ui/core';
import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form';
import { isEmail, phoneValidator, required } from '../../../Utils/validators';
import { Input } from '../FormControlls/FormControlls';

const useStyles = makeStyles((themes) => ({
    root: {
        marginBottom: "20px",
        "& p":{
            marginLeft: 0
        }
    }
}));

const RegisterForm = (props) => {
    const { t, i18n } = useTranslation();
   

    const material = useStyles();
    return(
        <div className={classes.main}>
            <div className={classes.window}>
                <form onSubmit={props.handleSubmit}>
                    <Button onClick={()=>{props.setIsOpenRegister(false)}}>&#10006;</Button>
                    <Field component={Input} label={t("registration.name")} name="name" validate={[required]}/>
                    <Field component={Input} label={t("registration.phone")} name="phone" validate={[required, phoneValidator]}/>
                    <Field component={Input} label={t("registration.email")} name="email" validate={[required, isEmail]}/>
                    <Button type="submit">{t("register")}</Button>
                </form>
            </div>
        </div>
    );
}

const RegisterReduxForm = reduxForm({form: "registerForm"})(RegisterForm);

const Register = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return(
        <RegisterReduxForm onSubmit={onSubmit} setIsOpenRegister={props.setIsOpenRegister}/>
    );
}


export default Register;