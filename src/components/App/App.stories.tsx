import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import App from "./App";
import {
    ReactReduxFirebaseProviderDecorator,
    ReduxStoreProviderDecorator
} from "../../stories/decorators/ReduxStoreProviderDecorator";


export default {
    title: 'market',
    component: App,
    decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof App>;


const Template: ComponentStory<typeof App> = (args) =><App/>

export const AppExample = Template.bind ( {} );

