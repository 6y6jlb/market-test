import {AppRootStateType} from "../bll/store";


export const loadState = ()=>{
    try {
        const serializedState = sessionStorage.getItem ( 'app-state' )
        if (!serializedState) {
            return undefined
        }
        return JSON.parse(serializedState)
    }
    catch (err) {
        return undefined
    }
};
export const saveState = (state:AppRootStateType) =>{
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('app-state',serializedState)
    } catch (err) {
        //ignore
    }
};