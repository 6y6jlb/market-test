import {AppRootStateType} from "../bll/store";


export const loadState = ()=>{
    try {
        const serializedState = localStorage.getItem ( 'app-state' )
        if (!serializedState) {
            return undefined
        }
        console.log ( JSON.parse(serializedState))
        return JSON.parse(serializedState)
    }
    catch (err) {
        return undefined
    }
};
export const saveState = (state:AppRootStateType) =>{
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('app-state',serializedState)
    } catch (err) {
        //ignore
    }
};