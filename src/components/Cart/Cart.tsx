import * as React from 'react';
import {useState} from 'react';
import {Button, Grid, makeStyles} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";

import {ProductInCart} from "../PrdouctInCart/ProductInCart";
import {calcTotalPrice} from "../../utils/utils-functions";
import OrderForm, {OrderFormType} from "../OrderForm/OrderForm";
import firebase from "firebase";
import {reset} from "redux-form";
import {deleteAllItemFromCard, ItemInCardType} from "../../bll/cart-reducer";


const useStyles = makeStyles ( {
    cartRoot: {
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
    },
    productsIsCart: {gap: 8, width: "300px", minHeight: 320},
    clearCartButton: {marginLeft: 60, backgroundColor: 'rgb(255, 230, 242)'},
    totalPriceSpan: {
        fontSize: '1.2em',
        color: "black",
        zIndex: 1,
        width: 'max-content'
    }
} );


type Props = {};

export const Cart: React.FC<Props> = () => {
    const classes = useStyles ();
    const ref = firebase.database ().ref ( 'orders/' )
    const cartStore = useSelector<AppRootStateType, Array<ItemInCardType>> ( state => state.card.cardStore )
    const dispatch = useDispatch ()
    const [emptyCartError, setEmptyCartError] = useState ( '' )
    const totalPrice = calcTotalPrice ( cartStore )
    const onsubmitOrderForm = (data: OrderFormType) => {
        if (cartStore.length > 0) {
            const {name, surname, phone, email} = data
            ref.push ( {name, surname, phone, email, cart: cartStore}, res => {
                if (res) {
                    setEmptyCartError ( res.message )
                } else {
                    clearTheBucketCallback ()
                    dispatch ( reset ( 'orderForm' ) )
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
        <Grid container alignItems={ "center" } justify={ "space-around" } className={ classes.cartRoot }>
            <Grid container direction={ "column" } alignItems={ "center" } className={ classes.productsIsCart }>
                { !emptyCartError
                    ? cartStore.map ( c => <ProductInCart key={ c.id } item={ c }/> )
                    : <div>{ emptyCartError }</div> }

            </Grid>
            <OrderForm onSubmit={ onsubmitOrderForm }/>
            { totalPrice > 0 && <>
                <Button onClick={ clearTheBucketCallback } size={ "small" } className={ classes.clearCartButton }
                        variant={ "outlined" }>
                    clear the cart
                </Button>
                <span className={ classes.totalPriceSpan }>
                    total price: { totalPrice } rub
                </span>
            </> }

        </Grid>
    );
};