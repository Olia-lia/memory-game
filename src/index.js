import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/App.js';
import store from './store.js';


ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>, 
  document.getElementById('root')
);

