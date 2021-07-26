// @flow
import * as React from 'react';
import {Grid} from "@material-ui/core";
import {addItemToCard, deleteItemFromCard, ItemInCardType} from "../../bll/card-reduxer";
import {useDispatch} from "react-redux";

type Props = {
    item: ItemInCardType

};
export const ProductInCard: React.FC<Props> = ({item}) => {
    const dispatch = useDispatch()

    const addItem = () =>{
        dispatch(addItemToCard( {item}))
    }
    const deleteItem = () => {
        dispatch(deleteItemFromCard( {item}))
    }

    return (
        <Grid container justifyContent={ "space-around" } direction={ 'row' }
              alignItems={ "flex-start" }
              style={ {width: 300, height: "max-content", backgroundColor: '#ffe6f2'} }>
            <img style={ {width: 75, height: 75} } src={ item.picUrl || "https://via.placeholder.com/150" } alt="img"/>
            <Grid container direction={ 'column' } style={ {gap: 5, width: 200, position: 'relative'} }>
                <h4>{ item.name }</h4>
                <h5 style={ {} }>{ item.text }</h5>
                <span>{ item.priceRub }</span>
            </Grid>
            <Grid container direction={ "column" } alignItems={ "center" } style={ {width: 15} }>
                <div onClick={addItem} style={ {cursor:'pointer',textAlign: "center", width: '15px', backgroundColor: "white"} }>+</div>
                <div> { item.count }</div>
                <div onClick={deleteItem} style={ {cursor:'pointer',textAlign: "center", width: '15px', backgroundColor: "white"} }>-</div>
            </Grid>
        </Grid>

    );
};