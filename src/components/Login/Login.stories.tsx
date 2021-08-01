import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ReduxStoreProviderDecorator} from "../../stories/decorators/ReduxStoreProviderDecorator";

import { Login } from './Login';


export default {
    title: 'market',
    component: Login,
    decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof Login>;


const Template: ComponentStory<typeof Login> = (args) =><Login/>

export const LoginExample = Template.bind ( {} );

