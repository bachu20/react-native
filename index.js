/** @format */
import React from 'react'
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux'
import configureStore from './src/store/store'

import App from './App';

// registerComponent second arg expected to be func that returns jsx
const RNRedux = () => <Provider store={configureStore()}>
  <App />
</Provider>

AppRegistry.registerComponent(appName, () => RNRedux);
