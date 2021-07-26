import {createSlice, PayloadAction} from "@reduxjs/toolkit"

export type ItemType = {
    id: string, name: string, picUrl: string, priceRub: number, text: string
}
export type ItemInCardType = {
    id: string, name: string, picUrl: string, priceRub: number, text: string, count: number
}

const goods: Array<ItemType> = [
    {id: '124124ertwe1fgfd1', name: 'чайник', picUrl: '', priceRub: 999, text: 'sdfsdg4'},
    {id: '124124erte1fgfd1', name: 'чайник 1', picUrl: '', priceRub: 888, text: 'swewerwe   dfsdg4'},
    {id: '12412asdtertew41fgfd1', name: 'чайник 2', picUrl: '', priceRub: 9944449, text: 'sdfsewe werwwewedg4'},
    {id: '1241241fewtetrgfd1', name: 'чайник 3', picUrl: '', priceRub: 123119, text: 'sdf we ww eesdg4'},
    {id: '1241241f234etweyrweyregfd1', name: 'чайник', picUrl: '', priceRub: 999, text: 'sdfsdg4'},
    {id: '124124erte1234fgfd1', name: 'чайник 1', picUrl: '', priceRub: 888, text: 'swewerwe   dfsdg4'},
    {id: '12412asd41fertwgfsdfd1', name: 'чайник 2', picUrl: '', priceRub: 9944449, text: 'sdfsewe werwwewedg4'},
    {id: '1241241fewtetrsdfgfd1', name: 'чайник 3', picUrl: '', priceRub: 123119, text: 'sdf we ww eesdg4'},
    {id: '124124sdf1eertwefgfd1', name: 'чайник', picUrl: '', priceRub: 999, text: 'sdfsdg4'},
    {id: '124124ersdfte1fgfd1', name: 'чайник 1', picUrl: '', priceRub: 888, text: 'swewerwe   dfsdg4'},
    {id: '12412asd41sdffdsfehgfd1', name: 'чайник 2', picUrl: '', priceRub: 9944449, text: 'sdfsewe werwwewedg4'},
    {id: '1241241fewtetsdfrgfd1', name: 'чайник 3', picUrl: '', priceRub: 123119, text: 'sdf we ww eesdg4'},
]

export const slice = createSlice ( {
    name: 'card',
    initialState: {
        isModalOpen: false,
        store: goods,
        cardStore: [] as Array<ItemInCardType>
    },
    reducers: {
        setItemsToCard(state, action: PayloadAction<{ items: Array<ItemInCardType> }>) {
            state.cardStore = action.payload.items
        },
        openModalCard(state, action: PayloadAction<{ value: boolean }>) {
            state.isModalOpen = action.payload.value
        },
        addItemToCard(state, action: PayloadAction<{ item: ItemType|ItemInCardType }>) {
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
            if (action.payload.item.count<2) {
                state.cardStore = state.cardStore.filter ( c => c.id !== action.payload.item.id )
            } else {
                state.cardStore.map ( c => {
                    if (c.id === action.payload.item.id) {
                        return {...c,count:c.count--}
                    }
                } )
            }
        },
    },
    extraReducers: builder => {
    }
} )
export const {openModalCard, addItemToCard, deleteItemFromCard,setItemsToCard} = slice.actions