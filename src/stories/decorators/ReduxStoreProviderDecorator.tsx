import React from 'react'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import {configureStore} from '@reduxjs/toolkit'
import {HashRouter} from 'react-router-dom'
import {AppRootStateType, store} from '../../bll/store'
import {rootReducer} from "../../bll/rootReducer";
import {ItemType} from "../../bll/products-reducer";
import {ItemInCardType} from "../../bll/cart-reducer";
import firebase from "firebase";
import {rrfConfig} from "../../bll/firebaseConfig";
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'


const initialGlobalState: AppRootStateType = {
    products: {store: [{} as ItemType]},
    card: {cardStore: [{} as ItemInCardType], isModalOpen: false},
    firebase: {} as any,
    form: {} as any
};

export const storyBookStore = configureStore ( {
    reducer: rootReducer,
    preloadedState: initialGlobalState,
    middleware: getDefaultMiddleware => getDefaultMiddleware ().prepend ( thunkMiddleware )
} );

export const ReduxStoreProviderDecorator = (storyFn: any) => (
    <Provider
        store={ storyBookStore }>{ storyFn () }
    </Provider>)


const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
    // createFirestoreInstance // <- needed if using firestore
}

export const ReactReduxFirebaseProviderDecorator = (storyFn: any) => (
    <ReactReduxFirebaseProvider {...rrfProps}>{ storyFn () }
    </ReactReduxFirebaseProvider>)
