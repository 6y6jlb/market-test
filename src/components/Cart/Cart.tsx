import * as React from 'react';
import {useState} from 'react';
import {Button, Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";

import {ProductInCard} from "../PrdouctInCard/ProductInCard";
import {calcTotalPrice} from "../../utils/utils-functions";
import OrderForm, {OrderFormType} from "../OrderForm/OrderForm";
import firebase from "firebase";
import {reset} from "redux-form";
import {deleteAllItemFromCard, ItemInCardType} from "../../bll/cart-reducer";

type Props = {};
export const Cart: React.FC<Props> = () => {
    const ref = firebase.database ().ref ( 'orders/' )
    const cartStore = useSelector<AppRootStateType, Array<ItemInCardType>> ( state => state.card.cardStore )
    const dispatch = useDispatch ()
    const [emptyCartError, setEmptyCartError] = useState ( '' )
    const totalPrice = calcTotalPrice ( cartStore )
    const onsubmitOrderForm = (data: OrderFormType) => {
        if (cartStore.length > 0) {
            const {name, surname, phone, email} = data
            ref.push ( {name, surname, phone, email,cart:cartStore},res => {
                if (res) {
                    setEmptyCartError ( res.message )
                } else {
                    clearTheBucketCallback()
                    dispatch(reset('orderForm'))
                }
            } )
        } else {
            setEmptyCartError ( 'cart is empty' )

        }
    }
    const clearTheBucketCallback = () => {
        dispatch ( deleteAllItemFromCard () )
    }

    return (
        <Grid container alignItems={ "center" } justify={ "space-around" } style={ {
            position: 'fixed',
            paddingTop: 10,
            paddingBottom: 10,
            top: '10%',
            left: window.innerWidth / 2 - 300,
            width: 600,
            border: 'none',
            borderRadius: '4px',
            overflowY: 'scroll',
            scrollBehavior: 'smooth',
            backgroundColor: 'white',
            height: 'max-content'
        } }>
            <Grid container direction={ "column" } alignItems={ "center" }
                  style={ {gap: 8, width: "300px", minHeight: 320} }>
                { !emptyCartError
                    ? cartStore.map ( c => <ProductInCard key={ c.id } item={ c }/> )
                    : <div>{ emptyCartError }</div> }

            </Grid>
            <OrderForm onSubmit={ onsubmitOrderForm }/>
            { totalPrice > 0 && <>
                <Button  onClick={ clearTheBucketCallback } size={ "small" } style={{marginLeft:60,backgroundColor:'rgb(255, 230, 242)'}}
                         variant={ "outlined" }>
                    clear the bucket
                </Button>
                <div style={ {
                    fontSize: '1.2em',
                    color: "black",
                    zIndex: 1,
                    width: 'max-content'
                } }>
                    total price: { totalPrice } rub
                </div>
                </> }

        </Grid>
    );
};