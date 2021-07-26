// @flow
import * as React from 'react';
import {AppBar, Button, Grid, Modal, Toolbar} from "@material-ui/core";
import {NavLink} from 'react-router-dom';
import {GOODS_ROUTE, LOGIN_ROUTE} from "../../utils/routes";
import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "firebase";
import {ItemInCardType, openModalCard} from "../../bll/card-reduxer";
import {useDispatch, useSelector} from "react-redux";
import {Card} from "../Card/Card";
import {AppRootStateType} from "../../bll/store";
import { calcTotalPrice } from '../../utils/utils-functions';

type Props = {};
export const NavBar: React.FC<Props> = () => {
    const isModalOpen = useSelector<AppRootStateType,boolean>(state=>state.card.isModalOpen)
    const cardStore = useSelector<AppRootStateType,Array<ItemInCardType>>(state=>state.card.cardStore)
    const dispatch = useDispatch()
    const closeModal = ()=> {
        dispatch ( openModalCard ( {value: false} ) )
    }

    const auth = firebase.auth ()
    const [user, loading, error] = useAuthState ( auth )



    const totalPrice = calcTotalPrice(cardStore)


    return (
        <AppBar color={ "secondary" } position="static">
            <Toolbar>
                <Modal style={{}}
                       open={isModalOpen}
                       onClose={closeModal}
                       aria-labelledby="simple-modal-title"
                       aria-describedby="simple-modal-description"
                >
                    {<Card/>}
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
                {totalPrice>0&&<div style={ {position:"relative",right:-98,bottom:-10,fontSize:'0.8em',color:"black",zIndex:1,width:'100px'} }>$ {totalPrice}</div>}
                <Button style={ {backgroundColor: 'rgb(255, 230, 242)',position:"relative"} } size={ 'large' } onClick={ () => {
                    dispatch ( openModalCard ( {value: true} ) )
                } } variant={ 'outlined' }>card</Button>
            </Toolbar>
        </AppBar>
    );
};