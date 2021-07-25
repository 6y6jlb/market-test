// @flow
import * as React from 'react';
import {Button, FormControl, FormHelperText, Grid, Input, InputLabel} from "@material-ui/core";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {ItemInCardType, ItemType} from "../../bll/card-reduxer";
import {ProductInCard} from "../PrdouctInCard/ProductInCard";

type Props = {};
export const Card: React.FC<Props> = () => {
    const cardStore = useSelector<AppRootStateType, Array<ItemInCardType>> ( state => state.card.cardStore )

    return (
        <Grid container alignItems={ "center" } justify={ "space-around" } style={ {
            position: 'absolute',
            top: '40%',
            left: window.innerWidth / 2 - 300,
            width: 600,
            border: 'none',
            backgroundColor: 'white'
        } }>
            <Grid container direction={ "column" } justifyContent={ "space-between" } justify={ "space-around" }
                  style={ { padding:5,gap: 5, width: "max-content", minHeight: 350} }>
                { cardStore.map ( c => <ProductInCard item={ c }/> ) }
            </Grid>
            <FormControl variant={"standard"} style={{backgroundColor:'rgb(255, 230, 242)' ,padding:'20px'}}>
                <>
                    <Input  id="name" aria-describedby="name-helper-text"/>
                    <FormHelperText id="name-helper-text">john</FormHelperText>
                </>
                <>
                    <Input id="surname" aria-describedby="surname-helper-text"/>
                    <FormHelperText id="surname-helper-text">Smith</FormHelperText>
                </>
                <>
                    <Input id="address" aria-describedby="address-helper-text"/>
                    <FormHelperText id="address-helper-text">We'll never share address.</FormHelperText>
                </>
                <>
                    <Input id="phone" aria-describedby="phone-helper-text"/>
                    <FormHelperText id="phone-helper-text">We'll never share your phone.</FormHelperText>
                </>
                <Button>order</Button>
            </FormControl>
        </Grid>
    );
};