import { Goods } from "../components/Goods/Goods";
import {Login} from "../components/Login/Login";

export const LOGIN_ROUTE = '/LOGIN'

export const GOODS_ROUTE = '/GOODS'


export const publicRoutes =[
    {
        path:LOGIN_ROUTE,
        Component: Login
    },
    {
        path:GOODS_ROUTE,
        Component: Goods
    },

]

export const privateRoutes =[
  
    {
        path:GOODS_ROUTE,
        Component: Goods
    },
]

