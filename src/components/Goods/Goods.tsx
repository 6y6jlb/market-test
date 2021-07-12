// @flow
import * as React from 'react';
import { Container, Grid} from "@material-ui/core";
import {Product} from "../Product/Product";


const goods = [
    {id:'1241241fgfd1', name: 'чайник',picUrl:'',priceRub:999,text:'sdfsdg4'},
    {id:'124124erte1fgfd1', name: 'чайник 1',picUrl:'',priceRub:888,text:'swewerwe   dfsdg4'},
    {id:'12412asd41fgfd1', name: 'чайник 2',picUrl:'',priceRub:9944449,text:'sdfsewe werwwewedg4'},
    {id:'1241241fewtetrgfd1', name: 'чайник 3',picUrl:'',priceRub:123119,text:'sdf we ww eesdg4'},
    {id:'1241241f234gfd1', name: 'чайник',picUrl:'',priceRub:999,text:'sdfsdg4'},
    {id:'124124erte1234fgfd1', name: 'чайник 1',picUrl:'',priceRub:888,text:'swewerwe   dfsdg4'},
    {id:'12412asd41fgfsdfd1', name: 'чайник 2',picUrl:'',priceRub:9944449,text:'sdfsewe werwwewedg4'},
    {id:'1241241fewtetrsdfgfd1', name: 'чайник 3',picUrl:'',priceRub:123119,text:'sdf we ww eesdg4'},
    {id:'124124sdf1fgfd1', name: 'чайник',picUrl:'',priceRub:999,text:'sdfsdg4'},
    {id:'124124ersdfte1fgfd1', name: 'чайник 1',picUrl:'',priceRub:888,text:'swewerwe   dfsdg4'},
    {id:'12412asd41sdffgfd1', name: 'чайник 2',picUrl:'',priceRub:9944449,text:'sdfsewe werwwewedg4'},
    {id:'1241241fewtetsdfrgfd1', name: 'чайник 3',picUrl:'',priceRub:123119,text:'sdf we ww eesdg4'},
]

type Props = {

};
export const Goods:React.FC<Props> = () => {

    const products = goods.map(item=>{
            return <Product key={item.id} item={item}/>
        })

    return (
        <Container>
            <Grid container  alignContent={'space-between'} justify={ "space-evenly" } style={ {height: window.innerHeight - 30,gap:50,marginTop:30} }>

                    {products}


            </Grid>
        </Container>
    );
};