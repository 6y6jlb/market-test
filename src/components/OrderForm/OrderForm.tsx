import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Button, FormHelperText} from "@material-ui/core";
import {renderTextField} from '../../utils/materialUiReduxFormUtilsComponentns';


interface PropsType {
}

export interface OrderFormType {
    name: string
    surname: string
    email: string
    phone: string
}





const ContactForm: React.FC<InjectedFormProps<OrderFormType, PropsType> & PropsType> = ({handleSubmit}) => {

    return <form onSubmit={ handleSubmit }
                        style={ {textAlign:"center", backgroundColor: 'rgb(255, 230, 242)', padding: '20px', height: '100%'} }>
        <>
           <Field component={renderTextField} name={'name'} placeholder={ 'name' } aria-describedby="name-helper-text"/>
            <FormHelperText id="name-helper-text">john</FormHelperText>
        </>
        <>
            <Field component={renderTextField} name={'surname'} placeholder={ 'surname' } aria-describedby="surname-helper-text"/>
            <FormHelperText id="surname-helper-text">Smith</FormHelperText>
        </>
        <>
            <Field component={renderTextField} name={'email'} placeholder={ 'email' } aria-describedby="email-helper-text"/>
            <FormHelperText id="address-helper-text">We'll never share email address.</FormHelperText>
        </>
        <>
            <Field component={renderTextField} name={'phone'} placeholder={ 'phone' } aria-describedby="phone-helper-text"/>
            <FormHelperText id="phone-helper-text">We'll never share your phone.</FormHelperText>
        </>
        <Button style={ {marginTop:15}} onSubmit={handleSubmit} variant={"text"} type={"submit"}>order</Button>
    </form>
}


export default reduxForm<OrderFormType> ( {
    // a unique name for the form
    form: 'orderForm'
} ) ( ContactForm )