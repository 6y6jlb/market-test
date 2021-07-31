// @flow
import * as React from 'react';
import {Container, Grid} from "@material-ui/core";
import {Product} from "../Product/Product";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {ItemType} from "../../bll/products-reducer";



type Props = {};
export const Goods: React.FC<Props> = () => {

    const goods = useSelector<AppRootStateType, Array<ItemType>> ( state => state.products.store )
    const products = goods.map ( item => {
        return <Product key={ item.id } item={ item }/>
    } )


    return (

        <Container>
            <Grid container alignContent={ 'space-between' } justify={ "space-evenly" }
                  style={ {height: window.innerHeight - 30, gap:50, marginTop: 30} }>

                { products }

            </Grid>

        </Container>
    );
};