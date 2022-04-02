import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/configureStore';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

