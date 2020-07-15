import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App.js';
import {name as appName} from './app.json';

import { Provider } from 'react-redux';

import store from './src/store/index';

const ReduxSet = () => 
    <Provider store={store}>
        <App />
    </Provider>


AppRegistry.registerComponent(appName, () =>  ReduxSet );
