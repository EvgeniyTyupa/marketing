import React from 'react';
import classes from '../Register/Register.module.css';
import { Button } from '@material-ui/core';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Thankyou = (props) => {
    return(
        <div className={classes.main}>
            <div className={classes.window}>
                <Button onClick={()=>{props.setIsOpenRegister(false)}}>
                    <NavLink to="/">&#10006;</NavLink>
                </Button>
            </div>
        </div>
    );
}

let mapStateToProps = (state) => ({
    isSuccess: state.common.isSuccess
})

export default connect(mapStateToProps, {})(Thankyou);