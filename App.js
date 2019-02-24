//Imports system
import React, {Component} from 'react';

//Imports files created
import Routes from './scr/router-flux/Router';
import Reducers from './scr/reducers/Reducers'
//
import {Provider} from 'react-redux';
import ReduxPromise from 'redux-promise';
import {createStore, applyMiddleware} from 'redux';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
let store = createStoreWithMiddleware(Reducers);

export default class App extends Component<Props> {
 
  render() {

    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
      );
  }
}
