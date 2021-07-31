// @flow
import * as React from 'react';
import {AppBar, Button, Grid, makeStyles, Modal, Toolbar} from "@material-ui/core";
import {NavLink} from 'react-router-dom';
import {GOODS_ROUTE, LOGIN_ROUTE} from "../../utils/routes";
import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "firebase";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {calcTotalPrice} from '../../utils/utils-functions';
import {Cart} from '../Cart/Cart';
import {ItemInCardType, openModalCard} from "../../bll/cart-reducer";

const useStyles = makeStyles({
    totalPrice: {
        position: "relative",
        right: -100,
        bottom: -10,
        fontSize: '0.8em',
        color: "black",
        zIndex: 1,
        width: '100px'
    },
    cartButton: {backgroundColor: 'rgb(255, 230, 242)'}
});

type Props = {};
export const NavBar: React.FC<Props> = React.memo(() => {
    const classes = useStyles();
    const isModalOpen = useSelector<AppRootStateType, boolean> ( state => state.card.isModalOpen )
    const cardStore = useSelector<AppRootStateType, Array<ItemInCardType>> ( state => state.card.cardStore )
    const dispatch = useDispatch ()
    const auth = firebase.auth ()
    const [user, loading, error] = useAuthState ( auth )
    const openModalCartWindow = () => {
        dispatch ( openModalCard ( {value: true} ) )
    }
    const closeModal = () => {
        dispatch ( openModalCard ( {value: false} ) )
    }
    const totalPrice = calcTotalPrice ( cardStore )

    return (
        <AppBar color={ "secondary" } position="static">
            <Toolbar>
                <Modal open={ isModalOpen }
                       onClose={ closeModal }
                       aria-labelledby="simple-modal-title"
                       aria-describedby="simple-modal-description">
                    { <Cart/> }
                </Modal>
                <Grid container justify={ "flex-start" } style={ {gap: '20px'} }>
                    { user
                        ?
                        <><Button onClick={ () => auth.signOut () } variant={ 'outlined' }>Logout</Button>
                            <NavLink to={ GOODS_ROUTE }>< Button variant={ 'outlined' }>Goods</Button></NavLink></>
                        :
                        <NavLink to={ LOGIN_ROUTE }>< Button variant={ 'outlined' }>Login</Button></NavLink>
                    }
                </Grid>
                { totalPrice > 0 && <div className={classes.totalPrice} > { totalPrice } rub</div> }
                <Button disabled={ cardStore.length < 1 }  className={classes.cartButton}
                        size={ 'large' }
                        onClick={ openModalCartWindow } variant={ 'outlined' }>cart</Button>
            </Toolbar>
        </AppBar>
    );
});