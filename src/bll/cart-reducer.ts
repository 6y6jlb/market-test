import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {ItemType} from "./products-reducer";


export type ItemInCardType = {
    id: string, name: string, picUrl: string, priceRub: number, text: string, count: number
}


export const slice = createSlice ( {
    name: 'cart',
    initialState: {
        isModalOpen: false,
        cardStore: [] as Array<ItemInCardType>
    },
    reducers: {

        setItemsToCard(state, action: PayloadAction<{ items: Array<ItemInCardType> }>) {
            state.cardStore = action.payload.items
        },
        openModalCard(state, action: PayloadAction<{ value: boolean }>) {
            state.isModalOpen = action.payload.value
        },
        addItemToCard(state, action: PayloadAction<{ item: ItemType | ItemInCardType }>) {
            let tmpCount = 0
            state.cardStore?.map ( c => {
                if (c.id === action.payload.item.id) {
                    tmpCount++
                    return {...c, count: c.count++}
                } else {
                    return c
                }
            } )
            state.cardStore = !tmpCount ? state.cardStore.concat ( {
                ...action.payload.item,
                count: 1
            } ) : state.cardStore
        },
        deleteItemFromCard(state, action: PayloadAction<{ item: ItemInCardType }>) {
            if (action.payload.item.count < 2) {
                state.cardStore = state.cardStore.filter ( c => c.id !== action.payload.item.id )
            } else {
                state.cardStore.map ( c => {
                    if (c.id === action.payload.item.id) {
                        return {...c, count: c.count--}
                    }
                } )
            }
        },
        deleteAllItemFromCard(state) {
            state.cardStore = []
        },

    },
    extraReducers: builder => {
    }
} )
export const {
    openModalCard,
    addItemToCard,
    deleteItemFromCard,
    setItemsToCard,
    deleteAllItemFromCard
} = slice.actions