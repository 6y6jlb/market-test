import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export type ItemType = {
    id: string, name: string, picUrl: string, priceRub: number, text: string
}
export type ItemInCardType = {
    id: string, name: string, picUrl: string, priceRub: number, text: string, count: number
}

export type ItemFromFireBaseType = {
    id: string, name: string, price: number, description: string
}
const goods: Array<ItemType> = []

export const slice = createSlice ( {
    name: 'card',
    initialState: {
        isModalOpen: false,
        store: goods,
        cardStore: [] as Array<ItemInCardType>
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
    setItemsFromFirebase,
    setItemFromFirebase,
    setEmptyStore,
    deleteAllItemFromCard
} = slice.actions