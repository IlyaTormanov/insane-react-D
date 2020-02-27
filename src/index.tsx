import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from 'redux';

import {Provider} from "react-redux";
import {RootReducer} from "./redux/rootTypes";
import {TodoActions} from "./redux/actions";


export const store=createStore(RootReducer)
const todos=localStorage.getItem('todos')

if(todos){
   try {
       store.dispatch(TodoActions.ADD_TODO(JSON.parse(todos)))
   }
   catch (e) {
       console.error(e)
   }
}





ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
