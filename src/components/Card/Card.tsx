// @flow
import * as React from 'react';
import {Button, FormControl, FormHelperText, Grid, Input} from "@material-ui/core";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {ItemInCardType} from "../../bll/card-reduxer";
import {ProductInCard} from "../PrdouctInCard/ProductInCard";
import {calcTotalPrice} from "../../utils/utils-functions";
import OrderForm, {OrderFormType} from "../OrderForm/OrderForm";

type Props = {};
export const Card: React.FC<Props> = () => {
    const cardStore = useSelector<AppRootStateType, Array<ItemInCardType>> ( state => state.card.cardStore )

    const totalPrice = calcTotalPrice ( cardStore )

    const onsubmitOrderForm = (data:OrderFormType) => {
        console.log (data)
    }

    return (
        <Grid container alignItems={ "center" } justify={ "space-around" } style={ {
            position: 'fixed',
            top: '10%',
            left: window.innerWidth / 2 - 300,
            width: 600,
            border: 'none',
            borderRadius:'4px',
            overflowY: 'scroll',
            scrollBehavior: 'smooth',
            backgroundColor: 'white',
            height:'max-content'
        } }>
            <Grid container direction={ "column" } justifyContent={ "space-around" } justify={ "space-around" }
                  style={ {paddingTop: 15,paddingBottom: 15, gap: 5, width: "max-content", minHeight: 320} }>
                { cardStore.map ( c => <ProductInCard item={ c }/> ) }
                { totalPrice > 0 && <div style={ {
                    position: "relative",
                    right: -98,
                    bottom: -10,
                    fontSize: '1.2em',
                    color: "black",
                    zIndex: 1,
                    width: 'max-content'
                } }>total price: { totalPrice }</div> }
            </Grid>
            <OrderForm onSubmit={onsubmitOrderForm}/>
        </Grid>
    );
};