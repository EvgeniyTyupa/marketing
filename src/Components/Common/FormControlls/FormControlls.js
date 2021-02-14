import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((themes) => ({
    root: {
        marginTop: "20px"
    }
}));

export const Input = ({ input, meta, ...props }) => {
    const [value, setValue] = useState(null);
    input.onChange(value);
    const material = useStyles();
    const hasError = meta.touched && meta.error;

    return(
        <TextField error={hasError} className={material.root} variant="outlined" label={props.label} value={value} 
        onChange={(e)=>{setValue(e.target.value)}} helperText={hasError && meta.error}/>
    );
}