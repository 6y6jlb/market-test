import React, {useContext, useEffect} from 'react';
import {NavBar} from "../NavBar/NavBar";
import './App.css';
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Loader} from "../Loader/Loader";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "../AppRoute/AppRoute";
import axios from 'axios';

function App() {

    const {auth} = useContext ( Context )
    const [user,loading,error] = useAuthState ( auth )



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
