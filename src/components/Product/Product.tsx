// @flow

import {Button, Grid} from '@material-ui/core';
import * as React from 'react';
import {useDispatch} from "react-redux";
import {addItemToCard} from "../../bll/cart-reducer";
import {ItemType} from "../../bll/products-reducer";

type Props = {
    item: ItemType
};
export const Product: React.FC<Props> = ({item}) => {
    const dispatch = useDispatch ()
    const addItem = () => {
        dispatch ( addItemToCard ( {item} ) )
    }

    return (
        <Grid container justify={ 'space-around' } direction={ 'column' } alignItems={ "center" }
              style={ {
                  width: 200,
                  height: "max-content",
                  gap: 20,
                  backgroundColor: '#ffe6f2',
                  paddingBottom: 15,
                  paddingTop: 15
              } }>
            <img src={ item.picUrl || "https://via.placeholder.com/150" } alt="img"/>
            <h3>{ item.name }</h3>
            <h5>{ item.text }</h5>
            <span>{ item.priceRub } $</span>
            <Button onClick={ addItem } color={ 'secondary' } variant={ "contained" }>add to card</Button>
        </Grid>

    );
};