// @flow

import {Grid, Paper } from '@material-ui/core';
import * as React from 'react';

type Props = {
    item: { id: string, name: string, picUrl: string, priceRub: number,text:string }
};
export const Product:React.FC<Props> = ({item}) => {
    return (
      <Grid container justify={'space-evenly'} direction={'column'} alignItems={"center"}  style={{width:200,height:300,gap:20,backgroundColor:'#ffe6f2' } } >
            <img src={ item.picUrl || "https://via.placeholder.com/150" } alt="img"/>
            <h3>{ item.name }</h3>
            <h5>{ item.text }</h5>
            <span>{ item.priceRub }</span>
            </Grid>

    );
};