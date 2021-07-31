import {configureStore} from '@reduxjs/toolkit'
import firebase from "firebase";
import {loadState, saveState} from "../utils/localStorage";
import {rootReducer} from "./rootReducer";
import {firebaseConfig} from "./firebaseConfig";


export type RootReducerType = typeof rootReducer
export type AppRootStateType = ReturnType<RootReducerType>


//init firebase
firebase.initializeApp ( firebaseConfig )

export const store = configureAppStore ( loadState () )


export default function configureAppStore(preloadedState: AppRootStateType) {
    const store = configureStore ( {
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware (),
        preloadedState,
    } )
    return store
}

store.subscribe ( () => (
    saveState ( store.getState () )
) )

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store


if (process.env.NODE_ENV !== 'development' && module.hot) {
    module.hot.accept ( './rootReducer', () => store.replaceReducer ( rootReducer ) )
}