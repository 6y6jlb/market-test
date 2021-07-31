import {combineReducers} from "redux";
import {configureStore} from '@reduxjs/toolkit'
import {slice as card} from "./cart-reducer";
import {slice as products} from "./products-reducer";
import { firebaseReducer } from "react-redux-firebase";
import firebase from "firebase";
import {loadState, saveState} from "../utils/localStorage";
import { reducer as formReducer } from 'redux-form';





// react-redux-firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAfmzi7dTBc9A7d_ROmo2Xgdl6C3QQPAXQ",
    authDomain: "market-f78b4.firebaseapp.com",
    databaseURL: "https://market-f78b4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "market-f78b4",
    storageBucket: "market-f78b4.appspot.com",
    messagingSenderId: "286699750905",
    appId: "1:286699750905:web:532866cbeecd66c5b66928",
    measurementId: "G-ZD3X9M150B"
};

// react-redux-firebase config
export const rrfConfig = {
    userProfile: 'users'
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
//init firebase
firebase.initializeApp ( firebaseConfig )


export const rootReducer = combineReducers ( {
    firebase: firebaseReducer,
    card: card.reducer,
    products:products.reducer,
    form: formReducer
} )

export type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<RootReducerType>




/*export const store = configureStore ( {

    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware (),


})*/
export const store = configureAppStore(loadState())


export default function configureAppStore(preloadedState:AppRootStateType) {
    const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware (),
        preloadedState,
    })
    return store
}

store.subscribe ( () => (
    saveState(store.getState())
) )

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store
