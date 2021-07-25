import React from 'react';
import {NavBar} from "../NavBar/NavBar";
import './App.css';
import {Loader} from "../Loader/Loader";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "../AppRoute/AppRoute";
import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "firebase";

function App() {



    const auth = firebase.auth()
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
