import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux'

import routers from './routers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(
  routers,
  composeEnhancers(
  applyMiddleware(thunk)
  )
)
console.log(store.getState())

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
