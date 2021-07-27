import {TextField} from "@material-ui/core";
import React from "react";

export const renderTextField = (props:any) => (
    <TextField
        hintText={props.label}
        floatingLabelText={props.label}
        errorText={props.touched && props.error}
        {...props.input}
        {...props.custom}
    />
);
