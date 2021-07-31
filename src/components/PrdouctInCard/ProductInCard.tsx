// @flow
import * as React from 'react';
import {Grid, makeStyles} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {addItemToCard, deleteItemFromCard, ItemInCardType} from '../../bll/cart-reducer';


const useStyles = makeStyles({
    productRoot: {width: 300, height: "max-content", backgroundColor: '#ffe6f2'},
    imgInProduct:{width: 75, height: 75},
    textBlock:{gap: 5, width: 200, position: 'relative'},
    incrementDecrementButton:{cursor:'pointer',textAlign: "center", width: '15px', backgroundColor: "white"}
});


type Props = {
    item: ItemInCardType

};
export const ProductInCard: React.FC<Props> = ({item}) => {
    const classes = useStyles();
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
              className={classes.productRoot}>
            <img className={classes.imgInProduct}src={ item.picUrl || "https://via.placeholder.com/150" } alt="img"/>
            <Grid container direction={ 'column' } className={classes.textBlock}>
                <h4>{ item.name }</h4>
                <h5 >{ item.text }</h5>
                <span>{ item.priceRub }</span>
            </Grid>
            <Grid container direction={ "column" } alignItems={ "center" } style={ {width: 15} }>
                <div onClick={addItem} className={classes.incrementDecrementButton}>+</div>
                <div> { item.count }</div>
                <div onClick={deleteItem} className={classes.incrementDecrementButton}>-</div>
            </Grid>
        </Grid>

    );
};