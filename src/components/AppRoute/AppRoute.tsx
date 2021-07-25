import React, {useContext} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import { GOODS_ROUTE, LOGIN_ROUTE, privateRoutes, publicRoutes} from '../../utils/routes';
import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "firebase";


const AppRoute = () => {
    const auth = firebase.auth()
    const [user,loading,error] = useAuthState ( auth )
    return user ?
        <Switch>
            { privateRoutes.map ( ({path, Component}) => {
                return <Route key={ path } path={ path } component={ Component } exact={ true }/>
            } ) }
            <Redirect to={ GOODS_ROUTE }/>
        </Switch>
        :
        <Switch>
            { publicRoutes.map ( ({path, Component}) => {
                return <Route key={ path } path={ path } component={ Component } exact={ true }/>
            } ) }
            <Redirect to={ GOODS_ROUTE }/>
        </Switch>
}


export default AppRoute;
