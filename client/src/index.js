import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import './index.scss';
import App from './App/App';

import store from './App/store/store';
import './i18n';

axios.defaults.baseURL = '//localhost:5000/api/';

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
