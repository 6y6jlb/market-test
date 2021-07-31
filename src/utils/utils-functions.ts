import {ItemInCardType} from "../bll/cart-reducer";


export const calcTotalPrice = (arr:ItemInCardType[]):number => {
    return arr.reduce((acc,el)=>acc+=el.priceRub*el.count,0)
}
