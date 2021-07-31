import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export type ItemType = {
    id: string, name: string, picUrl: string, priceRub: number, text: string
}

export type ItemFromFireBaseType = {
    id: string, name: string, price: number, description: string
}


export const slice = createSlice ( {
    name: 'products',
    initialState: {
        store:[] as  Array<ItemType>,
    },
    reducers: {
        setEmptyStore(state) {
            state.store = []
        },
        setItemsFromFirebase(state, action: PayloadAction<{ items: Array<ItemFromFireBaseType> }>) {
            const newState = action.payload.items.map ( i => {
                return {name: i.name, id: i.id, picUrl: '', priceRub: i.price * 100, text: i.description}
            } )
            state.store = newState
        },
        setItemFromFirebase(state, action: PayloadAction<{ item: ItemFromFireBaseType }>) {
            const newProduct = {
                name: action.payload.item.name,
                id: action.payload.item.id,
                picUrl: '',
                priceRub: action.payload.item.price * 100,
                text: action.payload.item.description
            }
            state.store.push ( newProduct )
        },
    },
    extraReducers: builder => {
    }
} )
export const {
    setItemsFromFirebase,
    setItemFromFirebase,
    setEmptyStore,
} = slice.actions