import React, {useEffect} from 'react';
import {NavBar} from "../NavBar/NavBar";
import './App.css';
import {Loader} from "../Loader/Loader";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "../AppRoute/AppRoute";
import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "firebase";

import {useDispatch} from "react-redux";
import {setEmptyStore, setItemFromFirebase} from "../../bll/products-reducer";

function App() {
    //loadState ()
    const dispatch = useDispatch ()
    const auth = firebase.auth ()
    const [user, loading, error] = useAuthState ( auth )
    const ref = firebase.database ().ref ( 'goods/' )

    const setEmptyStoreCallback = () => {
        dispatch ( setEmptyStore () )
    }


    useEffect ( () => {
        ref.on ( "child_added", function (data) {
                const response = data.val ()
                const newProduct = {...response, id: data.key}
          dispatch(setItemFromFirebase( {item:newProduct}))
            }
        );
        return setEmptyStoreCallback()
    },[] )

    return (
        <BrowserRouter>
            <div>
                <NavBar/>
                { !loading ? <AppRoute/> : <Loader/> }
            </div>
        </BrowserRouter>
    );
}

export default App;
