import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import 'firebase/firestore'
import 'firebase/auth'
import {store} from './bll/store';
import {Provider} from "react-redux";
import firebase from "firebase";
import {ReactReduxFirebaseProvider,} from 'react-redux-firebase'
import {rrfConfig} from "./bll/firebaseConfig";
import {rootReducer} from "./bll/rootReducer";


const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
    // createFirestoreInstance // <- needed if using firestore
}

const rerenderEntireTree = () => {
    ReactDOM.render (
        <React.StrictMode>
            <Provider store={ store }>
                <ReactReduxFirebaseProvider { ...rrfProps }><App/></ReactReduxFirebaseProvider>
            </Provider>
        </React.StrictMode>,
        document.getElementById ( 'root' )
    );
}
rerenderEntireTree()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals ();


if (process.env.NODE_ENV !== 'development' && module.hot) {
    module.hot.accept ( './components/App/App', rerenderEntireTree )
}