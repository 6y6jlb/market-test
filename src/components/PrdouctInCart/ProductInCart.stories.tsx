import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ReduxStoreProviderDecorator} from "../../stories/decorators/ReduxStoreProviderDecorator";


import {ProductInCart} from "./ProductInCart";


export default {
    title: 'market',
    component: ProductInCart,
    decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof ProductInCart>;


const Template: ComponentStory<typeof ProductInCart> = (args) =><ProductInCart item={{id:'124',count:1,priceRub:99,name:'name',text:'lorem ipsum',picUrl:''}}/>

export const ProductInCartExample = Template.bind ( {} );

