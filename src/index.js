/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';

/* eslint-disable no-underscore-dangle */
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
