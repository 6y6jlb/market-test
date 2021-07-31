import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import {slice as card} from "./cart-reducer";
import {slice as products} from "./products-reducer";
import {reducer as formReducer} from "redux-form/lib/reducer";

export const rootReducer = combineReducers ( {
    firebase: firebaseReducer,
    card: card.reducer,
    products: products.reducer,
    form: formReducer
} )