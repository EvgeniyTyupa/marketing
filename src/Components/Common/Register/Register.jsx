import React, { useEffect, useState } from 'react';
import classes from './Register.module.css';
import { useForm } from "react-hook-form";
import { Button } from '@material-ui/core';
import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form';
import { isEmail, phoneValidator, required } from '../../../Utils/validators';
import { Input } from '../FormControlls/FormControlls';
import { connect } from 'react-redux';
import { saveToGoogleTable } from '../../../Redux/commonReducer';
import { NavLink, Redirect } from 'react-router-dom';

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
            {props.isSuccess && <Redirect to="/register_done"/>}
            <div className={classes.window} data-aos="zoom-in">
                <form onSubmit={props.handleSubmit}>
                    <Button onClick={()=>{props.setIsOpenRegister(false)}}>
                        <NavLink to="/">&#10006;</NavLink>
                    </Button>
                    {props.isSuccess ? <p className={classes.text}>{t("registration.done")}</p> :
                    <>
                        <Field component={Input} label={t("registration.name")} name="name" validate={[required]}/>
                        <Field component={Input} label={t("registration.phone")} name="phone" validate={[required, phoneValidator]}/>
                        <Field component={Input} label={t("registration.email")} name="email" validate={[required, isEmail]}/>
                        <Button type="submit">{t("register")}</Button>
                    </>}
                    
                </form>
            </div>
        </div>
    );
}

const RegisterReduxForm = reduxForm({form: "registerForm"})(RegisterForm);

const Register = (props) => {
    const onSubmit = (formData) => {
        formData.url = props.url;
        props.saveToGoogleTable(formData);
    }
    return(
        <RegisterReduxForm onSubmit={onSubmit} setIsOpenRegister={props.setIsOpenRegister} isSuccess={props.isSuccess}/>
    );
}

let mapStateToProps = (state) => ({
    isSuccess: state.common.isSuccess
});


export default connect(mapStateToProps, {
    saveToGoogleTable
})(Register);