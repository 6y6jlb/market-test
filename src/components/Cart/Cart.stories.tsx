import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ReduxStoreProviderDecorator} from "../../stories/decorators/ReduxStoreProviderDecorator";
import {Cart} from "./Cart";


export default {
    title: 'market',
    component: Cart,
    decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof Cart>;


const Template: ComponentStory<typeof Cart> = (args) =><Cart/>

export const CartExample = Template.bind ( {} );

