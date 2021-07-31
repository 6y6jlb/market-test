// @flow
import * as React from 'react';
import {Container, Grid, makeStyles} from "@material-ui/core";
import {Product} from "../Product/Product";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {ItemType} from "../../bll/products-reducer";

const useStyles = makeStyles({
    goodsRoot:  {height: window.innerHeight - 30, gap:50, marginTop: 30},
});

type Props = {};
export const Goods: React.FC<Props> = () => {
    const classes = useStyles();
    const goods = useSelector<AppRootStateType, Array<ItemType>> ( state => state.products.store )
    const products = goods.map ( item => {
        return <Product key={ item.id } item={ item }/>
    } )

    return (

        <Container>
            <Grid container alignContent={ 'space-between' } justify={ "space-evenly" }
                  className={classes.goodsRoot}>
                { products }
            </Grid>
        </Container>
    );
};