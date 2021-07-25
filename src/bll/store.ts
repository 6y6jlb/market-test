import {combineReducers} from "redux";
import {configureStore} from '@reduxjs/toolkit'
import {slice as card} from "./card-reduxer";
import { firebaseReducer } from "react-redux-firebase";
import firebase from "firebase";


// react-redux-firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCZi4YI7VP4jHaVQdudRlNbwx1FGtPeBSo",
    authDomain: "chat-firebase-react-typescript.firebaseapp.com",
    projectId: "chat-firebase-react-typescript",
    storageBucket: "chat-firebase-react-typescript.appspot.com",
    messagingSenderId: "925417681230",
    appId: "1:925417681230:web:b326e0e52f353428056e1f"
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
    card: card.reducer
} )

export type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<RootReducerType>

export const store = configureStore ( {
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware ()
} )



// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store